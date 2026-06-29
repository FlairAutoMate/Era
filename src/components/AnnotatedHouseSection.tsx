import React from 'react';
import { ShieldCheck, Calendar } from 'lucide-react';
import houseBg from '../assets/images/hero_scandinavian_fjord_1782556093223.jpg';

export default function AnnotatedHouseSection() {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
          <span className="text-[#2d4a6e] font-mono text-xs font-bold tracking-widest uppercase block">
            PRESIS OVERVÅKNING
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#071A3D] leading-tight uppercase">
            ERA følger med<br />
            <span className="text-[#2d4a6e]">på boligen din</span>
          </h2>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={houseBg} 
            alt="Annotert bolig" 
            className="w-full h-full object-cover" 
          />
          
          {/* Annotations */}
          <div className="absolute top-1/4 left-1/4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 w-72">
            <div className="w-10 h-10 rounded-full bg-[#2d4a6e]/10 flex items-center justify-center text-[#2d4a6e]">
                <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
                <p className="text-sm font-bold text-slate-900">Tilstand: God</p>
                <p className="text-xs text-slate-500">Ingen kritiske avvik.</p>
            </div>
          </div>

          <div className="absolute bottom-1/3 right-1/4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 w-72">
            <div className="w-10 h-10 rounded-full bg-[#2d4a6e]/10 flex items-center justify-center text-[#2d4a6e]">
                <Calendar className="w-6 h-6" />
            </div>
            <div>
                <p className="text-sm font-bold text-slate-900">Neste oppgave</p>
                <p className="text-xs text-slate-500">Rens takrenner: 34 dager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
