import React from 'react';
import { Play, Video } from 'lucide-react';

/**
 * Online Google Drive Video URL:
 * Paste your Google Drive video link below.
 * Example formats supported:
 * - https://drive.google.com/file/d/YOUR_FILE_ID/preview
 * - https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
 * - https://drive.google.com/open?id=YOUR_FILE_ID
 */
export const projectVideoUrl = "https://drive.google.com/file/d/1RqFfgIL019RZ3kGjX8bYm9vG7rgwFwtM/view?usp=sharing";

interface ProjectVideoPlayerProps {
  videoUrl?: string;
  title: string;
}

/**
 * Converts Google Drive, YouTube, Loom, or other video URLs into embeddable iframe URLs.
 */
function getEmbedUrl(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed || trimmed === 'PASTE_LINK_HERE') return null;

  // 1. Google Drive URLs
  // Case A: Already preview embed URL: https://drive.google.com/file/d/.../preview
  if (trimmed.includes('drive.google.com') && trimmed.includes('/preview')) {
    return trimmed;
  }

  // Case B: Standard view link: https://drive.google.com/file/d/FILE_ID/view or /view?usp=sharing
  const gDriveMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (gDriveMatch && gDriveMatch[1]) {
    return `https://drive.google.com/file/d/${gDriveMatch[1]}/preview`;
  }

  // Case C: Open with ID: https://drive.google.com/open?id=FILE_ID or https://drive.google.com/uc?id=FILE_ID
  const gDriveIdMatch = trimmed.match(/drive\.google\.com\/(?:open|uc)\?[^#]*\bid=([a-zA-Z0-9_-]+)/);
  if (gDriveIdMatch && gDriveIdMatch[1]) {
    return `https://drive.google.com/file/d/${gDriveIdMatch[1]}/preview`;
  }

  // 2. YouTube
  if (trimmed.includes('youtube.com/watch?v=')) {
    const id = trimmed.split('watch?v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (trimmed.includes('youtu.be/')) {
    const id = trimmed.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  // 3. Loom
  if (trimmed.includes('loom.com/share/')) {
    return trimmed.replace('/share/', '/embed/');
  }

  // 4. Any direct HTTPS URL
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  return null;
}

export const ProjectVideoPlayer: React.FC<ProjectVideoPlayerProps> = ({ videoUrl, title }) => {
  // Prefer the project-level video URL, then fall back to any explicitly passed URL.
  const activeUrl = projectVideoUrl || videoUrl || '';

  const embedUrl = getEmbedUrl(activeUrl || '');

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C4A32] font-bold flex items-center gap-1.5">
          <Video className="w-4 h-4 text-[#7C4A32]" />
          <span>Interactive Video Demo &amp; System Walkthrough</span>
        </h4>
      </div>

      <div className="relative w-full rounded-lg overflow-hidden bg-black border border-[#D5CDC0] aspect-video shadow-md">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#1E1815] text-[#E7DFD5]">
            <div className="w-12 h-12 rounded-full bg-[#352720] border border-[#554035] flex items-center justify-center text-[#D4B996] mb-3">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </div>
            <h5 className="font-display text-sm font-semibold text-white mb-1">
              Online Video Demo
            </h5>
            <p className="text-xs text-[#A8988B] max-w-md leading-relaxed">
              Google Drive video demonstration for {title}. Paste your online Google Drive URL into{' '}
              <code className="text-[#D4B996] bg-black/60 px-1.5 py-0.5 rounded font-mono">
                projectVideoUrl
              </code>{' '}
              to play the video.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};