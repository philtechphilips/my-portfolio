"use client";

import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { XVideo } from '@/types';

const X_PROFILE = 'https://x.com/softwareengng';

// X's public endpoint returns likes/replies but not view counts, so the footer
// would show a partial picture of how a post performed. Flip to true to show
// the like and reply counts it does return.
const SHOW_ENGAGEMENT = false;

// Shown only until real posts are configured in app/data/xVideos.ts, or if X is
// unreachable. No engagement numbers here — those are only ever shown when they
// come back live from X.
const FALLBACK_VIDEOS: XVideo[] = [
  {
    id: 'fallback-1',
    title: 'SynqDB AI Architecture & Multi-Database Demo',
    description:
      'Live breakdown connecting local PostgreSQL, MySQL, and Redis databases with AI query generation and sub-20ms execution.',
    url: X_PROFILE,
    tags: ['Database', 'AI', 'System Architecture'],
  },
  {
    id: 'fallback-2',
    title: 'Offerra Extension — ATS Resume Parsing Walkthrough',
    description:
      '1-click ATS application form detection for Greenhouse & Lever, automated resume breakdown, and LLM interview question predictor.',
    url: X_PROFILE,
    tags: ['Chrome Extension', 'AI', 'Automation'],
  },
  {
    id: 'fallback-3',
    title: 'Node.js & Redis Event-Driven Queue Pipelines',
    description:
      'Technical breakdown on building resilient message queues, worker failure recovery, and zero-downtime microservice architecture.',
    url: X_PROFILE,
    tags: ['Node.js', 'DevOps', 'Distributed Systems'],
  },
];

const formatPostDate = (value?: string): string | null => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const VideoCard: React.FC<{ video: XVideo; index: number; live: boolean }> = ({
  video,
  index,
  live,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playable = Boolean(video.videoUrl);
  const postedOn = formatPostDate(video.date);

  // Phone-shot clips are 9:16. Letterboxing those into a 16:9 box wastes most of
  // the card, so portrait sources get a taller frame.
  const [w, h] = video.aspectRatio ?? [16, 9];
  const frameClass = h > w ? 'aspect-[3/4]' : 'aspect-video';

  useEffect(() => {
    if (playing) videoRef.current?.play().catch(() => undefined);
  }, [playing]);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className="glass-card group rounded-xl border border-rule/80 hover:border-fg-muted/50 overflow-hidden flex flex-col justify-between transition-all duration-300"
    >
      <div>
        {/* Player — plays the real X video inline, never leaves the site */}
        <div className={`relative ${frameClass} bg-gradient-to-br from-bg-alt via-surface to-bg border-b border-rule flex items-center justify-center overflow-hidden group-hover:border-fg-muted/40 transition-colors`}>
          {playing && video.videoUrl ? (
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.poster}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full bg-black object-contain"
            />
          ) : (
            <>
              {video.poster ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={video.poster}
                  alt=""
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-mesh-pattern opacity-40" />
              )}

              {video.poster && <div className="absolute inset-0 bg-bg/30 dark:bg-black/40" />}

              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-chip bg-bg/80 backdrop-blur-md border border-rule text-xs meta">
                <i className="ri-play-circle-line text-fg/80" />
                <span>X VIDEO</span>
              </div>

              {video.duration && (
                <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded bg-fg/90 text-inverse-fg font-mono text-[11px] font-semibold">
                  {video.duration}
                </div>
              )}

              {playable ? (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="relative z-10 w-14 h-14 rounded-full bg-fg/10 border border-fg/20 backdrop-blur-md flex items-center justify-center text-fg group-hover:scale-110 group-hover:bg-fg group-hover:text-inverse-fg transition-all duration-300"
                  aria-label={`Play ${video.title}`}
                >
                  <i className="ri-play-fill text-2xl ml-0.5" />
                </button>
              ) : (
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-14 h-14 rounded-full bg-fg/10 border border-fg/20 backdrop-blur-md flex items-center justify-center text-fg group-hover:scale-110 group-hover:bg-fg group-hover:text-inverse-fg transition-all duration-300"
                  aria-label={`Play ${video.title} on X`}
                >
                  <i className="ri-play-fill text-2xl ml-0.5" />
                </a>
              )}
            </>
          )}
        </div>

        <div className="p-6">
          {video.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {video.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs meta font-medium px-2 py-0.5 rounded bg-fg/5 text-fg-muted border border-rule"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-display font-normal text-lg text-fg mb-3 group-hover:text-gradient transition-all line-clamp-2">
            {video.title}
          </h3>

          <p className="text-xs text-fg-muted leading-relaxed line-clamp-3 mb-4">
            {video.description}
          </p>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-rule/80 flex items-center justify-between meta text-xs">
        <span className="flex items-center gap-3 text-fg-subtle">
          {live && SHOW_ENGAGEMENT && video.views && (
            <span className="flex items-center gap-1">
              <i className="ri-eye-line" />
              {video.views}
            </span>
          )}
          {live && SHOW_ENGAGEMENT && typeof video.likes === 'number' && (
            <span className="flex items-center gap-1">
              <i className="ri-heart-line" />
              {video.likes}
            </span>
          )}
          {video.duration && (
            <span className="flex items-center gap-1">
              <i className="ri-time-line" />
              {video.duration}
            </span>
          )}
          {postedOn && <span>{postedOn}</span>}
        </span>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-fg font-medium group-hover:underline shrink-0"
        >
          {playable ? 'Open on X' : 'Watch on X'}
          <i className="ri-arrow-right-up-line text-xs" />
        </a>
      </div>
    </div>
  );
};

