
import React from 'react';
import { LINDY_TEMPLATES } from '../constants';
import { Plus, Search, Filter, ArrowUpRight } from 'lucide-react';
import { LindyAgent } from '../types';

interface MarketplaceProps {
  onAddAgent: (agent: LindyAgent) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ onAddAgent }) => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-6 duration-1000">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Marketplace</h1>
          <p className="text-[#8a8a8a] font-medium mt-1">Hire verified, pre-trained AI employees.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" size={16} />
            <input 
              type="text" 
              placeholder="Search templates..." 
              className="pl-10 pr-4 py-2.5 bg-[#0a0a0a] border border-white/[0.06] rounded-xl focus:outline-none focus:border-white/20 w-full sm:w-64 text-sm"
            />
          </div>
          <button className="btn-secondary py-2.5 px-4"><Filter size={18} /></button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LINDY_TEMPLATES.map((agent) => (
          <div key={agent.id} className="bg-[#0a0a0a] border border-white/[0.06] rounded-[24px] p-8 hover:border-white/20 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.06] rounded-[18px] overflow-hidden">
                  <img src={agent.avatar} alt={agent.name} className="w-full h-full object-cover grayscale" />
                </div>
                <span className="px-2.5 py-1 bg-white/[0.03] text-[10px] font-bold text-[#8a8a8a] uppercase tracking-widest rounded-md border border-white/[0.05]">
                  {agent.role}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{agent.name}</h3>
              <p className="text-sm text-[#8a8a8a] leading-relaxed font-medium">
                {agent.description}
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/[0.05] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest">Completed</span>
                <span className="text-sm font-bold text-white/80">{agent.tasksCompleted.toLocaleString()}+ tasks</span>
              </div>
              <button 
                onClick={() => onAddAgent(agent)}
                className="bg-white text-black h-10 w-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
        ))}

        <div className="bg-transparent border-2 border-dashed border-white/[0.06] rounded-[24px] p-8 flex flex-col items-center justify-center text-center space-y-4 hover:border-white/20 transition-all min-h-[340px] group cursor-pointer">
          <div className="w-14 h-14 bg-white/[0.03] rounded-full flex items-center justify-center text-[#555] group-hover:text-white transition-colors">
            <Plus size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Custom Agent</h3>
            <p className="text-sm text-[#8a8a8a] font-medium mt-1">Design a unique assistant <br /> for your workflow.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
