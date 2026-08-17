"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';

const socials = [
  { href: 'https://github.com/philtechphilips', icon: 'ri-github-fill', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/pelumi-isola-84661821a', icon: 'ri-linkedin-fill', label: 'LinkedIn' },
  { href: 'https://x.com/softwareengng', icon: 'ri-twitter-x-line', label: 'X (Twitter)' },
  { href: 'https://www.instagram.com/philipstheprogrammer/', icon: 'ri-instagram-line', label: 'Instagram' },
  { href: 'mailto:pelumiisola87@gmail.com', icon: 'ri-mail-fill', label: 'Email' },
];

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('pelumiisola87@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section relative">
      <div className="shell">

        {/* Header */}
        <div className="max-w-2xl mb-16" data-aos="fade-up">
          <div className="eyebrow">
            <span className="meta">Get in touch</span>
          </div>
          <h2 className="font-display font-light text-display-l text-fg mb-6 text-gradient">
            Let&apos;s work together
          </h2>
          <p className="text-base md:text-lg text-fg-muted leading-relaxed mb-8">
            Have a project in mind or want to collaborate? I&apos;m always open to discussing
            new opportunities, technical architectures, and engineering challenges.
          </p>
          <a href="mailto:pelumiisola87@gmail.com" className="btn btn-solid group">
            <i className="ri-mail-send-line text-base" />
            Say Hello
            <i className="ri-arrow-right-line text-base group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <div className="glass-card p-8 rounded-xl flex flex-col group" data-aos="fade-up" data-aos-delay="100">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-fg mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-mail-line text-xl" />
            </div>
            <p className="meta mb-2">Email</p>
            <a
              href="mailto:pelumiisola87@gmail.com"
              className="font-display font-light text-h5 text-fg break-all mb-6 hover:text-gradient transition-colors"
            >
              pelumiisola87@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="mt-auto self-start btn btn-outline py-2 px-3 text-xs"
            >
              <i className={copied ? 'ri-check-line text-base text-success' : 'ri-file-copy-line text-base'} />
              {copied ? 'Email Copied!' : 'Copy Email'}
            </button>
          </div>

          {/* Phone */}
          <div className="glass-card p-8 rounded-xl flex flex-col group" data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-fg mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-phone-line text-xl" />
            </div>
            <p className="meta mb-2">Phone</p>
            <a
              href="tel:07063623539"
              className="font-display font-light text-h5 text-fg mb-6 hover:text-gradient transition-colors"
            >
              +234 706 362 3539
            </a>
            <p className="text-sm text-fg-muted mt-auto">
              Available Mon–Fri, 9AM–6PM WAT
            </p>
          </div>

          {/* Location */}
          <div className="glass-card p-8 rounded-xl flex flex-col group" data-aos="fade-up" data-aos-delay="300">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-fg mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-map-pin-line text-xl" />
            </div>
            <p className="meta mb-2">Location</p>
            <p className="font-display font-light text-h5 text-fg mb-6">
              Lagos, Nigeria
            </p>
            <p className="text-sm text-fg-muted mt-auto">
              Open to worldwide remote roles
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="pt-10 border-t border-rule/80" data-aos="fade-up">
          <p className="meta mb-5">Connect across networks</p>
          <div className="flex flex-wrap gap-2.5">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="badge hover:scale-110 hover:border-fg-muted transition-all"
                aria-label={label}
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
