"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Lock, CheckCircle2 } from "lucide-react";

export function Guarantee() {
    const standards = [
        {
            title: "Institutional Compliance",
            desc: "We exclusively deploy white-hat, legal infrastructure. No risks to your digital longevity or regulatory standing.",
            icon: ShieldCheck,
            color: "text-primary-dark"
        },
        {
            title: "Human-Led Sentiment",
            desc: "100% human-driven distribution. We explicitly prohibit bot farms, synthetic traffic, or fraudulent engagement metrics.",
            icon: Users,
            color: "text-secondary-dark"
        },
        {
            title: "Ironclad Discretion",
            desc: "Total confidentiality is our baseline. Every engagement is bound by multi-jurisdictional NDAs to shield your identity.",
            icon: Lock,
            color: "text-accent"
        }
    ];

    return (
        <section className="py-24 bg-off-white border-y border-stone-200">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-dark mb-4">Assurance & Standards</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">The Integrity <span className="text-primary pr-1">Framework</span>.</h3>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-stone-200 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <ShieldCheck size={200} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative z-10 text-pretty">
                        {standards.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                className="group"
                            >
                                <div className={`w-12 h-12 rounded-[2.5rem] bg-white shadow-sm flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-stone-800 mb-3 flex items-center gap-2">
                                    {item.title}
                                </h4>
                                <p className="text-stone-600 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-stone-200/60 flex flex-wrap gap-8 justify-center text-stone-500 text-xs font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-primary" />
                            SEC Regulated Standards
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-primary" />
                            GDPR Ready
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-primary" />
                            Full KYC/AML Compliance
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
