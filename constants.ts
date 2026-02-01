
import { Project, Skill, Language } from './types';

export const PROJECTS: Project[] = [
  {
    id: '2',
    category: 'Research',
    title: '水下無線光信道研究',
    description: 'Comprehensive investigation into signal propagation, turbulence modeling, and channel capacity for underwater optical communication links.',
    date: 'Sep 2023 - Dec 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdKj5skZJuSX6mkvCVIK6IZiMF1V03KXknGJs2IdMa1kCQM2jAJh2V9SuWZBYhccBpgFeW5pf4qPrjFku-edg463nF4ZUGlNIcvIq7hjzrJ_WpGrR-TP9-lgwhtgVrW-r2jEDMfzYI3MDN8nDCL9-B0AnNdwaAuQz16uq8KmkVEtZVp-G0YifFIp6OToSgubmsQlpldBxouPMSZmha5UGYmznnPd3KUkx2f9cG5KndYfsbWiznBZN2COLHGPctJdWbv5RCK-F8',
    color: 'emerald'
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
  HOME_HERO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4jX8NMo3CokO5V19NFY_TWF0tcFVY3Ce_3vMJjd-JqwFmaLxiMYC-CzSxk4tj33qErKjWqjDljfBJUIpdaJ37T-Pp80IocKM2wqwSGDz64Frwsl85-JB-kSsWTuC90Q_0bP8oZjvnP5S-w7nxSFvW3kooDGmpIgxSCFK0HDdwCUR3OpotNV3hug7YjepdGn4BhF8zy7FSx6SeLQi-GU-b0iRKIjJEFbce-ViNsiyF6cTGrZWvRDKRCDtEVhBUsa3lRH-qIn4X',
  PROFILE_THUMB: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYDQ8O2Ee6On5ZVgVTyb8Bjf3w7BkJxmu4uWyniDKqQhbJTEWmkR2Pp-BjEiV6t5MCfTJM4gOGKqZwVktmx72K_5tMJ-U5zgZITC4Jy-uoRpGKP_XgQqiU_if4NIUQqNho9w8RAt_fvzGUec5UMrIpH7E6Iae6io4ut6JQm_TL8-8Ulj7Z8SNIQME4pydYDQf-RbZGjxTEBf4ck-9RLtWGcwdY-1FVogxJSl_jdCcUb9B2T7TnLcz0RtnSeel-4We30SMH1KsD'
};
