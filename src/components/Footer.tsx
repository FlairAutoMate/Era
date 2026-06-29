import React, { useState } from 'react';
import { ViewType } from '../App';
import { ArrowUp, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onViewChange?: (view: ViewType) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (view: ViewType) => {
    if (onViewChange) {
      onViewChange(view);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-white text-[#071A3D] pt-24 pb-16 px-6 border-t border-[#071A3D]/10 relative z-10 w-full font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hovedavslutning & Løfte */}
        <div className="grid md:grid-cols-2 gap-12 items-start border-b border-[#071A3D]/10 pb-16">
          <div className="space-y-6">
            <button 
              onClick={() => handleLinkClick('home')}
              className="font-black text-4xl tracking-tighter text-[#071A3D] hover:opacity-80 transition-opacity outline-none text-left flex items-center gap-0.5"
            >
              era<span className="text-era-brass text-5xl leading-none">.</span>
            </button>

            <div className="space-y-3 pt-2">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#071A3D] leading-snug">
                Boligen passer ikke på seg selv.<br />
                <span className="text-era-brass">Heldigvis gjør ERA det.</span>
              </h3>
              <p className="text-sm md:text-base text-[#071A3D]/70 font-normal max-w-md leading-relaxed">
                ERA følger boligen gjennom hele livsløpet. Den oppdager behov, varsler deg i tide og hjelper deg å ta vare på boligverdien.
              </p>
            </div>
          </div>

          {/* Navigasjonskolonner */}
          <div className="grid grid-cols-2 gap-8 md:justify-self-end pt-4 md:pt-12 w-full md:w-auto">
            <div className="space-y-4">
              <div className="text-xs font-mono tracking-wider text-[#071A3D]/40 uppercase font-bold">Løsninger</div>
              <ul className="space-y-2.5 text-sm font-bold text-[#071A3D]/80">
                <li>
                  <button onClick={() => handleLinkClick('home')} className="hover:text-era-brass transition-colors text-left cursor-pointer">
                    Boligeiere
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('contractor')} className="hover:text-era-brass transition-colors text-left cursor-pointer">
                    Håndverkere
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('brl')} className="hover:text-era-brass transition-colors text-left cursor-pointer">
                    Sameie & BRL
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-mono tracking-wider text-[#071A3D]/40 uppercase font-bold">Selskap</div>
              <ul className="space-y-2.5 text-sm font-bold text-[#071A3D]/80">
                <li>
                  <button onClick={() => handleLinkClick('about')} className="hover:text-era-brass transition-colors text-left cursor-pointer">
                    Om ERA
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('about')} className="hover:text-era-brass transition-colors text-left cursor-pointer">
                    Kontakt
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLinkClick('about')} className="hover:text-era-brass transition-colors text-left cursor-pointer">
                    Personvern & Vilkår
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nyhetsbrev / Nyttige råd */}
        <div className="border-b border-[#071A3D]/10 pb-16">
          <div className="max-w-xl space-y-4">
            <div className="text-base font-bold text-[#071A3D] flex items-center gap-2">
              <span>📬</span>
              <span>Få nyttige råd om vedlikehold og boligverdi.</span>
            </div>
            
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-700 bg-emerald-50 py-3 px-4 rounded-xl border border-emerald-200 w-fit">
                <CheckCircle2 className="w-4 h-4" />
                <span>Takk for at du meldte deg på! Vi høres snart.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Din e-postadresse" 
                  required
                  className="px-4 py-3 rounded-xl border border-[#071A3D]/20 bg-[#FAF9F7] text-[#071A3D] text-sm placeholder:text-[#071A3D]/40 focus:outline-none focus:border-era-brass flex-1 font-medium"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#071A3D] text-white hover:bg-era-brass hover:text-[#071A3D] font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Meld meg på</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Til toppen */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-[#071A3D]/50 font-medium pt-2">
          <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
            <span>© 2026 ERA Technologies AS</span>
            <span>•</span>
            <span>Utviklet i Norge</span>
            <span>•</span>
            <span>Intelligent boligforvaltning</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#071A3D] font-bold hover:text-era-brass transition-colors cursor-pointer group px-3 py-2 rounded-lg hover:bg-[#FAF9F7]"
          >
            <span>Til toppen</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}