const ContentSection: React.FC = () => {
  const [videos, setVideos] = useState<XVideo[]>(FALLBACK_VIDEOS);
  const [live, setLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    let cancelled = false;

    const loadVideos = async () => {
      try {
        const res = await fetch('/api/x-videos');
        const data = await res.json();
        if (cancelled) return;

        if (Array.isArray(data.videos) && data.videos.length > 0) {
          setVideos(data.videos);
          setLive(Boolean(data.live));
        }
      } catch (error) {
        console.error('Error loading X videos:', error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadVideos();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="content" className="section bg-bg-alt/70 border-b border-rule relative overflow-hidden">

      {/* Background Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display font-light text-[clamp(180px,30vw,420px)] text-fg/[0.02] leading-none">
          MEDIA
        </span>
      </div>

      <div className="shell relative z-10">

        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-rule"
          data-aos="fade-up"
        >
          <div className="max-w-xl">
            <div className="eyebrow">
              <span className="meta">Featured Engineering Content</span>
            </div>
            <h2 className="font-display font-light text-h2 text-fg mb-4 text-gradient">
              X (Twitter) Videos & Demos
            </h2>
            <p className="text-base text-fg-muted leading-relaxed">
              Technical walkthroughs, AI product demos, and building in public video breakdowns shared on X (@softwareengng).
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={X_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid group"
            >
              <i className="ri-twitter-x-line text-base" />
              Follow @softwareengng
              <i className="ri-arrow-right-up-line text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* X Creator Banner */}
        <div className="glass-card p-6 md:p-8 rounded-xl border border-rule/80 mb-12 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-fg/10 border border-fg/20 flex items-center justify-center font-display text-h5 text-fg shrink-0">
              PI
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-display font-normal text-lg text-fg">Pelumi Isola</h3>
                <span className="text-xs meta font-mono px-2 py-0.5 rounded bg-bg-alt text-fg-muted border border-rule">@softwareengng</span>
                {live && (
                  <span className="flex items-center gap-1.5 text-xs meta font-mono px-2 py-0.5 rounded bg-fg/5 text-fg-muted border border-rule">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE FROM X
                  </span>
                )}
              </div>
              <p className="text-xs text-fg-muted mt-1">Building high-impact software, AI tools, and technical video content on X.</p>
            </div>
          </div>

          <a
            href={X_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-xs shrink-0"
          >
            <i className="ri-video-line text-sm" />
            View All Videos on X
            <i className="ri-arrow-right-up-line text-xs" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="glass-card rounded-xl border border-rule/80 overflow-hidden animate-pulse"
                >
                  <div className="aspect-video bg-fg/5 border-b border-rule" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 w-1/3 rounded bg-fg/5" />
                    <div className="h-4 w-4/5 rounded bg-fg/5" />
                    <div className="h-3 w-full rounded bg-fg/5" />
                    <div className="h-3 w-2/3 rounded bg-fg/5" />
                  </div>
                </div>
              ))
            : videos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} live={live} />
              ))}
        </div>

      </div>
    </section>
  );
};

export default ContentSection;
