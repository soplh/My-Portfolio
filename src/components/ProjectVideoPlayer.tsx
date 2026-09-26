import React, { useState, useRef } from 'react';
import { Play, Video } from 'lucide-react';

interface ProjectVideoPlayerProps {
  videoUrl: string;
  title: string;
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({ videoUrl, title }) => {
  const [videoSrc, setVideoSrc] = useState<string>(() => {
    return localStorage.getItem('demo_video_' + title) || videoUrl;
  });
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Helper to detect YouTube / Vimeo / Loom
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('watch?v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('loom.com/share/')) {
      return url.replace('/share/', '/embed/');
    }
    return null;
  };

  const embedUrl = getEmbedUrl(videoSrc);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setHasError(false);
      try {
        localStorage.setItem('demo_video_' + title, url);
      } catch {
        // Quota safety
      }
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] font-bold flex items-center gap-1.5">
          <Video className="w-4 h-4 text-[#7C4A32]" />
          <span>Interactive Video Demo &amp; System Walkthrough</span>
        </h4>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="text-[11px] font-mono text-[#8C7A6D] hover:text-[#5C3A28] underline cursor-pointer"
        >
          Select Video File
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload video demo file"
      />

      <div className="relative w-full rounded-lg overflow-hidden bg-black border border-[#D5CDC0] aspect-video">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : !hasError ? (
          <video
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-contain"
            onError={() => setHasError(true)}
          />
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#1A120E] text-[#D9BAA3] cursor-pointer hover:bg-[#251A14] transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#34241B] flex items-center justify-center text-[#D4B996] mb-3">
              <Play className="w-6 h-6 ml-0.5 fill-current" />
            </div>
            <p className="text-sm font-semibold text-white mb-1">
              Video Demo Ready
            </p>
            <p className="text-xs text-[#A8988B] max-w-sm mb-3">
              Place <code className="text-[#D4B996] bg-black/40 px-1 py-0.5 rounded">public/cims.mp4</code> or click here to choose a video file from your computer.
            </p>
            <span className="text-xs font-mono text-[#E5D7CA] border border-white/20 px-3 py-1 rounded bg-white/5">
              Browse Video File
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
