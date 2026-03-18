"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/constants/services";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-stone-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight mb-6">
                        Explore our <span className="text-primary italic">Capabilities.</span>
                    </h2>
                    <p className="text-stone-500 font-medium max-w-2xl mx-auto">
                        A full-scale ecosystem built to take your brand from foundation to growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Link
                                href={service.link}
                                className="group relative flex flex-col h-full p-8 rounded-[2.5rem] bg-stone-50 hover:bg-white border border-stone-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200/50"
                            >
                                {/* Icon Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className="p-4 rounded-2xl bg-white shadow-sm ring-1 ring-stone-100 group-hover:bg-primary text-stone-900 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20">
                                        <service.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="p-2 rounded-full bg-stone-200/50 group-hover:bg-primary/20 transition-colors">
                                        <ArrowRight size={16} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow flex flex-col">
                                    <h3 className="text-2xl font-black text-stone-900 mb-3 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-stone-500 text-sm font-bold uppercase tracking-widest mb-4">
                                        {service.label}
                                    </p>
                                    <p className="text-stone-600 leading-relaxed font-medium mb-8">
                                        {service.desc}
                                    </p>

                                    {/* Info Blocks */}
                                    <div className="mt-auto space-y-4">
                                        <div className="pt-6 border-t border-stone-200">
                                            <p className="text-[10px] font-black uppercase tracking-tighter text-stone-400 mb-1">Outcome</p>
                                            <p className="text-xs font-bold text-stone-800 leading-snug">
                                                {service.whatItDoes}
                                            </p>
                                        </div>
                                        <div className="pt-4 border-t border-stone-200">
                                            <p className="text-[10px] font-black uppercase tracking-tighter text-stone-400 mb-1">Best For</p>
                                            <p className="text-xs font-bold text-stone-800 leading-snug">
                                                {service.bestFor}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Detail */}
                                <div className="absolute bottom-6 right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark">Details</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
