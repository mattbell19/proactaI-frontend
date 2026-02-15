'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass px-6 py-2.5 rounded-full flex items-center gap-8 pointer-events-auto shadow-2xl relative"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-xs">A</div>
                    <span className="text-sm font-bold tracking-tight">AUXIO</span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-6 text-xs font-medium text-secondary">
                    <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="/#integrations" className="hover:text-white transition-colors">Integrations</Link>
                    <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="/#waitlist" className="hover:text-white transition-colors">Waitlist</Link>
                    <Link href="https://app.auxio.co/login" className="hover:text-white transition-colors">Log In</Link>
                </div>

                <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

                <a
                    href="https://app.auxio.co/signup"
                    className="hidden md:block text-xs bg-white text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition-all"
                >
                    Sign Up
                </a>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col gap-1 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
                </button>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 pointer-events-auto shadow-2xl md:hidden z-50"
                    >
                        <div className="flex flex-col gap-4 text-sm font-medium text-secondary">
                            <Link href="/#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-white/5">Features</Link>
                            <Link href="/#integrations" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-white/5">Integrations</Link>
                            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-white/5">Pricing</Link>
                            <Link href="/#waitlist" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-white/5">Waitlist</Link>
                            <Link href="https://app.auxio.co/login" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-white/5">Log In</Link>
                            <a
                                href="https://app.auxio.co/signup"
                                className="text-center bg-white text-black px-4 py-3 rounded-full font-bold hover:scale-105 transition-all mt-2"
                            >
                                Sign Up
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
