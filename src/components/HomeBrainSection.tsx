import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Layers, ShieldCheck, Cpu, Calendar, FolderOpen, ArrowRight, Settings } from 'lucide-react';

export default function HomeBrainSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-era-ink-900 relative overflow-hidden border-t border-b border-era-stone-200">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-era-brass/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-era-sage/10 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-4 space-y-4 text-left">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
              ERA Boligagent<span className="text-era-brass">.</span>
            </h2>
            <p className="text-lg text-era-stone-200 font-light leading-relaxed max-w-sm">
              En proaktiv og intelligent agent som overvåker, planlegger og bevarer boligverdien din automatisk.
            </p>
          </div>

          <div className="lg:col-span-8 relative min-h-[580px] lg:h-[620px] flex items-center justify-center">
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
              <svg className="w-full h-full max-w-[700px] max-h-[550px] opacity-40" viewBox="0 0 600 500" fill="none">
                <ellipse cx="300" cy="250" rx="260" ry="210" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" strokeDasharray="4 6" />
                <ellipse cx="300" cy="250" rx="210" ry="165" stroke="rgba(192, 151, 91, 0.3)" strokeWidth="1" strokeDasharray="5 5" />
                <motion.circle cx="150" cy="100" r="4" fill="#C0975B" className="shadow-md" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />
                
                <AnimatePresence>
                  {activeCard === 'boligprofil' && <motion.path d="M 180,110 Q 230,150 280,210" stroke="#C0975B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} exit={{ pathLength: 0 }} />}
                  {activeCard === 'materialer' && <motion.path d="M 180,250 L 260,250" stroke="#C0975B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} exit={{ pathLength: 0 }} />}
                  {activeCard === 'teknisk' && <motion.path d="M 180,410 Q 230,350 280,280" stroke="#C0975B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} exit={{ pathLength: 0 }} />}
                  {activeCard === 'komponenter' && <motion.path d="M 430,130 Q 380,180 320,220" stroke="#C0975B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} exit={{ pathLength: 0 }} />}
                  {activeCard === 'vedlikehold' && <motion.path d="M 430,310 Q 360,300 320,270" stroke="#C0975B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} exit={{ pathLength: 0 }} />}
                  {activeCard === 'dokumentasjon' && <motion.path d="M 430,450 Q 350,380 300,310" stroke="#C0975B" strokeWidth="1.5" strokeDasharray="3 3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} exit={{ pathLength: 0 }} />}
                </AnimatePresence>
              </svg>
            </div>

            <div className="relative z-10 w-[300px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-era-ink-900">
              <img src="/src/assets/images/digital_twin_house_1781510744004.jpg" alt="House model" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-era-ink-900/95 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-[48%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-era-brass/30 animate-pulse" />
                <span className="w-3 h-3 rounded-full bg-era-brass ring-4 ring-white/15" />
              </div>
            </div>

            <div className="absolute inset-0 w-full h-full pointer-events-none lg:block hidden">
              <div className="absolute top-4 left-6 pointer-events-auto" onMouseEnter={() => setActiveCard('boligprofil')} onMouseLeave={() => setActiveCard(null)}>
                <div className="w-[200px] bg-era-cream rounded-2xl p-4 shadow-xl text-left flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-era-stone-200 text-era-ink-900 shrink-0"><Home className="w-5 h-5" /></div>
                  <div className="space-y-0.5"><h4 className="font-extrabold text-[13px] text-era-ink-900">ERA varsler</h4><p className="text-[11px] text-era-ink-500">Siste: Tak kontrollert</p></div>
                </div>
              </div>
              <div className="absolute top-[230px] left-[-15px] pointer-events-auto" onMouseEnter={() => setActiveCard('materialer')} onMouseLeave={() => setActiveCard(null)}>
                <div className="w-[195px] bg-era-cream rounded-2xl p-4 shadow-xl text-left flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-era-stone-200 text-era-ink-900 shrink-0"><Layers className="w-5 h-5" /></div>
                  <div className="space-y-0.5"><h4 className="font-extrabold text-[13px] text-era-ink-900">ERA Minne</h4><p className="text-[11px] text-era-ink-500">Materialer bekreftet</p></div>
                </div>
              </div>
              <div className="absolute bottom-6 left-12 pointer-events-auto" onMouseEnter={() => setActiveCard('teknisk')} onMouseLeave={() => setActiveCard(null)}>
                <div className="w-[190px] bg-era-cream rounded-2xl p-4 shadow-xl text-left flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-era-stone-200 text-era-brass shrink-0"><ShieldCheck className="w-5 h-5" /></div>
                  <div className="space-y-1"><h4 className="font-extrabold text-[13px] text-era-ink-900">Status</h4><p className="text-[11px] text-era-ink-700 font-bold">Tak kontrollert: OK</p></div>
                </div>
              </div>
              <div className="absolute top-2 right-4 pointer-events-auto" onMouseEnter={() => setActiveCard('komponenter')} onMouseLeave={() => setActiveCard(null)}>
                <div className="w-[260px] bg-era-cream rounded-2xl p-4 shadow-xl text-left flex justify-between gap-4">
                  <div className="flex gap-2.5 items-start"><div className="p-2.5 rounded-xl bg-era-stone-200 text-era-ink-900 shrink-0"><Settings className="w-5 h-5" /></div><div className="space-y-0.5"><h4 className="font-extrabold text-[13px] text-era-ink-900">Service</h4><p className="text-[11px] text-era-ink-500">Rørinspeksjon godkjent</p></div></div>
                  <img src="/src/assets/images/heat_pump_1781536348690.jpg" alt="Varmepumpe" className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="absolute top-[250px] right-[-25px] pointer-events-auto" onMouseEnter={() => setActiveCard('vedlikehold')} onMouseLeave={() => setActiveCard(null)}>
                <div className="w-[215px] bg-era-cream rounded-2xl p-4 shadow-xl text-left flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-era-stone-200 text-era-brass shrink-0"><Calendar className="w-5 h-5" /></div>
                  <div className="space-y-0.5"><h4 className="font-extrabold text-[13px] text-era-ink-900">Vedlikehold</h4><p className="text-[11px] text-era-ink-500">Service registrert</p></div>
                </div>
              </div>
              <div className="absolute bottom-1 right-20 pointer-events-auto" onMouseEnter={() => setActiveCard('dokumentasjon')} onMouseLeave={() => setActiveCard(null)}>
                <div className="w-[185px] bg-era-cream rounded-2xl p-4 shadow-xl text-left flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-era-stone-200 text-era-ink-900 shrink-0"><FolderOpen className="w-5 h-5" /></div>
                  <div className="space-y-0.5"><h4 className="font-extrabold text-[13px] text-era-ink-900">Dokumentasjon</h4><p className="text-[11px] text-era-ink-500">Dokumentasjon lagret</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
