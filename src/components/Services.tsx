import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';
import { Heart, User, Store, Code, Check, ArrowRight, Info } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Map string icon names from mock data to Lucide Icons
  const renderIcon = (iconName: string, colorClass: string) => {
    const size = 24;
    switch (iconName) {
      case 'favorite':
        return <Heart size={size} className={colorClass} />;
      case 'person':
        return <User size={size} className={colorClass} />;
      case 'storefront':
        return <Store size={size} className={colorClass} />;
      case 'code':
        return <Code size={size} className={colorClass} />;
      default:
        return <Info size={size} className={colorClass} />;
    }
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-surface-container-low transition-all duration-700 ease-out">
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Our Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 font-black uppercase tracking-tight">Layanan Unggulan Kami</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Kami membangun solusi digital berkinerja tinggi yang dirancang khusus untuk memenuhi standar digitalisasi modern, baik skala personal maupun korporasi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SERVICES_DATA.map((service: ServiceItem, index) => {
            const isHovered = hoveredId === service.id;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="p-6 flex flex-col h-full bg-white relative overflow-hidden group border border-outline-variant/60 shadow-none rounded-none"
              >
                {/* Popular Badge */}
                {service.badge && (
                  <div className="absolute top-0 right-0 bg-primary text-on-primary text-[9px] font-bold px-3 py-1 uppercase tracking-wider rounded-none">
                    {service.badge}
                  </div>
                )}

                {/* Circle Icon and Base parameters */}
                <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105">
                  {renderIcon(service.icon, "text-white")}
                </div>

                <h3 className="font-serif text-xl text-primary font-bold mb-3 group-hover:text-primary-variant">
                  {service.title}
                </h3>
                
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Expanded details feature list with framer motion animate heights */}
                <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Estimasi Waktu</span>
                    <span className="text-xs text-primary font-bold">{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-505 uppercase tracking-wider">Investasi</span>
                    <span className="text-xs text-primary font-bold">{service.pricing}</span>
                  </div>

                  {/* Accordion toggle for features */}
                  <div className="pt-2">
                    <button
                      onClick={(e) => toggleExpand(service.id, e)}
                      className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1 focus:outline-none cursor-pointer"
                    >
                      {isExpanded ? 'Sembunyikan Fitur' : 'Lihat Detail Fitur...'}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      className="overflow-hidden mt-3"
                    >
                      <ul className="space-y-2 pl-1 bg-slate-50 p-3 rounded-none border border-slate-200">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex gap-2 text-xs text-slate-700 items-start">
                            <Check size={14} className="text-primary mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <button
                    id={`btn-select-svc-${service.id}`}
                    onClick={() => onSelectService(service.id)}
                    className="w-full mt-4 bg-transparent border border-primary text-primary py-3 rounded-none text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-on-primary cursor-pointer"
                  >
                    Pilih Layanan
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
