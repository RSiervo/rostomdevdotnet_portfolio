import React from 'react';
import { SERVICES } from '../constants';
import { Layout, Server, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Terminal
};

const Services: React.FC = () => {
  return (
    <section id="what-i-offer" className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 animate-in fade-in zoom-in-95 duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 md:mb-6">What I Offer</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-highlight mx-auto rounded-full mb-6 md:mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg px-2">
            Delivering comprehensive IT solutions by combining software engineering expertise with robust network management.
          </p>
        </div>

        {/* Mobile-First Grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconKey] || Layout;
            // Logic: If we have an odd number of items, make the last one span full width on mobile/tablet (up to lg)
            // This creates a [ ][ ] layout for the first two, and [   ] for the third.
            const isLastAndOdd = idx === SERVICES.length - 1 && SERVICES.length % 2 !== 0;

            return (
              <div 
                key={idx}
                className={`
                  bg-slate-900/60 backdrop-blur-md border border-slate-800 
                  p-5 md:p-8 rounded-2xl md:rounded-3xl 
                  hover:border-accent/40 transition-all duration-300 
                  hover:shadow-2xl hover:-translate-y-2 group 
                  animate-in slide-in-from-bottom-8 fade-in duration-700 fill-mode-both
                  flex flex-col
                  ${isLastAndOdd ? 'col-span-2 lg:col-span-1' : ''}
                `}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-lg shadow-black/20">
                  <Icon size={20} className="md:w-8 md:h-8" />
                </div>
                
                <h3 className="text-base md:text-xl font-bold text-slate-100 mb-2 md:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-xs md:text-base leading-relaxed opacity-90">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;