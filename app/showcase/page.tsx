import { Metadata } from 'next';
import ShowcasePage from './ShowcaseClient';

export const metadata: Metadata = {
    title: "Showcase — Product Demo",
    description:
        "Explore the Auxio product dashboard. See how autonomous AI agents manage CRM, documents, tasks, and more in a unified workspace.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function Page() {
    return <ShowcasePage />;
}
