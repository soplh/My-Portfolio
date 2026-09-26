import React, { useState } from 'react';
import { VisualAsset } from './VisualAsset';

interface StripItem {
  id: string;
  targetId: string;
  title: string;
  visualType: 'people' | 'places' | 'sports' | 'about-fence' | 'contact-clock';
}

interface PanoramicStripsProps {
  onSelectSection: (sectionId: string) => void;
}

const STRIPS: StripItem[] = [
  {
    id: 'strip-hero',
    targetId: 'cover',
    title: 'STATEMENT',
    visualType: 'people'
  },
  {
    id: 'strip-about',
    targetId: 'about',
    title: 'ABOUT',
    visualType: 'about-fence'
  },
  {
    id: 'strip-projects',
    targetId: 'projects',
    title: 'PROJECTS',
    visualType: 'places'
  },
  {
    id: 'strip-experience',
    targetId: 'experience',
    title: 'EXPERIENCE',
    visualType: 'sports'
  },
  {
    id: 'strip-contact',
    targetId: 'contact',
    title: 'CONTACT',
    visualType: 'contact-clock'
  }
];

export const PanoramicStrips: React.FC<PanoramicStripsProps> = ({ onSelectSection }) => {
  const [hoveredStrip, setHoveredStrip] = useState<string | null>(null);

  return (
    <section id="strips" className="relative w-full bg-[#181412] text-white overflow-hidden select-none">
      {/* Stacked Panoramic Visual Strips */}
      <div className="w-full flex flex-col divide-y divide-[#3D2E25]/40 border-y border-[#3D2E25]/50">
        {STRIPS.map((strip) => {
          const isHovered = hoveredStrip === strip.id;

          return (
            <div
              key={strip.id}
              onMouseEnter={() => setHoveredStrip(strip.id)}
              onMouseLeave={() => setHoveredStrip(null)}
              onClick={() => onSelectSection(strip.targetId)}
              className="group relative w-full h-[160px] sm:h-[190px] md:h-[230px] lg:h-[260px] overflow-hidden cursor-pointer transition-all duration-500 ease-out flex items-center justify-center"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectSection(strip.targetId);
                }
              }}
              aria-label={`Navigate to ${strip.title} section`}
            >
              {/* Background Photographic Visual */}
              <div className="absolute inset-0 w-full h-full transform transition-transform duration-700 ease-out scale-100 group-hover:scale-105">
                <VisualAsset
                  type={strip.visualType}
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.92]"
                />
              </div>

              {/* Tint overlay with warm chocolate undertones */}
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isHovered
                    ? 'bg-[#18120E]/40'
                    : 'bg-[#18120E]/60'
                }`}
              />

              {/* Subtle film grain & gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

              {/* Centered Title (Only text retained) */}
              <div className="relative z-10 flex items-center justify-center p-6 text-center">
                <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-[0.25em] text-[#F5EDE4] uppercase transition-all duration-300 group-hover:tracking-[0.3em] group-hover:text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  {strip.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
