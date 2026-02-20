"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LinkedInSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const posts = [
        "7420265229416026112",
        "7419674617885282305",
        "7390849754068496384"
    ];

    return (
        <section className="py-24 px-5 md:px-20 bg-white dark:bg-[#111] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8" data-aos="fade-up">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-gray-800 dark:bg-neutral-light"></div>
                            <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-[0.3em] font-semibold">Professional Feed</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-[Monument-R] uppercase leading-tight tracking-tight">
                            Featured <br /> LinkedIn
                        </h2>
                        <p className="text-base text-[#656464] dark:text-neutral-light mt-6 max-w-lg leading-relaxed">
                            Deeper dives into technology, career growth, and the professional journey of building in public.
                        </p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/pelumi-isola-84661821a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-8 py-4 border-2 border-gray-800 dark:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300 h-fit"
                    >
                        <i className="ri-linkedin-box-fill text-xl"></i>
                        <span className="text-sm font-bold uppercase tracking-widest">Connect on LinkedIn</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((postId, index) => (
                        <div
                            key={postId}
                            className="group relative overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <iframe
                                src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${postId}?collapsed=1`}
                                height="284"
                                width="100%"
                                frameBorder="0"
                                allowFullScreen={true}
                                title="Embedded post"
                                className="brightness-100 dark:brightness-90 transition-all duration-500 rounded-sm"
                            ></iframe>

                            {/* Highlight bar */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-gray-800 dark:group-hover:bg-neutral-light transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinkedInSection;
