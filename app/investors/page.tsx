"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Building2,
    Mail,
    User,
    Briefcase,
    DollarSign,
    CheckCircle2,
} from 'lucide-react';

export default function InvestorsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        firm: '',
        investmentRange: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-[#030303] text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-white/[0.04]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-4 h-4 bg-black rounded-sm"></div>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">Auxio</span>
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full">
                        <Building2 size={16} className="text-emerald-400" />
                        <span className="text-sm font-medium text-white/80">Investor Relations</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        We're building <br />
                        <span className="text-[#8a8a8a]">the future of work</span>
                    </h1>

                    <p className="text-xl text-[#8a8a8a] max-w-2xl mx-auto font-medium leading-relaxed">
                        Auxio is pioneering the AI employee revolution. We're creating intelligent agents that don't just chat—they execute real business tasks autonomously.
                    </p>

                    <p className="text-lg text-white/60 max-w-xl mx-auto">
                        Interested in being part of this journey? Fill out the form below to register your interest in investing.
                    </p>
                </div>
            </section>

            {/* Investment Interest Form */}
            <section className="py-16 px-6">
                <div className="max-w-2xl mx-auto">
                    {!submitted ? (
                        <div className="bento-card p-8 md:p-12 space-y-8">
                            <div className="text-center space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold">Register Your Interest</h2>
                                <p className="text-[#8a8a8a] font-medium">We'll be in touch to discuss investment opportunities</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                                        <User size={14} />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                                        placeholder="John Smith"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                                        <Mail size={14} />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                                        <Briefcase size={14} />
                                        Firm / Organization (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="firm"
                                        value={formData.firm}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors"
                                        placeholder="Acme Ventures"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                                        <DollarSign size={14} />
                                        Investment Range
                                    </label>
                                    <select
                                        name="investmentRange"
                                        value={formData.investmentRange}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white focus:outline-none focus:border-white/20 transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[#0a0a0a]">Select a range</option>
                                        <option value="<25k" className="bg-[#0a0a0a]">Under $25,000</option>
                                        <option value="25k-100k" className="bg-[#0a0a0a]">$25,000 - $100,000</option>
                                        <option value="100k-500k" className="bg-[#0a0a0a]">$100,000 - $500,000</option>
                                        <option value="500k-1m" className="bg-[#0a0a0a]">$500,000 - $1,000,000</option>
                                        <option value=">1m" className="bg-[#0a0a0a]">$1,000,000+</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-colors resize-none"
                                        placeholder="Tell us about yourself and why you're interested in Auxio..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary text-base py-4 flex items-center justify-center space-x-2"
                                >
                                    <span>Submit Interest</span>
                                    <ArrowRight size={18} />
                                </button>
                            </form>

                            <p className="text-center text-sm text-[#555]">
                                By submitting, you agree to our privacy policy. We'll only use your information to contact you about investment opportunities.
                            </p>
                        </div>
                    ) : (
                        <div className="bento-card p-12 text-center space-y-6">
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                                <CheckCircle2 size={40} className="text-emerald-400" />
                            </div>
                            <h2 className="text-3xl font-bold">Thank You!</h2>
                            <p className="text-xl text-[#8a8a8a] max-w-md mx-auto">
                                We've received your interest. Our team will be in touch soon to discuss investment opportunities.
                            </p>
                            <Link href="/" className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                                <span>Return to Home</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Join us in shaping <span className="text-[#8a8a8a]">what's next</span>
                    </h2>
                    <p className="text-lg text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed">
                        The way we work is fundamentally changing. AI agents will handle the routine,
                        freeing humans to focus on what truly matters—creativity, strategy, and connection.
                        We're building the platform that makes this future possible.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/[0.05]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center space-x-2.5">
                        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-sm"></div>
                        </div>
                        <span className="font-bold tracking-tight">Auxio</span>
                    </div>
                    <div className="flex space-x-8 text-sm font-medium text-[#8a8a8a]">
                        {['Privacy', 'Terms', 'Security'].map(link => (
                            <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                        ))}
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    </div>
                    <div className="text-sm text-[#555]">© 2024 Auxio Labs Inc.</div>
                </div>
            </footer>
        </div>
    );
}
