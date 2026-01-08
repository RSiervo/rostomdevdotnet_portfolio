
import React, { useState, useEffect } from 'react';
import { User, GraduationCap, Briefcase, Sparkles, CheckCircle2, Award, Target, Rocket } from 'lucide-react';
import { EDUCATION, ABOUT_HEADLINE, ABOUT_BODY, ABOUT_HIGHLIGHTS, PROFILE_IMAGE, EXPERIENCE, CORE_TECH, TECH_LOGOS, NAME, ACHIEVEMENTS } from '../constants';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'Experience' | 'Education' | 'Achievements'>('Experience');

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-20 md:py-28 min-h-screen bg-primary relative overflow-hidden"
    >
      {/* Interactive Background Glows */}
      <div 
        className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 left-0 w-72 h-72 bg-highlight/10 rounded-full blur-[120px] -z-10 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Styled Centered Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-16 md:mb-24">
            <div className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-accent text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} className="animate-pulse" /> 
              The Story So Far
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-8 tracking-tighter">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Me</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Interactive Profile & Bio Card */}
          <div className="lg:col-span-8 group">
            <ScrollReveal className="h-full">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-[2.5rem] hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(56,189,248,0.1)] relative overflow-hidden h-full">
                
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 to-transparent"></div>

                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                  {/* Floating Image with Tilt Effect */}
                  <div className="w-full md:w-2/5 shrink-0">
                    <div 
                      className="aspect-square rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 0.5}deg) rotateX(${mousePos.y * -0.5}deg)` }}
                    >
                      <img 
                        src={"/profile.jpg"} 
                        alt={NAME} 
                        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                        onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="bg-accent/20 backdrop-blur-md text-accent text-[10px] font-bold px-3 py-1 rounded-full border border-accent/20">IT MAJOR</span>
                        <span className="bg-highlight/20 backdrop-blur-md text-highlight text-[10px] font-bold px-3 py-1 rounded-full border border-highlight/20">PROGRAMMER</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {ABOUT_HEADLINE}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                      {ABOUT_BODY}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {ABOUT_HIGHLIGHTS.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group/item">
                          <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-primary transition-all duration-300">
                            <Target size={16} />
                          </div>
                          <span className="text-slate-300 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated Stats Bar */}
                <div className="mt-12 pt-10 border-t border-slate-800/50 flex flex-wrap justify-between gap-8">
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white">Cum Laude</span>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Academic Honor</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white">5+</span>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Years of IT</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white">10+</span>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Projects Built</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white">7+</span>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Certifications</span>
                   </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Side Content: Quick Facts */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-[2rem] border border-slate-800 h-full flex flex-col hover:border-highlight/30 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-highlight/10 text-highlight rounded-2xl">
                    <Rocket size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Core Vision</h4>
                </div>
                <div className="space-y-6 flex-1">
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    "My mission is to leverage my programming skills to create AI-powered tools that solve real-world problems while ensuring the underlying infrastructure is rock-solid."
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-colors">
                      <h5 className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Current Focus</h5>
                      <p className="text-slate-200 text-sm">Full-Stack Django & AI Integrations</p>
                    </div>
                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-colors">
                      <h5 className="text-highlight text-xs font-bold uppercase tracking-widest mb-1">Looking for</h5>
                      <p className="text-slate-200 text-sm">Collaborations on Innovative Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Tabbed Interactive History Hub */}
        <ScrollReveal delay={400}>
          <div className="bg-slate-950/50 border border-slate-800 p-1 rounded-[2.5rem] mb-20 overflow-hidden">
             <div className="flex flex-col md:flex-row">
                {/* Side Nav */}
                <div className="md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/20">
                   <div className="space-y-2">
                     {(['Experience', 'Education', 'Achievements'] as const).map((tab) => (
                       <button
                         key={tab}
                         onClick={() => setActiveTab(tab)}
                         className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 text-sm font-bold tracking-wide ${
                           activeTab === tab 
                             ? 'bg-accent text-primary shadow-xl shadow-accent/20 translate-x-2' 
                             : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
                         }`}
                       >
                         {tab === 'Experience' && <Briefcase size={18} />}
                         {tab === 'Education' && <GraduationCap size={18} />}
                         {tab === 'Achievements' && <Award size={18} />}
                         {tab}
                       </button>
                     ))}
                   </div>
                </div>

                {/* Content Panel */}
                <div className="flex-1 p-8 md:p-12 min-h-[500px]">
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    {activeTab === 'Experience' && (
                      <div className="grid md:grid-cols-2 gap-8">
                        {EXPERIENCE.slice(0, 4).map((job, i) => (
                          <div key={i} className="group/item p-6 rounded-3xl border border-slate-800 hover:border-accent/40 bg-slate-900/40 transition-all">
                             <span className="text-[10px] font-black text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-widest">{job.year}</span>
                             <h4 className="text-lg font-bold text-white group-hover/item:text-accent transition-colors">{job.role}</h4>
                             <p className="text-xs font-bold text-slate-500 mb-4">{job.company}</p>
                             <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{job.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'Education' && (
                      <div className="space-y-8">
                        {EDUCATION.map((edu, i) => (
                          <div key={i} className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 relative overflow-hidden group/edu">
                             <div className="absolute top-0 right-0 p-8 text-slate-800 opacity-20 group-hover/edu:text-accent group-hover/edu:opacity-10 transition-all">
                                <GraduationCap size={120} />
                             </div>
                             <div className="relative z-10">
                                <span className="text-[10px] font-black text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-widest">{edu.year}</span>
                                <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                                <p className="text-highlight font-bold text-sm mb-4 uppercase tracking-wider">{edu.school}</p>
                                <p className="text-slate-400 mb-8 max-w-2xl">{edu.description}</p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                  {edu.highlights?.map((h, j) => (
                                    <div key={j} className="flex items-center gap-3 text-sm text-slate-300">
                                      <CheckCircle2 size={16} className="text-accent" />
                                      {h}
                                    </div>
                                  ))}
                                </div>
                             </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'Achievements' && (
                      <div className="grid sm:grid-cols-2 gap-6">
                         {ACHIEVEMENTS.map((award, i) => (
                           <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/40 hover:scale-[1.02] transition-all">
                              <div className="w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-4">
                                <Award size={20} />
                              </div>
                              <h4 className="font-bold text-white mb-1">{award.title}</h4>
                              <p className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">{award.organization} | {award.year}</p>
                              <p className="text-sm text-slate-400">{award.description}</p>
                           </div>
                         ))}
                      </div>
                    )}
                  </div>
                </div>
             </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
