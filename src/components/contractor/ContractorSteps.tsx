import { motion } from 'motion/react';
import { Camera, Bot, Cpu, ArrowDownToLine, Handshake, Smartphone, Wrench, CreditCard, BookOpen } from 'lucide-react';

const flowSteps = [
  { icon: <Camera />, label: "Boligprofil" },
  { icon: <Bot />, label: "Bildeanalyse", isAi: true },
  { icon: <Cpu />, label: "Boliganalyse", isAi: true },
  { icon: <ArrowDownToLine />, label: "Oppfølging" },
  { icon: <BookOpen />, label: "Fastpristilbud", isAi: true },
  { icon: <Handshake />, label: "Fagperson match", isAi: true },
  { icon: <Smartphone />, label: "Håndverker App" },
  { icon: <Wrench />, label: "Utførelse" },
  { icon: <CreditCard />, label: "Betaling (Vipps)" },
  { icon: <BookOpen />, label: "Boligminne" }
];

export default function ContractorSteps() {
  return (
    <section className="py-32 px-6 bg-[#0B0F19] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=2000')] opacity-5 object-cover mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-era-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Automasjonsflyt</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Ett sammenhengende system</h2>
        </div>

          <div className="flex flex-row overflow-x-auto items-start pb-12 gap-2">
          {flowSteps.map((step, i) => (
            <div key={i} className="flex flex-row items-center flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center w-32"
              >
                {/* Node */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border z-10 relative shadow-xl ${
                  step.isAi 
                    ? 'bg-blue-900/40 border-blue-500/30 text-blue-400 shadow-blue-500/10' 
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-era-gold hover:border-era-gold/30 transition-colors'
                }`}>
                  {/* Glow effect for KI nodes */}
                  {step.isAi && <div className="absolute inset-0 rounded-xl bg-blue-400/10 blur-md pointer-events-none" />}
                  <div className="[&>svg]:w-6 [&>svg]:h-6">
                    {step.icon}
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <span className={`text-[10px] font-mono tracking-widest uppercase block ${step.isAi ? 'text-blue-300 font-bold' : 'text-white/60'}`}>
                    {step.label}
                  </span>
                </div>
              </motion.div>

              {/* Connecting Line (except last) */}
              {i < flowSteps.length - 1 && (
                <div className="w-12 h-[1px] bg-white/10 relative -top-8 self-center">
                   <motion.div
                     initial={{ width: "0%" }}
                     animate={{ width: "100%" }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                     className={`absolute top-0 left-0 h-full ${step.isAi ? 'bg-blue-400' : 'bg-era-gold'}`}
                   />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
