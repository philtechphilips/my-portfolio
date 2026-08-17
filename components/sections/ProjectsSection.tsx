"use client";

import React, { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/app/data/mockData';
import { Project, ProjectCategoryType } from '@/types';

/**
 * Nova's `.recent-work-card` anatomy, rebuilt:
 *
 *   .work-collection-list      → 2-column grid
 *     .recent-work-card        → flex column, relative, overflow hidden
 *       .recent-work-image-wrapper
 *         .recent-work-image   → object-cover, fills
 *         .case-study-overlay  → wipes open from bottom-left on hover
 *         .project-button      → 120px circle, tracks the cursor
 *       .recent-work-content-wrapper
 *         .work-project-wrapper → title + client, stacked
 *         category             → pushed right
 *
 * Skinned Aiko: monochrome, Chillax at 400, 4px radii instead of Nova's 20px,
 * uppercase 13px meta. Cursor-tracking is disabled on coarse pointers, where the
 * button parks bottom-right instead.
 */

import ProjectModal from '@/components/ui/ProjectModal';

const categories: ProjectCategoryType[] = ['All', 'Frontend', 'Backend', 'Full-Stack'];

type CardVariant = 'feature' | 'compact';

const WorkCard: React.FC<{
  project: Project;
  onSelect: (project: Project) => void;
  variant?: CardVariant;
  index?: number;
}> = ({ project, onSelect, variant = 'feature', index }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const isFeature = variant === 'feature';

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Only track on devices with a real pointer.
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative flex flex-col gap-5 overflow-hidden no-underline cursor-pointer glass-card p-4 rounded-xl border border-rule/80 hover:border-fg-muted/40 transition-all duration-300"
    >
      {/* .recent-work-image-wrapper */}
      <div
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setPos(null)}
        className={`relative overflow-hidden rounded-lg flex items-center justify-center bg-bg-alt ${
          isFeature ? 'aspect-[16/10]' : 'aspect-[3/2]'
        }`}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={900}
          height={600}
          className="w-full h-full object-cover transition-transform duration-[700ms] ease-aiko group-hover:scale-[1.05]"
        />

        {/* Editorial index, featured rows only */}
        {isFeature && typeof index === 'number' && (
          <span className="absolute top-3 right-3 z-10 meta text-[11px] text-fg/70 pointer-events-none tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}

        {/* Top Floating Category Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 pointer-events-none">
          {(isFeature ? project.category : project.category.slice(0, 1)).map((cat) => (
            <span key={cat} className="meta text-[11px] bg-bg/80 backdrop-blur-md text-fg px-2.5 py-1 rounded-chip border border-rule/60">
              {cat}
            </span>
          ))}
        </div>

        {/* .case-study-overlay — wipes open from bottom-left */}
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-aiko"
          aria-hidden="true"
        />

        {/* .project-button — circle following cursor */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute z-[5] grid place-items-center rounded-full
                     bg-inverse text-inverse-fg
                     font-display uppercase leading-none
                     opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                     transition-[opacity,transform] duration-300 ease-aiko ${
                       isFeature
                         ? 'w-20 h-20 md:w-[110px] md:h-[110px] text-meta-lg'
                         : 'w-16 h-16 md:w-[72px] md:h-[72px] text-[10px] tracking-wide'
                     }`}
          style={
            pos
              ? { left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }
              : { right: '1.25rem', bottom: '1.25rem' }
          }
        >
          View Case
        </span>
      </div>

      {/* .recent-work-content-wrapper */}
      <div className="flex flex-col gap-3 px-1 pb-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3
              className={`font-display font-normal text-fg leading-tight group-hover:text-gradient transition-all duration-300 ${
                isFeature ? 'text-h4' : 'text-lg'
              }`}
            >
              {project.title}
            </h3>
            <p className={`text-fg-muted font-medium ${isFeature ? 'text-sm' : 'text-xs'}`}>
              {project.company} — {project.year}
            </p>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${project.title} live app`}
              className="badge hover:bg-inverse hover:text-inverse-fg shrink-0 transition-colors"
            >
              <i className="ri-arrow-right-up-line text-lg" />
            </a>
          )}
        </div>

        <p
          className={`text-fg-muted leading-relaxed ${
            isFeature ? 'text-sm line-clamp-2' : 'text-xs line-clamp-2'
          }`}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, isFeature ? 4 : 3).map((tech) => (
            <span key={tech} className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-alt border border-rule text-fg font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > (isFeature ? 4 : 3) && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-alt border border-rule text-fg font-medium">
              +{project.technologies.length - (isFeature ? 4 : 3)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryType>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filtered =
    selectedCategory === 'All'
      ? projects
      : projects.filter(p => p.category.includes(selectedCategory));

  // Only the unfiltered view earns a hierarchy; a filtered list is short.
  const useHierarchy = selectedCategory === 'All' && filtered.length > 4;
  const featured = useHierarchy ? filtered.slice(0, 2) : filtered;
  const rest = useHierarchy ? filtered.slice(2) : [];

  return (
    <section id="projects" className="py-section-sm md:py-section relative">
      <div className="shell">

        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 items-end mb-14">
          <div className="md:col-span-7">
            <div className="eyebrow">
              <span className="meta">Portfolio</span>
            </div>
            <h2
              className="font-display font-normal text-fg leading-[1.05] tracking-[-2px] mb-5 text-gradient"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
            >
              Selected work
            </h2>
            <p className="text-base md:text-lg text-fg-muted leading-relaxed max-w-xl">
              Products taken the whole way — designed, built, deployed, and kept
              running in production.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap gap-2 md:justify-end">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`chip ${selectedCategory === category ? 'chip-active' : 'bg-surface/50'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* .work-collection-list — two featured rows, then a compact mosaic.
            Eleven projects at identical weight read as a catalogue; leading with
            two gives the eye somewhere to land before the rest. Filtered views
            are already short enough to stay uniform. */}
        {filtered.length === 0 ? (
          <p className="meta py-16 text-center">No projects in this category.</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {featured.map((project, i) => (
                <WorkCard
                  key={project.id}
                  project={project}
                  index={i}
                  variant="feature"
                  onSelect={setActiveModalProject}
                />
              ))}
            </div>

            {rest.length > 0 && (
              <>
                <div className="flex items-center gap-4 mt-16 mb-8">
                  <span className="meta shrink-0">More work</span>
                  <span className="h-px flex-1 bg-rule" />
                  <span className="meta shrink-0 tabular-nums">{rest.length}</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {rest.map(project => (
                    <WorkCard
                      key={project.id}
                      project={project}
                      variant="compact"
                      onSelect={setActiveModalProject}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* Footer */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-rule/80 pt-8">
          <p className="text-sm text-fg-muted">
            Showing {filtered.length} of {projects.length} featured engineering projects
          </p>
          <a
            href="https://github.com/philtechphilips"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline group"
          >
            <i className="ri-github-fill text-base" />
            More on GitHub
            <i className="ri-arrow-right-up-line text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

      </div>

      {/* Detail View Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;


