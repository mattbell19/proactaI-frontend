
import React from 'react';
import Link from 'next/link';
import {
    Zap,
    Heart,
    ArrowRight,
    Sparkles,
    Search,
    MessageSquare,
    Globe,
    Plus,
    ArrowLeft
} from 'lucide-react';

interface UseCase {
    handle: string;
    avatar: string;
    tag: string;
    likes: number;
    tasks: string[];
}

const ALL_USE_CASES: UseCase[] = [
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
            "Generate a pdf summary of car conversations"
        ]
    },
    {
        handle: "@danpeguine",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dan",
        tag: "Productivity",
        likes: 257,
        tasks: [
            "Timeblocks tasks in my calendar based on importance",
            "Scores tasks importance and urgency based on algorithm",
            "Leads me through a weekly review based on meeting notes",
            "Gives a morning daily brief: weather, objectives, health",
            "Researches big projects and breaks them down to tasks",
            "Researches people before meetings & creates briefing docs"
        ]
    },
    {
        handle: "@sergey_brin",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sergey",
        tag: "Research",
        likes: 198,
        tasks: [
            "Aggregates news from 50+ sources daily",
            "Filters out biased reporting using cross-reference algorithms",
            "Summarizes research papers into actionable insights",
            "Monitors competitors' patent filings in real-time",
            "Automatically updates internal wiki pages with new data"
        ]
    },
    {
        handle: "@sarah_sales",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
        tag: "Sales",
        likes: 312,
        tasks: [
            "Scrapes LinkedIn for high-intent target accounts",
            "Writes hyper-personalized cold emails using intent data",
            "Handles initial objections and books demos directly",
            "Updates Salesforce with every interaction & sentiment",
            "Monitors news for 'trigger events' to send follow-ups"
        ]
    },
    {
        handle: "@kevin_ops",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=kevin",
        tag: "Operations",
        likes: 145,
        tasks: [
            "Monitors inventory levels across 3 warehouses",
            "Automatically generates purchase orders when stock is low",
            "Routes delivery drivers based on real-time traffic",
            "Reconciles invoices against shipping manifests",
            "Drafts status reports for the logistics director"
        ]
    },
    {
        handle: "@maya_dev",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya",
        tag: "Engineering",
        likes: 423,
        tasks: [
            "Reviews PRs for architectural consistency & security",
            "Writes unit tests for every new function automatically",
            "Monitors Sentry for crashes and proposes immediate fixes",
            "Maintains documentation as the codebase evolves",
            "Optimizes SQL queries based on production slow logs"
        ]
    },
    {
        handle: "@leo_legal",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=leo",
        tag: "Legal",
        likes: 189,
        tasks: [
            "Reviews NDAs for non-standard indemnity clauses",
            "Summarizes 500+ page contracts into 1-page summaries",
            "Tracks regulatory changes across 15 jurisdictions",
            "Automates initial trademark searches & filings",
            "Redacts sensitive PII from discovery documents"
        ]
    },
    {
        handle: "@clara_support",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=clara",
        tag: "Support",
        likes: 288,
        tasks: [
            "Resolves 80% of Tier 1 tickets instantly via Intercom",
            "Drafts complex troubleshooting guides for Tier 2",
            "Identifies trending product bugs from user feedback",
            "Translates support tickets from 12 languages on the fly",
            "Sends proactive check-ins to at-risk accounts"
        ]
    },
    {
        handle: "@ethan_finance",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ethan",
        tag: "Finance",
        likes: 167,
        tasks: [
            "Drafts monthly burn reports and runway projections",
            "Categorizes expenses for tax compliance automatically",
            "Monitors crypto wallet balances & gas prices",
            "Flags suspicious transactions for manual review",
            "Automates payroll processing and tax withholding"
        ]
    },
    {
        handle: "@sofia_mktg",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofia",
        tag: "Marketing",
        likes: 512,
        tasks: [
            "Generates 30 days of social content in 5 minutes",
            "Monitors X for mentions and drafts replies",
            "Performs A/B test analysis on landing page variants",
            "Finds relevant niche influencers for brand partnerships",
            "Writes SEO-optimized blog posts based on keyword gaps"
        ]
    },
    {
        handle: "@jack_talent",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jack",
        tag: "Recruiting",
        likes: 231,
        tasks: [
            "Screens resumes against complex technical requirements",
            "Conducts initial technical screenings via text/chat",
            "Coordinates interviews across 10 different timezones",
            "Writes personalized offer letters that close candidates",
            "Maintains the talent pipeline & candidate CRM"
        ]
    },
    {
        handle: "@zoe_data",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zoe",
        tag: "Analytics",
        likes: 342,
        tasks: [
            "Monitors KPIs and alerts team on significant drops",
            "Builds custom dashboards from raw SQL data",
            "Writes Python scripts to clean messy CSV exports",
            "Performs cohort analysis to track long-term retention",
            "Drafts executive summaries for weekly board meetings"
        ]
    }
];

