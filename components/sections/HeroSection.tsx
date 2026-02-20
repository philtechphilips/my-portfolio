"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-5 md:px-20 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 text-[200px] md:text-[300px] font-bold opacity-[0.02] select-none pointer-events-none font-[Monument-R]">
        PI
      </div>
      
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-12" data-aos="fade-up">
          
          {/* Top Label Row */}
          <div className="flex items-center justify-between">
            <div className="inline-block">
              <span className="px-5 text-sm font-semibold border border-gray-800 dark:border-neutral-light rounded-full text-[#656464] dark:text-neutral-light py-1.5">
                Security Inclined
              </span>
            </div>
          </div>
          
          {/* Name Label */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-4">
              <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-[0.3em]">
                Full-Stack Developer
              </span>
              <div className="flex-1 h-px bg-gray-300 dark:bg-neutral-dark"></div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">Pelumi Isola</h2>
          </div>
          
          {/* Main Heading - Creative Split */}
          <div className="space-y-8 md:space-y-12">
            <h1 
              className="uppercase text-[2.75rem] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] leading-[1.1] text-[#232121] dark:text-background-light font-[Monument-R] font-bold pt-2"
              style={{ letterSpacing: "1px", transform: "scaleY(1.4)" }}
            >
              Software
            </h1>
            
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-14 h-14 md:w-20 md:h-20 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center flex-shrink-0">
                <span className="text-xl md:text-3xl font-bold font-[Monument-R]">+6</span>
              </div>
              <h1 
                className="uppercase text-[2.75rem] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[160px] leading-[1.1] text-[#232121] dark:text-background-light font-[Monument-R] font-bold"
                style={{ letterSpacing: "1px", transform: "scaleY(1.4)" }}
              >
                Engineer
              </h1>
            </div>
          </div>

          {/* Specialty Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="text-xs px-4 py-2 bg-gray-800 dark:bg-neutral-light text-white dark:text-background-dark font-semibold">
              REACT.JS
            </div>
            <div className="text-xs px-4 py-2 bg-gray-800 dark:bg-neutral-light text-white dark:text-background-dark font-semibold">
              NODE.JS
            </div>
            <div className="text-xs px-4 py-2 bg-gray-800 dark:bg-neutral-light text-white dark:text-background-dark font-semibold">
              LARAVEL
            </div>
            <div className="text-xs px-4 py-2 border border-gray-800 dark:border-neutral-light text-[#656464] dark:text-neutral-light font-semibold">
              CLOUD & DEVOPS
            </div>
          </div>

          {/* Stats & Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200 dark:border-neutral-dark">
            <div>
              <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mb-2">
                Experience
              </p>
              <p className="text-3xl font-bold font-[Monument-R]">6+ Years</p>
            </div>
            <div>
              <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mb-2">
                Projects
              </p>
              <p className="text-3xl font-bold font-[Monument-R]">15+</p>
            </div>
            <div>
              <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mb-2">
                Location
              </p>
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-line text-base"></i>
                <p className="text-sm font-semibold">Lagos, Nigeria</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mb-2">
                Availability
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm font-semibold">Open to Projects</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 pt-6 max-w-3xl">
            <p className="text-base md:text-lg text-[#656464] dark:text-neutral-light leading-relaxed">
              Turning ideas into secure, scalable applications. Specialized in full-stack development 
              with a security-first approach, building solutions that matter. Currently exploring cloud 
              infrastructure and DevOps practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-8">
            <a 
              href="https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 border-2 border-gray-800 dark:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
            >
              <span className="text-sm font-semibold">View Resume</span>
              <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
            </a>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-8 py-4 bg-gray-800 dark:bg-neutral-light text-white dark:text-background-dark hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300"
            >
              <span className="text-sm font-semibold">Let's Talk</span>
              <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1 pt-6">
            <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mr-4">
              Connect
            </span>
            <a 
              href="https://github.com/philtechphilips" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-base"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/pelumi-isola-84661821a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill text-base"></i>
            </a>
            <a 
              href="https://x.com/softwareengng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
              aria-label="X (Twitter)"
            >
              <i className="ri-twitter-x-line text-base"></i>
            </a>
            <a 
              href="mailto:pelumiisola87@gmail.com"
              className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
              aria-label="Email"
            >
              <i className="ri-mail-fill text-base"></i>
            </a>
            <a 
              href="https://www.instagram.com/philipstheprogrammer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
              aria-label="Instagram"
            >
              <i className="ri-instagram-line text-base"></i>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-3" data-aos="fade-up" data-aos-delay="400">
          <div className="w-px h-20 bg-gray-300 dark:bg-neutral-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 dark:bg-neutral-light animate-pulse"></div>
          </div>
          <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-[0.2em]">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
