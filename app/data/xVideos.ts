/**
 * Your real X (Twitter) video posts.
 *
 * Paste the URL of each post that contains a video — nothing else is needed.
 * Everything shown on the site (title, thumbnail, duration, likes, date, the
 * playable video itself) is fetched live from X at request time and cached.
 *
 * How to get a URL: open the post on X -> "..." menu -> "Copy link to post".
 * Both x.com and twitter.com links work, and a bare post ID works too.
 *
 * Order here is the order shown on the site. The section displays the first 3
 * that resolve, so keep your best demo at the top.
 */
export const X_VIDEO_POSTS: string[] = [
  // "Hardcoding API keys in 2026??? 😭" — security practices
  'https://x.com/softwareengng/status/2088171120239222814',
  // "If your entire debugging strategy is console.log(), bro… we need to talk."
  'https://x.com/softwareengng/status/2087438260922368498',
  // "In this era of AI, I believe code ownership is more important than ever."
  'https://x.com/softwareengng/status/2087687876003652020',

  // Your other video posts — swap any of these in:
  // 'https://x.com/softwareengng/status/2087124088032477247', // "you don't know what to build ke?"
  // 'https://x.com/softwareengng/status/2087186829288104204', // AI websites vs real skill
  // 'https://x.com/softwareengng/status/2088351645688041619', // why a portfolio matters
  // 'https://x.com/softwareengng/status/2088551915747524904', // time in software engineering
];

/** Handle used for profile links and the "Watch on X" fallback. */
export const X_HANDLE = 'softwareengng';
