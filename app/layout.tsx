import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrackingProvider } from "@/components/tracking";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://auxio.co";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Auxio | Autonomous AI Agents for Business",
        template: "%s | Auxio",
    },
    description:
        "Deploy fully autonomous AI agents that run 24/7 in the cloud. Automate sales, finance, recruitment, and operations — no code required.",
    keywords: [
        "AI agents",
        "autonomous AI",
        "business automation",
        "AI employees",
        "cloud agents",
        "sales automation",
        "CRM automation",
        "AI recruitment",
        "workflow automation",
        "Auxio",
    ],
    authors: [{ name: "Auxio Labs" }],
    creator: "Auxio Labs",
    publisher: "Auxio Labs",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: "Auxio",
        title: "Auxio | Autonomous AI Agents for Business",
        description:
            "Deploy fully autonomous AI agents that run 24/7 in the cloud. Automate sales, finance, recruitment, and operations — no code required.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Auxio — Autonomous AI Agents",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Auxio | Autonomous AI Agents for Business",
        description:
            "Deploy fully autonomous AI agents that run 24/7 in the cloud. Automate sales, finance, recruitment, and operations.",
        images: ["/og-image.png"],
    },
    manifest: "/site.webmanifest",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Auxio",
    },
    other: {
        "msapplication-TileColor": "#0a0a0a",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    name: "Auxio",
                                    url: "https://auxio.co",
                                    logo: "https://auxio.co/icon-white.png",
                                    description:
                                        "Deploy fully autonomous AI agents that run 24/7 in the cloud. Automate sales, finance, recruitment, and operations.",
                                    sameAs: [],
                                },
                                {
                                    "@type": "WebSite",
                                    name: "Auxio",
                                    url: "https://auxio.co",
                                    potentialAction: {
                                        "@type": "SearchAction",
                                        target: "https://auxio.co/?q={search_term_string}",
                                        "query-input": "required name=search_term_string",
                                    },
                                },
                                {
                                    "@type": "SoftwareApplication",
                                    name: "Auxio",
                                    applicationCategory: "BusinessApplication",
                                    operatingSystem: "Web",
                                    offers: {
                                        "@type": "Offer",
                                        price: "0",
                                        priceCurrency: "USD",
                                    },
                                },
                            ],
                        }),
                    }}
                />
            </head>
            <body className={inter.className}>
                <TrackingProvider>
                    <div className="grain"></div>
                    {children}
                </TrackingProvider>
            </body>
        </html>
    );
}
