export interface Project {
  id: string;
  title: string;
  company: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Frontend' | 'Backend' | 'Full-Stack';
  year: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
  proficiency: number; // 0-100
  icon?: string;
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
export type SkillCategoryType = 'Frontend' | 'Backend' | 'Tools' | 'Other';

export interface Tweet {
  id: string;
  text: string;
  createdAt: string;
  url: string;
  likes?: number;
  retweets?: number;
}
