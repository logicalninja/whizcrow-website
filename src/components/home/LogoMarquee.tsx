"use client";

import { motion } from "framer-motion";

// Placeholder logos - in a real app these would be SVGs or Images
const partners = [
    "Sprout Social", "Semrush", "Brandwatch", "Meltwater",
    "Sprinklr", "Trustpilot", "Yext", "Podium",
    "Sprout Social", "Semrush", "Brandwatch", "Meltwater",
    "Sprinklr", "Trustpilot", "Yext", "Podium"
];

export function LogoMarquee() {
    return (
        <div className="relative w-full overflow-hidden bg-slate-950 py-10 border-y border-white/5">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
                    Trusted Global Partners
                </h3>
            </div>

            <div className="flex relative items-center">
                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                <motion.div
                    className="flex gap-16 pr-16 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="text-2xl font-bold text-slate-500 hover:text-slate-300 transition-colors cursor-default"
                        >
                            {partner}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
