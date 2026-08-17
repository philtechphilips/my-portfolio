"use client";

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillGroups } from '@/app/data/mockData';

/**
 * Scale is the only hierarchy device: the stage label runs oversized in Chillax
 * and the stack sits beside it as fine print. No rules, boxes, chips or icons —
 * the size contrast does all the separating.
 *
 * The six stages read left-to-right through the delivery lifecycle, which is the
 * point the section is making: build it, ship it, run it.
 *
 * Cloud/DevOps terms are set at full contrast against the muted rest, so the
 * infrastructure story lands without adding colour or weight to the palette.
 */
const EMPHASIS = new Set([
  'AWS',
  'Docker',
  'Linux',
  'Terraform',
  'CI/CD',
  'System Design',
  'GitHub Actions',
  'Nginx',
]);

const SkillsSection: React.FC = () => {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    // Honour the OS setting — the section must read fine with no motion at all.
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

      gsap.utils.toArray<HTMLElement>('[data-anim="row"]').forEach(row => {
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
    <section id="skills" ref={root} className="py-section-sm md:py-section relative">
      <div className="shell">

        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="eyebrow">
            <span className="meta">Tech Stack & Capabilities</span>
          </div>
          <h2
            data-anim="head"
            className="font-display font-normal text-fg leading-[1.05] tracking-[-2px] mb-6 text-gradient"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
          >
            Build it, ship it, run it.
          </h2>
          <p data-anim="head" className="text-base md:text-lg text-fg-muted leading-relaxed">
            End-to-end engineering — from modern web interfaces and scalable backend microservices
            to automated cloud infrastructure and high-availability operations.
          </p>
        </div>

        {/* Six stages as an editorial list. The glass-card wrapper this used to
            carry rendered as an invisible box in dark mode — all of its padding,
            none of its edge — so separation is a hairline rule instead, and the
            label column is narrowed to give the stack room to breathe. */}
        <div className="flex flex-col border-t border-rule">
          {skillGroups.map(({ label, tech }, index) => (
            <div
              key={label}
              data-anim="row"
              className="border-b border-rule py-6 md:py-7 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors duration-300 hover:bg-fg/[0.015]"
            >
              {/* Stage label + index */}
              <div className="md:col-span-4 flex items-baseline gap-4">
                <span className="meta font-mono text-fg-subtle text-xs tabular-nums shrink-0 pt-1">
                  0{index + 1}
                </span>
                <h3
                  className="font-display font-normal text-fg leading-[0.95] tracking-[-1px]"
                  style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)' }}
                >
                  {label}
                </h3>
              </div>

              {/* Stack pills */}
              <div className="md:col-span-8 flex flex-wrap gap-2 md:justify-end">
                {tech.map((name) => (
                  <span
                    key={name}
                    data-anim="tech"
                    className={`inline-flex items-center px-3 py-1.5 rounded-chip text-sm font-medium transition-all duration-200 ${
                      EMPHASIS.has(name)
                        ? 'bg-inverse text-inverse-fg border border-transparent hover:scale-105'
                        : 'bg-surface border border-rule text-fg-muted hover:border-fg-muted hover:text-fg hover:scale-105'
                    }`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
