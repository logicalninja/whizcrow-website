import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { DownloadForm } from "@/components/resources/DownloadForm";
import { ShieldAlert, Database, Lock, Eye } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Ten Commandments of Trust & Safety | WhizCrow",
    description: "Download our executive briefing on reputation management in the age of AI. Protect against deepfakes and knowledge graph manipulation.",
};

export default function TenCommandmentsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd type="DigitalDocument" data={{
                name: "The Ten Commandments of Trust & Safety in the Age of AI",
                description: "Executive briefing on reputation management in the age of AI. Protect against deepfakes and knowledge graph manipulation.",
                url: "https://whizcrow.com/resources/ten-commandments"
            }} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://whizcrow.com/blog" },
                    { "@type": "ListItem", "position": 3, "name": "Ten Commandments", "item": "https://whizcrow.com/resources/ten-commandments" }
                ]
            }} />
            <Header />

            <main className="flex-grow pt-24 pb-20">
                {/* Hero */}
                <div className="bg-slate-900/50 border-b border-white/5 py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm font-medium mb-6">
                                    <ShieldAlert size={14} />
                                    <span>Executive Briefing</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    The Ten Commandments of <br />
                                    <span className="text-primary">Trust & Safety in the Age of AI</span>
                                </h1>
                                <p className="text-lg text-slate-400 mb-8 max-w-xl">
                                    AI hallucinations, deepfakes, and knowledge graph manipulation are the new threats to enterprise value.
                                    Traditional ORM is dead. Here is the new rulebook.
                                </p>

                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> 12-Page PDF</span>
                                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Instant Access</span>
                                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Written by WhizCrow Research</span>
                                </div>
                            </div>

                            <div>
                                <DownloadForm />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Preview */}
                <div className="container mx-auto px-4 py-20">
                    <h2 className="text-2xl font-bold text-white mb-12 text-center">Inside the Guide</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl border border-white/10 bg-card hover:bg-slate-800/50 transition-colors">
                            <Database className="text-blue-500 mb-4" size={24} />
                            <h3 className="text-white font-bold mb-2">Commandment II: Own the Graph</h3>
                            <p className="text-sm text-slate-400">
                                Why your Google Knowledge Graph is more important than your website, and how AI agents use it to judge your brand.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-card hover:bg-slate-800/50 transition-colors">
                            <Lock className="text-blue-500 mb-4" size={24} />
                            <h3 className="text-white font-bold mb-2">Commandment V: Verification</h3>
                            <p className="text-sm text-slate-400">
                                The "Blue Check" is no longer enough. Implementing cryptographic proof of authorship for all executive communications.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-card hover:bg-slate-800/50 transition-colors">
                            <Eye className="text-blue-500 mb-4" size={24} />
                            <h3 className="text-white font-bold mb-2">Commandment VII: The Human Loop</h3>
                            <p className="text-sm text-slate-400">
                                Scaling monitoring with AI, but governing with humans. Why pure-AI monitoring misses 40% of contextual nuance.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
