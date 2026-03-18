"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import IntelligenceCard from "@/components/blog/IntelligenceCard";
import { articles } from "@/lib/articles";
import { motion } from "framer-motion";
import JsonLd from "@/components/seo/JsonLd";

export default function IntelligenceClient() {
    const [activeCategory, setActiveCategory] = useState('All Intelligence');

    // Get unique categories from articles
    const categories = ['All Intelligence', ...Array.from(new Set(articles.map(a => a.category)))];

    const filteredArticles = activeCategory === 'All Intelligence'
        ? articles
        : articles.filter(article => article.category === activeCategory);

    const featuredArticle = filteredArticles[0];
    const recentArticles = filteredArticles.slice(1);

    return (
        <main className="min-h-screen bg-stone-50 text-stone-900">
            <JsonLd type="CollectionPage" data={{
                name: "WhizCrow Strategic Intelligence Unit",
                description: "Decoding the algorithms that define reputation. Case studies, frameworks, and technical briefings.",
                items: articles
            }} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://whizcrow.com/insights" }
                ]
            }} />
            <Header />

            {/* Hero Header */}
            <section className="pt-32 md:pt-36 pb-8 md:pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--brand-purple)]/5 rounded-full blur-[150px]" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-3 py-1 bg-white rounded-full text-[#9333EA] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 border border-stone-200 shadow-sm"
                    >
                        WhizCrow Intelligence Unit
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 md:mb-6 text-stone-900 leading-[1.1]"
                    >
                        Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-purple-800">Intelligence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-medium px-4 md:px-0"
                    >
                        Decoding the algorithms that define reputation.
                    </motion.p>
                </div>

                {/* Filters - Sticky & Horizontal on Mobile */}
                <div className="sticky top-20 z-30 bg-stone-50/80 backdrop-blur-md border-y border-stone-200/50 py-4 mb-10">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-center overflow-x-auto no-scrollbar gap-2 md:gap-4 justify-start">
                            {categories.map((filter, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveCategory(filter)}
                                    className={`px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${activeCategory === filter
                                        ? 'bg-[#9333EA] text-white shadow-lg shadow-purple-500/20'
                                        : 'bg-white text-stone-600 border border-stone-200 hover:border-[#9333EA]/50 hover:text-[#9333EA]'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">

                    {/* Featured Article */}
                    {featuredArticle && (
                        <motion.div
                            key={featuredArticle.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-16"
                        >
                            <IntelligenceCard article={featuredArticle} featured={true} />
                        </motion.div>
                    )}

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentArticles.map((article, i) => (
                            <motion.div
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <IntelligenceCard article={article} />
                            </motion.div>
                        ))}

                        {/* Placeholder for "More coming soon" or filled slots */}
                        <div className="group relative flex flex-col h-full bg-white border border-stone-200 rounded-[2.5rem] items-center justify-center p-8 text-center min-h-[400px]">
                            <div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-300 mb-4 group-hover:bg-purple-600/20 group-hover:text-purple-600 transition-all">
                                <span className="text-2xl">+</span>
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-2 font-display">Access Archives</h3>
                            <p className="text-sm text-stone-500 mb-6 font-medium italic">Unlock our full database of 40+ case studies and whitepapers.</p>
                            <Link
                                href="/contact"
                                className="px-6 py-2 bg-stone-900 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-purple-600 hover:text-white transition-all inline-block"
                            >
                                Contact for Access
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
