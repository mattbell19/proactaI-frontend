import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center space-x-2.5">
                    <img src="/icon-white.png" alt="Auxio" className="w-6 h-6" />
                    <span className="font-bold tracking-tight">Auxio</span>
                </div>
                <div className="flex space-x-8 text-sm font-medium text-[#8a8a8a]">
                    {['Privacy', 'Terms', 'Security'].map(link => (
                        <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                    ))}
                    <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
                </div>
                <div className="text-sm text-[#555]">© 2024 Auxio Labs Inc.</div>
            </div>
        </footer>
    );
}
