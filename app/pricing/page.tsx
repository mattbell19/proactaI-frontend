import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <Pricing />
            </div>
            <Footer />
        </main>
    );
}
