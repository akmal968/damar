import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';
import { ExternalLink, X, Laptop, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Categories list
  const categories = ['Semua', 'Undangan Pernikahan', 'Portofolio Kreatif', 'Bisnis UMKM', 'Aplikasi Kustom'];

  // Filtered projects
  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((proj) => proj.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto transition-all duration-700 ease-out">
      
      {/* Title block */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Our Work</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 font-black uppercase tracking-tight">Galeri Portofolio Kami</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Setiap karya adalah representasi dari komitmen kami terhadap kode yang bersih, desain tanpa celah, dan fungsionalitas murni.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-none ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary shadow-sm border border-primary'
                  : 'bg-white border border-outline-variant text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: ProjectItem) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveProject(project)}
              className="group bg-white rounded-none overflow-hidden border border-outline-variant shadow-none hover:shadow-md cursor-pointer flex flex-col h-full"
            >
              {/* Cover Card Image */}
              <div className="relative h-64 w-full bg-slate-50 overflow-hidden border-b border-outline-variant">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Accent Ribbon Category */}
                <div className="absolute top-0 left-0 bg-primary text-on-primary font-bold text-[9px] px-3 py-1.5 uppercase tracking-widest">
                  {project.category}
                </div>

                {/* View Details Hover Overlay */}
                <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-primary text-[10px] tracking-widest font-black uppercase px-5 py-3 rounded-none shadow-md inline-flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Lihat Studi Kasus
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl text-primary font-bold group-hover:text-primary transition-colors duration-200 mb-2">
                  {project.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-bold text-slate-500 border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-none">
                      #{tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-bold text-slate-500 border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-none">
                      +{project.tags.length - 3} Stack
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Details Drawer (Modal representation) */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-primary/50 backdrop-blur-sm"
            />

            {/* Content Drawer Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white w-full max-w-2xl rounded-none shadow-2xl overflow-hidden z-10 border border-slate-300 p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                id="btn-close-project-modal"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 text-slate-400 hover:text-primary transition-all p-1.5 rounded-none hover:bg-slate-100 cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                
                {/* Category & Title */}
                <div>
                  <span className="text-primary font-bold text-[10px] uppercase tracking-widest block">
                    Studi Kasus • {activeProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-primary mt-1">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-video w-full rounded-none overflow-hidden bg-slate-50 border border-outline-variant">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Description Text */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-slate-700 uppercase tracking-widest border-l-2 border-primary pl-2">Deskripsi Proyek</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeProject.description}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kami melakukan rekayasa kode penuh untuk memastikan website ini tidak hanya memiliki visual premium yang selaras dengan identitas brand, tetapi juga memiliki skor performa Web Vitals yang mendekati sempurna.
                  </p>
                </div>

                {/* Tech Highlights */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-slate-700 uppercase tracking-widest border-l-2 border-primary pl-2">Metrik Teknikal & Stack</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-none border border-slate-200 flex items-center gap-2.5">
                      <CheckCircle size={18} className="text-primary shrink-0" />
                      <div>
                        <div className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Performa Speed</div>
                        <div className="text-sm font-bold text-primary">Score 99/100</div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-none border border-slate-200 flex items-center gap-2.5">
                      <Laptop size={18} className="text-primary shrink-0" />
                      <div>
                        <div className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Desain Responsive</div>
                        <div className="text-sm font-bold text-primary">Pixel Perfect</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-primary font-bold bg-slate-100 border border-slate-250 px-3 py-1.5 rounded-none uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action footer link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-on-surface-variant italic">
                    *Tautan proyek di atas adalah simulasi deployment langsung.
                  </span>
                  
                  {activeProject.link && (
                    <a
                      id="btn-visit-project"
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-on-primary font-bold text-xs hover:opacity-90 tracking-widest uppercase transition-all inline-flex items-center gap-1.5 rounded-none"
                    >
                      Kunjungi Website
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
