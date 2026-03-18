"use client";

import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, ShieldCheck, FileText, ChevronRight } from "lucide-react";

interface LegalLayoutProps {
    children: ReactNode;
    title: string;
    lastUpdated: string;
}

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
    const pathname = usePathname();

    const links = [
        { href: "/legal/privacy", label: "Privacy Policy", icon: ShieldCheck },
        { href: "/legal/terms", label: "Terms of Service", icon: Scale },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="sticky top-32">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">
                                    Legal Center
                                </h3>
                                <nav className="space-y-2">
                                    {links.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${isActive
                                                    ? "bg-stone-900 text-white shadow-lg"
                                                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <link.icon size={16} className={isActive ? "text-primary" : "text-stone-400"} />
                                                    {link.label}
                                                </div>
                                                {isActive && <ChevronRight size={14} className="text-primary" />}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                <div className="mt-8 p-6 bg-stone-100 rounded-2xl border border-stone-200">
                                    <h4 className="font-bold text-stone-900 text-sm mb-2">Legal Inquiries</h4>
                                    <p className="text-xs text-stone-500 mb-4">
                                        For official notices or rigorous compliance audits.
                                    </p>
                                    <a href="mailto:hello@whizcrow.com" className="text-xs font-bold text-primary hover:underline">
                                        hello@whizcrow.com
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Content */}
                        <article className="lg:col-span-8 lg:col-start-5">
                            <div className="mb-12 border-b border-stone-200 pb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">{title}</h1>
                                <p className="text-stone-500 text-sm font-mono">
                                    Last Updated: <span className="text-stone-900">{lastUpdated}</span> | Jurisdiction: <span className="text-stone-900">Mumbai, India</span>
                                </p>
                            </div>

                            <div className="prose prose-stone prose-lg max-w-none prose-headings:font-bold prose-headings:text-stone-900 prose-p:text-stone-600 prose-a:text-primary prose-li:text-stone-600">
                                {children}
                            </div>
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
