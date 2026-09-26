import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onScrollToTop: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onNavigate }) => {
  return (
    <footer className="w-full bg-[#181412] text-[#A8988B] py-12 px-6 md:px-12 border-t border-[#2D231E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <span className="font-display font-bold text-sm text-[#F5EDE4] tracking-tight">
            KALKIDAN TADESSE
          </span>
          <span className="text-[#6E5D52]" aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <span className="text-[#6E5D52]" aria-hidden="true">·</span>
          <span>Designed with hope and love.</span>
        </div>

        {/* Center: Quick Section Links */}
        <div className="flex items-center gap-6 text-xs">
          <button
            onClick={() => onNavigate('cover')}
            className="hover:text-[#F5EDE4] transition-colors cursor-pointer"
          >
            Cover
          </button>
          <button
            onClick={() => onNavigate('strips')}
            className="hover:text-[#F5EDE4] transition-colors cursor-pointer"
          >
            Directory
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-[#F5EDE4] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-[#F5EDE4] transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="hover:text-[#F5EDE4] transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-[#F5EDE4] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            onClick={onScrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs text-[#D9BAA3] hover:text-white bg-[#261E1A] hover:bg-[#382A22] rounded-md border border-[#3E2E25] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
