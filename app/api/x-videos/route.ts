import { NextResponse } from 'next/server';
import { XVideo } from '@/types';
import { X_HANDLE, X_VIDEO_POSTS } from '@/app/data/xVideos';

// Real video posts are read from X's public syndication endpoint — the same one
// that powers embedded posts on the web. It needs no API key and no credits,
// and it returns the MP4 variants, so the video plays on this site instead of
// bouncing the visitor over to X.
//
// X's paid v2 API is only used when X_AUTO_DISCOVER=true, to auto-discover new
// video posts without editing app/data/xVideos.ts. See .env.example.

export const revalidate = 21600; // 6 hours

const SYNDICATION_ENDPOINT = 'https://cdn.syndication.twimg.com/tweet-result';
const BROWSER_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const MAX_VIDEOS = 3;

interface SyndicationVariant {
  content_type: string;
  bitrate?: number;
  url: string;
}

interface SyndicationMedia {
  type: string;
  media_url_https?: string;
  video_info?: {
    duration_millis?: number;
    aspect_ratio?: [number, number];
    variants?: SyndicationVariant[];
  };
  ext?: { mediaStats?: { viewCount?: number | string } };
}

/**
 * The syndication endpoint requires a token derived from the post ID. This is
 * the same derivation the official embed widget uses.
 */
const syndicationToken = (id: string): string =>
  ((Number(id) / 1e15) * Math.PI).toString(6 ** 2).replace(/(0+|\.)/g, '');

/** Accepts a full x.com/twitter.com post URL or a bare numeric post ID. */
const extractPostId = (input: string): string | null => {
  const trimmed = input.trim();
  if (/^\d{10,25}$/.test(trimmed)) return trimmed;
  return trimmed.match(/status(?:es)?\/(\d{10,25})/)?.[1] ?? null;
};

const formatDuration = (ms?: number): string | undefined => {
  if (!ms) return undefined;
  const total = Math.round(ms / 1000);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
};

const compactCount = (value?: number | string): string | undefined => {
  const n = typeof value === 'string' ? Number(value) : value;
  if (!n || Number.isNaN(n)) return undefined;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return String(n);
};

