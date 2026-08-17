"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="glass-card relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-surface border border-rule p-6 md:p-10 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 badge hover:bg-inverse hover:text-inverse-fg transition-all duration-200 z-10"
          aria-label="Close modal"
        >
          <i className="ri-close-line text-xl" />
        </button>

        {/* Top Eyebrow & Category */}
        <div className="flex items-center gap-3 mb-3">
          <span className="meta text-fg font-semibold bg-fg/10 px-2.5 py-1 rounded-chip border border-fg/20">
            {project.company}
          </span>
          <span className="meta">{project.year}</span>
        </div>

        {/* Title */}
        <h2 id="modal-project-title" className="font-display text-h2 text-fg font-normal mb-6">
          {project.title}
        </h2>

        {/* Hero Preview Image */}
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-rule mb-8 bg-bg-alt">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h3 className="meta mb-2">Overview</h3>
          <p className="text-base md:text-lg text-fg-muted leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Features / Highlights */}
        {project.features && project.features.length > 0 && (
          <div className="mb-8">
            <h3 className="meta mb-4">Key Features & Architecture</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-card bg-bg-alt/60 border border-rule/50 text-sm text-fg-muted">
                  <i className="ri-checkbox-circle-line text-fg text-base shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Used */}
        <div className="mb-8">
          <h3 className="meta mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="chip bg-surface font-mono text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-rule">
          <button onClick={onClose} className="btn btn-outline">
            Close
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid group"
            >
              Visit Live App
              <i className="ri-arrow-right-up-line text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
