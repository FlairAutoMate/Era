import React from 'react';

export default function HeroStatusCard() {
  return (
    <div className="absolute bottom-8 left-8 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-2xl w-64 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-era-green/10 flex items-center justify-center">
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-era-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-era-green"></span>
            </span>
        </div>
        <div>
          <p className="text-[10px] text-era-ink-500 font-medium uppercase tracking-wider">ERA-agenten</p>
          <p className="text-sm font-bold text-era-ink-900">ERA varsler</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-era-ink-700">Siste hendelse</span>
          <span className="font-semibold text-era-ink-900">Tak kontrollert</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-era-ink-700">Status</span>
          <span className="font-semibold text-era-ink-900">Godkjent</span>
        </div>
        <div className="w-full h-1 bg-era-stone-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-era-green w-[92%]" />
        </div>
        <p className="text-[10px] text-era-ink-500 font-bold">Vedlikeholdsindeks: 92</p>
      </div>
    </div>
  );
}
