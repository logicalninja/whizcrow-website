"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Download } from "lucide-react";

const commandments = [
    {
        num: "I",
        text: "Thou Shalt Own Thy Page 1",
        desc: "If you don't define yourself, Google and AI will do it for you."
    },
    {
        num: "II",
        text: "Thou Shalt Prioritize Human Logic",
        desc: "In a world of bots, human-authentic sentiment is the only currency that lasts."
    },
    {
        num: "III",
        text: "Thou Shalt Acknowledge Within 4 Hours",
        desc: "In the AI age, a 24-hour response is a week late."
    },
    {
        num: "IV",
        text: "Thou Shalt Treat Negative Reviews as Debt",
        desc: "Unresolved negatives compound. Pay them down or face a credit crunch of trust."
    },
    {
        num: "V",
        text: "Thou Shalt Not Fear the Truth",
        desc: "Authenticity is the only defense against deepfakes."
    },
    {
        num: "VI",
        text: "Thou Shalt Protect Thy Leaders",
        desc: "The CEO's digital footprint is the company's valuation."
    },
    {
        num: "VII",
        text: "Thou Shalt Monitor the LLMs",
        desc: "Your reputation now lives in the hidden weights of ChatGPT and Perplexity."
    },
    {
        num: "VIII",
        text: "Thou Shalt Use Digital Counter-Ops",
        desc: "When attacked maliciously, silence is surrender."
    },
    {
        num: "IX",
        text: "Thou Shalt Link Reputation to Revenue",
        desc: "If your ROI isn't measurable, your PR is just a hobby."
    },
    {
        num: "X",
        text: "Thou Shalt Evolve or Be Eroded",
        desc: "The algorithm changes tonight. Your strategy must change with it."
    }
];

export function CommandmentsSection() {
    return (
        <section className="py-32 bg-stone-900 text-white relative overflow-hidden rounded-[3rem]">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <BookOpen size={14} /> Lead Magnet
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        The Ten <span className="text-primary italic">Commandments</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-400 text-xl max-w-2xl mx-auto"
                    >
                        Trust and Safety in the Age of AI & Synthetic Media.
                        The fundamental laws of institutional survival.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {commandments.map((item, i) => (
                        <motion.div
                            key={item.num}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-6 p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group cursor-pointer"
                        >
                            <div className="text-3xl font-serif font-black text-primary/40 group-hover:text-primary transition-colors min-w-[3rem]">
                                {item.num}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {item.text}
                                </h4>
                                <p className="text-stone-500 font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 bg-primary rounded-[2.5rem] text-stone-900 text-center relative overflow-hidden group cursor-pointer"
                >
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black mb-4">Download the Full Guidebook</h3>
                        <p className="text-stone-800 font-bold mb-8 max-w-lg mx-auto">
                            Get the detailed institutional SOP for each commandment, including legal frameworks and technical checklists.
                        </p>
                        <button className="px-10 py-5 bg-stone-900 text-white font-black rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-xl">
                            <Download size={20} /> Access The Bible
                        </button>
                    </div>
                    {/* Background Visual */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                </motion.div>
            </div>
        </section>
    );
}
