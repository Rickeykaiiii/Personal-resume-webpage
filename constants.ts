
import { Project, Skill, Language } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    category: 'Communication Engineering',
    title: '6G通信項目',
    titleEn: '6G Communication Project',
    description: 'Research on next-generation communication protocols, focusing on ultra-reliable low-latency architectures for future networks.',
    date: 'Jan 2024 - Present',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPt75Re0Tq1PM5n77e-k6zXgyaPax18uFjMJh6LS27oL9O-5QBg3hBUWVfoMsR55-lic0zTxHCDEeETJcbvMt0R0kDH1Ooasece5k3T1AkZm1XFlyXQD2R_q_ZF2YuWIwhEsgmsu1Ve8vrM7KaS5ouRh0C20-_m3EGBuPh_u0Jz9StYt1jdeIXc3YOfMwbIYN6LBFIjMTNRqs-weeUy8dPl8IDLtt2QiBI7iZHU29C2D4fxM0wEnw2DfuC8JX8jBbSzBVslk27',
    color: 'blue'
  },
  {
    id: '2',
    category: 'Research',
    title: '水下無線光信道研究',
    description: 'Comprehensive investigation into signal propagation, turbulence modeling, and channel capacity for underwater optical communication links.',
    date: 'Sep 2023 - Dec 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdKj5skZJuSX6mkvCVIK6IZiMF1V03KXknGJs2IdMa1kCQM2jAJh2V9SuWZBYhccBpgFeW5pf4qPrjFku-edg463nF4ZUGlNIcvIq7hjzrJ_WpGrR-TP9-lgwhtgVrW-r2jEDMfzYI3MDN8nDCL9-B0AnNdwaAuQz16uq8KmkVEtZVp-G0YifFIp6OToSgubmsQlpldBxouPMSZmha5UGYmznnPd3KUkx2f9cG5KndYfsbWiznBZN2COLHGPctJdWbv5RCK-F8',
    color: 'emerald'
  },
  {
    id: '3',
    category: 'IT Education',
    title: '校園二手交易平台推廣項目',
    description: 'Leading a digital transformation project for campus sustainability, managing platform deployment and user engagement strategies.',
    date: 'Mar 2023 - Aug 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrvrTlhrxtTP7g9Ny1ursFIaUY1nEosTQG81Jh3l6wwAMCjA7LfEkmyhJAbl4xGjv11hPxesUSYJ3F-bAWYFq3kywbUy1ZGWn9PW4WWHRhQB6Bz4scXGkO79xQaUBtAgvZCOIWX0HroDFimbWY-LFKdHwjd3hp2YZC7gEGPtxom5knJz7Epa7rh2MrlATFDnFRfQRqSLU0_kIYqSz0ymYIyBHvrg-zs6usoEtFDlIz3SrMl9qJhhaywnugrS420V-Bcymv9cFk',
    color: 'amber'
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
