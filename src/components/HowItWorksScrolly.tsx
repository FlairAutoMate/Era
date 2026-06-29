import React from 'react';
import { motion } from 'motion/react';

interface HowItWorksScrollyProps {
  onOpenWaitlist?: () => void;
}

export default function HowItWorksScrolly({ onOpenWaitlist }: HowItWorksScrollyProps) {
  // Stagger configurations for entrance animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
      },
    },
  };

  const steps = [
    {
      num: '01',
      title: 'Oppdag',
      desc: 'Ta bilde av boligen. KI finner vedlikeholdsbehov automatisk.',
    },
    {
      num: '02',
      title: 'Planlegg',
      desc: 'Vi prioriterer behovene og lager en vedlikeholdsplan for deg.',
    },
    {
      num: '03',
      title: 'Utfør',
      desc: 'Vi finner rett håndverker og følger opp hele jobben.',
    },
    {
      num: '04',
      title: 'Dokumenter',
      desc: 'Alt logges i boligminnet for verdiøkning og garantier.',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden scroll-mt-24" id="hvordan-det-fungerer">
      <div className="max-w-7xl mx-auto" id="how-it-works-title">
        
        {/* Top Text & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24 items-start mb-24">
          <div className="space-y-5">
            <p className="text-[10.5px] font-bold tracking-[0.2em] text-[#C94E26] uppercase font-sans">
              SLIK FUNGERER ERA
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1E3A] tracking-tight leading-[1.1]">
              Fra oppdagelse<br />
              <span className="text-[#C94E26] font-medium not-italic">til dokumentert verdi.</span>
            </h2>
            <p className="text-base text-[#0D1E3A]/70 leading-relaxed font-light max-w-lg">
              ERA bruker kunstig intelligens til å lese boligen din, automatisk oppdage vedlikeholdsbehov, og koble deg med rett kvalitetssikret håndverker.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-2 lg:pt-8">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-[#0D1E3A] tracking-tight">0 kr</div>
              <div className="text-[11px] text-[#0D1E3A]/60 leading-tight font-medium font-sans">Gratis å komme i gang</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-[#0D1E3A] tracking-tight">2026</div>
              <div className="text-[11px] text-[#0D1E3A]/60 leading-tight font-medium font-sans">Lansering</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-[#0D1E3A] tracking-tight">100%</div>
              <div className="text-[11px] text-[#0D1E3A]/60 leading-tight font-medium font-sans">Heldigitalt</div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(201, 78, 38, 0.3)',
                boxShadow: '0 12px 30px -10px rgba(13, 30, 58, 0.04)'
              }}
              className="group relative p-8 bg-slate-50/50 hover:bg-white border border-slate-100/80 rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              {/* Soft decorative accent background bubble that expands on hover */}
              <div className="absolute inset-0 bg-[#C94E26]/[0.01] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative space-y-4">
                {/* Large high-contrast state numbers that scale up gently on hover */}
                <motion.div 
                  className="text-4xl font-black text-[#0D1E3A]/10 group-hover:text-[#C94E26]/15 tracking-tight font-mono transition-colors duration-300 select-none"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.num}
                </motion.div>
                
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#0D1E3A] group-hover:text-[#C94E26] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#0D1E3A]/60 group-hover:text-[#0D1E3A]/75 transition-colors duration-300 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Minimalist interactive indicator at the bottom */}
              <div className="relative mt-6 pt-4 border-t border-slate-100/60 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#C94E26] transition-colors duration-300 font-sans">
                  Steg {step.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#C94E26] group-hover:scale-125 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Documentation Explanation */}
        <div className="mb-16 bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h4 className="text-sm font-bold text-[#0D1E3A] mb-2">Hvorfor dokumentasjon?</h4>
          <p className="text-sm text-[#0D1E3A]/70 leading-relaxed font-light">
            God dokumentasjon øker boligens verdi og forenkler fremtidig vedlikehold. 
            All dokumentasjon lagres automatisk i boligminnet og brukes til å oppdatere vedlikeholdsindeksen.
          </p>
        </div>

        {/* Integrated Bottom Call-To-Action Segment */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-[#0D1E3A] p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Klar til å teste fremtidens boligoppfølging?
            </h4>
            <p className="text-[12.5px] text-white/50 leading-relaxed max-w-lg">
              <strong className="text-white font-medium">Helt gratis å komme i gang</strong> · Ingen betalingsinformasjon kreves · Ingen bindingstid
            </p>
          </div>
          <button 
            onClick={onOpenWaitlist}
            className="w-full md:w-auto text-sm font-bold text-[#0D1E3A] bg-white hover:bg-white/95 active:scale-[0.98] px-6 py-3 rounded-xl cursor-pointer transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg outline-none flex items-center justify-center gap-2 group"
          >
            Prøv ERA gratis
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
