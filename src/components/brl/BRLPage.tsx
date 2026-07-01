import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, Building2, Calendar, FileText, Bell, ShieldCheck, Wrench, ArrowDown } from 'lucide-react';
import NarrativeSection from '../NarrativeSection';

interface BRLPageProps {
  onOpenWaitlist?: () => void;
}

export default function BRLPage({ onOpenWaitlist }: BRLPageProps) {
  return (
    <div className="bg-era-cream pt-24 relative font-sans text-era-ink-900">
      
      {/* 1. HERO */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-era-stone-100 border-b border-era-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Venstre tekstkolonne */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8 text-left z-10"
          >
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-widest text-era-navy uppercase block">
                SAMEIE & BORETTSLAG
              </span>
              <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-era-ink-900 leading-tight">
                Eiendommen<br />
                passer ikke på<br />
                seg selv.<br />
                <span className="font-normal text-era-navy">ERA gjør det</span>
              </h1>
            </div>

            <p className="text-lg text-era-ink-700 font-light leading-relaxed max-w-md">
              Jeg er din AI-agent for eiendomsdrift som oppdager behov, varsler styret og sikrer verdien av fellesskapet.
            </p>

            <div className="pt-4">
              <button 
                onClick={onOpenWaitlist}
                className="bg-era-navy text-white hover:bg-era-ink-700 transition-colors rounded-full px-8 py-4 font-medium shadow-sm hover:shadow inline-flex items-center gap-2"
              >
                <span>Book en demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Høyre bildekolonne med svevende kort */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-era-navy/10 bg-era-stone-100 aspect-[16/10] sm:aspect-[16/11] w-full">
              <img 
                src="/src/assets/images/modern_condo_golden_hour_1782643257956.jpg" 
                alt="Moderne sameie ved fjorden" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-era-navy/20 via-transparent to-transparent opacity-40" />
            </div>

            {/* 1. Takinspeksjon anbefales */}
            <div className="absolute top-[12%] sm:top-[16%] left-[2%] sm:-left-[6%] bg-era-cream backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/80 text-left flex items-start gap-3 max-w-[220px] sm:max-w-[240px] animate-fade-in pointer-events-none">
              <div className="p-2 rounded-xl bg-era-brass text-white shrink-0 shadow-sm mt-0.5">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-era-navy leading-tight">Tak kontrollert</div>
                <div className="text-[10px] sm:text-xs text-era-ink-500 leading-tight">Godkjent<br />Mai 2025</div>
              </div>
            </div>

            {/* 2. Heisservice om 21 dager */}
            <div className="absolute top-[38%] right-[2%] sm:-right-[4%] bg-era-cream backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/80 text-left flex items-start gap-3 max-w-[210px] sm:max-w-[230px] animate-fade-in pointer-events-none">
              <div className="p-2 rounded-xl bg-era-green text-white shrink-0 shadow-sm mt-0.5">
                <Wrench className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-era-navy leading-tight">Service registrert</div>
                <div className="text-[10px] sm:text-xs text-era-ink-500">Gjennomført 8. mai</div>
              </div>
            </div>

            {/* 3. FDV oppdatert */}
            <div className="absolute bottom-[24%] left-[8%] sm:left-[12%] bg-era-cream backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/80 text-left flex items-start gap-3 max-w-[190px] sm:max-w-[210px] animate-fade-in pointer-events-none hidden sm:flex">
              <div className="p-2 rounded-xl bg-era-navy text-white shrink-0 shadow-sm mt-0.5">
                <FileText className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-era-navy leading-tight">Dokumentasjon lagret</div>
                <div className="text-[10px] sm:text-xs text-era-ink-500">Sist lagret i dag</div>
              </div>
            </div>

            {/* 4. Alt ser bra ut */}
            <div className="absolute bottom-[4%] right-[8%] sm:right-[10%] bg-era-cream backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/80 text-left flex items-start gap-3 max-w-[190px] sm:max-w-[210px] animate-fade-in pointer-events-none">
              <div className="p-2 rounded-xl bg-era-green text-white shrink-0 shadow-sm mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-era-navy leading-tight">Vedlikehold oppdatert</div>
                <div className="text-[10px] sm:text-xs text-era-ink-500 leading-tight">Ingen avvik<br />akkurat nå</div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 2. MØT ERA */}
      <NarrativeSection
        subtitle="MØT ERA"
        title="Sameiet har fått sin egen AI-agent."
        description="Jeg følger bygningene, oppdager vedlikeholdsbehov, husker historikken og hjelper styret med å ta vare på eiendommens verdi."
        image={
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-era-navy/10 w-full max-w-md bg-era-cream p-6 sm:p-10 flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-2xl bg-era-cream flex items-center justify-center shadow-inner">
              <Sparkles className="w-10 h-10 text-era-brass" />
            </div>
            <div className="space-y-2">
            </div>
          </div>
        }
      />

      {/* 3. EIENDOMMEN GLEMMER ALDRI */}
      <NarrativeSection
        subtitle="EIENDOMMENS HUKOMMELSE"
        title="Eiendommen glemmer aldri."
        description="Jeg bygger eiendommens kollektive hukommelse. Tidligere prosjekter, garantier, FDV-dokumentasjon, utført service og løpende vedlikehold – alt lagres automatisk og følger bygget selv om styret byttes ut."
        image={
          <img 
            src="/src/assets/images/memory_illustration_1782639123908.jpg" 
            alt="Eiendommens hukommelse" 
            className="rounded-3xl shadow-xl w-full max-w-xl object-cover border border-[#071A3D]/10" 
            referrerPolicy="no-referrer" 
          />
        }
        reversed
        cta={
          <button
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-2 text-sm font-bold text-era-brass hover:text-[#071A3D] transition-colors group cursor-pointer"
          >
            <span>Opprett digitalt arkiv for deres sameie</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        }
      />

      {/* 4. EIENDOMMEN OPPDAGER BEHOV */}
      <NarrativeSection
        subtitle="KONTINUERLIG ANALYSE"
        title="Eiendommen oppdager behov i tide."
        description="Jeg forklarer ikke avansert AI, jeg leverer resultatet. Ta bilder av fellesområder, tak, fasader, ventilasjon og tekniske installasjoner med mobilen. Jeg gjenkjenner tilstand og varsler styret før små skader blir til kostbare prosjekter."
        image={
          <img 
            src="/src/assets/images/detection_illustration_1782639148464.jpg" 
            alt="Oppdager behov" 
            className="rounded-3xl shadow-xl w-full max-w-xl object-cover border border-[#071A3D]/10" 
            referrerPolicy="no-referrer" 
          />
        }
      />

      {/* 5. PLANLAGT VEDLIKEHOLD */}
      <section className="py-24 bg-[#FAF9F7] border-y border-[#071A3D]/05">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-era-brass">FORUTSIGBARHET</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#071A3D] tracking-tight">
              Alltid ett steg foran.
            </h2>
            <p className="text-base sm:text-lg text-[#071A3D]/70 leading-relaxed">
              ERA hjelper styret med å prioritere, planlegge, budsjettere og varsle beboerne. Enkel oversikt – ikke kompliserte Gantt-diagrammer.
            </p>
          </div>

          {/* Enkel, rolig tidslinje */}
          <div className="grid sm:grid-cols-4 gap-6 pt-6">
            {[
              { year: 'VÅR', title: 'Fasadesjekk & Tak', desc: 'Automatisk påminnelse og visuell bildeinnsamling.' },
              { year: 'SOMMER', title: 'Maling & Uteområder', desc: 'Innhenting av tilbud fra kvalitetssikrede malermestere.' },
              { year: 'HØST', title: 'Rens av takrenner', desc: 'Klargjøring før frost og nedbør setter inn.' },
              { year: 'VINTER', title: 'Varmesystem & Energi', desc: 'Løpende oppfølging av fyring og energiøkonomi.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-[#071A3D]/08 space-y-3 relative">
                <div className="text-xs font-mono font-bold text-era-brass">{step.year}</div>
                <div className="text-base font-bold text-[#071A3D]">{step.title}</div>
                <p className="text-xs text-[#071A3D]/65 leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <ArrowRight className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#071A3D]/20 z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-era-brass/15 text-[#071A3D] font-bold text-sm transition-all border border-[#071A3D]/15 cursor-pointer shadow-sm group"
            >
              <span>Se eksempel på vedlikeholdsplan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-era-brass" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. NÅR EIENDOMMEN TRENGER HJELP (Arbeidsflyten) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-era-brass">ARBEIDSFLYT</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#071A3D] tracking-tight">
              Når eiendommen trenger hjelp.
            </h2>
            <p className="text-sm sm:text-base text-[#071A3D]/70 max-w-xl mx-auto">
              Dette er historien om et oppdrag. Ryddig, gjennomsiktig og trygt fra A til Å.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            {[
              { icon: <Bell className="w-5 h-5 text-amber-600" />, text: 'Eiendommen oppdager behov' },
              { icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, text: 'Styret varsles med konkret anbefaling' },
              { icon: <Wrench className="w-5 h-5 text-era-brass" />, text: 'ERA finner riktige, kvalitetssikrede håndverkere' },
              { icon: <FileText className="w-5 h-5 text-purple-600" />, text: 'Tilbud mottas og sammenlignes enkelt' },
              { icon: <Building2 className="w-5 h-5 text-emerald-600" />, text: 'Arbeidet utføres med ryddig chat-dialog' },
              { icon: <CheckCircle2 className="w-5 h-5 text-emerald-700" />, text: 'Trygg betaling direkte i plattformen' },
              { icon: <FileText className="w-5 h-5 text-[#071A3D]" />, text: 'FDV & dokumentasjon lagres automatisk' },
              { icon: <Sparkles className="w-5 h-5 text-era-brass" />, text: 'Eiendommen følges trygt videre i livsløpet' }
            ].map((flow, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#FAF9F7] border border-[#071A3D]/08 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-white shadow-inner shrink-0">
                    {flow.icon}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#071A3D]">
                    {flow.text}
                  </div>
                </div>
                {idx < 7 && (
                  <div className="flex justify-center -my-1.5">
                    <ArrowDown className="w-4 h-4 text-era-brass/60" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DOKUMENTASJON SOM LEVER VIDERE */}
      <NarrativeSection
        subtitle="LEVENDE FDV"
        title="Dokumentasjon som lever videre."
        description="Når et vedlikeholdsprosjekt er ferdig, oppdaterer jeg automatisk FDV, garantier, før/etter-bilder, produktkoder og fargevalg. Eiendommen blir smartere for hvert eneste prosjekt."
        image={
          <img 
            src="/src/assets/images/update_illustration_1782639186597.jpg" 
            alt="Dokumentasjon oppdateres" 
            className="rounded-3xl shadow-xl w-full max-w-md object-cover border border-[#071A3D]/10" 
            referrerPolicy="no-referrer" 
          />
        }
        reversed
      />

      {/* 8. VERDIEN AV GOD EIENDOMSDRIFT */}
      <section className="py-24 bg-[#FAF9F7] border-t border-[#071A3D]/08">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-era-brass">VERDIKJEPER</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#071A3D] tracking-tight leading-tight">
              Godt vedlikehold handler om mer enn å reparere.
            </h2>
            <p className="text-base text-[#071A3D]/70 leading-relaxed">
              Når styret har fullstendig oversikt og intelligent bistand, endres hele bo-opplevelsen for sameiet.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                'Færre uventede og kostbare overraskelser',
                'Bedre og mer forutsigbar fellesøkonomi',
                'Betydelig enklere og mindre tidkrevende styrearbeid',
                'Høyere eiendomsverdi ved salg av leiligheter',
                'Tryggere og mer fornøyde beboere'
              ].map((val, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#071A3D]">
                  <CheckCircle2 className="w-5 h-5 text-era-brass shrink-0" />
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <img 
              src="/src/assets/images/value_illustration_1782639199225.jpg" 
              alt="Verdien av god eiendomsdrift" 
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover border border-[#071A3D]/10" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      {/* Avslutning */}
      <section className="py-24 bg-slate-50 text-center border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-900 leading-tight">
            Eiendommen passer ikke på seg selv. Heldigvis gjør jeg det.
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Fra første inspeksjon til ferdig dokumentert vedlikehold følger jeg eiendommen gjennom hele livsløpet.
          </p>
          <div className="pt-4">
            <button onClick={onOpenWaitlist} className="bg-[#003B46] text-white hover:bg-[#002830] transition-colors rounded-full px-8 py-4 font-medium shadow-sm hover:shadow inline-flex items-center gap-2">
              <span>Book en demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
