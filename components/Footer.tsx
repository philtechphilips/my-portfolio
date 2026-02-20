"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-gray-200 dark:border-neutral-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center'>
                <span className='font-[Monument-R] font-bold text-base'>PI</span>
              </div>
              <div className='font-semibold text-lg'>
                Pelumi Isola
              </div>
            </div>
            <p className="text-sm text-[#656464] dark:text-neutral-light mb-6 max-w-sm">
              Security-focused full-stack developer building scalable, impactful solutions. 
              Specializing in React, Node.js, Laravel, and modern web technologies.
            </p>
            <div className="flex gap-3">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:pelumiisola87@gmail.com"
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link 
                  href="tel:07063623539" 
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Phone
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-200 dark:border-neutral-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-[#656464] dark:text-neutral-light">
            <p>© {new Date().getFullYear()} Pelumi Isola</p>
            <span className="hidden md:block">•</span>
            <p className="hidden md:block">All rights reserved</p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
            aria-label="Scroll to top"
          >
            <i className="ri-arrow-up-line text-lg"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
