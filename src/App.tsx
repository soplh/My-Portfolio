import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroCover } from './components/HeroCover';
import { PanoramicStrips } from './components/PanoramicStrips';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('cover');

  // Handle smooth navigation to specific section
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const sectionIds = ['cover', 'strips', 'about', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#7C4A32] selection:text-white">
      {/* Top Header conforming to 3-Zone Contract */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-1 w-full">
        {/* 1. Cover View (Directly inspired by Picture 2 - P22.jpg) */}
        <HeroCover
          onExploreClick={() => handleNavigate('strips')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 2. Stacked Panoramic Visual Strips (Directly inspired by Picture 1 - p3.jpg) */}
        <PanoramicStrips onSelectSection={handleNavigate} />

        {/* 3. About Section (Bio, Philosophy, Unboxed Skills, Quantitative Proof) */}
        <AboutSection />

        {/* 4. Projects Section (Card Grid, Interactive Filters, Detail Modal) */}
        <ProjectsSection />

        {/* 5. Experience Section (Career Timeline, Roles, Deliverables) */}
        <ExperienceSection />

        {/* 6. Contact Section (Form, Email Copy, Direct Links) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={() => handleNavigate('cover')}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
