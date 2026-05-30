import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Calculator, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { doc, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceDefault?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  selectedServiceDefault = 'umkm',
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: selectedServiceDefault,
    notes: '',
    urgency: 'regular',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple client-side estimate calculator based on selections
  const calculateEstimate = () => {
    switch (formData.serviceType) {
      case 'undangan':
        return { price: 'Rp 149.000 - Rp 350.000', label: 'Undangan Pernikahan Standard' };
      case 'portfolio':
        return { price: 'Rp 499.000 - Rp 999.000', label: 'Portofolio Kreatif Personal' };
      case 'umkm':
        return { price: 'Rp 899.000 - Rp 2.499.000', label: 'Website Company Profile / Katalog' };
      case 'custom-app':
        return { price: 'Rp 4.999.000+', label: 'Solusi Software Bisnis Kustom' };
      default:
        return { price: 'Hubungi Kami', label: 'Konsultasi Kustom' };
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Harap isi nama, email, dan nomor telepon Anda.');
      return;
    }

    setIsSubmitting(true);
    try {
      const leadId = 'lead-' + Date.now();
      const estimate = calculateEstimate();
      const newSubmission = {
        id: leadId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        notes: formData.notes || '',
        urgency: formData.urgency || 'regular',
        date: new Date().toISOString(),
        estimate: estimate,
      };

      // Direct write to cloud database
      await setDoc(doc(db, 'leads', leadId), newSubmission);

      // Also persist to localStorage history
      const existingSubmissions = JSON.parse(localStorage.getItem('nexatech_leads') || '[]');
      localStorage.setItem('nexatech_leads', JSON.stringify([newSubmission, ...existingSubmissions]));

      // Build WhatsApp message formatted according to request
      const serviceName = SERVICES_DATA.find(s => s.id === formData.serviceType)?.title || formData.serviceType;
      const waMessage = `Ada yang melakukan konsultasi
Nama : ${formData.name}
Email : ${formData.email}
No. WhatsApp : ${formData.phone}
Layanan : ${serviceName}
Estimasi : ${estimate.price}
Detail Kebutuhan / Pesan Anda : ${formData.notes || '-'}`;

      const waUrl = `https://wa.me/6281212300775?text=${encodeURIComponent(waMessage)}`;

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Automatic trigger redirection
      try {
        window.open(waUrl, '_blank');
      } catch (browserError) {
        console.warn('Popup blocker prevented automatic redirection:', browserError);
      }
    } catch (error) {
      setIsSubmitting(false);
      handleFirestoreError(error, OperationType.CREATE, 'leads');
    }
  };

  const currentEstimate = calculateEstimate();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10 p-6 md:p-8 border border-slate-250"
          >
            {/* Close Button */}
            <button
              id="btn-close-modal"
              onClick={onClose}
              className="absolute right-4 top-4 text-slate-400 hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-on-primary text-[9px] font-bold uppercase tracking-widest mb-3">
                    <Sparkles size={11} />
                    Free Consultation
                  </span>
                  <h3 className="text-2xl font-bold text-primary tracking-tight">Konsultasi Proyek</h3>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Beri tahu kami kebutuhan Anda, dan kami akan merancang penawaran terbaik.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Nama Lengkap <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-primary transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        Email Aktif <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="contoh@domain.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-primary transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                        No. WhatsApp (Aktif) <span className="text-error">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Contoh: 08123456789"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-primary transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Jenis Layanan Website
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-primary transition-all bg-slate-50 focus:bg-white"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Real-time price advisor based on selection */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <Calculator size={18} className="text-primary mt-0.5" />
                    <div>
                      <div className="text-[9px] font-bold text-primary uppercase tracking-widest">
                        Estimasi Investasi
                      </div>
                      <div className="text-sm font-bold text-primary mt-0.5">
                        {currentEstimate.price}
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        {currentEstimate.label}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Detail Kebutuhan / Pesan Anda
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Jelaskan secara singkat fitur utama atau tema website yang Anda inginkan..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-primary transition-all bg-slate-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    id="submit-consultation"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-on-primary py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Kirim Formulir
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 text-primary border border-slate-200 rounded-xl mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Formulir Terkirim!</h3>
                <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-6">
                  Terima kasih <strong>{formData.name}</strong>, data konsultasi Anda telah berhasil disimpan di sistem lokal kami. 
                  Tim kami akan segera menghubungi Anda di <strong>{formData.phone}</strong> melalui WhatsApp.
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-2 mb-6 text-xs text-slate-600">
                  <div><strong>Nama:</strong> {formData.name}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>WhatsApp:</strong> {formData.phone}</div>
                  <div><strong>Layanan:</strong> {formData.serviceType.toUpperCase()}</div>
                  <div><strong>Estimasi Awal:</strong> {currentEstimate.price}</div>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    id="btn-close-thanks"
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-3.5 bg-slate-200 text-slate-705 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-slate-300 transition-all cursor-pointer"
                  >
                    Tutup
                  </button>
                  <a
                    id="btn-whatsapp-thanks"
                    href={`https://wa.me/6289531900473?text=${encodeURIComponent(`Ada yang melakukan konsultasi
Nama : ${formData.name}
Email : ${formData.email}
No. WhatsApp : ${formData.phone}
Layanan : ${SERVICES_DATA.find(s => s.id === formData.serviceType)?.title || formData.serviceType}
Estimasi : ${currentEstimate.price}
Detail Kebutuhan / Pesan Anda : ${formData.notes || '-'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-primary text-white rounded-lg text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    Hubungi WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
