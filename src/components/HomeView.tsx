import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ViewType } from '../App';
import Hero from './Hero';
import NarrativeSection from './NarrativeSection';

interface HomeViewProps {
  onOpenWaitlist: () => void;
  onViewChange: (view: ViewType) => void;
}

export default function HomeView({ onOpenWaitlist, onViewChange }: HomeViewProps) {

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white pt-24 relative">
      <Hero onOpenWaitlist={onOpenWaitlist} onViewChange={onViewChange} />
      
      {/* 2. Din bolig har fått sin egen AI-agent. */}
      <motion.div id="slik-passer-era" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="INTRODUKSJON"
          title="Møt ERA."
          description="Din AI-boligagent. ERA kjenner boligen din, følger utviklingen og passer på den i bakgrunnen – hver eneste dag."
          image={<img src="/src/assets/images/era_agent_larger_prompt_1782736528386.jpg" alt="ERA AI-agent" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
        />
      </motion.div>

      {/* 3. Boligen glemmer aldri. */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="Det evigvarende boligminnet"
          title="Hjemmet ditt glemmer aldri noe igjen."
          description="Hvilken fargekode er det i stua? Hvor er kvitteringen på varmepumpa? Når gikk garantien ut? Alt du før lette etter i skuffer og e-poster, er nå trygt bevart."
          image={<img src="/src/assets/images/memory_illustration_1782639123908.jpg" alt="Boligminnet" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
          reversed
        />
      </motion.div>

      {/* 4. Ta et bilde. ERA gjør resten. */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="Magisk oppstart"
          title="Ta et bilde av rommet. Vi skjønner resten."
          description="Du trenger ikke fylle ut lange skjemaer. Ta et raskt bilde med mobilen, så gjenkjenner ERA materialer, overflater og vedlikeholdsbehov helt av seg selv."
          image={<img src="/src/assets/images/capture_illustration_1782639136532.jpg" alt="Ta bilde" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
          cta={
            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-era-cream hover:bg-era-brass/20 text-[#071A3D] font-bold text-sm transition-all border border-era-brass/30 cursor-pointer group"
            >
              <span>Prøv bildeanalyse på din bolig</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-era-brass" />
            </button>
          }
        />
      </motion.div>

      {/* 5. ERA oppdager behov. */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="Proaktivt vedlikehold"
          title="Vi varsler deg før små ting blir dyre skader."
          description="Trepanel tørker ut. Takrenner tettes av løv. ERA følger med på værdata og alder på bygningsdelene dine, og gir deg et vennlig vink i god tid."
          image={<img src="/src/assets/images/detection_illustration_1782639148464.jpg" alt="ERA oppdager behov" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
          reversed
        />
      </motion.div>

      {/* 6. Når noe må gjøres. */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="Fra stress til senkede skuldre"
          title="Når noe må fikses, ordner vi fagfolkene."
          description="Slutt på å ringe rundt til ti forskjellige håndverkere som aldri svarer. ERA beskriver jobben presist, og kobler deg direkte med anbefalte kvalitetsaktører."
          image={<img src="/src/assets/images/handling_illustration_1782639161743.jpg" alt="Håndtering" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
        />
      </motion.div>

      {/* 7. Utførelse og betaling. */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="Full kontroll på mobilen"
          title="Godkjenn tilbudet med ett enkelt klikk."
          description="Du følger fremdriften, chatter med håndverkeren og betaler trygt direkte i appen når du er fornøyd. Ingen uventede overraskelser på fakturaen."
          image={<img src="/src/assets/images/payment_illustration_1782639174186.jpg" alt="Utførelse og betaling" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
          reversed
          cta={
            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-era-cream hover:bg-era-brass/20 text-[#071A3D] font-bold text-sm transition-all border border-era-brass/30 cursor-pointer group"
            >
              <span>Få tilgang til ERA-håndverkere</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-era-brass" />
            </button>
          }
        />
      </motion.div>

      {/* 8. Boligminnet oppdateres automatisk. */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="Automatisk dokumentasjon"
          title="Hvert eneste prosjekt gjør hjemmet ditt smartere."
          description="Når jobben er gjort, glir garantibevis, før-og-etter-bilder og ny tilstandsrapport rett inn i boligminnet ditt. Klart til den dagen du kanskje vil selge."
          image={<img src="/src/assets/images/update_illustration_1782639186597.jpg" alt="Boligminnet oppdateres" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
        />
      </motion.div>

      {/* 9. Ta vare på boligverdien. */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="Din viktigste investering"
          title="Beskytt verdien i det kjæreste du eier."
          description="Et godt vedlikeholdt hjem er ikke bare tryggere å bo i – det holder seg også best i verdi. Med ERA får du fullstendig oversikt over din egen vedlikeholdsindeks."
          image={<img src="/src/assets/images/value_illustration_1782639199225.jpg" alt="Ta vare på boligverdien" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
          reversed
        />
      </motion.div>

      {/* 10. Reisen fortsetter. */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <NarrativeSection 
          subtitle="En reise over generasjoner"
          title="Vi passer på boligen så lenge du bor der."
          description="Heller enn skippertak og brannslukking, får du et rolig, kontinuerlig vedlikehold. ERA vokser med hjemmet ditt gjennom alle årstider og livsfaser."
          image={<img src="/src/assets/images/lifecycle_illustration_1782639212300.jpg" alt="Reisen fortsetter" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />}
        />
      </motion.div>

      {/* Avslutning */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 text-center bg-era-cream">
        <div className="max-w-xl mx-auto px-6 space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#071A3D] leading-tight">
              Boligen din klarer ikke passe på seg selv.
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-era-brass tracking-tight">
              Heldigvis gjør ERA det for deg.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <button 
              onClick={onOpenWaitlist} 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#071A3D] hover:bg-era-brass hover:text-[#071A3D] text-white font-bold text-sm tracking-wide transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-era-brass group-hover:text-[#071A3D]" />
              <span>Opprett gratis boligprofil</span>
            </button>
            <button 
              onClick={() => onViewChange('demo')} 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-[#FAF9F7] text-[#071A3D] border border-[#071A3D]/15 font-bold text-sm tracking-wide transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Prøv interaktiv demo</span>
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
