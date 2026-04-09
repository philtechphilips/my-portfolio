"use client";

import React from 'react';
import { skills } from '@/app/data/mockData';

const categories = [
  { id: 'Frontend', label: 'Frontend', number: '01' },
  { id: 'Backend',  label: 'Backend',  number: '02' },
  { id: 'Tools',    label: 'Tools & Infrastructure', number: '03' },
] as const;

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 pb-8 border-b border-gray-200 dark:border-neutral-dark" data-aos="fade-up">
          <h2 className="font-[Monument-R] text-3xl md:text-5xl uppercase tracking-tight">
            Skills
          </h2>
          <p className="text-sm text-[#656464] dark:text-neutral-light max-w-sm leading-relaxed">
            Technologies I use to build secure, scalable applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-0" data-aos="fade-up" data-aos-delay="100">
          {categories.map(({ id, label, number }, catIdx) => {
            const categorySkills = skills.filter(s => s.category === id);
            return (
              <div
                key={id}
                className={`grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 py-10 ${
                  catIdx < categories.length - 1
                    ? 'border-b border-gray-200 dark:border-neutral-dark'
                    : ''
                }`}
              >
                {/* Category label */}
                <div className="flex md:flex-col gap-3 md:gap-1 md:pt-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#656464] dark:text-neutral-light">
                    {number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#232121] dark:text-background-light">
                    {label}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map(skill => (
                    <span
                      key={skill.id}
                      className="text-sm px-4 py-2 border border-gray-200 dark:border-neutral-dark text-[#232121] dark:text-neutral-light hover:border-gray-800 dark:hover:border-neutral-light transition-colors duration-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
