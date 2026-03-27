"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "10", label: "Specialist Services" },
    { value: "15+", label: "Countries Reached" },
    { value: "5★", label: "Average Client Rating" },
];

export function StatsBar() {
    return (
        <section className="bg-stone-900 border-t border-stone-800">
            <div className="container mx-auto px-6 max-w-5xl py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="text-center md:px-8"
                        >
                            <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                            <div className="text-xs text-stone-400 uppercase tracking-widest font-semibold">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
