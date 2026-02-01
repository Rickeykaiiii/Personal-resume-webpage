import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'IT Education', 'Communication Engineering', 'Research'];

  // Fix: Removed space in variable name to correctly define 'filteredPROJECTS'
  const filteredPROJECTS = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="px-4 md:px-6 py-8 md:py-12">
      <div className="mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-2 md:mb-3 serif-text tracking-tight">Selected Projects</h2>
        <div className="h-[1px] w-10 md:w-12 bg-blue-600 mb-3 md:mb-4" />
        <p className="text-xs md:text-sm text-white/40 serif-text max-w-md">
          A curated collection of research initiatives and digital solutions.
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 pb-8 md:pb-10 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-[9px] md:text-[10px] tracking-[0.15em] px-3 md:px-4 py-1.5 md:py-2 rounded-full border transition-all duration-300 whitespace-nowrap ${
              filter === cat 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent border-white/10 text-white/50 hover:border-white/30'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filteredPROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group relative flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            <div 
              className="w-full aspect-video bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              style={{ backgroundImage: `url("${project.imageUrl}")` }}
            />
            <div className="p-5 md:p-8">
              <span className="text-[9px] tracking-[0.2em] text-blue-400 font-bold uppercase mb-2 md:mb-3 block">
                {project.category}
              </span>
              <h3 className="text-white text-lg md:text-xl font-medium mb-2 md:mb-3">
                {project.title}
              </h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed serif-text line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;