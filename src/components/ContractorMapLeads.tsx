import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Users, Flame, Wrench, Building2, TrendingUp, DollarSign, Bell, ShieldCheck, ArrowRight } from 'lucide-react';

interface ContractorMapLeadsProps {
  onOpenWaitlist?: () => void;
}

interface LeadRequest {
  id: number;
  location: string;
  postalCode: string;
  type: string;
  material: string;
  value: string;
  timeAgo: string;
  badge: string;
}

export default function ContractorMapLeads({ onOpenWaitlist }: ContractorMapLeadsProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('oslo');
  const [liveLeads, setLiveLeads] = useState<LeadRequest[]>([
    {
      id: 1,
      location: 'Asker / Oslo',
      postalCode: '1386 Asker',
      type: 'Fasadevask & Maling',
      material: 'Stående tømmermannspanel, hvit',
      value: 'kr 85 000',
      timeAgo: 'Akkurat nå',
      badge: 'Forespørsel'
    },
    {
      id: 2,
      location: 'Fana / Bergen',
      postalCode: '5224 Nesttun',
      type: 'Takrens & Sjekk av mosefukt',
      material: 'Klassisk rød teglsteintak',
      value: 'kr 14 500',
      timeAgo: '24s siden',
      badge: 'Bildeanalyse'
    },
    {
      id: 3,
      location: 'Byåsen / Trondheim',
      postalCode: '7020 Trondheim',
      type: 'Utskifting av tre-karmer',
      material: '3 koblede stuevinduer, 1994',
      value: 'kr 42 000',
      timeAgo: '1 min siden',
      badge: 'FDV-avvik'
    },
    {
      id: 4,
      location: 'Sande / Stavanger',
      postalCode: '4050 Sola',
      type: 'Rens av kjeller fuktavskjæring',
      material: 'Drenering mot vestvegg',
      value: 'kr 120 000',
      timeAgo: '3 min siden',
      badge: 'Struktursjekk'
    }
  ]);

  // Regional metrics for the interactive map hotspots
  const regionalData: Record<string, { name: string; activeHomes: number; volume: string; averagePrice: string; partners: number }> = {
    oslo: { name: 'Oslo & Viken', activeHomes: 1420, volume: 'kr 3.2M', averagePrice: 'kr 65 000', partners: 42 },
    bergen: { name: 'Vestlandet / Bergen', activeHomes: 840, volume: 'kr 1.8M', averagePrice: 'kr 48 000', partners: 24 },
    trondheim: { name: 'Trøndelag / Trondheim', activeHomes: 510, volume: 'kr 1.1M', averagePrice: 'kr 39 000', partners: 14 },
    stavanger: { name: 'Sør-Rogaland / Stavanger', activeHomes: 610, volume: 'kr 1.4M', averagePrice: 'kr 55 000', partners: 18 },
    tromso: { name: 'Nord-Norge / Tromsø', activeHomes: 230, volume: 'kr 550k', averagePrice: 'kr 31 000', partners: 8 }
  };

  // Sample reservoir of potential new leads to inject into the live ticker flow
  const leadReservoir = [
    { location: 'Bærum', postalCode: '1358 Jar', type: 'Fasademaling', material: 'Liggende panel, rød', value: 'kr 95 000', badge: 'Forespørsel' },
    { location: 'Drammen', postalCode: '3024 Drammen', type: 'Varmepumpeservice', material: 'Toshiba Daiseikai', value: 'kr 4 500', badge: 'Prediksjon' },
    { location: 'Tromsdalen', postalCode: '9020 Tromsdalen', type: 'Takrenneservice', material: 'Svart stål, 22 løpemeter', value: 'kr 11 000', badge: 'Bildeanalyse' },
    { location: 'Geilo', postalCode: '3580 Geilo', type: 'Beising av hyttevegg', material: 'Villmarkspanel, tjærebrun', value: 'kr 68 000', badge: 'Hukommelse' },
    { location: 'Kristiansand', postalCode: '4612 Kristiansand', type: 'Termografi av vindu', material: '4 soveromsvinduer', value: 'kr 6 800', badge: 'Risikovarsel' },
    { location: 'Lillehammer', postalCode: '2615 Lillehammer', type: 'Sjekk av snølastbæring', material: 'Takpapp tekke', value: 'kr 15 000', badge: 'Pre-vinter' }
  ];

  // Rotate/Prepend new leads over time to simulate a live sanntid stream flowing in
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * leadReservoir.length);
      const chosenTemplate = leadReservoir[randomIndex];
      
      const newLead: LeadRequest = {
        id: Date.now(),
        location: chosenTemplate.location,
        postalCode: chosenTemplate.postalCode,
        type: chosenTemplate.type,
        material: chosenTemplate.material,
        value: chosenTemplate.value,
        timeAgo: 'Akkurat nå',
        badge: chosenTemplate.badge
      };

      setLiveLeads((prevLeads) => {
        // Update timeAgo string updates for older items
        const updatedPrevious = prevLeads.map((lead, idx) => ({
          ...lead,
          timeAgo: idx === 0 ? '12s siden' : idx === 1 ? '45s siden' : 'flere minutter siden'
        }));
        // Prepend and limit stack size to 4 elements
        return [newLead, ...updatedPrevious].slice(0, 4);
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#F2F1ED] relative overflow-hidden border-b border-[#071A3D]/5" id="handverker">
      {/* Dynamic graphic rings in BG representing signals pulsing out */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.015] rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title and stats board */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-start mb-20 text-left">
          <div className="space-y-4">
            <span className="text-[#10B981] font-mono text-xs font-bold tracking-widest uppercase block animate-pulse">
              OPPDRAGSGENERATOR (FOR BEDRIFTER)
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#071A3D] leading-none uppercase">
              Leads flyter inn<br />
              <span className="bg-gradient-to-r from-[#091B4D] via-[#10B981] to-emerald-600 bg-clip-text text-transparent">i sanntid</span>
            </h2>
            <p className="text-[#4F566B] font-light text-base sm:text-lg max-w-lg">
              ERA scanner nabolag, tolker fuktendringer og materiallevetid, og leverer derved ferdig spesifiserte, høykvalitets oppdrag rett til din bedrift – uten unødvendige befaringer.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 bg-white/40 backdrop-blur-md border border-[#071A3D]/5 rounded-2xl p-6 shadow-sm">
            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-black text-[#071A3D] font-mono">142</span>
              <span className="block text-[10px] text-[#5A6376] font-bold uppercase tracking-wider">Oppdrag i dag</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-black text-[#10B981] font-mono">99.4%</span>
              <span className="block text-[10px] text-[#5A6376] font-bold uppercase tracking-wider">Match-nøyaktighet</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl sm:text-3xl font-black text-[#071A3D] font-mono">0 kr</span>
              <span className="block text-[10px] text-[#5A6376] font-bold uppercase tracking-wider">Fast månedspris</span>
            </div>
          </div>
        </div>

        {/* Core Split Widget Screen Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: INTERACTIVE VECTOR MAP OF NORWAY */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#071A3D]/10 p-6 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono font-extrabold text-[#10B981] tracking-widest uppercase block">
                INTERAKTIVT MARKEDSKART: NORGE
              </span>
              <p className="text-xs text-slate-500 font-light">
                Velg et fylke / knutepunkt for å se regionale budsjettvolumer som genereres nå.
              </p>
            </div>

            {/* Map wrapper holding the SVG drawing */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Map drawing inside column */}
              <div className="sm:col-span-6 flex justify-center relative min-h-[340px]">
                {/* SVG silhouette of Southern/Central Norway */}
                <svg viewBox="0 0 100 240" className="w-full max-w-[170px] h-full stroke-slate-200 fill-neutral-50" strokeWidth="1.5">
                  {/* Norway geographic baseline spline */}
                  <path d="M48 20 C42 40, 50 70, 44 90 C38 100, 31 110, 34 130 C37 140, 28 150, 25 170 C22 188, 12 201, 15 212 C18 223, 31 228, 38 228 C48 228, 55 214, 58 200 C61 188, 52 170, 55 158 C58 144, 64 135, 68 120 C72 105, 62 80, 64 60 C66 40, 58 25, 48 20 Z" />
                  
                  {/* Custom boundaries inside map */}
                  <path d="M25 170 C34 175, 45 180, 55 178" stroke="#071A3D" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M34 130 C48 135, 50 145, 68 135" stroke="#071A3D" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M44 90 C50 95, 58 85, 64 80" stroke="#071A3D" strokeWidth="0.5" strokeDasharray="2,2" />

                  {/* Pulsing Regional hotspots markers */}
                  {/* Oslo Hotspot */}
                  <g className="cursor-pointer group/map" onClick={() => setSelectedRegion('oslo')}>
                    <circle cx="34" cy="204" r="5" className={`fill-[#10B981] ${selectedRegion === 'oslo' ? 'stroke-white stroke-2 ring-4 ring-emerald-500/25 r-6' : 'opacity-85'}`} />
                    <circle cx="34" cy="204" r="10" className="stroke-emerald-400 fill-none animate-ping opacity-60 pointer-events-none" />
                  </g>

                  {/* Bergen Hotspot */}
                  <g className="cursor-pointer group/map" onClick={() => setSelectedRegion('bergen')}>
                    <circle cx="17" cy="186" r="5" className={`fill-[#10B981] ${selectedRegion === 'bergen' ? 'stroke-white stroke-2' : 'opacity-85'}`} />
                    <circle cx="17" cy="186" r="10" className="stroke-emerald-400 fill-none animate-ping opacity-60 pointer-events-none" />
                  </g>

                  {/* Stavanger Hotspot */}
                  <g className="cursor-pointer group/map" onClick={() => setSelectedRegion('stavanger')}>
                    <circle cx="19" cy="216" r="5" className={`fill-[#10B981] ${selectedRegion === 'stavanger' ? 'stroke-white stroke-2' : 'opacity-85'}`} />
                    <circle cx="19" cy="216" r="10" className="stroke-emerald-400 fill-none animate-ping opacity-60 pointer-events-none" />
                  </g>

                  {/* Trondheim Hotspot */}
                  <g className="cursor-pointer group/map" onClick={() => setSelectedRegion('trondheim')}>
                    <circle cx="38" cy="120" r="5" className={`fill-[#10B981] ${selectedRegion === 'trondheim' ? 'stroke-white stroke-2' : 'opacity-85'}`} />
                    <circle cx="38" cy="120" r="10" className="stroke-emerald-400 fill-none animate-ping opacity-60 pointer-events-none" />
                  </g>

                  {/* Tromso Hotspot */}
                  <g className="cursor-pointer group/map" onClick={() => setSelectedRegion('tromso')}>
                    <circle cx="50" cy="40" r="5" className={`fill-[#10B981] ${selectedRegion === 'tromso' ? 'stroke-white stroke-2' : 'opacity-85'}`} />
                    <circle cx="50" cy="40" r="10" className="stroke-emerald-400 fill-none animate-ping opacity-60 pointer-events-none" />
                  </g>
                </svg>
              </div>

              {/* Regional selection data details */}
              <div className="sm:col-span-6 space-y-4 text-left border-l border-[#071A3D]/10 sm:pl-6">
                <div>
                  <span className="text-[10px] font-mono text-[#5A6376] font-bold uppercase block">VALGT OMRÅDE</span>
                  <h3 className="text-xl font-extrabold text-[#071A3D] tracking-tight">{regionalData[selectedRegion].name}</h3>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex justify-between border-b pb-1.5 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-slate-400" /> Aktive boliger</span>
                    <strong className="text-[#071A3D] font-mono">{regionalData[selectedRegion].activeHomes}st</strong>
                  </div>
                  <div className="flex justify-between border-b pb-1.5 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-slate-400" /> Volum generert</span>
                    <strong className="text-emerald-700 font-mono font-bold">{regionalData[selectedRegion].volume}</strong>
                  </div>
                  <div className="flex justify-between border-b pb-1.5 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-slate-400" /> Gsn. oppdrag</span>
                    <strong className="text-[#071A3D] font-mono">{regionalData[selectedRegion].averagePrice}</strong>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-slate-400" /> Partnere med kvote</span>
                    <strong className="text-[#071A3D] font-mono">{regionalData[selectedRegion].partners} partnere</strong>
                  </div>
                </div>

                {/* Micro-interactive recommendation based on choice */}
                <div className="p-3 bg-neutral-50 rounded-xl border border-dashed border-neutral-200">
                  <p className="text-[11px] text-[#4F566B] font-light leading-relaxed">
                    💡 <strong className="font-semibold text-[#071A3D]">Tips:</strong> Forhåndsregistrering i {regionalData[selectedRegion].name} er åpen. {regionalData[selectedRegion].partners < 30 ? 'Eksklusive oppdragskvoter er ledig.' : 'Høy etterspørsel.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: LEADS FLOWING IN REAL TIME STREAM DISPLAY */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-extrabold text-[#10B981] tracking-widest uppercase flex items-center gap-1.5">
                  <Bell className="w-4 h-4 text-amber-500 animate-bounce" /> OPPDAGELSER_STRØM (SANNTID)
                </span>
                <span className="text-[9px] font-mono font-bold text-[#10B981] tracking-wider animate-pulse bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                  ● LIVE FEED
                </span>
              </div>

              {/* Stack holder for active tickets */}
              <div className="space-y-3.5 min-h-[360px] relative">
                <AnimatePresence initial={false}>
                  {liveLeads.map((lead) => (
                    <motion.div
                      key={lead.id}
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92, y: 15 }}
                      transition={{ duration: 0.45 }}
                      className="p-4 bg-white rounded-2xl border border-[#071A3D]/10 hover:border-[#10B981]/30 shadow-xs flex items-center justify-between gap-4 relative overflow-hidden group hover:shadow-md"
                    >
                      {/* Hover highlight bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="space-y-1.5 text-left max-w-[70%]">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-emerald-700 font-extrabold flex items-center gap-1">
                            <MapPin className="w-3 h-3 shrink-0" /> {lead.location}
                          </span>
                          <span className="text-[8px] font-mono font-bold text-slate-400">{lead.postalCode}</span>
                        </div>
                        
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-extrabold text-[#071A3D] group-hover:text-emerald-700 transition-colors leading-snug">
                            {lead.type}
                          </h4>
                          <p className="text-xs text-slate-500 font-light truncate">
                            {lead.material}
                          </p>
                        </div>
                      </div>

                      {/* Financial value estimation / status check */}
                      <div className="text-right space-y-1.5 shrink-0 flex flex-col items-end">
                        <span className="text-[10px] font-mono font-bold text-slate-400">{lead.timeAgo}</span>
                        <span className="text-sm font-mono font-black text-[#071A3D] block">{lead.value}</span>
                        <span className="text-[8px] tracking-wider font-mono font-bold uppercase py-0.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-150 rounded-full">
                          {lead.badge}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            {/* Bottom Contractor Partner sign up action cards */}
            <div className="pt-6 border-t border-[#071A3D]/10 text-left space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#071A3D] font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Eksklusiv gjenkjøpsgaranti – låses til din bedrift automatisk etter registrering</span>
              </div>
              
              <button
                onClick={onOpenWaitlist}
                className="w-full py-4 bg-[#10B981] hover:bg-emerald-600 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 text-center uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2 outline-none group"
              >
                <span>Søk om forhåndsregistrering i dag</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
