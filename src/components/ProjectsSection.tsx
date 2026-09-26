import React, { useState } from 'react';
import { ArrowUpRight, Play, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectImage } from './ProjectImage';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full py-24 md:py-32 bg-[#FAF9F6] border-b border-[#E7E2DA]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#E2DDD5]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7C4A32] mb-2">
            <span>03 / SELECTED WORKS</span>
            <span aria-hidden="true">·</span>
            <span>FEATURED PROJECTS &amp; CASE STUDIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917]">
            Built with Structure and Elegance.
          </h2>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#F4F1EA] rounded-xl overflow-hidden border border-[#E0D9CF] hover:border-[#B59F8F] transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              {/* Visual Preview Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-[#2D231E]">
                <ProjectImage project={project} />

                {/* Subtle top meta in preview */}
                <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest text-[#E3D7CB] bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-white/10 z-10">
                  {project.category}
                </div>

                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#78716C]">
                    <span className="font-mono truncate max-w-[240px]">{project.client}</span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#1C1917] group-hover:text-[#7C4A32] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#57534E] leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Unboxed Metadata & Action (Rule 1.A Zero-Pill) */}
                <div className="pt-4 border-t border-[#E3DBD0] space-y-3">
                  <div className="text-[11px] font-medium text-[#78716C] truncate">
                    {project.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {idx < project.tags.length - 1 && (
                          <span className="mx-1.5 text-[#B5A89C]" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-3 border-t border-[#E3DBD0]/80">
                    {/* Left: Case Study */}
                    <span className="text-xs font-semibold text-[#5C3A28] group-hover:underline inline-flex items-center gap-1.5 py-1 shrink-0">
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>

                    {/* Right: Action Buttons */}
                    <div className="flex items-center justify-end">
                      {project.videoUrl && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-mono tracking-wider text-[#5C3A28] bg-[#ECE5DB] hover:bg-[#5C3A28] hover:text-white rounded-md transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                          title="Watch video demo"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Video Demo</span>
                        </button>
                      )}

                      {project.previewUrl && (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-mono tracking-wider text-[#0E9F6E] bg-emerald-50 hover:bg-[#0E9F6E] hover:text-white rounded-md border border-emerald-200/80 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                          title="Open live preview or prototype"
                        >
                          <span>Live Preview</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
