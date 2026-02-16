import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Playbooks from '@/components/Playbooks';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: "Playbooks — Autonomous Cloud Agent Workflows",
    description:
        "Browse ready-to-deploy AI agent playbooks for sales, finance, recruitment, and operations. Launch fully autonomous workflows with one click.",
    openGraph: {
        title: "Playbooks — Autonomous Cloud Agent Workflows | Auxio",
        description:
            "Browse ready-to-deploy AI agent playbooks for sales, finance, recruitment, and operations. Launch fully autonomous workflows with one click.",
        url: "/playbooks",
    },
};

export default function PlaybooksPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <div className="pt-10">
                <Playbooks />
            </div>
            <Footer />
        </main>
    );
}
