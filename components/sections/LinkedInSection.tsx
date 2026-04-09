"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const profileStats = [
  { value: '500+', label: 'Connections' },
  { value: '6+', label: 'Yrs Active' },
  { value: '50+', label: 'Posts' },
];

const posts = [
  "7420265229416026112",
  "7419674617885282305",
  "7390849754068496384",
];

const LinkedInSection = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="py-24 px-5 md:px-20 bg-gray-100 dark:bg-[#0C0C0C] overflow-hidden relative">

      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04] dark:opacity-[0.03]">
        <span className="text-[clamp(220px,35vw,480px)] font-bold font-[Monument-R] text-gray-800 dark:text-white leading-none">
          LI
        </span>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-300 dark:bg-neutral-800" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header + Profile card ── */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">

          {/* Left: Heading + CTA */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-gray-400 dark:bg-neutral-600" />
              <span className="text-[10px] text-gray-500 dark:text-neutral-500 uppercase tracking-[0.35em] font-semibold">
                Professional Network
              </span>
            </div>
            <h2 className="font-[Monument-R] text-3xl md:text-5xl uppercase tracking-tight leading-tight text-gray-900 dark:text-white mb-8">
              Featured<br />LinkedIn
            </h2>
            <p className="text-gray-500 dark:text-neutral-400 text-base leading-relaxed max-w-sm mb-10">
              Deeper dives into technology, career growth, and the professional journey of building in public.
            </p>
            <a
              href="https://www.linkedin.com/in/pelumi-isola-84661821a"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
            >
              <i className="ri-linkedin-box-fill text-xl" />
              <span className="text-sm font-bold uppercase tracking-widest">Connect on LinkedIn</span>
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Profile card */}
          <div data-aos="fade-up" data-aos-delay="150">
            <div className="border border-gray-300 dark:border-neutral-800 p-8 relative">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gray-800 dark:border-white" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gray-800 dark:border-white" />

              {/* Profile header */}
              <div className="flex items-start gap-5 mb-10">
                <div className="w-16 h-16 border border-gray-300 dark:border-neutral-600 flex items-center justify-center flex-shrink-0 bg-gray-200 dark:bg-neutral-900">
                  <span className="font-[Monument-R] text-xl text-gray-800 dark:text-white font-bold">PI</span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-lg leading-tight">Pelumi Isola</p>
                  <p className="text-gray-500 dark:text-neutral-400 text-sm mt-1 leading-snug">
                    Senior Software Engineer · Backend Developer
                  </p>
                  <p className="text-gray-400 dark:text-neutral-600 text-xs mt-2 flex items-center gap-1">
                    <i className="ri-map-pin-line text-xs" />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-neutral-800 mb-6" />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {profileStats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-gray-900 dark:text-white font-bold text-2xl font-[Monument-R]">{value}</p>
                    <p className="text-gray-400 dark:text-neutral-600 text-[9px] uppercase tracking-widest mt-1">{label}</p>
                  </div>
                ))}
              </div>

              {/* Open to work badge */}
              <div className="mt-6 pt-5 border-t border-gray-200 dark:border-neutral-800 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-gray-500 dark:text-neutral-400 text-xs uppercase tracking-widest">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Posts: staggered layout ── */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {posts.map((postId, index) => (
            <div
              key={postId}
              className="relative group"
              style={{ marginTop: index * 40 }}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Post label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] text-gray-400 dark:text-neutral-600 font-bold uppercase tracking-[0.3em]">
                  {String(index + 1).padStart(2, '0')} — Post
                </span>
                <div className="flex-1 h-px bg-gray-300 dark:bg-neutral-800" />
              </div>

              {/* Post iframe */}
              <div className="relative overflow-hidden border border-gray-300 dark:border-neutral-800 group-hover:border-gray-500 dark:group-hover:border-neutral-600 transition-colors duration-500">
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${postId}?collapsed=1`}
                  height="284"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={`LinkedIn post ${index + 1}`}
                  style={{ display: 'block', verticalAlign: 'top' }}
                  className="brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                {/* Left accent bar on hover */}
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gray-800 dark:bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LinkedInSection;
