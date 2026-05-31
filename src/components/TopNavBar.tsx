import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface TopNavBarProps {
  onOpenConsult: () => void;
  activeTab: 'home' | 'services' | 'portfolio' | 'contact';
  setActiveTab: (tab: 'home' | 'services' | 'portfolio' | 'contact') => void;
}

export default function TopNavBar({ onOpenConsult, activeTab, setActiveTab }: TopNavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: 'home' | 'services' | 'portfolio' | 'contact') => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveTab(targetId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks: { title: string; id: 'home' | 'services' | 'portfolio' | 'contact' }[] = [
    { title: 'Home', id: 'home' },
    { title: 'Services', id: 'services' },
    { title: 'Portfolio', id: 'portfolio' },
    { title: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-45 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 h-16'
            : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 active:scale-95 transition-transform"
          >
            {!logoError ? (
              <img
                src="https://lh3.googleusercontent.com/aida/ADBb0ugPAtbZE1AzEco0hMliAbwdFv61lmii0p_rMZWEIO50fTX_WD0-PNY5Wic-7U8RyjuW7SBQaL1QdBeCVAxWnfQecF4hBGv-ltGBlJBk9FeV0wokGbsq88Q_7O0kEum-EWexhv4pO8ge2SrH5qgt8f73UIevM_fYJcu1JdafOPAGuVmERx45ba28arb3IidppJE7SY0o_gMnWp_VzD_5GD2NkuhmDweTdINX98SXKNDdJMGtrzMzKEysyQ"
                alt="NEXATECH Logo"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className={`w-auto transition-all ${isScrolled ? 'h-7' : 'h-8 md:h-9'}`}
                style={{ maxWidth: '140px' }}
              />
            ) : (
              <div className="flex items-center gap-2">
                <svg
                  width={isScrolled ? "26" : "30"}
                  height={isScrolled ? "26" : "30"}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary transition-transform shrink-0"
                >
                  {/* Left slash */}
                  <path
                    d="M6 6H11L19 26H14L6 6Z"
                    fill="currentColor"
                  />
                  {/* Right slash */}
                  <path
                    d="M18 6H23L15 26H10L18 6Z"
                    fill="currentColor"
                    className="opacity-60"
                  />
                  {/* Focus core node */}
                  <rect x="14" y="14" width="4" height="4" rx="2" fill="currentColor" />
                </svg>
                <span className={`font-sans font-black tracking-widest text-primary select-none transition-all ${isScrolled ? 'text-base' : 'text-lg md:text-xl'}`}>
                  NEXATECH
                </span>
              </div>
            )}
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-label-md text-label-md tracking-wider uppercase transition-all select-none hover:text-primary relative py-1 ${
                  activeTab === link.id
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant font-semibold'
                }`}
              >
                {link.title}
                {activeTab === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="btn-nav-consult"
              onClick={onOpenConsult}
              className="bg-primary hover:opacity-90 text-on-primary font-label-md text-label-md px-6 py-2.5 active:scale-95 transition-all outline-none rounded-none uppercase tracking-wider font-bold cursor-pointer"
            >
              Consult Now
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-primary hover:bg-slate-100 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black md:hidden"
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col p-6 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <span className="font-bold text-primary text-sm tracking-wider uppercase">Menu Navigasi</span>
                <button
                  id="btn-close-drawer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-primary hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-5 flex-grow">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`text-lg transition-colors py-1 ${
                      activeTab === link.id
                        ? 'text-primary font-bold border-l-4 border-primary pl-3'
                        : 'text-on-surface-variant font-medium pl-3'
                    }`}
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                <button
                  id="btn-mobile-consult"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsult();
                  }}
                  className="w-full bg-primary hover:opacity-95 text-on-primary font-label-md text-label-md py-3 text-center transition-all inline-flex items-center justify-center gap-1 rounded-none uppercase tracking-wider font-bold cursor-pointer"
                >
                  Konsultasi Gratis
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
