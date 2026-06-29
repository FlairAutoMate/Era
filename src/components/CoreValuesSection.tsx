import React from 'react';
import houseFront from '../assets/images/house_front_angle_1782637713481.jpg';
import houseSide from '../assets/images/house_side_angle_1782637727154.jpg';
import houseBack from '../assets/images/house_back_angle_1782637740093.jpg';
import houseDetail from '../assets/images/house_detail_angle_1782637752957.jpg';

export default function CoreValuesSection() {
  const promises = [
    {
      title: "Passer på boligen",
      desc: "ERA overvåker boligen din og oppdager avvik før de blir kostbare utfordringer.",
      image: houseFront,
    },
    {
      title: "Sier ifra i tide",
      desc: "Du mottar proaktive varsler om vedlikeholdsbehov basert på boligens faktiske tilstand.",
      image: houseSide,
    },
    {
      title: "Husker alt",
      desc: "All dokumentasjon, historikk og garantier samles automatisk i ett trygt arkiv.",
      image: houseBack,
    },
    {
      title: "Øker boligverdien",
      desc: "Gjennom god dokumentasjon og riktig vedlikehold styrker du boligens markedsverdi.",
      image: houseDetail,
    },
  ];

  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[#2d4a6e] font-mono text-[11px] font-bold tracking-widest uppercase block">
            FREMTIDENS BOLIGFORVALTNING
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#071A3D] uppercase">
            Smartere vedlikehold, tryggere hjem
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promises.map((p, i) => (
            <div 
              key={i} 
              className="group rounded-3xl overflow-hidden bg-white border border-[#071A3D]/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#071A3D] mb-3">{p.title}</h3>
                <p className="text-sm text-[#4F566B] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
