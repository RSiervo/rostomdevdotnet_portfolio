
import React, { useState, useMemo } from 'react';
import { SKILLS, CORE_TECH, TECH_LOGOS } from '../constants';
import { Terminal, Cpu, Layout, Globe, Zap, Code2, Layers, Binary } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Tools' | 'Other'>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { id: 'All', icon: Globe, label: 'Everything' },
    { id: 'Frontend', icon: Layout, label: 'Frontend' },
    { id: 'Backend', icon: Layers, label: 'Backend' },
    { id: 'Tools', icon: Terminal, label: 'Networking & Tools' },
  ];

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return SKILLS;
    return SKILLS.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 relative overflow-hidden bg-primary min-h-screen">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 border border-accent/20">
              <Zap size={14} /> My Tech Stack
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 tracking-tight">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Mastery</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              An interactive look at the technologies I use to build robust software and manage complex network infrastructures.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap text-sm font-semibold ${
                    isActive 
                      ? 'bg-accent text-primary shadow-lg shadow-accent/20' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <Icon size={18} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Skill Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredSkills.map((skill, idx) => {
              const logo = TECH_LOGOS[skill.name];
              const isHovered = hoveredSkill === skill.name;
              
              return (
                <ScrollReveal key={skill.name} delay={idx * 50}>
                  <div 
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`group relative p-5 rounded-2xl border transition-all duration-500 cursor-default h-full flex flex-col items-center text-center overflow-hidden ${
                      isHovered 
                        ? 'bg-slate-800 border-accent/50 -translate-y-2 shadow-2xl shadow-accent/10' 
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {/* Level Indicator Orb */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
                    
                    {/* Logo/Icon Area */}
                    <div className="mb-4 p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-accent/30 group-hover:scale-110 transition-all duration-500">
                      {logo ? (
                        <img src={logo} alt={skill.name} className={`w-8 h-8 object-contain ${skill.name === 'Next.js' || skill.name === 'Django' ? 'invert' : ''}`} />
                      ) : (
                        <Code2 size={32} className="text-slate-600" />
                      )}
                    </div>

                    <h3 className="text-sm md:text-base font-bold text-slate-200 mb-2">{skill.name}</h3>
                    
                    {/* Minimal Progress Line */}
                    <div className="w-full h-1 bg-slate-800 rounded-full mt-auto overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-highlight rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Info Side Panel (Desktop only - Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent mb-2">
                  <Binary size={24} />
                  <h3 className="text-xl font-bold text-slate-100 uppercase tracking-wider">Skill Insight</h3>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl font-mono text-sm leading-relaxed overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                  </div>
                  {hoveredSkill ? (
                    <div className="animate-in fade-in duration-300">
                      <p className="text-accent mb-1">$ info --tech "{hoveredSkill}"</p>
                      <p className="text-slate-400">&gt; Proficiency: <span className="text-white">{SKILLS.find(s => s.name === hoveredSkill)?.level}%</span></p>
                      <p className="text-slate-400">&gt; Category: <span className="text-highlight">{SKILLS.find(s => s.name === hoveredSkill)?.category}</span></p>
                      <p className="text-slate-500 mt-4 italic">// Hover over other technologies to inspect metadata...</p>
                    </div>
                  ) : (
                    <div className="text-slate-500 space-y-2">
                      <p>$ ready --await-hover</p>
                      <p>_</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-slate-200 font-bold flex items-center gap-2">
                   <Cpu size={18} className="text-highlight" /> Core Stats
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-white mb-1">90%</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Web Eng</div>
                  </div>
                  <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-white mb-1">85%</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Network Ops</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  As an IT major, my skills bridge the gap between building beautiful user interfaces and maintaining the infrastructure that hosts them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
