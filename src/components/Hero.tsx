import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ViewType } from '../App';
import heroBg from '../assets/images/hero_scandinavian_fjord_1782556093223.jpg';
import HeroStatusCard from './HeroStatusCard';

interface HeroProps {
  onOpenWaitlist?: () => void;
  onOpenProductAI?: () => void;
  onViewChange?: (view: ViewType) => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] flex flex-col lg:flex-row bg-era-cream overflow-hidden pt-10 lg:pt-0">
      {/* Venstre side: Tekst og CTA - 40% */}
      <div className="lg:w-[40%] flex items-center justify-center px-6 py-20 lg:py-0 z-10">
        <div className="space-y-6 text-left max-w-md">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-era-stone-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-era-green" />
            <span className="text-xs font-bold tracking-widest text-era-ink-900 uppercase">Din AI-boligagent</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold font-display tracking-tight text-era-ink-900 leading-[1.05]">
            Boligen passer <br />ikke på seg selv. <br /><span className="text-era-brass">ERA gjør det.</span>
          </h1>
          
          <div className="grid grid-cols-2 gap-y-3 pt-4">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-era-navy" /> <span className="text-sm">Passer på boligen</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-era-navy" /> <span className="text-sm">Husker alt</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-era-navy" /> <span className="text-sm">Varsler i tide</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-era-navy" /> <span className="text-sm">Øker boligverdien</span></div>
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button 
                  onClick={onOpenWaitlist}
                  className="px-8 py-4 rounded-xl bg-era-navy text-white hover:bg-era-ink-700 font-bold text-sm tracking-wide shadow-xl shadow-era-navy/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group w-full sm:w-fit"
                >
                  <span>Opprett boligprofil</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-80" />
                </button>

                <button 
                  onClick={() => {
                    document.getElementById('slik-passer-era')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-xl bg-white text-era-ink-900 border border-era-ink-900/15 hover:border-era-brass hover:bg-era-cream font-bold text-sm tracking-wide shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-fit"
                >
                  <span>Se hvordan</span>
                </button>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-era-ink-900/75 font-medium pl-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-era-green shrink-0" />
                <span>Helt gratis å opprette · Tar under 1 minutt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Høyre side: Bilde - 60% */}
      <div className="lg:w-[60%] relative min-h-[450px] lg:min-h-auto overflow-hidden">
        <img
          src={heroBg}
          alt="Moderne skandinavisk bolig ved fjorden"
          className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-[2000ms] hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-era-cream via-transparent to-transparent lg:hidden" />
        <HeroStatusCard />
      </div>
    </section>
  );
}




