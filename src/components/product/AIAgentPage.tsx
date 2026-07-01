import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Database, Zap, FileSearch, ArrowRight, ShieldCheck, Activity, BookOpen, Clock, Wrench } from 'lucide-react';

const TerminalLine = ({ text, delay, onComplete, colorClass = "text-white/60" }: { text: string, delay: number, onComplete?: () => void, colorClass?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 20);
    return () => clearInterval(interval);
  }, [started, text, onComplete]);

  if (!started) return null;

  return (
    <div className={`${colorClass} font-mono text-[10.5px] tracking-wide leading-relaxed`}>
      {displayedText}
      {displayedText.length < text.length && <span className="inline-block w-2 relative top-0.5 h-3 bg-era-gold ml-1 animate-pulse" />}
    </div>
  );
};

interface AIAgentPageProps {
  onOpenWaitlist?: () => void;
}

export default function AIAgentPage({ onOpenWaitlist }: AIAgentPageProps) {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-24 font-sans">
      {/* Hero */}
      <section className="py-24 sm:py-32 px-6 bg-slate-50 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-widest text-era-ink-900 uppercase mb-4 block">
              AI-NATIVE BOLIGOPPFØLGING
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-era-ink-900 tracking-tight mb-6 leading-tight">
              KI-agenten som <br className="hidden md:block"/>følger opp boligen din
            </h1>
            <p className="text-lg sm:text-xl text-era-ink-500 font-light mb-10 leading-relaxed">
              Jeg analyserer boligdata, tolker bilder og dokumentasjon, oppdager vedlikeholdsbehov og kobler deg direkte med kvalifiserte håndverkere — helt gratis for deg som eier.
            </p>
            <button onClick={onOpenWaitlist} className="btn-cta">
              <span>Prøv ERA Agent</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How it works - Strategic Positioning */}
      <section className="py-24 sm:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
             <span className="text-sm font-semibold tracking-widest text-era-ink-900 uppercase mb-3 block">OPERATIVSYSTEMET</span>
             <h2 className="text-3xl sm:text-4xl font-light text-era-ink-900 tracking-tight mb-6">
               Et intelligent operativsystem for boligen din
             </h2>
             <p className="text-lg text-era-ink-500 font-light leading-relaxed">
               I stedet for å være et passivt arkiv eller et statisk dashboard, tilrettelegger jeg for helautomatisk, kontinuerlig boligoppfølging.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Phase 1 */}
            <div className="card-base p-8 bg-era-stone-100">
              <div className="w-12 h-12 bg-era-ink-900/5 flex items-center justify-center mb-6 text-era-ink-900 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-xs uppercase tracking-widest text-era-ink-900 font-semibold mb-2">LEVENDE DATA</h4>
              <h3 className="text-xl font-medium text-era-ink-900 mb-3 tracking-tight">Levende Boligdata</h3>
              <p className="text-era-ink-500 text-base font-light leading-relaxed">
                Last opp det du har av FDV-mapper, bilder og vedlikeholdshistorikk. Jeg analyserer dokumentene automatisk og samler alt i én levende, oversiktlig boligprofil.
              </p>
            </div>
            {/* Phase 2 */}
            <div className="card-base p-8 bg-era-stone-100">
              <div className="w-12 h-12 bg-era-ink-900/5 flex items-center justify-center mb-6 text-era-ink-900 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xs uppercase tracking-widest text-era-ink-900 font-semibold mb-2">AI-NATIVE</h4>
              <h3 className="text-xl font-medium text-era-ink-900 mb-3 tracking-tight">Autonome Arbeidsflyter</h3>
              <p className="text-era-ink-500 text-base font-light leading-relaxed">
                Jeg følger opp boligen din over tid. Ved å sammenstille boligens alder, materialer og historikk, beregner jeg når deler bør sjekkes for å unngå uforutsette skader.
              </p>
            </div>
            {/* Phase 3 */}
            <div className="card-base p-8 bg-era-stone-100">
              <div className="w-12 h-12 bg-era-ink-900/5 flex items-center justify-center mb-6 text-era-ink-900 rounded-xl">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-xs uppercase tracking-widest text-era-ink-900 font-semibold mb-2">UTFØRELSE</h4>
              <h3 className="text-xl font-medium text-era-ink-900 mb-3 tracking-tight">Utførelse & Dokumentasjon</h3>
              <p className="text-era-ink-500 text-base font-light leading-relaxed">
                Når et tiltak krever fagfolk, presenterer jeg ferdig spesifiserte forslag med godkjente, lokale håndverkere klare til fastpris – bestilt og bekreftet på sekunder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-24 sm:py-32 px-6 bg-era-stone-100 border-t border-era-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-16 items-center">
            
            {/* Document Understanding Interactive Panel */}
            <div className="order-1 lg:order-1 relative min-h-[520px] bg-slate-900 border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between p-8 rounded-3xl">
               <div>
                 <div className="flex gap-2 text-white/30 mb-8 border-b border-white/10 pb-4">
                   <div className="w-3 h-3 rounded-full bg-red-400/40" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                   <div className="w-3 h-3 rounded-full bg-green-400/40" />
                   <span className="font-mono text-[10px] text-white/50 ml-3">boliganalyse.ts</span>
                 </div>
                 
                 <div className="space-y-4">
                   <TerminalLine 
                     text="// Starter automatisk dokumentanalyse..." 
                     delay={500} 
                     colorClass="text-[#38bdf8] uppercase font-semibold"
                     onComplete={() => setStep(1)}
                   />
                   {step >= 1 && (
                     <TerminalLine 
                       text="Leser samsvarserklæring: Bad / rør-i-rør system..." 
                       delay={200}
                       onComplete={() => setStep(2)}
                     />
                   )}
                   {step >= 2 && (
                     <TerminalLine 
                       text="Avleser merker, pakningstyper og levetidsgrenser... [OK]" 
                       delay={400}
                       onComplete={() => setStep(3)}
                     />
                   )}
                   {step >= 3 && (
                     <TerminalLine 
                       text="=> Lagrer i Boligminnet: Sluk og rør-i-rør (sertifisert 2022)" 
                       delay={300}
                       colorClass="text-emerald-400 mt-4 font-medium"
                       onComplete={() => setStep(4)}
                     />
                   )}
                   {step >= 4 && (
                     <TerminalLine 
                       text="=> Neste planlagte slukservice: August 2026" 
                       delay={600}
                       colorClass="text-white font-bold"
                       onComplete={() => setStep(5)}
                     />
                   )}
                 </div>
               </div>
               
               {step >= 5 && (
                 <motion.div 
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="mt-8 bg-slate-800 p-6 border border-white/10 text-white rounded-xl"
                 >
                   <div className="font-sans text-sm font-medium mb-2 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                       <Zap className="w-4 h-4 text-[#38bdf8]" />
                       <span>Foreslått service: Sluk & rør-kontroll</span>
                     </div>
                     <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">ANBEFALT</span>
                   </div>
                   <div className="font-sans text-xs text-slate-300 font-light mb-4">Jeg har innhentet fastpristilbud hos autorisert rørlegepartner.</div>
                   <button onClick={onOpenWaitlist} className="w-full bg-era-ink-900 hover:bg-era-ink-700 text-white py-3 px-4 font-sans font-medium text-xs rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm">
                     <span>Bestill tilstandsrapport</span>
                     <ArrowRight className="w-3.5 h-3.5" />
                   </button>
                 </motion.div>
               )}
            </div>
            
            {/* The core "Aktiv Boligforvaltning" Positioning Copy Blocks */}
            <div className="order-2 lg:order-2 text-left">
              <span className="text-sm font-semibold tracking-widest text-era-ink-900 uppercase mb-3 block">KONSEPT</span>
              <h2 className="text-3xl sm:text-4xl font-light text-era-ink-900 tracking-tight mb-6">
                Fra statisk perm til aktiv boligforvaltning
              </h2>
              <p className="text-lg text-era-ink-500 font-light leading-relaxed mb-10">
                En perm i skapet husker ingenting. Jeg gjør dokumentasjon levende ved å forstå boligen din, følge opp vedlikehold og varsle før problemer oppstår.
              </p>
              
              <div className="space-y-8 mt-10">
                {/* 1. Intelligent dokumentforståelse */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-era-ink-900/5 flex items-center justify-center flex-shrink-0 text-era-ink-900">
                    <FileSearch className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-era-ink-900 mb-1">Intelligent dokumentforståelse</h3>
                    <p className="text-sm text-era-ink-500 font-light leading-relaxed">
                      Last opp FDV, bilder eller bruksanvisninger — Jeg forstår automatisk hva boligen trenger, hvilke komponenter som finnes og hvilke vedlikeholdsrutiner som gjelder.
                    </p>
                  </div>
                </div>

                {/* 2. Levende digital boligprofil */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-era-ink-900/5 flex items-center justify-center flex-shrink-0 text-era-ink-900">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-era-ink-900 mb-1">Levende digital boligprofil</h3>
                    <p className="text-sm text-era-ink-500 font-light leading-relaxed">
                      Jeg kombinerer dokumentasjon, alder, materialer, historikk og løpende boligdata for å bygge en kontinuerlig oppdatert forståelse av eiendommen din.
                    </p>
                  </div>
                </div>

                {/* 3. Proaktiv oppfølging */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-era-ink-900/5 flex items-center justify-center flex-shrink-0 text-era-ink-900">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-era-ink-900 mb-1">Proaktiv oppfølging</h3>
                    <p className="text-sm text-era-ink-500 font-light leading-relaxed">
                      I stedet for å reagere etter skaden skjer, varsler jeg tidlig om slitasje, servicebehov og kommende tiltak — med forslag til kvalifiserte håndverkere klare i appen.
                    </p>
                  </div>
                </div>

                {/* 4. Automatisk historikk */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-era-ink-900/5 flex items-center justify-center flex-shrink-0 text-era-ink-900">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-era-ink-900 mb-1">Automatisk historikk</h3>
                    <p className="text-sm text-era-ink-500 font-light leading-relaxed">
                      Utført arbeid, bilder, kvitteringer, garantier og FDV lagres automatisk i boligens digitale Boligminne — alltid oppdatert og klart for salg, forsikring eller videre oppfølging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
