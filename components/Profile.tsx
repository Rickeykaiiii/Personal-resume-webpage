
import React from 'react';
import { PORTRAIT_URLS, SKILLS, LANGUAGES } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="pb-10">
      <div className="flex p-6 @container">
        <div className="flex w-full flex-col gap-6 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full ring-4 ring-primary/20 min-h-32 w-32 shadow-xl"
              style={{ backgroundImage: `url("${PORTRAIT_URLS.PROFILE_THUMB}")` }}
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-slate-900 dark:text-white text-[24px] font-bold leading-tight tracking-tight text-center">洪葦楷</p>
              <p className="text-primary text-base font-semibold leading-normal text-center mt-1 serif-text">IT Teacher | Graduate Student</p>
              <p className="text-slate-500 dark:text-[#9da6b9] text-sm font-normal leading-normal text-center serif-text">Communication Engineering</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-4 px-6 grid grid-cols-2">
        <a 
          href="mailto:hwk@bupt.edu.cn"
          className="flex flex-col items-center gap-2 bg-white dark:bg-[#1c2433] py-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all active:scale-95"
        >
          <div className="rounded-full bg-primary/10 p-3">
            <span className="material-symbols-outlined text-primary">mail</span>
          </div>
          <p className="text-slate-900 dark:text-white text-xs font-semibold leading-normal serif-text">Email Me</p>
        </a>
        <div className="flex flex-col items-center gap-2 bg-white dark:bg-[#1c2433] py-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="rounded-full bg-primary/10 p-3">
            <span className="material-symbols-outlined text-primary">location_on</span>
          </div>
          <p className="text-slate-900 dark:text-white text-xs font-semibold leading-normal serif-text">Macau</p>
        </div>
      </div>

      <div className="px-4">
        <h2 className="text-slate-900 dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em] px-2 pb-3 pt-5">Education</h2>
        <div className="bg-white dark:bg-[#1c2433] rounded-xl p-2 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-[48px_1fr] gap-x-2 px-2 items-start">
            <div className="flex flex-col items-center pt-3">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10 border border-slate-100 dark:border-slate-700"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbvOzKPrNsi4b5A82J3ss8sJU1ePCLFFgANXlr0DC0EhIXBZWTDDFUg94kBdiSC0xFtAv5yAYVQgl8Ez1SAibV9tnN2PeJ9p1d3OYUjlfHp8gc-CNXKb1FbbSdjGDPo_M_eQ-Tuo2XicIx1MfQx92RHJ5fGD98mz_-_FkPTkr-y2PeEjniKZysSNaolS46I4kiAgVP1F5iyICJvZZs1dxGr9gfiVBjUvPfB-KhjctMKKruX4Q67B-Yi2y67H0cooxmiVHP76x1")' }}
              />
            </div>
            <div className="flex flex-1 flex-col py-3 pr-2">
              <p className="text-slate-900 dark:text-white text-base font-bold leading-snug serif-text">Beijing University of Posts and Telecommunications</p>
              <p className="text-primary text-sm font-medium mt-0.5 serif-text">Graduate Student</p>
              <p className="text-slate-500 dark:text-[#9da6b9] text-sm font-normal leading-normal mt-1 serif-text">Communication Engineering Specialist focusing on advanced networking and pedagogical technology.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <h2 className="text-slate-900 dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em] px-2 pb-3">Technical Skills</h2>
        <div className="flex flex-wrap gap-2 px-2">
          {SKILLS.map((skill, idx) => (
            <div 
              key={skill.name}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm ${
                idx === 0 
                  ? 'bg-primary text-white shadow-primary/20' 
                  : 'bg-white dark:bg-[#1c2433] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800'
              } serif-text`}
            >
              <span className="material-symbols-outlined text-[18px]">{skill.icon}</span> 
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-8">
        <h2 className="text-slate-900 dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em] px-2 pb-3">Language Proficiency</h2>
        <div className="space-y-4 px-2">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="space-y-1.5">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-700 dark:text-slate-300">{lang.name}</span>
                <span className="text-primary serif-text">{lang.level}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-8">
        <h2 className="text-slate-900 dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em] px-2 pb-3">Awards & Honors</h2>
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-4 flex gap-4 items-center">
          <div className="rounded-full bg-primary/20 p-2 shrink-0">
            <span className="material-symbols-outlined text-primary font-bold">workspace_premium</span>
          </div>
          <div>
            <p className="text-slate-900 dark:text-white font-bold text-base leading-tight serif-text">University Scholarship</p>
            <p className="text-slate-500 dark:text-[#9da6b9] text-sm mt-1 serif-text">Awarded for Academic Excellence in Graduate Research.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
