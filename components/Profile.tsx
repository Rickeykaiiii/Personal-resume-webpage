import React, { useState, useEffect, useRef } from 'react';
import { PORTRAIT_URLS, SKILLS, LANGUAGES } from '../constants.ts';

const Profile: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>(PORTRAIT_URLS.PROFILE_THUMB);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 初始化：優先嘗試從本地儲存讀取
  useEffect(() => {
    const savedImage = localStorage.getItem('profile_image_rk');
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageSrc(base64String);
        setImageError(false);
        localStorage.setItem('profile_image_rk', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-6 py-12">
      <div className="flex flex-col items-center mb-16 text-center">
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleFileChange}
        />
        
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="w-32 h-32 rounded-full border-4 border-white/5 shadow-2xl mb-6 overflow-hidden bg-zinc-900 flex items-center justify-center group cursor-pointer relative"
        >
          {!imageError ? (
            <img 
              src={imageSrc} 
              alt="Profile" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              onError={() => {
                if (!localStorage.getItem('profile_image_rk')) {
                  setImageError(true);
                }
              }}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/40 via-black to-black text-blue-500">
              <span className="text-4xl font-extralight tracking-[0.2em] ml-[0.2em]">RK</span>
              <span className="text-[7px] mt-2 opacity-40 uppercase tracking-widest group-hover:opacity-100">Fix Image</span>
            </div>
          )}
          {/* 懸停指示 */}
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center">
             <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-30 text-sm">photo_camera</span>
          </div>
        </div>

        <h1 className="text-3xl font-light tracking-widest text-white mb-1">洪葦楷</h1>
        <p className="text-blue-500 text-xs tracking-[0.3em] font-medium uppercase mb-4">IT Teacher | Graduate Student</p>
        <div className="flex gap-4">
          <a href="mailto:hwk@bupt.edu.cn" className="text-white/20 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg">mail</span>
          </a>
          <span className="text-white/20 hover:text-white transition-colors cursor-default">
            <span className="material-symbols-outlined text-lg">location_on</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <section>
          <h2 className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-8 border-b border-white/5 pb-4">Education</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbvOzKPrNsi4b5A82J3ss8sJU1ePCLFFgANXlr0DC0EhIXBZWTDDFUg94kBdiSC0xFtAv5yAYVQgl8Ez1SAibV9tnN2PeJ9p1d3OYUjlfHp8gc-CNXKb1FbbSdjGDPo_M_eQ-Tuo2XicIx1MfQx92RHJ5fGD98mz_-_FkPTkr-y2PeEjniKZysSNaolS46I4kiAgVP1F5iyICJvZZs1dxGr9gfiVBjUvPfB-KhjctMKKruX4Q67B-Yi2y67H0cooxmiVHP76x1" alt="BUPT" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">Beijing University of Posts and Telecommunications</h3>
                <p className="text-blue-400 text-xs mb-3">Graduate Research / Communication Engineering</p>
                <p className="text-white/40 text-sm leading-relaxed serif-text">
                  Focusing on next-generation network architectures and the integration of pedagogical technologies in modern IT education.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[10px] tracking-[0.4em] text-white/30 uppercase mb-8 border-b border-white/5 pb-4">Skills & Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xs tracking-widest text-white/60 uppercase">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span key={skill.name} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] tracking-wider text-white/70">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xs tracking-widest text-white/60 uppercase">Languages</h3>
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between text-[10px] tracking-widest">
                    <span className="text-white/80">{lang.name}</span>
                    <span className="text-blue-500">{lang.level}</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10">
                    <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${lang.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;