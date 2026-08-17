export interface Project {
  id: string;
  title: string;
  company: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: ('Frontend' | 'Backend' | 'Full-Stack')[];
  year: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface SkillGroup {
  /** Stage of the lifecycle this group covers. */
  label: string;
  /** Technologies shown on the portfolio, in display order. */
  tech: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  duration: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  readTime: string;
  url: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export type Theme = 'light' | 'dark';

export type ProjectCategoryType = 'All' | 'Frontend' | 'Backend' | 'Full-Stack';

export interface Tweet {
  id: string;
  text: string;
  createdAt: string;
  url: string;
  likes?: number;
  retweets?: number;
}

export interface FeaturedMedia {
  id: string;
  title: string;
  description: string;
  platform: 'X' | 'YouTube' | 'LinkedIn';
  contentType: 'video' | 'thread' | 'demo';
  date: string;
  url: string;
  duration?: string;
  views?: string;
  tags: string[];
}

/** A real video post pulled from X, playable directly on the site. */
export interface XVideo {
  id: string;
  title: string;
  description: string;
  /** Permalink back to the post on X. */
  url: string;
  /** Thumbnail served by X's image CDN. */
  poster?: string;
  /** Highest-bitrate MP4 variant — this is what the on-site player streams. */
  videoUrl?: string;
  duration?: string;
  date?: string;
  likes?: number;
  replies?: number;
  views?: string;
  tags: string[];
  /** [width, height] of the source video, used to size the player. */
  aspectRatio?: [number, number];
}
