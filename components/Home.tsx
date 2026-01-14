
import React from 'react';
import { PORTRAIT_URLS } from '../constants';

interface HomeProps {
  onNavigate: (page: 'projects') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full relative">
        <div className="w-full aspect-[4/5] overflow-hidden portrait-mask">
          <div 
            className="bg-center bg-no-repeat bg-cover w-full h-full transition-transform duration-700 hover:scale-105" 
            style={{ backgroundImage: `url("${PORTRAIT_URLS.HOME_HERO}")` }}
          />
        </div>
        <div className="pt-6 pb-4 px-6 text-center w-full">
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">洪葦楷</h2>
          <div className="flex flex-col gap-1 mb-6">
            <p className="text-primary font-semibold text-base italic serif-text">Information Technology Teacher</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm serif-text">Master's Student, Beijing University of Posts and Telecommunications</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {['6G Communication', 'Hardware Deployment', 'Network Architecture'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 serif-text">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            View Projects
          </button>
        </div>
      </section>

      <section className="px-6 py-4 w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider serif-text">Current Research</p>
            <p className="text-xl font-bold leading-tight">6G Architecture</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider serif-text">Focus</p>
            <p className="text-xl font-bold leading-tight">Hardware Deploy</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-primary text-[20px]">person</span>
          <h3 className="text-lg font-bold tracking-tight">Personal Summary</h3>
        </div>
        <div className="bg-white dark:bg-slate-900/30 rounded-xl p-5 border border-slate-100 dark:border-slate-800/50">
          <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            專注於 6G 通訊研究與硬體部署。致力於將尖端技術轉化為易於理解的資訊科技課程，並在硬體開發與網絡架構領域持續深耕。
          </p>
        </div>
      </section>

      <section className="px-6 py-4 w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-[20px]">terminal</span>
          <h3 className="text-lg font-bold tracking-tight">Core Expertise</h3>
        </div>
        <div className="space-y-3">
          {[
            { title: 'FPGA & Embedded Systems', desc: 'Hardware acceleration for 6G protocols', icon: 'memory' },
            { title: 'Curriculum Development', desc: 'IT education & modern teaching methodology', icon: 'school' },
            { title: 'Network Orchestration', desc: 'Cloud-native infrastructure & SDN', icon: 'cloud_sync' }
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-transparent dark:border-slate-800">
              <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
              </div>
              <div>
                <p className="font-semibold text-sm italic text-slate-900 dark:text-slate-200 serif-text">{item.title}</p>
                <p className="text-xs text-slate-500 serif-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
