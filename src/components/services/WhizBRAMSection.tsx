"use client";

import { motion } from "framer-motion";
import { Heart, Crown, Zap, ShieldAlert, Users, Lock } from "lucide-react";

const metrics = [
    // Left column (top → bottom)
    {
        label: "Sentiment",
        pct: "30%",
        name: "Market Mood",
        icon: Heart,
        accent: "#98e600",
        bg: "rgba(152,230,0,0.07)",
        border: "rgba(152,230,0,0.18)",
    },
    {
        label: "Authority",
        pct: "20%",
        name: "Page-1 Dominance",
        icon: Crown,
        accent: "#9333ea",
        bg: "rgba(147,51,234,0.10)",
        border: "rgba(147,51,234,0.22)",
    },
    {
        label: "Influence",
        pct: "15%",
        name: "Executive Visibility",
        icon: Zap,
        accent: "#9333ea",
        bg: "rgba(147,51,234,0.10)",
        border: "rgba(147,51,234,0.22)",
    },
    // Right column (top → bottom)
    {
        label: "Crisis Resilience",
        pct: "15%",
        name: "Recovery Velocity",
        icon: ShieldAlert,
        accent: "#f97316",
        bg: "rgba(249,115,22,0.08)",
        border: "rgba(249,115,22,0.20)",
    },
    {
        label: "Engagement",
        pct: "10%",
        name: "Authentic Traction",
        icon: Users,
        accent: "#98e600",
        bg: "rgba(152,230,0,0.07)",
        border: "rgba(152,230,0,0.18)",
    },
    {
        label: "Trust & Compliance",
        pct: "10%",
        name: "Governance Verification",
        icon: Lock,
        accent: "#f97316",
        bg: "rgba(249,115,22,0.08)",
        border: "rgba(249,115,22,0.20)",
    },
];

function MetricCard({
    metric,
    index,
}: {
    metric: (typeof metrics)[0];
    index: number;
}) {
    const Icon = metric.icon;
    return (
        <motion.div
            initial={{ opacity: 0, x: index < 3 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + (index % 3) * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 rounded-2xl px-5 py-4"
            style={{
                background: metric.bg,
                border: `1px solid ${metric.border}`,
            }}
        >
            <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: metric.border }}
            >
                <Icon size={20} style={{ color: metric.accent }} />
            </div>
            <div>
                <p
                    className="text-[10px] font-black uppercase tracking-widest mb-0.5"
                    style={{ color: metric.accent }}
                >
                    {metric.label} ({metric.pct})
                </p>
                <p className="text-white font-bold text-base leading-tight">
                    {metric.name}
                </p>
            </div>
        </motion.div>
    );
}

export function WhizBRAMSection() {
    const leftMetrics = metrics.slice(0, 3);
    const rightMetrics = metrics.slice(3);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#0d0d0d" }}>
            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black uppercase tracking-[0.3em] mb-4"
                        style={{ color: "#98e600" }}
                    >
                        The Science of Reputation
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-5xl md:text-7xl font-black text-white mb-5 tracking-tighter"
                    >
                        WhizBRAM
                        <span style={{ color: "#98e600" }}>™</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="text-stone-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        The only{" "}
                        <span className="text-white font-semibold">
                            6-Point Diagnostic Engine
                        </span>{" "}
                        that turns your reputation into a hard metric (0–100).
                    </motion.p>
                </div>

                {/* 3-column layout: left metrics | dial | right metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">

                    {/* Left metrics */}
                    <div className="flex flex-col gap-4">
                        {leftMetrics.map((m, i) => (
                            <MetricCard key={m.label} metric={m} index={i} />
                        ))}
                    </div>

                    {/* Central score dial */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                        className="flex items-center justify-center mx-auto"
                    >
                        <div className="relative flex items-center justify-center" style={{ width: 280, height: 280 }}>
                            {/* Concentric rings */}
                            {[280, 224, 168, 112].map((size, i) => (
                                <div
                                    key={size}
                                    className="absolute rounded-full"
                                    style={{
                                        width: size,
                                        height: size,
                                        border: `1px solid rgba(152,230,0,${0.06 + i * 0.04})`,
                                        background:
                                            i === 3
                                                ? "rgba(152,230,0,0.04)"
                                                : "transparent",
                                    }}
                                />
                            ))}

                            {/* Score */}
                            <div className="relative z-10 text-center">
                                <p
                                    className="text-7xl font-black leading-none tracking-tighter"
                                    style={{ color: "#ffffff" }}
                                >
                                    98.5
                                </p>
                                <p
                                    className="text-[10px] font-black uppercase tracking-[0.25em] mt-2"
                                    style={{ color: "#98e600" }}
                                >
                                    Target Score
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right metrics */}
                    <div className="flex flex-col gap-4">
                        {rightMetrics.map((m, i) => (
                            <MetricCard key={m.label} metric={m} index={i + 3} />
                        ))}
                    </div>
                </div>

                {/* Bottom caption */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-stone-600 text-sm mt-14"
                >
                    WhizBRAM™ is a proprietary WhizCrow diagnostic. Scores are calculated using live data across sentiment, authority, influence, resilience, engagement, and compliance vectors.
                </motion.p>
            </div>
        </section>
    );
}
