
import React from 'react';
import {
  Users,
  CheckSquare,
  Table,
  FileText,
  ArrowRight,
  Play,
  Settings as SettingsIcon,
  Activity,
  Calendar,
  Layers
} from 'lucide-react';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; color: string; label: string }> = ({ title, value, icon, color, label }) => (
  <div className="bg-[#0a0a0a] p-5 sm:p-8 rounded-[20px] sm:rounded-[24px] border border-white/[0.04] hover:border-white/[0.08] transition-all group flex flex-col justify-between h-36 sm:h-48">
    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center ${color}`}>
      {icon}
    </div>
    <div className="space-y-1 mt-3 sm:mt-4">
      <div className="text-2xl sm:text-4xl font-bold tracking-tight text-white">{value}</div>
      <div className="text-[#8a8a8a] text-xs sm:text-sm font-medium">{title}</div>
      <div className="text-[9px] sm:text-[10px] font-bold text-indigo-400 mt-1 sm:mt-2 uppercase tracking-widest">{label}</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-10 animate-in fade-in duration-1000">
      <header className="space-y-4 sm:space-y-6">
        <p className="text-[#8a8a8a] text-base sm:text-lg font-medium max-w-2xl">
          Your workspace at a glance. Jump into chat, ship tasks, and keep your bot healthy.
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button className="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span>Open Chat</span>
            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
          </button>
          <button className="bg-white/[0.05] border border-white/[0.08] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-white/[0.1] transition-colors">
            View Tasks
          </button>
          <button className="bg-white/[0.05] border border-white/[0.08] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-white/[0.1] transition-colors hidden sm:block">
            Bot Settings
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard title="Leads" value="1,284" label="+42 this week" icon={<Users size={18} className="sm:w-5 sm:h-5" />} color="text-indigo-400" />
        <StatCard title="Tasks" value="64" label="+12 this week" icon={<CheckSquare size={18} className="sm:w-5 sm:h-5" />} color="text-amber-400" />
        <StatCard title="Tables" value="12" label="+0 this week" icon={<Table size={18} className="sm:w-5 sm:h-5" />} color="text-emerald-400" />
        <StatCard title="Documents" value="89" label="+5 this week" icon={<FileText size={18} className="sm:w-5 sm:h-5" />} color="text-cyan-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bot Health Widget */}
        <div className="lg:col-span-5 bg-[#0a0a0a] rounded-[28px] border border-white/[0.04] p-8 space-y-8 flex flex-col">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Bot Health</h3>
              <p className="text-[#555] text-sm mt-1">Runtime and delivery status</p>
            </div>
            <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.05]">Started</span>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-6">
            <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest block mb-4">Service Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></div>
              <span className="font-bold">Running</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 flex-1">
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5">
              <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest block mb-1">Active Tasks</span>
              <span className="text-2xl font-bold">12</span>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5">
              <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest block mb-1">Reminders</span>
              <span className="text-2xl font-bold">4</span>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5">
              <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest block mb-1">Leads</span>
              <span className="text-2xl font-bold">8</span>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-5">
              <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest block mb-1">Docs</span>
              <span className="text-2xl font-bold">32</span>
            </div>
          </div>

          <button className="w-full bg-white/[0.05] border border-white/[0.08] text-white py-4 rounded-2xl font-bold text-sm hover:bg-white/[0.1] transition-colors mt-4">
            Manage Bot Settings
          </button>
        </div>

        {/* Recent Activity Widget */}
        <div className="lg:col-span-7 bg-[#0a0a0a] rounded-[28px] border border-white/[0.04] p-8 flex flex-col min-h-[500px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold">Recent Activity</h3>
              <p className="text-[#555] text-sm mt-1">Last updates across tasks, leads, docs and reminders</p>
            </div>
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-[#555] uppercase tracking-widest hover:text-white transition-colors">
              <span>View all</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-[#333]">
              <Activity size={24} />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-white/40">No recent activity</p>
              <p className="text-[#555] text-sm mt-1">Create tasks, add leads, or generate documents to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
