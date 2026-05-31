import { motion } from 'motion/react';
import { ArrowRight, Eye } from 'lucide-react';

interface HeroProps {
  onOpenConsult: () => void;
  onViewPortfolio: () => void;
}

export default function Hero({ onOpenConsult, onViewPortfolio }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-12 md:py-24 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto transition-all duration-700 ease-out animate-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10 w-full">
        {/* Left Column: Typography and Action Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block self-start px-3.5 py-1 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold"
          >
            Engineering Precision
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight font-extrabold tracking-tight"
          >
            Transformasikan Ide Anda Menjadi Website Modern
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl leading-relaxed"
          >
            Layanan pembuatan website profesional untuk Undangan Pernikahan, Portofolio, Bisnis UMKM, dan Aplikasi Kustom dengan fokus pada performa dan estetika minimalis.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              id="btn-hero-start"
              onClick={onOpenConsult}
              className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all rounded-lg uppercase tracking-wider font-semibold cursor-pointer shadow-md"
            >
              Mulai Proyek
              <ArrowRight size={16} />
            </button>
            
            <button
              id="btn-hero-portfolio"
              onClick={onViewPortfolio}
              className="border border-primary text-primary px-8 py-4 font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-fixed/20 transition-all rounded-lg font-semibold cursor-pointer"
            >
              Lihat Portfolio
            </button>
          </motion.div>
        </div>

        {/* Right Column: Premium Highlighted Microchip Hardware Image */}
        <div className="lg:col-span-5 w-full flex items-center justify-center mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square max-w-lg lg:max-w-none rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50"
          >
            <img
              alt="Engineering Precision Hardware"
              className="w-full h-full object-cover grayscale-15 contrast-110 hover:grayscale-0 hover:scale-102 transition-all duration-750 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh4RJgHX3rhL_vY6H_hs6B4rIqocTtgs3YleF8Xhyu1e0oWAbuC_HfBlUAwHjC_j86Bw4Rma8_2HwWxAUYc5m2NpRC4barzSjw01DZW6jSIdeI3zOFzATuVc1aqx6mVPap3BA02zRshJ6CNeNXgyUcBkthASip_DCcUOmVWI1cWwZLdRgIXKpsmMlCJlzlZ7Ds0wemTNfZxc4fm266mSX81yOY3wYeZW0CRwbfSrhiIOmmbNv0mKgqPQ_B799-nCSXV80FM5k04IM"
              referrerPolicy="no-referrer"
            />
            {/* Soft tech-blue decorative overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
