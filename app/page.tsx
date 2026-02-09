"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    Plus,
    ArrowRight,
    CheckCircle2,
    Users,
    Zap,
    MessageSquare,
    Calendar,
    Mail,
    Globe,
    ShieldCheck,
    Menu,
    X,
    Command,
    TrendingUp,
    LayoutDashboard,
    Settings,
    LogOut,
    Bell,
    Sparkles,
    BarChart3,
    Bot,
    Table,
    CheckSquare,
    FileText,
    Database,
    Layers,
    Cpu,
    Route,
    Send,
    Grid,
    Search,
    Box,
    Cloud,
    Terminal,
    Lock,
    Workflow,
    Monitor,
    Trello,
    Layout,
    Heart,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const roles = ["SDR", "Recruiter", "Support", "Analyst", "Assistant"];

const USE_CASES = [
    {
        handle: "@dreetje",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dreetje",
        tag: "Automation",
        likes: 271,
        tasks: [
            "Check my incoming mail, and remove spam",
            "Check my incoming messages (through Beeper)",
            "Order things for me",
            "Send my reminders to Tana",
            "Create issues on GitHub",
            "Sync my Google Places",
            "Reads my X bookmarks and discusses them with me",
            "Generate a nice pdf summary of car conversations",
            "Keep track of costs and split them after trips",
            "Impersonate me in a group chat with friends (Hilarious)",
            "It can call me and we can chat",
            "Has its own 1Password vault it can read and write to"
        ]
    },
    {
        handle: "@danpeguine",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dan",
        tag: "Productivity",
        likes: 257,
        tasks: [
            "Timeblocks tasks in my calendar based on importance",
            "Scores tasks importance and urgency based on an algorithm we're developing together",
            "Leads me through a weekly review based on meeting transcriptions & notes",
            "Gives a morning daily brief: weather, weekly objectives, health stats, meetings agenda, key reminders...",
            "Notifies my wife and I about our son's upcoming school tests",
            "Researches big projects and breaks them down to tasks",
            "Researches people before meetings and creates briefing docs",
            "Spawns background sub-agents to research specific technical topics"
        ]
    },
    {
        handle: "@davis7",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=davis",
        tag: "Developer",
        likes: 229,
        tasks: [
            "This is the \"blue text bubbles\" moment of the ai race",
            "All the cool shit u've been seeing about building crazy custom agents on top of a coding agent?",
            "OpenClaw, btca, and the thousands more that will get built this year now HAVE to be built using our SDK",
            "100x more expensive and if they're built on competitor's sdk guess what they can't do?",
            "Switch to a better model from another provider when it releases"
        ]
    },
    {
        handle: "@sergey_brin",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sergey",
        tag: "Search",
        likes: 198,
        tasks: [
            "Aggregates news from 50+ sources daily",
            "Filters out biased reporting using cross-reference algorithms",
            "Summarizes research papers into actionable insights",
            "Monitors competitors' patent filings in real-time",
            "Automatically updates internal wiki pages with new data"
        ]
    }
];

const IntegrationIcon = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div className="group flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-[#0a0a0a] border border-white/[0.06] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.02] overflow-hidden p-3">
            {children}
        </div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#555] group-hover:text-[#8a8a8a] transition-colors">{label}</span>
    </div>
);


const DeploymentFeature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="flex items-start space-x-5 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-all">
        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0">
            <Icon size={20} className="text-white/80" />
        </div>
        <div className="space-y-1">
            <h4 className="font-bold text-white/90">{title}</h4>
            <p className="text-sm text-[#8a8a8a] font-medium leading-relaxed">{description}</p>
        </div>
    </div>
);

