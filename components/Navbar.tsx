'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass px-6 py-2.5 rounded-full flex items-center gap-8 pointer-events-auto shadow-2xl"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-xs">A</div>
                    <span className="text-sm font-bold tracking-tight">AUXIO</span>
                </div>

                <div className="hidden md:flex items-center gap-6 text-xs font-medium text-secondary">
                    <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="/#integrations" className="hover:text-white transition-colors">Integrations</Link>
                    <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="/#waitlist" className="hover:text-white transition-colors">Waitlist</Link>
                    <Link href="https://app.auxio.co/login" className="hover:text-white transition-colors">Log In</Link>
                </div>

                <div className="h-4 w[1px] bg-white/10 hidden md:block" />

                <a
                    href="https://app.auxio.co/signup"
                    className="text-xs bg-white text-black px-4 py-2 rounded-full font-bold hover:sscale-105 transition-all"
                >
                    Sign Up
                </a>
            </motion.nav>
        </div>
    );
}