/** Post text minus trailing t.co links and hashtags, split into headline + body. */
const splitText = (raw: string): { title: string; description: string } => {
  const cleaned = raw
    .replace(/https?:\/\/t\.co\/\w+/g, '')
    .replace(/\s+$/g, '')
    .trim();

  const lines = cleaned.split('\n').map(l => l.trim()).filter(Boolean);
  const headline = lines[0] ?? 'Video post';
  const title = headline.length > 90 ? `${headline.slice(0, 87).trimEnd()}…` : headline;

  // X truncates the text of long posts, so the body often stops mid-sentence
  // once the trailing t.co link is stripped.
  const body = lines.slice(1).join(' ') || headline;
  const description = /[.!?…"')\]]$/.test(body) ? body : `${body}…`;

  return { title, description };
};

async function fetchVideoPost(id: string): Promise<XVideo | null> {
  const url = `${SYNDICATION_ENDPOINT}?id=${id}&lang=en&token=${syndicationToken(id)}`;

  const res = await fetch(url, {
    headers: { 'User-Agent': BROWSER_UA, Accept: 'application/json' },
    next: { revalidate },
  });

  if (!res.ok) return null;

  const post = await res.json();
  // Deleted / protected / age-restricted posts come back as a tombstone.
  if (!post || post.__typename === 'TweetTombstone' || !post.id_str) return null;

  const media: SyndicationMedia | undefined = (post.mediaDetails || []).find(
    (m: SyndicationMedia) => m.type === 'video' || m.type === 'animated_gif'
  );
  if (!media) return null;

  const mp4 = (media.video_info?.variants || [])
    .filter(v => v.content_type === 'video/mp4')
    .sort((a, b) => (b.bitrate ?? 0) - (a.bitrate ?? 0))[0];

  const { title, description } = splitText(post.text || '');
  const handle = post.user?.screen_name || X_HANDLE;

  return {
    id: post.id_str,
    title,
    description,
    url: `https://x.com/${handle}/status/${post.id_str}`,
    poster: media.media_url_https,
    // Relayed through /api/x-video — see that route for why a direct URL 403s.
    videoUrl: mp4 ? `/api/x-video?src=${encodeURIComponent(mp4.url)}` : undefined,
    duration: formatDuration(media.video_info?.duration_millis),
    date: post.created_at,
    likes: post.favorite_count ?? undefined,
    replies: post.conversation_count ?? undefined,
    views: compactCount(media.ext?.mediaStats?.viewCount),
    tags: (post.entities?.hashtags || [])
      .map((h: { text: string }) => h.text)
      .filter(Boolean)
      .slice(0, 3),
    aspectRatio: media.video_info?.aspect_ratio,
  };
}

/**
 * Optional: ask the paid v2 API which of your recent posts have video, so new
 * uploads appear without editing the URL list. Costs credits per read, so it is
 * off unless X_AUTO_DISCOVER=true and a bearer token is present.
 */
async function resolveUserId(token: string): Promise<string | null> {
  // An explicit ID skips a billable user read.
  if (process.env.NEXT_PUBLIC_TWITTER_ID) return process.env.NEXT_PUBLIC_TWITTER_ID;

  try {
    const res = await fetch(`https://api.twitter.com/2/users/by/username/${X_HANDLE}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 604800 }, // 7 days — a handle's ID never changes
    });

    if (!res.ok) {
      console.error(`X user lookup failed with ${res.status}`);
      return null;
    }

    return (await res.json()).data?.id ?? null;
  } catch (error) {
    console.error('X user lookup error:', error);
    return null;
  }
}

async function discoverPostIds(): Promise<string[]> {
  const token = process.env.X_BEARER_TOKEN;
  if (process.env.X_AUTO_DISCOVER !== 'true' || !token) return [];

  const userId = await resolveUserId(token);
  if (!userId) return [];

  try {
    const res = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?max_results=25&exclude=replies,retweets` +
        `&tweet.fields=attachments&expansions=attachments.media_keys&media.fields=type`,
      { headers: { Authorization: `Bearer ${token}` }, next: { revalidate } }
    );

    if (!res.ok) {
      console.error(`X API auto-discovery failed with ${res.status}`);
      return [];
    }

    const data = await res.json();
    const videoKeys = new Set<string>(
      (data.includes?.media || [])
        .filter((m: { type: string }) => m.type === 'video' || m.type === 'animated_gif')
        .map((m: { media_key: string }) => m.media_key)
    );

    return (data.data || [])
      .filter((t: { attachments?: { media_keys?: string[] } }) =>
        (t.attachments?.media_keys || []).some(k => videoKeys.has(k))
      )
      .map((t: { id: string }) => t.id);
  } catch (error) {
    console.error('X API auto-discovery error:', error);
    return [];
  }
}

export async function GET() {
  const curatedIds = X_VIDEO_POSTS.map(extractPostId).filter((id): id is string => Boolean(id));
  const discoveredIds = await discoverPostIds();

  // Curated order wins; discovered posts fill any remaining slots.
  const ids = Array.from(new Set([...curatedIds, ...discoveredIds]));

  if (ids.length === 0) {
    return NextResponse.json({
      videos: [],
      live: false,
      handle: X_HANDLE,
      message:
        'No X video posts configured yet. Add post URLs to app/data/xVideos.ts to show real videos.',
    });
  }

  try {
    const results = await Promise.all(ids.map(id => fetchVideoPost(id).catch(() => null)));
    const videos = results.filter((v): v is XVideo => v !== null).slice(0, MAX_VIDEOS);

    return NextResponse.json({
      videos,
      live: videos.length > 0,
      handle: X_HANDLE,
      ...(videos.length === 0 && {
        message: 'Configured posts could not be loaded from X (deleted, private, or no video).',
      }),
    });
  } catch (error) {
    console.error('X video fetch error:', error);
    return NextResponse.json({ videos: [], live: false, handle: X_HANDLE });
  }
}
