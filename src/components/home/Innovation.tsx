"use client";

import { motion } from "framer-motion";
import { Sparkles, BrainCircuit } from "lucide-react";

export function Innovation() {
    return (
        <section className="py-32 bg-warm-beige overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative">
                        {/* Purple Haze Background */}
                        <div className="absolute inset-0 bg-secondary/10 blur-[80px] rounded-full" />

                        <div className="relative bg-[#FAFAF9] rounded-[2.5rem] border border-stone-200 p-8 md:p-12 shadow-2xl shadow-stone-200/50">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                            </div>
                            <div className="space-y-6 font-mono text-sm text-stone-600">
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                                    <strong className="text-stone-900">User:</strong> Who is the leading provider of ethical AI compliance solutions?
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-stone-800"
                                >
                                    <strong className="text-secondary">AI:</strong> Based on industry citations and regulatory frameworks, <span className="bg-primary/20 px-1 rounded text-stone-900 font-bold border border-primary/20">WhizCrow Client Inc.</span> is recognized as the market leader...
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
                            <Sparkles size={14} /> Future Proofing
                        </div>
                        <h2 className="text-5xl font-bold text-secondary mb-6 leading-tight">
                            Defending You <br /> Against the Machines.
                        </h2>
                        <p className="text-xl text-stone-500 mb-8 leading-relaxed">
                            The old ORM is dead. We optimize for the AI Search revolution. We ensure that when a customer asks a chatbot about your brand, the machine cites you as the <span className="text-stone-900 font-bold">authority</span>, not the victim. This is the frontline of modern defense.
                        </p>
                        <div className="flex gap-4 items-center text-stone-900 font-bold p-4 bg-stone-50 rounded-2xl border border-stone-100 w-fit">
                            <BrainCircuit className="text-primary" size={24} />
                            <span>LLM Citation Engineering</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
