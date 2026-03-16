
export type Page = 'home' | 'projects' | 'profile';

export interface Project {
  id: string;
  category: 'Underwater Wireless Optical Communication' | 'IT Project' | 'AI/Robot';
  title: string;
  titleEn?: string;
  description: string;
  date: string;
  imageUrl: string;
  color: string;
  url?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}
