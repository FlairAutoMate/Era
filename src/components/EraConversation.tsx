import React from 'react';
import { Bot, CheckCircle, AlertTriangle, ChevronRight } from 'lucide-react';

export default function EraConversation() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Introduction */}
        <div className="space-y-6">
          <span className="text-era-brass font-mono text-xs font-bold tracking-widest uppercase block">
            AI-AGENT
          </span>
          <h2 className="text-4xl font-black tracking-tight text-era-ink-900 leading-tight">
            Din bolig får en AI-agent.
          </h2>
          <p className="text-lg text-era-ink-500 font-light leading-relaxed">
            ERA analyserer historikk, dokumentasjon og tilstand – og forteller deg hva som bør gjøres før små problemer blir store.
          </p>
        </div>

        {/* Right: Conversation */}
        <div className="bg-era-cream rounded-3xl p-8 border border-era-ink-900/5 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-era-ink-900 text-white flex items-center justify-center">🏡</div>
            <span className="font-bold text-era-ink-900">Villa Sand</span>
          </div>

          <div className="space-y-4">
             <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-era-navy text-white flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm space-y-3">
                  <p className="text-sm text-era-ink-900 font-medium">Jeg har analysert boligen.</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-era-green text-xs font-bold">
                       <CheckCircle size={14} /> Taket er i god stand
                    </div>
                    <div className="flex items-center gap-2 text-era-green text-xs font-bold">
                       <CheckCircle size={14} /> Dokumentasjonen er komplett
                    </div>
                    <div className="flex items-start gap-2 text-era-brass text-xs font-bold mt-2">
                       <AlertTriangle size={14} className="shrink-0 mt-0.5" /> 
                       Varmepumpen bør få service innen oktober.
                    </div>
                  </div>
                  <p className="text-xs text-era-ink-500 pt-2 italic">Dette kan bidra til å bevare boligens verdi.</p>
                </div>
             </div>
          </div>
          
          <button className="w-full py-3 bg-era-ink-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer">
            Se anbefaling <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
