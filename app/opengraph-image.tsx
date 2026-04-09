import { ImageResponse } from 'next/og';

export const alt = 'Pelumi Isola — Full-Stack Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAFAFA',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Top border accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: '#232121' }} />

        {/* Availability */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ fontSize: 13, color: '#656464', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Available for work
          </span>
        </div>

        {/* Name */}
        <div style={{ fontSize: 80, fontWeight: 700, color: '#232121', lineHeight: 1, marginBottom: 20, letterSpacing: '-2px' }}>
          Pelumi Isola
        </div>

        {/* Title */}
        <div style={{ fontSize: 32, color: '#656464', marginBottom: 48, fontWeight: 400 }}>
          Full-Stack Software Engineer
        </div>

        {/* Divider */}
        <div style={{ width: 64, height: 2, background: '#232121', marginBottom: 40 }} />

        {/* Stack */}
        <div style={{ fontSize: 16, color: '#656464', letterSpacing: '0.1em' }}>
          React · Node.js · TypeScript · Laravel · PostgreSQL · Docker
        </div>

        {/* Domain */}
        <div style={{ position: 'absolute', bottom: 60, right: 96, fontSize: 14, color: '#656464', letterSpacing: '0.1em' }}>
          pelumiisola.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
