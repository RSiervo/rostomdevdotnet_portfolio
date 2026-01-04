
import React, { useEffect, useMemo } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Youtube, Terminal, Code2, Globe } from 'lucide-react';
import { Project } from '../types';
import { TECH_LOGOS } from '../constants';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const embedUrl = useMemo(() => {
    if (!project.videoUrl) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = project.videoUrl.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
  }, [project.videoUrl]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-primary border border-slate-800 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-500">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-slate-900/50 hover:bg-accent text-white hover:text-primary rounded-2xl transition-all border border-slate-700/50"
        >
          <X size={20} />
        </button>

        {/* Media Side */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-950 relative overflow-hidden flex flex-col">
           {embedUrl ? (
             <iframe src={embedUrl} title="Demo" className="w-full h-full" allowFullScreen />
           ) : (
             <img src={project.imageUrl} alt="" className="w-full h-full object-cover opacity-80" />
           )}
           <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 to-transparent">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-[0.3em] mb-2">
                 <Terminal size={14} /> System_Preview
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tighter">{project.title}</h2>
           </div>
        </div>

        {/* Info Side */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-primary">
          <div className="space-y-10">
            <div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-accent/10 text-accent rounded-xl">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Project Brief</h3>
               </div>
               <p className="text-slate-400 leading-relaxed text-lg font-light">
                 {project.longDescription || project.description}
               </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
               <div>
                  <h4 className="text-slate-200 font-bold mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    Core Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <div key={tech} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-bold text-slate-300">
                        {TECH_LOGOS[tech] && <img src={TECH_LOGOS[tech]} className={`w-3.5 h-3.5 ${tech === 'Next.js' || tech === 'Django' ? 'invert' : ''}`} alt="" />}
                        {tech}
                      </div>
                    ))}
                  </div>
               </div>

               {project.features && (
                 <div>
                    <h4 className="text-slate-200 font-bold mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight"></div>
                      Key Functions
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                           <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                           <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
               )}
            </div>

            <div className="pt-10 border-t border-slate-800 flex flex-col sm:flex-row gap-4 mt-auto">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl bg-slate-900 text-slate-300 font-bold hover:bg-slate-800 transition-all border border-slate-800"
                >
                  <Github size={20} /> Access Source
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl bg-accent text-primary font-bold hover:bg-highlight transition-all shadow-xl shadow-accent/20"
                >
                  <Globe size={20} /> View Live App
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
