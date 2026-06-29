import { motion } from 'motion/react';
import { Eye, AlertCircle, CheckCircle2, ImageIcon, Hammer } from 'lucide-react';

const observations = [
  {
    icon: <AlertCircle className="w-5 h-5 text-era-gold" />,
    label: "Dokumentasjon mangler",
    content: "ERA finner ingen dokumentasjon på siste oppussing av bad.",
    time: "Nå",
    type: "warning"
  },
  {
    icon: <Eye className="w-5 h-5 text-blue-400" />,
    label: "Vedlikehold anbefales",
    content: "ERA anbefaler kontroll av sørvegg før vinteren.",
    time: "2 dager siden",
    type: "info"
  },
  {
    icon: <ImageIcon className="w-5 h-5 text-green-400" />,
    label: "Nye bilder analysert",
    content: "ERA har analysert nye bilder og oppdatert historikken.",
    time: "Forrige uke",
    type: "success"
  },
  {
    icon: <Hammer className="w-5 h-5 text-gray-400" />,
    label: "Materialer registrert",
    content: "ERA har registrert trepanel og steinplater på eiendommen.",
    time: "1 mnd siden",
    type: "maintenance"
  }
];

export default function AmbientFeed() {
  return (
    <section className="py-40 px-6 bg-era-midnight text-white overflow-hidden relative">
      {/* Background radial gradient to add depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,107,0.05),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">ERA oppdaget.</h2>
          <p className="text-white/60 font-light max-w-sm mx-auto text-lg">
            ERA hjelper deg å følge opp eiendommen — uten unødvendig støy.
          </p>
        </div>

        <div className="space-y-6">
          {observations.map((obs, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/5 p-8 flex items-start gap-6 hover:bg-white/[0.08] transition-all duration-500 cursor-default group rounded-[6px]"
            >
              <div className="mt-1 flex-shrink-0 w-12 h-12 bg-white/5 flex items-center justify-center rounded-[6px]">
                {obs.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-era-gold">{obs.label}</span>
                  <span className="text-[10px] text-white/20 font-medium uppercase tracking-widest">{obs.time}</span>
                </div>
                <p className="text-white/80 text-base md:text-lg pr-12 font-light leading-relaxed">
                  {obs.content}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-xs text-era-gold font-semibold uppercase tracking-widest flex items-center gap-2">
                    Se detaljer
                    <div className="w-4 h-px bg-era-gold" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
