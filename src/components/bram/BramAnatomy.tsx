"use client";

import { motion } from "framer-motion";
import { Heart, Crown, Mic2, ShieldAlert, Users, Scale, ArrowRight, Info } from "lucide-react";

const pillars = [
    {
        title: "Sentiment",
        weight: "30%",
        icon: Heart,
        color: "text-primary", // Lime
        bg: "bg-primary/5",
        inputs: ["Positive Mentions Share", "Negative Share (Reversed)", "Avg Rating Normalized"],
        rationale: "Immediate market mood directly impacts customer trust and purchase intent."
    },
    {
        title: "Authority",
        weight: "20%",
        icon: Crown,
        color: "text-secondary", // Royal Authority
        bg: "bg-secondary/5",
        inputs: ["SERP Ownership (Top-10)", "Knowledge Graph Control", "Wikipedia Presence"],
        rationale: "Google Page-1 dominance is the first impression for most stakeholders."
    },
    {
        title: "Influence",
        weight: "15%",
        icon: Mic2,
        color: "text-secondary", // Intelligence Teal
        bg: "bg-secondary/5",
        inputs: ["Executive Posting Cadence", "Media Features/Speaking", "Follower Growth QoQ"],
        rationale: "Leadership visibility shapes perception beyond paid advertising."
    },
    {
        title: "Crisis Resilience",
        weight: "15%",
        icon: ShieldAlert,
        color: "text-orange-500", // Risk Orange
        bg: "bg-orange-500/5",
        inputs: ["Acknowledgement Time (<4h)", "Recovery Speed (<3d)", "Resolution Completeness"],
        rationale: "A brand's immune system; poor recovery causes multi-year damage."
    },
    {
        title: "Engagement",
        weight: "10%",
        icon: Users,
        color: "text-primary", // Community Lime
        bg: "bg-primary/5",
        inputs: ["Community Interaction Rate", "Share of Voice", "Audience Quality Score"],
        rationale: "Indicates market traction and cross-platform resonance."
    },
    {
        title: "Trust & Compliance",
        weight: "10%",
        icon: Scale,
        color: "text-onyx", // Governance Onyx
        bg: "bg-onyx/5",
        inputs: ["Incident History", "Transparency Disclosure", "Governance Framework"],
        rationale: "The baseline expectation; violations are catastrophic to valuation."
    }
];

export function BramAnatomy() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-black uppercase tracking-widest mb-6"
                    >
                        <Info size={14} /> Technical Deep-Dive
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-stone-900 mb-8"
                    >
                        The Anatomy of <span className="text-secondary italic">BRAM™</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-stone-500 max-w-3xl font-medium"
                    >
                        Every brand has a score. WhizBRAM™ codifies the standard protocol for measuring
                        brand authority across six weighted vectors.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-stone-50 border border-stone-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 hover:shadow-2xl hover:shadow-stone-200/50 transition-all group"
                        >
                            <div className="flex items-start justify-between mb-10">
                                <div className={`w-16 h-16 rounded-3xl ${p.bg} ${p.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                    <p.icon size={32} />
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-black text-stone-900 mb-1">{p.weight}</div>
                                    <div className="text-stone-400 text-xs font-bold uppercase tracking-widest">Weight Distribution</div>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">{p.title}</h3>
                            <p className="text-base md:text-xl text-stone-500 font-medium mb-8 leading-relaxed">
                                {p.rationale}
                            </p>

                            <div className="space-y-4 pt-6 md:pt-8 border-t border-stone-200/60">
                                <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-stone-400">Standard Inputs</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                    {p.inputs.map(input => (
                                        <li key={input} className="flex items-start gap-2 text-stone-700 font-bold text-xs md:text-sm leading-tight">
                                            <ArrowRight size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                                            <span>{input}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
