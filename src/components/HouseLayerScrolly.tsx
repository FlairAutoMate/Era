import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Layers, Cpu, ShieldCheck, ArrowRight, Sparkles, Database, FileText, BadgeAlert } from 'lucide-react';

interface HouseLayerScrollyProps {
  onOpenWaitlist?: () => void;
}

export default function HouseLayerScrolly({ onOpenWaitlist }: HouseLayerScrollyProps) {
  const [activeTab, setActiveTab] = useState<'bilder' | 'data' | 'agent' | 'plan'>('bilder');

  const steps = [
    {
      id: 'bilder',
      num: '01',
      title: 'Bilder av boligen',
      subtitle: 'Ta bilde',
      desc: 'Du tar et bilde av fasaden, taket eller våtrommet ditt med mobilen. Ingen kompliserte skjemaer.'
    },
    {
      id: 'data',
      num: '02',
      title: 'Nyttig informasjon',
      subtitle: 'Alt på ett sted',
      desc: 'Vi henter automatisk data fra Kartverket, lokale værmeldinger og historiske opplysninger om boligen din.'
    },
    {
      id: 'agent',
      num: '03',
      title: 'Smarte påminnelser',
      subtitle: 'Forutsigbart vedlikehold',
      desc: 'Vi hjelper deg å forutse når det er på tide med neste malingsstrøk eller vedlikehold, lenge før det oppstår skader.'
    },
    {
      id: 'plan',
      num: '04',
      title: 'Enkel vedlikeholdsplan',
      subtitle: 'Lavere kostnader',
      desc: 'Du får en ferdig plan som gjør at du kan planlegge økonomien og gjøre smarte fellesbestillinger med naboer.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-[#071A3D]/5" id="slik-fungerer-det">
      {/* Dynamic structural background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#071A3D03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Descriptive intro title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-era-brass font-mono text-xs font-bold tracking-widest uppercase block">
            SLIK FUNGERER DET
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#071A3D] leading-none uppercase">
            Huset bygges opp<br />
            <span className="bg-gradient-to-r from-[#091B4D] via-[#2F4E8D] to-[#5B7FD8] bg-clip-text text-transparent">lag for lag</span>
          </h2>
          <p className="text-[#4F566B] font-light text-base sm:text-lg">
            Se hvordan ERA gjør det enklere å holde oversikt over boligen din uten fagspråk eller tykke ringpermer.
          </p>
        </div>

        {/* Outer frame of Interactive Demo consisting of a tab board & dynamic mock house builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Stepped Segment list */}
          <div className="lg:col-span-12 space-y-4 text-left max-w-2xl mx-auto">
            {steps.map((st) => {
              const isSelected = activeTab === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveTab(st.id as any)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer outline-none relative overflow-hidden group ${
                    isSelected 
                      ? 'border-[#5B7FD8]/30 bg-[#FAF9F7] shadow-md shadow-[#071A3D]/5 scale-102' 
                      : 'border-transparent bg-transparent hover:bg-neutral-50/70 border-neutral-100/50'
                  }`}
                >
                  {/* Left colorful accent indicators */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeTabAccent" 
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#5B7FD8]" 
                    />
                  )}

                  {/* Icon or state indicator */}
                  <div className={`mt-0.5 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold transition-all ${
                    isSelected 
                      ? 'bg-[#5B7FD8] text-white shadow-md' 
                      : 'bg-[#071A3D]/5 text-[#071A3D]/60 group-hover:bg-[#071A3D]/10'
                  }`}>
                    {st.num}
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#5A6376]">
                      {st.subtitle}
                    </div>
                    <h3 className="text-lg font-extrabold text-[#071A3D] tracking-tight">
                      {st.title}
                    </h3>
                    <p className="text-xs font-light text-[#4F566B] leading-relaxed pt-1">
                      {st.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Intersecting bottom block highlighting conversion */}
        <div className="mt-20 pt-10 border-t border-[#071A3D]/5 text-center">
          <button
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#FAF9F7] hover:bg-[#071A3D] hover:text-white border border-[#071A3D]/10 text-xs font-black tracking-widest uppercase transition-all duration-300 outline-none"
          >
            <span>Se hva som må gjøres på din bolig nå</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
