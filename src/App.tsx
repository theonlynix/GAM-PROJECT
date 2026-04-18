import { ReactNode, useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  BarChart4, 
  ShieldCheck, 
  Menu, 
  Maximize2, 
  Bell, 
  Settings,
  CircleDot,
  Activity
} from 'lucide-react';
import { KPISection } from './components/KPISection';
import { RiskCircle } from './components/RiskCircle';
import { AnalyticsSuite } from './components/AnalyticsCharts';
import { SearchOracle } from './components/SearchOracle';
import { RiskGallery } from './components/RiskGallery';
import { WILAYAS } from './data';

export default function App() {
  const [activeZone, setActiveZone] = useState('III');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const filteredWilayas = WILAYAS.filter(w => {
    if (activeZone === 'III') return w.zone === 'III';
    if (activeZone === 'II') return w.zone === 'IIa' || w.zone === 'IIb';
    if (activeZone === 'I') return w.zone === 'I' || w.zone === '0';
    return false;
  });

  return (
    <div className="flex h-screen bg-gam-bg text-slate-200 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`bg-slate-950 border-r border-white/5 transition-all duration-500 overflow-hidden flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-6 flex items-center gap-4 h-20 bg-slate-900/30">
          <div className="min-w-[32px] h-8 bg-gam-accent rounded-lg flex items-center justify-center">
            <ShieldCheck className="text-slate-900" size={18} />
          </div>
          {isSidebarOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
              <span className="font-mono text-xl font-bold tracking-tighter text-white">GAM</span>
              <span className="text-[8px] uppercase tracking-widest text-gam-silver">Strategic Hub</span>
            </motion.div>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active isOpen={isSidebarOpen} />
          <NavItem icon={<MapIcon size={20} />} label="Risk Mapping" isOpen={isSidebarOpen} />
          <NavItem icon={<BarChart4 size={20} />} label="Analytics" isOpen={isSidebarOpen} />
          <NavItem icon={<Maximize2 size={20} />} label="Portfolio" isOpen={isSidebarOpen} />
          <NavItem icon={<CircleDot size={20} />} label="RPA Rules" isOpen={isSidebarOpen} />
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2">
          <NavItem icon={<Settings size={20} />} label="Settings" isOpen={isSidebarOpen} />
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-zenith-accent/20 border border-zenith-accent/30 flex items-center justify-center text-zenith-accent font-bold text-xs">
              JD
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Jean Dupont</span>
                <span className="text-[10px] text-slate-500">Risk Manager</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-zenith-blue rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-zenith-accent rounded-full blur-[150px] opacity-20"></div>
        </div>

        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-slate-950/40 backdrop-blur-xl z-10">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-white/5 rounded-lg text-slate-400"
            >
              <Menu size={20} />
            </button>
            <div className="hidden md:flex flex-col leading-tight">
              <h1 className="text-xl font-bold text-white tracking-tight italic font-serif">GAM Strategic Exposure Hub</h1>
              <p className="text-[10px] text-gam-silver uppercase tracking-widest font-mono">Algerian Insurance Division • RPA 99/2003 Compliant</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-gam-green/20 px-3 py-1.5 rounded-full border border-gam-green/30">
              <div className="w-1.5 h-1.5 rounded-full bg-gam-green animate-pulse"></div>
              <span className="text-[10px] font-mono text-gam-green uppercase tracking-wider font-bold">LIVE FEED: ACTIVE</span>
            </div>
            <button className="p-2 text-slate-400 hover:text-white relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-slate-950"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-8 relative z-0 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            {/* Oracle Search Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-serif font-light text-white mb-6 tracking-tight">
                Evaluate Strategic <span className="italic text-gam-accent">Seismic Exposure</span>
              </h2>
              <SearchOracle />
            </motion.div>

            {/* KPI Cards */}
            <KPISection />

            {/* Interactive Section */}
            <RiskCircle 
              onFilter={(zone) => setActiveZone(zone)} 
              filteredWilayas={filteredWilayas} 
            />

            {/* Visual Analytics */}
            <AnalyticsSuite />

            <RiskGallery />

            <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gam-silver font-mono tracking-widest uppercase pb-12">
              <div>© 2026 Groupement Algérien des Mutuelles. Strategic Risk Division.</div>
              <div className="flex gap-8">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Security Audit</span>
                <span className="hover:text-white cursor-pointer transition-colors">RPA v2003 Compliant</span>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, isOpen = true }: { icon: ReactNode, label: string, active?: boolean, isOpen?: boolean }) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 group ${
      active ? 'bg-gam-accent text-slate-900 shadow-lg shadow-gam-accent/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`}>
      <div className={`min-w-[20px] transition-transform ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
        {icon}
      </div>
      {isOpen && <span className="text-sm font-medium whitespace-nowrap">{label}</span>}
      {active && isOpen && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse"></div>}
    </div>
  );
}

