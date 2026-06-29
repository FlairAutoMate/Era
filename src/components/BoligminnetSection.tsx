import React from 'react';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

const timelineEvents = [
  { year: '2026', title: 'Tak-kontroll utført', status: 'done', icon: CheckCircle },
  { year: '2026', title: 'Nye vinduer registrert', status: 'done', icon: CheckCircle },
  { year: '2026', title: 'Maling av sør- og vestfasade', status: 'upcoming', icon: Calendar },
  { year: '2028', title: 'Sjekk av taktekking & renner', status: 'upcoming', icon: Clock },
];

export default function BoligminnetSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#071A3D]">
            Boligen husker alt.
          </h2>
          <p className="text-lg text-[#4F566B] font-light leading-relaxed max-w-xl mx-auto">
            ERA lagrer alt om boligen din automatisk. 
            <span className="block mt-2 font-medium text-[#2d4a6e]">
              Historikk · Vedlikehold · Garantier · Dokumentasjon
            </span>
          </p>
        </div>

        <div className="relative border-l-2 border-[#2d4a6e]/20 ml-6 md:ml-32 space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-8">
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${event.status === 'done' ? 'bg-[#2d4a6e]' : 'bg-[#E5E7EB]'}`} />
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-[#2d4a6e]">{event.year}</span>
                <h3 className={`text-lg font-bold ${event.status === 'done' ? 'text-[#071A3D]' : 'text-[#4F566B]'}`}>
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
