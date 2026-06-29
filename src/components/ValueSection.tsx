import React from 'react';
import { ShieldCheck, ClipboardList, Eye, Wrench, TrendingUp } from 'lucide-react';
import houseIllustration from '../assets/images/digital_twin_house_1781510744004.jpg'; // Reusing an existing asset as a placeholder

export default function ValueSection() {
  const points = [
    { icon: Wrench, text: "Prioritere riktig vedlikehold" },
    { icon: ShieldCheck, text: "Redusere risiko for uforutsette skader" },
    { icon: ClipboardList, text: "Dokumentere alt utført arbeid" },
    { icon: Eye, text: "Holde full oversikt over boligens tilstand" },
    { icon: TrendingUp, text: "Ta vare på og utvikle boligens verdi" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#0D1E3A] tracking-tight leading-[1.1]">
              Ta vare på den største investeringen du eier.
            </h2>
            <p className="text-lg text-[#0D1E3A]/70 leading-relaxed font-light">
              ERA hjelper deg som boligeier med å forvalte boligen din på en proaktiv måte. Ved å bruke vår teknologi, får du bedre grunnlag for å ta riktige beslutninger som kan bidra til å ivareta boligens verdi over tid.
            </p>
            
            <ul className="space-y-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[#0D1E3A] font-medium">
                  <div className="p-2 rounded-full bg-era-brass/10 text-era-brass">
                    <point.icon className="w-5 h-5" />
                  </div>
                  {point.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Illustration Area */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={houseIllustration} 
              alt="Moderne bolig" 
              className="w-full h-auto object-cover aspect-video" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-light opacity-90">
                ERA hjelper deg å se boligen som en helhet, ikke bare som enkeltdeler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
