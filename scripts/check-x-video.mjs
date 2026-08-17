#!/usr/bin/env node
/**
 * Checks whether an X post can be played on the site.
 *
 *   npm run check:x -- https://x.com/softwareengng/status/1234567890123456789
 *
 * Run with no arguments to check every URL in app/data/xVideos.ts.
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BROWSER_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

const syndicationToken = id => ((Number(id) / 1e15) * Math.PI).toString(6 ** 2).replace(/(0+|\.)/g, '');

const extractPostId = input => {
  const trimmed = input.trim();
  if (/^\d{10,25}$/.test(trimmed)) return trimmed;
  return trimmed.match(/status(?:es)?\/(\d{10,25})/)?.[1] ?? null;
};

async function readConfiguredUrls() {
  const source = await readFile(join(ROOT, 'app/data/xVideos.ts'), 'utf8');
  const block = source.match(/X_VIDEO_POSTS:\s*string\[\]\s*=\s*\[([\s\S]*?)\]/)?.[1] ?? '';
  return [...block.matchAll(/^\s*['"]([^'"]+)['"]/gm)].map(m => m[1]);
}

async function check(input) {
  const id = extractPostId(input);
  if (!id) return console.log(`✗ ${input}\n  Not a valid X post URL or ID.\n`);

  const res = await fetch(
    `https://cdn.syndication.twimg.com/tweet-result?id=${id}&lang=en&token=${syndicationToken(id)}`,
    { headers: { 'User-Agent': BROWSER_UA, Accept: 'application/json' } }
  );

  if (!res.ok) return console.log(`✗ ${id}\n  X returned HTTP ${res.status}.\n`);

  const post = await res.json();
  if (!post || post.__typename === 'TweetTombstone' || !post.id_str) {
    return console.log(`✗ ${id}\n  Post is deleted, private, or age-restricted.\n`);
  }

  const media = (post.mediaDetails || []).find(m => m.type === 'video' || m.type === 'animated_gif');
  if (!media) {
    const kinds = (post.mediaDetails || []).map(m => m.type).join(', ') || 'none';
    return console.log(`✗ ${id} (@${post.user?.screen_name})\n  No video on this post (media: ${kinds}).\n`);
  }

  const mp4 = (media.video_info?.variants || [])
    .filter(v => v.content_type === 'video/mp4')
    .sort((a, b) => (b.bitrate ?? 0) - (a.bitrate ?? 0))[0];

  const seconds = Math.round((media.video_info?.duration_millis ?? 0) / 1000);

  console.log(`✓ ${id} (@${post.user?.screen_name})`);
  console.log(`  ${(post.text || '').split('\n')[0].slice(0, 70)}`);
  console.log(`  duration: ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`);
  console.log(`  thumbnail: ${media.media_url_https ? 'yes' : 'missing'}`);
  console.log(`  plays on site: ${mp4 ? `yes (${mp4.url.split('?')[0]})` : 'no — falls back to a link to X'}\n`);
}

const args = process.argv.slice(2);
const urls = args.length > 0 ? args : await readConfiguredUrls();

if (urls.length === 0) {
  console.log('No post URLs given and none configured in app/data/xVideos.ts.');
  process.exit(0);
}

for (const url of urls) await check(url);
