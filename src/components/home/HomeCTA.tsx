"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
    return (
        <section className="py-32 bg-onyx text-white relative flex justify-center items-center overflow-hidden">

            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                >
                    Ready to gain an <span className="text-primary">unfair advantage?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Wherever your business is at today, we are ready to meet you there. Tell us what’s happening in your company, and we’ll figure out exactly how we can accelerate your growth or protect your legacy. No hard sell. Just a real, strategic conversation with people who actually know how to build businesses.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="px-10 py-5 bg-accent text-white font-bold text-lg rounded-full hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-accent/20"
                    >
                        Contact Us
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
