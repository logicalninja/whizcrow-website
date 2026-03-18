"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Target, BarChart2, Eye, Star, DollarSign, ArrowRight, ShieldAlert, Globe, Building2, Filter, Trophy, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
    {
        id: "building",
        stage: "Building",
        subtitle: "Laying the foundation",
        description: "You need a rock-solid infrastructure to be found and free up your time.",
        benefits: [
            { icon: Eye, title: "More Visibility", text: "Get found directly on search engines when people look for exactly what you do." },
            { icon: Zap, title: "AI Automation", text: "Chatbots and systems that handle the busywork, taking the operational burden off you." },
            { icon: Building2, title: "Authority Design", text: "Premium branding and web presence so you look enterprise-grade from day one." },
            { icon: Filter, title: "Lead Capture", text: "Foundational funnels and systems designed to turn early, passive traffic into real contacts." }
        ]
    },
    {
        id: "scaling",
        stage: "Scaling",
        subtitle: "Accelerating growth",
        description: "You've proven the model. Now you need a predictable flow of operations.",
        benefits: [
            { icon: Target, title: "Lead Generation", text: "Consistently turn targeted traffic into highly qualified, converting prospects." },
            { icon: DollarSign, title: "Revenue Pipelines", text: "E-commerce and performance marketing campaigns designed strictly to multiply ROI." },
            { icon: Globe, title: "Omni-Channel Scale", text: "Seamlessly expand your reach systematically across search, social, and display networks." },
            { icon: TrendingUp, title: "Data-Driven Growth", text: "Predictable, scalable customer acquisition sequences built on hard analytics." }
        ]
    },
    {
        id: "established",
        stage: "Established",
        subtitle: "Protecting the empire",
        description: "You've built scale. Now you defend your reputation and dominate.",
        benefits: [
            { icon: Star, title: "Review Dominance", text: "Curate a 5-star reputation engine that actively deflects negative narratives at scale." },
            { icon: BarChart2, title: "Conversion Optimization", text: "Refine every touchpoint to squeeze out maximum yield across massive audiences." },
            { icon: ShieldAlert, title: "Defensive PR", text: "Proactive public relations and reputation shielding to protect your market capitalization." },
            { icon: Trophy, title: "Market Leadership", text: "Advanced enterprise SEO and authority strategies to aggressively outflank major competitors." }
        ]
    }
];

export function BusinessBenefits() {
    const [activeTab, setActiveTab] = useState<string>(stages[0].id);

    const activeStage = stages.find(s => s.id === activeTab) || stages[0];
    const isDarkTheme = activeStage.id === 'established';

    return (
        <section className="py-24 md:py-32 bg-stone-50 border-t border-stone-200">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
                        Built for where you are. <br className="hidden sm:block" />
                        <span className="text-stone-400">Designed for where you&apos;re going.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Navigation Tabs */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {stages.map((stage) => {
                            const isActive = activeTab === stage.id;
                            return (
                                <button
                                    key={stage.id}
                                    onClick={() => setActiveTab(stage.id)}
                                    className={cn(
                                        "text-left p-6 md:p-8 rounded-3xl transition-all duration-300 border",
                                        isActive
                                            ? "bg-white border-stone-200 shadow-xl shadow-stone-200/50 scale-[1.02]"
                                            : "bg-transparent border-transparent hover:bg-stone-200/50 text-stone-500 hover:text-stone-900"
                                    )}
                                >
                                    <div className="flex flex-col gap-1">
                                        <span className={cn(
                                            "text-xs font-bold uppercase tracking-widest",
                                            isActive ? "text-primary-dark" : "inherit"
                                        )}>
                                            {stage.subtitle}
                                        </span>
                                        <h3 className={cn(
                                            "text-2xl font-bold tracking-tight flex items-center justify-between",
                                            isActive ? "text-stone-900" : "inherit"
                                        )}>
                                            {stage.stage}
                                            {isActive && <ArrowRight size={20} className="text-primary opacity-50" />}
                                        </h3>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Display */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className={cn(
                                    "p-8 md:p-12 rounded-[2.5rem] border shadow-2xl relative overflow-hidden",
                                    isDarkTheme
                                        ? "bg-onyx border-onyx-light shadow-onyx/20"
                                        : "bg-white border-stone-200 shadow-stone-200/50"
                                )}
                            >
                                {/* Decorative glow for Established phase */}
                                {isDarkTheme && (
                                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                                )}

                                <div className="relative z-10">
                                    <h4 className={cn(
                                        "text-2xl md:text-3xl font-bold mb-4",
                                        isDarkTheme ? "text-white" : "text-stone-900"
                                    )}>
                                        {activeStage.stage} Phase
                                    </h4>
                                    <p className={cn(
                                        "text-lg mb-12 md:mb-16 max-w-xl leading-relaxed",
                                        isDarkTheme ? "text-stone-300" : "text-stone-600"
                                    )}>
                                        {activeStage.description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                                        {activeStage.benefits.map((benefit, i) => (
                                            <div key={i} className="flex flex-col gap-4">
                                                <div className={cn(
                                                    "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0",
                                                    isDarkTheme ? "bg-white/10 text-primary border border-white/10" : "bg-stone-50 border border-stone-200 text-primary-dark"
                                                )}>
                                                    <benefit.icon size={24} />
                                                </div>
                                                <div>
                                                    <h5 className={cn(
                                                        "font-bold text-xl mb-3",
                                                        isDarkTheme ? "text-white" : "text-stone-900"
                                                    )}>
                                                        {benefit.title}
                                                    </h5>
                                                    <p className={cn(
                                                        "leading-relaxed",
                                                        isDarkTheme ? "text-stone-400" : "text-stone-600"
                                                    )}>
                                                        {benefit.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
