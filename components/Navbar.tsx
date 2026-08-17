"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const RESUME_URL =
  'https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing';

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const Brand = (
    <>
      <div className="relative overflow-hidden rounded-full p-0.5 border border-rule group-hover:border-fg-muted transition-colors duration-300">
        <Image
          src="/images/my-image.jpeg"
          alt="Pelumi Isola"
          width={36}
          height={36}
          className="rounded-full object-cover w-8 h-8 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-meta-lg uppercase text-fg font-medium tracking-wider">Pelumi Isola</span>
    </>
  );

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 w-full z-40 bg-bg">
        <div className="shell py-5 flex items-center gap-3">{Brand}</div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ease-aiko ${
        scrolled || isMenuOpen
          ? 'bg-bg/80 backdrop-blur-xl border-b border-rule py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="shell flex justify-between items-center">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          {Brand}
        </button>

        {/* Center nav */}
        <div className="hidden lg:flex items-center gap-1 bg-surface/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-rule">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="relative px-3.5 py-1 text-meta-lg uppercase text-fg font-medium hover:text-fg transition-colors duration-200 group rounded-full"
            >
              {label}
              <span className="absolute inset-0 rounded-full bg-fg/10 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 btn btn-outline py-2 px-3.5 text-xs group"
          >
            <span>Resume</span>
            <i className="ri-arrow-right-up-line text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>

          <span className="hidden md:block w-px h-4 bg-rule" />

          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden badge"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-aiko bg-bg border-t border-rule ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="shell py-4 flex flex-col">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-left py-3.5 text-meta-lg uppercase text-fg-muted hover:text-fg border-b border-rule transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 text-meta-lg uppercase text-fg-muted hover:text-fg transition-colors duration-200 flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
            <i className="ri-arrow-right-up-line text-sm" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
