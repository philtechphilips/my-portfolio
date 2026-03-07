"use client";

import React, { useEffect } from "react";
import AOS from 'aos';

const JobExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const experiences = [
    {
      company: 'AB-InBev',
      role: 'Backend Developer',
      type: 'Full-time',
      location: 'Remote',
      period: 'Mar 2024 - Present',
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
      period: 'Jan 2025 - Oct 2025',
      achievements: [
        'Integrated multiple third-party APIs including Zoho CRM, Stripe, Google Drive, Microsoft OneDrive, Dropbox, Xero, Smokeball and FYI',
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
      period: 'Jul 2023 - Mar 2024',
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
      period: 'Jun 2020 - Jul 2023',
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
      period: 'Apr 2020 - Oct 2022',
      achievements: [
        'Built full-stack school portal application (v1 & v2) using Laravel and Bootstrap',
        'Developed learning management system for bible school',
        'Managed domain hosting, deployment, and SEO optimization',
      ],
    },
  ];

  return (
    <section id="experience" className="w-full md:px-20 py-20 px-5 bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <h1
            className="font-[Monument-R] md:text-6xl text-3xl mb-6"
            style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
          >
            WORK EXPERIENCE
          </h1>
          <p className="text-sm text-[#656464] dark:text-neutral-light md:w-2/3">
            Professional journey building impactful solutions across fintech, enterprise, and creative industries
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-2 border-gray-200 dark:border-neutral-dark pl-8 md:pl-12 pb-12 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-800 dark:bg-neutral-light border-2 border-background-light dark:border-background-dark"></div>

              {/* Content */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold">{exp.company}</h3>
                      <span className="text-xs px-3 py-1 border border-gray-300 dark:border-neutral-dark rounded-full text-[#656464] dark:text-neutral-light">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-[#656464] dark:text-neutral-light mb-1">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#656464] dark:text-neutral-light">
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line text-xs"></i>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="text-sm font-semibold text-[#656464] dark:text-neutral-light whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 pt-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#656464] dark:text-neutral-light leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-gray-800 dark:bg-neutral-light flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Education ── */}
        <div className="mt-20 pt-16 border-t border-gray-200 dark:border-neutral-dark" data-aos="fade-up">
          <h2
            className="font-[Monument-R] md:text-4xl text-2xl mb-12"
            style={{ letterSpacing: "3px", transform: "scaleY(1.2)" }}
          >
            EDUCATION
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HND */}
            <div className="border-l-2 border-gray-800 dark:border-neutral-light pl-6 py-1" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] px-2 py-0.5 border border-gray-300 dark:border-neutral-dark rounded-full text-[#656464] dark:text-neutral-light uppercase tracking-wider">
                  HND
                </span>
                <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                  2023 – 2025
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">Computer Engineering</h3>
              <p className="text-sm text-[#656464] dark:text-neutral-light mb-4">
                Yaba College of Technology
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#656464] dark:text-neutral-light">
                  <span className="w-1.5 h-1.5 bg-gray-800 dark:bg-neutral-light flex-shrink-0" />
                  Graduated with Distinction
                </div>
                <div className="flex items-center gap-2 text-xs text-[#656464] dark:text-neutral-light">
                  <span className="w-1.5 h-1.5 bg-gray-800 dark:bg-neutral-light flex-shrink-0" />
                  Best Graduating Computer Engineering Student
                </div>
              </div>
            </div>

            {/* ND */}
            <div className="border-l-2 border-gray-800 dark:border-neutral-light pl-6 py-1" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] px-2 py-0.5 border border-gray-300 dark:border-neutral-dark rounded-full text-[#656464] dark:text-neutral-light uppercase tracking-wider">
                  ND
                </span>
                <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                  2018 – 2020
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">Computer Engineering</h3>
              <p className="text-sm text-[#656464] dark:text-neutral-light mb-4">
                Yaba College of Technology
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#656464] dark:text-neutral-light">
                  <span className="w-1.5 h-1.5 bg-gray-800 dark:bg-neutral-light flex-shrink-0" />
                  Graduated with Distinction
                </div>
                <div className="flex items-center gap-2 text-xs text-[#656464] dark:text-neutral-light">
                  <span className="w-1.5 h-1.5 bg-gray-800 dark:bg-neutral-light flex-shrink-0" />
                  Best Graduating Computer Engineering Student
                </div>
              </div>
            </div>

            {/* NYSC */}
            <div className="border-l-2 border-gray-800 dark:border-neutral-light pl-6 py-1" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] px-2 py-0.5 border border-gray-300 dark:border-neutral-dark rounded-full text-[#656464] dark:text-neutral-light uppercase tracking-wider">
                  NYSC
                </span>
                <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                  2025
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">National Youth Service Corps</h3>
              <p className="text-sm text-[#656464] dark:text-neutral-light mb-4">
                Federal Republic of Nigeria
              </p>
              <div className="flex items-center gap-2 text-xs text-[#656464] dark:text-neutral-light">
                <span className="w-1.5 h-1.5 bg-gray-800 dark:bg-neutral-light flex-shrink-0" />
                Exemption Certificate
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-neutral-dark text-center" data-aos="fade-up">
          <p className="text-sm text-[#656464] dark:text-neutral-light">
            Want to know more about my experience?{' '}
            <a 
              href="https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-[#232121] dark:hover:text-background-light transition-colors"
            >
              View my full resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
