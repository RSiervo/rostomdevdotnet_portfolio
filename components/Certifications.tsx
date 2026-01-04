
import React, { useState, useRef } from 'react';
import { CERTIFICATIONS } from '../constants';
import { Certification } from '../types';
import { ShieldCheck, Eye, Terminal, Zap, Fingerprint, Search } from 'lucide-react';
import CertificateModal from './CertificateModal';
import ScrollReveal from './ScrollReveal';

const CertCard: React.FC<{ cert: Certification; index: number; onClick: () => void }> = ({ cert, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <ScrollReveal delay={index * 100}>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
        className="group relative cursor-pointer h-full"
      >
        {/* Holographic Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-highlight/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        
        <div className="h-full bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-6 border border-slate-800 group-hover:border-accent/50 transition-all duration-300 flex flex-col overflow-hidden shadow-2xl">
          
          {/* Holographic Security Overlay (Animated Shimmer) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.6)_50%,transparent_75%)] bg-[length:250%_100%] animate-[shimmer_4s_infinite] z-30"></div>
          
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-accent group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{cert.year}</span>
              <div className="flex items-center gap-1.5 text-accent animate-pulse">
                <Fingerprint size={12} />
                <span className="text-[8px] font-mono">VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Real Certificate Image Preview */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-800 group-hover:border-accent/20 transition-colors bg-slate-950">
             <div className="absolute inset-0 bg-slate-950/40 z-10 group-hover:bg-transparent transition-colors"></div>
             <img 
               src={cert.imageUrl} 
               alt={cert.name} 
               className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop";
               }}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 translate-y-2 group-hover:translate-y-0">
                <div className="bg-accent text-primary p-3 rounded-full shadow-2xl">
                   <Search size={20} />
                </div>
             </div>
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors leading-tight line-clamp-2">
              {cert.name}
            </h3>
            <p className="text-highlight text-xs font-bold uppercase tracking-wider mb-4">
              Issued by {cert.issuer}
            </p>
            <p className="text-slate-400 text-sm line-clamp-2 mb-6 font-light">
              {cert.description}
            </p>
            
            <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-800/50">
              <div className="flex items-center gap-2 text-slate-500 font-mono text-[9px]">
                <Terminal size={12} /> STATUS: AUTH_OK
              </div>
              <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                Inspect <Eye size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: 250% 0; }
          100% { background-position: -250% 0; }
        }
      `}} />
    </ScrollReveal>
  );
};

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section className="py-24 md:py-32 bg-primary min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.04),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} className="fill-current" /> Validated Industry Expertise
            </div>
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
              Credential <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Vault</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              A comprehensive library of professional certifications from Oracle and Cisco, validating my architecture and engineering skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {CERTIFICATIONS.map((cert, index) => (
            <CertCard 
              key={cert.id} 
              cert={cert} 
              index={index} 
              onClick={() => setSelectedCert(cert)} 
            />
          ))}
        </div>
      </div>

      {selectedCert && (
        <CertificateModal 
          certification={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}
    </section>
  );
};

export default Certifications;
