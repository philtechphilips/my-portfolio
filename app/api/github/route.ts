import { NextResponse } from 'next/server';

interface GitHubEvent {
  type: string;
  repo: { name: string };
  payload: {
    head?: string;
    ref?: string;
  };
  created_at: string;
}

const GH_HEADERS = {
  Accept: 'application/vnd.github.v3+json',
  'User-Agent': 'pelumi-portfolio',
};

export async function GET() {
  try {
    // 1. Fetch recent public push events
    const eventsRes = await fetch(
      'https://api.github.com/users/philtechphilips/events/public?per_page=30',
      { headers: GH_HEADERS, next: { revalidate: 300 } }
    );

    if (!eventsRes.ok) {
      throw new Error(`GitHub Events API ${eventsRes.status}`);
    }

    const events: GitHubEvent[] = await eventsRes.json();

    // 2. Filter PushEvents that have a head SHA
    const pushEvents = events
      .filter(e => e.type === 'PushEvent' && e.payload.head)
      .slice(0, 9);

    // 3. Fetch each commit's message via the git commits API
    const commitResults = await Promise.allSettled(
      pushEvents.map(async (event) => {
        const sha = event.payload.head!;
        const repo = event.repo.name;

        const commitRes = await fetch(
          `https://api.github.com/repos/${repo}/git/commits/${sha}`,
          { headers: GH_HEADERS, next: { revalidate: 300 } }
        );

        if (!commitRes.ok) return null;

        const commit = await commitRes.json();

        return {
          sha: sha.slice(0, 7),
          message: (commit.message as string).split('\n')[0].slice(0, 100),
          repo: repo.split('/')[1],
          fullRepo: repo,
          branch: event.payload.ref?.replace('refs/heads/', '') ?? 'main',
          date: event.created_at,
          url: `https://github.com/${repo}/commit/${sha}`,
        };
      })
    );

    const commits = commitResults
      .filter((r): r is PromiseFulfilledResult<NonNullable<Awaited<ReturnType<typeof Promise.resolve>>>> =>
        r.status === 'fulfilled' && r.value !== null
      )
      .map(r => r.value);

    return NextResponse.json({ commits });
  } catch (error: any) {
    console.error('Error fetching GitHub activity:', error);
    return NextResponse.json({ commits: [], error: error.message }, { status: 500 });
  }
}
