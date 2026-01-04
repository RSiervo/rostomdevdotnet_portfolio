
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Download, Handshake, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAME, TITLE, SHORT_BIO, SOCIAL_LINKS, RESUME_LINK, AVAILABILITY_STATUSES } from '../constants';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [statusIndex, setStatusIndex] = useState(0);
  const [isStatusVisible, setIsStatusVisible] = useState(true);
  const fullText = TITLE;

  // Typing effect for the title
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  // Status text rotator with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsStatusVisible(false); // Start fade out
      
      // Wait for fade out to complete (500ms matches CSS transition)
      setTimeout(() => {
        setStatusIndex((prevIndex) => (prevIndex + 1) % AVAILABILITY_STATUSES.length);
        setIsStatusVisible(true); // Start fade in
      }, 500);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('what-i-offer');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20 pb-10">
      {/* Dynamic Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse opacity-50 md:opacity-100"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-highlight/20 rounded-full blur-[120px] animate-pulse delay-1000 opacity-50 md:opacity-100"></div>
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] animate-bounce duration-[10000ms]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-6 md:space-y-8 relative z-10">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md text-sm font-medium text-accent animate-in fade-in slide-in-from-top-4 duration-1000 shadow-lg shadow-accent/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className={`transition-opacity duration-500 ${isStatusVisible ? 'opacity-100' : 'opacity-0'}`}>
            {AVAILABILITY_STATUSES[statusIndex]}
          </span>
        </div>

        {/* Name & Title */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 animate-in zoom-in-50 duration-1000 fill-mode-both drop-shadow-sm">
            {NAME}
          </h1>
          
          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto"></div>
          
          <h2 className="min-h-[60px] md:min-h-[40px] text-xl sm:text-2xl md:text-3xl font-light text-accent tracking-wide fill-mode-both px-4">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Bio */}
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both px-2">
          {SHORT_BIO}
        </p>

        {/* CTA Buttons - Flex row on mobile too */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-4 md:pt-6 animate-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
          <Link 
            to="/contact" 
            className="group flex-1 sm:flex-none min-w-[140px] px-6 py-3.5 bg-accent text-primary font-bold rounded-xl hover:bg-highlight hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all flex items-center justify-center gap-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2 text-sm md:text-base">
              Hire Me 
              <Handshake size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Link>
          <a 
            href={RESUME_LINK}
            download
            className="flex-1 sm:flex-none min-w-[140px] px-6 py-3.5 border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-300 font-medium rounded-xl hover:border-slate-500 hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 text-sm md:text-base"
          >
            Resume <Download size={18} />
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 md:pt-8 animate-in fade-in duration-1000 delay-700 fill-mode-both">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all p-2 hover:bg-slate-800/50 rounded-full">
            <Github size={24} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all p-2 hover:bg-slate-800/50 rounded-full">
            <Linkedin size={24} />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all p-2 hover:bg-slate-800/50 rounded-full">
            <Facebook size={24} />
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all p-2 hover:bg-slate-800/50 rounded-full">
            <Instagram size={24} />
          </a>
          <a href={SOCIAL_LINKS.messenger} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white hover:scale-110 transition-all p-2 hover:bg-slate-800/50 rounded-full">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hidden sm:block"
        aria-label="Scroll down"
      >
        <div className="p-2 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur text-slate-500 hover:text-accent transition-colors">
           <ChevronDown size={24} />
        </div>
      </button>
    </section>
  );
};

export default Hero;
