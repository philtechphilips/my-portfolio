import { NextResponse } from 'next/server';

// X's video CDN 403s any request carrying a Referer outside x.com/twitter.com,
// and browsers always attach one for <video src>. The referrerpolicy attribute
// is not honoured on media elements, so the clip has to be relayed through the
// server, which can simply omit the header. Range requests are passed straight
// through so the browser still gets seeking and progressive playback.

const ALLOWED_HOSTS = new Set(['video.twimg.com']);

export async function GET(request: Request) {
  const src = new URL(request.url).searchParams.get('src');
  if (!src) {
    return NextResponse.json({ error: 'Missing src parameter.' }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(src);
  } catch {
    return NextResponse.json({ error: 'Invalid src parameter.' }, { status: 400 });
  }

  // Without this the route would be an open proxy for arbitrary URLs.
  if (target.protocol !== 'https:' || !ALLOWED_HOSTS.has(target.hostname)) {
    return NextResponse.json({ error: 'Host not allowed.' }, { status: 403 });
  }

  const range = request.headers.get('range');

  try {
    const upstream = await fetch(target, {
      headers: range ? { Range: range } : {},
      // Explicitly no Referer — this is the whole point of the relay.
      referrerPolicy: 'no-referrer',
      cache: 'no-store',
    });

    if (!upstream.ok && upstream.status !== 206) {
      return NextResponse.json(
        { error: `Upstream responded with ${upstream.status}.` },
        { status: upstream.status === 404 ? 404 : 502 }
      );
    }

    const headers = new Headers();
    for (const header of ['content-type', 'content-length', 'content-range', 'accept-ranges']) {
      const value = upstream.headers.get(header);
      if (value) headers.set(header, value);
    }
    headers.set('Cache-Control', 'public, max-age=86400');

    return new NextResponse(upstream.body, { status: upstream.status, headers });
  } catch (error) {
    console.error('X video proxy error:', error);
    return NextResponse.json({ error: 'Failed to load video.' }, { status: 502 });
  }
}
