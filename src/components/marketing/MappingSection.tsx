"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/constants/services";

const needsMapping = [
    { need: "A world-class website or AI automation", target: "ai" },
    { need: "More customers from search or social", target: ["digital", "ads"] },
    { need: "High-quality content that actually converts", target: "content" },
    { need: "A professional, unshakeable brand identity", target: "brand" },
    { need: "Influencers or media to talk about you", target: ["influence", "pr"] },
    { need: "Aggressive growth in online sales", target: "commerce" },
    { need: "Reputation protection and crisis control", target: "orm" },
    { need: "High-impact marketing to fill an event", target: "mice" },
];

export function MappingSection() {
    return (
        <section className="py-32 bg-stone-950 text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Sparkles size={14} /> Path Finder
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black tracking-tight mb-6"
                    >
                        Not sure where to <span className="text-primary italic">start?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-stone-400 text-lg max-w-2xl mx-auto font-medium"
                    >
                        Align your business objective with our specialized capabilities. We&apos;ve built ecosystems for every stage of the journey.
                    </motion.p>
                </div>

                <div className="grid gap-4">
                    {needsMapping.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={typeof item.target === "string"
                                    ? services.find(s => s.id === item.target)?.link || "#"
                                    : "/contact"
                                }
                                className="group flex items-center justify-between p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-stone-600 font-mono text-xs">0{index + 1}</span>
                                    <h3 className="text-lg md:text-2xl font-bold text-stone-100 group-hover:text-white transition-colors">
                                        I need <span className="text-primary group-hover:underline underline-offset-8 decoration-white/20">{item.need}</span>
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="hidden md:flex items-center gap-2">
                                        {Array.isArray(item.target) ? (
                                            item.target.map(t => (
                                                <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-tighter text-stone-400">
                                                    {services.find(s => s.id === t)?.title}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-black uppercase tracking-tighter text-stone-400">
                                                {services.find(s => s.id === item.target)?.title}
                                            </span>
                                        )}
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-stone-500 font-medium mb-8">Still unsure? Let&apos;s architect your strategy together.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-black text-lg rounded-full hover:scale-105 transition-all shadow-[0_20px_50px_rgba(152,230,0,0.2)] active:scale-95"
                    >
                        Talk to our Strategists
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
