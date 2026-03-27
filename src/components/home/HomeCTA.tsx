"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
    return (
        <section className="py-20 bg-onyx text-white relative flex justify-center items-center overflow-hidden">

            <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                >
                    Let’s grow your <span className="text-primary">business.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-base text-stone-400 mb-8"
                >
                    Tell us where you’re at. We’ll take it from there.
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
                        className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-accent/20"
                    >
                        Get in Touch
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                    <Link
                        href="/services"
                        className="text-sm text-stone-400 hover:text-white transition-colors underline underline-offset-4"
                    >
                        or explore our services first
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
