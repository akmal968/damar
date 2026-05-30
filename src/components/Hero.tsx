import { motion } from 'motion/react';
import { ArrowRight, Eye } from 'lucide-react';

interface HeroProps {
  onOpenConsult: () => void;
}

export default function Hero({ onOpenConsult }: HeroProps) {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 md:py-40 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto transition-all duration-700 ease-out"
    >
      <div className="relative z-10 max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold"
        >
          Engineering Precision
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 leading-tight font-extrabold"
        >
          Transformasikan Ide Anda Menjadi Website Modern
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed"
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
            className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all rounded-none uppercase tracking-wider font-semibold cursor-pointer"
          >
            Mulai Proyek
            <ArrowRight size={16} />
          </button>
          
          <button
            id="btn-hero-portfolio"
            onClick={scrollToPortfolio}
            className="border border-primary text-primary px-8 py-4 font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-fixed/20 transition-all rounded-none font-semibold cursor-pointer"
          >
            Lihat Portfolio
          </button>
        </motion.div>
      </div>

      {/* Abstract Background Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] h-[80%] pointer-events-none hidden lg:block"
      >
        <img
          alt="Engineering Precision"
          className="w-full h-full object-cover rounded-xl grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh4RJgHX3rhL_vY6H_hs6B4rIqocTtgs3YleF8Xhyu1e0oWAbuC_HfBlUAwHjC_j86Bw4Rma8_2HwWxAUYc5m2NpRC4barzSjw01DZW6jSIdeI3zOFzATuVc1aqx6mVPap3BA02zRshJ6CNeNXgyUcBkthASip_DCcUOmVWI1cWwZLdRgIXKpsmMlCJlzlZ7Ds0wemTNfZxc4fm266mSX81yOY3wYeZW0CRwbfSrhiIOmmbNv0mKgqPQ_B799-nCSXV80FM5k04IM"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
