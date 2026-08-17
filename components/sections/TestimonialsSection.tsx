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
    <section className="section bg-bg-alt border-y border-rule">
      <div className="shell">

        {/* Header */}
        <div className="mb-14" data-aos="fade-up">
          <div className="eyebrow">
            <span className="meta">What clients say</span>
          </div>
          <h2 className="font-display font-light text-h2 text-fg">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start" data-aos="fade-up" data-aos-delay="100">

          {/* Left: author */}
          <div className="md:col-span-4">
            <div className="w-16 h-16 rounded-full border border-rule-strong flex items-center justify-center font-display text-h4 font-light text-fg mb-5">
              {getInitials(currentTestimonial.author)}
            </div>

            <h3 className="font-display font-light text-h4 text-fg mb-1.5">
              {currentTestimonial.author}
            </h3>
            <p className="text-sm text-fg-muted">{currentTestimonial.role}</p>
            <p className="meta mt-1.5">{currentTestimonial.company}</p>

            {/* Selector */}
            <div className="flex flex-col gap-2.5 pt-8 mt-8 border-t border-rule">
              {testimonials.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => handleDotClick(index)}
                  className="group flex items-center gap-3 text-left"
                  aria-label={`Show testimonial from ${t.author}`}
                  aria-current={index === currentIndex}
                >
                  <span
                    className={`h-px transition-all duration-300 ease-aiko ${
                      index === currentIndex
                        ? 'w-12 bg-accent'
                        : 'w-6 bg-rule group-hover:w-9 group-hover:bg-fg-subtle'
                    }`}
                  />
                  <span
                    className={`text-meta uppercase transition-colors duration-300 ${
                      index === currentIndex ? 'text-fg' : 'text-fg-subtle'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: quote */}
          <div className="md:col-span-8">
            <div className="relative min-h-[260px]">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={testimonial.id}
                  className={`transition-opacity duration-700 ease-aiko ${
                    index === currentIndex
                      ? 'opacity-100 relative'
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <i className="ri-double-quotes-l text-accent text-5xl block mb-4 leading-none" aria-hidden="true" />
                  <p className="font-display font-light text-h4 text-fg leading-snug">
                    {testimonial.quote}
                  </p>
                </blockquote>
              ))}
            </div>

            {/* Counter + nav */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-rule">
              <div className="flex items-baseline gap-1.5 font-display font-light text-fg tabular-nums">
                <span className="text-h4">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-fg-subtle text-sm">/</span>
                <span className="text-fg-subtle text-sm">
                  {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                  }
                  className="badge"
                  aria-label="Previous testimonial"
                >
                  <i className="ri-arrow-left-line" />
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                  className="badge"
                  aria-label="Next testimonial"
                >
                  <i className="ri-arrow-right-line" />
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
