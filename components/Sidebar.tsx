
import React from 'react';
import { LayoutDashboard, Users, MessageSquare, PlusCircle, Settings, LogOut, TrendingUp } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'marketplace', icon: Users, label: 'Marketplace' },
    { id: 'chats', icon: MessageSquare, label: 'My Lindies' },
    { id: 'stats', icon: TrendingUp, label: 'Analytics' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-slate-200 flex flex-col sticky top-0">
      <div className="p-6 flex items-center space-x-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">L</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-800">Lindy</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              activeView === item.id 
                ? 'bg-indigo-50 text-indigo-700' 
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button className="w-full flex items-center space-x-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors mb-2">
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </button>
        <div className="flex items-center space-x-3 px-3 py-2 text-slate-600">
          <img 
            src="https://picsum.photos/seed/user/100/100" 
            alt="User" 
            className="w-8 h-8 rounded-full border border-slate-200"
          />
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold truncate">Alex Rivera</p>
            <p className="text-xs text-slate-400 truncate">Pro Plan</p>
          </div>
          <LogOut size={16} className="text-slate-400 cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
