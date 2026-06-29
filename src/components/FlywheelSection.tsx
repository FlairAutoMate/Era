import React from 'react';
import { Search, Calendar, Wrench, TrendingUp, ArrowRight } from 'lucide-react';
import nordicHouse from '../assets/images/norwegian_home_fjord_1781510672169.jpg';

interface FlywheelSectionProps {
  onOpenWaitlist: () => void;
}

export default function FlywheelSection({ onOpenWaitlist }: FlywheelSectionProps) {
  const steps = [
    { number: "01", icon: Search, title: "Oppdag", description: "ERA finner behov før små problemer vokser." },
    { number: "02", icon: Calendar, title: "Planlegg", description: "Få en tilpasset vedlikeholdsplan." },
    { number: "03", icon: Wrench, title: "Utfør", description: "Vi kobler deg med riktig hjelp." },
    { number: "04", icon: TrendingUp, title: "Bevar", description: "Boligminnet oppdateres for høyere verdi." }
  ];

  return (
    <section id="how-it-works" className="py-28 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-xl mx-auto text-center space-y-4 mb-20">
          <span className="text-[#2d4a6e] font-mono text-xs font-bold tracking-widest uppercase">
            ARBEIDSFLYTEN
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#071A3D]">
            Boligforvaltning forenklet.
          </h2>
          <p className="text-lg text-[#4F566B] font-light leading-relaxed">
            Fire logiske trinn for en bolig som varer.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-bold text-[#2d4a6e] bg-[#2d4a6e]/10 px-3 py-1 rounded-full">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF9F7] flex items-center justify-center text-[#071A3D] group-hover:bg-[#2d4a6e] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#071A3D] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#4F566B] font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grounding Banner */}
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/60 shadow-lg grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-12 space-y-6 text-left">
            <h3 className="text-3xl font-bold text-[#071A3D] tracking-tight">
              Huset i fokus
            </h3>
            <p className="text-lg text-[#4F566B] font-light leading-relaxed">
              Mens andre apper ber deg om manuelt arbeid, jobber ERA i bakgrunnen. Vi kobler sammen inspeksjoner, kvitteringer og historikk, slik at du alltid har full kontroll over din viktigste investering.
            </p>
            <button onClick={onOpenWaitlist} className="px-8 py-4 rounded-xl bg-[#071A3D] hover:bg-[#2d4a6e] text-white font-bold text-sm transition-all flex items-center gap-3">
              Få tidlig tilgang <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="lg:col-span-6 h-80 lg:h-full relative">
            <img src={nordicHouse} alt="Skandinavisk hjem" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
