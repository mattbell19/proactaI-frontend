import Navbar from '@/components/Navbar';
import Playbooks from '@/components/Playbooks';
import Footer from '@/components/Footer';

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
