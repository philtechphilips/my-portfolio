"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const HeroSection: React.FC = () => {
  const role = useTypewriter(roles);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' });
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`min-h-screen flex flex-col justify-center px-5 md:px-20 pt-28 pb-20 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl w-full mx-auto">

        {/* Availability */}
        <div className="flex items-center gap-2 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-[#656464] dark:text-neutral-light">
            Available for work
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-[Monument-R] uppercase text-[clamp(3rem,9vw,110px)] leading-[1.05] tracking-tight text-[#232121] dark:text-background-light mb-6">
          Software<br />Engineer
        </h1>

        {/* Role typewriter */}
        <p className="text-sm text-[#656464] dark:text-neutral-light mb-10 inline-flex items-center gap-1 h-5">
          {role}
          <span className="inline-block w-px h-[0.9em] bg-current animate-pulse" />
        </p>

        {/* Bio */}
        <p className="text-base md:text-lg text-[#656464] dark:text-neutral-light leading-relaxed mb-10 max-w-lg">
          I'm Pelumi Isola — I build secure, scalable full-stack applications.
          6 years turning complex problems into clean, reliable software.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-gray-800 dark:border-neutral-light text-sm font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-200"
          >
            View Resume
            <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-neutral-light text-white dark:text-background-dark text-sm font-medium hover:opacity-80 transition-opacity duration-200"
          >
            Let's Talk
            <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-1">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 border border-gray-300 dark:border-neutral-dark flex items-center justify-center text-sm hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-200"
            >
              <i className={icon} />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
