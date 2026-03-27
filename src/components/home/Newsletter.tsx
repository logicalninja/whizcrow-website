"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="bg-onyx border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    <motion.h3
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3"
                    >
                        Marketing tips, once a month.
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-stone-400 text-base mb-8"
                    >
                        Practical branding, content, and digital marketing ideas — straight from our team to your inbox. No fluff, no spam.
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                    >
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent text-sm transition-all"
                            required
                            disabled={status === "loading" || status === "success"}
                        />
                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="px-6 py-3 bg-primary text-onyx font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm group whitespace-nowrap"
                        >
                            {status === "loading" ? "Subscribing…" :
                                status === "success" ? "You're in!" :
                                    <>Subscribe <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></>}
                        </button>
                    </motion.form>

                    {status === "success" && (
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-stone-400 mt-4"
                        >
                            Thanks for subscribing! Check your inbox for a confirmation.
                        </motion.p>
                    )}

                </div>
            </div>
        </section>
    );
}
