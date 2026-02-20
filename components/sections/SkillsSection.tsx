"use client";

import React, { useEffect, useState } from 'react';
import { skills } from '@/app/data/mockData';
import AOS from 'aos';

const SkillsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  // Group skills by category for the unique layout
  const frontendSkills = skills.filter(s => s.category === 'Frontend');
  const backendSkills = skills.filter(s => s.category === 'Backend');
  const toolsSkills = skills.filter(s => s.category === 'Tools');

  return (
    <section id="skills" className="py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header - Minimalistic style */}
        <div className="mb-16" data-aos="fade-up">
          <h1
            className="font-[Monument-R] md:text-6xl text-3xl mb-6"
            style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
          >
            SKILLS
          </h1>
          <p className="text-sm text-[#656464] dark:text-neutral-light md:w-2/3">
            A curated collection of technologies and tools I use to build secure, 
            scalable applications.
          </p>
        </div>

        {/* Unique Grid Layout - Asymmetric */}
        <div className="space-y-16">
          {/* Frontend - Larger emphasis */}
          <div className="space-y-6" data-aos="fade-up">
            <div className="flex items-baseline gap-4 border-b border-gray-800 dark:border-neutral-light pb-2">
              <span className="text-xs font-semibold text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                01
              </span>
              <h3 className="text-xl md:text-2xl font-semibold">Frontend</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {frontendSkills.map((skill, idx) => (
                <div
                  key={skill.id}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="border border-gray-800 dark:border-neutral-light rounded-full px-8 py-4 text-center transition-all duration-300 hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark cursor-default">
                    <span className="text-sm md:text-base">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend - Different layout */}
          <div className="space-y-6" data-aos="fade-up">
            <div className="flex items-baseline gap-4 border-b border-gray-800 dark:border-neutral-light pb-2">
              <span className="text-xs font-semibold text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                02
              </span>
              <h3 className="text-xl md:text-2xl font-semibold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {backendSkills.map((skill, idx) => (
                <div
                  key={skill.id}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="relative border border-gray-800 dark:border-neutral-light rounded-full px-6 md:px-10 py-3 md:py-5 transition-all duration-300 hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark cursor-default">
                    <span className="text-sm md:text-base">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others - Compact layout */}
          <div className="space-y-6" data-aos="fade-up">
            <div className="flex items-baseline gap-4 border-b border-gray-800 dark:border-neutral-light pb-2">
              <span className="text-xs font-semibold text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                03
              </span>
              <h3 className="text-xl md:text-2xl font-semibold">Tools & Ecosystem</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {toolsSkills.map((skill, idx) => (
                <div
                  key={skill.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="relative border border-gray-800 dark:border-neutral-light rounded-full px-6 md:px-10 py-3 md:py-5 transition-all duration-300 hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark cursor-default">
                    <span className="text-sm md:text-base">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills - Minimalist tags */}
          <div className="pt-8 border-t border-gray-300 dark:border-neutral-dark" data-aos="fade-up">
            <p className="text-xs text-[#656464] dark:text-neutral-light mb-4 uppercase tracking-widest">
              Additional Expertise
            </p>
            <div className="flex flex-wrap gap-3">
              {['REST APIs', 'GraphQL', 'Docker', 'AWS', 'Azure', 'Testing', 'Agile', 'Git Flow'].map((tech) => (
                <span 
                  key={tech}
                  className="text-xs px-4 py-2 border border-gray-300 dark:border-neutral-dark rounded-full text-[#656464] dark:text-neutral-light hover:border-gray-800 dark:hover:border-neutral-light transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
