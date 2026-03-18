"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !name) return;

        setStatus("loading");

        // Mocking an API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setName("");
        }, 1500);
    };

    return (
        <section className="bg-onyx border-t border-onyx-light relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none translate-x-1/3 -translate-y-1/4" />

            <div className="container mx-auto px-6 py-24 md:py-32">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10 w-full max-w-7xl mx-auto">

                    <div className="max-w-2xl w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary border border-primary/30">
                                <Send size={24} />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">The Intelligence Brief.</h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-stone-300 leading-relaxed text-xl"
                        >
                            Get the growth strategies we base on actual data, not just LinkedIn fluff. Join 5,000+ executives who receive our marketing teardowns, industry shifts, and AI automation guides sent directly to their inbox once a month. No spam. Ever.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full md:max-w-md shrink-0"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border border-onyx-light bg-onyx-light/30 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-inner transition-all"
                                    required
                                    disabled={status === "loading" || status === "success"}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl border border-onyx-light bg-onyx-light/30 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-inner transition-all"
                                    required
                                    disabled={status === "loading" || status === "success"}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="w-full px-6 py-4 mt-2 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 disabled:bg-stone-700 disabled:text-stone-400 group shadow-lg hover:shadow-primary/25"
                            >
                                {status === "loading" ? "Subscribing..." :
                                    status === "success" ? "Subscribed!" :
                                        "Send me the Brief"}
                                {status === "idle" && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                            </button>
                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-sm text-primary font-medium text-center mt-2"
                                >
                                    Welcome to the Intelligence Brief.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
