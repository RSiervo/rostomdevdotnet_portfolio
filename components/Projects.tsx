
import React, { useState, useMemo } from 'react';
import { PROJECTS, TECH_LOGOS } from '../constants';
import { Project } from '../types';
import { Github, ExternalLink, Info, SearchX, Terminal, Layers, Code2, Globe } from 'lucide-react';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const techFilters = useMemo(() => {
    const techSet = new Set<string>();
    PROJECTS.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.technologies.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="py-24 md:py-32 bg-primary min-h-screen relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Engineering Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <ScrollReveal>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent font-mono text-sm uppercase tracking-widest">
                  <Terminal size={16} /> /projects/repository
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Archive</span></h2>
                <p className="text-slate-400 max-w-xl text-lg font-light leading-relaxed">
                  A comprehensive documentation of software systems, applications, and experiments engineered with scalability and impact in mind.
                </p>
              </div>
           </ScrollReveal>

           {/* Stats Dock */}
           <ScrollReveal delay={200}>
              <div className="flex gap-8 p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl">
                 <div className="text-center">
                    <div className="text-2xl font-bold text-white">{PROJECTS.length}</div>
                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Total Ops</div>
                 </div>
                 <div className="w-px h-10 bg-slate-800"></div>
                 <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Efficiency</div>
                 </div>
              </div>
           </ScrollReveal>
        </div>

        {/* Interactive Filter Command Center */}
        <ScrollReveal delay={300}>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4 overflow-x-auto no-scrollbar pb-4">
              <div className="flex items-center gap-2 text-slate-500 font-mono text-xs uppercase tracking-widest mr-4 whitespace-nowrap">
                <Layers size={14} /> Filter_By_Stack:
              </div>
              {techFilters.map((filter) => {
                const count = filter === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.technologies.includes(filter)).length;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border whitespace-nowrap ${
                      activeFilter === filter
                        ? 'bg-accent text-primary border-accent shadow-lg shadow-accent/20 scale-105'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                    }`}
                  >
                    {filter}
                    <span className={`text-[10px] opacity-60 font-mono`}>[{count}]</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer h-full flex flex-col bg-slate-950 border border-slate-800 hover:border-accent/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)] hover:-translate-y-2"
                >
                  {/* Visual Frame */}
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 transition-opacity group-hover:opacity-60"></div>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* View Details Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
                       <div className="px-6 py-2.5 bg-accent text-primary font-bold text-sm rounded-full flex items-center gap-2 shadow-2xl">
                          <Code2 size={16} /> Inspect Codebase
                       </div>
                    </div>
                  </div>

                  {/* Documentation Panel */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors leading-tight">{project.title}</h3>
                       <div className="p-2 bg-slate-900 rounded-xl border border-slate-800 text-slate-500 group-hover:text-accent transition-colors">
                          <Globe size={16} />
                       </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold rounded-lg border transition-colors ${
                            activeFilter === tech 
                              ? 'bg-accent/10 border-accent/40 text-accent' 
                              : 'bg-slate-900 text-slate-500 border-slate-800'
                          }`}
                        >
                          {TECH_LOGOS[tech] && <img src={TECH_LOGOS[tech]} className={`w-3 h-3 ${tech === 'Next.js' || tech === 'Django' ? 'invert' : ''}`} alt="" />}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-slate-500 py-32">
              <div className="w-20 h-20 bg-slate-900/50 rounded-[2rem] flex items-center justify-center mb-6 border border-slate-800">
                <SearchX size={40} className="text-slate-700" />
              </div>
              <p className="text-xl font-bold text-slate-400">Zero matches found in repository.</p>
              <button 
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-accent hover:text-highlight transition-colors font-bold uppercase text-xs tracking-widest"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
