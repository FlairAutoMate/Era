import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Home, Wrench, Building2, Layers, Bot } from 'lucide-react';

interface AboutPageProps {
  onOpenWaitlist?: () => void;
}

export default function AboutPage({ onOpenWaitlist }: AboutPageProps) {
  return (
    <div className="bg-era-cream text-era-ink-900 min-h-screen font-sans selection:bg-era-brass selection:text-era-ink-900">
      
      {/* 1. VISJONEN / HERO MANIFESTO */}
      <section className="pt-40 sm:pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Svak vannmerke-tekst i bakgrunnen */}
        <div className="absolute top-20 right-[-5%] text-[20vw] font-black tracking-tighter text-era-ink-900/[0.02] leading-none pointer-events-none select-none font-display">
          VISJON
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-era-ink-900/10 text-xs font-mono tracking-widest uppercase text-era-navy shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-era-brass" />
              <span>Visjonen</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-era-ink-900 leading-[1.08]">
              Boligen din er mer enn <br />
              <span className="text-era-brass">et sted du bor.</span>
            </h1>

            <div className="space-y-4 text-lg sm:text-2xl text-era-ink-900 font-light leading-relaxed max-w-3xl pt-4">
              <p>
                Den er den største investeringen de fleste gjør. <br className="hidden sm:block" />
                Den rommer minner, trygghet og verdier som bygges gjennom et helt liv.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEMET MED MINNET */}
      <section className="py-20 px-6 bg-white border-y border-era-ink-900/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-12 space-y-8"
          >
            <p className="text-2xl sm:text-4xl font-normal text-era-ink-900 tracking-tight leading-snug max-w-3xl">
              Likevel blir den fortsatt vedlikeholdt med <span className="underline decoration-red-400 decoration-2 underline-offset-8">hukommelsen</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              <div className="p-6 rounded-2xl bg-era-cream border border-era-ink-900/5">
                <span className="text-red-500 font-mono text-xs font-bold block mb-2">01 / ROT</span>
                <p className="text-base font-medium text-era-ink-900">Papirer blir borte.</p>
              </div>
              <div className="p-6 rounded-2xl bg-era-cream border border-era-ink-900/5">
                <span className="text-red-500 font-mono text-xs font-bold block mb-2">02 / TAPT</span>
                <p className="text-base font-medium text-era-ink-900">Kvitteringer forsvinner.</p>
              </div>
              <div className="p-6 rounded-2xl bg-era-cream border border-era-ink-900/5">
                <span className="text-red-500 font-mono text-xs font-bold block mb-2">03 / FORSIKTELSE</span>
                <p className="text-base font-medium text-era-ink-900">Vedlikehold utsettes.</p>
              </div>
              <div className="p-6 rounded-2xl bg-era-cream border border-era-ink-900/5">
                <span className="text-red-500 font-mono text-xs font-bold block mb-2">04 / KUNNSKAPSTAP</span>
                <p className="text-base font-medium text-era-ink-900">Kunnskap går tapt hver gang en håndverker eller eier byttes ut.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. LØSNINGEN: EN EGEN AGENT */}
      <section className="py-24 sm:py-32 px-6 bg-era-ink-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-era-navy/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center sm:text-left"
          >
            <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase font-bold block">
              PARADIGMESKIFTE
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight">
              Vi mener boligen <br />
              <span className="text-era-brass">fortjener bedre.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-era-brass/20 flex items-center justify-center text-era-brass">
                <Bot className="w-6 h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight">Ikke enda en app.</p>
              <p className="text-xl text-emerald-300 font-semibold">Men en egen agent.</p>
            </div>

            <div className="space-y-6 text-lg sm:text-xl text-white/80 font-light leading-relaxed pt-2">
              <p className="flex items-start gap-3">
                <span className="text-era-brass mt-1">✦</span>
                <span>En agent som kjenner boligen.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-era-brass mt-1">✦</span>
                <span>Som husker alt.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-era-brass mt-1">✦</span>
                <span>Som følger den gjennom hele levetiden.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-era-brass mt-1">✦</span>
                <span>Som hjelper eieren med å ta bedre beslutninger før små problemer blir store.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREMTIDEN: AUTONOM BOLIG */}
      <section className="py-24 sm:py-36 px-6 bg-era-cream">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-era-ink-900 leading-tight">
              Vi tror fremtidens bolig <br />
              ikke bare er smart.
            </h2>
            <p className="text-3xl sm:text-5xl font-black text-era-navy tracking-tight">
              Den er autonom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-l-2 border-era-navy/30 pl-6 sm:pl-10 text-lg sm:text-xl text-era-ink-900 font-light leading-relaxed">
            <div className="space-y-4">
              <p>Den følger sin egen historikk.</p>
              <p>Forstår sin egen tilstand.</p>
            </div>
            <div className="space-y-4">
              <p>Vet hva som må gjøres.</p>
              <p className="font-normal text-era-ink-900">Og kobler automatisk riktig ekspert når det er behov.</p>
            </div>
          </div>

          <div className="pt-8 border-t border-era-ink-900/10">
            <p className="text-2xl sm:text-4xl font-bold font-display text-era-ink-900 tracking-tight">
              Det er fremtiden vi bygger.
            </p>
            <p className="text-lg sm:text-xl text-era-ink-500 font-light mt-2">
              Ikke bare for én bolig. <strong className="font-semibold text-era-ink-900">Men for millioner av hjem.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 5. OM ERA: OPERATIVSYSTEMET FOR EIENDOM */}
      <section className="py-24 sm:py-36 px-6 bg-white border-t border-era-ink-900/10 relative">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-era-brass block">
              // OM ERA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-era-ink-900">
              Jeg er en AI-basert boligagent som følger boligen din gjennom hele dens levetid.
            </h2>
            <p className="text-lg sm:text-xl text-era-ink-500 font-light leading-relaxed">
              Jeg samler dokumentasjon, analyserer bilder og data, planlegger vedlikehold, varsler når noe bør gjøres og kobler boligeiere med de riktige håndverkerne når tiden er inne.
            </p>
            <p className="text-lg sm:text-xl font-medium text-era-ink-900 pt-2">
              Alt arbeid som utføres blir en del av boligens egen historie.
            </p>
          </div>

          {/* Tre målgrupper */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {/* Boligeier */}
            <div className="p-8 rounded-3xl bg-era-cream border border-era-ink-900/5 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-era-ink-900 text-white flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-era-ink-900">For boligeieren</h3>
                <p className="text-sm text-era-ink-500 font-light leading-relaxed">
                  Betyr det bedre oversikt, færre overraskelser og en bolig som ivaretas over tid.
                </p>
              </div>
            </div>

            {/* Håndverker */}
            <div className="p-8 rounded-3xl bg-era-cream border border-era-ink-900/5 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-era-brass text-era-ink-900 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-era-ink-900">For håndverkeren</h3>
                <p className="text-sm text-era-ink-500 font-light leading-relaxed">
                  Betyr det kvalifiserte oppdrag, mindre administrasjon og kunder som kommer tilbake når boligen trenger nytt vedlikehold.
                </p>
              </div>
            </div>

            {/* Sameier & Borettslag */}
            <div className="p-8 rounded-3xl bg-era-cream border border-era-ink-900/5 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-era-navy text-white flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-era-ink-900">For sameier & borettslag</h3>
                <p className="text-sm text-era-ink-500 font-light leading-relaxed">
                  Betyr det bedre beslutningsgrunnlag, enklere drift og full historikk på bygget.
                </p>
              </div>
            </div>
          </div>

          {/* Operativsystemet metaphor */}
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-era-ink-900 to-[#0E2C66] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-era-brass font-mono text-xs uppercase font-bold">
                <Layers className="w-4 h-4" />
                <span>KJERNEIDENTITET</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black font-display tracking-tight">
                Jeg er ikke enda en markedsplass.
              </h3>
              <p className="text-xl sm:text-2xl font-light text-emerald-300">
                Det er operativsystemet for eiendom.
              </p>
              <p className="text-sm sm:text-base text-white/70 font-light pt-1">
                Et sted hvor boligens historie, vedlikehold og fremtid møtes.
              </p>
            </div>
          </div>

          {/* Avsluttende sitat og CTA */}
          <div className="pt-12 text-center space-y-8">
            <p className="text-2xl sm:text-3xl font-normal font-display text-era-ink-900 max-w-2xl mx-auto leading-relaxed">
              Vi tror at alle boliger fortjener sin egen agent. <br />
              <span className="font-bold text-era-navy">Og at alle boliger en dag vil ha en.</span>
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenWaitlist}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-era-ink-900 text-white hover:bg-era-brass hover:text-era-ink-900 font-bold text-base tracking-wide transition-all shadow-xl cursor-pointer group"
              >
                <span>Bli med å bygge fremtiden</span>
                <ArrowRight className="w-5 h-5 text-era-brass group-hover:text-era-ink-900 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
