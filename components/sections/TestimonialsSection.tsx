"use client";

import React, { useEffect, useState } from 'react';
import { testimonials } from '@/app/data/mockData';
import { getInitials } from '@/utils/formatters';
import AOS from 'aos';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-5 md:px-20 bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <h1
            className="font-[Monument-R] md:text-6xl text-3xl mb-6"
            style={{ letterSpacing: "4px", transform: "scaleY(1.2)" }}
          >
            TESTIMONIALS
          </h1>
        </div>

        {/* Testimonial Display - Two Column Layout */}
        <div className="grid md:grid-cols-12 gap-12 items-start" data-aos="fade-up" data-aos-delay="100">
          
          {/* Left: Author Info */}
          <div className="md:col-span-4 space-y-8">
            {/* Author Card */}
            <div className="space-y-4">
              <div className="w-20 h-20 border-2 border-gray-800 dark:border-neutral-light rounded-full flex items-center justify-center text-2xl font-semibold transition-all duration-500">
                {getInitials(currentTestimonial.author)}
              </div>
              
              <div className="transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-1">{currentTestimonial.author}</h3>
                <p className="text-sm text-[#656464] dark:text-neutral-light">
                  {currentTestimonial.role}
                </p>
                <p className="text-xs text-[#656464] dark:text-neutral-light mt-1">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col gap-3 pt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="group flex items-center gap-3 text-left"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-12 h-0.5 bg-gray-800 dark:bg-neutral-light' 
                      : 'w-6 h-0.5 bg-gray-300 dark:bg-neutral-dark group-hover:w-8 group-hover:bg-gray-800 dark:group-hover:bg-neutral-light'
                  }`} />
                  <span className={`text-xs transition-all duration-300 ${
                    index === currentIndex
                      ? 'text-[#232121] dark:text-background-light font-semibold'
                      : 'text-[#656464] dark:text-neutral-light'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Quote */}
          <div className="md:col-span-8 relative">
            <div className="relative overflow-hidden min-h-[280px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentIndex 
                      ? 'opacity-100 relative' 
                      : 'opacity-0 absolute top-0 left-0 pointer-events-none'
                  }`}
                >
                  {/* Large Quote Mark */}
                  <div className="absolute -top-4 -left-2 md:-left-8 opacity-5">
                    <i className="ri-double-quotes-l text-[120px] md:text-[180px]"></i>
                  </div>

                  {/* Quote Text */}
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl leading-relaxed text-[#232121] dark:text-background-light font-light mb-8">
                      {testimonial.quote}
                    </p>

                    {/* Bottom Border Accent */}
                    <div className="w-24 h-0.5 bg-gray-800 dark:bg-neutral-light"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Counter & Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200 dark:border-neutral-dark">
              <div className="text-sm text-[#656464] dark:text-neutral-light font-mono">
                <span className="text-2xl font-semibold text-[#232121] dark:text-background-light">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="mx-2">/</span>
                <span>{String(testimonials.length).padStart(2, '0')}</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-12 h-12 border border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <i className="ri-arrow-left-s-line text-xl"></i>
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 border border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <i className="ri-arrow-right-s-line text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
