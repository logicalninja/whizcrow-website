"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Database, UserRound, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Database,
        title: "Data Informs",
        description: "What's real. What's working. What's next. No opinions. No guesses. Pure tactical signals.",
        color: "from-primary to-emerald-500"
    },
    {
        icon: Bot,
        title: "AI Analyzes",
        description: "Millions of data points. Faster than any human could. We see what's happening before it becomes obvious.",
        color: "from-purple-500 to-blue-500"
    },
    {
        icon: UserRound,
        title: "Humans Decide",
        description: "Strategy. Creativity. Judgment. The things machines can't do. Senior thinking at every stage.",
        color: "from-stone-800 to-stone-950"
    }
];

export function WorkProcess() {
    return (
        <section className="py-32 bg-stone-50 relative overflow-hidden">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-stone-200 hidden lg:block -translate-y-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight mb-6">
                        Data. AI. Human. <span className="text-stone-400 italic">In that order.</span>
                    </h2>
                    <p className="text-stone-500 max-w-2xl mx-auto font-medium">
                        This isn&apos;t just a process we follow. It&apos;s how we think across every service, for every client.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="flex flex-col items-center text-center p-8 md:p-12 rounded-[3rem] bg-white border border-stone-200 shadow-xl shadow-stone-200/20 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                                {/* Icon Sphere */}
                                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} p-0.5 mb-8 transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-stone-900">
                                        <step.icon size={36} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-stone-900 mb-6 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-stone-600 leading-relaxed font-medium">
                                    {step.description}
                                </p>

                                {index < steps.length - 1 && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 hidden lg:block">
                                        <div className="p-2 rounded-full bg-white border border-stone-200 shadow-sm text-stone-300">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
