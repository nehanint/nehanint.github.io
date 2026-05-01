/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  MapPin, 
  Maximize2, 
  Mail, 
  Phone, 
  Download,
  Menu,
  X,
  FileText,
  PenTool,
  Move
} from 'lucide-react';
import { PROJECTS, EXPERIENCE } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-bronze/30 overflow-x-hidden relative">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-noise" />
      
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-16",
          isScrolled ? "py-4 bg-stone-50/90 backdrop-blur-xl border-b border-stone-200" : "py-8 bg-transparent"
        )}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="#" 
            className="group flex flex-col"
          >
            <span className="font-display font-bold text-lg md:text-xl tracking-[-0.04em] uppercase leading-none">
              Neha Nathwani
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold mt-1 group-hover:text-bronze transition-colors">
              Interior Design
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500">
            {['Work', 'Expertise', 'About', 'Experience'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-stone-900 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-bronze transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-stone-900 text-white rounded-none hover:bg-bronze transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-stone-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 overflow-hidden"
            >
              <div className="p-8 flex flex-col space-y-6">
                {['Work', 'Expertise', 'About', 'Experience', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-medium uppercase tracking-tight text-stone-900"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-16 pt-32 pb-20">
        <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="h-px w-8 bg-bronze" />
                <span className="text-bronze-dark uppercase tracking-[0.5em] font-bold text-[10px]">Based in Melbourne</span>
              </div>
              
              <h1 className="font-display text-7xl md:text-[8.5vw] leading-[0.85] font-bold tracking-[-0.06em] mb-12 text-stone-900">
                Crafting <br />
                <span className="font-serif italic font-light text-bronze pr-4">Refined</span> 
                Spatial <br />
                Narratives.
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-sm">
                  A high-end interior designer with a decade of expertise in transforming hospitality and residential landscapes across the globe.
                </p>
                <div className="flex flex-col space-y-6">
                  <a 
                    href="#work" 
                    className="group inline-flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-900"
                  >
                    <span>View Projects</span>
                    <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-90 contrast-[1.05] hover:grayscale-0 transition-all duration-1000 ease-out"
                alt="Sophisticated Interior"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end text-white z-20">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-2">Signature Style</span>
                  <span className="font-serif italic text-2xl">Minimalist Soul</span>
                </div>
                <div className="text-right">
                  <span className="font-display text-4xl font-bold opacity-20">№ 01</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-20 items-center">
           <div className="md:w-1/3">
              <h2 className="font-display text-sm uppercase tracking-[0.5em] font-bold text-bronze mb-6">Philosophy</h2>
              <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-balance leading-tight">
                Design that <br /> 
                <span className="font-serif italic text-stone-400">Transcends</span> <br /> 
                the Visual.
              </h3>
           </div>
           <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-stone-500 font-light leading-relaxed">
                As a mid-to-senior designer, Neha balances strong design integrity with commercial viability. Every project is a technical challenge resolved with poetic precision, ensuring functional compliance doesn't compromise aesthetic ambition.
              </p>
              <div className="border-l border-bronze/30 pl-8 py-2">
                <span className="block text-4xl font-serif italic text-bronze mb-4">"</span>
                <p className="text-stone-900 font-medium italic leading-relaxed">
                  Spaces should be felt before they are seen. Our role is to choreograph that feeling through light, texture, and form.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-bronze text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Competence</span>
            <h2 className="font-display text-5xl font-bold tracking-tight mb-6">Expertise & Services</h2>
            <div className="w-12 h-px bg-stone-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: "Strategic Spatial Design", 
                  icon: <Move size={24} className="text-bronze" />,
                  desc: "Meticulous layout planning that maximizes site potential and human flow."
                },
                { 
                  title: "Curated Materiality", 
                  icon: <PenTool size={24} className="text-bronze" />,
                  desc: "A focus on tactile quality, balancing diverse finishes to create depth and warmth."
                },
                { 
                  title: "Technical Excellence", 
                  icon: <FileText size={24} className="text-bronze" />,
                  desc: "Flawless documentation in AutoCAD and Revit, navigating complex permit processes."
                },
                { 
                  title: "Project Leadership", 
                  icon: <Maximize2 size={24} className="text-bronze" />,
                  desc: "Senior-level oversight ensuring design intent is preserved from concept to handover."
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-stone-50 border border-stone-100 hover:border-bronze/50 transition-all duration-500 group"
                >
                  <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                  <h4 className="font-display text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-stone-900 p-12 text-white flex flex-col justify-between">
              <div>
                <h4 className="font-serif italic text-2xl mb-8 tracking-tight text-bronze">The Technical Suite</h4>
                <ul className="space-y-6">
                  {['AutoCAD (Advanced)', 'Revit (Upskilling)', 'InDesign', 'Photoshop', 'Coordination'].map(s => (
                    <li key={s} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] border-b border-stone-800 pb-4">
                      <span>{s}</span>
                      <ChevronRight size={14} className="text-bronze" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12">
                <p className="text-stone-500 text-xs italic leading-relaxed">
                  Constantly evolving technical skills to meet high-end global architectural standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-32 px-6 md:px-16 bg-stone-50">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-xl">
              <span className="text-bronze text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Portfolio</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">Recent Commissions</h2>
            </div>
            <div className="mt-8 md:mt-0">
               <button className="px-8 py-3 border border-stone-900 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-stone-900 hover:text-white transition-all">
                 View Archive
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "group relative",
                  index % 3 === 0 ? "md:col-span-8" : "md:col-span-4",
                  index === 1 ? "md:mt-24" : ""
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img 
                    src={project.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 scale-[1.01] group-hover:scale-110"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex flex-col justify-center items-center p-12 text-center text-white">
                    <span className="text-[10px] uppercase font-bold tracking-[0.4em] mb-4 text-bronze">{project.type}</span>
                    <h3 className="font-display text-3xl font-bold mb-6 tracking-tight">{project.title}</h3>
                    <p className="text-sm font-light leading-relaxed max-w-sm mb-8 opacity-80">{project.description}</p>
                    <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all duration-300">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h4 className="font-display text-xl font-bold tracking-tight mb-2 uppercase tracking-[-0.02em]">{project.title}</h4>
                    <p className="text-stone-500 text-xs flex items-center">
                      <MapPin size={12} className="mr-2 text-bronze" />
                      {project.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-stone-400">{project.area}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 md:px-16 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Professional Narrative</h2>
            <div className="flex items-center justify-center space-x-4">
              <span className="h-px w-8 bg-stone-800" />
              <span className="text-bronze text-[10px] font-bold uppercase tracking-[0.4em]">Melbourne • Pune • Raipur</span>
              <span className="h-px w-8 bg-stone-800" />
            </div>
          </div>

          <div className="space-y-24">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-stone-800 pb-20 last:border-0"
              >
                <div className="md:col-span-4">
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 block mb-2">{exp.period}</span>
                   <h3 className="font-serif italic text-2xl text-bronze">{exp.role}</h3>
                   <span className="block text-stone-400 font-display font-medium text-sm mt-4 uppercase tracking-[0.1em]">{exp.company}</span>
                   <span className="block text-stone-600 text-[10px] font-bold uppercase mt-2 tracking-widest">{exp.location}</span>
                </div>
                <div className="md:col-span-8">
                   <ul className="space-y-6">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-stone-300 font-light leading-relaxed flex items-start group">
                           <span className="mr-6 text-bronze font-serif italic text-xl group-hover:translate-x-2 transition-transform">→</span>
                           <span className="text-sm md:text-base">{h}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-40 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center relative">
          <div className="lg:w-1/2 relative z-10">
            <div className="max-w-md">
              <h4 className="text-bronze uppercase tracking-[0.5em] font-bold text-[10px] mb-8">Creative Profile</h4>
              <h2 className="font-display text-6xl md:text-7xl font-bold tracking-tight mb-12">
                Neha <br /> <span className="font-serif italic font-light text-stone-300">Nathwani</span>
              </h2>
              <div className="space-y-8 text-stone-500 font-light text-lg leading-relaxed">
                <p>
                  Specializing in the intersection of architectural precision and interior poetry. With over a decade of high-stakes experience, my journey has spanned from founding a boutique boutique studio to navigating the sophisticated hospitality requirements of the Australian market.
                </p>
                <p>
                  I am known for spatial clarity, technical documentation accuracy, and a relentless pursuit of material perfection. My goal is always to deliver projects that are not just visually stunning but commercially viable and technically sound.
                </p>
              </div>
              
              <button className="mt-12 group inline-flex items-center space-x-6 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-900 border-b border-stone-900 pb-2">
                <span>View Full CV</span>
                <Download size={14} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <motion.div 
               whileHover={{ scale: 0.98 }}
               transition={{ duration: 0.8 }}
               className="aspect-[4/5] bg-stone-100 relative overflow-hidden"
             >
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale contrast-[1.1] opacity-90"
                  alt="Portrait"
                />
             </motion.div>
             
             {/* Stats overlap */}
             <div className="absolute -bottom-12 -left-12 bg-white border border-stone-200 p-12 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] z-20">
                <div className="flex flex-col">
                   <span className="text-5xl font-display font-bold tracking-tight text-stone-900">10<span className="text-bronze">+</span></span>
                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-stone-400 mt-2">Years of <br /> Mastery</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 bg-stone-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <span className="text-bronze text-[10px] font-bold uppercase tracking-[1em] mb-12 block">Open to Opportunities</span>
             <h2 className="font-display text-6xl md:text-[8vw] font-bold tracking-tight mb-20 italic">
               Let's Scale <br /> New Heights.
             </h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                <a href="mailto:nehan.int@gmail.com" className="group">
                   <span className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-4">Email</span>
                   <span className="text-xl font-light font-display border-b border-transparent group-hover:border-bronze pb-1 transition-all">nehan.int@gmail.com</span>
                </a>
                <a href="tel:+61415566238" className="group px-8">
                   <span className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-4">Inquiry</span>
                   <span className="text-xl font-light font-display border-b border-transparent group-hover:border-bronze pb-1 transition-all">+61 415 566 238</span>
                </a>
                <div className="group">
                   <span className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-4">Connect</span>
                   <div className="flex justify-center space-x-8">
                      {['Li', 'Be', 'Ig'].map(l => (
                        <span key={l} className="text-xl font-serif italic text-bronze hover:text-white cursor-pointer px-1 transition-colors">{l}</span>
                      ))}
                   </div>
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 border-t border-stone-900 px-6 md:px-16">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] font-bold text-stone-600">
           <p>© 2026 Neha Nathwani • Portfolio</p>
           <p className="mt-4 md:mt-0 opacity-40">Architectural Interior Design</p>
           <div className="flex space-x-12 mt-4 md:mt-0">
              <a href="#" className="hover:text-bronze transition-colors">Privacy</a>
              <a href="#" className="hover:text-bronze transition-colors">Terms</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
