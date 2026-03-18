"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Crown, Mic2, ShieldAlert, Users, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
    {
        id: "sentiment",
        title: "Sentiment",
        weight: "30%",
        icon: Heart,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        description: "The immediate market mood. We measure positive vs. negative mentions across 50+ platforms.",
        metrics: ["Net Sentiment Score", "Review Velocity", "Emotion Analysis"]
    },
    {
        id: "authority",
        title: "Authority",
        weight: "20%",
        icon: Crown,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        description: "Control of the narrative. Do you own the Google Knowledge Graph and Page 1 results?",
        metrics: ["SERP Ownership", "Domain Authority", "Wiki/Knowledge Graph"]
    },
    {
        id: "influence",
        title: "Influence",
        weight: "15%",
        icon: Mic2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        description: "Leadership visibility. Executive presence and thought leadership in tier-1 media.",
        metrics: ["Executive Posting", "Media Features", "Share of Voice"]
    },
    {
        id: "crisis",
        title: "Crisis Resilience",
        weight: "15%",
        icon: ShieldAlert,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        description: "Your brand's immune system. How fast do you detect and neutralize threats?",
        metrics: ["Reaction Speed", "Recovery Time", "Protocol Readiness"]
    },
    {
        id: "engagement",
        title: "Engagement",
        weight: "10%",
        icon: Users,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        description: "Community traction. Are you talking to a void, or building an army of advocates?",
        metrics: ["Community Growth", "Interaction Rate", "Advocacy"]
    },
    {
        id: "trust",
        title: "Trust & Compliance",
        weight: "10%",
        icon: Scale,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        description: "The GRC Foundation. Governance, Risk, and Compliance standards.",
        metrics: ["Regulatory Standing", "Transparency", "Data Privacy"]
    }
];

export function BramPillars() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
                <motion.div
                    key={pillar.id}
                    layout
                    onClick={() => setActive(active === pillar.id ? null : pillar.id)}
                    className={cn(
                        "relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden group hover:scale-[1.02]",
                        active === pillar.id ? "bg-slate-800 border-primary shadow-2xl scale-[1.02]" : "bg-card border-white/5 hover:border-white/10"
                    )}
                >
                    {/* Background Gradient */}
                    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity", pillar.bg)} />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-3 rounded-xl", pillar.bg, pillar.color)}>
                                <pillar.icon size={24} />
                            </div>
                            <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono font-bold text-slate-400 border border-white/5">
                                {pillar.weight}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            {pillar.description}
                        </p>

                        <AnimatePresence>
                            {(active === pillar.id) && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="border-t border-white/10 pt-4"
                                >
                                    <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-2">Key Metrics</h4>
                                    <ul className="space-y-1">
                                        {pillar.metrics.map((m) => (
                                            <li key={m} className="text-sm text-slate-300 flex items-center gap-2">
                                                <div className={cn("w-1.5 h-1.5 rounded-full", pillar.color.replace("text-", "bg-"))} />
                                                {m}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {active !== pillar.id && (
                            <div className="text-xs text-primary mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Click to explore metrics &rarr;
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
