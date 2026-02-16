import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: "Pricing — Simple, Transparent Plans",
    description:
        "Start with a free trial. Upgrade to Auxio Pro for unlimited AI agents, integrations, and autonomous workflows. No hidden fees.",
    openGraph: {
        title: "Pricing — Simple, Transparent Plans | Auxio",
        description:
            "Start with a free trial. Upgrade to Auxio Pro for unlimited AI agents, integrations, and autonomous workflows. No hidden fees.",
        url: "/pricing",
    },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20"> {/* Padding for fixed navbar */}
                <Pricing />
            </div>
            <Footer />
        </main>
    );
}
