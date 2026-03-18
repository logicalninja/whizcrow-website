"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users2, ArrowRight } from "lucide-react";

export function Community() {
    return (
        <section className="py-24 bg-stone-50 border-y border-stone-200">
            <div className="container mx-auto px-6 max-w-4xl text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-10 md:p-16 rounded-[40px] border border-stone-200 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 opacity-50" />

                    <div className="w-16 h-16 bg-stone-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 relative z-10 shadow-lg">
                        <Users2 size={32} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight relative z-10">
                        Marketing shouldn't feel like a black box.
                    </h2>
                    <h3 className="text-lg md:text-xl font-bold text-stone-400 mb-8 uppercase tracking-widest relative z-10">
                        Free advice, strategy, and audits for business owners like you.
                    </h3>

                    <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
                        Running a business is hard enough. Drop into our network to ask questions and bounce ideas off senior strategists—completely free.
                    </p>

                    <Link
                        href="/community"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all relative z-10 group"
                    >
                        Join the Business Owners Network
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
