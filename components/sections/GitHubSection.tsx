"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Commit {
  sha: string;
  message: string;
  repo: string;
  fullRepo: string;
  branch: string;
  date: string;
  url: string;
}

const formatRelativeDate = (dateStr: string): string => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const GitHubSection = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch('/api/github')
      .then(r => r.json())
      .then(data => {
        if (data.commits) setCommits(data.commits);
      })
      .catch(err => console.error('Error loading GitHub commits:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 px-5 md:px-20 bg-background-light dark:bg-background-dark border-y border-gray-100 dark:border-neutral-dark/20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8" data-aos="fade-up">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gray-800 dark:bg-neutral-light"></div>
              <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-[0.3em] font-semibold">Open Source</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-[Monument-R] uppercase leading-tight tracking-tight">
              GitHub <br /> Activity
            </h2>
            <p className="text-base text-[#656464] dark:text-neutral-light mt-6 max-w-lg leading-relaxed">
              Live commit activity and contribution history across my public repositories.
            </p>
          </div>
          <a
            href="https://github.com/philtechphilips"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 border-2 border-gray-800 dark:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300 h-fit"
          >
            <i className="ri-github-fill text-xl"></i>
            <span className="text-sm font-bold uppercase tracking-widest">@philtechphilips</span>
          </a>
        </div>

        {/* Contribution Graph */}
        <div className="mb-16 p-6 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-neutral-dark/40" data-aos="fade-up">
          <p className="text-[10px] text-[#656464] dark:text-[#8b949e] uppercase tracking-widest mb-5 font-semibold">
            Contribution Graph · Last 12 months
          </p>
          <img
            src="https://ghchart.rshah.org/232121/philtechphilips"
            alt="GitHub contribution graph for philtechphilips"
            className="w-full dark:invert dark:opacity-80"
            loading="lazy"
          />
        </div>

        {/* Recent Commits */}
        <div data-aos="fade-up">
          <p className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest mb-8 font-semibold">
            Recent Commits
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="p-8 border border-gray-100 dark:border-neutral-dark/10 animate-pulse bg-gray-50 dark:bg-neutral-dark/5"
                >
                  <div className="flex justify-between mb-6">
                    <div className="w-16 h-5 bg-gray-200 dark:bg-neutral-dark/20 rounded"></div>
                    <div className="w-5 h-5 bg-gray-200 dark:bg-neutral-dark/20 rounded"></div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-200 dark:bg-neutral-dark/20 w-full rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-neutral-dark/20 w-3/4 rounded"></div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-gray-100 dark:border-neutral-dark/10">
                    <div className="w-24 h-3 bg-gray-200 dark:bg-neutral-dark/20 rounded"></div>
                    <div className="w-12 h-3 bg-gray-200 dark:bg-neutral-dark/20 rounded"></div>
                  </div>
                </div>
              ))
            ) : commits.length > 0 ? (
              commits.map((commit, index) => (
                <a
                  key={`${commit.sha}-${index}`}
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-8 border border-gray-200 dark:border-neutral-dark/30 hover:border-gray-800 dark:hover:border-neutral-light transition-all duration-500 bg-white dark:bg-[#1f2937]/10 flex flex-col justify-between"
                >
                  {/* Corner accent on hover */}
                  <div className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gray-800 dark:bg-neutral-light"></div>
                    <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-800 dark:bg-neutral-light"></div>
                  </div>

                  <div>
                    {/* SHA + GitHub icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold px-2 py-1 border border-gray-300 dark:border-neutral-dark text-[#232121] dark:text-neutral-light bg-gray-50 dark:bg-neutral-dark/20">
                        {commit.sha}
                      </span>
                      <i className="ri-git-commit-line text-gray-300 dark:text-neutral-dark/50 group-hover:text-gray-800 dark:group-hover:text-neutral-light transition-colors text-lg"></i>
                    </div>

                    {/* Commit message */}
                    <p className="text-sm text-[#232121] dark:text-neutral-light/90 leading-relaxed font-medium line-clamp-3 mb-5">
                      {commit.message}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-neutral-dark/20 gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <i className="ri-git-repository-line text-xs text-[#656464] dark:text-neutral-light flex-shrink-0"></i>
                      <span className="text-xs font-semibold text-[#232121] dark:text-neutral-light truncate">
                        {commit.repo}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#656464] dark:text-neutral-light uppercase tracking-widest font-bold flex-shrink-0">
                      {formatRelativeDate(commit.date)}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-1 md:col-span-3 py-20 text-center border border-dashed border-gray-200 dark:border-neutral-dark/30">
                <i className="ri-github-line text-3xl text-[#656464] dark:text-neutral-light mb-3 block"></i>
                <p className="text-sm text-[#656464] dark:text-neutral-light uppercase tracking-widest">
                  No recent commits found
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="mt-20 overflow-hidden whitespace-nowrap opacity-10 select-none">
          <div className="animate-marquee gap-12 items-center">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-4xl font-bold font-[Monument-R] uppercase tracking-tighter italic mr-12">
                Code &nbsp;·&nbsp; Commits &nbsp;·&nbsp; Open Source &nbsp;·&nbsp; Build in Public
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GitHubSection;
