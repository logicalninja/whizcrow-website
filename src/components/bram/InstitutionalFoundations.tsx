"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Lock, Eye, ShieldAlert, Activity, FileText } from "lucide-react";

const foundations = [
    {
        title: "Governance",
        icon: FileText,
        desc: "Digital reputation is a board-level responsibility. We implement frameworks that ensure brand actions align with internal values and external promises.",
        color: "text-secondary", // Teal
        bg: "bg-secondary/5"
    },
    {
        title: "Regulatory",
        icon: Scale,
        desc: "We navigate the complex intersection of digital speech, SEC/FCA compliance, and industry-specific regulations to ensure your strategy is legally ironclad.",
        color: "text-secondary", // Teal
        bg: "bg-secondary/5"
    },
    {
        title: "Security",
        icon: Lock,
        desc: "Treating reputation like cybersecurity. We deploy 'counter-ops' to neutralize malicious content, bot-driven misinformation, and synthetic attacks.",
        color: "text-primary", // Lime
        bg: "bg-primary/5"
    },
    {
        title: "Privacy",
        icon: Eye,
        desc: "Protection of executive and corporate privacy is paramount. We identify leaked data or personal vulnerabilities that can be weaponized by bad actors.",
        color: "text-secondary", // Teal
        bg: "bg-secondary/5"
    },
    {
        title: "Safety",
        icon: ShieldAlert,
        desc: "Ensuring your brand isn't used to train harmful models or being misrepresented in 'hallucinating' search results across the LLM landscape.",
        color: "text-primary", // Safety/Lime
        bg: "bg-primary/5"
    },
    {
        title: "Risk",
        icon: Activity,
        desc: "Predictive risk modeling. Analyzing 'reputation debt'—viral triggers, outdated negative citations, and low-authority digital footprints.",
        color: "text-secondary", // Teal
        bg: "bg-secondary/5"
    }
];

export function InstitutionalFoundations() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">Foundational Framework</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                        The Six Foundations of <span className="text-secondary">Digital Trust</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {foundations.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 bg-stone-50 rounded-[2.5rem] border border-stone-100 group hover:border-secondary/20 transition-all hover:shadow-xl hover:shadow-stone-200/50 cursor-pointer"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                <f.icon size={28} />
                            </div>
                            <h4 className="text-2xl font-bold text-stone-900 mb-4">
                                {i + 1}. {f.title}
                            </h4>
                            <p className="text-stone-500 leading-relaxed font-medium">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
