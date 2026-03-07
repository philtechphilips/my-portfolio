"use client";

import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const techStack = [
  'React.js', 'Node.js', 'Laravel', 'TypeScript', 'PHP',
  'MongoDB', 'Redis', 'Docker', 'Next.js', 'Nest.js',
  'PostgreSQL', 'Azure', 'CI/CD', 'REST APIs', 'GraphQL',
];

const socials = [
  { href: 'https://github.com/philtechphilips', icon: 'ri-github-fill', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/pelumi-isola-84661821a', icon: 'ri-linkedin-fill', label: 'LinkedIn' },
  { href: 'https://x.com/softwareengng', icon: 'ri-twitter-x-line', label: 'X' },
  { href: 'mailto:pelumiisola87@gmail.com', icon: 'ri-mail-fill', label: 'Email' },
  { href: 'https://www.instagram.com/philipstheprogrammer/', icon: 'ri-instagram-line', label: 'Instagram' },
];

const roles = ['Full-Stack Developer', 'Backend Engineer', 'API Architect', 'Systems Builder'];

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' });
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // IntersectionObserver for count-up trigger
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const yearsCount = useCountUp(6, 1200, statsVisible);
  const projectsCount = useCountUp(15, 1200, statsVisible);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 md:px-20 pt-32 pb-24 overflow-hidden">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-[0.035] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, #232121 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      {/* Watermark */}
      <div className="absolute top-0 right-0 text-[clamp(180px,30vw,360px)] font-bold opacity-[0.025] select-none pointer-events-none font-[Monument-R] leading-none translate-x-8 -translate-y-4">
        PI
      </div>

      {/* Thin rule just below navbar */}
      <div className="absolute top-[4.5rem] left-0 right-0 h-px bg-gray-200 dark:bg-neutral-dark/40" />

      <div className="max-w-7xl w-full mx-auto">

        {/* ── Row 1: status badge + location ── */}
        <div
          className="flex items-center justify-between mb-14 md:mb-20"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <div className="inline-flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold border border-gray-800 dark:border-neutral-light rounded-full text-[#656464] dark:text-neutral-light px-4 py-1.5 uppercase tracking-wider">
              Available for Projects
            </span>
          </div>
          <span className="hidden md:flex items-center gap-1.5 text-xs text-[#656464] dark:text-neutral-light uppercase tracking-[0.25em]">
            <i className="ri-map-pin-line text-sm" />
            Lagos, Nigeria
          </span>
        </div>

        {/* ── Row 2: typewriter role + name ── */}
        <div
          className="flex items-center gap-4 mb-10 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-[0.35em] min-w-[160px] inline-flex items-center gap-[2px]">
            {displayed}
            <span className="inline-block w-[1px] h-[0.85em] bg-current animate-pulse ml-[1px]" />
          </span>
          <div className="h-px bg-gray-300 dark:bg-neutral-dark w-16 md:w-32 flex-shrink-0" />
          <span className="text-base md:text-lg font-semibold">Pelumi Isola</span>
        </div>

        {/* ── Main heading ── */}
        <div data-aos="fade-up" data-aos-delay="160">
          <h1
            className="uppercase text-[clamp(2.8rem,9vw,130px)] leading-[1.1] text-[#232121] dark:text-background-light font-[Monument-R] font-bold"
            style={{ letterSpacing: '2px' }}
          >
            Software
          </h1>
          <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-6">
            <div className="w-14 h-14 md:w-20 md:h-20 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center flex-shrink-0 overflow-hidden group cursor-default relative">
              <span className="absolute inset-0 bg-gray-800 dark:bg-neutral-light scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              <span className="text-lg md:text-3xl font-bold font-[Monument-R] relative z-10 group-hover:text-white dark:group-hover:text-background-dark transition-colors duration-300">+6</span>
            </div>
            <div className="relative">
              <h1
                className="uppercase text-[clamp(2.8rem,9vw,130px)] leading-[1.1] text-[#232121] dark:text-background-light font-[Monument-R] font-bold"
                style={{ letterSpacing: '2px' }}
              >
                Engineer
              </h1>
              <span className="absolute bottom-1 left-0 h-[3px] w-0 bg-gray-800 dark:bg-neutral-light animate-expand-width" />
            </div>
          </div>
        </div>

        {/* ── Live tech ticker strip ── */}
        <div
          className="my-14 md:my-20 border-y border-gray-200 dark:border-neutral-dark py-5 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="240"
        >
          <div className="animate-marquee gap-6" style={{ animationDuration: '30s' }}>
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="flex-shrink-0 flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-[#656464] dark:text-neutral-light"
              >
                {tech}
                <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-neutral-dark/60 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom two-column section ── */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-28">

          {/* Left: description + CTAs + social */}
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-base md:text-lg text-[#656464] dark:text-neutral-light leading-relaxed mb-10 max-w-lg">
              Turning ideas into secure, scalable applications. Specialized in full-stack
              development with a security-first approach — building solutions that matter.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 border-2 border-gray-800 dark:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
              >
                <span className="text-sm font-semibold">View Resume</span>
                <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-8 py-4 bg-gray-800 dark:bg-neutral-light text-white dark:text-background-dark hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300"
              >
                <span className="text-sm font-semibold">Let's Talk</span>
                <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mr-4">
                Connect
              </span>
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
                >
                  <i className={`${icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: stats with count-up */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-x-10 gap-y-14 content-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="border-l-2 border-gray-800 dark:border-neutral-light pl-5">
              <p className="text-4xl md:text-5xl font-bold font-[Monument-R] tabular-nums">
                {statsVisible ? yearsCount : 0}+
              </p>
              <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mt-1">
                Years Experience
              </p>
            </div>

            <div className="border-l-2 border-gray-800 dark:border-neutral-light pl-5">
              <p className="text-4xl md:text-5xl font-bold font-[Monument-R] tabular-nums">
                {statsVisible ? projectsCount : 0}+
              </p>
              <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mt-1">
                Projects Delivered
              </p>
            </div>

            <div className="border-l-2 border-gray-800 dark:border-neutral-light pl-5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-bold">Open to Work</p>
              </div>
              <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                Remote / Contract
              </p>
            </div>

            <div className="border-l-2 border-gray-800 dark:border-neutral-light pl-5">
              <p className="text-sm font-bold mb-1">Security-First</p>
              <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                Engineering Approach
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3" data-aos="fade-up" data-aos-delay="600">
        <div className="w-px h-16 bg-gray-200 dark:bg-neutral-dark/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-5 bg-gray-800 dark:bg-neutral-light animate-slide-down" />
        </div>
        <p className="text-[9px] text-[#656464] dark:text-neutral-light uppercase tracking-[0.3em]">Scroll</p>
      </div>

    </section>
  );
};

export default HeroSection;
