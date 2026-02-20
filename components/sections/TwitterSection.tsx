"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tweet } from '@/types';

const TwitterSection = () => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const fetchTweets = async () => {
            try {
                const response = await fetch('/api/tweets');
                const data = await response.json();
                if (data.tweets) {
                    setTweets(data.tweets);
                }
            } catch (error) {
                console.error("Error loading tweets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTweets();
    }, []);

    return (
        <section className="py-24 px-5 md:px-20 bg-background-light dark:bg-background-dark border-y border-gray-100 dark:border-neutral-dark/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8" data-aos="fade-up">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-gray-800 dark:bg-neutral-light"></div>
                            <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-[0.3em] font-semibold">Social Feed</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-[Monument-R] uppercase leading-tight tracking-tight">
                            Latest <br /> Insights
                        </h2>
                        <p className="text-base text-[#656464] dark:text-neutral-light mt-6 max-w-lg leading-relaxed">
                            Sharing thoughts on security-first engineering, modern web architectures, and the intersection of code and culture.
                        </p>
                    </div>
                    <a
                        href="https://twitter.com/softwareengng"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-8 py-4 border-2 border-gray-800 dark:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300 h-fit"
                    >
                        <i className="ri-twitter-x-fill text-xl"></i>
                        <span className="text-sm font-bold uppercase tracking-widest">Follow @softwareengng</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {loading ? (
                        [...Array(3)].map((_, i) => (
                            <div key={i} className="p-10 border border-gray-100 dark:border-neutral-dark/10 animate-pulse bg-gray-50 dark:bg-neutral-dark/5 min-h-[400px]">
                                <div className="flex gap-4 mb-8">
                                    <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-dark/20 rounded-none"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-gray-200 dark:bg-neutral-dark/20 w-1/2"></div>
                                        <div className="h-3 bg-gray-200 dark:bg-neutral-dark/20 w-1/4"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-200 dark:bg-neutral-dark/20 w-full"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-neutral-dark/20 w-full"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-neutral-dark/20 w-2/3"></div>
                                </div>
                            </div>
                        ))
                    ) : tweets.length > 0 ? (
                        tweets.map((tweet, index) => (
                            <a
                                key={tweet.id}
                                href={tweet.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-10 border border-gray-200 dark:border-neutral-dark/30 hover:border-gray-800 dark:hover:border-neutral-light transition-all duration-500 bg-white dark:bg-[#1f2937]/20 backdrop-blur-sm flex flex-col justify-between"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                {/* Decorative Corner accent */}
                                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gray-800 dark:bg-neutral-light"></div>
                                    <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-800 dark:bg-neutral-light"></div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-dark/50 border border-gray-200 dark:border-neutral-dark/50 flex items-center justify-center font-bold text-gray-800 dark:text-neutral-light font-[Monument-R] text-sm">
                                                PI
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold tracking-tight">Pelumi Isola</h4>
                                                <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest">@softwareengng</p>
                                            </div>
                                        </div>
                                        <i className="ri-twitter-x-fill text-gray-300 dark:text-neutral-dark/50 group-hover:text-gray-800 dark:group-hover:text-neutral-light transition-colors text-xl"></i>
                                    </div>

                                    <p className="text-[15px] text-[#232121] dark:text-neutral-light/90 leading-relaxed mb-8 font-medium">
                                        {tweet.text}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-8 border-t border-gray-100 dark:border-neutral-dark/20">
                                    <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-[0.2em] font-bold">
                                        {tweet.createdAt}
                                    </span>
                                    <div className="flex gap-6">
                                        <div className="flex items-center gap-2 text-[#656464] dark:text-neutral-light group-hover:text-red-500 transition-colors">
                                            <i className="ri-heart-line text-sm"></i>
                                            <span className="text-[10px] font-bold">{tweet.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#656464] dark:text-neutral-light group-hover:text-blue-500 transition-colors">
                                            <i className="ri-repeat-line text-sm"></i>
                                            <span className="text-[10px] font-bold">{tweet.retweets}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="col-span-1 md:col-span-3 py-20 text-center border border-dashed border-gray-200 dark:border-neutral-dark/30">
                            <p className="text-sm text-[#656464] dark:text-neutral-light uppercase tracking-widest">No recent insights found</p>
                        </div>
                    )}
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-20 flex items-center gap-4 overflow-hidden whitespace-nowrap opacity-10 select-none" data-aos="fade-in">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-4xl font-bold font-[Monument-R] uppercase tracking-tighter italic">
                            Code Security Performance Scalability
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TwitterSection;
