import React from 'react';
import { VALUE_PROPS } from '../constants';
import { Award, Layers, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Award,
  Layers,
  Cpu
};

const WhyChooseMe: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">Why Choose Me?</h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                In a rapidly evolving tech landscape, you need more than just a coder. You need a problem solver who understands the bigger picture.
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {VALUE_PROPS.map((prop, idx) => {
                const Icon = iconMap[prop.iconKey] || Award;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-highlight/10 text-highlight flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-2">{prop.title}</h3>
                      <p className="text-slate-400 text-sm md:text-base">{prop.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-accent to-highlight opacity-20 blur-3xl rounded-full"></div>
             <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl">
                <div className="inline-block p-4 bg-accent/10 rounded-full mb-2">
                   <Award size={48} className="text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Cum Laude Graduate</h3>
                <p className="text-slate-400">
                  University of Eastern Philippines, Class of 2024
                </p>
                <div className="h-px w-full bg-slate-800"></div>
                <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                   <div>
                      <div className="text-xl md:text-2xl font-bold text-white">3+</div>
                      <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider mt-1">Projects</div>
                   </div>
                   <div>
                      <div className="text-xl md:text-2xl font-bold text-white">4+</div>
                      <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider mt-1">Years Coding</div>
                   </div>
                   <div>
                      <div className="text-xl md:text-2xl font-bold text-white">100%</div>
                      <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider mt-1">Dedication</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;