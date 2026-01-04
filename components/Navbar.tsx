
import React, { useState, useEffect } from 'react';
import { Code, Home, User, Cpu, Briefcase, Mail, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Helper to get icon based on label, with customizable size
  const getIcon = (label: string, size: number = 20) => {
    switch (label) {
      case 'Home': return <Home size={size} />;
      case 'About': return <User size={size} />;
      case 'Skills': return <Cpu size={size} />;
      case 'Projects': return <Briefcase size={size} />;
      case 'Certifications': return <Award size={size} />;
      case 'Contact': return <Mail size={size} />;
      default: return <Home size={size} />;
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAVIGATION ================= */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 hidden md:block ${
          scrolled ? 'glass border-b border-slate-700/50 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
              <Code className="text-accent" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-100">
              Rostom<span className="text-accent">.dev</span>
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center gap-2 text-sm font-medium transition-all duration-200 group ${
                    active ? 'text-accent' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {/* Icon: colored if active, gray otherwise but lights up on hover */}
                  <span className={`transition-colors duration-200 ${active ? 'text-accent' : 'text-slate-500 group-hover:text-accent'}`}>
                    {getIcon(item.label, 18)}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="w-px h-6 bg-slate-800 mx-2"></div>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-primary bg-accent rounded-full hover:bg-highlight transition-all hover:scale-105"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE NAVIGATION ================= */}
      
      {/* Mobile Top Bar with Inline Navigation */}
      <div 
        className={`md:hidden fixed top-0 left-0 w-full z-50 px-3 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled ? 'glass border-b border-slate-700/50' : 'bg-primary/90 backdrop-blur-md border-b border-transparent'
        }`}
      >
         {/* Logo - Left */}
         <Link to="/" className="flex items-center gap-1.5 group shrink-0">
            <div className="p-1.5 bg-accent/10 rounded-lg">
              <Code className="text-accent" size={18} />
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-100 block">
              Rostom<span className="text-accent">.dev</span>
            </span>
          </Link>

          {/* Nav Icons - Right */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
             {NAV_ITEMS.map((item) => {
               const active = isActive(item.href);
               return (
                 <Link
                   key={item.label}
                   to={item.href}
                   className={`p-1.5 rounded-lg transition-all duration-200 shrink-0 ${
                     active
                       ? 'bg-accent/15 text-accent' 
                       : 'text-slate-400 hover:text-slate-100'
                   }`}
                   aria-label={item.label}
                 >
                   {getIcon(item.label, 18)}
                 </Link>
               );
             })}
          </div>
      </div>
    </>
  );
};

export default Navbar;
