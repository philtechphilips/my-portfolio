"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';

interface Commit {
  sha: string;
  message: string;
  repo: string;
  fullRepo: string;
  branch: string;
  date: string;
  url: string;
}

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
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

const formatDateFull = (dateStr: string): string => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
};

const GitHubSection: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [publicRepos, setPublicRepos] = useState<number>(139);
  const [totalContributions, setTotalContributions] = useState<number>(2849);
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch('/api/github')
      .then(r => r.json())
      .then(data => {
        if (data.commits && data.commits.length > 0) {
          setCommits(data.commits);
        }
        if (data.publicRepos) {
          setPublicRepos(data.publicRepos);
        }
        if (data.totalContributions) {
          setTotalContributions(data.totalContributions);
        }
        if (data.weeks && data.weeks.length > 0) {
          setWeeks(data.weeks);
        }
      })
      .catch(err => console.error('Error loading GitHub commits:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section border-b border-rule relative">
      <div className="shell">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-rule"
          data-aos="fade-up"
        >
          <div className="max-w-xl">
            <div className="eyebrow">
              <span className="meta">Open Source & Activity</span>
            </div>
            <h2 className="font-display font-light text-h2 text-fg mb-4 text-gradient">
              GitHub Activity
            </h2>
            <p className="text-base text-fg-muted leading-relaxed">
              Recent engineering commits, open-source repositories, and continuous delivery track.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/philtechphilips"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group shrink-0"
            >
              <i className="ri-github-fill text-lg" />
              @philtechphilips
              <i className="ri-arrow-right-up-line text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Contribution Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" data-aos="fade-up">
          <div className="glass-card p-5 rounded-xl border border-rule/80">
            <p className="meta text-xs mb-1">Public Repositories</p>
            <p className="font-display text-h3 font-light text-fg">{publicRepos}</p>
          </div>
          <div className="glass-card p-5 rounded-xl border border-rule/80">
            <p className="meta text-xs mb-1">Annual Contributions</p>
            <p className="font-display text-h3 font-light text-fg">{totalContributions.toLocaleString()}</p>
          </div>
          <div className="glass-card p-5 rounded-xl border border-rule/80">
            <p className="meta text-xs mb-1">Primary Stack</p>
            <p className="font-display text-h4 font-light text-fg mt-1">TypeScript & Node.js</p>
          </div>
          <div className="glass-card p-5 rounded-xl border border-rule/80">
            <p className="meta text-xs mb-1">Status</p>
            <p className="font-display text-h4 font-light text-fg mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Active Shipping
            </p>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="glass-card p-6 md:p-8 rounded-xl border border-rule/80 mb-14" data-aos="fade-up">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5 min-h-[28px]">
              <i className="ri-calendar-event-line text-fg/70 text-base" />
              <p className="meta font-medium text-fg">
                {hoveredDay ? (
                  <span className="inline-flex items-center gap-2 bg-bg px-3 py-1 rounded-full border border-rule font-normal text-xs transition-all">
                    <span className="font-semibold text-fg">{hoveredDay.count} {hoveredDay.count === 1 ? 'contribution' : 'contributions'}</span>
                    {hoveredDay.date && <span className="text-fg-muted font-normal">on {formatDateFull(hoveredDay.date)}</span>}
                  </span>
                ) : (
                  <span>Contribution Activity · Past 12 Months ({totalContributions.toLocaleString()} Total)</span>
                )}
              </p>
            </div>
            
            {/* Heatmap Legend */}
            <div className="flex items-center gap-1.5 text-xs meta text-fg-muted">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-rule/30" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-fg/25" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-fg/45" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-fg/75" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-fg" />
              <span className="ml-1">More</span>
            </div>
          </div>

          {/* Graph visual */}
          <div className="w-full overflow-x-auto pb-2">
            <div className="min-w-[700px] flex flex-col gap-1.5">
              <div className="grid grid-cols-[repeat(52,1fr)] gap-1.5">
                {(weeks.length > 0 ? weeks.slice(-52) : [...Array(52)]).map((week, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-1.5">
                    {(typeof week === 'object' && week.contributionDays ? week.contributionDays : [...Array(7)]).map((day: any, rowIdx: number) => {
                      let level = 'bg-rule/30';
                      let count = 0;
                      let dateStr = '';

                      if (typeof day === 'object' && day !== null) {
                        count = day.contributionCount;
                        dateStr = day.date || '';
                        if (count > 8) level = 'bg-fg';
                        else if (count > 4) level = 'bg-fg/75';
                        else if (count > 1) level = 'bg-fg/45';
                        else if (count === 1) level = 'bg-fg/25';
                        else level = 'bg-rule/30';
                      } else {
                        const seed = (colIdx * 7 + rowIdx * 13) % 17;
                        count = seed > 12 ? 9 : seed > 8 ? 5 : seed > 4 ? 2 : 0;
                        level = seed > 12 ? 'bg-fg' : seed > 8 ? 'bg-fg/60' : seed > 4 ? 'bg-fg/25' : 'bg-rule/30';
                      }

                      return (
                        <div
                          key={rowIdx}
                          onMouseEnter={() => setHoveredDay({ count, date: dateStr })}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`w-3 h-3 rounded-[2px] ${level} transition-all duration-150 hover:scale-150 hover:z-20 hover:ring-1 hover:ring-fg cursor-pointer`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-[11px] text-fg-subtle meta pt-2">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
                <span>Jan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Commits Feed */}
        <div data-aos="fade-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="meta font-medium text-fg">Latest Live Pushes & Commit History</h3>
            <span className="meta text-xs text-fg-muted font-mono">Live GitHub API</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className="glass-card p-6 rounded-xl animate-pulse flex flex-col justify-between">
                  <div className="flex justify-between mb-5">
                    <div className="w-16 h-5 bg-rule rounded-chip" />
                    <div className="w-5 h-5 bg-rule rounded-chip" />
                  </div>
                  <div className="space-y-2 mb-5">
                    <div className="h-3 bg-rule w-full rounded-chip" />
                    <div className="h-3 bg-rule w-3/4 rounded-chip" />
                  </div>
                  <div className="flex justify-between pt-4 border-t border-rule">
                    <div className="w-24 h-3 bg-rule rounded-chip" />
                    <div className="w-12 h-3 bg-rule rounded-chip" />
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
                  className="glass-card group p-6 rounded-xl border border-rule/80 hover:border-fg-muted/50 flex flex-col justify-between transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-chip border border-fg/20 bg-fg/10 text-fg font-semibold group-hover:bg-inverse group-hover:text-inverse-fg transition-colors duration-200">
                        {commit.sha}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-alt text-fg-muted border border-rule">
                        {commit.branch}
                      </span>
                    </div>

                    <p className="text-sm text-fg font-medium leading-relaxed line-clamp-3 mb-5 group-hover:text-gradient transition-all">
                      {commit.message}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-4 border-t border-rule/80">
                    <span className="flex items-center gap-1.5 min-w-0">
                      <i className="ri-git-repository-line text-xs text-fg-muted flex-shrink-0" />
                      <span className="text-xs text-fg font-medium truncate">{commit.repo}</span>
                    </span>
                    <span className="meta text-xs flex-shrink-0 text-fg-muted">
                      {formatRelativeDate(commit.date)}
                    </span>
                  </div>
                </a>
              ))
            ) : null}
          </div>
        </div>

        {/* Ticker */}
        <div className="mt-16 overflow-hidden whitespace-nowrap select-none" aria-hidden="true">
          <div className="animate-marquee items-center">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="font-display font-light text-h3 text-fg-subtle/25 mr-10"
              >
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
