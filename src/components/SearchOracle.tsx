import { Search, Calculator, AlertTriangle, Building2, History, Activity } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WILAYAS, WilayaData } from '../data';

const BASE_PRICE = 1000;

const ZONE_MULTIPLIER: Record<string, number> = {
  'III': 2.5,
  'IIb': 2.0,
  'IIa': 1.6,
  'I': 1.2,
  '0': 1.0
};

export const SearchOracle = () => {
  const [query, setQuery] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState<WilayaData | null>(null);
  const [constructionType, setConstructionType] = useState<'MASONRY' | 'RC' | 'MIXED'>('RC');
  const [year, setYear] = useState<number>(2010);

  const filteredResults = useMemo(() => {
    if (!query) return [];
    return WILAYAS.filter(w => 
      w.name.toLowerCase().includes(query.toLowerCase()) || 
      w.id.includes(query)
    ).slice(0, 5);
  }, [query]);

  const quoteData = useMemo(() => {
    if (!selectedWilaya) return null;

    let ageFactor = 1.0;
    let damageRatio = 0.20;

    if (year < 1983) {
      ageFactor = 2.0;
      damageRatio = 0.90;
    } else if (year < 2003) {
      ageFactor = 1.5;
      damageRatio = 0.50;
    }

    const premium = BASE_PRICE * ZONE_MULTIPLIER[selectedWilaya.zone] * ageFactor;
    const capacityThreshold = 50000000; // €50M default capacity
    const exposureInLoc = 12000000; // Simulated current exposure in that loc

    return {
      premium,
      damageRatio,
      capacityRatio: (exposureInLoc / capacityThreshold) * 100,
      isCapacityWarning: (exposureInLoc / capacityThreshold) > 0.8
    };
  }, [selectedWilaya, year]);

  return (
    <div className="mb-12">
      <div className="max-w-3xl mx-auto relative z-20">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-gam-accent h-5 w-5" />
          </div>
          <input
            type="text"
            className="w-full bg-slate-900/80 border-2 border-slate-800 focus:border-gam-accent text-white rounded-2xl py-4 pl-12 pr-4 font-sans transition-all outline-none placeholder:text-slate-600 shadow-2xl backdrop-blur-xl"
            placeholder="Query P&L by Wilaya or Commune..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          
          <AnimatePresence>
            {query && filteredResults.length > 0 && !selectedWilaya && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute w-full mt-2 bg-slate-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl z-50"
              >
                {filteredResults.map((w) => (
                    <button
                      key={w.id}
                      onClick={() => {
                          setSelectedWilaya(w);
                          setQuery(w.name);
                      }}
                      className="w-full text-left px-6 py-4 hover:bg-gam-accent/10 flex justify-between items-center group transition-colors"
                    >
                      <div>
                        <span className="text-slate-500 font-mono mr-4 italic text-xs">{w.id}</span>
                        <span className="text-white font-medium group-hover:text-gam-accent transition-colors">{w.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${
                           w.difference > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                           {w.difference > 0 ? 'DEFICIT' : 'PROFITABLE'}
                        </span>
                        <span className={`text-[10px] px-2 py-1 rounded bg-black/40 font-mono ${
                          w.zone === 'III' ? 'text-red-400' : 'text-gam-silver'
                        }`}>
                          ZONE {w.zone}
                        </span>
                      </div>
                    </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedWilaya && quoteData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {/* Portfolio Metrics Card */}
            <div className="glass p-6 rounded-3xl border-l-4 border-l-gam-accent">
              <h4 className="text-xs font-mono text-gam-accent uppercase tracking-tighter mb-4">Location Portfolio Data</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Capital Assuré (TIV)</span>
                  <span className="text-white font-mono text-xs">DA {(selectedWilaya.tiv / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Net Premium Income</span>
                  <span className="text-white font-mono text-xs">DA {(selectedWilaya.primeNette / 1000000).toFixed(2)}M</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  <span className="text-slate-400 text-sm">RPA Zone / PGA</span>
                  <span className="text-white font-bold px-2 py-0.5 bg-white/5 rounded text-xs">
                    Zone {selectedWilaya.zone} • {selectedWilaya.pga}g
                  </span>
                </div>
                <div className="pt-2">
                   <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-500">Structural Vulnerability</span>
                      <span className="text-xs text-slate-300 font-mono">{(quoteData.damageRatio * 100).toFixed(0)}%</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gam-accent transition-all duration-1000" 
                        style={{ width: `${quoteData.damageRatio * 100}%` }}
                      ></div>
                   </div>
                </div>
              </div>
            </div>

            {/* Financial Health Card */}
            <div className={`glass p-6 rounded-3xl border ${selectedWilaya.difference > 0 ? 'border-red-500/20' : 'border-green-500/20'}`}>
              <h4 className="text-xs font-mono text-gam-silver uppercase tracking-tighter mb-4 flex items-center justify-between">
                Financial Health Index
                <button 
                   onClick={() => setSelectedWilaya(null)} 
                   className="text-[10px] text-slate-500 hover:text-white underline"
                >Reset</button>
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                   <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-tight">Net Profit/Loss</p>
                      <p className={`text-xl font-mono ${selectedWilaya.difference > 0 ? 'text-red-400' : 'text-green-400'}`}>
                        DA {(Math.abs(selectedWilaya.difference) / 1000000).toFixed(2)}M
                      </p>
                   </div>
                   <div className={`text-[10px] px-2 py-1 rounded font-bold ${
                      selectedWilaya.difference > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                   }`}>
                      {selectedWilaya.difference > 0 ? 'NET LOSS' : 'NET PROFIT'}
                   </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                   <label className="text-[10px] text-slate-500 block mb-2 uppercase tracking-tight">Building Age Proxy (Year Built)</label>
                   <input 
                      type="range" 
                      min="1950" 
                      max="2024" 
                      value={year}
                      onChange={(e) => setYear(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gam-silver" 
                   />
                   <div className="flex justify-between mt-2 font-mono text-[10px] text-gam-silver">
                      <span>1950</span>
                      <span className="text-xs font-bold text-white bg-white/5 px-2 rounded">{year}</span>
                      <span>2024</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Status & Strategy Oracle */}
            <div className={`p-6 rounded-3xl flex flex-col justify-between border ${
               selectedWilaya.status === 'Hotspot' ? 'glass-silver border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.1)]' : 'glass border-white/5'
            }`}>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Activity size={20} className={selectedWilaya.difference > 0 ? 'text-red-500' : 'text-gam-green'} />
                  <div className={`flex items-center gap-2 px-2 py-1 rounded-full text-[10px] font-mono tracking-widest ${
                      selectedWilaya.difference > 0 ? 'bg-red-900/40 text-red-100 shadow-lg' : 'bg-green-900/40 text-green-100'
                  }`}>
                    {selectedWilaya.difference > 0 ? <><AlertTriangle size={10} /> TECHNICAL DEFICIT</> : 'PORTFOLIO STABLE'}
                  </div>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Portfolio Strategy</p>
                <div className="text-2xl font-sans font-bold text-white mb-6">
                  {selectedWilaya.difference > 0 ? 'Tariff Adjustment Required' : 'Asset Acquisition Preferred'}
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/5">
                 <div className="flex items-center gap-3">
                    <Building2 size={16} className="text-gam-silver" />
                    <span className="text-xs text-slate-400">Aggregated Weight: <span className="text-white font-mono">{(selectedWilaya.tiv / 299405314952 * 100).toFixed(2)}%</span></span>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
