import React, { useState, useEffect, useRef, useCallback } from 'react';
import Home from './components/Home.tsx';
import Projects from './components/Projects.tsx';
import Profile from './components/Profile.tsx';

type Page = 'home' | 'about' | 'projects' | 'resume';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  
  const pages: Page[] = ['home', 'about', 'projects', 'resume'];
  const navItems: { label: string; value: Page }[] = [
    { label: 'HOME', value: 'home' },
    { label: 'ABOUT', value: 'about' },
    { label: 'PROJECT', value: 'projects' },
    { label: 'RESUME', value: 'resume' },
  ];

  const handlePageChange = useCallback((nextPage: Page) => {
    if (nextPage === activeTab || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveTab(nextPage);
    
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [activeTab, isTransitioning]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentIndex = pages.indexOf(activeTab);

      if (mainRef.current && activeTab !== 'home') {
        const { scrollTop, scrollHeight, clientHeight } = mainRef.current;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

        if (direction === -1 && !isAtTop) return;
        if (direction === 1 && !isAtBottom) return;
      }

      const nextIndex = currentIndex + direction;
      if (nextIndex >= 0 && nextIndex < pages.length) {
        handlePageChange(pages[nextIndex]);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeTab, isTransitioning, handlePageChange]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return null;
      case 'about':
        return (
          <div className="max-w-2xl mx-auto pt-48 pb-32 px-6 text-white text-center">
            <h1 className="text-4xl font-light tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">About Me</h1>
            <p className="text-white/60 leading-relaxed text-lg font-light serif-text animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              我是一名專注於通信工程與 IT 教育領域的研究生，研究方向聚焦 6G 通信技術下的水下可見光通信，熱衷於 LLM、YOLO 等技術工具的實踐與探索，並熟練掌握 Python 語言。我始終傾向以極簡且深邃的表達方式，清晰傳遞專業核心內容。
            </p>
          </div>
        );
      case 'projects':
        return <div className="max-w-4xl mx-auto pt-32 pb-32"><Projects /></div>;
      case 'resume':
        return <div className="max-w-3xl mx-auto pt-32 pb-32"><Profile /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-blue-500/30 overflow-hidden">
      {/* 3D 背景 */}
      <div className={`fixed inset-0 transition-all duration-1000 ease-out ${activeTab !== 'home' ? 'opacity-30 scale-110 blur-md' : 'opacity-100 scale-100 blur-0'}`}>
        <Home />
      </div>

      {/* 首頁中心文字 */}
      {activeTab === 'home' && (
        <div className="fixed inset-0 flex items-center justify-center z-30 pointer-events-none">
          <h1 className="rns-font text-5xl md:text-7xl font-bold tracking-tight text-white animate-in fade-in zoom-in-95 duration-1000">
            Hi, I'm Rickey!
          </h1>
        </div>
      )}

      {/* 右上角導航 */}
      <nav className="fixed top-8 right-12 z-50 flex gap-8">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => handlePageChange(item.value)}
            className={`text-[11px] tracking-[0.25em] font-medium transition-all duration-500 hover:text-white relative py-2 group ${
              activeTab === item.value ? 'text-white' : 'text-white/40'
            }`}
          >
            {item.label}
            <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-500 origin-right ${activeTab === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
          </button>
        ))}
      </nav>

      {/* 滾動提示指示器 (僅在 Home) */}
      {activeTab === 'home' && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 animate-bounce">
          <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      )}

      {/* 內容區域 */}
      <main 
        ref={mainRef}
        className={`relative z-10 w-full h-screen overflow-y-auto no-scrollbar transition-all duration-700 ease-in-out ${
          activeTab === 'home' ? 'pointer-events-none opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
        }`}
      >
        {renderContent()}
      </main>

      {/* 全局 UI 飾物 */}
      <div className="fixed inset-0 pointer-events-none flex flex-col justify-end p-12 z-20">
        <div className="flex justify-between items-end">
          <div className="text-white/5 text-[9px] tracking-widest flex gap-4">
             <span>0{pages.indexOf(activeTab) + 1}</span>
             <div className="w-8 h-[1px] bg-white/5 self-center" />
             <span>04</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;