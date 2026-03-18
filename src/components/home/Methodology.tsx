"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Users } from "lucide-react";

export function Methodology() {
    return (
        <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Data. AI. Human. <br className="hidden md:block" />
                        <span className="text-stone-400">In that order. Always.</span>
                    </h2>
                    <p className="text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto">
                        This isn't a process we follow. It's how we think. Across every service. For every client.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">

                    <div className="absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 hidden md:block" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 bg-stone-900 border border-stone-800 p-8 rounded-3xl"
                    >
                        <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center mb-6 text-white border border-stone-700 shadow-xl">
                            <Database size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Data informs</h3>
                        <p className="text-stone-400 leading-relaxed">
                            Data shows what's real, what's working, and what's next. No opinions. No guesses.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="relative z-10 bg-stone-900 border border-stone-800 p-8 rounded-3xl"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white border border-secondary/50 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]">
                            <Cpu size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">AI analyzes</h3>
                        <p className="text-stone-400 leading-relaxed">
                            AI analyzes what's happening across millions of data points. Faster than any human could.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10 bg-stone-900 border border-stone-800 p-8 rounded-3xl"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-900 border border-stone-200 shadow-xl">
                            <Users size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Humans decide</h3>
                        <p className="text-stone-400 leading-relaxed">
                            Then humans take over. Strategy. Creativity. Judgment. The things machines can't do.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
