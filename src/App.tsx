import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Inbox, Trash2, Calendar, CheckSquare, X } from 'lucide-react';
import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './lib/firebase';

import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

// Detailed dynamic pages
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'portfolio' | 'contact'>('home');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('umkm');
  const [isLeadListOpen, setIsLeadListOpen] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [isConfirmingClear, setIsConfirmingClear] = useState(false);

  // Real-time synchronization with Firestore
  useEffect(() => {
    const q = query(collection(db, 'leads'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const loadedLeads = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setLeads(loadedLeads);
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'leads');
      }
    );

    return () => unsubscribe();
  }, []);

  const loadLeadsList = () => {
    // Keeping for backwards compatibility with children prop callbacks,
    // although real-time snapshots automatically keep state perfectly in-sync.
  };

  // Open modal with pre-selected service type
  const handleOpenConsult = (serviceId: string = 'umkm') => {
    setSelectedService(serviceId);
    setIsConsultModalOpen(true);
  };

  const clearLeads = async () => {
    try {
      // Delete each doc in parallel
      await Promise.all(
        leads.map((lead) => deleteDoc(doc(db, 'leads', lead.id)))
      );
      localStorage.removeItem('nexatech_leads');
      setIsConfirmingClear(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, 'leads');
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Dynamic Header */}
      <TopNavBar
        onOpenConsult={() => handleOpenConsult('umkm')}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && (
              <>
                <Hero onOpenConsult={() => handleOpenConsult('umkm')} />
                <Services onSelectService={handleOpenConsult} />
                <WhyChooseUs />
                <Testimonials />
                <CTA onOpenConsult={() => handleOpenConsult('umkm')} />
              </>
            )}

            {activeTab === 'services' && (
              <ServicesPage onOpenConsult={handleOpenConsult} />
            )}

            {activeTab === 'portfolio' && (
              <PortfolioPage />
            )}

            {activeTab === 'contact' && (
              <ContactPage onLeadSubmitted={loadLeadsList} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        selectedServiceDefault={selectedService}
      />

      {/* Bottom Floating Lead Tracker (Discreet Client Portal Reviewer Button) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          id="btn-lead-tracker"
          onClick={() => {
            loadLeadsList();
            setIsConfirmingClear(false);
            setIsLeadListOpen(true);
          }}
          className="bg-primary hover:opacity-90 border border-primary shadow-lg text-white rounded-xl p-3.5 flex items-center gap-2.5 select-none hover:scale-102 active:scale-95 transition-all text-xs uppercase tracking-widest font-black cursor-pointer"
        >
          <Inbox size={16} className="text-white animate-pulse" />
          <span className="max-w-[0px] overflow-hidden group-hover:max-w-[120px] transition-all whitespace-nowrap sr-only md:not-sr-only md:inline block font-bold">
            Inbox Leads
          </span>
          {leads.length > 0 && (
            <span className="bg-white text-primary text-[10px] w-5 h-5 flex items-center justify-center rounded-lg font-black">
              {leads.length}
            </span>
          )}
        </button>
      </div>

      {/* Leads Sliding Drawer Panel */}
      <AnimatePresence>
        {isLeadListOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsLeadListOpen(false);
                setIsConfirmingClear(false);
              }}
              className="absolute inset-0 bg-black"
            />

            {/* Slide Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28 }}
              className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-slate-350 rounded-none animate-none"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-black uppercase text-primary tracking-tight flex items-center gap-2">
                    <Inbox size={18} />
                    Kotak Masuk Konsultasi
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Memantau data formulir konsultasi yang masuk (Local State).
                  </p>
                </div>
                <button
                  id="btn-close-lead-drawer"
                  onClick={() => {
                    setIsLeadListOpen(false);
                    setIsConfirmingClear(false);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-slate-100 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Body lists */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {leads.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-slate-400 space-y-3">
                    <CheckSquare size={36} className="text-slate-400" />
                    <p className="text-sm font-bold">Belum ada konsultasi yang masuk.</p>
                    <p className="text-xs text-center max-w-xs text-slate-400 leading-relaxed">
                      Silakan klik tombol "Mulai Proyek" atau "Hubungi Kami" untuk mengisi formulir simulasi.
                    </p>
                  </div>
                ) : (
                  leads.map((lead: any) => (
                    <div
                      key={lead.id}
                      className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3 relative hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-primary text-sm">{lead.name}</h4>
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-primary text-on-primary text-[8px] font-black mt-1 uppercase tracking-widest">
                            {lead.serviceType}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Calendar size={10} />
                          {new Date(lead.date).toLocaleDateString(['id-ID'], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 space-y-1">
                        <div><strong>Email:</strong> {lead.email}</div>
                        <div><strong>WhatsApp:</strong> {lead.phone}</div>
                        <div><strong>Estimasi Investasi:</strong> {lead.estimate?.price}</div>
                        {lead.notes && (
                          <div className="pt-2 italic text-slate-500 border-t border-slate-200 mt-2">
                            "{lead.notes}"
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer actions */}
              {leads.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-3 rounded-none">
                  {isConfirmingClear ? (
                    <div className="flex flex-col gap-2.5 w-full">
                      <p className="text-[11px] font-bold text-red-650 leading-relaxed">
                        Yakin ingin menghapus seluruh ({leads.length}) data konsultasi secara permanen dari cloud database?
                      </p>
                      <div className="flex gap-2">
                        <button
                          id="btn-confirm-clear"
                          onClick={clearLeads}
                          className="flex-1 py-2 bg-red-650 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase text-center transition-colors cursor-pointer"
                        >
                          Ya, Hapus Semua
                        </button>
                        <button
                          id="btn-cancel-clear"
                          onClick={() => setIsConfirmingClear(false)}
                          className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-bold uppercase text-center transition-colors cursor-pointer"
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <button
                        id="btn-clear-leads"
                        onClick={() => setIsConfirmingClear(true)}
                        className="text-xs text-red-650 hover:text-red-700 font-bold uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <Trash2 size={13} />
                        Hapus Semua Data
                      </button>
                      <p className="text-[9px] text-slate-400 italic">
                        *Tersimpan di Cloud & Lokal
                      </p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
