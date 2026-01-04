
import React from 'react';
import { NAME, SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Twitter, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-12 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          <div className="text-center md:text-left">
             <h3 className="text-xl font-bold text-slate-200 mb-2">{NAME}</h3>
             <p className="text-slate-500 text-sm">Building the web, securing the network.</p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center md:justify-end">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800">
              <Github size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800">
              <Linkedin size={20} />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800">
              <Twitter size={20} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800">
              <Facebook size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800">
              <Instagram size={20} />
            </a>
            <a href={SOCIAL_LINKS.messenger} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800">
              <MessageCircle size={20} />
            </a>
             <a href={SOCIAL_LINKS.email} className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
          <p className="font-medium text-slate-500">
            rostomdevdotnet@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
