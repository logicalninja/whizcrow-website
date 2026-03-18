"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

export function RevenueImpact() {
    return (
        <section className="py-32 bg-off-white relative overflow-hidden">
            {/* Background Decor - Lime Green Hue for "Growth/Money" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-500 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm"
                        >
                            <Calculator size={14} className="text-primary" /> Revenue Risk Analysis
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-[1.1]"
                        >
                            What is Your <br />
                            <span className="text-secondary">Reputation Worth?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-stone-500 mb-10 leading-relaxed max-w-lg"
                        >
                            Data confirms: Top-tier reputation correlates with a <span className="font-bold text-primary">22% premium</span> on market cap. Don&apos;t guess. Measure it.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {/* Primary Button - Orange */}
                            <Link
                                href="/calculator"
                                className="inline-flex h-14 items-center justify-center rounded-full bg-accent text-white px-10 text-lg font-bold transition-all hover:bg-orange-600 hover:scale-105 shadow-xl shadow-orange-500/20 cursor-pointer"
                            >
                                Calculate Impact <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Calculator Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-stone-100 relative overflow-hidden">
                            {/* Top Accent Line - Lime to Purple */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-bold text-stone-500 uppercase tracking-wide mb-3">Annual Revenue</label>
                                    <div className="text-4xl font-mono font-bold text-stone-300 border-b-2 border-stone-100 pb-2 flex items-center">
                                        $ <span className="text-stone-900 mx-2">100,000,000</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-stone-500 uppercase tracking-wide mb-3">Industry Risk Multiplier</label>
                                    <div className="flex gap-3">
                                        <span className="px-4 py-2 rounded-full bg-stone-100 text-stone-400 font-bold text-sm">Retail (1.2x)</span>
                                        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-bold text-sm border border-primary/20">Finance (2.8x)</span>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-stone-100">
                                    <label className="block text-sm font-bold text-stone-500 uppercase tracking-wide mb-2">Projected Revenue Protected</label>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="text-5xl md:text-6xl font-bold text-primary tracking-tight" // LIME GREEN for Money
                                    >
                                        $14,200,000
                                    </motion.div>
                                    <div className="text-stone-400 text-sm mt-2 font-medium">
                                        *Based on WhizBRAM™ composite risk modeling
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
