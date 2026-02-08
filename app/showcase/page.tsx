"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Globe,
    LayoutDashboard,
    Settings,
    LogOut,
    MessageSquare,
    Table,
    CheckSquare,
    FileText,
    Database,
    Layers,
} from 'lucide-react';
import Marketplace from '../../components/Marketplace';
import Dashboard from '../../components/Dashboard';

export default function ShowcasePage() {
    const [activeView, setActiveView] = useState('dashboard');

    const navItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
        { id: 'crm', icon: Database, label: 'CRM' },
        { id: 'chats', icon: MessageSquare, label: 'Chat' },
        { id: 'tables', icon: Table, label: 'Tables' },
        { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
        { id: 'documents', icon: FileText, label: 'Documents' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="flex h-screen bg-[#030303] text-white overflow-hidden">
            {/* App Sidebar */}
            <aside className="w-[300px] border-r border-white/[0.04] flex flex-col p-6 bg-[#000000]">
                <div className="mb-8 px-2">
                    <span className="text-[10px] font-bold text-[#444] uppercase tracking-[0.2em]">Navigation</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveView(item.id)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all font-semibold text-sm ${activeView === item.id
                                ? 'bg-white text-black'
                                : 'text-[#8a8a8a] hover:text-white hover:bg-white/[0.03]'
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                <item.icon size={18} />
                                <span>{item.label}</span>
                            </div>
                            {activeView === item.id && <div className="w-1 h-1 bg-black rounded-full"></div>}
                        </button>
                    ))}
                </nav>

                <div className="pt-6 border-t border-white/[0.04] space-y-6">
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-[24px] p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center font-bold text-sm">
                            B
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-bold truncate">bbbbb@gmail.com</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <Globe size={10} className="text-emerald-500" />
                                <span className="text-[9px] font-bold text-[#555] uppercase tracking-wider">Verified Session</span>
                            </div>
                        </div>
                    </div>

                    <Link href="/" className="w-full flex items-center space-x-3 px-4 py-2 text-[#444] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                        <LogOut size={16} />
                        <span>Disconnect</span>
                    </Link>
                </div>
            </aside>

            {/* Main Container */}
            <main className="flex-1 flex flex-col overflow-hidden bg-[#030303] relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="flex-1 overflow-y-auto relative z-10">
                    <div className="max-w-6xl mx-auto p-12">
                        {activeView === 'dashboard' && <Dashboard />}
                        {activeView === 'marketplace' && <Marketplace onAddAgent={() => setActiveView('chats')} />}
                        {!['dashboard', 'marketplace'].includes(activeView) && (
                            <div className="h-full flex items-center justify-center py-32">
                                <div className="text-center space-y-6 max-w-sm">
                                    <div className="w-16 h-16 bg-white/[0.03] border border-white/[0.06] rounded-2xl mx-auto flex items-center justify-center text-[#555]">
                                        <Layers size={32} />
                                    </div>
                                    <h2 className="text-2xl font-bold tracking-tight">{navItems.find(n => n.id === activeView)?.label} Empty</h2>
                                    <p className="text-[#8a8a8a] font-medium leading-relaxed">
                                        This section is currently being provisioned for your AI workforce.
                                    </p>
                                    <button onClick={() => setActiveView('dashboard')} className="btn-primary">Return to Overview</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
