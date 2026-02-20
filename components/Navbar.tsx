"use client"
import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init();

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return (
      <nav className='fixed top-0 left-0 right-0 w-full py-6 bg-background-light dark:bg-background-dark z-40'>
        <div className='max-w-7xl mx-auto px-5 md:px-20 flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center'>
              <span className='font-[Monument-R] font-bold text-sm'>PI</span>
            </div>
            <div className='font-semibold text-base'>
              Pelumi Isola
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full py-6 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-background-light dark:bg-background-dark bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md border-b border-gray-200 dark:border-neutral-dark' 
        : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-5 md:px-20 flex justify-between items-center'>
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='flex items-center gap-3 cursor-pointer group'
        >
          <div className='w-10 h-10 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white dark:group-hover:bg-neutral-light dark:group-hover:text-background-dark transition-all duration-300'>
            <span className='font-[Monument-R] font-bold text-sm'>PI</span>
          </div>
          <div className='font-semibold text-base group-hover:text-primary dark:group-hover:text-primary-light transition-colors'>
            Pelumi Isola
          </div>
        </button>

        {/* Center Navigation - Hidden on mobile */}
        <div className='hidden lg:flex items-center gap-8'>
          <button 
            onClick={() => scrollToSection('skills')}
            className='text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors'
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className='text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors'
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className='text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors'
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className='text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors'
          >
            Contact
          </button>
        </div>
        
        {/* Right Side */}
        <div className='flex items-center gap-6'>
          {/* Resume Link */}
          <a 
            href="https://drive.google.com/file/d/1hZ9TseY942-gNlnTZSauORv98aIhQZKh/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className='hidden md:block text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors'
          >
            Resume
          </a>

          {/* Divider */}
          <div className='hidden md:block w-px h-4 bg-gray-300 dark:bg-neutral-dark'></div>
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
