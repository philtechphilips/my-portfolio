"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const socials = [
  { href: 'https://github.com/philtechphilips', icon: 'ri-github-fill', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/pelumi-isola-84661821a', icon: 'ri-linkedin-fill', label: 'LinkedIn' },
  { href: 'https://x.com/softwareengng', icon: 'ri-twitter-x-line', label: 'X (Twitter)' },
  { href: 'https://www.instagram.com/philipstheprogrammer/', icon: 'ri-instagram-line', label: 'Instagram' },
];

const quickLinks = [
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const contactLinks = [
  { label: 'Email', href: 'mailto:pelumiisola87@gmail.com', external: false },
  { label: 'Phone', href: 'tel:07063623539', external: false },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing',
    external: true,
  },
];

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-rule bg-bg-alt">
      <div className="shell">

        {/* Main */}
        <div className="py-14 grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/my-image.jpeg"
                alt="Pelumi Isola"
                width={44}
                height={44}
                className="rounded-full object-cover w-11 h-11"
              />
              <span className="font-display font-light text-h5 text-fg">Pelumi Isola</span>
            </div>
            <p className="text-sm text-fg-muted leading-relaxed mb-6 max-w-sm">
              Security-focused full-stack developer building scalable, impactful solutions.
              Specializing in React, Node.js, Laravel, and modern web technologies.
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge"
                  aria-label={label}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="meta mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-fg-muted hover:text-fg transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="meta mb-5">Contact</h3>
            <ul className="space-y-3">
              {contactLinks.map(({ label, href, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm text-fg-muted hover:text-fg transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-7 border-t border-rule flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 meta">
            <span>© {new Date().getFullYear()} Pelumi Isola</span>
            <span className="hidden md:block w-px h-3 bg-rule" />
            <span className="hidden md:block">All rights reserved</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="badge"
            aria-label="Scroll to top"
          >
            <i className="ri-arrow-up-line" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
