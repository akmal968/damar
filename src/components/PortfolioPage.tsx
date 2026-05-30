import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';
import { ExternalLink, X, Laptop, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Filter Categories corresponding exactly to mock data types and template filters:
  // Layout categories map to mock: Custom Wedding -> Wedding, Kreatif -> Portfolio, Bisnis -> Business, Kustom -> Apps
  const filterTabs = [
    { label: 'Semua', id: 'Semua' },
    { label: 'Wedding', id: 'Wedding' },
    { label: 'Portfolio', id: 'Portfolio' },
    { label: 'Business', id: 'Business' },
    { label: 'Apps', id: 'Apps' }
  ];

  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((proj) => proj.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-margin-desktop space-y-16">
      {/* Title Hero Block */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
          Galeri Portofolio Kami
        </span>
        <h1 className="font-display-lg text-4xl md:text-5xl text-primary font-black tracking-tight leading-tight">
          Mewujudkan Presisi dalam Desain & Kode
        </h1>
        <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
          Kami merancang produk digital yang tidak hanya memukau mata, tetapi juga berjalan dengan performa seperseribu detik. Selami hasil karya terbaik kami.
        </p>
      </div>

      {/* Category Tabs Filter */}
      <div className="flex flex-wrap gap-2.5 pb-4 border-b border-outline-variant">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer rounded-lg border ${
              selectedCategory === tab.id
                ? 'bg-primary text-on-primary border-primary font-bold'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bento-like Grid List of Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: ProjectItem) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveProject(project)}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/30 transition-all duration-300 cursor-pointer flex flex-col h-full hover:shadow-lg"
            >
              {/* Cover Card Image */}
              <div className="relative aspect-video w-full bg-slate-50 overflow-hidden border-b border-outline-variant">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-102 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Accent Ribbon Category */}
                <div className="absolute top-3 left-3 bg-primary text-on-primary font-bold text-[9px] px-3 py-1.5 uppercase tracking-wider rounded-lg">
                  {project.category}
                </div>

                {/* View Details Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-primary text-[10px] tracking-widest font-black uppercase px-5 py-3 rounded-lg shadow-md inline-flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Lihat Studi Kasus
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="p-6 flex flex-col flex-grow space-y-3">
                <h3 className="font-display-lg text-xl text-primary font-bold transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold text-slate-550 border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
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
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm"
            />

            {/* Content Drawer Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-350 p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                id="btn-close-project-modal"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 text-slate-400 hover:text-primary transition-all p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
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
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-50 border border-outline-variant">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
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
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                      <CheckCircle size={18} className="text-primary shrink-0" />
                      <div>
                        <div className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Performa Speed</div>
                        <div className="text-sm font-bold text-primary">Score 99/100</div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                      <Laptop size={18} className="text-primary shrink-0" />
                      <div>
                        <div className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Desain Responsive</div>
                        <div className="text-sm font-bold text-primary">Pixel Perfect</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-primary font-bold bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg uppercase tracking-wider">
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
                      className="px-6 py-3 bg-primary text-on-primary font-bold text-xs hover:opacity-90 tracking-widest uppercase transition-all inline-flex items-center gap-1.5 rounded-xl cursor-pointer"
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
    </div>
  );
}
