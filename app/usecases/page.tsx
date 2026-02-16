import { Metadata } from 'next';
import Usecases from '@/components/Usecases';

export const metadata: Metadata = {
    title: "Use Cases — How Teams Use Auxio",
    description:
        "See how sales, finance, HR, and operations teams use Auxio's autonomous AI agents to automate complex workflows and save 15+ hours per week.",
    openGraph: {
        title: "Use Cases — How Teams Use Auxio",
        description:
            "See how sales, finance, HR, and operations teams use Auxio's autonomous AI agents to automate complex workflows.",
        url: "/usecases",
    },
};

export default function UsecasesPage() {
    return <Usecases />;
}
