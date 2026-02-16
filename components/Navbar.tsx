'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center space-x-2.5">
                                <img src="/icon-white.png" alt="Auxio" className="w-8 h-8" />
                                <span className="font-bold text-xl tracking-tight text-white">Auxio</span>
                            </div>
                            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                                <X size={24} className="text-white" />
                            </button>
                        </div>
                        <nav className="flex-1 flex flex-col space-y-6">
                            <Link href="/usecases" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-white/80 transition-colors">Use Cases</Link>
                            <Link href="/playbooks" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-white/80 transition-colors">Playbooks</Link>
                            <Link href="/features" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-white/80 transition-colors">Features</Link>
                            <a href="#" className="text-2xl font-bold text-[#8a8a8a] hover:text-white transition-colors">Templates</a>
                            <a href="/pricing" className="text-2xl font-bold text-[#8a8a8a] hover:text-white transition-colors">Pricing</a>
                        </nav>
                        <div className="space-y-4 pt-8 border-t border-white/10">
                            <a href="https://app.auxio.co/login" className="w-full text-lg font-medium text-[#8a8a8a] hover:text-white py-3 block text-center">Sign in</a>
                            <a href="https://app.auxio.co/signup" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full text-lg py-4">Get Started</a>
                        </div>
                    </div>
                </div>
            )}

            <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/[0.05] px-4 sm:px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-6 lg:space-x-12">
                        <div className="flex items-center space-x-2.5">
                            <img src="/icon-white.png" alt="Auxio" className="w-8 h-8" />
                            <Link href="/" className="font-bold text-lg sm:text-xl tracking-tight text-white">Auxio</Link>
                        </div>
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/usecases" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Use Cases</Link>
                            <Link href="/playbooks" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Playbooks</Link>
                            <Link href="/features" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Features</Link>
                            <a href="#" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Templates</a>
                            <a href="/pricing" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Pricing</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        <a href="https://app.auxio.co/login" className="hidden sm:block text-sm font-medium text-[#8a8a8a] hover:text-white">Sign in</a>
                        <a href="https://app.auxio.co/signup" className="btn-primary text-sm px-4 sm:px-6 py-2.5 hidden sm:flex">Get Started</a>
                        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2">
                            <Menu size={24} className="text-white" />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
