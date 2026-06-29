import React from 'react';
import { motion } from 'motion/react';

const PARTNERS = [
  {
    id: 'malproff',
    name: 'Mal Proff',
    logo: (
      <div className="flex items-center">
        <span className="font-sans font-black tracking-tighter text-3xl text-era-ink-500">
          MAL{" "}
          <span className="bg-era-ink-500 text-white px-2 py-0.5 rounded text-[13px] tracking-normal font-mono font-bold align-middle inline-block ml-1">
            PROFF
          </span>
        </span>
      </div>
    )
  },
  {
    id: 'mesterfarge',
    name: 'Mesterfarge',
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full border-2 border-era-ink-500 flex items-center justify-center">
          <span className="text-[10px] text-era-ink-500 font-bold">M</span>
        </div>
        <span className="font-sans font-extrabold tracking-widest text-era-ink-500 text-base uppercase">
          MESTER<span className="font-light">FARGE</span>
        </span>
      </div>
    )
  },
  {
    id: 'jotun',
    name: 'Jotun',
    logo: (
      <div className="flex items-center gap-2.5">
        <div className="flex gap-1 items-end h-8">
          <div className="w-2 h-5 bg-era-ink-500 rounded-t-sm" />
          <div className="w-2.5 h-7.5 bg-era-ink-500 rounded-t-sm" />
          <div className="w-2 h-3.5 bg-era-ink-500 rounded-t-sm" />
        </div>
        <span className="font-sans font-black tracking-wider text-2xl text-era-ink-500 uppercase">
          JOTUN
        </span>
      </div>
    )
  }
];

// Duplicate list heavily to ensure seamless infinite looping animation
const TICKER_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function PartnersSlideshow() {
  return (
    <section className="py-14 bg-white border-b border-era-ink-900/5 relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Simple Section Label */}
        <div className="text-center mb-8">
          <p className="text-era-ink-500 text-xs font-mono font-bold uppercase tracking-[0.3em] block">
            SAMARBEIDSPARTNERE & SYSTEMVALG
          </p>
        </div>

        {/* Infinite Moving Slide Track - Large & Centered */}
        <div className="w-full overflow-hidden relative py-4 select-none">
          
          {/* Soft left & right glass fading cover overlays to smooth edge exits */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex items-center gap-24 min-w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity
            }}
          >
            {TICKER_ITEMS.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="flex items-center justify-center shrink-0 transition-opacity duration-300 hover:opacity-100"
              >
                {item.logo}
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
