import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrackingProvider } from "@/components/tracking";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Auxio | The Future of Autonomous Work",
    description: "The world's first platform for high-performance AI employees.",
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
            <body className={inter.className}>
                <TrackingProvider>
                    <div className="grain"></div>
                    {children}
                </TrackingProvider>
            </body>
        </html>
    );
}
