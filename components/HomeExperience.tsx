
import React from 'react';
import { EXPERIENCE } from '../constants';
import { Building2, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const HomeExperience: React.FC = () => {
  const recentExperience = EXPERIENCE.slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 text-center">Work Experience</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="relative border-l border-slate-800 ml-2 md:ml-3 space-y-8 md:space-y-12">
          {recentExperience.map((job, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="relative pl-6 md:pl-8 group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-accent group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(56,189,248,0.3)]"></div>
                
                <div className="bg-slate-900/50 p-5 md:p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all hover:shadow-lg hover:-translate-y-1 text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                     <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-100 leading-tight">{job.role}</h3>
                        <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                          <Building2 size={14} className="text-accent shrink-0" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full w-fit border border-slate-700 mt-2 md:mt-0">
                        <Calendar size={12} />
                        {job.year}
                     </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 md:line-clamp-none">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] md:text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link - Bottom (for both mobile and desktop) */}
        <ScrollReveal delay={300}>
          <div className="mt-10 flex justify-center">
            <Link to="/about" className="group flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors text-sm border border-accent/20 px-8 py-3 rounded-full bg-accent/5 hover:bg-accent/10">
              View Full History <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeExperience;
