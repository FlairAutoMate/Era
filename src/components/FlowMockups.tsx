import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  UploadCloud, 
  Zap, 
  Check, 
  FileText, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Smartphone,
  Layers,
  Sliders,
  Heart,
  Plus,
  Home,
  Clock,
  User,
  Activity
} from 'lucide-react';

export default function FlowMockups() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stepsInfo = [
    {
      num: 1,
      title: 'Boligskann & Dokumentasjon',
      badge: 'STEG 1',
      desc: 'Bruk kameraet eller last opp PDF. ERA fanger opp kvitteringer, FDV-filer og materialvalg helt automatisk.',
    },
    {
      num: 2,
      title: 'Hent Innsikt & Boligminne',
      badge: 'STEG 2',
      desc: 'Vår KI-motor oppretter en intelligent 10-års vedlikeholdsplan. Du får påminnelser før kritiske og dyre skader oppstår.',
    },
    {
      num: 3,
      title: 'Skreddersy & Bestill Fastpris',
      badge: 'STEG 3',
      desc: 'Når noe må gjøres, får du ferdig kalkulerte fastpristilbud fra kvalitetssikrede lokale partnere — koble og bekreft på sekunder.',
    },
  ];

  return (
    <section className="py-32 bg-[#09111E] text-white relative overflow-hidden text-left" id="mobil-flyt">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-era-gold/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-era-coral font-bold uppercase tracking-[0.25em] text-[10px] block font-sans">
            GRENSE SNITT // KONTROLL PÅ TELEFONEN
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] text-white font-sans">
            Sømløs flyt. <br />
            <span className="text-era-coral">Tilpasset din bolighverdag.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Vi har plassert hele boligens livsløp rett i lommen din. Se hvordan ERA transformerer usikkerhet til dokumentert oversikt gjennom tre enkle steg.
          </p>
        </div>

        {/* 1, 2, 3 Steps Progress Connector Bar */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-white/[0.08] -translate-y-1/2 z-0 hidden sm:block" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 gap-6 sm:gap-0">
            {stepsInfo.map((step) => {
              const isActive = activeStep === step.num;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(step.num)}
                  className="flex items-center gap-4 group focus:outline-none"
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-[13px] font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-era-gold text-era-navy scale-110 shadow-lg shadow-era-gold/20 border-2 border-white' 
                        : 'bg-[#121E31] text-slate-400 border border-white/10 group-hover:bg-[#1a2d48] group-hover:text-white'
                    }`}
                  >
                    {step.num}
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className={`text-[10px] font-mono tracking-widest font-bold ${isActive ? 'text-era-gold' : 'text-slate-500'}`}>
                      STEG_0{step.num}
                    </div>
                    <div className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>
                      {step.title.split(' ')[0]}...
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-column Mockups Showroom (Interactive Spotlight based on active step) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">

          {/* PHONE 1: BROWSE DOCUMENTS / SCAN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => setActiveStep(1)}
            className={`border rounded-[42px] p-6 bg-[#0B1524] transition-all duration-300 cursor-pointer lg:col-span-1 relative flex flex-col justify-between ${
              activeStep === 1 
                ? 'border-era-gold bg-[#0e1d33] shadow-[0_0_50px_-12px_rgba(201,84,38,0.15)] ring-1 ring-era-gold/30' 
                : 'border-white/[0.04] opacity-40 hover:opacity-80'
            }`}
          >
            {/* Top Phone Decorators */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#070e17] rounded-full flex items-center justify-between px-3 z-30">
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              <div className="w-10 h-1 bg-white/10 rounded-full" />
              <span className="w-1.5 h-1.5 bg-blue-500/60 rounded-full" />
            </div>

            {/* Simulated App screen container */}
            <div className="rounded-[28px] overflow-hidden bg-[#070E17] border border-white/[0.05] flex-grow flex flex-col aspect-[9/18] text-slate-300 relative font-sans text-xs pt-10 select-none shadow-inner">
              
              {/* App Status Bar */}
              <div className="flex justify-between items-center px-6 py-2 text-[10px] text-slate-400 font-mono">
                <span className="text-white/60">09:41</span>
                <span className="flex items-center gap-1">5G <span className="w-3 h-1.5 border border-white/40 rounded-sm inline-block" /></span>
              </div>

              {/* App Header */}
              <div className="px-6 py-4 border-b border-white/[0.03] flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400">ERA SKANN // 01</span>
                <span className="text-yellow-500">★</span>
              </div>

              {/* App Main Work Area */}
              <div className="p-5 space-y-4 flex-grow overflow-hidden flex flex-col justify-between">
                
                {/* Upload Visual Mockup Block */}
                <div className="border border-dashed border-white/10 hover:border-white/20 rounded-xl p-5 flex flex-col items-center justify-center text-center space-y-3 bg-white/[0.01]">
                  <div className="w-10 h-10 rounded-full bg-era-gold/10 flex items-center justify-center text-era-gold">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-xs">Last opp vedlegg</div>
                    <div className="text-[9px] text-slate-500 font-light max-w-[140px] mt-0.5">Bilder, FDV-filer eller falmede kvitteringer</div>
                  </div>
                </div>

                {/* Scanned Image Preview */}
                <div className="space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">DOKUMENTERT SLITASJE</div>
                  <div className="bg-[#121E31] border border-white/5 rounded-xl p-3 flex gap-3 items-center">
                    <div className="w-10 h-10 rounded bg-[#0E1B30] flex items-center justify-center shrink-0 overflow-hidden relative border border-white/10">
                      <div className="absolute inset-x-0 bottom-0 top-[60%] bg-emerald-500/20 flex items-center justify-center text-[8px] font-bold text-emerald-400 font-mono">OK</div>
                      <Camera className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="font-semibold text-white truncate text-[11px]">Sørvegg_fasade.jpg</div>
                      <div className="text-[9px] text-emerald-500 flex items-center gap-1 font-semibold">
                        <Check className="w-3 h-3 text-emerald-500" /> Kledning analysert
                      </div>
                    </div>
                  </div>
                </div>

                {/* Moisture Block warning */}
                <div className="bg-rose-950/20 border border-rose-500/10 rounded-xl p-3 space-y-1.5">
                  <div className="flex justify-between items-center text-[9px] text-rose-400 font-bold tracking-widest font-mono">
                    <span>POTENSIELL RISK</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">Baksvegg kledning: Hard eksponering</div>
                </div>

              </div>

              {/* Bottom Custom Navigation bar exactly like the visual pattern */}
              <div className="border-t border-white/[0.04] py-3.5 px-6 flex justify-between items-center bg-[#0C121B] text-slate-500 text-sm">
                <Home className="w-4 h-4 text-slate-400" />
                <Activity className="w-4 h-4" />
                <button className="w-8 h-8 rounded-full bg-era-gold hover:bg-era-gold/80 text-era-navy flex items-center justify-center shadow-md shadow-era-gold/10 -translate-y-1 scale-105">
                  <Plus className="w-4.5 h-4.5 font-bold" />
                </button>
                <Clock className="w-4 h-4" />
                <User className="w-4 h-4" />
              </div>

            </div>

            {/* Static descriptive card footer */}
            <div className="pt-6 space-y-2">
              <span className="text-era-gold font-mono text-[9px] font-bold uppercase tracking-widest">// AUTOMATISK SKANN</span>
              <h4 className="text-base font-bold text-white leading-tight">Fanger materialer og slitasje</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Legg inn bilder eller kvitteringer. ERA oppfatter hva slag vindu, tak eller kledning du har, slik at din boligmappe blir levende.
              </p>
            </div>
          </motion.div>

          {/* PHONE 2: ERA TIMELINE / AGENT ACTIVE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => setActiveStep(2)}
            className={`border rounded-[42px] p-6 bg-[#0B1524] transition-all duration-300 cursor-pointer lg:col-span-1 relative flex flex-col justify-between ${
              activeStep === 2 
                ? 'border-era-gold bg-[#0e1d33] shadow-[0_0_50px_-12px_rgba(201,84,38,0.15)] ring-1 ring-era-gold/30' 
                : 'border-white/[0.04] opacity-40 hover:opacity-80'
            }`}
          >
            {/* Top Phone Decorators */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#070e17] rounded-full flex items-center justify-between px-3 z-30">
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              <div className="w-10 h-1 bg-white/10 rounded-full" />
              <span className="w-1.5 h-1.5 bg-blue-500/60 rounded-full" />
            </div>

            {/* Simulated App screen container */}
            <div className="rounded-[28px] overflow-hidden bg-[#070E17] border border-white/[0.05] flex-grow flex flex-col aspect-[9/18] text-slate-300 relative font-sans text-xs pt-10 select-none shadow-inner">
              
              {/* App Status Bar */}
              <div className="flex justify-between items-center px-6 py-2 text-[10px] text-slate-400 font-mono">
                <span className="text-white/60">09:41</span>
                <span className="flex items-center gap-1">5G <span className="w-3 h-1.5 border border-white/40 rounded-sm inline-block" /></span>
              </div>

              {/* App Header */}
              <div className="px-6 py-3 flex items-center justify-between border-b border-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/90 uppercase tracking-widest font-mono">ERA AGENT</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-slate-400">𐄂</div>
              </div>

              {/* App Content */}
              <div className="p-5 space-y-4 flex-grow overflow-hidden flex flex-col justify-between">
                
                {/* Hero Feature Card: Acne Studio inspired editorial card */}
                <div className="bg-[#0D1829] border border-white/[0.04] rounded-xl p-4 space-y-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-era-gold/[0.02] rounded-full blur-xl pointer-events-none" />
                  
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-era-gold tracking-widest font-bold">LIVSLØPSPLAN</span>
                    <h5 className="text-lg font-serif font-semibold text-white tracking-tight leading-tight">Bjørnveien 8</h5>
                    <p className="text-[10px] text-slate-400 font-light leading-relaxed">
                      Eierdokumentasjon og klimadata koblet sammen i en levende tidslinje.
                    </p>
                  </div>

                  <button className="bg-era-gold hover:bg-era-gold/90 text-era-navy py-1.5 px-3 rounded text-[10px] font-bold uppercase tracking-wider self-start transition-all">
                    Se 10-årsplan
                  </button>
                </div>

                {/* Sliders status indicator mockup */}
                <div className="space-y-1.5">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono flex justify-between">
                    <span>BOLIGHELSE</span>
                    <span className="text-era-gold">8.2 / 10</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[82%] bg-gradient-to-r from-era-coral to-era-gold rounded-full" />
                  </div>
                </div>

                {/* Timeline checklist */}
                <div className="space-y-2 text-[10.5px]">
                  <div className="flex gap-2.5 items-center">
                    <div className="w-4 h-4 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-400" /></div>
                    <span className="text-slate-400">Rens av renner (2025)</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <div className="w-4 h-4 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-[8px] font-bold font-mono">!</div>
                    <span className="text-white font-medium">Overflatebehandling (2026)</span>
                  </div>
                </div>

              </div>

              {/* Bottom Navigation */}
              <div className="border-t border-white/[0.04] py-3.5 px-6 flex justify-between items-center bg-[#0C121B] text-slate-500 text-sm">
                <Home className="w-4 h-4" />
                <Activity className="w-4 h-4 text-slate-400" />
                <button className="w-8 h-8 rounded-full bg-white/5 text-slate-400 flex items-center justify-center">
                  <Plus className="w-4.5 h-4.5" />
                </button>
                <Clock className="w-4 h-4" />
                <User className="w-4 h-4" />
              </div>

            </div>

            {/* Static descriptive card footer */}
            <div className="pt-6 space-y-2">
              <span className="text-era-gold font-mono text-[9px] font-bold uppercase tracking-widest">// KONTINUERLIG MONITORERD</span>
              <h4 className="text-base font-bold text-white leading-tight">Proaktivt boligminne</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Bytt ut støvete permer med smart historikk. Du får påminnelser som baserer seg på vær, materialer, alder og slitasje.
              </p>
            </div>
          </motion.div>

          {/* PHONE 3: CUSTOMIZE / BOOK CONTRACTOR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => setActiveStep(3)}
            className={`border rounded-[42px] p-6 bg-[#0B1524] transition-all duration-300 cursor-pointer lg:col-span-1 relative flex flex-col justify-between ${
              activeStep === 3 
                ? 'border-era-gold bg-[#0e1d33] shadow-[0_0_50px_-12px_rgba(201,84,38,0.15)] ring-1 ring-era-gold/30' 
                : 'border-white/[0.04] opacity-40 hover:opacity-80'
            }`}
          >
            {/* Top Phone Decorators */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#070e17] rounded-full flex items-center justify-between px-3 z-30">
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              <div className="w-10 h-1 bg-white/10 rounded-full" />
              <span className="w-1.5 h-1.5 bg-blue-500/60 rounded-full" />
            </div>

            {/* Simulated App screen container */}
            <div className="rounded-[28px] overflow-hidden bg-[#070E17] border border-white/[0.05] flex-grow flex flex-col aspect-[9/18] text-slate-300 relative font-sans text-xs pt-10 select-none shadow-inner">
              
              {/* App Status Bar */}
              <div className="flex justify-between items-center px-6 py-2 text-[10px] text-slate-400 font-mono">
                <span className="text-white/60">09:41</span>
                <span className="flex items-center gap-1">5G <span className="w-3 h-1.5 border border-white/40 rounded-sm inline-block" /></span>
              </div>

              {/* App Header */}
              <div className="px-6 py-3 flex items-center justify-between border-b border-white/[0.02]">
                <div className="flex items-center gap-2 text-slate-400">
                  <span>𐄂</span>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-white/90">BESTILL PROSJEKT</span>
                </div>
                <Zap className="w-3.5 h-3.5 text-era-gold fill-era-gold animate-pulse" />
              </div>

              {/* App Content */}
              <div className="p-5 space-y-3 flex-grow overflow-hidden flex flex-col justify-between">
                
                {/* Active Partner Offer */}
                <div className="space-y-1.5">
                  <div className="text-[9px] text-slate-500 uppercase tracking-widest font-mono">FORSLAG KLART</div>
                  <div className="bg-[#0B1524] border border-white/5 rounded-xl p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-white text-[11px]">Sandmaler AS</div>
                        <div className="text-[9.5px] text-slate-400">Malerpartner · Oslo vest</div>
                      </div>
                      <span className="text-[9.5px] bg-[#121E31] text-era-gold px-1.5 py-0.5 rounded font-mono font-bold">FASTPRIS</span>
                    </div>
                    <div className="text-[10px] text-slate-300 leading-relaxed font-light border-t border-white/[0.03] pt-2">
                      Komplett maling og overflatebehandling av kledning sørvegg m/ grunnmaling.
                    </div>
                  </div>
                </div>

                {/* Customizable App options exactly as inspired in Acme Studio mockup (Step 3 layout config) */}
                <div className="space-y-1">
                  <div className="bg-[#121E31] border border-white/5 hover:border-white/10 rounded-lg p-2.5 flex items-center justify-between text-[10px] cursor-pointer">
                    <span className="flex items-center gap-2"><FileText className="w-3.5 h-3.5 text-slate-400" /> Spesifikasjonsliste</span>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </div>
                  <div className="bg-[#121E31] border border-white/5 hover:border-white/10 rounded-lg p-2.5 flex items-center justify-between text-[10px] cursor-pointer">
                    <span className="flex items-center gap-2"><Sliders className="w-3.5 h-3.5 text-slate-400" /> Velg fargekode</span>
                    <span className="text-[9px] text-era-gold font-bold uppercase tracking-wider font-mono">0394 Varm Grå</span>
                  </div>
                  <div className="bg-[#121E31] border border-white/5 hover:border-white/10 rounded-lg p-2.5 flex items-center justify-between text-[10px] cursor-pointer">
                    <span className="flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-slate-400" /> Materialvalg (Nordan Jotun)</span>
                    <div className="w-2.5 h-2.5 bg-[#4F565C] rounded-full border border-white/20" />
                  </div>
                </div>

                {/* Action button */}
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-lg text-[10.5px] font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-500/15">
                  Godkjenn & Bekreft →
                </button>

              </div>

              {/* Bottom Navigation */}
              <div className="border-t border-white/[0.04] py-3.5 px-6 flex justify-between items-center bg-[#0C121B] text-slate-500 text-sm">
                <Home className="w-4 h-4" />
                <Activity className="w-4 h-4" />
                <button className="w-8 h-8 rounded-full bg-white/5 text-slate-400 flex items-center justify-center">
                  <Plus className="w-4.5 h-4.5" />
                </button>
                <Clock className="w-4 h-4 text-slate-400" />
                <User className="w-4 h-4" />
              </div>

            </div>

            {/* Static descriptive card footer */}
            <div className="pt-6 space-y-2">
              <span className="text-era-gold font-mono text-[9px] font-bold uppercase tracking-widest">// COZY BESTILLING</span>
              <h4 className="text-base font-bold text-white leading-tight">Fastpris og partnergaranti</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Ingen stress med anbudskaos og usikre anslag. Du får tydelig spesifiserte tilbud som du godkjenner direkte med et enkelt trykk.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Informative interactive bottom note */}
        <div className="mt-16 text-center border-t border-white/[0.05] pt-10 max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/[0.05] rounded-full text-[10px] font-mono text-slate-400 tracking-wider">
            <span className="w-1.5 h-1.5 bg-era-coral rounded-full animate-ping" /> SAMSPILL MED BOLIGENS VERDI
          </div>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            Hver utførte oppgave bekreftes, lagres automatisk som godkjent dokument i din digitale profil, og hever tilstandsgraden på eiendommen ved et eventuelt salg.
          </p>
        </div>

      </div>
    </section>
  );
}
