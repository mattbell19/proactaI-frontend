'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FileSpreadsheet,
    FileText,
    Mail,
    CheckSquare,
    Search,
    ArrowRight,
    Terminal,
    Clock,
    Zap,
    CheckCircle2,
    Play,
    Cpu,
    Users,
    TrendingUp,
    Globe,
    Image as ImageIcon,
    Calendar,
    Database,
    Send
} from 'lucide-react';

// Types
type Playbook = {
    badge: { icon: any; label: string; colorClass: string; iconColor: string };
    impact: { icon: any; label: string; color: string };
    title: React.ReactNode;
    description: string;
    stats: { label: string; value: string; sub?: string }[];
    stack: { icon: any; label: string; color: string }[];
    terminal: {
        fileName: string;
        content: React.ReactNode;
        status: string;
    };
};

const PLAYBOOKS: Playbook[] = [
    {
        badge: {
            icon: Cpu,
            label: "Finance Agent",
            colorClass: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
            iconColor: "text-indigo-400"
        },
        impact: { icon: Zap, label: "High Impact", color: "text-emerald-400" },
        title: <>Monthly Client <br /> Bookkeeping Close</>,
        description: "Automate the entire month-end close process. The agent categorizes transactions across all client ledgers, flags anomalies, generates burn-rate charts, and drafts ready-to-send executive summaries.",
        stats: [
            { label: "Time Saved", value: "15-20h", sub: "/mo" },
            { label: "Accuracy", value: "99.9%" }
        ],
        stack: [
            { icon: FileSpreadsheet, label: "Sheets", color: "text-emerald-400" },
            { icon: FileText, label: "Docs", color: "text-blue-400" },
            { icon: Mail, label: "Gmail", color: "text-red-400" },
            { icon: CheckSquare, label: "Tasks", color: "text-indigo-400" }
        ],
        terminal: {
            fileName: "instruction.md",
            status: "Agent processing step 3/4: Generating burn-rate charts...",
            content: (
                <>
                    <span className="text-indigo-400 font-bold"># Month-End Goal</span>
                    <br />
                    Run book close for "Client Ledgers".
                    <br /><br />
                    <span className="text-emerald-400 font-bold">1. Ingest Data:</span> Pull new txns from bank feeds &amp; match manual entries.
                    <br />
                    <span className="text-emerald-400 font-bold">2. Analyze:</span> Apply categorization rules. Flag outliers &gt; $500.
                    <br />
                    <span className="text-emerald-400 font-bold">3. Report:</span> Generate burn-rate charts &rarr; Compile to GDoc.
                    <br />
                    <span className="text-emerald-400 font-bold">4. Action:</span> Draft email summary + create tasks for missing receipts.
                </>
            )
        }
    },
    {
        badge: {
            icon: Users,
            label: "Sales Agent",
            colorClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
            iconColor: "text-amber-400"
        },
        impact: { icon: TrendingUp, label: "Pipeline Growth", color: "text-indigo-400" },
        title: <>Lead Campaign <br /> Launch Sequence</>,
        description: "Builds and executes a personalized outbound campaign from a target list. Researches prospects, writes hyper-personalized emails, attaches Nano Banana-generated visuals, and tracks responses in CRM.",
        stats: [
            { label: "Meetings/mo", value: "20+" },
            { label: "Effort", value: "< 1h", sub: "/wk" }
        ],
        stack: [
            { icon: FileSpreadsheet, label: "Sheets", color: "text-emerald-400" },
            { icon: Globe, label: "Search", color: "text-orange-400" },
            { icon: Mail, label: "Gmail", color: "text-red-400" },
            { icon: FileText, label: "Docs", color: "text-blue-400" },
            { icon: ImageIcon, label: "Nano Banana", color: "text-purple-400" },
            { icon: Database, label: "CRM", color: "text-blue-500" },
            { icon: Calendar, label: "Cal", color: "text-yellow-400" },
            { icon: CheckSquare, label: "Tasks", color: "text-indigo-400" }
        ],
        terminal: {
            fileName: "campaign_config.yml",
            status: "Enriching lead 14/50: Tech Stack analysis complete...",
            content: (
                <>
                    <span className="text-amber-400 font-bold"># Outbound Objective</span>
                    <br />
                    Launch campaign for "Target Prospects" (50 rows).
                    <br /><br />
                    <span className="text-indigo-400 font-bold">Step 1 (Enrich):</span> Scan website/LinkedIn &rarr; Extract Decision Maker + Tech Stack.
                    <br />
                    <span className="text-indigo-400 font-bold">Step 2 (Draft):</span> Filter recent news. Write personalized intro + 3 follow-ups.
                    <br />
                    <span className="text-indigo-400 font-bold">Step 3 (Create):</span> Generate custom proposal PDF w/ Nano Banana visuals.
                    <br />
                    <span className="text-indigo-400 font-bold">Step 4 (Execute):</span> Send first 5 (manual approval) &rarr; Log to CRM.
                </>
            )
        }
    },
    {
        badge: {
            icon: Mail,
            label: "Sales Ops",
            colorClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
            iconColor: "text-purple-400"
        },
        impact: { icon: CheckCircle2, label: "Zero Inbox", color: "text-emerald-400" },
        title: <>Daily Sales Inbox <br /> & Pipeline Sync</>,
        description: "Turns your Gmail into an autonomous sales engine. Processes inbound emails, drafts replies, updates CRM deals, and sets follow-up tasks—preventing missed opportunities.",
        stats: [
            { label: "Time Saved", value: "10-15h", sub: "/wk" },
            { label: "Missed Leads", value: "0%" }
        ],
        stack: [
            { icon: Mail, label: "Gmail", color: "text-red-400" },
            { icon: Database, label: "CRM", color: "text-blue-500" },
            { icon: FileText, label: "Docs", color: "text-blue-400" },
            { icon: CheckSquare, label: "Tasks", color: "text-indigo-400" },
            { icon: Send, label: "Telegram", color: "text-blue-400" }
        ],
        terminal: {
            fileName: "inbox_processor.py",
            status: "Syncing thread #842: 'Enterprise Pricing Inquiry'...",
            content: (
                <>
                    <span className="text-purple-400 font-bold"># Inbox Sync Protocol</span>
                    <br />
                    Scanning label: "Sales/Inbound".
                    <br /><br />
                    <span className="text-emerald-400 font-bold">1. Classify:</span> Email classified as <span className="text-white bg-green-500/20 px-1 rounded">High_Value_Opportunity</span>.
                    <br />
                    <span className="text-emerald-400 font-bold">2. Sync CRM:</span> Created Deal "Acme Corp" ($50k). Logged sentiment: Positive.
                    <br />
                    <span className="text-emerald-400 font-bold">3. Action:</span> Drafted reply w/ "Enterprise_Deck.pdf" attached.
                    <br />
                    <span className="text-emerald-400 font-bold">4. Alert:</span> Sent Telegram notification to @founder.
                </>
            )
        }
    },
    {
        badge: {
            icon: Search,
            label: "Recruiter",
            colorClass: "bg-pink-500/10 text-pink-400 border-pink-500/20",
            iconColor: "text-pink-400"
        },
        impact: { icon: Zap, label: "3-5x Faster", color: "text-indigo-400" },
        title: <>Full Recruitment <br /> Pipeline Build</>,
        description: "Takes a job req and builds a complete candidate pipeline. Sources talent, personalizes outreach, schedules screens, and tracks progress automatically.",
        stats: [
            { label: "Sourcing Speed", value: "3-5x" },
            { label: "Candidates", value: "Auto-Qualify" }
        ],
        stack: [
            { icon: FileSpreadsheet, label: "Sheets", color: "text-emerald-400" },
            { icon: Globe, label: "Search", color: "text-orange-400" },
            { icon: Mail, label: "Gmail", color: "text-red-400" },
            { icon: Calendar, label: "Cal", color: "text-yellow-400" },
            { icon: Database, label: "CRM", color: "text-blue-500" },
            { icon: FileText, label: "Docs", color: "text-blue-400" }
        ],
        terminal: {
            fileName: "talent_scout.js",
            status: "Sourcing candidates for 'Senior React Engineer'...",
            content: (
                <>
                    <span className="text-pink-400 font-bold"># Job Req: Engineer</span>
                    <br />
                    Source from: "Talent Targets" + Web Search.
                    <br /><br />
                    <span className="text-indigo-400 font-bold">1. Source:</span> Found 12 matches. Evaluating signals (GitHub, LinkedIn).
                    <br />
                    <span className="text-indigo-400 font-bold">2. Enrich:</span> Candidate #3 "Alex M." &rarr; High match (Top 5%).
                    <br />
                    <span className="text-indigo-400 font-bold">3. Outreach:</span> Drafted email focusing on "Auxio's AI Stack".
                    <br />
                    <span className="text-indigo-400 font-bold">4. Manage:</span> Invite sent &rarr; CRM updated to "Interview Scheduled".
                </>
            )
        }
    }
];

