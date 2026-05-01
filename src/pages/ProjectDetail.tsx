import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, ArrowLeft, Ruler, Building2, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';

export function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 md:px-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-500 hover:text-bronze mb-12 transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <span className="text-bronze text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">{project.type}</span>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-8 text-stone-500 text-sm">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-bronze" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Ruler size={16} className="mr-2 text-bronze" />
                  {project.area}
                </div>
              </div>
            </div>
            
            <div className="lg:pl-16 border-l border-stone-200">
              <p className="text-xl font-light text-stone-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <section className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h3 className="font-display text-3xl font-bold mb-12">Key Design Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {project.details?.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 size={24} className="mr-4 text-bronze flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-stone-600 font-light text-lg leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-20">
              <h3 className="font-display text-3xl font-bold mb-8">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {project.gallery?.map((img, i) => (
                   <div key={i} className={`overflow-hidden aspect-[4/3] ${i === 2 ? 'md:col-span-2 aspect-[16/6]' : ''}`}>
                     <img src={img} alt={`${project.title} view ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-stone-50 p-12 sticky top-32">
              <h4 className="font-serif italic text-2xl mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-4">Project Scope</h4>
              <ul className="space-y-6">
                {project.role.map((r, i) => (
                   <li key={i} className="flex items-start">
                      <span className="text-bronze mr-4 flex-shrink-0 font-serif italic text-xl">→</span>
                      <span className="text-stone-600 font-light">{r}</span>
                   </li>
                ))}
              </ul>
              
              {project.floorPlan && (
                <div className="mt-12 pt-12 border-t border-stone-200">
                   <h4 className="font-serif italic text-xl mb-6 tracking-tight text-stone-900 flex items-center">
                     <Building2 size={18} className="mr-3 text-bronze" /> 
                     Floor Plan & Docs
                   </h4>
                   <div className="relative aspect-[3/4] border border-stone-200 overflow-hidden group cursor-pointer">
                      <img src={project.floorPlan} className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" alt="Floor plan" />
                      <div className="absolute inset-0 bg-stone-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 px-6 py-2">Expand Layout</span>
                      </div>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
