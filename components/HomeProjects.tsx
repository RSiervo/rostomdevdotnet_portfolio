
import React, { useState } from 'react';
import { PROJECTS, TECH_LOGOS } from '../constants';
import { Project } from '../types';
import { ArrowRight, Code2, ExternalLink, Github, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import ScrollReveal from './ScrollReveal';

const HomeProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-highlight/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 text-highlight text-xs font-bold mb-4 border border-highlight/20">
              <Terminal size={14} /> My Work Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Innovations</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              A curated selection of software engineering projects, from AI-integrated web systems to enterprise-grade management tools.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150} className="h-full">
              <div 
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer bg-slate-900/50 backdrop-blur-sm rounded-[2rem] border border-slate-800 hover:border-accent/30 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full overflow-hidden"
              >
                {/* Image Section with Code Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-slate-950/10 transition-colors"></div>
                  
                  {/* Code Snippet Overlay (Visible on Hover) */}
                  <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 font-mono text-[10px] text-accent/40 pointer-events-none overflow-hidden select-none">
                    <p className="">import &#123; System &#125; from 'core';</p>
                    <p className="ml-2">class {project.title.replace(/\s/g, '')} &#123;</p>
                    <p className="ml-4">async execute() &#123;</p>
                    <p className="ml-6">await this.deploy();</p>
                    <p className="ml-4">&#125;</p>
                    <p className="ml-2">&#125;</p>
                  </div>

                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-slate-700 uppercase tracking-widest flex items-center gap-1.5 shadow-xl">
                      <Sparkles size={10} className="text-accent" />
                      {project.technologies[0]}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1 relative">
                  {/* Hover Scanning Light */}
                  <div className="absolute top-0 left-[-100%] w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent group-hover:animate-[scan_2s_linear_infinite] pointer-events-none"></div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 3).map(tech => (
                      <div key={tech} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-[10px] font-bold text-slate-300">
                        {TECH_LOGOS[tech] && <img src={TECH_LOGOS[tech]} className={`w-3 h-3 ${tech === 'Next.js' || tech === 'Django' ? 'invert' : ''}`} alt="" />}
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Connectivity Dock */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
                     <div className="flex items-center gap-4">
                        {project.github && <Github size={18} className="text-slate-500 hover:text-white transition-colors" />}
                        {project.link && <ExternalLink size={18} className="text-slate-500 hover:text-white transition-colors" />}
                     </div>
                     <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight size={14} />
                     </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={400}>
          <div className="mt-16 flex justify-center">
            <Link 
              to="/projects" 
              className="group relative px-10 py-4 bg-slate-900 border border-slate-800 rounded-full text-slate-200 font-bold hover:text-accent hover:border-accent/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-3">
                Access Entire Repository <Code2 size={20} />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}} />
    </section>
  );
};

export default HomeProjects;
