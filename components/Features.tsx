
import React from 'react';
import Link from 'next/link';
import {
    FileText,
    Table,
    CheckSquare,
    Database,
    Cloud,
    ShieldCheck,
    BarChart3,
    Zap,
    Users,
    Cpu,
    Lock,
    Workflow,
    ArrowRight,
    Globe,
    Sparkles,
    MessageSquare,
    Bot,
    Layers,
    Search,
    CheckCircle2
} from 'lucide-react';

const FeatureDetail = ({
    icon: Icon,
    title,
    description,
    details,
    colorClasses,
    imageContent
}: {
    icon: any,
    title: string,
    description: string,
    details: string[],
    colorClasses: string,
    imageContent?: React.ReactNode
}) => (
    <div className="group relative">
        <div className={`absolute -inset-1 bg-gradient-to-r ${colorClasses} rounded-[24px] sm:rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}></div>
        <div className="relative bg-[#080808] border border-white/[0.08] rounded-[20px] sm:rounded-[32px] p-5 sm:p-8 md:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                    <div className="inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full">
                        <Icon size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-white/80">{title}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                        {description}
                    </h3>

                    <ul className="space-y-3 sm:space-y-4">
                        {details.map((detail, i) => (
                            <li key={i} className="flex items-start space-x-3 group/item">
                                <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-white/60 transition-colors"></div>
                                <p className="text-sm sm:text-base text-[#8a8a8a] font-medium leading-relaxed group-hover/item:text-white/80 transition-colors">
                                    {detail}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-2 sm:pt-4">
                        <button className="flex items-center space-x-2 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                            <span>Learn more about {title}</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                <div className="relative h-[280px] sm:h-[400px] w-full bg-[#050505] border border-white/[0.05] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                    {imageContent || (
                        <div className="flex items-center justify-center h-full">
                            <div className="relative">
                                <div className={`absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br ${colorClasses}`}></div>
                                <Icon size={120} className="relative text-white/10" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);

const Features = () => {
    return (
        <div className="min-h-screen bg-[#030303] text-white">
            {/* Header */}
            <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/[0.05] px-4 sm:px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 sm:space-x-2.5 group">
                        <img src="/icon-white.png" alt="Auxio" className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-lg sm:text-xl tracking-tight text-white">Auxio</span>
                    </Link>
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <Link href="/" className="text-xs sm:text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors hidden sm:block">Back to Home</Link>
                        <a href="https://app.auxio.co/signup" className="btn-primary text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5">Get Started</a>
                    </div>
                </div>
            </nav>

            <main className="pt-28 sm:pt-40 pb-16 sm:pb-32 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16 sm:mb-32 space-y-4 sm:space-y-6">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full">
                            <Sparkles size={12} className="text-indigo-400" />
                            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-indigo-400">Capabilities Deep Dive</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight">
                            Everything your <br className="hidden sm:block" /><span className="text-[#8a8a8a]">business needs.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#8a8a8a] max-w-3xl mx-auto font-medium leading-relaxed">
                            We've re-imagined core business software from the ground up to be autonomous first.
                            Each tool is powered by a dedicated AI brain that executes tasks on your behalf.
                        </p>
                    </div>

                    {/* Detailed Features List */}
                    <div className="space-y-32">
                        <FeatureDetail
                            icon={FileText}
                            title="Autonomous Docs"
                            description="Knowledge that learns and writes itself."
                            colorClasses="from-indigo-500/20 to-purple-500/20"
                            details={[
                                "Autonomous research and self-updating documentation based on team activity.",
                                "Semantic search across your entire knowledge base controlled by AI.",
                                "Automatic formatting, cross-linking, and metadata tagging.",
                                "One-click PDF generation and export to preferred formats."
                            ]}
                            imageContent={
                                <div className="p-8 space-y-4 font-mono text-xs overflow-hidden">
                                    <div className="flex items-center justify-between border-b border-white/1) pb-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <FileText size={16} className="text-indigo-400" />
                                            <span className="text-white/60">Q1_Competitor_Analysis.md</span>
                                        </div>
                                        <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded">Updating...</span>
                                    </div>
                                    <div className="space-y-3 opacity-60">
                                        <p className="text-white/40"># Section 2.1: Market Trends</p>
                                        <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                                        <div className="h-2 w-full bg-white/10 rounded"></div>
                                        <div className="flex items-start gap-3 bg-white/[0.03] p-3 rounded-lg border border-white/5">
                                            <Sparkles size={14} className="text-indigo-400 mt-1" />
                                            <p className="text-[#8a8a8a]">Found new data from TechCrunch regarding 2024 AI investment. Integrating into the summary...</p>
                                        </div>
                                        <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            }
                        />

                        <FeatureDetail
                            icon={Database}
                            title="AI CRM"
                            description="A sales team that never sleeps or takes a break."
                            colorClasses="from-emerald-500/20 to-teal-500/20"
                            details={[
                                "Automated lead qualification and enrichment using 50+ data sources.",
                                "Personalized outreach sequences generated and managed by AI agents.",
                                "Native meeting scheduling and calendar synchronization.",
                                "Real-time deal probability scoring and sales pipeline forecasting."
                            ]}
                            imageContent={
                                <div className="p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                                    <Users size={20} className="text-emerald-400" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white">Alex Johnson</h4>
                                                    <p className="text-xs text-[#8a8a8a]">VP Engineering at CloudScale</p>
                                                </div>
                                            </div>
                                            <div className="px-3 py-1 bg-emerald-500 text-black text-[10px] font-bold rounded-full">94% Fit</div>
                                        </div>

                                        <div className="space-y-4 pl-4 border-l-2 border-white/5">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 w-2 h-2 rounded-full bg-indigo-500"></div>
                                                <div className="space-y-1">
                                                    <p className="text-xs font-bold text-white/60">OUTREACH TRIGGERED</p>
                                                    <p className="text-sm text-[#8a8a8a]">Sarah (Agent) sent personalized intro email via LinkedIn.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500"></div>
                                                <div className="space-y-1">
                                                    <p className="text-xs font-bold text-white/60">RESPONSE DETECTED</p>
                                                    <p className="text-sm text-[#8a8a8a]">Alex replied asking for a demo. AI scheduling meeting for Tuesday.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />

                        <FeatureDetail
                            icon={CheckSquare}
                            title="Smart Boards"
                            description="Project management that builds itself."
                            colorClasses="from-amber-500/20 to-orange-500/20"
                            details={[
                                "Autonomous task breakdown from high-level objectives.",
                                "Active task execution: AI doesn't just track, it completes work.",
                                "Intelligent resource allocation and bottleneck detection.",
                                "Automated stand-up summaries and team progress reports."
                            ]}
                            imageContent={
                                <div className="p-8 h-full flex flex-col">
                                    <div className="flex gap-4 mb-6">
                                        <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold">In Progress</div>
                                        <div className="px-4 py-2 bg-white/[0.02] border border-white/5 rounded-lg text-xs font-bold text-[#444]">Done</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-[#0c0c0c] border border-white/10 p-4 rounded-xl shadow-lg transform -rotate-1">
                                            <div className="flex justify-between items-start mb-3">
                                                <h4 className="text-sm font-bold">Setup CI/CD Pipeline</h4>
                                                <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                                                    <Bot size={12} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                                                <div className="h-full w-3/4 bg-amber-500"></div>
                                            </div>
                                            <p className="text-[10px] text-[#8a8a8a]">AI agent is currently configuring GitHub Actions secrets...</p>
                                        </div>
                                        <div className="bg-[#0c0c0c] border border-emerald-500/20 p-4 rounded-xl shadow-lg transform translate-x-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-sm font-bold">API Documentation</h4>
                                                <CheckCircle2 size={16} className="text-emerald-500" />
                                            </div>
                                            <p className="text-[10px] text-emerald-400">Completed by AI Assistant. Verified by human.</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        />

                        <FeatureDetail
                            icon={Cloud}
                            title="Instant Cloud"
                            description="Proprietary mesh for sub-60s deployments."
                            colorClasses="from-blue-500/20 to-cyan-500/20"
                            details={[
                                "Global edge node distribution for ultra-low latency execution.",
                                "Zero-configuration API mesh handles all tool connections securely.",
                                "Elastic scaling: AI workers spin up and down based on workload.",
                                "Secure-by-default environment with per-agent isolation."
                            ]}
                            imageContent={
                                <div className="p-8 font-mono text-sm space-y-4">
                                    <div className="flex gap-2">
                                        <span className="text-emerald-400">➜</span>
                                        <span>proact deploy --all</span>
                                    </div>
                                    <div className="space-y-2 text-[#444] text-[12px]">
                                        <div className="flex justify-between items-center">
                                            <span>Allocating edge resources</span>
                                            <span className="text-emerald-500">DONE</span>
                                        </div>
                                        <div className="flex justify-between items-center text-white/40">
                                            <span>Configuring mesh layer</span>
                                            <span className="animate-pulse text-blue-400">RUNNING</span>
                                        </div>
                                        <div className="flex justify-between items-center opacity-40">
                                            <span>Deploying AI containers</span>
                                            <span>WAITING</span>
                                        </div>
                                    </div>
                                    <div className="pt-8">
                                        <div className="relative h-20 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
                                            <div className="absolute top-0 left-0 h-full w-[45%] bg-blue-500/20"></div>
                                            <div className="h-full flex items-center justify-center">
                                                <Globe size={32} className="text-white/10" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>

                    {/* Infrastructure / Secondary Features Grid */}
                    <div className="mt-48">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl font-bold">Enterprise Infrastructure</h2>
                            <p className="text-[#8a8a8a] font-medium">Built for scale, security, and performance.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: ShieldCheck, title: "SOC2 Compliant", desc: "Highest industry standards for data security and privacy." },
                                { icon: BarChart3, title: "ROI Dashboard", desc: "Track every dollar saved and every hour automated." },
                                { icon: Zap, title: "Ultra-Low Latency", desc: "Real-time execution powered by our proprietary mesh." },
                                { icon: MessageSquare, title: "Human Backup", desc: "Seamlessly transition from AI to human agents when needed." },
                                { icon: Layers, title: "Infinite Tools", desc: "Connect any API or custom tool in minutes." },
                                { icon: Search, title: "Knowledge Sync", desc: "Syncs with Google Drive, Notion, Slack, and Gmail." }
                            ].map((item, i) => (
                                <div key={i} className="bento-card p-8 group">
                                    <div className="w-12 h-12 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="text-white/80" size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                                    <p className="text-[#8a8a8a] text-sm font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-48 bento-card p-16 text-center space-y-10 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10">Start building your AI <br /> workforce today.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <button className="btn-primary px-10 py-4 text-lg">Hire your first AI</button>
                            <button className="btn-secondary px-10 py-4 text-lg">Book a Demo</button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/[0.05]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center space-x-2.5">
                        <img src="/icon-white.png" alt="Auxio" className="w-6 h-6" />
                        <span className="font-bold tracking-tight">Auxio</span>
                    </div>
                    <div className="test-sm text-[#555]">© 2024 Auxio Labs Inc. All rights reserved.</div>
                </div>
            </footer>
        </div>
    );
};

export default Features;
