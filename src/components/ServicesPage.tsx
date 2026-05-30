import { motion } from 'motion/react';
import { Heart, User, Store, Code, Check, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onOpenConsult: (serviceId: string) => void;
}

export default function ServicesPage({ onOpenConsult }: ServicesPageProps) {
  const serviceDetails = [
    {
      id: 'undangan',
      title: 'Undangan Pernikahan Digital',
      subtitle: 'Modern & Eksklusif',
      icon: <Heart className="text-primary" size={24} />,
      desc: 'Sampaikan kabar bahagia Anda dengan cara yang modern, interaktif, dan ramah lingkungan. Undangan digital kami dirancang dengan sentuhan artistik tinggi dan dilengkapi berbagai fitur mutakhir.',
      features: [
        'Manajemen Undangan & RSVP Realtime',
        'Integrasi Musik Latar & Galeri Foto Parallax',
        'Buku Tamu Digital & Ucapan Selamat Online',
        'Penunjuk Peta Lokasi via Google Maps',
        'Mendukung Pembayaran Digital & Amplop QR'
      ],
      price: 'Mulai Rp 149.000',
      time: 'Selesai dalam 1-3 Hari',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'portfolio',
      title: 'Portofolio Profesional',
      subtitle: 'Kreatif & Minimalis',
      icon: <User className="text-primary" size={24} />,
      desc: 'Tampilkan karya terbaik, rekam jejak, dan keahlian Anda ke hadapan audiens global. Portofolio digital yang dioptimalkan untuk kecepatan dan keterbacaan tinggi demi menunjang kredibilitas profesional Anda.',
      features: [
        'Navigasi Filter Kategori Karya Praktis',
        'Animasi Transisi Halus & Estetika Bersih',
        'Tombol Unduh Resume & Integrasi Sosial',
        'Formulir Kontak Khusus Leads',
        'Tampilan Beradaptasi Sempurna di Semua Layar'
      ],
      price: 'Mulai Rp 499.000',
      time: 'Selesai dalam 3-5 Hari',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'umkm',
      title: 'Website Perusahaan & UMKM',
      subtitle: 'Komersial & SEO Friendly',
      icon: <Store className="text-primary" size={24} />,
      desc: 'Tingkatkan profitabilitas dan jangkauan pasar bisnis Anda dengan profil digital terpercaya. Menghubungkan calon konsumen langsung ke katalog produk Anda secara efisien.',
      features: [
        'Struktur Keamanan & SEO Google Maksimal',
        'Katalog Produk Interaktif & Galeri Layanan',
        'Integrasi Pintasan WhatsApp Checkout',
        'Informasi Jam Operasional & Lokasi Bisnis',
        'Termasuk Domain .com / .co.id Selama 1 Tahun'
      ],
      price: 'Mulai Rp 899.000',
      time: 'Selesai dalam 5-7 Hari',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'custom-app',
      title: 'Aplikasi Kustom Berbasis Web',
      subtitle: 'Skalabilitas Tinggi',
      icon: <Code className="text-primary" size={24} />,
      desc: 'Sistem operasional digital terintegrasi yang disesuaikan 100% dengan proses bisnis unik Anda. Solusi tangguh untuk performa inventaris, ERP, CRM, atau program manajemen lainnya.',
      features: [
        'Dasbor Analitik Realtime & Laporan Visual',
        'Sistem Autentikasi & Level Akses Presisi',
        'Integrasi API Pihak Ketiga & Gerbang Pembayaran',
        'Arsitektur Database Terenkripsi & Tangguh',
        'Garansi Pemeliharaan & Pembaruan Sistem Berkala'
      ],
      price: 'Hubungi Kami (Kustom)',
      time: 'Sesuai Ruang Lingkup',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-margin-desktop space-y-24">
      {/* Header section */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
          Layanan Presisi Digital
        </span>
        <h1 className="font-display-lg text-4xl md:text-5xl text-primary font-black tracking-tight leading-tight">
          Solusi Website Terbaik untuk Setiap Kebutuhan Anda
        </h1>
        <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
          Kami memadukan fungsionalitas murni, desain asimetris yang menenangkan, dan rekayasa kode super cepat untuk melahirkan produk digital terbaik. Selidiki spesifikasi layanan kami di bawah ini.
        </p>
      </div>

      {/* Detail list items with alternating asymmetry */}
      <div className="space-y-24">
        {serviceDetails.map((svc, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Left text detail column */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary-fixed rounded-xl flex items-center justify-center">
                    {svc.icon}
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">
                      {svc.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      {svc.title}
                    </h2>
                  </div>
                </div>

                <p className="text-on-surface-variant font-body-md leading-relaxed text-sm md:text-base">
                  {svc.desc}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-3 pt-2">
                  {svc.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check size={18} className="text-primary mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing / Timeline Pills */}
                <div className="flex flex-wrap gap-3 pt-3">
                  <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-primary">
                    Investasi: {svc.price}
                  </span>
                  <span className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-500">
                    Waktu: {svc.time}
                  </span>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onOpenConsult(svc.id)}
                  className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-all rounded-none uppercase tracking-wider font-semibold cursor-pointer pt-3"
                >
                  Konsultasikan Sekarang
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Right premium grayscale image frame */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-outline-variant bg-slate-50">
                  <img
                    alt={svc.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-102"
                    src={svc.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
