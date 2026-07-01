import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Sparkles, Calendar, Home, MessageSquare, Clock, 
  ArrowRight, ShieldCheck, FileText, TrendingUp, Check, CreditCard, 
  FolderCheck, Award, RefreshCw, Zap, Bell, CheckSquare, ChevronRight
} from 'lucide-react';
import ContractorHero from './ContractorHero';
import NarrativeSection from '../NarrativeSection';

interface ContractorPageProps {
  onOpenWaitlist?: () => void;
}

export default function ContractorPage({ onOpenWaitlist }: ContractorPageProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-era-cream min-h-screen font-sans antialiased pt-24">
      
      <ContractorHero onOpenWaitlist={onOpenWaitlist} />

      {/* Seksjon 1: Hero */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <NarrativeSection 
            subtitle="ERA partner"
            title="Flere oppdrag. Mindre administrasjon. ERA gjør det."
            description="ERA følger boliger gjennom hele livsløpet. Når boligen trenger vedlikehold, hjelper ERA deg hele veien — fra første forespørsel til ferdig dokumentert arbeid."
            image={
              <div className="relative w-full aspect-[4/3] bg-era-stone-200 rounded-3xl overflow-hidden shadow-sm border border-era-stone-200">
                <img src="/src/assets/images/nordic_craftsman_1781510726713.jpg" alt="Håndverker og bolig" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl border border-era-stone-200 text-xs text-era-ink-900 flex items-center gap-2">
                   <MessageSquare className="w-4 h-4 text-era-brass" /> <span>Din AI-agent.</span>
                </div>
              </div>
            }
          />
        </div>
      </motion.section>

      {/* Seksjon 2: Møt ERA */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 sm:py-32 px-6 bg-white border-t border-era-stone-200">
        <div className="max-w-7xl mx-auto">
          <NarrativeSection 
            subtitle="MØT ERA"
            title="Din AI-agent for håndverksbedriften."
            description="Jeg blir kjent med kunden og boligen. Jeg samler historikk, bilder og behov, slik at du alltid starter med riktig grunnlag."
            image={
              <div className="relative w-full aspect-[4/3] bg-era-stone-200 rounded-3xl overflow-hidden shadow-sm border border-era-stone-200">
                <img src="/src/assets/images/agent_illustration_1782639110972.jpg" alt="Møt ERA" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-era-ink-900 shadow-lg border border-white/20 z-20">
                  Henter kundedata og historikk.
                </div>
              </div>
            }
            reversed
          />
        </div>
      </motion.section>

      {/* Seksjon 3: Kartlegging */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <NarrativeSection 
            subtitle="KARTLEGGING"
            title="Jeg avdekker behov og muligheter."
            description="Jeg analyserer boligen, oppdager vedlikeholdsbehov og finner nye oppdrag før kunden begynner å lete."
            image={
              <div className="relative w-full aspect-[4/3] bg-era-stone-200 rounded-3xl overflow-hidden shadow-sm border border-era-stone-200">
                <img src="/src/assets/images/detection_illustration_1782639148464.jpg" alt="Kartlegging" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-era-ink-900 shadow-lg border border-white/20 z-20">
                  Identifiserer vedlikeholdsbehov.
                </div>
              </div>
            }
          />
        </div>
      </motion.section>

      {/* Seksjon 4: Tilbud */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 sm:py-32 px-6 bg-white border-t border-era-stone-200">
        <div className="max-w-7xl mx-auto">
          <NarrativeSection 
            subtitle="TILBUD"
            title="Jeg gjør salg enklere."
            description="Jeg lager prosjektbrief, beregner omfang og hjelper deg med å utforme tilbud raskere."
            image={
              <div className="relative w-full aspect-[4/3] bg-era-stone-200 rounded-3xl overflow-hidden shadow-sm border border-era-stone-200">
                <img src="/src/assets/images/capture_illustration_1782639136532.jpg" alt="Tilbud" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-era-ink-900 shadow-lg border border-white/20 z-20">
                  Kalkulerer og utformer tilbud.
                </div>
              </div>
            }
            reversed
          />
        </div>
      </motion.section>

      {/* Seksjon 5: Gjennomføring */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <NarrativeSection 
            subtitle="GJENNOMFØRING"
            title="Jeg holder kunden oppdatert."
            description="Jeg følger opp kommunikasjon, dokumentasjon og fremdrift gjennom hele prosjektet."
            image={
              <div className="relative w-full aspect-[4/3] bg-era-stone-200 rounded-3xl overflow-hidden shadow-sm border border-era-stone-200">
                <img src="/src/assets/images/handling_illustration_1782639161743.jpg" alt="Gjennomføring" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-era-ink-900 shadow-lg border border-white/20 z-20">
                  Oppdaterer kunde og fremdrift.
                </div>
              </div>
            }
          />
        </div>
      </motion.section>
      
      {/* Seksjon 6: Dokumentasjon */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 sm:py-32 px-6 bg-white border-t border-era-stone-200">
        <div className="max-w-7xl mx-auto">
          <NarrativeSection 
            subtitle="DOKUMENTASJON"
            title="Jeg dokumenterer alt arbeidet."
            description="Bilder, produkter, garantier, FDV og historikk lagres automatisk på boligen."
            image={
              <div className="relative w-full aspect-[4/3] bg-era-stone-200 rounded-3xl overflow-hidden shadow-sm border border-era-stone-200">
                <img src="/src/assets/images/payment_illustration_1782639174186.jpg" alt="Dokumentasjon" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-era-ink-900 shadow-lg border border-white/20 z-20">
                  Lagrer garantier og FDV.
                </div>
              </div>
            }
            reversed
          />
        </div>
      </motion.section>

      {/* Seksjon 7: Livslang oppfølging */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <NarrativeSection 
            subtitle="LIVSLANG OPPFØLGING"
            title="Jeg skaper nye oppdrag."
            description="Jeg følger boligen etter at jobben er ferdig, sender automatiske påminnelser og varsler kunden når nytt vedlikehold nærmer seg."
            image={
              <div className="relative w-full aspect-[4/3] bg-era-stone-200 rounded-3xl overflow-hidden shadow-sm border border-era-stone-200">
                <img src="/src/assets/images/memory_illustration_1782639123908.jpg" alt="Livslang oppfølging" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-era-ink-900 shadow-lg border border-white/20 z-20">
                  Varsler om vedlikehold.
                </div>
              </div>
            }
          />
        </div>
      </motion.section>

      {/* Seksjon 8: Vekst */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 sm:py-32 px-6 bg-white border-t border-era-stone-200">
        <div className="max-w-7xl mx-auto">
          <NarrativeSection 
            subtitle="VEKST"
            title="Jeg hjelper bedriften din å vokse."
            description="Flere gjentakende kunder, mindre administrasjon, bedre kundeopplevelser og mer tid til det du gjør best."
            image={
              <div className="relative w-full aspect-[4/3] bg-era-stone-200 rounded-3xl overflow-hidden shadow-sm border border-era-stone-200">
                <img src="/src/assets/images/lifecycle_illustration_1782639212300.jpg" alt="Vekst" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-era-ink-900 shadow-lg border border-white/20 z-20">
                  Analyserer lønnsomhet.
                </div>
              </div>
            }
            reversed
          />
        </div>
      </motion.section>

      {/* Seksjon 9: AVSLUTNING */}
      <div className="py-24 text-center bg-white border-t border-era-stone-200">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-era-ink-900 leading-tight">
            Flere oppdrag. Mindre administrasjon. ERA gjør det.
          </h2>
          <p className="text-era-ink-700">ERA følger kundene dine, automatiserer arbeidsflyten og hjelper deg å bygge en mer lønnsom og forutsigbar håndverksbedrift. Mens du bygger boliger, bygger ERA fremtidens kunderelasjoner.</p>
          <button onClick={onOpenWaitlist} className="btn-cta">
            <span>Bli pilotbedrift</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

