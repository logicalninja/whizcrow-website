"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Outcomes() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary-dark mb-4 drop-shadow-sm">
                        Every Stage Supported
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight">
                        One agency. Every stage.
                    </h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch">

                    {/* Builders */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-stone-50 border border-stone-200 rounded-3xl p-8 flex flex-col justify-start"
                    >
                        <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-2xl flex items-center justify-center text-stone-900 mb-6">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-3">Building</h3>
                        <p className="text-stone-600 mb-8 leading-relaxed">
                            You need a website. You need to be found. You need technology that handles the basics while you focus on everything else.
                        </p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-stone-900 shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-800 text-sm">WhizAI</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-stone-900 shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-800 text-sm">WhizContent</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-stone-900 shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-800 text-sm">WhizDigital essentials</span>
                            </li>
                        </ul>
                        <Link href="/contact" className="mt-auto text-sm font-bold text-stone-900 hover:text-primary flex items-center gap-1 transition-colors">
                            Get started <ArrowRight size={14} />
                        </Link>
                    </motion.div>

                    {/* Scalers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-stone-50 border border-stone-200 rounded-3xl p-8 flex flex-col justify-start"
                    >
                        <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-2xl flex items-center justify-center text-primary-dark mb-6">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-3">Scaling</h3>
                        <p className="text-stone-600 mb-8 leading-relaxed">
                            You need more customers. You need marketing that delivers measurable returns. You need to scale without breaking.
                        </p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-stone-900 shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-800 text-sm">WhizDigital</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-stone-900 shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-800 text-sm">WhizAds</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-stone-900 shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-800 text-sm">WhizCommerce</span>
                            </li>
                        </ul>
                        <Link href="/contact" className="mt-auto text-sm font-bold text-stone-900 hover:text-primary flex items-center gap-1 transition-colors">
                            Get started <ArrowRight size={14} />
                        </Link>
                    </motion.div>

                    {/* Established - Premium treatment using brand guidelines */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-onyx border border-onyx-light rounded-3xl p-8 flex flex-col justify-start text-white shadow-xl shadow-onyx/10 relative overflow-hidden"
                    >
                        {/* Decorative dark glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />

                        <div className="w-14 h-14 bg-onyx-light border border-stone-800 shadow-sm rounded-2xl flex items-center justify-center text-secondary mb-6 relative z-10">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Established</h3>
                        <p className="text-stone-400 mb-8 leading-relaxed relative z-10">
                            You've built something significant. You need to protect it. You need senior thinking. You need work that matches your ambition.
                        </p>
                        <ul className="space-y-4 mb-8 flex-grow relative z-10">
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-200 text-sm">WhizORM</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-200 text-sm">WhizPR</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                                <span className="font-semibold text-stone-200 text-sm">WhizInfluence</span>
                            </li>
                        </ul>
                        <Link href="/contact" className="mt-auto text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors relative z-10">
                            Get started <ArrowRight size={14} />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
