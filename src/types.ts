export interface Project {
  id: string;
  title: string;
  category: 'Product Design' | 'Frontend Dev' | 'Fullstack Dev' | 'Design System' | 'Mobile';
  client: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  overview?: string;
  challenge: string;
  outcome: string;
  tags: string[];
  metrics?: string;
  themeColor: string;
  imageUrl: string;
  videoUrl?: string; // Video demo file or online Google Drive / YouTube embed URL
  previewUrl?: string; // Live preview or prototype URL
  stripType?: 'people' | 'places' | 'sports' | 'architecture' | 'clock';
  highlights?: {
    brandIdentity?: string[];
    targetAudience?: string[];
    keyUserFlows?: {
      title: string;
      desc: string;
    }[];
  };
  outcomePoints?: string[];
  toolsUsed?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}