"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const results = [
    {
        client: "Jansamarth (FinTech)",
        service: "WhizDigital",
        stat: "+340%",
        statLabel: "Qualified Leads",
        outcome: "We drove a massive, sustained surge in qualified loan applications.",
        span: "md:col-span-2 md:row-span-2",
        theme: "bg-stone-100 text-stone-900",
        pillTheme: "bg-white text-stone-900 border-stone-200",
        imagePlaceholder: "bg-gradient-to-br from-stone-200 to-stone-300"
    },
    {
        client: "PSBLoans",
        service: "WhizDigital",
        stat: "10x",
        statLabel: "Brand Reach",
        outcome: "Engineered a massive expansion of brand awareness.",
        span: "md:col-span-1 md:row-span-1",
        theme: "bg-white text-stone-900 border border-stone-200",
        pillTheme: "bg-stone-100 text-stone-900",
        imagePlaceholder: "bg-stone-100"
    },
    {
        client: "Aura Benaras",
        service: "WhizCommerce",
        stat: "+150%",
        statLabel: "Revenue",
        outcome: "Optimized storefronts and targeted superior traffic.",
        span: "md:col-span-1 md:row-span-1",
        theme: "bg-white text-stone-900 border border-stone-200",
        pillTheme: "bg-stone-100 text-stone-900",
        imagePlaceholder: "bg-stone-100"
    },
    {
        client: "Global Sports OTT",
        service: "WhizORM",
        stat: "100%",
        statLabel: "Crisis Stabilized",
        outcome: "Rapidly repaired reputation across multiple high-stakes markets.",
        span: "md:col-span-2 md:row-span-1",
        theme: "bg-onyx text-white",
        pillTheme: "bg-white/10 text-white border-white/10",
        imagePlaceholder: "bg-gradient-to-r from-onyx-light to-onyx"
    }
];

export function CaseStudies() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-6">
                            Our Impact
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                            Results speak <span className="text-stone-400">louder.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,1fr)]">
                    {results.map((result, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden flex flex-col justify-between ${result.span} ${result.theme}`}
                        >
                            {/* Placeholder Image Background Area */}
                            <div className={`absolute inset-0 opacity-40 mix-blend-multiply ${result.imagePlaceholder} transition-transform duration-700 group-hover:scale-105`} />

                            <div className="relative z-10 p-5 md:p-6 flex flex-col h-full justify-between gap-4">
                                <div className="flex justify-between items-start gap-4">
                                    <span className={`text-xs font-bold px-4 py-1.5 rounded-full border ${result.pillTheme}`}>
                                        {result.service}
                                    </span>
                                    <Link href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors shrink-0">
                                        <ArrowUpRight size={20} className={result.theme.includes('text-white') ? 'text-white' : 'text-stone-900'} />
                                    </Link>
                                </div>

                                <div>
                                    <div className="mb-3">
                                        <div className="text-4xl md:text-5xl font-black tracking-tighter mb-1">
                                            {result.stat}
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-80">
                                            {result.statLabel}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold mb-1">{result.client}</h3>
                                    <p className="text-sm font-medium opacity-70 leading-relaxed max-w-sm">
                                        {result.outcome}
                                    </p>

                                    <Link href="#" className="inline-flex items-center gap-2 mt-3 text-sm font-bold hover:gap-3 transition-all">
                                        View Case Study
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
