"use client";

import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { Article } from "@/lib/articles";

export default function InsightCard({ article, featured = false }: { article: Article, featured?: boolean }) {
    if (featured) {
        return (
            <div className="group relative w-full overflow-hidden rounded-[2.5rem] border border-stone-200 shadow-2xl bg-white">
                {/* Background Art */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                    <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                </div>

                {/* Full Card Link Overlay */}
                <Link href={`/blog/${article.slug}`} className="absolute inset-0 z-0" aria-label={`Read ${article.title}`} />

                <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[500px] pointer-events-none">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-primary text-onyx text-[10px] font-bold uppercase tracking-widest leading-none">
                            Featured
                        </span>
                        <div className="flex items-center gap-1 text-stone-400 text-xs font-mono">
                            <ShieldCheck size={14} className="text-primary" />
                            EXPERT ANALYSIS
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight max-w-4xl group-hover:text-purple-600 transition-all duration-300 pointer-events-auto">
                        <Link href={`/blog/${article.slug}`}>
                            {article.title}
                        </Link>
                    </h2>

                    <p className="text-lg text-stone-600 max-w-2xl mb-8 leading-relaxed">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-stone-400 font-medium">
                        <span className="font-bold text-stone-900">{article.author}</span>
                        <span>{article.date}</span>
                        <span className="flex items-center gap-1">
                            <Clock size={16} />
                            {article.readTime}
                        </span>
                    </div>

                    <div className="mt-8 pointer-events-auto">
                        <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
                            Read Article <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group relative flex flex-col h-full bg-white border border-stone-200 rounded-[2.5rem] overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-300">
            {/* Top Gradient */}
            <div className="h-1.5 bg-gradient-to-r from-stone-200 to-stone-50 group-hover:from-primary group-hover:to-primary-dark transition-all duration-500" />

            {/* Full Card Link Overlay */}
            <Link href={`/blog/${article.slug}`} className="absolute inset-0 z-0" aria-label={`Read ${article.title}`} />

            <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10 pointer-events-none">
                <div className="mb-4 flex items-center justify-between flex-wrap gap-y-2">
                    <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase shrink-0">{article.category}</span>
                    <span className="text-[10px] font-bold text-stone-400 flex items-center gap-1 uppercase">
                        <Clock size={12} className="text-stone-300" /> {article.readTime}
                    </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3 group-hover:text-purple-600 transition-colors pointer-events-auto leading-tight text-pretty">
                    <Link href={`/blog/${article.slug}`}>
                        {article.title}
                    </Link>
                </h3>

                <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-6 flex-1 font-medium">
                    {article.excerpt}
                </p>

                {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-500 text-[10px] font-bold uppercase tracking-wider leading-none">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between pointer-events-auto">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 font-bold">
                        <span className="text-stone-900 block mb-0.5">{article.author}</span>
                        {article.date}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-primary group-hover:text-onyx group-hover:border-primary transition-all shadow-sm">
                        <ArrowRight size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}
