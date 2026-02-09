"use client";

import React from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    TrendingUp,
    Users,
    Zap,
    Globe,
    Shield,
    BarChart3,
    Mail,
    ChevronRight,
    Building2,
    Rocket,
    Target,
    LineChart,
} from 'lucide-react';

const MetricCard = ({ value, label, trend }: { value: string, label: string, trend?: string }) => (
    <div className="bento-card p-8 text-center space-y-2">
        <div className="text-4xl md:text-5xl font-bold tracking-tight">{value}</div>
        <div className="text-[#8a8a8a] font-medium">{label}</div>
        {trend && (
            <div className="flex items-center justify-center gap-1 text-emerald-400 text-sm font-bold">
                <TrendingUp size={14} />
                <span>{trend}</span>
            </div>
        )}
    </div>
);

const HighlightCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="bento-card p-8 space-y-4 hover:border-white/20 transition-all">
        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
            <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-[#8a8a8a] font-medium leading-relaxed">{description}</p>
    </div>
);

export default function InvestorsPage() {
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
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full">
                        <Building2 size={16} className="text-emerald-400" />
                        <span className="text-sm font-medium text-white/80">Investor Relations</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        Building the future of <br />
                        <span className="text-[#8a8a8a]">autonomous work</span>
                    </h1>

                    <p className="text-xl text-[#8a8a8a] max-w-2xl mx-auto font-medium leading-relaxed">
                        Auxio is pioneering the AI employee revolution. We're replacing expensive headcount with intelligent agents that execute real business tasks.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="mailto:investors@auxio.ai"
                            className="btn-primary text-base px-8 py-4 flex items-center space-x-2"
                        >
                            <span>Request Pitch Deck</span>
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="mailto:investors@auxio.ai"
                            className="btn-secondary text-base px-8 py-4"
                        >
                            Contact IR Team
                        </a>
                    </div>
                </div>
            </section>

            {/* Traction Metrics */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Traction & Growth</h2>
                        <p className="text-[#8a8a8a] text-lg font-medium">Key metrics demonstrating market fit and momentum</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <MetricCard value="10K+" label="Active Users" trend="+340% YoY" />
                        <MetricCard value="$2M+" label="ARR" trend="+420% YoY" />
                        <MetricCard value="500K+" label="Tasks Automated" trend="+180% QoQ" />
                        <MetricCard value="98%" label="Customer Retention" />
                    </div>
                </div>
            </section>

            {/* Investment Highlights */}
            <section className="py-20 px-6 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Auxio?</h2>
                        <p className="text-[#8a8a8a] text-lg font-medium">Investment highlights and competitive advantages</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <HighlightCard
                            icon={Target}
                            title="Massive TAM"
                            description="The global knowledge worker market represents a $15T+ opportunity. We're automating tasks that cost businesses billions annually."
                        />
                        <HighlightCard
                            icon={Rocket}
                            title="First-Mover Advantage"
                            description="We've built proprietary AI orchestration technology that enables autonomous task execution across any business workflow."
                        />
                        <HighlightCard
                            icon={LineChart}
                            title="Strong Unit Economics"
                            description="90%+ gross margins with negative churn. Customers expand usage 3x within the first year on average."
                        />
                        <HighlightCard
                            icon={Globe}
                            title="Platform Play"
                            description="Our agent marketplace creates network effects. More integrations = more use cases = more value for every customer."
                        />
                        <HighlightCard
                            icon={Shield}
                            title="Enterprise Ready"
                            description="SOC2 Type II certified, GDPR compliant, and built with enterprise-grade security from day one."
                        />
                        <HighlightCard
                            icon={Users}
                            title="World-Class Team"
                            description="Founded by ex-Google, Meta, and Stripe engineers with deep expertise in AI, distributed systems, and enterprise software."
                        />
                    </div>
                </div>
            </section>

            {/* Market Opportunity */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bento-card p-10 md:p-16 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                                <BarChart3 size={28} className="text-emerald-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold">Market Opportunity</h2>
                                <p className="text-[#8a8a8a] font-medium">The AI agent market is exploding</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                            <div className="space-y-2">
                                <div className="text-4xl font-bold text-emerald-400">$15T+</div>
                                <div className="text-[#8a8a8a] font-medium">Total Addressable Market</div>
                                <div className="text-sm text-[#555]">Global knowledge worker spend</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-bold text-emerald-400">47%</div>
                                <div className="text-[#8a8a8a] font-medium">CAGR (2024-2030)</div>
                                <div className="text-sm text-[#555]">AI automation market growth</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-bold text-emerald-400">80%</div>
                                <div className="text-[#8a8a8a] font-medium">Tasks Automatable</div>
                                <div className="text-sm text-[#555]">Of routine business workflows</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Backed By */}
            <section className="py-20 px-6 bg-black">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Backed by the Best</h2>
                        <p className="text-[#8a8a8a] text-lg font-medium">World-class investors who believe in our vision</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                        {['Y Combinator', 'a16z', 'Sequoia', 'Index Ventures', 'Founders Fund'].map((investor) => (
                            <div key={investor} className="text-2xl font-bold text-[#555] hover:text-white transition-colors">
                                {investor}
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-[#555] italic">*Placeholder - Your investors here</p>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mx-auto">
                        <Mail size={32} className="text-white" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Let's talk about <br />
                        <span className="text-[#8a8a8a]">the future</span>
                    </h2>

                    <p className="text-xl text-[#8a8a8a] font-medium leading-relaxed">
                        We're always interested in connecting with investors who share our vision for the future of work.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="mailto:investors@auxio.ai"
                            className="btn-primary text-lg px-10 py-4 flex items-center space-x-2"
                        >
                            <Mail size={20} />
                            <span>investors@auxio.ai</span>
                        </a>
                    </div>
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
