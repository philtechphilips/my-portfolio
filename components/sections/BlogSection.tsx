"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { blogPosts } from '@/app/data/mockData';
import { formatDate } from '@/utils/formatters';
import Button from '../ui/Button';
import AOS from 'aos';

const BlogSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 px-5 md:px-20 bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between" data-aos="fade-up">
          <div>
            <h2 className="text-4xl md:text-6xl font-brand font-bold mb-4">
              LATEST INSIGHTS
            </h2>
            <p className="text-lg text-text-secondary dark:text-neutral-light max-w-2xl">
              Sharing knowledge and experiences from the world of software development
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => window.open(post.url, '_blank')}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Post Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-medium text-primary dark:text-primary-light px-2 py-1 bg-primary bg-opacity-10 dark:bg-opacity-20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-text-secondary dark:text-neutral-light text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-text-secondary dark:text-neutral-light pt-4 border-t border-neutral-light dark:border-neutral-dark">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    {post.readTime} min read
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up">
          <p className="text-text-secondary dark:text-neutral-light mb-4">
            More content coming soon! Stay tuned for technical insights and tutorials.
          </p>
          <Button variant="secondary">
            View All Articles <i className="ri-arrow-right-line ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
