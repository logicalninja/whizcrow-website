"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import IntelligenceCard from "@/components/blog/IntelligenceCard";
import { motion, AnimatePresence } from "framer-motion";
import { BlogSearch, BlogNewsletter, RSSLink, StrategicCTA } from "@/components/blog/BlogComponents";

export default function IntelligencePageContent({ articles }: { articles: any[] }) {
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const [activeCategory, setActiveCategory] = useState('All Intelligence');

    // Get unique categories from original articles
    const categories = ['All Intelligence', ...Array.from(new Set(articles.map(a => a.category)))];

    const handleSearch = (filtered: any[]) => {
        if (activeCategory === 'All Intelligence') {
            setFilteredArticles(filtered);
        } else {
            setFilteredArticles(filtered.filter(a => a.category === activeCategory));
        }
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        if (category === 'All Intelligence') {
            setFilteredArticles(articles);
        } else {
            setFilteredArticles(articles.filter(a => a.category === category));
        }
    };

    const featuredArticle = filteredArticles[0];
    const remainingArticles = filteredArticles.slice(1);

    return (
        <main className="min-h-screen bg-stone-50 text-stone-900 selection:bg-purple-100 selection:text-purple-900">
            <JsonLd type="CollectionPage" data={{
                name: "WhizCrow Strategic Intelligence Unit",
                description: "Decoding the algorithms that define reputation. Case studies, frameworks, and technical briefings.",
                items: articles
            }} />
            <Header />

            {/* Hero Header */}
            <section className="pt-32 md:pt-40 pb-12 md:pb-20 relative overflow-hidden border-b border-stone-200">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <span className="w-12 h-px bg-purple-600" />
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-purple-600">
                                    Strategic Intelligence Unit
                                </span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-8xl font-display font-bold text-stone-900 leading-[0.9] tracking-tighter mb-8"
                            >
                                The <span className="italic font-serif font-light text-stone-400 block md:inline">Intelligence</span> Report
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl text-stone-500 max-w-xl font-medium leading-relaxed"
                            >
                                Technical briefings on algorithmic warfare, reputation dominance, and digital authority.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-start md:items-end gap-6"
                        >
                            <RSSLink />
                            <BlogSearch articles={articles} onSearch={handleSearch} />
                        </motion.div>
                    </div>

                    {/* Categories UI */}
                    <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${activeCategory === cat
                                    ? 'bg-stone-900 border-stone-900 text-white'
                                    : 'bg-white border-stone-200 text-stone-400 hover:border-purple-600/30 hover:text-purple-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    {featuredArticle ? (
                        <div className="mb-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <IntelligenceCard article={featuredArticle} featured={true} />
                            </motion.div>
                        </div>
                    ) : (
                        <div className="py-20 text-center border-4 border-dashed border-stone-200 rounded-[3rem]">
                            <p className="text-stone-400 font-display font-bold text-2xl">No briefings found for this sector.</p>
                        </div>
                    )}

                    {/* Secondary Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
                        <div className="lg:col-span-2 flex flex-col gap-12">
                            <AnimatePresence mode="popLayout">
                                {remainingArticles.map((article, i) => (
                                    <motion.div
                                        key={article.slug}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <IntelligenceCard article={article} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Sidebar */}
                        <aside className="flex flex-col gap-8">
                            <StrategicCTA
                                title="Audit Your Alpha"
                                description="Run our proprietary algorithmic audit on your current digital footprint."
                                href="/contact"
                            />
                            <div className="bg-stone-100 p-8 rounded-[2rem] border border-stone-200">
                                <h4 className="text-xl font-display font-bold text-stone-900 mb-4 uppercase tracking-tight">Archives Control</h4>
                                <p className="text-sm text-stone-500 mb-6 font-medium">Access our full vault of historical whitepapers and post-incident reports.</p>
                                <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-purple-600 hover:text-purple-700 flex items-center gap-2">
                                    Request Vault Access <ArrowRight size={14} />
                                </Link>
                            </div>
                        </aside>
                    </div>

                    <BlogNewsletter />
                </div>
            </section>

            <Footer />
        </main>
    );
}
