"use client";

import { motion } from "framer-motion";
import { Bot, Eraser, Library } from "lucide-react";

export function Intelligence() {
    return (
        <section className="py-32 bg-stone-900 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20 max-w-4xl">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 text-pretty">Operational Dominance</h2>
                    <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[0.95]">Defending You Against <br /><span className="text-stone-500 italic">the Machines.</span></h3>
                    <p className="text-xl text-stone-400 max-w-2xl font-medium leading-relaxed">
                        The old ORM is dead. We optimize for the AI Search revolution, ensuring that when stakeholders ask chatbots about your brand, the machines cite you as the <span className="text-white">Authoritative Source.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 h-auto md:h-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 p-8 md:p-12 rounded-[2.5rem] bg-stone-800 border border-white/10 hover:border-primary/30 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center mb-8 border border-secondary/20">
                                <Bot size={32} />
                            </div>
                            <h4 className="text-3xl md:text-4xl font-bold mb-6">The Intelligence Arsenal</h4>
                            <p className="text-stone-300 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                                We deploy a multi-layered tech stack monitoring 400M+ real-time sources across the Dark Web, unindexed forums, and proprietery LLM citation tracking for OpenAI, Perplexity, and Gemini.
                            </p>
                        </div>
                        {/* Visual Graph - Lime for Data */}
                        <div className="w-full h-32 bg-stone-900/50 rounded-2xl border border-white/5 relative overflow-hidden mt-12 flex items-end justify-between px-6 pb-2 gap-2">
                            {[40, 60, 30, 80, 50, 90, 70, 40, 60, 80, 55, 75].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="w-full bg-primary/40 group-hover:bg-primary/70 rounded-t-sm"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column Stack */}
                    <div className="flex flex-col gap-6">
                        {/* Card 2: AI Search Intelligence */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex-1 p-8 rounded-[2.5rem] bg-stone-800 border border-white/10 hover:border-orange-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                    <Eraser size={28} />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold">LLM Citation Sync</h4>
                            </div>
                            <p className="text-stone-400 leading-relaxed font-medium">
                                Direct integration with enterprise search tools to neutralize negative machine bias before it scales.
                            </p>
                        </motion.div>

                        {/* Card 3: Institutional Governance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 p-8 rounded-[2.5rem] bg-stone-800 border border-white/10 hover:border-primary/30 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                                    <Library size={28} />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold">Governance Edge</h4>
                            </div>
                            <p className="text-stone-400 leading-relaxed font-medium">
                                Native integration with Salesforce, HubSpot, and Slack for instant institutional response triggers.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
