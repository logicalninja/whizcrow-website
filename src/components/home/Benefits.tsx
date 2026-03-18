"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, HeartHandshake } from "lucide-react";

export function Benefits() {
    const benefits = [
        {
            title: "The Valuation Premium",
            desc: "Data from McKinsey and Deloitte proves that companies with high 'Trust Equity' trade at a 2.5x multiple over peers. We help you capture and hold that premium.",
            icon: TrendingUp,
            color: "text-primary-dark"
        },
        {
            title: "The Crisis Buffer",
            desc: "A pre-fortified digital footprint acts as corporate insurance. High reputation resilience reduces peak stock volatility by 40% when negative volatility strikes.",
            icon: ShieldCheck,
            color: "text-secondary-dark"
        },
        {
            title: "Operational Velocity",
            desc: "Trust is a lubricant for growth. High-reputation brands attract elite talent 3x faster and experience 25% shorter sales cycles through intrinsic credibility.",
            icon: HeartHandshake,
            color: "text-accent"
        }
    ];

    return (
        <section className="py-24 bg-warm-beige">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary-dark mb-4">Return on Reputation</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                        Why Your <span className="text-secondary pr-1">Narrative</span> Matters.
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group p-10 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-stone-200 hover:border-secondary/30 transition-all duration-300 shadow-sm hover:shadow-xl cursor-default"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center ${benefit.color} mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                                <benefit.icon size={28} />
                            </div>
                            <h4 className="text-2xl font-bold text-stone-900 mb-4 tracking-tight">{benefit.title}</h4>
                            <p className="text-stone-700 leading-relaxed font-medium">
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
