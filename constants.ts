import { Project, Skill, Language } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    category: 'Underwater Wireless Optical Communication',
    title: 'UWOC 複合光學系統專利',
    description: 'A novel underwater wireless optical communication transmitter based on composite optical system, featuring enhanced beam collimation and energy efficiency.',
    date: '2024',
    imageUrl: '/assets/images/patent1.png',
    color: 'blue',
    url: '/uwoc-patent.html'
  },
  {
    id: '2',
    category: 'Underwater Wireless Optical Communication',
    title: '水下無線光信道研究',
    description: 'Comprehensive investigation into signal propagation, turbulence modeling, and channel capacity for underwater optical communication links.',
    date: 'Sep 2023 - Dec 2023',
    imageUrl: '/assets/images/UWOC.jpg',
    color: 'emerald',
    url: '/uwoc-project.html'
  },
  {
    id: '3',
    category: 'IT Project',
    title: '三星堆文物線上展示',
    description: 'An interactive online exhibition platform presenting Sanxingdui archaeological artifacts and cultural heritage through digital media.',
    date: '2024',
    imageUrl: '/assets/images/sanxingdui.png',
    color: 'amber',
    url: '/sanxingdui.html'
  },
  {
    id: '4',
    category: 'IT Project',
    title: '小型桌面機器人',
    description: 'A compact desktop robot project featuring interactive capabilities and intelligent automation.',
    date: '2024',
    imageUrl: '/assets/images/robot.png',
    color: 'purple',
    url: '/robot.html'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', icon: 'terminal' },
  { name: 'MATLAB', icon: 'functions' },
  { name: 'MS Office', icon: 'description' },
  { name: 'IT Education', icon: 'school' }
];

export const LANGUAGES: Language[] = [
  { name: 'Cantonese', level: 'Native', percentage: 100 },
  { name: 'Mandarin', level: 'Native', percentage: 95 },
  { name: 'English', level: 'Good', percentage: 80 }
];

export const PORTRAIT_URLS = {
  HOME_HERO: '/assets/images/photo.png',
  PROFILE_THUMB: '/assets/images/photo.png'
};