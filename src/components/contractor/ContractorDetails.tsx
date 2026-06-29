import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Users, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Clock, 
  Activity, 
  TrendingUp, 
  ChevronRight,
  Truck,
  FileCheck
} from 'lucide-react';

interface ContractorDetailsProps {
  onOpenWaitlist?: () => void;
}

export default function ContractorDetails({ onOpenWaitlist }: ContractorDetailsProps) {
  // Interactive demo states for Contractors
  const [tasksChecked, setTasksChecked] = useState<{ [key: string]: boolean }>({
    match: false,
    samlokalisering: false,
    fdv: false,
  });
  const [capacityScore, setCapacityScore] = useState(72);
  const [routePooled, setRoutePooled] = useState(false);
  const [jobsBundled, setJobsBundled] = useState(1);
  const [activePartnerTab, setActivePartnerTab] = useState<'grunnlag' | 'fdv' | 'betaling'>('grunnlag');

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F7] border-t border-b border-[#071A3D]/10 relative overflow-hidden">
      {/* Shimmering backgrounds to frame contrast */}
      <div className="absolute top-0 bottom-0 left-0 right-1/2 bg-black/[0.005] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <span className="text-era-brass font-mono text-xs font-bold tracking-widest uppercase block mb-4">
          PARTNERNETTVERKETS NYE STANDARD
        </span>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#071A3D] uppercase leading-[1.05] max-w-5xl mx-auto mb-6">
          De fleste anbudsportaler skaper priskrig.<br />
          <span className="bg-gradient-to-r from-[#091B4D] via-[#2F4E8D] to-[#B4C5E4] bg-clip-text text-transparent">
            ERA matcher deg med ferdig spesifiserte jobber.
          </span>
        </h2>

        <p className="text-sm md:text-base text-[#4F566B] font-light max-w-xl mx-auto mb-16">
          Klikk og test selv for å se forskjellen på det manuelle anbudskaoset og den nye, forutsigbare hverdagen som ERA-godkjent partner:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Passive / Historikk Box (Left Side: 5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-red-200/40 bg-white/70 backdrop-blur-sm shadow-sm flex flex-col justify-between space-y-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.02] rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] font-mono text-red-600 font-bold tracking-wider uppercase inline-block">
                  SLIK DET VAR FØR
                </span>
                <span className="text-xs text-red-500/70 font-mono">Gratisarbeid & priskrig</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#071A3D] tracking-tight uppercase">Den passive anbudsportalen</h3>
                <p className="text-[#4F566B] text-sm font-light leading-relaxed">
                  Du betaler dyre abonnementsgebyrer for å kjempe mot ti andre useriøse aktører i en ren priskrig. Du bruker kvelder og helger på ubetalte befaringer for kunder som bare vil sammenligne priser.
                </p>
              </div>
              
              {/* Simulated chaotic list */}
              <div className="space-y-3 pt-4 border-t border-[#071A3D]/5">
                <div className="p-3.5 bg-red-50/40 border border-red-100/50 rounded-xl flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold shrink-0 mt-0.5">!</div>
                  <div>
                    <h4 className="text-xs font-bold text-red-800 uppercase">4 ubetalte befaringer</h4>
                    <p className="text-[11px] text-[#5A6376] mt-0.5">Du kjørte rundt hele distriktet for å måle opp takvask og kledning. Ingen av kundene bestilte til slutt.</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded bg-red-100 text-red-700 text-[9px] font-mono font-bold">TAPT ARBEIDSTID & DRIVSTOFF</span>
                  </div>
                </div>

                <div className="p-3.5 bg-neutral-50 border border-neutral-100 rounded-xl flex items-start gap-3 opacity-80">
                  <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 text-xs shrink-0 mt-0.5">?</div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-700">Evig purring på FDV</h4>
                    <p className="text-[11px] text-[#5A6376] mt-0.5">Kunden ringer tre måneder etterpå og krever samsvarserklæring og malingskoder. Du må lete gjennom gamle lærling-sms-er.</p>
                  </div>
                </div>

                <div className="p-3.5 bg-neutral-50 border border-neutral-100 rounded-xl flex items-start gap-3 opacity-80">
                  <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 text-xs shrink-0 mt-0.5">⌚</div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-700">Dårlig ruteplanlegging</h4>
                    <p className="text-[11px] text-[#5A6376] mt-0.5">Ett oppdrag på Nordstrand kl. 09:00 og neste på Bekkelaget kl. 13:00. Halve dagen går bort på å rigge opp utstyret to ganger.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#071A3D]/5 flex items-center justify-between text-xs text-[#5A6376]">
              <span className="italic">"Slipp å betale for unødvendige anbudsklikk."</span>
              <span className="font-mono text-[10px] bg-neutral-100 px-2 py-1 rounded">Administrativt rot</span>
            </div>
          </div>

          {/* Active / Agent Box (Right Side: 7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border-2 border-[#5B7FD8]/30 bg-[#091B4D] text-white shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            {/* Animated top indicator glow */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#5B7FD8] via-emerald-400 to-[#5B7FD8]" />
            <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-[#5B7FD8]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="space-y-6">
              
              {/* Demo Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="px-3 py-0.5 rounded-full bg-[#5B7FD8]/20 border border-[#5B7FD8]/30 text-[10px] font-mono text-[#7B94C7] font-bold tracking-wider uppercase inline-block">
                    MED ERA PARTNER-DASHBOARD
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white uppercase">Kvalifiserte Oppdrag</h3>
                </div>
                
                {/* Partner Efficiency Score Meter */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 shrink-0">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-emerald-400 transition-all duration-500" strokeDasharray={`${capacityScore}, 100`} strokeWidth="3.2" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="text-xs font-mono font-black text-emerald-300">{capacityScore}%</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 block font-mono uppercase tracking-wider">BELEGGSGRAD / EFFEKTIVITET</span>
                    <span className="text-xs font-bold text-white">
                      {capacityScore < 80 ? "Søker fyllingsgrad" : capacityScore < 90 ? "Optimal rute" : "Fullbooket og effektiv!"}
                    </span>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE DEMO COMPONENT 1: QUALIFIED JOB MATCH */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#7B94C7] uppercase tracking-wider block">
                  1. DIREKTE-MATCHER UTEN BEFARINGSSTRESS (PRØV SELV)
                </span>
                
                {/* Task item 1 */}
                <div className={`p-3 rounded-xl border transition-all duration-300 ${tasksChecked.match ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => {
                          const current = tasksChecked.match;
                          setTasksChecked(prev => ({ ...prev, match: !current }));
                          setCapacityScore(prev => current ? prev - 10 : prev + 10);
                        }}
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${tasksChecked.match ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-white/20 bg-white/5 hover:border-white/40'}`}
                      >
                        {tasksChecked.match && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                      <div>
                        <h4 className={`text-xs font-bold ${tasksChecked.match ? 'text-emerald-300 line-through' : 'text-white'}`}>Ferdig kartlagt takrennebytte (Bekkelaget)</h4>
                        <p className="text-[10px] text-white/60 mt-0.5">Nøyaktige kvadratmeter og fukt-analyse lagt ved. Fastpristilbud klar for godkjenning.</p>
                      </div>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${tasksChecked.match ? 'bg-emerald-500/20 text-emerald-300' : 'bg-[#5B7FD8]/20 text-[#7B94C7]'}`}>
                      {tasksChecked.match ? "+10% BELEGG" : "MATCHER DIN KOMPETANSE"}
                    </span>
                  </div>
                </div>

                {/* Task item 2 */}
                <div className={`p-3 rounded-xl border transition-all duration-300 ${tasksChecked.fdv ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => {
                          const current = tasksChecked.fdv;
                          setTasksChecked(prev => ({ ...prev, fdv: !current }));
                          setCapacityScore(prev => current ? prev - 8 : prev + 8);
                        }}
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${tasksChecked.fdv ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-white/20 bg-white/5 hover:border-white/40'}`}
                      >
                        {tasksChecked.fdv && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                      <div>
                        <h4 className={`text-xs font-bold ${tasksChecked.fdv ? 'text-emerald-300 line-through' : 'text-white'}`}>Autogenerert FDV: Malingskode & rørdimensjon</h4>
                        <p className="text-[10px] text-white/60 mt-0.5">Slipp manuelt papirarbeid. Materialdata sendes rett til boligens digitale minne.</p>
                      </div>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${tasksChecked.fdv ? 'bg-emerald-500/20 text-emerald-300' : 'bg-[#5B7FD8]/20 text-[#7B94C7]'}`}>
                      {tasksChecked.fdv ? "LAGRET" : "KLAR TIL OVERFØRING"}
                    </span>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE DEMO COMPONENT 2: GEOGRAPHIC ROUTE POOLING */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono font-bold text-[#7B94C7] uppercase tracking-wider block">
                  2. GEOGRAFISK SAMLOKALISERING & RUTE-POOLING
                </span>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-xs font-bold text-white uppercase">Malerrunde i Meierisvingen (Bekkelaget)</h4>
                    </div>
                    <p className="text-[10px] text-white/60">
                      {jobsBundled} hus i samme gate har samordnet felles bestilling gjennom ERA. Ingen ekstra kjøring, ingen rigging på nytt.
                    </p>
                    
                    {/* Interactive indicator of transport savings */}
                    <div className="pt-1 flex items-center gap-2">
                      <span className="text-[11px] font-bold text-emerald-400 font-mono">DIN MARGINSØK: {routePooled ? "+25% HØYERE TIMEPRIS" : "Standard margin"}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="text-[10px] text-white/40">{jobsBundled} samlokaliserte hus</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      if (routePooled) {
                        setRoutePooled(false);
                        setJobsBundled(1);
                        setCapacityScore(prev => prev - 12);
                      } else {
                        setRoutePooled(true);
                        setJobsBundled(4);
                        setCapacityScore(prev => prev + 12);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${routePooled ? 'bg-emerald-500 hover:bg-emerald-600 text-white' : 'bg-[#5B7FD8] hover:bg-[#5B7FD8]/80 text-white'}`}
                  >
                    {routePooled ? "✓ Rute optimalisert" : "Pool 4 jobber i gaten"}
                  </button>
                </div>
              </div>

              {/* INTERACTIVE DEMO COMPONENT 3: JOB SPECS / COMPLIANCE VAULT */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-mono font-bold text-[#7B94C7] uppercase tracking-wider block">
                  3. INTELLIGENT UNDERLAG & SAMSVAR
                </span>
                
                <div className="border border-white/10 rounded-xl overflow-hidden bg-black/20">
                  {/* Vault Tabs */}
                  <div className="flex border-b border-white/10 bg-white/5 text-xs">
                    <button 
                      onClick={() => setActivePartnerTab('grunnlag')}
                      className={`flex-1 py-2 text-center font-bold tracking-tight border-r border-white/10 transition-colors ${activePartnerTab === 'grunnlag' ? 'bg-[#091B4D] text-[#7B94C7] border-t-2 border-[#5B7FD8]' : 'text-white/60 hover:text-white'}`}
                    >
                      Befarings-Underlag
                    </button>
                    <button 
                      onClick={() => setActivePartnerTab('fdv')}
                      className={`flex-1 py-2 text-center font-bold tracking-tight border-r border-white/10 transition-colors ${activePartnerTab === 'fdv' ? 'bg-[#091B4D] text-[#7B94C7] border-t-2 border-[#5B7FD8]' : 'text-white/60 hover:text-white'}`}
                    >
                      Automatisert FDV
                    </button>
                    <button 
                      onClick={() => setActivePartnerTab('betaling')}
                      className={`flex-1 py-2 text-center font-bold tracking-tight transition-colors ${activePartnerTab === 'betaling' ? 'bg-[#091B4D] text-[#7B94C7] border-t-2 border-[#5B7FD8]' : 'text-white/60 hover:text-white'}`}
                    >
                      Betalingssikring
                    </button>
                  </div>

                  {/* Vault Content Display */}
                  <div className="p-4 min-h-[90px] flex items-center justify-between gap-4">
                    {activePartnerTab === 'grunnlag' && (
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between text-xs font-bold text-white">
                          <span>Meierisvingen 14 — Tak og fasade-data</span>
                          <span className="text-[10px] text-[#7B94C7] font-mono">INTELLIGENT KARTLAGT</span>
                        </div>
                        <p className="text-[11px] text-white/50">Du mottar ferdige bilder, presise kvadratmål, eksisterende malingstype (Jotun Klassisk Hvit) og nøyaktige fuktmålinger før du drar ut. Ingen bortkastede bomturer.</p>
                      </div>
                    )}
                    {activePartnerTab === 'fdv' && (
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between text-xs font-bold text-white">
                          <span>Samsvarserklæring Elektro</span>
                          <span className="text-[10px] text-emerald-400 font-mono">AUTO_GENERERT_OK</span>
                        </div>
                        <p className="text-[11px] text-white/50">Når du ferdigstiller jobben i appen, sendes kvitteringen, samsvarserklæringen og materialdataene direkte til kundens boligminne på sekunder.</p>
                      </div>
                    )}
                    {activePartnerTab === 'betaling' && (
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between text-xs font-bold text-white">
                          <span>Garantert sluttoppgjør via ERA</span>
                          <span className="text-[10px] text-emerald-400 font-mono">OPPGJØRSKONTO_AKTIV</span>
                        </div>
                        <p className="text-[11px] text-white/50">Ingen ubehagelige purringer eller tapte utestående fordringer. Kunden betaler inn til oppgjørskontoen, og pengene utbetales umiddelbart etter godkjent overlevering.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <span className="italic">"Slutt med unødvendige befaringer på kveldstid. Fokuser på ekte håndverk."</span>
              <span className="font-mono text-[10px] bg-white/10 px-2 py-1 rounded text-[#7B94C7] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Partner Portal active
              </span>
            </div>
          </div>

        </div>

        {/* Short inline callout button to match Section 2 */}
        <div className="mt-12 text-center">
          <button 
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-2 bg-[#071A3D] text-white px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-[#091B4D] transition-all"
          >
            <span>Bli en godkjent ERA-partner</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
