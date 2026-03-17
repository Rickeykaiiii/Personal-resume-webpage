import { Project, Skill, Language } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    category: 'Underwater Wireless Optical Communication',
    title: 'UWOC 複合光學系統專利',
    description: '基於複合光學系統的新型水下無線光通信發射器，具有增強的光束準直和能量效率。',
    date: '2024',
    imageUrl: '/assets/images/patent1.png',
    color: 'blue',
    url: '/uwoc-patent.html'
  },
  {
    id: '2',
    category: 'Underwater Wireless Optical Communication',
    title: '水下無線光信道研究',
    description: '對水下光通信鏈路的信號傳播、湍流建模和信道容量進行全面研究。',
    date: 'Sep 2023 - Dec 2023',
    imageUrl: '/assets/images/UWOC.jpg',
    color: 'emerald',
    url: '/uwoc-project.html'
  },
  {
    id: '5',
    category: 'Underwater Wireless Optical Communication',
    title: 'UWOC 組網技術研究',
    description: '水下無線光通信組網研究，包括多節點拓撲設計和網絡協議。',
    date: '2024',
    imageUrl: '/assets/images/UWOC-Networking.png',
    color: 'cyan',
    url: '/uwoc-network.html'
  },
  {
    id: '3',
    category: 'IT Project',
    title: '三星堆文物線上展示',
    description: '通過數字媒體呈現三星堆考古文物和文化遺產的互動式線上展覽平台。',
    date: '2024',
    imageUrl: '/assets/images/sanxingdui.png',
    color: 'amber',
    url: '/sanxingdui.html'
  },
  {
    id: '4',
    category: 'IT Project',
    title: '小型桌面機器人',
    description: '具有互動功能和智能自動化的小型桌面機器人項目。',
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
  { name: '粵語', level: '母語', percentage: 100 },
  { name: '普通話', level: '母語', percentage: 95 },
  { name: '英語', level: '良好', percentage: 80 }
];

export const PORTRAIT_URLS = {
  HOME_HERO: '/assets/images/photo.png',
  PROFILE_THUMB: '/assets/images/photo.png'
};