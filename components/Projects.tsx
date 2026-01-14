
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'IT Education', 'Communication Engineering', 'Research'];

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 serif-text">Featured Work</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 serif-text">
          Showcasing research in Communication Engineering and IT Education initiatives.
        </p>
      </div>

      <div className="flex gap-2 pb-6 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`flex h-10 shrink-0 items-center justify-center rounded-lg px-6 shadow-sm transition-all whitespace-nowrap ${
              filter === cat 
                ? 'bg-primary text-white font-semibold' 
                : 'bg-white/5 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium'
            }`}
          >
            <p className="text-sm serif-text">{cat}</p>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="flex flex-col items-stretch justify-start rounded-2xl bg-white dark:bg-[#151b27] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div 
              className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover" 
              style={{ backgroundImage: `url("${project.imageUrl}")` }}
            />
            <div className="flex w-full flex-col items-stretch justify-center gap-1 p-5">
              <div className="flex items-center mb-1">
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider serif-text ${
                  project.color === 'blue' ? 'bg-blue-900/40 text-blue-400' :
                  project.color === 'emerald' ? 'bg-emerald-900/40 text-emerald-400' :
                  'bg-amber-900/40 text-amber-400'
                }`}>
                  {project.category}
                </span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">
                {project.titleEn && <span className="serif-text block text-sm opacity-60">{project.titleEn}</span>}
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed mt-2 serif-text">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center text-slate-500 dark:text-slate-500 gap-2">
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  <p className="text-xs font-medium serif-text">{project.date}</p>
                </div>
                <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-sm active:opacity-90 transition-opacity serif-text">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
