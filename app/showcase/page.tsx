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
    Menu,
    X,
    ChevronLeft,
} from 'lucide-react';
import Marketplace from '../../components/Marketplace';
import Dashboard from '../../components/Dashboard';

export default function ShowcasePage() {
    const [activeView, setActiveView] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
        { id: 'crm', icon: Database, label: 'CRM' },
        { id: 'chats', icon: MessageSquare, label: 'Chat' },
        { id: 'tables', icon: Table, label: 'Tables' },
        { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
        { id: 'documents', icon: FileText, label: 'Documents' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    const handleNavClick = (id: string) => {
        setActiveView(id);
        setSidebarOpen(false);
    };

    return (
        <div className="flex h-screen bg-[#030303] text-white overflow-hidden">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 nav-blur border-b border-white/[0.04] px-4 py-3 flex items-center justify-between">
                <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2">
                    <Menu size={24} className="text-white" />
                </button>
                <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-3.5 h-3.5 bg-black rounded-sm"></div>
                    </div>
                    <span className="font-bold text-lg tracking-tight">ProactAI</span>
                </div>
                <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}>
                    <aside
                        className="w-[280px] h-full border-r border-white/[0.04] flex flex-col p-6 bg-[#000000]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                                    <div className="w-3.5 h-3.5 bg-black rounded-sm"></div>
                                </div>
                                <span className="font-bold text-lg tracking-tight">ProactAI</span>
                            </div>
                            <button onClick={() => setSidebarOpen(false)} className="p-2 -mr-2">
                                <X size={20} className="text-[#8a8a8a]" />
                            </button>
                        </div>

                        <nav className="flex-1 space-y-2">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
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

                        <div className="pt-6 border-t border-white/[0.04] space-y-4">
                            <div className="bg-white/[0.03] border border-white/[0.06] rounded-[20px] p-3 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center font-bold text-sm">
                                    B
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-sm font-bold truncate">bbbbb@gmail.com</p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <Globe size={10} className="text-emerald-500" />
                                        <span className="text-[9px] font-bold text-[#555] uppercase tracking-wider">Verified</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/" className="w-full flex items-center space-x-3 px-4 py-2 text-[#444] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                                <ChevronLeft size={16} />
                                <span>Back to Home</span>
                            </Link>
                        </div>
                    </aside>
                </div>
            )}

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-[300px] border-r border-white/[0.04] flex-col p-6 bg-[#000000]">
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
            <main className="flex-1 flex flex-col overflow-hidden bg-[#030303] relative pt-16 lg:pt-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="flex-1 overflow-y-auto relative z-10">
                    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-12">
                        {activeView === 'dashboard' && <Dashboard />}
                        {activeView === 'marketplace' && <Marketplace onAddAgent={() => setActiveView('chats')} />}
                        {!['dashboard', 'marketplace'].includes(activeView) && (
                            <div className="h-full flex items-center justify-center py-16 sm:py-32">
                                <div className="text-center space-y-6 max-w-sm px-4">
                                    <div className="w-16 h-16 bg-white/[0.03] border border-white/[0.06] rounded-2xl mx-auto flex items-center justify-center text-[#555]">
                                        <Layers size={32} />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{navItems.find(n => n.id === activeView)?.label} Empty</h2>
                                    <p className="text-[#8a8a8a] font-medium leading-relaxed text-sm sm:text-base">
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
