
export type Page = 'home' | 'projects' | 'profile';

export interface Project {
  id: string;
  category: 'IT Education' | 'Communication Engineering' | 'Research';
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
