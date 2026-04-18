import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  AreaChart, Area
} from 'recharts';
import { motion } from 'motion/react';
import { WILAYAS, TREND_DATA } from '../data';
import { BarChart3, LineChart as LucideLineChart } from 'lucide-react';
import { useMemo } from 'react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/90 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-xs text-slate-400 font-mono uppercase mb-2 tracking-widest">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex justify-between gap-8 items-center mb-1">
            <span className="text-sm font-sans" style={{ color: entry.color }}>{entry.name}:</span>
            <span className="text-sm font-mono font-bold text-white">
              {entry.name.includes('Prob') ? `${(entry.value * 100).toFixed(2)}%` : `DA ${(entry.value / 1000000).toFixed(1)}M`}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const AnalyticsSuite = () => {
  const zoneComparisonData = useMemo(() => {
    const zones = [
       { key: 'High (Zone III)', filter: (w: any) => w.zone === 'III' },
       { key: 'Moderate (Zone II)', filter: (w: any) => w.zone === 'IIa' || w.zone === 'IIb' },
       { key: 'Low (Zone I/0)', filter: (w: any) => w.zone === 'I' || w.zone === '0' },
    ];

    return zones.map(z => {
       const group = WILAYAS.filter(z.filter);
       return {
         category: z.key,
         expectedLoss: group.reduce((sum, w) => sum + (w.expectedLoss || 0), 0),
         primeNette: group.reduce((sum, w) => sum + (w.primeNette || 0), 0),
       };
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-lg font-sans font-medium text-white mb-1 flex items-center gap-2">
              <BarChart3 size={20} className="text-gam-accent" />
              Technical Gap Analysis
            </h3>
            <p className="text-sm text-slate-400 font-sans italic opacity-70">Loss projections vs. Net Premium Pool (DA Millions)</p>
          </div>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={zoneComparisonData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" strokeOpacity={0.2} />
              <XAxis 
                dataKey="category" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'Inter' }}
                dy={10} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'JetBrains Mono' }}
                tickFormatter={(val) => `${(val / 1000000).toFixed(0)}M`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
              <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="circle"
                wrapperStyle={{ paddingBottom: '30px', fontSize: '10px', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '2px' }}
              />
              <Bar name="Expected Loss" dataKey="expectedLoss" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={32} />
              <Bar name="Net Premium" dataKey="primeNette" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-lg font-sans font-medium text-white mb-1 flex items-center gap-2">
              <LucideLineChart size={20} className="text-gam-accent" />
              Strategic Risk Probability
            </h3>
            <p className="text-sm text-slate-400 font-sans italic opacity-70">Aggregate ruin probability vs. Seismic Moment (Mw)</p>
          </div>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={TREND_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorProb" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#cbd5e1" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#cbd5e1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" strokeOpacity={0.2} />
              <XAxis 
                dataKey="magnitude" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'Inter' }}
                dy={10} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'JetBrains Mono' }}
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                name="Ruin Probability"
                dataKey="ruinProb" 
                stroke="#cbd5e1" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorProb)" 
                animationDuration={2500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};
