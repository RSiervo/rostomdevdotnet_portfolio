import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-primary z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary to-transparent z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 animate-pulse">
          <Sparkles size={16} /> Open for Work
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Ready to bring your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">ideas to life?</span>
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Whether you need a complex web application or a secure network infrastructure, I'm ready to help you achieve your goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Start a Project <ArrowRight size={20} />
          </Link>
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-colors border border-slate-700"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;