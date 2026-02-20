"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';

const ContactSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('pelumiisola87@gmail.com');
  };

  return (
    <section id="contact" className="py-32 px-5 md:px-20 bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center" data-aos="fade-up">
          <h1
            className="font-[Monument-R] md:text-6xl text-3xl mb-6"
            style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
          >
            LET'S WORK TOGETHER
          </h1>
          <p className="text-lg md:text-xl text-[#656464] dark:text-neutral-light max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities 
            and creative ideas.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Email */}
          <div 
            className="p-8 border-2 border-gray-800 dark:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-6">
              <i className="ri-mail-line text-4xl"></i>
            </div>
            <h3 className="text-sm uppercase tracking-widest mb-3 text-[#656464] dark:text-neutral-light group-hover:text-white dark:group-hover:text-background-dark">
              Email
            </h3>
            <a 
              href="mailto:pelumiisola87@gmail.com"
              className="text-lg font-semibold block mb-4 break-all"
            >
              pelumiisola87@gmail.com
            </a>
            <button 
              onClick={copyEmail}
              className="text-sm flex items-center gap-2 opacity-70 group-hover:opacity-100"
            >
              <i className="ri-file-copy-line"></i>
              Copy Email
            </button>
          </div>

          {/* Phone */}
          <div 
            className="p-8 border-2 border-gray-800 dark:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-6">
              <i className="ri-phone-line text-4xl"></i>
            </div>
            <h3 className="text-sm uppercase tracking-widest mb-3 text-[#656464] dark:text-neutral-light group-hover:text-white dark:group-hover:text-background-dark">
              Phone
            </h3>
            <a 
              href="tel:07063623539"
              className="text-lg font-semibold block mb-4"
            >
              +234 706 362 3539
            </a>
            <p className="text-sm opacity-70">
              Available Mon-Fri, 9AM-6PM WAT
            </p>
          </div>

          {/* Location */}
          <div 
            className="p-8 border-2 border-gray-800 dark:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="mb-6">
              <i className="ri-map-pin-line text-4xl"></i>
            </div>
            <h3 className="text-sm uppercase tracking-widest mb-3 text-[#656464] dark:text-neutral-light group-hover:text-white dark:group-hover:text-background-dark">
              Location
            </h3>
            <p className="text-lg font-semibold block mb-4">
              Lagos, Nigeria
            </p>
            <p className="text-sm opacity-70">
              Open to remote opportunities
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center border-t border-gray-200 dark:border-neutral-dark pt-16" data-aos="fade-up">
          <p className="text-sm text-[#656464] dark:text-neutral-light uppercase tracking-widest mb-6">
            Connect with me
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/philtechphilips" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
              aria-label="GitHub"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/pelumi-isola-84661821a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a 
              href="https://x.com/softwareengng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <i className="ri-twitter-x-line text-xl"></i>
            </a>
            <a 
              href="https://www.instagram.com/philipstheprogrammer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
              aria-label="Instagram"
            >
              <i className="ri-instagram-line text-xl"></i>
            </a>
            <a 
              href="mailto:pelumiisola87@gmail.com"
              className="w-14 h-14 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
              aria-label="Email"
            >
              <i className="ri-mail-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
