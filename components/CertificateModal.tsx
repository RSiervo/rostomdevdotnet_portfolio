
import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Calendar, Award, ShieldCheck, Terminal, Cpu, Share2, Download, Copy } from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  certification: Certification;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Simulate high-tech verification process
    const timer = setTimeout(() => setIsValidating(false), 1500);
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/98 backdrop-blur-2xl animate-in fade-in duration-500"
        onClick={onClose}
      />

      {/* Engineering Datasheet Layout */}
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-[3rem] shadow-[0_0_120px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in zoom-in-95 duration-500">
        
        {/* Navigation Action */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-50 p-4 bg-slate-800/80 hover:bg-accent text-white hover:text-primary rounded-2xl transition-all border border-slate-700 shadow-2xl"
        >
          <X size={24} />
        </button>

        {/* Visual Asset Viewport */}
        <div className="w-full md:w-3/5 h-[45vh] md:h-auto bg-slate-950 flex items-center justify-center p-8 md:p-16 relative group overflow-hidden border-b md:border-b-0 md:border-r border-slate-800">
           {/* High-Tech Scan Line */}
           <div className="absolute top-0 left-0 w-full h-[3px] bg-accent/40 z-30 animate-[scan_4s_linear_infinite]"></div>
           
           {/* Visual Ambient Light */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>
           
           <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src={certification.imageUrl} 
                alt={certification.name} 
                className={`max-w-full max-h-full object-contain rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-slate-800 transition-all duration-1000 ${isValidating ? 'scale-90 blur-xl opacity-30 grayscale' : 'scale-100 blur-none opacity-100 grayscale-0'}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop";
                }}
              />
              
              {/* Validation Simulation */}
              {isValidating && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-20">
                   <div className="relative">
                      <div className="w-20 h-20 border-4 border-accent/10 border-t-accent rounded-full animate-spin"></div>
                      <ShieldCheck size={32} className="absolute inset-0 m-auto text-accent animate-pulse" />
                   </div>
                   <div className="font-mono text-sm text-accent tracking-[0.4em] uppercase animate-pulse">Establishing_Secure_Link...</div>
                </div>
              )}
           </div>

           {/* Asset Information Footer */}
           <div className="absolute bottom-6 left-10 flex gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                 <Terminal size={12} /> SHA-256_VERIFIED
              </div>
           </div>
        </div>

        {/* Right Side: Professional Context */}
        <div className="w-full md:w-2/5 p-10 md:p-16 overflow-y-auto bg-slate-900 flex flex-col custom-scrollbar">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-accent mb-6 font-mono text-xs uppercase tracking-[0.4em]">
               <ShieldCheck size={18} /> Official_Registry
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight leading-none">{certification.name}</h2>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-400 text-sm">
              <div className="flex items-center gap-2 font-bold text-highlight">
                <Award size={16} />
                {certification.issuer}
              </div>
              <div className="flex items-center gap-2 font-medium">
                 <Calendar size={16} />
                 {certification.year}
              </div>
            </div>
          </div>

          <div className="flex-grow space-y-12">
            <div className="space-y-4">
               <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                 <Terminal size={14} /> Documentation
               </h3>
               <p className="text-slate-300 text-base leading-relaxed font-light bg-slate-950/40 p-6 rounded-[2rem] border border-slate-800/50 shadow-inner italic">
                "{certification.description}"
               </p>
            </div>

            <div className="space-y-5">
               <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                 <Cpu size={14} /> System_Competencies
               </h3>
               <div className="flex flex-wrap gap-2">
                  {/* Logic for skill tags */}
                  {(certification.issuer.includes('Oracle') ? ['Cloud Systems', 'Infrastructure', 'Automation', 'IAM'] : ['Networking', 'JavaScript', 'Logic', 'Protocol']).map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
          </div>

          {/* Action Hub */}
          <div className="mt-12 pt-10 border-t border-slate-800 flex flex-col gap-4">
            {certification.credentialLink && (
              <a 
                href={certification.credentialLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-accent text-primary font-bold rounded-2xl transition-all hover:bg-highlight hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]"
              >
                Verify Credential <ExternalLink size={20} />
              </a>
            )}
            <div className="grid grid-cols-2 gap-4">
               <button className="flex items-center justify-center gap-2 py-4 bg-slate-800 text-slate-300 text-sm font-bold rounded-2xl hover:bg-slate-700 border border-slate-700 transition-all">
                  <Download size={18} /> Asset
               </button>
               <button className="flex items-center justify-center gap-2 py-4 bg-slate-800 text-slate-300 text-sm font-bold rounded-2xl hover:bg-slate-700 border border-slate-700 transition-all">
                  <Copy size={18} /> ID
               </button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default CertificateModal;
