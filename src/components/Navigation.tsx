import React, { useState, useEffect } from 'react';
import { ViewType } from '../App';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Home, Wrench, Building2, Info, Sparkles, Play, Users, ShieldCheck } from 'lucide-react';

interface NavigationProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  onOpenWaitlist?: () => void;
}

interface NavDropdownItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  view: ViewType;
}

export default function Navigation({ currentView, onViewChange, onOpenWaitlist }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navConfig: {
    id: string;
    label: string;
    mainView: ViewType;
    items?: NavDropdownItem[];
  }[] = [
    {
      id: 'bolig',
      label: 'Bolig',
      mainView: 'home',
      items: [
        {
          icon: <Home className="w-4 h-4 text-era-brass" />,
          title: 'For boligeiere',
          desc: 'Ta vare på boligverdien med din personlige AI-vaktmester',
          view: 'home'
        },
        {
          icon: <Sparkles className="w-4 h-4 text-era-brass" />,
          title: 'Slik fungerer AI-agenten',
          desc: 'Oppdager behov, varsler deg og bygger boligens hukommelse',
          view: 'product-ai'
        }
      ]
    },
    {
      id: 'sameie',
      label: 'Sameie',
      mainView: 'brl',
      items: [
        {
          icon: <Building2 className="w-4 h-4 text-era-brass" />,
          title: 'Borettslag & Sameier',
          desc: 'Eiendommen passer ikke på seg selv. ERA gjør det for styret',
          view: 'brl'
        }
      ]
    },
    {
      id: 'handverker',
      label: 'Håndverker',
      mainView: 'contractor',
      items: [
        {
          icon: <Wrench className="w-4 h-4 text-era-brass" />,
          title: 'Kvalitetssikrede fagfolk',
          desc: 'Langsiktige kunder og ferdig beskrevne oppdrag',
          view: 'contractor'
        }
      ]
    },
    {
      id: 'om',
      label: 'Om ERA',
      mainView: 'about',
      items: [
        {
          icon: <Info className="w-4 h-4 text-era-brass" />,
          title: 'Vår visjon',
          desc: 'Hvorfor vi bygger fremtidens intelligente boligforvaltning',
          view: 'about'
        }
      ]
    }
  ];

  const handleNavClick = (view: ViewType) => {
    onViewChange(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setHoveredMenu(null);
    setMobileMenuOpen(false);
  };

  const isDarkHome = false;

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'top-3 max-w-[1340px] mx-auto w-[calc(100%-24px)] md:w-[calc(100%-48px)] rounded-2xl backdrop-blur-xl bg-white/90 border border-[#071A3D]/10 shadow-[0_16px_48px_rgba(7,26,61,0.08)]' 
          : 'top-0 max-w-full w-full bg-transparent'
      }`}
    >
      <div 
        className={`mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-6 transition-all duration-500 ${
          isScrolled 
            ? 'h-[68px] px-6 lg:px-8' 
            : 'h-[86px] md:h-[100px] px-6 md:px-12'
        }`}
      >
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="logo text-[34px] md:text-[40px] leading-none tracking-[-0.06em] font-black text-left select-none outline-none cursor-pointer group flex items-center gap-0.5 text-[#071A3D]"
          id="brand-logo"
        >
          era<span className="text-era-brass transition-transform duration-300 group-hover:scale-125 inline-block">.</span>
        </button>

        {/* Desktop Links (Hover Auto-Open) */}
        <nav className="hidden md:flex justify-center items-center gap-1 lg:gap-3">
          {navConfig.map((nav) => {
            const isActive = currentView === nav.mainView || nav.items?.some(i => i.view === currentView);
            const isHovered = hoveredMenu === nav.id;

            return (
              <div 
                key={nav.id}
                className="relative py-3 px-3.5 rounded-xl transition-colors"
                onMouseEnter={() => setHoveredMenu(nav.id)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button
                  onClick={() => handleNavClick(nav.mainView)}
                  className={`flex items-center gap-1 text-[15px] font-bold cursor-pointer transition-colors ${
                    isActive || isHovered ? 'text-era-brass' : 'text-[#071A3D] hover:text-[#071A3D]/80'
                  }`}
                >
                  <span>{nav.label}</span>
                  {nav.items && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'rotate-180 text-era-brass' : 'opacity-60'}`} />
                  )}
                </button>

                {/* Subtle Active Indicator */}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-1.5 left-3.5 right-3.5 h-[2.5px] bg-era-brass rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Dropdown Card on Hover */}
                <AnimatePresence>
                  {isHovered && nav.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white rounded-2xl shadow-2xl border border-[#071A3D]/10 p-2.5 space-y-1 z-50 backdrop-blur-2xl"
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-[#071A3D]/10" />
                      <div className="relative z-10 space-y-1">
                        {nav.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavClick(item.view)}
                            className="w-full text-left p-3 rounded-xl hover:bg-[#FAF9F7] transition-all group flex items-start gap-3 cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-era-cream group-hover:bg-era-brass/20 transition-colors mt-0.5 shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-[14px] font-bold text-[#071A3D] group-hover:text-era-brass transition-colors">
                                {item.title}
                              </div>
                              <div className="text-[12px] font-medium text-[#071A3D]/60 leading-snug pt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center justify-end">
          <button 
            onClick={() => onOpenWaitlist?.()}
            className="relative overflow-hidden text-[14px] font-bold h-[46px] px-6 rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.985] font-sans flex items-center justify-center gap-2 bg-[#071A3D] text-white hover:bg-era-brass hover:text-[#071A3D]"
            id="cta-register-header"
          >
            <Sparkles className="w-4 h-4 text-era-brass group-hover:text-[#071A3D]" />
            <span className="relative z-10">Få din AI-agent</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center justify-end">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-[42px] h-[42px] rounded-xl bg-era-cream flex flex-col items-center justify-center gap-[6px] cursor-pointer relative z-50 focus:outline-none text-[#071A3D]"
            aria-label="Meny"
            id="hamburger-menu"
          >
            <span className={`block w-[22px] h-[2.5px] rounded-full transition-all duration-300 bg-[#071A3D] ${
              mobileMenuOpen ? 'rotate-45 translate-y-[8.5px]' : ''
            }`} />
            <span className={`block w-[22px] h-[2.5px] rounded-full transition-all duration-300 bg-[#071A3D] ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block w-[22px] h-[2.5px] rounded-full transition-all duration-300 bg-[#071A3D] ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[8.5px]' : ''
            }`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden absolute left-0 right-0 overflow-hidden shadow-2xl z-40 bg-white border-b border-[#071A3D]/10 ${
              isScrolled ? 'top-[calc(100%+8px)] rounded-2xl border mx-4 w-[calc(100%-32px)]' : 'top-full'
            }`}
          >
            <div className="p-6 space-y-4 text-left max-h-[80vh] overflow-y-auto">
              <div className="space-y-3">
                {navConfig.map((nav) => (
                  <div key={nav.id} className="border-b border-[#071A3D]/05 pb-3 last:border-0">
                    <button
                      onClick={() => handleNavClick(nav.mainView)}
                      className="w-full text-left font-black text-lg text-[#071A3D] py-1 flex items-center justify-between"
                    >
                      <span>{nav.label}</span>
                      <ChevronDown className="w-4 h-4 opacity-40 -rotate-90" />
                    </button>
                    {nav.items && (
                      <div className="mt-2 space-y-1.5 pl-2">
                        {nav.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleNavClick(item.view)}
                            className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#FAF9F7] flex items-center gap-3 text-sm font-bold text-[#071A3D]/80"
                          >
                            {item.icon}
                            <span>{item.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#071A3D]/10">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenWaitlist?.();
                  }}
                  className="w-full py-4 rounded-xl font-bold text-sm bg-[#071A3D] text-white flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-era-brass" />
                  <span>Få din AI-agent</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
