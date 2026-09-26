import React, { useEffect } from 'react';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { ProjectImage } from './ProjectImage';
import { ProjectVideoPlayer } from './ProjectVideoPlayer';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF9F6] rounded-xl shadow-2xl border border-[#E2DDD5] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E2DA] bg-[#F2EFE9]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C4A32]">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0E9F6E] hover:bg-[#0B7F58] text-white text-xs font-semibold rounded shadow-xs transition-colors"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#E5DFD4] rounded-md transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Visual Header / Banner */}
          <div className="relative h-56 sm:h-72 w-full rounded-lg overflow-hidden border border-[#DCD5C9]">
            <ProjectImage project={project} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 pointer-events-none">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4B996] block mb-1">
                  {project.client}
                </span>
                <h3 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Quick Summary & Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#F2ECE4] rounded-lg border border-[#DFD6CA]">
            <div>
              <span className="block text-xs font-mono uppercase text-[#7C4A32]">Client / Context</span>
              <span className="text-sm font-medium text-[#1C1917]">{project.client}</span>
            </div>
            <div>
              <span className="block text-xs font-mono uppercase text-[#7C4A32]">Timeline</span>
              <span className="text-sm font-medium text-[#1C1917]">{project.year}</span>
            </div>
            <div>
              <span className="block text-xs font-mono uppercase text-[#7C4A32]">Key Metrics</span>
              <span className="text-sm font-medium text-[#1C1917]">{project.metrics || 'Shipped to production'}</span>
            </div>
          </div>

          {/* Dedicated Video Player for Project with videoUrl */}
          {project.videoUrl && (
            <div className="pt-2">
              <ProjectVideoPlayer
                videoUrl={project.videoUrl}
                title={project.title}
              />
            </div>
          )}

          {/* Dedicated Call to Action for Project with previewUrl */}
          {project.previewUrl && (
            <div className="p-5 bg-gradient-to-r from-[#0E9F6E]/10 to-transparent rounded-lg border border-[#0E9F6E]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-sm text-[#1C1917] mb-1">
                  Interactive Figma Prototype &amp; Screens
                </h4>
                <p className="text-xs text-[#57534E]">
                  Explore all 20+ mobile flows, UI micro-interactions, and checkout journeys live.
                </p>
              </div>
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E9F6E] hover:bg-[#0B7F58] text-white text-xs font-semibold rounded-md shadow-xs transition-all hover:scale-102 shrink-0"
              >
                <span>Launch Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Narrative Details */}
          <div className="space-y-6">
            {project.highlights ? (
              /* Rich structured layout for Habesha Market project */
              <div className="space-y-6 text-[#44403C]">
                {/* Introduction & Bootcamp Background */}
                <div className="space-y-3">
                  <p className="text-sm sm:text-base leading-relaxed text-[#332E2B] font-medium">
                    This project was developed during a <strong className="text-[#1C1917] font-semibold">6-week online program under the Ayrese 6-Skill Tech Accelerator Bootcamp 2026</strong>, where I completed the <strong className="text-[#1C1917] font-semibold">UI/UX &amp; Product Design track</strong>. As part of the program, I designed a mobile-first e-commerce experience tailored to the Ethiopian market.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-[#57534E]">
                    <strong className="text-[#1C1917] font-semibold">Habesha Market</strong> is a modern, premium mobile application concept created to bridge traditional Ethiopian commerce with a seamless and intuitive digital shopping experience.
                  </p>
                </div>

                {/* Project Overview */}
                <div className="pt-4 border-t border-[#E7E2DA]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] mb-1.5 font-bold">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-[#44403C]">
                    {project.overview}
                  </p>
                </div>

                {/* Core Highlights */}
                <div className="pt-4 border-t border-[#E7E2DA] space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] font-bold">
                    Core Highlights
                  </h4>

                  {/* 1. Brand Identity & Visual Design */}
                  <div className="p-4 sm:p-5 bg-[#F5F1EB] rounded-lg border border-[#E2DDD5] space-y-2.5">
                    <h5 className="font-display font-semibold text-sm sm:text-base text-[#1C1917] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#0E9F6E] text-white flex items-center justify-center text-xs font-mono">1</span>
                      Brand Identity &amp; Visual Design
                    </h5>
                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#57534E] pl-1">
                      {project.highlights.brandIdentity?.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 2. Target Audience & Problem Focus */}
                  <div className="p-4 sm:p-5 bg-[#F5F1EB] rounded-lg border border-[#E2DDD5] space-y-2.5">
                    <h5 className="font-display font-semibold text-sm sm:text-base text-[#1C1917] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#0E9F6E] text-white flex items-center justify-center text-xs font-mono">2</span>
                      Target Audience &amp; Problem Focus
                    </h5>
                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#57534E] pl-1">
                      {project.highlights.targetAudience?.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Key User Flows */}
                  <div className="p-4 sm:p-5 bg-[#F5F1EB] rounded-lg border border-[#E2DDD5] space-y-3">
                    <h5 className="font-display font-semibold text-sm sm:text-base text-[#1C1917] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#0E9F6E] text-white flex items-center justify-center text-xs font-mono">3</span>
                      Key User Flows (20+ Mobile Screens)
                    </h5>
                    <div className="space-y-3 pl-1">
                      {project.highlights.keyUserFlows?.map((flow, i) => (
                        <div key={i} className="border-l-2 border-[#0E9F6E]/40 pl-3 space-y-0.5">
                          <span className="font-semibold text-xs sm:text-sm text-[#1C1917] block">
                            {flow.title}
                          </span>
                          <span className="text-xs sm:text-sm text-[#57534E] block leading-relaxed">
                            {flow.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="pt-4 border-t border-[#E7E2DA] space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] font-bold">
                    Outcome
                  </h4>
                  <p className="text-xs sm:text-sm text-[#57534E] mb-2">
                    This project strengthened my ability to:
                  </p>
                  <ul className="space-y-2">
                    {project.outcomePoints?.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#332E2B]">
                        <CheckCircle2 className="w-4 h-4 text-[#0E9F6E] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used */}
                {project.toolsUsed && (
                  <div className="pt-4 border-t border-[#E7E2DA]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] font-bold mb-2">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-[#ECE5DA] text-[#443830] text-xs font-medium rounded-sm border border-[#DCD3C5]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Standard layout for CIMS and other systems */
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] mb-1 font-bold">
                    Overview
                  </h4>
                  <p className="text-[#44403C] text-base leading-relaxed">{project.fullDesc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E7E2DA]">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] font-bold">
                      The Challenge
                    </h4>
                    <p className="text-[#57534E] text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] font-bold">
                      The Resolution
                    </h4>
                    <p className="text-[#57534E] text-sm leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Unboxed Tags */}
            <div className="pt-4 border-t border-[#E7E2DA]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] block mb-2 font-bold">
                Technologies &amp; Disciplines
              </span>
              <div className="text-xs font-medium text-[#57534E]">
                {project.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {idx < project.tags.length - 1 && (
                      <span className="mx-2 text-[#A8988B]" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-[#E7E2DA] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#78716C]">
              Case Study ID: {project.id}
            </span>
            <div className="flex items-center gap-3">
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0E9F6E] hover:bg-[#0B7F58] text-white text-xs font-semibold rounded shadow-xs transition-colors"
                >
                  <span>Open Prototype</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] hover:bg-[#EAE5DC] rounded-md transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
