
import React, { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Profile from './components/Profile';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'projects':
        return <Projects />;
      case 'profile':
        return <Profile />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'home': return 'Home';
      case 'projects': return 'Project Gallery';
      case 'profile': return 'About Me';
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[430px] mx-auto bg-background-light dark:bg-background-dark border-x border-slate-200 dark:border-slate-800 pb-[100px]">
      
      {/* Header Sticky Only for Profile & Projects */}
      {currentPage !== 'home' && (
        <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between">
          <div className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="material-symbols-outlined cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 p-2 rounded-full transition-colors"
            >
              arrow_back_ios
            </button>
          </div>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            {getPageTitle()}
          </h2>
        </header>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-nav-bg border-t border-slate-800 px-6 py-4 flex justify-between items-center z-[100] ios-blur">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`flex flex-col items-center gap-1.5 transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-[28px] ${currentPage === 'home' ? 'fill-1' : ''}`}>home</span>
          <span className="text-[10px] font-medium serif-text uppercase tracking-wider">Home</span>
        </button>
        
        <button 
          onClick={() => setCurrentPage('projects')}
          className={`flex flex-col items-center gap-1.5 transition-colors ${currentPage === 'projects' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-[28px] ${currentPage === 'projects' ? 'fill-1' : ''}`}>grid_view</span>
          <span className="text-[10px] font-medium serif-text uppercase tracking-wider">Projects</span>
        </button>
        
        <button 
          onClick={() => setCurrentPage('profile')}
          className={`flex flex-col items-center gap-1.5 transition-colors ${currentPage === 'profile' ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-[28px] ${currentPage === 'profile' ? 'fill-1' : ''}`}>person</span>
          <span className="text-[10px] font-medium serif-text uppercase tracking-wider">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
