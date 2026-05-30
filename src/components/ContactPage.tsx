import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onLeadSubmitted: () => void;
}

export default function ContactPage({ onLeadSubmitted }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'umkm',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const servicesOption = [
    { value: 'undangan', label: 'Undangan Pernikahan Digital' },
    { value: 'portfolio', label: 'Portofolio Profesional' },
    { value: 'umkm', label: 'Website Profil Perusahaan & UMKM' },
    { value: 'custom-app', label: 'Aplikasi Kustom Berbasis Web' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Mohon isi semua field penting!');
      return;
    }

    // Save lead to LocalStorage to integrate with Floating Leads state
    const currentLeads = JSON.parse(localStorage.getItem('nexatech_leads') || '[]');
    const newLead = {
      id: `lead-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: servicesOption.find(s => s.value === formData.service)?.label || formData.service,
      notes: formData.message,
      estimate: { price: 'Dihitung saat konsultasi' },
      date: new Date().toISOString()
    };

    localStorage.setItem('nexatech_leads', JSON.stringify([newLead, ...currentLeads]));
    
    // Set success and trigger app refresh for Leads state
    setSuccess(true);
    onLeadSubmitted();

    // Reset Form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'umkm',
      message: ''
    });

    // Timeout clear success
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-margin-desktop space-y-16">
      {/* Title block */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
          Hubungi Tim Kami
        </span>
        <h1 className="font-display-lg text-4xl md:text-5xl text-primary font-black tracking-tight leading-tight">
          Mari Bangun Sesuatu yang Luar Biasa Bersama
        </h1>
        <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
          Diskusikan visi digital Anda bersama tim ahli kami. Kami siap melayani konsultasi teknis & estimasi biaya 100% gratis kapan pun Anda butuhkan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Client Interactive Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-primary">Formulir Konsultasi</h2>
            <p className="text-xs text-slate-400 mt-1">Tim kami akan menghubungi Anda kembali dalam kurun waktu kurang dari 24 jam kerja.</p>
          </div>

          {success && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 text-sm"
            >
              <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
              <div>
                <strong>Konsultasi Berhasil Terkirim!</strong> Data Anda tersimpan di kotak masuk lokal. Kami akan menghubungi Anda secepatnya.
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Sava Dania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none text-sm text-slate-800 focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Alamat Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Contoh: sava@danialove.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none text-sm text-slate-800 focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 0821xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none text-sm text-slate-800 focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Pilih Layanan Konsultasi
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none text-sm text-slate-800 bg-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                >
                  {servicesOption.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Catatan / Detail Kebutuhan Proyek
              </label>
              <textarea
                rows={4}
                placeholder="Deskripsikan fitur, ide, atau target tanggal selesai proyek Anda..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg outline-none text-sm text-slate-800 focus:border-primary transition-colors focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 hover:opacity-95 cursor-pointer"
            >
              <Send size={14} />
              Kirim Formulir Konsultasi
            </button>
          </form>
        </div>

        {/* Right Column: Contact info cards & picture frames */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Info Card */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Hubungi Email</div>
              <div className="text-sm font-bold text-primary mt-1.5">hello@nexatech.id</div>
            </div>
          </div>

          {/* Phone WhatsApp Card */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">WhatsApp Bisnis</div>
              <div className="text-sm font-bold text-primary mt-1.5">+62 821-2345-6789</div>
            </div>
          </div>

          {/* Location Working Hours Card */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Lokasi & Jam Operasional</div>
              <div className="text-sm font-bold text-primary mt-1.5">Jakarta, ID • Sen-Jum 09:00 - 18:00</div>
            </div>
          </div>

          {/* Visual Workspace Frame */}
          <div className="rounded-2xl overflow-hidden aspect-video border border-slate-200 bg-slate-100 relative shadow-sm">
            <img
              alt="Nexatech Minimalist Workspace Layout"
              className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-102"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYSemX3OfX6_G3Ljc4t7qwwmxWnIdEiQsmiCOZVVmZxZTEXPKKJgAjO2vgKotkQhDBuuS-OopLdvmOazp98IN5vIvjAHeX0NCmgvIUNgSJ_YWjraWUsesbAMjBKSe8wNiLUYc_U2mQk6Jb8m2l_i416iPQiZ0kAwg3FtQRl0OpUw-EIqywXQvHOVT0uxg9rBJXCAL4F5qG8U32L7SNNI7Mvsk9kCCBKchcLflX7Db28oe170H_FtbUGdoOsPVMgw_o1vZxaGqTndA"
              referrerPolicy="no-referrer"
            />
            {/* Minimal metadata text overlay */}
            <div className="absolute bottom-4 left-4 bg-primary/90 text-[9px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded">
              @nexatech_studio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