const UseCaseCard = ({ uc }: { uc: UseCase }) => (
    <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-[20px] sm:rounded-[32px] p-5 sm:p-8 flex flex-col space-y-4 sm:space-y-6 hover:border-white/20 transition-all group">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/10 group-hover:scale-110 transition-transform">
                    <img src={uc.avatar} alt={uc.handle} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <span className="text-red-400 font-bold text-base sm:text-lg">{uc.handle}</span>
                    <div className="flex items-center gap-2 text-[#555] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
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
            <p className="text-white/40 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-3 sm:mb-4">Active Tasks:</p>
            <ul className="space-y-2 sm:space-y-3">
                {uc.tasks.map((task, ti) => (
                    <li key={ti} className="flex items-start gap-2 sm:gap-3 text-[#8a8a8a] text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                        <span className="text-white/20 mt-1 sm:mt-1.5 shrink-0">•</span>
                        <span>{task}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Usecases = () => {
    return (
        <div className="min-h-screen bg-[#030303] text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/[0.05] px-4 sm:px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 sm:space-x-2.5 group">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-black rounded-sm"></div>
                        </div>
                        <span className="font-bold text-lg sm:text-xl tracking-tight text-white">ProactAI</span>
                    </Link>
                    <div className="flex items-center space-x-2 sm:space-x-6">
                        <Link href="/" className="text-xs sm:text-sm font-medium text-[#8a8a8a] hover:text-white flex items-center gap-1.5 sm:gap-2 hidden sm:flex">
                            <ArrowLeft size={16} />
                            <span>Go Back</span>
                        </Link>
                        <a href="https://clawbot-fi5p.onrender.com/signup" className="btn-primary text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5">Hire your first AI</a>
                    </div>
                </div>
            </nav>

            <main className="pt-28 sm:pt-40 pb-16 sm:pb-32 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-12 sm:mb-24 space-y-4 sm:space-y-6">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded-full">
                            <Zap size={12} className="text-yellow-500" />
                            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-white/60">Community Recipes</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight">
                            1,000+ ways to <br className="hidden sm:block" /><span className="text-[#8a8a8a]">automate.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-[#8a8a8a] max-w-2xl mx-auto font-medium leading-relaxed px-2">
                            Explore how builders, founders, and teams are using ProactAI to replace expensive headcount with autonomous agents.
                        </p>
                    </div>

                    {/* Grid of Use Cases */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {ALL_USE_CASES.map((uc, i) => (
                            <div key={i}>
                                <UseCaseCard uc={uc} />
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 sm:mt-32 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-[24px] sm:rounded-[40px] blur opacity-25"></div>
                        <div className="relative bg-[#0d0d0d] border border-white/[0.08] rounded-[20px] sm:rounded-[32px] p-6 sm:p-12 text-center space-y-6 sm:space-y-8">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">Have a unique use case?</h2>
                            <p className="text-[#8a8a8a] text-sm sm:text-lg max-w-xl mx-auto">
                                Our SDK allows you to build custom agents for any task, connected to any API in your stack.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <button className="btn-primary px-8 sm:px-10 py-3 sm:py-4 flex items-center gap-2 w-full sm:w-auto justify-center">
                                    <Plus size={18} />
                                    <span>Create Custom Agent</span>
                                </button>
                                <button className="btn-secondary px-8 sm:px-10 py-3 sm:py-4 w-full sm:w-auto">Read Documentation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-10 sm:py-20 px-4 sm:px-6 border-t border-white/[0.05]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-10">
                    <div className="flex items-center space-x-2.5">
                        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                            <div className="w-3 h-3 bg-black rounded-sm"></div>
                        </div>
                        <span className="font-bold tracking-tight">ProactAI</span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#555] text-center">© 2024 Proact Labs Inc. Verified Autonomous Platform.</div>
                </div>
            </footer>
        </div>
    );
};

export default Usecases;
