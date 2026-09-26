import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="relative w-full py-24 md:py-32 bg-[#F8F7F5] border-b border-[#E7E2DA]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#E2DDD5]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7C4A32] mb-2">
            <span>04 / EXPERIENCE</span>
            <span aria-hidden="true">·</span>
            <span>CAREER TRAJECTORY &amp; INTERNSHIPS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917]">
            Proven Track Record in Production.
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-[#D9D1C5] ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="relative group transition-all duration-300"
              >
                {/* Timeline node marker with warm bronze accent */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isExpanded
                      ? 'bg-[#5C3A28] border-[#5C3A28] ring-4 ring-[#5C3A28]/20 scale-110'
                      : 'bg-[#FAF9F6] border-[#8C6A58] group-hover:border-[#5C3A28]'
                  }`}
                />

                {/* Experience Card */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? 'bg-[#F2ECE4] border-[#C8BCAD] shadow-xs'
                      : 'bg-[#F4F1EA] border-[#E0D9CE] hover:border-[#C4B7A7]'
                  }`}
                >
                  {/* Top Meta Line: Clean unboxed metadata with separators */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#78716C] mb-2 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[#5C3A28] font-semibold">{exp.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.location}</span>
                    </div>
                    <span className="text-[#8C7A6D]">{exp.type}</span>
                  </div>

                  {/* Role Title and Company */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1C1917] group-hover:text-[#7C4A32] transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-base font-medium text-[#57534E] mt-0.5">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="text-[#8C7A6D] group-hover:text-[#5C3A28] transition-colors pt-1">
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-[#44403C] text-sm md:text-base leading-relaxed mt-3">
                    {exp.description}
                  </p>

                  {/* Expandable Achievements Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-[#DFD5C8] space-y-4 animate-fadeIn">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] block">
                        Key Outcomes &amp; Deliverables
                      </span>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-[#57534E] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7C4A32] mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies used: Clean unboxed list */}
                      <div className="pt-4 border-t border-[#DFD5C8] flex flex-wrap items-center gap-2 text-xs text-[#78716C]">
                        <span className="font-mono text-[#5C3A28]">Stack:</span>
                        {exp.technologies.map((tech, tIdx) => (
                          <React.Fragment key={tech}>
                            <span className="text-[#44403C]">{tech}</span>
                            {tIdx < exp.technologies.length - 1 && (
                              <span className="text-[#B8ACA0]" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
