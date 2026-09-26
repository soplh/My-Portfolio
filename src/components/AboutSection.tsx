import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#F8F7F5] border-b border-[#E7E2DA]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-[#E2DDD5]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7C4A32] mb-2">
            <span>02 / ABOUT</span>
            <span aria-hidden="true">·</span>
            <span>BIOGRAPHY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917]">
            Clean &amp; Professional
          </h2>
        </div>

        {/* Bio Content */}
        <div className="space-y-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#292524] leading-snug max-w-3xl">
            Designing, building structures, and bringing imagined ideas to life.
          </h3>

          <div className="space-y-5 text-[#57534E] text-base sm:text-lg leading-relaxed max-w-4xl">
            {PERSONAL_INFO.bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Minimalist Principles Row */}
          <div className="pt-10 border-t border-[#EAE5DC] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-5 bg-[#F2ECE4] rounded-lg border border-[#E0D8CB]">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#7C4A32] mb-1.5">Focus</span>
              <span className="font-medium text-base text-[#1C1917] block">Attention to Detail</span>
              <span className="text-sm text-[#78716C] mt-1 block">Focusing on what most people tend to overlook.</span>
            </div>
            <div className="p-5 bg-[#F2ECE4] rounded-lg border border-[#E0D8CB]">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#7C4A32] mb-1.5">Heart</span>
              <span className="font-medium text-base text-[#1C1917] block">Create from the Heart</span>
              <span className="text-sm text-[#78716C] mt-1 block">Always ready to learn and continuously upgrade myself.</span>
            </div>
            <div className="p-5 bg-[#F2ECE4] rounded-lg border border-[#E0D8CB]">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#7C4A32] mb-1.5">Outcome</span>
              <span className="font-medium text-base text-[#1C1917] block">Impactful &amp; Intuitive</span>
              <span className="text-sm text-[#78716C] mt-1 block">Simple, intuitive, and meaningful digital experiences.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
