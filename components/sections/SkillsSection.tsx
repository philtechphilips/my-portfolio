"use client";

import React, { useEffect } from 'react';
import { skills } from '@/app/data/mockData';
import { Skill } from '@/types';
import AOS from 'aos';

interface SkillRowProps {
  number: string;
  label: string;
  items: Skill[];
  reverse?: boolean;
  speed?: string;
}

const SkillRow: React.FC<SkillRowProps> = ({
  number,
  label,
  items,
  reverse = false,
  speed = '40s',
}) => {
  // 4 copies ensures seamless loop at any screen width
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="flex items-stretch border-t border-gray-200 dark:border-neutral-dark overflow-hidden group"
      data-aos="fade-up"
    >
      {/* Fixed left label */}
      <div className="flex-shrink-0 flex flex-col justify-center py-7 pr-6 pl-5 md:pl-20 min-w-[130px] md:min-w-[220px] border-r border-gray-200 dark:border-neutral-dark">
        <span className="text-[10px] font-bold text-[#656464] dark:text-neutral-light uppercase tracking-[0.3em]">
          {number}
        </span>
        <span className="text-sm md:text-base font-bold uppercase tracking-widest mt-1 font-[Monument-R]">
          {label}
        </span>
      </div>

      {/* Scrolling ticker */}
      <div className="flex-1 overflow-hidden py-7 pl-6">
        <div
          className={`flex items-center gap-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
          style={{ animationDuration: speed }}
        >
          {repeated.map((skill, i) => (
            <span
              key={`${skill.id}-${i}`}
              className={`flex-shrink-0 text-sm font-semibold px-5 py-2.5 transition-colors whitespace-nowrap ${
                i % 2 === 0
                  ? 'bg-gray-800 dark:bg-neutral-light text-white dark:text-background-dark'
                  : 'border border-gray-800 dark:border-neutral-light text-[#232121] dark:text-neutral-light'
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const frontendSkills = skills.filter(s => s.category === 'Frontend');
  const backendSkills = skills.filter(s => s.category === 'Backend');
  const toolsSkills = skills.filter(s => s.category === 'Tools');

  return (
    <section id="skills" className="py-20">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-20 mb-16" data-aos="fade-up">
        <h1
          className="font-[Monument-R] md:text-6xl text-3xl mb-8"
          style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
        >
          SKILLS
        </h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-sm text-[#656464] dark:text-neutral-light md:w-1/2 leading-relaxed">
            A curated collection of technologies and tools I use to build secure,
            scalable applications.
          </p>

          {/* Category counts */}
          <div className="flex items-center gap-8 md:gap-12">
            {[
              { count: frontendSkills.length, label: 'Frontend' },
              { count: backendSkills.length, label: 'Backend' },
              { count: toolsSkills.length, label: 'Tools' },
            ].map(({ count, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-bold font-[Monument-R]">{count}</span>
                <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker rows — full width */}
      <SkillRow number="01" label="Frontend" items={frontendSkills} speed="35s" />
      <SkillRow number="02" label="Backend"  items={backendSkills}  speed="50s" reverse />
      <SkillRow number="03" label="Tools"    items={toolsSkills}    speed="42s" />
      <div className="border-t border-gray-200 dark:border-neutral-dark" />

    </section>
  );
};

export default SkillsSection;
