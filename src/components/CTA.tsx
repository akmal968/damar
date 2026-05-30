import { motion } from 'motion/react';
import { HelpCircle, CalendarRange } from 'lucide-react';

interface CTAProps {
  onOpenConsult: () => void;
}

export default function CTA({ onOpenConsult }: CTAProps) {
  return (
    <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto transition-all duration-700 ease-out">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-primary text-on-primary rounded-2xl p-10 md:p-20 text-center overflow-hidden relative"
      >
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          
          <div className="space-y-4">
            <h2 className="font-display-lg text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="font-body-lg text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Diskusikan konsep desain pilihan Anda gratis dengan tim ahli kami. Kami siap membantu mengeksekusi visi Anda dalam bentuk produk website modern kelas dunia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              id="btn-cta-contact"
              onClick={onOpenConsult}
              className="bg-white hover:bg-slate-100 text-primary px-8 py-4 font-bold tracking-wider uppercase text-xs transition-all inline-flex items-center justify-center gap-2 cursor-pointer rounded-none outline-none border border-white"
            >
              <HelpCircle size={15} />
              Hubungi Kami
            </button>
            <button
              id="btn-cta-demo"
              onClick={onOpenConsult}
              className="border border-white hover:bg-white/10 text-white px-8 py-4 font-bold tracking-wider uppercase text-xs transition-all inline-flex items-center justify-center gap-2 cursor-pointer rounded-none outline-none"
            >
              <CalendarRange size={15} />
              Jadwalkan Demo
            </button>
          </div>

        </div>

        {/* Ambient Blurred Background Accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-fixed/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      </motion.div>
    </section>
  );
}
