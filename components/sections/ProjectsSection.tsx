"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/app/data/mockData';
import { Project, ProjectCategoryType } from '@/types';
import AOS from 'aos';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryType>('All');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const categories: ProjectCategoryType[] = ['All', 'Frontend', 'Backend', 'Full-Stack'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8" data-aos="fade-up">
          <div>
            <h1
              className="font-[Monument-R] md:text-6xl text-3xl mb-6"
              style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
            >
              RECENT PROJECTS
            </h1>
            <p className="text-sm text-[#656464] dark:text-neutral-light md:w-2/3">
              A selection of projects that demonstrate my expertise in building scalable, secure applications.
            </p>
          </div>

          {/* Category Filters - Minimal Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs px-4 py-2 border rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-gray-800 dark:border-neutral-light bg-gray-800 dark:bg-neutral-light text-white dark:text-background-dark'
                    : 'border-gray-300 dark:border-neutral-dark text-[#656464] dark:text-neutral-light hover:border-gray-800 dark:hover:border-neutral-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List - Alternating Layout */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'md:grid-flow-dense' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project Image */}
                <div className={`relative group ${!isEven ? 'md:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={`w-full h-auto transition-all duration-700 ${
                        isActive ? 'scale-105 brightness-100' : 'brightness-90 dark:brightness-75'
                      }`}
                    />
                    {/* Overlay on hover */}
                    <div className={`absolute inset-0 border transition-all duration-500 ${
                      isActive 
                        ? 'border-gray-800 dark:border-neutral-light border-2' 
                        : 'border-transparent'
                    }`}></div>
                  </div>
                  
                  {/* Project Number */}
                  <div className="absolute -top-8 -left-4 text-[120px] font-bold opacity-5 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  {/* Category & Year */}
                  <div className="flex items-center gap-4 text-xs text-[#656464] dark:text-neutral-light">
                    <span className="px-3 py-1 border border-gray-300 dark:border-neutral-dark rounded-full">
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <div className="border-b border-gray-300 dark:border-neutral-dark pb-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#656464] dark:text-neutral-light">
                      {project.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[#656464] dark:text-neutral-light leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs text-[#656464] dark:text-neutral-light uppercase tracking-widest mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-3 py-1 border border-gray-300 dark:border-neutral-dark rounded-full text-[#656464] dark:text-neutral-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-gray-800 dark:border-neutral-light pb-1 hover:gap-4 transition-all duration-300"
                    >
                      View Project
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-24 pt-12 border-t border-gray-200 dark:border-neutral-dark text-center" data-aos="fade-up">
          <p className="text-sm text-[#656464] dark:text-neutral-light">
            Interested in seeing more? Check out my{' '}
            <a 
              href="https://github.com/philtechphilips" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-[#232121] dark:hover:text-background-light transition-colors"
            >
              GitHub profile
            </a>
            {' '}for additional projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
