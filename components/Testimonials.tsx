import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">What People Say</h2>
          <div className="w-20 h-1 bg-highlight mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 relative hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute -top-4 left-8 bg-slate-950 p-2 rounded-full border border-slate-800">
                <Quote size={24} className="text-highlight" />
              </div>
              
              <p className="text-slate-300 mb-8 italic leading-relaxed pt-2">"{t.text}"</p>
              
              <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;