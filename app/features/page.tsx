import { Metadata } from 'next';
import Features from '@/components/Features';

export const metadata: Metadata = {
    title: "Features — Autonomous AI Tools for Every Team",
    description:
        "Explore Auxio's AI-powered features: autonomous docs, AI CRM, smart project boards, and instant cloud deployment. Built for scale, security, and speed.",
    openGraph: {
        title: "Features — Autonomous AI Tools for Every Team | Auxio",
        description:
            "Explore Auxio's AI-powered features: autonomous docs, AI CRM, smart project boards, and instant cloud deployment.",
        url: "/features",
    },
};

export default function FeaturesPage() {
    return <Features />;
}
