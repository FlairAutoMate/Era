import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Check, Info, Paintbrush, Calendar, Compass, Clock, Archive, HelpCircle } from 'lucide-react';

interface FutureTimelineProps {
  onOpenWaitlist?: () => void;
}

const FUTURE_EVENTS = [
  {
    year: "2026",
    period: "AUGUST 2026",
    type: "ANBEFALT TILTAK",
    title: "Maling av sør- og vestfasade",
    description: "Trevirke er estimert til å miste beskyttelse etter 10 år. Sørveggen har hardest soleksponering, og ERA anbefaler tiltak i år for å unngå råteskader.",
    partnerInfo: {
      brand: "Jotun Drytech • Mesterfarge",
      desc: "Autorisert Mesterfarge-partner klargjort med Jotun optimal beskyttelse.",
      actionText: "Be om tilbud"
    },
    badge: "Soleksponering vurdert"
  },
  {
    year: "2028",
    period: "VÅR 2028",
    type: "PERIODISK KONTROLL",
    title: "Sjekk av taktekking & renner",
    description: "Systematisk ettersyn av spikerfester, mosegroing og skjøter. Forebygger lekkasjer etter vintersesonger.",
    partnerInfo: {
      brand: "Norsk Taksjekk",
      desc: "Gjennomgang av takflate med drone- og bildeanalyse.",
      actionText: "Aktiver automatisk takvarsling"
    },
    badge: "Standardintervall"
  },
  {
    year: "2031",
    period: "HØST 2031",
    type: "VENTILASJON & ENERGI",
    title: "Service på balansert ventilasjon",
    description: "Rengjøring av kanaler, viftebytte og filterbytte for å optimalisere inneklima og redusere strømforbruk.",
    partnerInfo: {
      brand: "Systemair Partner",
      desc: "Sertifisert tekniker rengjør kanaler og kalibrerer luftstrømmer.",
      actionText: "Se energiberegning for boligen"
    },
    badge: "Energigarantikrav"
  }
];

const HISTORY_EVENTS = [
  {
    year: "2026",
    period: "APRIL 2026",
    type: "UTFØRT VEDLIKEHOLD",
    title: "Tak-kontroll utført",
    description: "Periodisk tilstandssjekk gjennomført i tråd med Byggforsk-retningslinjer. Ingen kritiske avvik avdekket.",
    partnerInfo: {
      brand: "Norsk Taksjekk Partner",
      desc: "Periodisk tilstandssjekk gjennomført i tråd med Byggforsk-retningslinjer. Tilstand karakterisert som TG1.",
      actionText: "Se lagret tilstandsrapport"
    },
    badge: "Mosefjerning utført & TG1"
  },
  {
    year: "2026",
    period: "JANUAR 2026",
    type: "FORBEDRING EFFEKT",
    title: "Nye vinduer registrert",
    description: "ERA identifiserte oppgradering til 3-lags lavenergivinduer fra Nordan basert på skannet kvittering og FDV-vedlegg.",
    partnerInfo: {
      brand: "Byggmakker Partner",
      desc: "U-verdi forbedret fra 1.4 til 0.8. Estimert årlig energibesparelse: 850 kWh. Godkjent FDV-dokumentasjon overførbart ved salg.",
      actionText: "Se FDV-dokumentasjon"
    },
    badge: "U-verdi forbedret til 0.8"
  },
  {
    year: "2025",
    period: "OKTOBER 2025",
    type: "DOKUMENTERT",
    title: "Fasade malt (Vestvegg)",
    description: "14 kvitteringer og produktkoder analysert og registrert automatisk under eiendommens utvendige vedlikehold.",
    partnerInfo: {
      brand: "Jotun Drytech Partner",
      desc: "Jotun Drytech fargekode S2500-N benyttet. Bilder før/etter låst til det digitale Boligminnet. Forventet neste beising: År 2035.",
      actionText: "Hent fargekoder & kvittering"
    },
    badge: "Fargekode S2500-N registrert"
  }
];

