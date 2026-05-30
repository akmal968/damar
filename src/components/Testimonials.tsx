import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/20 overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        
        {/* Header content */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em]">Testimonials</span>
            <span className="w-8 h-[1px] bg-primary"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 font-black uppercase tracking-tight">Apa Kata Klien Kami?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Dengarkan langsung dari mitra bisnis dan individu yang telah bertransformasi ke ranah digital bersama kami.
          </p>
        </div>

        {/* Dynamic Testimonial Grid with spring transitions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', damping: 20, delay: index * 0.1 }}
              className="bg-white p-8 rounded-none border border-outline-variant/60 shadow-none relative flex flex-col justify-between"
            >
              {/* Decorativequote bubble icon */}
              <div className="absolute top-6 right-6 text-slate-150">
                <Quote size={32} className="fill-current opacity-30" />
              </div>

              {/* Card Contents */}
              <div className="relative">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote details */}
                <p className="font-body-md text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Profile details */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-4 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-none object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs font-bold text-primary">{item.name}</h4>
                  <p className="text-[10px] text-on-surface-variant font-medium">
                    {item.role}, <span className="font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
