"use client";

import { motion } from "framer-motion";
import { Rocket, Building2, User } from "lucide-react";

const audiences = [
    {
        icon: Rocket,
        title: "High-Growth Startups",
        desc: "Building a reputation from day one to secure funding, user trust, and successful exits (IPO/M&A)."
    },
    {
        icon: Building2,
        title: "Global Enterprises",
        desc: "Managing complex narratives across multi-national markets, protecting stock price, and ensuring brand resilience."
    },
    {
        icon: User,
        title: "Public Figures",
        desc: "Ensuring personal legacies are accurate and fair. Protecting executives and founders from targeted misinformation."
    }
];

export function TargetAudience() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Who We Reduce Risk For</h2>
                    <h3 className="text-4xl font-bold text-stone-900">Partners in Growth.</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {audiences.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 pb-12 rounded-[2.5rem] bg-stone-50 border border-stone-100 flex flex-col items-center text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary mb-6">
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h4>
                            <p className="text-stone-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
