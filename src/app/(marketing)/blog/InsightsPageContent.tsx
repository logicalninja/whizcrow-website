"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";
import { ArrowRight, Search, Clock, Tag, TrendingUp, BookOpen } from "lucide-react";
import IntelligenceCard from "@/components/blog/InsightCard";
import { motion, AnimatePresence } from "framer-motion";
import { BlogNewsletter } from "@/components/blog/BlogComponents";

// ── Category colour system ────────────────────────────────────────────────────
const CATEGORY_COLOURS: Record<string, string> = {
    "AI & Technology":        "bg-violet-100 text-violet-700 border-violet-200",
    "SEO & Search":           "bg-blue-100 text-blue-700 border-blue-200",
    "Social Media":           "bg-pink-100 text-pink-700 border-pink-200",
    "Web3 & Emerging Tech":   "bg-amber-100 text-amber-700 border-amber-200",
    "Data & Privacy":         "bg-teal-100 text-teal-700 border-teal-200",
    "Campaigns & Channels":   "bg-orange-100 text-orange-700 border-orange-200",
    "Influencer & Creator":   "bg-rose-100 text-rose-700 border-rose-200",
    "Branding & Strategy":    "bg-indigo-100 text-indigo-700 border-indigo-200",
    "Retail & Commerce":      "bg-lime-100 text-lime-700 border-lime-200",
    "AR, VR & Immersive":     "bg-cyan-100 text-cyan-700 border-cyan-200",
    "Analytics & Attribution":"bg-emerald-100 text-emerald-700 border-emerald-200",
    "Marketing Automation":   "bg-purple-100 text-purple-700 border-purple-200",
    "Content Strategy":       "bg-yellow-100 text-yellow-700 border-yellow-200",
    "Sustainability & Ethics":"bg-green-100 text-green-700 border-green-200",
    "Marketing Strategy":     "bg-stone-100 text-stone-600 border-stone-200",
};