const FeatureShowcase = ({ icon: Icon, title, description, badge, preview }: { icon: any, title: string, description: string, badge: string, preview: React.ReactNode }) => (
    <div className="bento-card group overflow-hidden flex flex-col h-full">
        <div className="p-8 pb-4">
            <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white/[0.03] border border-white/[0.06] rounded-xl flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                </div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10">
                    {badge}
                </span>
            </div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-[#8a8a8a] font-medium leading-relaxed text-sm">
                {description}
            </p>
        </div>
        <div className="mt-auto p-4 pt-0">
            <div className="bg-black/40 border border-white/[0.05] rounded-2xl h-48 overflow-hidden relative">
                {preview}
            </div>
        </div>
    </div>
);

export default function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center space-x-2.5">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                                </div>
                                <span className="font-bold text-xl tracking-tight text-white">Auxio</span>
                            </div>
                            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                                <X size={24} className="text-white" />
                            </button>
                        </div>
                        <nav className="flex-1 flex flex-col space-y-6">
                            <Link href="/usecases" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-white/80 transition-colors">Use Cases</Link>
                            <Link href="/features" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-white/80 transition-colors">Features</Link>
                            <a href="#" className="text-2xl font-bold text-[#8a8a8a] hover:text-white transition-colors">Templates</a>
                            <a href="#" className="text-2xl font-bold text-[#8a8a8a] hover:text-white transition-colors">Pricing</a>
                        </nav>
                        <div className="space-y-4 pt-8 border-t border-white/10">
                            <button className="w-full text-lg font-medium text-[#8a8a8a] hover:text-white py-3">Sign in</button>
                            <a href="https://clawbot-fi5p.onrender.com/signup" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full text-lg py-4">Get Started</a>
                        </div>
                    </div>
                </div>
            )}

            <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/[0.05] px-4 sm:px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-6 lg:space-x-12">
                        <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 bg-black rounded-sm"></div>
                            </div>
                            <Link href="/" className="font-bold text-lg sm:text-xl tracking-tight text-white">Auxio</Link>
                        </div>
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/usecases" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Use Cases</Link>
                            <Link href="/features" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Features</Link>
                            <a href="#" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Templates</a>
                            <a href="#" className="text-sm font-medium text-[#8a8a8a] hover:text-white transition-colors">Pricing</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        <button className="hidden sm:block text-sm font-medium text-[#8a8a8a] hover:text-white">Sign in</button>
                        <a href="https://clawbot-fi5p.onrender.com/signup" className="btn-primary text-sm px-4 sm:px-6 py-2.5 hidden sm:flex">Get Started</a>
                        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2">
                            <Menu size={24} className="text-white" />
                        </button>
                    </div>
                </div>
            </nav>

            <section className="relative min-h-[85vh] sm:min-h-0 pt-28 sm:pt-48 pb-20 sm:pb-32 px-4 sm:px-6 flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight max-w-5xl leading-[1.1] sm:leading-[1.05]">
                            The future of <br className="hidden sm:block" /><span className="sm:hidden"> </span>work is <span className="text-[#8a8a8a]">autonomous</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-[#8a8a8a] max-w-2xl font-medium leading-relaxed px-2">
                            Hire AI employees that don't just chat—they execute. Integrate directly with your tech stack and automate complex workflows.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 sm:pt-6 w-full sm:w-auto">
                            <a href="https://clawbot-fi5p.onrender.com/signup" className="btn-primary w-full sm:w-auto text-base px-8 sm:px-10 py-4 flex items-center justify-center space-x-2">
                                <span>Hire your first AI</span>
                                <ArrowRight size={18} />
                            </a>
                            <button className="btn-secondary w-full sm:w-auto text-base px-8 sm:px-10 py-4">View Templates</button>
                        </div>

                        {/* Powered by OpenClaw */}
                        <a
                            href="https://openclaw.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/[0.02] border border-white/[0.06] rounded-full hover:bg-white/[0.05] hover:border-white/[0.1] transition-all group"
                        >
                            {/* OpenClaw Lobster/Claw Icon */}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-red-500 group-hover:scale-110 transition-transform"
                            >
                                <path
                                    d="M12 2C10.5 2 9 3 8.5 4.5C7.5 4 6 4.5 5.5 5.5C5 6.5 5.5 7.5 6 8C5 8.5 4.5 9.5 5 10.5C5.5 11.5 6.5 12 7.5 11.5L9 14V18C9 19.5 10 21 12 21C14 21 15 19.5 15 18V14L16.5 11.5C17.5 12 18.5 11.5 19 10.5C19.5 9.5 19 8.5 18 8C18.5 7.5 19 6.5 18.5 5.5C18 4.5 16.5 4 15.5 4.5C15 3 13.5 2 12 2Z"
                                    fill="currentColor"
                                />
                                <circle cx="10" cy="7" r="1" fill="#030303" />
                                <circle cx="14" cy="7" r="1" fill="#030303" />
                            </svg>
                            <span className="text-[11px] sm:text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors">
                                Powered by <span className="font-bold text-white/80 group-hover:text-white">OpenClaw</span>
                            </span>
                        </a>
                    </div>

                    {/* Preview mockup - hidden on small mobile */}
                    <div className="mt-12 sm:mt-24 w-full max-w-5xl mx-auto">
                        <div className="bento-card p-1 sm:p-2 overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] rounded-2xl sm:rounded-3xl">
                            <img
                                src="/dashboard-preview.png"
                                alt="Auxio Dashboard Preview"
                                className="w-full h-auto rounded-xl sm:rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Your AI doesn't just chat. <br /><span className="text-[#8a8a8a]">It does the work.</span></h2>
                            <p className="text-lg text-[#8a8a8a] font-medium max-w-2xl leading-relaxed">
                                Auxio agents come equipped with a full suite of business tools. They manage your docs, populate your CRM, and move tasks on your board.
                            </p>
                        </div>
                        <Link href="/features" className="btn-secondary flex items-center space-x-2 group">
                            <span>Explore all features</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeatureShowcase
                            icon={FileText}
                            title="Docs"
                            badge="Self-Authoring"
                            description="Create, edit, and manage entire knowledge bases. The bot researches and updates your documents autonomously as your business evolves."
                            preview={
                                <div className="p-4 space-y-3 font-mono text-[10px]">
                                    <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                                        <FileText size={12} className="text-indigo-400" />
                                        <span className="text-white/60">Q4_Strategy_Guide.md</span>
                                    </div>
                                    <div className="space-y-2 opacity-50">
                                        <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                                        <div className="h-2 w-full bg-white/10 rounded"></div>
                                        <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                                        <div className="flex items-center gap-2 pt-4">
                                            <Sparkles size={10} className="text-indigo-400 animate-pulse" />
                                            <span className="text-indigo-400">Agent updating section 4.2 based on recent CRM data...</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <FeatureShowcase
                            icon={Table}
                            title="Tables"
                            badge="Dynamic Data"
                            description="Native spreadsheets and lists. Use your AI to clean data, perform calculations, and maintain structured records with human-level accuracy."
                            preview={
                                <div className="p-4 h-full">
                                    <div className="grid grid-cols-3 gap-2 border border-white/10 rounded-lg overflow-hidden h-full">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className="bg-white/[0.03] border border-white/[0.05] p-2 flex items-center justify-center">
                                                <div className={`h-1.5 rounded bg-white/${i % 2 === 0 ? '20' : '10'} w-full`}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        />
                        <FeatureShowcase
                            icon={Trello}
                            title="Todos"
                            badge="Autonomous Board"
                            description="A living Kanban board. Your bot doesn't just watch the list—it completes the tasks, moves tickets, and keeps the project moving 24/7."
                            preview={
                                <div className="p-4 flex gap-3 overflow-hidden">
                                    {[1, 2].map(col => (
                                        <div key={col} className="w-1/2 bg-white/[0.02] border border-white/5 rounded-lg p-2 space-y-2">
                                            <div className="h-1.5 w-1/2 bg-white/10 rounded mb-4"></div>
                                            <div className="bg-white/[0.05] border border-white/10 p-2 rounded-md space-y-1.5">
                                                <div className="h-1 w-full bg-white/20 rounded"></div>
                                                <div className="h-1 w-2/3 bg-white/10 rounded"></div>
                                                <div className="flex justify-end pt-1">
                                                    <div className="w-3 h-3 rounded-full bg-emerald-500/50 flex items-center justify-center">
                                                        <CheckCircle2 size={8} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        />
                        <FeatureShowcase
                            icon={Database}
                            title="CRM"
                            badge="Sales Agent"
                            description="Native CRM integration. Your AI agent qualifies leads, enters data, and acts as a tireless salesperson handling initial outreach and follow-ups."
                            preview={
                                <div className="p-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between bg-emerald-500/5 border border-emerald-500/10 p-2 rounded-xl">
                                            <div className="flex items-center gap-2">
                                                <Users size={12} className="text-emerald-400" />
                                                <span className="text-[10px] font-bold">New Lead: John Smith</span>
                                            </div>
                                            <span className="text-[8px] bg-emerald-500 text-black font-bold px-1.5 rounded">High Value</span>
                                        </div>
                                        <div className="flex flex-col gap-1.5 pl-4 border-l border-white/10">
                                            <div className="h-1 w-24 bg-white/20 rounded"></div>
                                            <div className="h-1 w-32 bg-white/10 rounded"></div>
                                            <div className="text-[9px] text-indigo-400 font-bold mt-1">Sarah (SDR) sent introduction email.</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Use Cases Carousel Section */}
            <section className="py-32 px-6 bg-[#030303] overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-6">
                        <div className="flex items-center justify-center space-x-4">
                            <span className="text-red-500 text-4xl font-light scale-y-150 origin-bottom leading-none">&gt;</span>
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Use Cases</h2>
                        </div>
                        <p className="text-[#8a8a8a] text-xl font-medium">Real projects, real automation, real magic.</p>
                        <div className="flex justify-center pt-2">
                            <Link href="/usecases" className="flex items-center space-x-2 text-sm font-bold text-white hover:text-red-400 transition-colors group">
                                <span>View all 1,000+ examples</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>

                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 px-4"
                        >
                            {USE_CASES.map((uc, i) => (
                                <div
                                    key={i}
                                    className="snap-center shrink-0 w-full md:w-[450px] bg-[#0d0d0d] border border-white/[0.08] rounded-[32px] p-8 flex flex-col space-y-6 hover:border-white/20 transition-all"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                                <img src={uc.avatar} alt={uc.handle} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-red-400 font-bold text-lg">{uc.handle}</span>
                                                <div className="flex items-center gap-2 text-[#555] text-xs font-bold uppercase tracking-widest">
                                                    <Zap size={10} className="text-yellow-500/50" />
                                                    <span>{uc.tag}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-red-500 font-bold text-sm">
                                            <Heart size={14} fill="currentColor" />
                                            <span>{uc.likes}</span>
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-2">
                                        <p className="text-white/60 text-sm font-medium mb-4 italic">What I'm currently doing with @openclaw:</p>
                                        <ul className="space-y-3">
                                            {uc.tasks.map((task, ti) => (
                                                <li key={ti} className="flex items-start gap-3 text-[#8a8a8a] text-sm leading-relaxed">
                                                    <span className="text-white/20 mt-1.5 shrink-0">•</span>
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Deployment Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full">
                                <Cpu size={12} className="text-indigo-400" />
                                <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-400">Powered by OpenClaw</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Deploy to the cloud <br /><span className="text-[#8a8a8a]">in less than 60s</span></h2>
                            <p className="text-[#8a8a8a] text-lg font-medium leading-relaxed">
                                Skip the complex infrastructure. Auxio agents come with their own dedicated workspace and pre-configured API mesh, ready to go live immediately.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <DeploymentFeature
                                icon={Cloud}
                                title="Cloud Native"
                                description="Zero-config deployment to global edge nodes."
                            />
                            <DeploymentFeature
                                icon={Send}
                                title="Telegram Direct"
                                description="Control your agents via secure messaging."
                            />
                            <DeploymentFeature
                                icon={Lock}
                                title="Enterprise Secure"
                                description="End-to-end encryption for all agent workflows."
                            />
                            <DeploymentFeature
                                icon={Workflow}
                                title="All-in-one Workspace"
                                description="Dedicated environment for every AI employee."
                            />
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative bg-[#050505] border border-white/[0.08] rounded-[32px] overflow-hidden shadow-2xl">
                            <div className="flex items-center justify-between px-6 py-4 bg-white/[0.03] border-b border-white/[0.08]">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                                </div>
                                <div className="text-[10px] font-bold text-[#444] uppercase tracking-widest">provisioning_logs_sarah_v2.log</div>
                            </div>
                            <div className="p-8 font-mono text-sm space-y-4 overflow-hidden">
                                <div className="flex space-x-3">
                                    <span className="text-indigo-400">$</span>
                                    <span className="text-white/80">openclaw deploy --agent sarah --cloud auto</span>
                                </div>
                                <div className="space-y-1.5 opacity-60">
                                    <p className="text-[#8a8a8a]">[00:02] Initializing cloud workspace...</p>
                                    <p className="text-[#8a8a8a]">[00:08] Configuring API mesh (32/32 connectors active)</p>
                                    <p className="text-[#8a8a8a]">[00:15] Provisioning Telegram webhook...</p>
                                    <p className="text-[#8a8a8a]">[00:22] Hardening secure vault layers...</p>
                                    <p className="text-emerald-400 font-bold">[00:38] Deployment successful. Sarah is live.</p>
                                </div>
                                <div className="pt-6">
                                    <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                                        <div className="h-full w-[100%] bg-emerald-500/80 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Telegram Preview Float */}
                        <div className="absolute -bottom-10 -right-6 md:-right-12 bg-[#0d0d0d] border border-white/[0.1] rounded-2xl p-4 shadow-2xl w-64 animate-bounce-slow">
                            <div className="flex items-center space-x-3 mb-3 pb-3 border-b border-white/[0.05]">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                    <Send size={14} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold">Sarah (SDR)</p>
                                    <p className="text-[9px] text-emerald-400 font-bold uppercase">Online</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-white/[0.05] p-2 rounded-lg text-[10px] text-[#8a8a8a]">
                                    Sarah, what's the status on the Q4 leads?
                                </div>
                                <div className="bg-indigo-500/10 p-2 rounded-lg text-[10px] text-indigo-100 border border-indigo-500/20 text-right ml-4">
                                    Processing 128 leads. 4 meetings booked already. Check the workspace dashboard for details.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built to work with everything</h2>
                        <p className="text-[#8a8a8a] text-lg font-medium">Native integrations with your favorite tools and platforms.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
                        <IntegrationIcon label="Claude">
                            <img src="https://claude.ai/images/claude_app_icon.png" alt="Claude" className="w-full h-full object-contain" />
                        </IntegrationIcon>
                        <IntegrationIcon label="Google">
                            <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google" className="w-full h-full object-contain" />
                        </IntegrationIcon>
                        <IntegrationIcon label="Calendar">
                            <img src="https://fonts.gstatic.com/s/i/productlogos/calendar_2020q4/v8/192px.svg" alt="Google Calendar" className="w-full h-full object-contain" />
                        </IntegrationIcon>
                        <IntegrationIcon label="Telegram">
                            <img src="https://telegram.org/img/t_logo.png" alt="Telegram" className="w-full h-full object-contain" />
                        </IntegrationIcon>
                        <IntegrationIcon label="Brave">
                            <img src="https://brave.com/static-assets/images/brave-logo-sans-text.svg" alt="Brave Search" className="w-full h-full object-contain" />
                        </IntegrationIcon>
                        <IntegrationIcon label="Browserbase">
                            <img src="https://www.browserbase.com/favicon.ico" alt="Browserbase" className="w-full h-full object-contain" />
                        </IntegrationIcon>
                    </div>
                </div>
            </section>

            <section className="py-48 px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Scale your team, <br /><span className="text-[#8a8a8a]">not your headcount</span></h2>
                    <div className="flex justify-center">
                        <a href="https://clawbot-fi5p.onrender.com/signup" className="btn-primary text-xl px-12 py-5">Get Started Free</a>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 border-t border-white/[0.05]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center space-x-2.5">
                        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-sm"></div>
                        </div>
                        <span className="font-bold tracking-tight">Auxio</span>
                    </div>
                    <div className="flex space-x-8 text-sm font-medium text-[#8a8a8a]">
                        {['Privacy', 'Terms', 'Security', 'Twitter'].map(link => (
                            <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                        ))}
                    </div>
                    <div className="text-sm text-[#555]">© 2024 Auxio Labs Inc.</div>
                </div>
            </footer>
        </div>
    );
}
