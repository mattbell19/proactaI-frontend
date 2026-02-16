import { Metadata } from 'next';
import InvestorsClient from './InvestorsClient';

export const metadata: Metadata = {
    title: "Investors — Join the AI Workforce Revolution",
    description:
        "Auxio is building the future of autonomous work. Register your interest to invest in the platform powering AI employees for modern businesses.",
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: "Investors — Join the AI Workforce Revolution | Auxio",
        description:
            "Auxio is building the future of autonomous work. Register your interest to invest.",
        url: "/investors",
    },
};

export default function InvestorsPage() {
    return <InvestorsClient />;
}
