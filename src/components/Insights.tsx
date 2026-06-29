import { motion } from 'motion/react';
import { TrendingUp, FileText, Zap, ShieldAlert, Hammer, Sparkles } from 'lucide-react';

const cards = [
  { icon: <Hammer className="w-5 h-5" />, label: "Vedlikehold", value: "God", color: "text-green-500", status: "tilstand" },
  { icon: <FileText className="w-5 h-5" />, label: "Dokumentasjon", value: "Noe", color: "text-era-gold", status: "mangler" },
  { icon: <Zap className="w-5 h-5" />, label: "Energi", value: "God", color: "text-blue-500", status: "vurdering" },
  { icon: <ShieldAlert className="w-5 h-5" />, label: "Risiko", value: "Lav", color: "text-green-500", status: "risiko" },
];

export default function Insights() {
  return (
    <section className="py-40 px-6 bg-era-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-era-gold font-semibold uppercase tracking-widest text-[10px] mb-4 block">Eiendomsinnsikt</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-8 max-w-2xl leading-[1.05]">
            Forstå hva som kan påvirke verdien.
          </h2>
          <p className="text-era-navy/70 max-w-lg text-lg font-light">
            ERA ser sammenhenger mellom vedlikehold, dokumentasjon og tilstand — og gir deg en enklere oversikt over ting som kan være viktige over tid.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-[0_10px_40px_-15px_rgba(14,35,65,0.05)] border border-era-navy/5 group cursor-default hover:shadow-2xl hover:shadow-era-navy/10 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="text-era-navy/60 group-hover:text-era-gold transition-colors duration-500">
                  {card.icon}
                </div>
                <div className="w-8 h-8 bg-era-navy/5 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-era-navy/70" />
                </div>
              </div>
              <h4 className="text-era-navy/60 text-[10px] font-bold uppercase tracking-widest mb-2">{card.label}</h4>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-display font-medium leading-none ${card.color}`}>{card.value}</span>
                <span className="text-[10px] font-bold text-era-navy/70 uppercase tracking-widest">{card.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="p-10 md:p-20 bg-white border border-era-navy/[0.03] flex flex-col md:flex-row items-center gap-16 overflow-hidden relative shadow-2xl shadow-era-navy/[0.02]"
        >
          <div className="relative z-10 flex-1">
            <div className="w-12 h-12 bg-era-gold/10 flex items-center justify-center text-era-gold mb-8">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-medium mb-8">ERA ser potensial.</h3>
            <p className="text-era-navy/60 font-light text-lg leading-relaxed mb-10 max-w-md">
              Fullført dokumentasjon og godt vedlikehold kan gjøre eiendommen mer attraktiv over tid.
            </p>
            <div className="flex items-center gap-6">
              <button className="square-button-navy">Se tiltak</button>
              <span className="text-xs font-bold text-era-navy/70 uppercase tracking-widest">Siste vurdering</span>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="relative w-72 h-72">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1.5px] border-dashed border-era-gold/30"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-[1px] border-era-navy/5"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-6xl font-display font-bold text-era-navy block"
                  >
                    +2.4%
                  </motion.span>
                  <p className="text-[11px] text-era-gold font-bold uppercase tracking-widest mt-2 px-3 py-1 bg-era-gold/10">Estimert potensial</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
