import { motion } from 'motion/react';
import { Package, Database, Shield, MoveRight } from 'lucide-react';

export default function ContractorFeatures() {
  return (
    <>
      {/* PRODUKT- OG MATERIALSALG */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="p-12 bg-era-ivory/50 border border-era-navy/5 relative group hover:bg-white transition-colors duration-700 rounded-xl">
               <Package className="w-8 h-8 text-era-gold mb-8" />
               <h3 className="text-3xl font-medium mb-8">KI-drevet materialsalg</h3>
               <p className="text-era-navy/60 font-light leading-relaxed mb-8">
                 Tjen mer per oppdrag. Når ERA analyserer bilder eller utformer et prosjekt, foreslår prisingsagenten automatisk premium oppgraderinger (f.eks. integrert belysning, smarthus-moduler, oppgradert listverk) som kunden kan godkjenne med ett klikk.
               </p>
               <ul className="space-y-4 text-sm text-era-navy/80 font-medium">
                 <li>• Automatisk kryss- og mersalg</li>
                 <li>• Integrerte produktkataloger</li>
                 <li>• Visuelle forslag til kunden</li>
                 <li>• Økt margin per oppdrag</li>
               </ul>
            </div>

            <div className="p-12 bg-era-navy text-white relative group rounded-xl">
               <Database className="w-8 h-8 text-era-gold mb-8" />
               <h3 className="text-3xl font-medium mb-8">ERA Core Infrastruktur</h3>
               <p className="text-white/60 font-light leading-relaxed mb-8">
                 ERA Core er kjernen i operativsystemet. Den synkroniserer boligdata, KI-modellering og entreprenørens prosjektstyringssystemer i sanntid.
               </p>
               <div className="space-y-6">
                 <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                   <p className="text-xs text-era-gold font-bold uppercase tracking-widest mb-2">Integrasjoner</p>
                   <p className="text-white/60 text-sm">Åpne APIer lar deg koble ERA til ditt eksisterende ERP, regnskaps- (Tripletex, PowerOffice) eller prosjektstyringssystem (Kordel, Cordel).</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA ONBOARDING */}
      <section className="py-60 px-6 bg-[#081426] text-center relative overflow-hidden text-white">
        {/* Subtle background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-era-gold/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="max-w-4xl mx-auto relative z-10"
        >
          <span className="text-era-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Bli ERA Partner</span>
          <h2 className="text-5xl md:text-8xl font-bold mb-16 text-white leading-[0.95]">
            Klart for oppdrag.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            <button className="bg-era-gold text-[#081426] px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-xl shadow-era-gold/20 flex items-center gap-3">
              Onboard din bedrift <MoveRight className="w-5 h-5" />
            </button>
            <button className="px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] border border-white/20 hover:bg-white/5 transition-colors rounded-xl">
              Last ned dokumentasjon
            </button>
          </div>

          <div className="max-w-xl mx-auto pt-16 border-t border-white/5">
            <div className="flex items-center justify-center gap-3 mb-6 text-white/70">
              <Shield className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Sikkerhet & Personvern</span>
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed px-8">
              All data behandles med ende-til-ende kryptering i henhold til GDPR. Entreprenører og ERA-partnere får kun tilgang til nødvendig data godkjent av boligeier for det spesifikke oppdraget.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
