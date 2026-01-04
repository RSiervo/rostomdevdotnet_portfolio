
import React, { useState } from 'react';
import { CERTIFICATIONS } from '../constants';
import { Certification } from '../types';
import { ArrowRight, ShieldCheck, Eye, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificateModal from './CertificateModal';
import ScrollReveal from './ScrollReveal';

const HomeCertifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const recentCerts = CERTIFICATIONS.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-secondary/10 relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
            <div className="flex items-center gap-2 text-highlight font-mono text-xs mb-4 uppercase tracking-[0.3em]">
               <ShieldCheck size={16} /> Verified_Credentials
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Certifications</span></h2>
            <p className="text-slate-400 max-w-xl text-lg font-light leading-relaxed">
               Industry-standard validations from Oracle and Cisco that confirm my technical proficiency.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentCerts.map((cert, index) => (
             <ScrollReveal key={cert.id} delay={index * 150} className="h-full">
               <div 
                 onClick={() => setSelectedCert(cert)}
                 className="group cursor-pointer bg-slate-900/60 p-8 rounded-[2rem] border border-slate-800 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col text-left relative overflow-hidden"
               >
                 {/* Visual Decor */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-colors"></div>

                 <div className="flex items-start justify-between mb-8">
                   <div className="p-4 bg-slate-950 text-accent rounded-2xl group-hover:scale-110 transition-transform duration-500 border border-slate-800">
                      <ShieldCheck size={28} />
                   </div>
                   <div className="flex flex-col items-end">
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{cert.year}</span>
                      <div className="flex items-center gap-1 text-accent/50 text-[8px] font-mono">ID: {cert.id}00X</div>
                   </div>
                 </div>

                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight line-clamp-2">{cert.name}</h3>
                 <p className="text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed flex-1 font-light italic">"{cert.description}"</p>
                 
                 <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-800/50">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                       <Terminal size={12} /> Root_Verified
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-accent group-hover:translate-x-1 transition-all">
                       Details <ArrowRight size={14} />
                    </div>
                 </div>
               </div>
             </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 flex justify-center">
            <Link 
              to="/certifications" 
              className="group flex items-center gap-3 px-10 py-4 bg-slate-900 border border-slate-800 rounded-full text-slate-300 font-bold hover:text-white hover:border-accent/50 hover:bg-slate-800 transition-all shadow-xl"
            >
              Access Complete Vault <ShieldCheck size={20} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
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

export default HomeCertifications;
