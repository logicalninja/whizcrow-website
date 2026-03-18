import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";
import { Map, ChevronRight, FileText, Shield, Briefcase, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap | WhizCrow Platform Architecture",
    description: "Complete index of WhizCrow's digital footprint, service ecosystem, and institutional intelligence resources.",
};

const sitemapData = [
    {
        category: "Core Platform",
        icon: <Map className="text-primary" />,
        links: [
            { label: "Home", href: "/" },
            { label: "About WhizCrow", href: "/about" },
            { label: "The WhizBRAM™ Framework", href: "/whizbram" },
            { label: "Reputation ROI Calculator", href: "/calculator" },
            { label: "Book Reputation Audit", href: "/book" },
            { label: "Institutional Contact", href: "/contact" },
        ]
    },
    {
        category: "Services Ecosystem",
        icon: <Briefcase className="text-orange-500" />,
        links: [
            { label: "Services Overview", href: "/services" },
            { label: "Search Engineering", href: "/services#search" },
            { label: "Crisis Response", href: "/services#crisis" },
            { label: "Wiki Management", href: "/services#wiki" },
            { label: "Review Management", href: "/services#reviews" },
        ]
    },
    {
        category: "Resources & Insights",
        icon: <Zap className="text-purple-500" />,
        links: [
            { label: "Insights Hub", href: "/insights" },
            { label: "Technical FAQs", href: "/#faq" },
        ]
    },
    {
        category: "Legal & Compliance",
        icon: <Shield className="text-emerald-500" />,
        links: [
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Terms of Service", href: "/legal/terms" },
            { label: "Sitemap", href: "/sitemap" },
        ]
    }
];

export default function Sitemap() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <JsonLd type="WebPage" data={{
                name: "Sitemap | WhizCrow Index",
                description: "Complete index of WhizCrow's digital footprint and service architecture."
            }} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Sitemap", "item": "https://whizcrow.com/site-map" }
                ]
            }} />
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-4">Sitemap</h1>
                        <p className="text-stone-500 text-lg">Architecture of the WhizCrow ecosystem.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {sitemapData.map((section, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-stone-100">
                                    <div className="p-3 bg-stone-50 rounded-xl">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-900">{section.category}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link href={link.href} className="flex items-center justify-between group p-2 rounded-lg hover:bg-stone-50 transition-colors">
                                                <span className="text-stone-600 font-medium group-hover:text-stone-900 transition-colors">
                                                    {link.label}
                                                </span>
                                                <ChevronRight size={16} className="text-stone-300 group-hover:text-primary transition-colors" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
