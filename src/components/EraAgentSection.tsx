import React from 'react';

export default function EraAgentSection() {
  return (
    <section className="py-24 md:py-32 bg-era-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Swapped order: Image Left, Text Right */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm bg-white p-4 border border-era-stone-200">
          <img 
            src="/src/assets/images/digital_twin_house_1781510744004.jpg" 
            alt="Moderne bolig" 
            className="w-full h-auto rounded-2xl"
            referrerPolicy="no-referrer"
          />
          {/* Subtle ERA Pulse Overlay */}
          <div className="absolute inset-0 bg-era-ink-900/5 mix-blend-multiply" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-era-brass animate-ping z-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-era-brass z-20 border-2 border-white" />
        </div>

        <div className="space-y-6 text-left">
          <span className="text-era-brass font-mono text-xs font-bold tracking-widest uppercase block">MØT ERA</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-era-ink-900 leading-tight">
            Møt ERA. Din nye boligagent.
          </h2>
          <p className="text-lg text-era-ink-700 font-light leading-relaxed">
            ERA følger boligen din, oppdager behov tidlig og hjelper deg å ta vare på hjemmet ditt.
          </p>
        </div>
        
      </div>
    </section>
  );
}
