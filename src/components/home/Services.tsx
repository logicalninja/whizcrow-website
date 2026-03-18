"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/constants/services";

export function Services() {
    return (
        <section className="py-24 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                            Engineered exactly for your current challenges.
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group p-8 bg-white rounded-3xl border border-stone-200 hover:border-stone-900 hover:shadow-xl transition-all duration-300 flex flex-col items-start"
                        >
                            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                                <service.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h4>
                            <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                                {service.desc}
                            </p>
                            <Link href={service.link} className="flex items-center gap-2 text-sm font-bold text-stone-900 group-hover:text-secondary mt-auto transition-colors">
                                Explore Capability <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}

                    <div className="p-8 bg-stone-900 rounded-3xl flex flex-col justify-center items-start text-white col-span-1 md:col-span-2 xl:col-span-2">
                        <h4 className="text-2xl font-bold mb-4">You shouldn't have to map this out yourself.</h4>
                        <p className="text-stone-400 mb-8 text-lg">Tell us where it hurts, and our strategy team will tell you exactly which parts of this matrix will fix it.</p>
                        <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-stone-900 font-bold hover:bg-stone-100 transition-colors">
                            Talk To Strategy
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
