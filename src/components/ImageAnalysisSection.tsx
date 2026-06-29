import React from 'react';
import { Camera, Search, RefreshCw, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ImageAnalysisSection() {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          <span className="text-[#5B7FD8] font-mono text-xs font-bold tracking-widest uppercase block">BILDEANALYSE</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#071A3D]">
            Ta et bilde. ERA gjør resten.
          </h2>
          
          <div className="space-y-6">
            {[
              { title: 'Oppdager slitasje', icon: Search },
              { title: 'Analyserer tilstand', icon: RefreshCw },
              { title: 'Oppdaterer boligminnet', icon: ShieldCheck },
              { title: 'Oppdaterer vedlikeholdsindeksen', icon: Zap },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-[#071A3D]">
                <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center">
                  <item.icon size={20} className="text-[#5B7FD8]" />
                </div>
                <span className="font-bold text-lg">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="relative w-full aspect-[4/3] bg-white rounded-3xl border border-[#071A3D]/10 shadow-xl overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-[#5B7FD8]/5" />
           <div className="relative w-48 h-64 bg-slate-200 rounded-2xl shadow-lg border-4 border-white transform rotate-6 flex flex-col items-center justify-center">
              <Camera className="w-12 h-12 text-[#5B7FD8]" />
           </div>
           {/* Elegant markers on "house" illustration */}
           <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full border-2 border-emerald-500 animate-pulse" />
           <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full border-2 border-amber-500 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
