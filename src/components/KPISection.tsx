import { TrendingUp, ShieldAlert, DollarSign, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  trend?: string;
}

const KPICard = ({ title, value, subtitle, icon, trend }: KPICardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass p-6 rounded-2xl flex flex-col justify-between"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-gam-accent/10 rounded-xl text-gam-accent shadow-inner">
        {icon}
      </div>
      {trend && (
        <span className="text-[10px] font-mono font-bold text-gam-silver border border-white/10 bg-white/5 px-2 py-1 rounded uppercase tracking-widest">
          {trend}
        </span>
      )}
    </div>
    <div>
      <h3 className="text-[10px] font-mono font-bold text-gam-silver uppercase tracking-[0.2em] mb-2">{title}</h3>
      <div className="text-3xl font-mono font-bold text-white mb-2 tabular-nums tracking-tighter">{value}</div>
      <div className="h-1 w-8 bg-gam-accent/30 rounded-full mb-2"></div>
      <p className="text-[10px] text-slate-500 font-sans">{subtitle}</p>
    </div>
  </motion.div>
);

export const KPISection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <KPICard 
        title="Max Expected Loss" 
        value="338.5M" 
        subtitle="DA - Total portfolio risk projection"
        icon={<TrendingUp size={24} />}
        trend="CRITICAL"
      />
      <KPICard 
        title="Technical Gap" 
        value="182.1M" 
        subtitle="DA - Expected loss exceeding premiums"
        icon={<ShieldAlert size={24} />}
        trend="WARNING"
      />
      <KPICard 
        title="Total Sum Insured" 
        value="299.4B" 
        subtitle="DA - Total Algerian portfolio exposure"
        icon={<DollarSign size={24} />}
      />
    </div>
  );
};
