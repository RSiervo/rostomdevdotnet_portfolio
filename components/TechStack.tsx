
import React from 'react';
import { CORE_TECH, TECH_LOGOS } from '../constants';

const TechStack: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 py-12 border-y border-slate-900 overflow-hidden relative">
      {/* Gradient Masks for smooth fade out at edges */}
      <div className="absolute top-0 left-0 w-24 sm:w-48 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 sm:w-48 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-full overflow-hidden group">
        <div className="flex animate-infinite-scroll group-hover:pause gap-12 sm:gap-24 pl-24 items-center">
          {/* Repeat the list 3 times for seamless looping */}
          {[...CORE_TECH, ...CORE_TECH, ...CORE_TECH].map((tech, index) => {
             const logoUrl = TECH_LOGOS[tech];
             
             // If no logo is found, skip or render text (though we aim for all logos)
             if (!logoUrl) return null;

             // Determine if logo needs inversion (for dark mode visibility)
             const needsInversion = tech === 'Next.js' || tech === 'Django';

             return (
              <div 
                key={`${tech}-${index}`} 
                className="relative group/icon flex-shrink-0 flex flex-col items-center justify-center gap-3"
              >
                <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center transition-all duration-300 group-hover/icon:scale-110">
                  <img 
                    src={logoUrl} 
                    alt={tech} 
                    className={`max-h-full max-w-full object-contain transition-all duration-500 opacity-90 hover:opacity-100 ${needsInversion ? 'invert' : ''}`}
                  />
                </div>
                {/* Optional Tooltip/Label on hover */}
                <span className="absolute -bottom-8 text-xs font-semibold text-accent opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
