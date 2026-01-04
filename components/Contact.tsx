
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle, Instagram, Facebook, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: SOCIAL_LINKS.github, color: 'hover:text-white hover:bg-white/10' },
    { icon: Linkedin, label: 'LinkedIn', link: SOCIAL_LINKS.linkedin, color: 'hover:text-blue-400 hover:bg-blue-400/10' },
    { icon: MessageCircle, label: 'Messenger', link: SOCIAL_LINKS.messenger, color: 'hover:text-blue-500 hover:bg-blue-500/10' },
    { icon: Instagram, label: 'Instagram', link: SOCIAL_LINKS.instagram, color: 'hover:text-pink-500 hover:bg-pink-500/10' },
    { icon: Facebook, label: 'Facebook', link: SOCIAL_LINKS.facebook, color: 'hover:text-blue-600 hover:bg-blue-600/10' },
  ];

  return (
    <section className="py-24 md:py-32 min-h-screen bg-primary relative overflow-hidden">
      {/* Immersive Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-[150px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 border border-accent/20">
              <Sparkles size={14} /> Available for Opportunities
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Something Great</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Whether you have a startup idea, a complex network infrastructure project, or just want to say hi—my inbox is always open.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Connectivity Hub (Interactive Side) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal className="flex flex-col gap-8">
              
              {/* Direct Info Cards */}
              <div className="grid gap-4">
                 <a href={SOCIAL_LINKS.email} className="group p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-accent/40 transition-all duration-300 flex items-center gap-6">
                    <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-lg">Email Me</h4>
                       <p className="text-slate-500 text-sm">rostomdevdotnet@gmail.com</p>
                    </div>
                 </a>
                 <div className="group p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-highlight/40 transition-all duration-300 flex items-center gap-6">
                    <div className="w-14 h-14 bg-highlight/10 text-highlight rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-lg">Call Me</h4>
                       <p className="text-slate-500 text-sm">+63 912 345 6789</p>
                    </div>
                 </div>
                 <div className="group p-6 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-blue-400/40 transition-all duration-300 flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-400/10 text-blue-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-lg">Location</h4>
                       <p className="text-slate-500 text-sm">Northern Samar, Philippines</p>
                    </div>
                 </div>
              </div>

              {/* Interactive Social Grid */}
              <div className="bg-slate-900/20 border border-slate-800 p-8 rounded-[2.5rem]">
                <h4 className="text-slate-200 font-bold mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-accent rounded-full"></div>
                  Connectivity Hub
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-4">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 group ${social.color} hover:-translate-y-2`}
                      >
                        <Icon size={24} className="mb-2 transition-transform group-hover:scale-110" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-inherit">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Direct Channel (Dynamic Form) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
                  <p className="text-slate-500 text-sm">Fill out the form below and I'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. John Doe"
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                    <select 
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-medium appearance-none"
                    >
                      <option className="bg-slate-900">Project Collaboration</option>
                      <option className="bg-slate-900">Job Opportunity</option>
                      <option className="bg-slate-900">Technical Inquiry</option>
                      <option className="bg-slate-900">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message Body</label>
                    <textarea 
                      required
                      placeholder="Hi Rostom, I'd like to discuss a project..."
                      rows={6}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all font-medium resize-none flex-1"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`group w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 relative overflow-hidden ${
                      formStatus === 'sent' 
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' 
                        : 'bg-accent text-primary hover:bg-highlight hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]'
                    }`}
                  >
                    {formStatus === 'idle' && (
                      <>
                        <span>Broadcast Message</span>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                    {formStatus === 'sending' && (
                      <>
                        <Loader2 size={24} className="animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    )}
                    {formStatus === 'sent' && (
                      <>
                        <CheckCircle2 size={24} className="animate-in zoom-in duration-300" />
                        <span>Message Delivered</span>
                      </>
                    )}
                  </button>
                  
                  {formStatus === 'sent' && (
                    <p className="text-center text-green-500/80 text-xs font-bold mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      Response received. I'll get back to you via email soon!
                    </p>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
