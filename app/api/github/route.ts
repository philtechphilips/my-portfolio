import { NextResponse } from 'next/server';

interface CommitItem {
  sha: string;
  message: string;
  repo: string;
  fullRepo: string;
  branch: string;
  date: string;
  url: string;
}

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

// 100% Real Commits from Pelumi Isola's (@philtechphilips) public GitHub repositories
const REAL_FALLBACK_COMMITS: CommitItem[] = [
  {
    sha: 'eaf444a',
    message: 'Merge pull request #4 from philtechphilips/ft-admin-ui',
    repo: 'tailook',
    fullRepo: 'philtechphilips/tailook',
    branch: 'dev',
    date: '2026-08-16T20:37:22Z',
    url: 'https://github.com/philtechphilips/tailook/commit/eaf444aee279e429a988e1ce9a79c25adb942953',
  },
  {
    sha: 'aa93624',
    message: 'feat: 2fa',
    repo: 'tailook-api',
    fullRepo: 'Xttreme/tailook-api',
    branch: 'dev',
    date: '2026-08-16T20:35:51Z',
    url: 'https://github.com/Xttreme/tailook-api/commit/aa936249120580979e384d676e6e0049f18e4110',
  },
  {
    sha: '7af89a1',
    message: 'fix: pipeline',
    repo: 'offerra',
    fullRepo: 'philtechphilips/offerra',
    branch: 'main',
    date: '2026-06-26T16:34:08Z',
    url: 'https://github.com/philtechphilips/offerra/commit/7af89a1',
  },
  {
    sha: 'f7e86a7',
    message: 'feat: view cvs and edit cvs',
    repo: 'offerra',
    fullRepo: 'philtechphilips/offerra',
    branch: 'main',
    date: '2026-06-26T16:26:44Z',
    url: 'https://github.com/philtechphilips/offerra/commit/f7e86a7',
  },
  {
    sha: 'bf84ff2',
    message: 'fix: auth and tables tabs',
    repo: 'syncdb',
    fullRepo: 'philtechphilips/syncdb',
    branch: 'main',
    date: '2026-06-18T19:04:47Z',
    url: 'https://github.com/philtechphilips/syncdb/commit/bf84ff2',
  },
  {
    sha: '3dc4359',
    message: 'feat: browser login',
    repo: 'synqdb-agent',
    fullRepo: 'philtechphilips/synqdb-agent',
    branch: 'main',
    date: '2026-06-17T23:11:04Z',
    url: 'https://github.com/philtechphilips/synqdb-agent/commit/3dc4359',
  },
];

export async function GET() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'pelumi-portfolio',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  let totalContributions = 2849;
  let contributionWeeks: ContributionWeek[] = [];

  // Try GraphQL query for real contribution calendar
  if (token) {
    try {
      const gqlRes = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'User-Agent': 'pelumi-portfolio',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query {
            user(login: "philtechphilips") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      color
                    }
                  }
                }
              }
            }
          }`,
        }),
        next: { revalidate: 300 },
      });

      if (gqlRes.ok) {
        const gqlData = await gqlRes.json();
        const cal = gqlData.data?.user?.contributionsCollection?.contributionCalendar;
        if (cal) {
          totalContributions = cal.totalContributions || 2849;
          contributionWeeks = cal.weeks || [];
        }
      }
    } catch (e) {
      console.error('GitHub GraphQL fetch error:', e);
    }
  }

  try {
    // 1. Fetch user profile for repo count
    const userRes = await fetch('https://api.github.com/users/philtechphilips', {
      headers,
      next: { revalidate: 300 },
    });
    const userData = userRes.ok ? await userRes.json() : null;

    // 2. Fetch events stream
    const eventsEndpoint = token
      ? 'https://api.github.com/users/philtechphilips/events?per_page=30'
      : 'https://api.github.com/users/philtechphilips/events/public?per_page=30';

    const eventsRes = await fetch(eventsEndpoint, {
      headers,
      next: { revalidate: 60 },
    });

    if (eventsRes.ok) {
      const events = await eventsRes.json();
      const pushEvents = (events || [])
        .filter((e: any) => e.type === 'PushEvent' && e.payload?.head)
        .slice(0, 9);

      if (pushEvents.length > 0) {
        const commitPromises = pushEvents.map(async (event: any) => {
          const sha = event.payload.head;
          const fullRepo = event.repo.name;
          const repoName = fullRepo.split('/')[1] || fullRepo;
          const branch = event.payload.ref?.replace('refs/heads/', '') || 'main';

          try {
            const commitRes = await fetch(
              `https://api.github.com/repos/${fullRepo}/commits/${sha}`,
              { headers, next: { revalidate: 60 } }
            );

            if (!commitRes.ok) {
              return {
                sha: sha.slice(0, 7),
                message: 'Update and maintenance',
                repo: repoName,
                fullRepo,
                branch,
                date: event.created_at,
                url: `https://github.com/${fullRepo}/commit/${sha}`,
              };
            }

            const c = await commitRes.json();
            return {
              sha: sha.slice(0, 7),
              message: (c.commit?.message || 'Update').split('\n')[0].slice(0, 100),
              repo: repoName,
              fullRepo,
              branch,
              date: event.created_at,
              url: `https://github.com/${fullRepo}/commit/${sha}`,
            };
          } catch {
            return null;
          }
        });

        const results = await Promise.all(commitPromises);
        const liveCommits = results.filter((item): item is CommitItem => item !== null);

        if (liveCommits.length > 0) {
          return NextResponse.json({
            publicRepos: userData?.public_repos || 139,
            totalContributions,
            weeks: contributionWeeks,
            commits: liveCommits,
            authenticated: Boolean(token),
            live: true,
          });
        }
      }
    }

    // 3. Fallback: Fetch repos if events stream is empty
    const reposRes = await fetch(
      'https://api.github.com/users/philtechphilips/repos?sort=pushed&per_page=6',
      { headers, next: { revalidate: 60 } }
    );

    if (reposRes.ok) {
      const repos = await reposRes.json();
      const repoCommitPromises = repos.map(async (repo: any) => {
        try {
          const commitsRes = await fetch(
            `https://api.github.com/repos/philtechphilips/${repo.name}/commits?per_page=1`,
            { headers, next: { revalidate: 60 } }
          );
          if (!commitsRes.ok) return null;

          const commitData = await commitsRes.json();
          if (!commitData || !commitData.length) return null;

          const c = commitData[0];
          return {
            sha: c.sha.slice(0, 7),
            message: (c.commit?.message || 'Update').split('\n')[0].slice(0, 100),
            repo: repo.name,
            fullRepo: repo.full_name,
            branch: repo.default_branch || 'main',
            date: c.commit?.committer?.date || c.commit?.author?.date || repo.pushed_at,
            url: `https://github.com/philtechphilips/${repo.name}/commit/${c.sha}`,
          };
        } catch {
          return null;
        }
      });

      const results = await Promise.all(repoCommitPromises);
      const liveRepoCommits = results.filter((item): item is CommitItem => item !== null);

      if (liveRepoCommits.length > 0) {
        return NextResponse.json({
          publicRepos: userData?.public_repos || 139,
          totalContributions,
          weeks: contributionWeeks,
          commits: liveRepoCommits,
          authenticated: Boolean(token),
          live: true,
        });
      }
    }
  } catch (error) {
    console.error('GitHub API error:', error);
  }

  // Guaranteed fallback
  return NextResponse.json({
    publicRepos: 139,
    totalContributions,
    weeks: contributionWeeks,
    commits: REAL_FALLBACK_COMMITS,
    authenticated: Boolean(token),
    live: false,
  });
}
