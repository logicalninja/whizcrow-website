"use client";

import { motion } from "framer-motion";
import {
    Heart, Crown, Zap, ShieldAlert, Users, Lock,
    Scale, EyeOff, ShieldCheck, Radar, ScanLine
} from "lucide-react";
import { BrandCurve } from "../ui/BrandCurve";

const pillars = [
    {
        icon: Heart,
        title: "Sentiment (30%)",
        metric: "Market Mood",
        desc: "Measurement of public empathy and support.",
        color: "text-primary", // Lime
        border: "border-primary/20",
        bg: "bg-primary/5"
    },
    {
        icon: Crown,
        title: "Authority (20%)",
        metric: "Page-1 Dominance",
        desc: "Control over core brand search entities.",
        color: "text-purple-500", // Purple
        border: "border-purple-500/20",
        bg: "bg-purple-500/5"
    },
    {
        icon: Zap,
        title: "Influence (15%)",
        metric: "Executive Clarity",
        desc: "Reach and resonance of leadership voices.",
        color: "text-purple-500", // Purple
        border: "border-purple-500/20",
        bg: "bg-purple-500/5"
    },
    {
        icon: ShieldAlert,
        title: "Crisis Resilience (15%)",
        metric: "Recovery Alpha",
        desc: "Velocity of return to baseline post-threat.",
        color: "text-orange-500", // Orange
        border: "border-orange-500/20",
        bg: "bg-orange-500/5"
    },
    {
        icon: Users,
        title: "Engagement (10%)",
        metric: "Authentic Traction",
        desc: "Depth of community-led brand advocacy.",
        color: "text-primary", // Lime
        border: "border-primary/20",
        bg: "bg-primary/5"
    },
    {
        icon: Lock,
        title: "Trust & Compliance (10%)",
        metric: "Governance Alpha",
        desc: "Alignment with institutional brand safety.",
        color: "text-orange-500", // Orange
        border: "border-orange-500/20",
        bg: "bg-orange-500/5"
    }
];

export function BramFramework() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Curves */}
            <BrandCurve
                className="top-0 right-0 w-[600px] opacity-[0.03]"
                rotation={45}
                color="#8B5CF6"
            />
            <BrandCurve
                className="bottom-0 left-0 w-[800px] opacity-[0.03]"
                rotation={225}
                color="#84CC16"
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header Context */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 mb-6"
                    >
                        <Radar size={14} className="text-secondary" />
                        <span className="text-xs font-bold text-stone-600 tracking-wide uppercase">The Proprietary Standard</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">
                        WhizBRAM<span className="text-primary font-serif italic text-3xl align-top">®</span>
                    </h2>
                    <p className="text-xl text-stone-600 font-medium">
                        The world&apos;s most advanced <span className="text-stone-900 font-bold underline decoration-primary decoration-4 underline-offset-4">Brand Reputation Audit Matrix</span>. We measure what matters.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-center">

                    {/* Left Column: Input Vectors */}
                    <div className="space-y-4">
                        {pillars.slice(0, 3).map((p, idx) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-8 rounded-[2rem] border ${p.border} ${p.bg} hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 transition-all group`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-2xl bg-white shadow-sm border ${p.border}`}>
                                        <p.icon className={`${p.color}`} size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-1">{p.title}</h4>
                                        <div className="text-xl font-bold text-stone-900 mb-2 leading-tight">{p.metric}</div>
                                        <p className="text-sm font-medium text-stone-500 leading-relaxed">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center: The Score Engine */}
                    <div className="relative aspect-square flex items-center justify-center">
                        {/* Animated Concentric Rings */}
                        <div className="absolute inset-0 rounded-full border-[10px] border-stone-100/50" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-t-2 border-primary/40"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 rounded-full border-b-2 border-secondary/20"
                        />

                        <div className="relative z-10 text-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                className="w-56 h-56 rounded-full bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-stone-100 flex flex-col items-center justify-center"
                            >
                                <span className="text-[10px] font-black text-stone-400 tracking-[0.3em] uppercase mb-1">Health Score</span>
                                <div className="text-7xl font-black text-stone-900 leading-none">98.5</div>
                                <div className="flex items-center gap-1.5 mt-3 text-primary">
                                    <ShieldCheck size={14} />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-600">Verified</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Scan Line */}
                        <motion.div
                            animate={{ y: [-150, 150] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
                        />
                    </div>

                    {/* Right Column: Protective Vectors */}
                    <div className="space-y-4">
                        {pillars.slice(3, 6).map((p, idx) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-8 rounded-[2rem] border ${p.border} ${p.bg} hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 transition-all group`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-2xl bg-white shadow-sm border ${p.border}`}>
                                        <p.icon className={`${p.color}`} size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-1">{p.title}</h4>
                                        <div className="text-xl font-bold text-stone-900 mb-2 leading-tight">{p.metric}</div>
                                        <p className="text-sm font-medium text-stone-500 leading-relaxed">
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Footer Badges */}
                <div className="mt-24 pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-stone-500 font-bold text-xs">
                            <Scale size={16} className="text-primary" />
                            COMPLIANCE READY
                        </div>
                        <div className="flex items-center gap-2 text-stone-500 font-bold text-xs uppercase italic">
                            <EyeOff size={16} className="text-secondary" />
                            Private Intelligence
                        </div>
                    </div>
                    <div className="text-[10px] font-black text-stone-400 uppercase tracking-widest text-center md:text-right">
                        System Build: whizbram_engine_v4_stable // verified by brand safety protocol
                    </div>
                </div>
            </div>
        </section>
    );
}