const PlaybookCard = ({ data }: { data: Playbook }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card relative overflow-hidden group"
        >
            {/* Background Gradient Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="grid lg:grid-cols-2 gap-0 relative z-10">
                {/* Left Column: Context & Details */}
                <div className="p-6 md:p-12 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-white/5">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <span className={`border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${data.badge.colorClass}`}>
                                <data.badge.icon size={12} />
                                {data.badge.label}
                            </span>
                            <span className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${data.impact.color}`}>
                                <data.impact.icon size={12} />
                                {data.impact.label}
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-balance">
                            {data.title}
                        </h3>

                        <p className="text-[#8a8a8a] text-lg leading-relaxed mb-8">
                            {data.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {data.stats.map((stat, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="text-secondary text-xs uppercase font-bold tracking-wider mb-1">{stat.label}</div>
                                    <div className="text-2xl font-bold text-white">
                                        {stat.value}
                                        {stat.sub && <span className="text-sm text-secondary font-medium"> {stat.sub}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-xs font-bold uppercase tracking-widest text-[#555] mb-2">Integrated Stack</div>
                        <div className="flex flex-wrap gap-3">
                            {data.stack.map((tech, i) => (
                                <TechBadge key={i} icon={tech.icon} label={tech.label} color={tech.color} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: The "Engine" (Visual) */}
                <div className="bg-black/40 p-6 md:p-12 flex flex-col h-full relative overflow-hidden">
                    {/* Decorative Grid Background */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-sm font-bold text-white/90 flex items-center gap-2">
                                <Terminal size={16} className="text-indigo-400" />
                                Agent Workflow
                            </h4>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                            </div>
                        </div>

                        {/* Terminal / Prompt View */}
                        <div className="bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex-1 flex flex-col">
                            {/* Editor Tabs */}
                            <div className="flex items-center border-b border-white/5 bg-white/[0.02] px-4 py-2 gap-4">
                                <div className="text-[10px] font-medium text-indigo-300 border-b border-indigo-400 pb-2 -mb-2.5">{data.terminal.fileName}</div>
                                <div className="text-[10px] font-medium text-gray-600">output_log.txt</div>
                            </div>

                            {/* Prompt Content */}
                            <div className="p-6 font-mono text-xs md:text-sm text-gray-300 leading-loose flex-1 overflow-y-auto custom-scrollbar">
                                {data.terminal.content}
                            </div>

                            {/* Simulation of "Running" state */}
                            <div className="border-t border-white/10 bg-white/[0.02] p-4">
                                <div className="flex items-center gap-3">
                                    <div className="animate-spin w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full" />
                                    <div className="text-[10px] font-mono text-indigo-300">
                                        {data.terminal.status}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-indigo-600 px-6 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:w-full w-auto">
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/20" />
                                </div>
                                <span className="mr-2">Run Playbook</span>
                                <Play size={16} fill="currentColor" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const TechBadge = ({ icon: Icon, label, color }: { icon: any, label: string, color: string }) => (
    <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] px-3 py-2 rounded-lg hover:bg-white/[0.06] transition-colors cursor-default">
        <Icon size={14} className={color} />
        <span className="text-xs font-medium text-gray-300">{label}</span>
    </div>
);

export default function Playbooks() {
    return (
        <section className="min-h-screen py-24 md:py-32 px-4 md:px-6 relative bg-black selection:bg-indigo-500/30">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/80">Library Updated Today</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] sm:leading-[1.05]"
                    >
                        Fully Autonomous <br />
                        <span className="text-[#8a8a8a]">Cloud Agents.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#8a8a8a] text-lg md:text-xl leading-relaxed"
                    >
                        Deploy AI that runs 24/7 in the cloud. Choose a playbook,
                        connect your tools, and let your agent execute the work autonomously.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {PLAYBOOKS.map((playbook, i) => (
                        <PlaybookCard key={i} data={playbook} />
                    ))}
                </div>
            </div>
        </section>
    );
}
