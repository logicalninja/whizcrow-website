"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck, Map, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Technical Audit",
        desc: "WhizCrow conducts a deep-layer audit across 400M+ sources to map your current BRAM™ Score.",
        icon: Search
    },
    {
        number: "02",
        title: "Risk Calibration",
        desc: "We analyze the correlation between search volatility and market-cap risk for your sector.",
        icon: ShieldCheck
    },
    {
        number: "03",
        title: "Deployment Map",
        desc: "Implementation of the Integrity Core and Intelligence Arsenal defense systems.",
        icon: Map
    }
];

export function DiscoveryProtocol() {
    return (
        <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400 border-b border-stone-200 pb-4">Discovery Protocol</h4>
            <div className="space-y-6">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 items-start"
                    >
                        <div className="text-3xl font-black text-stone-200 tabular-nums">
                            {step.number}
                        </div>
                        <div>
                            <h5 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h5>
                            <p className="text-stone-500 font-medium leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200 flex items-center justify-between group cursor-pointer hover:bg-stone-200 transition-colors">
                <span className="font-bold text-stone-800">Review the Full Framework</span>
                <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );
}
