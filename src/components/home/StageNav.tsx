"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Hammer, TrendingUp, Landmark } from "lucide-react";

const stages = [
    {
        title: "Building",
        icon: Hammer,
        reality: "You're laying the foundation. You need a rock-solid website, visible search presence, and automation to buy back your time.",
        services: ["WhizAI", "WhizContent", "WhizDigital"],
        ctaText: "Solutions for Builders",
        link: "/services"
    },
    {
        title: "Scaling",
        icon: TrendingUp,
        reality: "You've proven your model. You need a predictable flow of new customers and marketing that drives measurable revenue.",
        services: ["WhizDigital", "WhizAds", "WhizCommerce"],
        ctaText: "Solutions for Scalers",
        link: "/services"
    },
    {
        title: "Established",
        icon: Landmark,
        reality: "You've built an enterprise. Your job now is to defend your reputation, secure high-impact media, and dominate your market.",
        services: ["WhizORM", "WhizPR", "WhizInfluence"],
        ctaText: "Solutions for Enterprises",
        link: "/services"
    }
];

export function StageNav() {
    return (
        <section id="stage-nav" className="py-24 bg-stone-50 border-y border-stone-100">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
                        One agency. Exactly what you need, exactly when you need it.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stages.map((stage, i) => (
                        <motion.div
                            key={stage.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border border-stone-200 rounded-2xl p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-stone-100">
                                <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center text-stone-700">
                                    <stage.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900">{stage.title}</h3>
                            </div>

                            <div className="flex-grow">
                                <p className="text-stone-600 mb-8 leading-relaxed">
                                    <span className="font-bold text-stone-900 block mb-2 text-xs uppercase tracking-widest">The Reality</span>
                                    {stage.reality}
                                </p>

                                <div className="mb-8">
                                    <span className="font-bold text-stone-900 block mb-3 text-xs uppercase tracking-widest">Start Here</span>
                                    <div className="flex flex-wrap gap-2">
                                        {stage.services.map(s => (
                                            <span key={s} className="px-3 py-1 bg-stone-100 text-stone-700 text-sm font-medium rounded-full">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={stage.link}
                                className="w-full py-4 text-center border-2 border-stone-900 text-stone-900 font-bold rounded-xl hover:bg-stone-900 hover:text-white transition-colors group flex items-center justify-center gap-2"
                            >
                                {stage.ctaText}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-stone-600 font-medium">
                        Not sure where you fit?{" "}
                        <Link href="/contact" className="text-stone-900 font-bold underline decoration-2 underline-offset-4 hover:text-secondary transition-colors">
                            Tell us what's happening.
                        </Link>{" "}
                        We'll point you in the right direction.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