export default function FutureTimeline({ onOpenWaitlist }: FutureTimelineProps) {
  const [activeTab, setActiveTab] = useState<'future' | 'history'>('future');
  const [selectedEvent, setSelectedEvent] = useState<number>(0);

  const events = activeTab === 'future' ? FUTURE_EVENTS : HISTORY_EVENTS;
  const currentEvent = events[selectedEvent] || events[0];

  return (
    <section className="py-32 px-6 bg-white border-b border-era-navy/5 relative overflow-hidden text-era-navy">
      {/* Background decoration matching Apple/Stripe luxury grid */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #0E2341 1px, transparent 1px), linear-gradient(to bottom, #0E2341 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Editorial header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block font-sans">
            Eiendomsanalyse & FDV
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0E2341] leading-[1.1] mb-6">
            Både historikk og fremtid — helhetlig kontroll.
          </h2>
          <p className="text-base md:text-lg text-[#0E2341]/70 font-light leading-relaxed">
            Se hva som er gjort og hva som må gjøres. ERA samler historisk eierdokumentasjon automatisk i ditt Boligminne, og produserer en proaktiv 10-årsplan for proaktivt og verdiskapende vedlikehold.
          </p>
        </div>

        {/* Premium segment tabs */}
        <div className="flex bg-era-ivory p-1 rounded-[6px] w-full max-w-lg mb-12 border border-era-navy/5">
          <button
            onClick={() => {
              setActiveTab('history');
              setSelectedEvent(0);
            }}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-[6px] transition-all duration-300 ${
              activeTab === 'history'
                ? "bg-[#0E2341] text-white shadow-md shadow-era-navy/10"
                : "text-era-navy/60 hover:text-era-navy"
            }`}
          >
            Historikk (Boligminne)
          </button>
          <button
            onClick={() => {
              setActiveTab('future');
              setSelectedEvent(0);
            }}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-[6px] transition-all duration-300 ${
              activeTab === 'future'
                ? "bg-[#0E2341] text-white shadow-md shadow-era-navy/10"
                : "text-era-navy/60 hover:text-era-navy"
            }`}
          >
            10-årsplan (Vedlikehold)
          </button>
        </div>

        {/* The Split grid matching Scandinavian minimalism */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: The actual visual timeline list modeled exactly off user image */}
          <div className="lg:col-span-7 flex relative">
            
            {/* The Spine Line going through the years */}
            <div className="absolute left-[54px] top-4 bottom-4 w-[1px] bg-era-navy/10 z-0" />

            <div className="space-y-12 w-full z-10">
              {events.map((event, index) => {
                const isSelected = selectedEvent === index;
                
                return (
                  <div 
                    key={index} 
                    onClick={() => setSelectedEvent(index)}
                    className="flex items-start gap-8 group cursor-pointer"
                  >
                    {/* Year Block & Bullet Node Indicator */}
                    <div className="flex items-center justify-between w-20 shrink-0">
                      <span className={`font-sans font-medium text-lg leading-none transition-colors duration-300 ${
                        isSelected ? "text-era-gold font-bold animate-pulse" : "text-era-navy/40 group-hover:text-era-navy/70"
                      }`}>
                        {event.year}
                      </span>
                      
                      {/* Interactive ring dot on spine line */}
                      <div className="relative flex items-center justify-center translate-x-[15px]">
                        <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                          isSelected 
                            ? 'bg-white border-era-gold scale-125 shadow-md' 
                            : 'bg-white border-era-navy/20 group-hover:border-era-navy/40'
                        }`} />
                        {isSelected && (
                          <span className="absolute w-1.5 h-1.5 bg-era-gold rounded-full animate-ping" />
                        )}
                      </div>
                    </div>

                    {/* Timeline card styled exactly like user image with borderless integrated feel */}
                    <div className={`flex-1 p-6 transition-all duration-300 rounded-[6px] text-left ${
                      isSelected 
                        ? "bg-era-ivory/80 shadow-[0_15px_40px_rgba(14,35,65,0.04)] border border-era-navy/5" 
                        : "bg-transparent hover:bg-era-ivory/30 border border-transparent"
                    }`}>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="text-[9px] font-mono font-bold tracking-widest text-era-gold uppercase">
                          {event.type}
                        </span>
                        
                        <span className="text-[9px] font-mono text-era-navy/40 uppercase">
                          {event.period}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-medium tracking-tight text-[#0E2341] mb-3">
                        {event.title}
                      </h3>

                      <p className="text-sm font-light leading-relaxed text-[#0E2341]/80">
                        {event.description}
                      </p>

                      {/* Display minor badges inside card */}
                      <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-[#0E2341]/50 bg-[#0E2341]/5 px-2.5 py-1 rounded-[6px] w-fit">
                        {activeTab === 'future' ? (
                          <Compass className="w-3 h-3 text-era-gold" />
                        ) : (
                          <Clock className="w-3 h-3 text-era-gold" />
                        )}
                        <span>{event.badge}</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive digital dispatcher/action window tied to Jotun/Partners */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${selectedEvent}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0C1422] text-white p-8 rounded-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/5 text-left relative overflow-hidden"
              >
                {/* Thin tech line decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-era-gold/[0.04] blur-2xl pointer-events-none" />

                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="font-mono text-[9px] tracking-widest text-[#a3b8cc] uppercase font-bold">
                      {activeTab === 'future' ? 'ERA AUTONOM INTEGRASJON' : 'DOKUMENTERT BOLIGMAPPE'}
                    </span>
                    <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-[4px] border ${
                      activeTab === 'future' 
                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                        : 'text-era-gold bg-era-gold/10 border-era-gold/20'
                    }`}>
                      {activeTab === 'future' ? 'KLARGJORT' : 'LÅST (BOLIGMINNET)'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs text-white/50 block font-mono">
                      {activeTab === 'future' ? `Planlagt for ${currentEvent.year}` : `Bekreftet historikk fra ${currentEvent.year}`}
                    </span>
                    <h4 className="text-2xl font-bold font-display tracking-tight text-white leading-tight">
                      {currentEvent.title}
                    </h4>
                  </div>

                  {/* Brand / Partner Match Card */}
                  <div className="bg-white/5 border border-white/10 rounded-[6px] p-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded-[6px] text-era-gold">
                        {activeTab === 'future' ? (
                          <Paintbrush className="w-5 h-5" />
                        ) : (
                          <Archive className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-era-gold uppercase tracking-wider block">
                          {activeTab === 'future' ? 'ANBEFALT PARTNER' : 'REGISTRERT AKTØR'}
                        </span>
                        <span className="text-sm font-bold text-white block">
                          {currentEvent.partnerInfo.brand}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-white/70 font-light leading-relaxed font-sans">
                      {currentEvent.partnerInfo.desc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-white/60 leading-relaxed font-light">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        {activeTab === 'future' 
                          ? 'Sikrer at oppdraget utføres etter oppdaterte bransjestandarder og registreres i ditt FDV-boligminne.' 
                          : 'Dokumentasjonen tilfredsstiller avhendingsloven for trygg og verdisikret overdragelse ved eventuelt salg.'}
                      </span>
                    </div>

                    <button 
                      onClick={onOpenWaitlist}
                      className="w-full bg-white hover:bg-era-ivory text-era-navy font-bold py-4 px-5 rounded-[6px] text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                    >
                      <span>{currentEvent.partnerInfo.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <p className="text-center text-[9px] text-white/40 font-mono tracking-widest uppercase">
                      {activeTab === 'future' 
                        ? '✓ fastpris • mestergaranti • automatisk Vipps' 
                        : '✓ koble til bolig • FDV-godkjent • BankID-signering'}
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

