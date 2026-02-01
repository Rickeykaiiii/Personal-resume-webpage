import { Project, Skill, Language } from './types';

export const PROJECTS: Project[] = [
  {
    id: '2',
    category: 'Research',
    title: '水下無線光信道研究',
    description: 'Comprehensive investigation into signal propagation, turbulence modeling, and channel capacity for underwater optical communication links.',
    date: 'Sep 2023 - Dec 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdKj5skZJuSX6mkvCVIK6IZiMF1V03KXknGJs2IdMa1kCQM2jAJh2V9SuWZBYhccBpgFeW5pf4qPrjFku-edg463nF4ZUGlNIcvIq7hjzrJ_WpGrR-TP9-lgwhtgVrW-r2jEDMfzYI3MDN8nDCL9-B0AnNdwaAuQz16uq8KmkVEtZVp-G0YifFIp6OToSgubmsQlpldBxouPMSZmha5UGYmznnPd3KUkx2f9cG5KndYfsbWiznBZN2COLHGPctJdWbv5RCK-F8',
    color: 'emerald',
    url: '/uwoc-project.html'
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
  { name: 'Mandarin', level: 'Fluent', percentage: 95 },
  { name: 'English', level: 'Professional', percentage: 80 }
];

export const PORTRAIT_URLS = {
  HOME_HERO: '/photo.png',
  PROFILE_THUMB: '/photo.png'
};