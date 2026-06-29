import React from 'react';
import { ArrowRight, CheckCircle2, Check, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import contractorHeroBg from '../../assets/images/contractor_hero_van_1782557902544.jpg';

interface ContractorHeroProps {
  onOpenWaitlist?: () => void;
}

export default function ContractorHero({ onOpenWaitlist }: ContractorHeroProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row bg-era-cream overflow-hidden lg:pt-0 border-b border-era-stone-200">
      {/* Venstre side: Tekst og CTA */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 lg:py-0 z-10 bg-era-cream lg:bg-transparent">
        <div className="space-y-8 text-left max-w-xl">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-era-stone-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-era-navy" />
              <span className="text-xs font-semibold tracking-widest text-era-navy uppercase font-sans">ERA partner</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-era-ink-900 leading-tight">
            Flere oppdrag.<br />
            Mindre administrasjon.<br />
            <span className="font-normal text-era-navy">ERA gjør det.</span>
          </h1>
          
          <p className="text-xl text-era-ink-700 font-normal">Du skal bruke tiden på håndverk – ikke på å jakte kunder, skrive tilbud og følge opp administrasjon.</p>
          
          <div className="space-y-3 text-lg text-era-ink-700 font-light leading-relaxed">
            <p className="text-era-ink-900 font-normal">
              Din AI-agent for håndverksbedriften. ERA følger opp kunder, automatiserer arbeidsflyten og hjelper deg å få flere oppdrag – mens du er ute på jobb.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onOpenWaitlist}
                className="btn-cta"
                id="btn-contractor-hero-cta"
              >
                <span>Bli pilotbedrift</span>
                <ArrowRight className="w-4 h-4" />
              </button>
          </div>
        </div>
      </div>

      {/* Høyre side: Illustrasjon */}
      <div className="flex-1 relative min-h-[500px] lg:min-h-auto overflow-hidden bg-era-stone-200 flex items-center justify-center p-6">
        <img
          src={contractorHeroBg}
          alt="Profesjonell nordisk håndverker ved moderne servicebil foran skandinavisk bolig"
          className="w-full h-full object-cover object-center absolute inset-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-era-navy/10" />
        
        {/* Samtaleboble som illustrasjon */}
        <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-3xl border border-era-stone-200 text-sm text-era-ink-900 flex items-center gap-3 shadow-lg">
           <MessageSquare className="w-5 h-5 text-era-brass" /> 
           <span className="font-medium">Jeg følger boligen.</span>
        </div>

      </div>
    </section>
  );
}


