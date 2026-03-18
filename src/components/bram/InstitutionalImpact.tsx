"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Target, Zap, AlertTriangle, BarChart3 } from "lucide-react";

export function InstitutionalImpact() {
    return (
        <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
            {/* Visual Flair */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-8"
                        >
                            <TrendingUp size={14} /> Brand Impact
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]"
                        >
                            Reputation is a <span className="text-primary italic text-6xl md:text-8xl">Valuation</span> Logic.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-stone-400 text-xl font-medium mb-12 leading-relaxed"
                        >
                            We don't provide "PR services." We provide brand diagnostics that identifying leaks in your
                            Authority and sentiment, then neutralize them with technical precision.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="p-8 rounded-[2rem] bg-stone-900 border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all">
                                <div className="text-3xl font-display font-black text-white mb-2 tracking-tight">
                                    +5.0% to 9.0%
                                </div>
                                <div className="text-stone-400 font-bold text-xs uppercase tracking-widest leading-relaxed">
                                    Institutional Revenue Variance <br /> per Star Deviation
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-stone-900 border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all">
                                <div className="text-3xl font-display font-black text-white mb-2 tracking-tight">
                                    22% Alpha
                                </div>
                                <div className="text-stone-400 font-bold text-xs uppercase tracking-widest leading-relaxed">
                                    Valuation Multiplier vs. <br /> Non-Certified Peer Groups
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Neutralizing Reputation Debt",
                                desc: "Identifying and deleting legacy negative content, outdated citations, and algorithmic vulnerabilities that drag down Authority.",
                                icon: AlertTriangle,
                                color: "text-secondary"
                            },
                            {
                                title: "The Diagnostic Compass",
                                desc: "No more guessing which platform matters. BRAM identifies precisely where your brand is leaking trust and prioritizing action.",
                                icon: Target,
                                color: "text-primary"
                            },
                            {
                                title: "Algorithm Defensibility",
                                desc: "Own Page 1 and the hidden weights of LLMs (ChatGPT/Perplexity) with tech-driven narrative engineering.",
                                icon: Zap,
                                color: "text-secondary"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 flex items-start gap-6 hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                                <div className={`shrink-0 w-14 h-14 rounded-2xl bg-white/5 ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-stone-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
