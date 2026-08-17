"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { projects, skillGroups } from '@/app/data/mockData';

const socials = [
  { href: 'https://github.com/philtechphilips', icon: 'ri-github-fill', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/pelumi-isola-84661821a', icon: 'ri-linkedin-fill', label: 'LinkedIn' },
  { href: 'https://x.com/softwareengng', icon: 'ri-twitter-x-line', label: 'X' },
  { href: 'mailto:pelumiisola87@gmail.com', icon: 'ri-mail-fill', label: 'Email' },
  { href: 'https://www.instagram.com/philipstheprogrammer/', icon: 'ri-instagram-line', label: 'Instagram' },
];

const roles = ['Full-Stack Developer', 'Backend Engineer', 'API Architect', 'Systems Builder'];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < word.length) {
      timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 40);
    } else {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

/* Counts come from the data, so they can't drift out of sync. */
const stats = [
  { value: '06', label: 'Years shipping' },
  { value: String(projects.length).padStart(2, '0'), label: 'Projects built' },
  {
    // De-duplicated: PostgreSQL and Redis appear under more than one stage.
    value: String(new Set(skillGroups.flatMap(g => g.tech)).size).padStart(2, '0'),
    label: 'Technologies',
  },
];

const HeroSection: React.FC = () => {
  const role = useTypewriter(roles);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-bg-alt/70 backdrop-blur-sm border-b border-rule min-h-screen flex flex-col pt-20 overflow-hidden">

      {/* ── The type ── */}
      <div className="flex-1 flex flex-col justify-center py-10 md:py-16 overflow-hidden relative">
        <div className="shell">
          <h1
            className={`font-display font-light leading-[0.85] tracking-[-0.05em] text-fg
                        transition-[opacity,transform] duration-1000 ease-aiko
                        ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(3.25rem, 13vw, 15rem)' }}
          >
            <span className="block text-gradient">Software</span>
            <span className="flex items-end gap-[3vw] md:pl-[8vw]">
              <span className="text-fg">Engineer</span>
              {/* Portrait sits in the negative space beside the descender */}
              <div className="hidden md:block relative group mb-[1.5vw]">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fg/20 via-fg/5 to-transparent blur-md group-hover:opacity-100 transition-opacity duration-500 opacity-60" />
                <Image
                  src="/images/my-image.jpeg"
                  alt="Pelumi Isola"
                  width={140}
                  height={140}
                  priority
                  className="relative w-[7vw] h-[7vw] max-w-[110px] max-h-[110px]
                             object-cover rounded-full border border-rule group-hover:border-fg-muted transition-colors duration-300"
                />
              </div>
            </span>
          </h1>
        </div>
      </div>

      {/* ── Three-column meta grid ── */}
      <div className="border-t border-rule bg-surface/30 backdrop-blur-md">
        <div className="shell grid md:grid-cols-3 md:divide-x divide-rule">
          {/* Role */}
          <div className="py-7 md:pr-8">
            <span className="meta block mb-3 text-fg-subtle">Currently</span>
            <p className="text-meta-lg uppercase text-fg font-medium inline-flex items-center gap-1.5 h-5 bg-bg/60 px-3 py-1 rounded-chip border border-rule/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {role}
              <span className="inline-block w-px h-[0.9em] bg-accent animate-pulse" />
            </p>
          </div>

          {/* Bio */}
          <div className="py-7 md:px-8 border-t md:border-t-0 border-rule">
            <span className="meta block mb-3 text-fg-subtle">About</span>
            <p className="text-sm md:text-base text-fg-muted leading-relaxed">
              I build secure, scalable full-stack applications. 6 years turning complex
              problems into clean, high-performance software systems.
            </p>
          </div>

          {/* CTAs */}
          <div className="py-7 md:pl-8 border-t md:border-t-0 border-rule">
            <span className="meta block mb-3 text-fg-subtle">Start here</span>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid group"
              >
                Resume
                <i className="ri-arrow-right-up-line text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline group backdrop-blur-sm"
              >
                Let&apos;s Talk
                <i className="ri-arrow-right-line text-base group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom rail: socials + counters ── */}
      <div className="border-t border-rule bg-bg/50">
        <div className="shell flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-6">
          <div className="flex items-center gap-2.5">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="badge hover:scale-110 hover:border-fg-muted transition-all duration-200"
              >
                <i className={icon} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            {stats.map(({ value, label }) => (
              <div key={label} className="group flex items-baseline gap-2.5 cursor-default">
                <span className="font-display font-light text-h3 text-fg tabular-nums leading-none group-hover:text-gradient transition-all duration-300">
                  {value}
                </span>
                <span className="meta group-hover:text-fg transition-colors duration-200">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
