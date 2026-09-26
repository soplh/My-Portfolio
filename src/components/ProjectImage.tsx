import React, { useState, useRef } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Project } from '../types';

interface ProjectImageProps {
  project: Project;
  className?: string;
  showUploadTrigger?: boolean;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  project,
  className = 'w-full h-full object-cover',
  showUploadTrigger = true
}) => {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    return localStorage.getItem('proj_img_' + project.id) || project.imageUrl;
  });
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgSrc(result);
          setHasError(false);
          try {
            localStorage.setItem('proj_img_' + project.id, result);
          } catch {
            // Quota protection
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const recommendedFileName =
    project.id === 'cims-eiar' ? 'Screenshot (252).png' : 'Screenshot (267).png';

  return (
    <div className="relative w-full h-full group/img overflow-hidden bg-[#241A14]">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label={`Upload original picture for ${project.title}`}
      />

      {!hasError ? (
        <>
          <img
            src={imgSrc}
            alt={project.title}
            className={`${className} transition-transform duration-700 ease-out group-hover:scale-105`}
            onError={() => setHasError(true)}
          />
          {showUploadTrigger && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="absolute bottom-2.5 right-2.5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 bg-[#1A120E]/85 backdrop-blur-xs p-2 rounded-full border border-[#4A382D] text-[#E5D7CA] hover:text-white hover:scale-105 shadow-md z-20 cursor-pointer"
              title={`Select original picture (${recommendedFileName})`}
              aria-label={`Select original picture for ${project.title}`}
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          )}
        </>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#211813] hover:bg-[#2A1E18] transition-colors cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-[#34241B] flex items-center justify-center text-[#D4B996] mb-2 group-hover:scale-110 transition-transform">
            <Upload className="w-5 h-5" />
          </div>
          <span className="font-display font-semibold text-xs text-[#F5EDE4] mb-0.5">
            Click to load project screenshot
          </span>
          <span className="text-[11px] text-[#A8988B] font-mono">
            {recommendedFileName}
          </span>
        </div>
      )}
    </div>
  );
};
