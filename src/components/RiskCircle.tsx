import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, MapPin, TrendingUp } from 'lucide-react';
import { WILAYAS } from '../data';

interface RiskCircleProps {
  onFilter: (zone: string) => void;
  filteredWilayas: any[];
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={-20} textAnchor="middle" fill="#fff" className="text-xl font-bold font-mono">
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={10} textAnchor="middle" fill="#94a3b8" className="text-sm font-sans">
        {`${(percent * 100).toFixed(1)}% Exposure`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 12}
        outerRadius={outerRadius + 15}
        fill={fill}
      />
    </g>
  );
};

export const RiskCircle = ({ onFilter, filteredWilayas }: RiskCircleProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const dynamicData = useMemo(() => {
    const z3 = WILAYAS.filter(w => w.zone === 'III').reduce((sum, w) => sum + (w.expectedLoss || 0), 0);
    const z2 = WILAYAS.filter(w => w.zone === 'IIa' || w.zone === 'IIb').reduce((sum, w) => sum + (w.expectedLoss || 0), 0);
    const z1 = WILAYAS.filter(w => w.zone === 'I' || w.zone === '0').reduce((sum, w) => sum + (w.expectedLoss || 0), 0);

    return [
      { name: 'Zone III (Critical)', value: z3, color: '#ef4444', code: 'III' },
      { name: 'Zone II (Active)', value: z2, color: '#f97316', code: 'II' },
      { name: 'Zone I/0 (Foundation)', value: z1 * 1.2, color: '#22c55e', code: 'I', realValue: z1 },
    ];
  }, []);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
    onFilter(dynamicData[index].code);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass p-8 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Shield size={120} className="text-gam-accent" />
        </div>
        <h3 className="text-lg font-sans font-medium text-white mb-2 flex items-center gap-2">
          RPA Interaction Circle
        </h3>
        <p className="text-sm text-slate-400 mb-8 font-sans italic opacity-70">Portfolio optimization & geographic diversification analysis</p>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={dynamicData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                onMouseEnter={onPieEnter}
                style={{ cursor: 'pointer' }}
              >
                {dynamicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass p-8 rounded-3xl"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-sans font-medium text-white mb-2 flex items-center gap-2">
              <MapPin size={20} className="text-gam-accent" />
              Strategic Wilaya Matrix
            </h3>
            <p className="text-sm text-slate-400 font-sans">Profit & Loss index for selected risk geography</p>
          </div>
          <div className="bg-gam-accent/10 p-2 rounded-lg border border-gam-accent/20">
             <TrendingUp size={16} className="text-gam-accent" />
          </div>
        </div>
        
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          <AnimatePresence mode="popLayout">
            {filteredWilayas.map((w) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative h-[100px] bg-slate-900 border border-white/5 rounded-2xl p-4 hover:border-gam-accent/40 transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 items-center">
                    <span className="text-xs font-mono font-bold text-gam-accent bg-gam-accent/10 px-2 py-1 rounded border border-gam-accent/20">
                      {w.id}
                    </span>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-gam-accent transition-colors tracking-tight">{w.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-[9px] uppercase font-bold tracking-tighter px-1.5 py-0.5 rounded ${
                          w.difference > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {w.difference > 0 ? 'DEFICIT' : 'PROFITABLE'}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">ZONE {w.zone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Technical Gap</span>
                    <span className={`text-sm font-mono font-bold ${w.difference > 0 ? 'text-red-400' : 'text-green-400'}`}>
                      DA {(Math.abs(w.difference) / 1000000).toFixed(2)}M
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">P&L Status</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pt-2 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-[10px] flex gap-4">
                      <span className="text-slate-500">TIV: <span className="text-white">{(w.tiv / 1000000).toFixed(0)}M</span></span>
                      <span className="text-slate-500">PREMIUM: <span className="text-white">{(w.primeNette / 1000000).toFixed(2)}M</span></span>
                   </div>
                   <div className="text-[10px] text-gam-accent font-bold uppercase tracking-widest flex items-center gap-1 cursor-pointer hover:underline">
                      DRILL DOWN <TrendingUp size={10} />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
