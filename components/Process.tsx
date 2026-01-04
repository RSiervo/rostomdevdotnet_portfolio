import React from 'react';
import { WORK_PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">How I Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From the first line of code to the final deployment, I follow a structured approach to ensure quality and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((item, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Background Number */}
              <div className="absolute -top-4 -right-2 text-8xl font-bold text-slate-800/20 group-hover:text-accent/10 transition-colors pointer-events-none select-none">
                {item.step}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-accent font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Connector Line (Desktop) */}
              {idx < WORK_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-slate-800 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;