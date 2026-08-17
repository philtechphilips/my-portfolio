"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Every role is open at once — no accordion, nothing behind a click.
 * Same rhythm as the Skills section: oversized label on the left, detail on the
 * right. Separation is whitespace only; no rules or dividers.
 */

const experiences = [
  {
    company: 'AB-InBev',
    role: 'Backend Developer',
    type: 'Full-time',
    location: 'Remote',
    period: 'Mar 2024 — Present',
    achievements: [
      'Collaborated on smart safety application bug fixes, enhancing reliability across Africa',
      'Successfully launched application organization-wide throughout the continent',
      'Migrated queuing system from Redis/Bull to Azure Service Bus for better scalability',
      'Wrote comprehensive technical documentation published on Confluence',
    ],
  },
  {
    company: 'Paxform',
    role: 'Senior Software Engineer',
    type: 'Contract',
    location: 'Remote',
    period: 'Jan 2025 — Oct 2025',
    achievements: [
      'Integrated third-party APIs including Zoho CRM, Stripe, Google Drive, OneDrive, Dropbox, Xero, Smokeball and FYI',
      'Developed custom email templates with dynamic customization and cross-client compatibility',
      'Led code reviews and maintained quality standards using GitLab CI/CD pipelines',
      'Contributed to V2 dashboard redesign with improved state management and performance',
    ],
  },
  {
    company: 'Playa Music',
    role: 'Software Engineer',
    type: 'Full-time',
    location: 'Remote',
    period: 'Jul 2023 — Mar 2024',
    achievements: [
      'Integrated multiple AI models for personalized playlist and composition generation',
      'Built efficient APIs for data storage and retrieval using Node.js and MongoDB',
      'Implemented music recommendation and style analysis features',
    ],
  },
  {
    company: 'Xttreme Developers',
    role: 'Full-Stack Developer',
    type: 'Full-time',
    location: 'Remote',
    period: 'Jun 2020 — Jul 2023',
    achievements: [
      'Rebuilt company website with modern features and improved UX',
      'Developed web applications from Figma designs using Laravel and React',
      'Built Reyts Fintech P2P exchange with Redis, Node.js, and MongoDB',
      'Implemented security scans using CI/CD with Azure, GitLab, and GitHub',
    ],
  },
  {
    company: 'Philtech',
    role: 'Full-Stack Developer',
    type: 'Freelance',
    location: 'Remote',
    period: 'Apr 2020 — Oct 2022',
    achievements: [
      'Built full-stack school portal application (v1 & v2) using Laravel and Bootstrap',
      'Developed learning management system for bible school',
      'Managed domain hosting, deployment, and SEO optimization',
    ],
  },
];

const education = [
  {
    badge: 'HND',
    period: '2023 — 2025',
    title: 'Computer Engineering',
    school: 'Yaba College of Technology',
    notes: ['Graduated with Distinction', 'Best Graduating Computer Engineering Student'],
  },
  {
    badge: 'ND',
    period: '2018 — 2020',
    title: 'Computer Engineering',
    school: 'Yaba College of Technology',
    notes: ['Graduated with Distinction', 'Best Graduating Computer Engineering Student'],
  },
  {
    badge: 'NYSC',
    period: '2025',
    title: 'National Youth Service Corps',
    school: 'Federal Republic of Nigeria',
    notes: ['Exemption Certificate'],
  },
];

const JobExperience = () => {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('[data-anim="head"]', {
        y: 22,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: 'top 75%' },
      });

      gsap.utils.toArray<HTMLElement>('[data-anim="role"]').forEach(row => {
        gsap.fromTo(
          row,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: row, start: 'top 88%' },
          }
        );
      });
      ScrollTrigger.refresh();
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="py-section-sm md:py-section overflow-hidden relative">
      <div className="shell">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow">
            <span className="meta">Career Track</span>
          </div>
          <h2
            data-anim="head"
            className="font-display font-normal text-fg leading-[1.05] tracking-[-2px] mb-6 text-gradient"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
          >
            Experience
          </h2>
          <p data-anim="head" className="text-base md:text-lg text-fg-muted leading-relaxed">
            Six years across fintech, enterprise, and creative industries — from
            freelance builds to launching an application continent-wide.
          </p>
        </div>

        {/* Roles — Glass cards on timeline */}
        <div className="relative flex flex-col gap-6 md:gap-8 border-l border-rule/80 pl-4 md:pl-8 ml-2 md:ml-4">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              data-anim="role"
              className="glass-card p-6 md:p-8 rounded-xl border border-rule/80 hover:border-fg-muted/40 transition-all duration-300 relative"
            >
              {/* Timeline Node Accent */}
              <div className="absolute -left-[25px] md:-left-[41px] top-8 w-4 h-4 rounded-full bg-surface border-2 border-fg flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              <div className="grid md:grid-cols-12 gap-y-4 md:gap-x-8 items-start">
                {/* Left: Company & Period */}
                <div className="md:col-span-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="meta font-mono text-xs text-fg font-semibold bg-fg/10 border border-fg/20 px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    <span data-anim="detail" className="meta font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h3
                    data-anim="company"
                    className="font-display font-normal text-fg leading-[0.95] tracking-[-1px] mt-1"
                    style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)' }}
                  >
                    {exp.company}
                  </h3>
                </div>

                {/* Right: Role & Achievements */}
                <div className="md:col-span-8">
                  <div className="flex flex-wrap items-baseline gap-2 mb-4">
                    <p data-anim="detail" className="text-base md:text-lg text-fg font-medium">
                      {exp.role}
                    </p>
                    <span className="meta text-xs">
                      · {exp.type} ({exp.location})
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {exp.achievements.map(achievement => (
                      <li
                        key={achievement}
                        data-anim="detail"
                        className="text-sm md:text-base text-fg-muted leading-relaxed flex items-start gap-2.5"
                      >
                        <i className="ri-arrow-right-s-line text-fg/60 shrink-0 mt-1" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 md:mt-28">
          <h3
            data-anim="head"
            className="font-display font-normal text-fg leading-none tracking-[-2px] mb-10 text-gradient"
            style={{ fontSize: 'clamp(1.75rem, 3.4vw, 3rem)' }}
          >
            Education
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map(({ badge, period, title, school, notes }) => (
              <div key={badge} data-anim="role" className="glass-card p-6 rounded-xl border border-rule/80">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span data-anim="detail" className="meta-strong font-mono px-2.5 py-1 bg-fg/10 border border-fg/20 rounded-chip text-xs font-semibold">{badge}</span>
                  <span data-anim="detail" className="meta text-xs">{period}</span>
                </div>
                <p data-anim="detail" className="font-display text-h4 text-fg leading-tight mb-1">
                  {title}
                </p>
                <p data-anim="detail" className="text-sm text-fg-muted font-medium mb-4">
                  {school}
                </p>
                <ul className="flex flex-col gap-1.5 pt-3 border-t border-rule/60">
                  {notes.map(note => (
                    <li key={note} data-anim="detail" className="text-xs text-fg-muted leading-relaxed flex items-center gap-1.5">
                      <i className="ri-award-line text-fg/60 text-xs" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-20">
          <a
            href="https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline group"
          >
            View full resume
            <i className="ri-arrow-right-up-line text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default JobExperience;
