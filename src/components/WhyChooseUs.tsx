import { motion } from 'motion/react';
import { Bolt, Layers, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Bolt className="text-on-primary" size={20} />,
      title: 'Kecepatan Tanpa Kompromi',
      desc: 'Setiap baris kode dioptimalkan untuk memastikan waktu muat yang instan, memberikan pengalaman terbaik untuk peringkat SEO Google dan retensi pengguna.',
    },
    {
      icon: <Layers className="text-on-primary" size={20} />,
      title: 'Presisi dalam Desain',
      desc: 'Kami percaya pada keindahan detail terkecil. Kolaborasi visual pixel-perfect yang selaras penuh dengan identitas brand premium Anda.',
    },
    {
      icon: <ShieldCheck className="text-on-primary" size={20} />,
      title: 'Keamanan Standar Industri',
      desc: 'Praktik pengkodean modern yang aman disertai kepatuhan enkripsi SSL terintegrasi untuk menjamin integritas data bisnis Anda.',
    },
  ];

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto transition-all duration-700 ease-out border-t border-b border-outline-variant">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Bento-like Stats block */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden aspect-square border border-outline-variant bg-slate-50"
              >
                <img
                  alt="Precision Coding"
                  className="w-full h-full object-cover select-none pointer-events-none grayscale rounded-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYSemX3OfX6_G3Ljc4t7qwwmxWnIdEiQsmiCOZVVmZxZTEXPKKJgAjO2vgKotkQhDBuuS-OopLdvmOazp98IN5vIvjAHeX0NCmgvIUNgSJ_YWjraWUsesbAMjBKSe8wNiLUYc_U2mQk6Jb8m2l_i416iPQiZ0kAwg3FtQRl0OpUw-EIqywXQvHOVT0uxg9rBJXCAL4F5qG8U32L7SNNI7Mvsk9kCCBKchcLflX7Db28oe170H_FtbUGdoOsPVMgw_o1vZxaGqTndA"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary p-8 rounded-xl text-on-primary shadow-none border border-primary flex flex-col justify-center"
              >
                <span className="text-4xl md:text-5xl font-bold font-display-lg block mb-2">99.9%</span>
                <span className="font-label-md text-slate-300 text-xs font-semibold uppercase tracking-wider block">Uptime Precision</span>
              </motion.div>
            </div>

            <div className="pt-12 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl border border-outline-variant text-primary flex flex-col justify-center"
              >
                <span className="text-4xl md:text-5xl font-bold font-display-lg block mb-2 text-primary">2x</span>
                <span className="font-label-md text-on-surface-variant text-xs font-semibold uppercase tracking-wider block">Speed Optimization</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl overflow-hidden aspect-square border border-outline-variant bg-slate-50"
              >
                <img
                  alt="Modern Architecture"
                  className="w-full h-full object-cover select-none pointer-events-none grayscale rounded-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOwttcFwEjkAVSe6yRFzHWI0V2UPqHx-Hcarq-5ASD0zl6cxweaj9kUvyQgJGJfhZ9zT7L6WbBF24Wju_u-saJUqgOrqhXTcXwJj_e8wb2f-k70L9QeA8-YmgcqSDJj1G-hEeZi1_8layNvKt5KiSkmWGRCuFPScDFRvzOobvUkjl8Q-j_L5WQYZsgr-NSZVl6sm74oKrkC-6bp4GS90JZI8RBHwMc1ThLjqS0hYFYY9OdTg16XUQaP3sjmh8P6bE0wzqKM1lH8oQ"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Right Info list */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <span className="text-primary font-semibold text-xs font-label-md uppercase tracking-wider block mb-4">Core Strengths</span>
            <h2 className="font-display-lg text-3xl md:text-4xl text-primary font-bold mb-8 leading-tight">
              Mengapa Memilih Precision Engineering?
            </h2>
          </div>

          <ul className="space-y-8">
            {points.map((pt, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold shrink-0">
                  {pt.icon}
                </div>
                <div>
                  <h4 className="font-display-lg text-lg text-primary font-bold mb-2">
                    {pt.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
