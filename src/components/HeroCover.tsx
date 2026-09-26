import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Mail, Camera, Upload } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroCoverProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const HeroCover: React.FC<HeroCoverProps> = ({ onExploreClick, onContactClick }) => {
  const [imageSrc, setImageSrc] = useState<string>(() => {
    return localStorage.getItem('kalkidan_photo') || '/k.jpg';
  });
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // If imageSrc changes, reset error
    setHasError(false);
  }, [imageSrc]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImageSrc(result);
          setHasError(false);
          try {
            localStorage.setItem('kalkidan_photo', result);
          } catch {
            // LocalStorage might be full for large images, state still keeps it
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section
      id="cover"
      className="relative min-h-screen w-full bg-[#181412] text-[#F5EDE4] flex flex-col justify-between overflow-hidden pt-20 pb-8 px-6 md:px-12 select-none"
    >
      {/* Hidden file input to pick original k.jpg */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload original photo k.jpg"
      />

      {/* Subtle background noise texture & atmospheric lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1916] via-[#161210] to-[#120E0C] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#7C4A32]/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Spacer to balance top margin */}
      <div className="w-full h-2" />

      {/* Main Centerpiece: Giant Typographic "PORTFOLIO" + Center Real Photograph from k.jpg */}
      <div className="relative z-10 my-auto py-8 md:py-4 flex flex-col items-center justify-center">
        {/* The Massive "PORTFOLIO" headline behind the subject */}
        <div className="relative w-full flex items-center justify-center">
          <h1
            className="font-display font-extrabold text-[18vw] leading-[0.8] tracking-tighter text-[#A85834] select-none text-center transform scale-y-105 pointer-events-none opacity-95 transition-transform duration-700 uppercase"
            style={{
              textShadow: '0 4px 30px rgba(168, 88, 52, 0.25)',
              letterSpacing: '-0.06em'
            }}
          >
            PORTFOLIO
          </h1>

          {/* Intertwined Center Real Photograph (Original k.jpg, unedited) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <div
              onClick={triggerUpload}
              className="group relative w-[280px] sm:w-[340px] md:w-[420px] lg:w-[460px] h-[350px] sm:h-[410px] md:h-[490px] lg:h-[530px] transition-transform duration-500 hover:scale-[1.02] rounded-lg overflow-hidden shadow-2xl border border-[#3E2E25]/60 bg-[#241A14] cursor-pointer"
              title="Click to select or change original photo k.jpg"
            >
              {!hasError ? (
                <>
                  <img
                    src={imageSrc}
                    alt="Kalkidan Tadesse"
                    className="w-full h-full object-cover opacity-80 hover:opacity-95 transition-opacity duration-300"
                    onError={() => setHasError(true)}
                  />
                  {/* Subtle photo swap button on hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1A120E]/80 backdrop-blur-xs p-2 rounded-full border border-[#4A382D] text-[#E5D7CA] hover:text-white hover:scale-105 shadow-md">
                    <Camera className="w-4 h-4" />
                  </div>
                </>
              ) : (
                /* Sleek placeholder if k.jpg file is not placed in public folder yet */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#211813] border border-[#3D2C22] hover:bg-[#281D17] transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#34241B] flex items-center justify-center text-[#D4B996] mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6" />
                  </div>
                  <span className="font-display font-bold text-sm text-[#F5EDE4] mb-1">
                    Click to load original photo
                  </span>
                  <span className="text-xs text-[#A8988B] max-w-[200px] leading-relaxed">
                    Select <code className="text-[#D4B996] font-mono">k.jpg</code> to display your photograph as it is
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Location status (Open to Work) and Action Buttons */}
      <div className="relative z-10 w-full pt-6 border-t border-[#2D231E]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C7A6D]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white/90 animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
          <span className="text-[#C9B9AA]">{PERSONAL_INFO.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#1C1613] bg-[#D4B996] hover:bg-[#E2CDAE] rounded-md transition-all duration-200 shadow-md cursor-pointer hover:translate-y-[-1px]"
          >
            <span>Explore Sections</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F5EDE4] bg-[#2A201A] hover:bg-[#382A22] border border-[#4A382D] rounded-md transition-all duration-200 cursor-pointer hover:border-[#8C6A58]"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4B996]" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </section>
  );
};