export default function BlogPageContent({ articles }: { articles: any[] }) {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeTags, setActiveTags] = useState<string[]>([]);

    // Unique categories + tag cloud
    const categories = useMemo(() =>
        ["All", ...Array.from(new Set(articles.map(a => a.category))).sort()],
        [articles]
    );

    const allTags = useMemo(() => {
        const counts: Record<string, number> = {};
        articles.forEach(a => (a.tags || []).forEach((t: string) => {
            counts[t] = (counts[t] || 0) + 1;
        }));
        return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 16).map(([t]) => t);
    }, [articles]);

    // Filter logic
    const filtered = useMemo(() => {
        let list = articles;
        if (activeCategory !== "All") list = list.filter(a => a.category === activeCategory);
        if (activeTags.length) list = list.filter(a => activeTags.some(t => (a.tags || []).includes(t)));
        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter(a =>
                a.title.toLowerCase().includes(q) ||
                a.excerpt?.toLowerCase().includes(q) ||
                a.category?.toLowerCase().includes(q)
            );
        }
        return list;
    }, [articles, activeCategory, activeTags, search]);

    const featured = filtered[0];
    const grid = filtered.slice(1);

    const toggleTag = (tag: string) =>
        setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

    // Recent picks for sidebar
    const recentPosts = [...articles]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

    return (
        <main className="min-h-screen bg-white text-stone-900">
            <JsonLd type="CollectionPage" data={{
                name: "WhizCrow Blog — Marketing Insights & Strategy",
                description: "Marketing strategy, AI tools, SEO, social media and digital growth insights from the WhizCrow team.",
                items: articles
            }} />
            <Header />

            {/* ── Compact Hero ─────────────────────────────────────────────── */}
            <section className="pt-28 md:pt-36 pb-8 border-b border-stone-100 bg-stone-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-8 h-0.5 bg-purple-600 inline-block" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-600">
                                    WhizCrow Blog
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-display font-bold text-stone-900 tracking-tight leading-tight">
                                Marketing Insights &<br className="hidden md:block" />{" "}
                                <span className="text-purple-600">Digital Strategy</span>
                            </h1>
                            <p className="mt-3 text-base md:text-lg text-stone-500 max-w-lg leading-relaxed">
                                Practical guides, industry analysis and growth strategies from our team of specialists.
                            </p>
                        </div>

                        <div className="relative shrink-0">
                            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search articles..."
                                className="pl-9 pr-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 w-56 placeholder:text-stone-400"
                            />
                        </div>
                    </div>

                    {/* ── Category tabs ─────────────────────────────────── */}
                    <div className="mt-6 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-all whitespace-nowrap ${
                                    activeCategory === cat
                                        ? "bg-stone-900 border-stone-900 text-white"
                                        : "bg-white border-stone-200 text-stone-500 hover:border-purple-300 hover:text-purple-700"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Main content ─────────────────────────────────────────────── */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* ── Article feed ──────────────────────────────── */}
                        <div className="flex-1 min-w-0">
                            {/* Featured */}
                            {featured ? (
                                <motion.div
                                    key={featured.slug}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-10"
                                >
                                    <IntelligenceCard article={featured} featured={true} />
                                </motion.div>
                            ) : (
                                <div className="py-20 text-center border-2 border-dashed border-stone-200 rounded-2xl">
                                    <BookOpen className="mx-auto mb-3 text-stone-300" size={32} />
                                    <p className="text-stone-400 font-semibold text-lg">No articles match your filters.</p>
                                    <button
                                        onClick={() => { setActiveCategory("All"); setActiveTags([]); setSearch(""); }}
                                        className="mt-4 text-sm text-purple-600 hover:underline font-semibold"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}

                            {/* Results count */}
                            {filtered.length > 0 && (
                                <div className="flex items-center justify-between mb-6">
                                    <p className="text-sm text-stone-400 font-medium">
                                        Showing <span className="text-stone-700 font-bold">{filtered.length}</span> article{filtered.length !== 1 ? "s" : ""}
                                        {activeCategory !== "All" && <span> in <span className="text-purple-600">{activeCategory}</span></span>}
                                    </p>
                                </div>
                            )}

                            {/* Grid */}
                            <AnimatePresence mode="popLayout">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {grid.map((article, i) => (
                                        <motion.div
                                            key={article.slug}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ delay: i * 0.04 }}
                                        >
                                            <IntelligenceCard article={article} />
                                        </motion.div>
                                    ))}
                                </div>
                            </AnimatePresence>
                        </div>

                        {/* ── Sidebar ───────────────────────────────────── */}
                        <aside className="lg:w-72 xl:w-80 shrink-0 flex flex-col gap-8">

                            {/* Topic Tags */}
                            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Tag size={14} className="text-purple-600" /> Browse by Topic
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {allTags.map(tag => (
                                        <button
                                            key={tag}
                                            onClick={() => toggleTag(tag)}
                                            className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${
                                                activeTags.includes(tag)
                                                    ? "bg-purple-600 border-purple-600 text-white"
                                                    : "bg-white border-stone-200 text-stone-500 hover:border-purple-300 hover:text-purple-700"
                                            }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                    {activeTags.length > 0 && (
                                        <button onClick={() => setActiveTags([])} className="text-[11px] text-stone-400 hover:text-stone-700 underline">
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Recent Posts */}
                            <div className="bg-white rounded-2xl p-6 border border-stone-100">
                                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Clock size={14} className="text-purple-600" /> Recent Posts
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {recentPosts.map(post => (
                                        <Link
                                            key={post.slug}
                                            href={`/blog/${post.slug}`}
                                            className="group flex flex-col gap-1"
                                        >
                                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border w-fit ${CATEGORY_COLOURS[post.category] || 'bg-stone-100 text-stone-500 border-stone-200'}`}>
                                                {post.category}
                                            </span>
                                            <p className="text-sm font-semibold text-stone-700 group-hover:text-purple-700 transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </p>
                                            <span className="text-[11px] text-stone-400">{post.date}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Trending topics */}
                            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <TrendingUp size={14} className="text-purple-600" /> Trending Categories
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {Object.entries(
                                        articles.reduce((acc: Record<string, number>, a) => {
                                            acc[a.category] = (acc[a.category] || 0) + 1;
                                            return acc;
                                        }, {})
                                    )
                                        .sort((a, b) => b[1] - a[1])
                                        .slice(0, 6)
                                        .map(([cat, count]) => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className="flex items-center justify-between text-sm group"
                                            >
                                                <span className="text-stone-600 group-hover:text-purple-700 font-medium transition-colors text-left">
                                                    {cat}
                                                </span>
                                                <span className="text-[11px] font-bold text-stone-400 bg-stone-200 rounded-full px-2 py-0.5 group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors">
                                                    {count}
                                                </span>
                                            </button>
                                        ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-stone-900 rounded-2xl p-6 text-white">
                                <h3 className="font-display font-bold text-lg leading-tight mb-2">
                                    Want a free digital audit?
                                </h3>
                                <p className="text-stone-400 text-sm leading-relaxed mb-5">
                                    We'll review your brand's online presence and identify your biggest growth opportunities — no strings attached.
                                </p>
                                <Link
                                    href="/contact"
                                    className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    Book a free audit <ArrowRight size={13} />
                                </Link>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                                <h3 className="font-display font-bold text-stone-900 text-base mb-2">
                                    Get insights in your inbox
                                </h3>
                                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                                    Join 3,000+ marketers receiving our weekly breakdown of what's working right now.
                                </p>
                                <form className="flex flex-col gap-2">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="px-4 py-2.5 text-sm rounded-xl border border-purple-200 bg-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                    <button
                                        type="submit"
                                        className="py-2.5 bg-purple-600 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-purple-700 transition-colors"
                                    >
                                        Subscribe Free
                                    </button>
                                </form>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
