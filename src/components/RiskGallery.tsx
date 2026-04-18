import { motion } from 'motion/react';
import { Image as ImageIcon, Map as MapIcon, Layers } from 'lucide-react';

const MAPS = [
  { id: 1, title: 'Regional PGA Distribution', type: 'Hazard Map', img: 'https://picsum.photos/seed/algeria-map/800/600' },
  { id: 2, title: 'Tectonic Plate Fault Lines', type: 'Structural', img: 'https://picsum.photos/seed/tectonic/800/600' },
  { id: 3, title: 'Historical Epicenter Cluster', type: 'Analysis', img: 'https://picsum.photos/seed/seismic-history/800/600' },
];

export const RiskGallery = () => {
  return (
    <div className="glass p-8 rounded-3xl mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-sans font-medium text-white mb-1 flex items-center gap-2">
            <ImageIcon size={20} className="text-gam-silver" />
            Risk Mapping Gallery
          </h3>
          <p className="text-sm text-slate-400 font-sans">Strategic visualizations & spatial hazard intelligence</p>
        </div>
        <button className="text-xs font-mono text-gam-silver border border-gam-silver/30 px-3 py-1 rounded hover:bg-gam-silver/10 transition-colors uppercase tracking-widest">
           Browse Full Archive
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MAPS.map((map) => (
          <motion.div
            key={map.id}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-slate-900"
          >
            <div className="aspect-video relative">
              <img 
                src={map.img} 
                alt={map.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
               <div className="flex items-center gap-2 mb-1">
                  <MapIcon size={12} className="text-gam-silver" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gam-silver">{map.type}</span>
               </div>
               <h4 className="text-sm font-bold text-white group-hover:text-gam-silver transition-colors">{map.title}</h4>
            </div>

            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="bg-slate-950/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                  <Layers size={14} className="text-white" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
