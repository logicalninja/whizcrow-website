"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight, Check, X, Shield, Clock, Zap, Target,
    Factory, UserRound, TrendingUp, Search, Bot, Cpu,
    Headphones, Rocket, Users, Lock, Sparkles, BarChart3,
    Globe, MousePointerClick, Award, Library, UserCheck,
    BookOpen, PenTool, Palette, Eye, MessageSquare,
    Anchor, Stars, Heart, Share2, Megaphone, CheckCircle,
    Newspaper, Quote, ShieldAlert, ShoppingBag, LayoutGrid,
    Settings, MousePointer2, PieChart, ShieldCheck, MapPin,
    Ticket, Plane, Calendar, Mic, Mail, HelpCircle
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/home/Newsletter";
import { cn } from "@/lib/utils";

// Icon mapping to resolve strings to components
const IconMap: Record<string, any> = {
    Shield, Clock, Zap, Target, Factory, UserRound, TrendingUp, Search,
    Bot, Cpu, Headphones, Rocket, Users, Lock, Sparkles, BarChart3,
    Globe, MousePointerClick, Award, Library, UserCheck, BookOpen,
    PenTool, Palette, Eye, MessageSquare, Anchor, Stars, Heart,
    Share2, Megaphone, CheckCircle, Newspaper, Quote, ShieldAlert,
    ShoppingBag, LayoutGrid, Settings, MousePointer2, PieChart,
    ShieldCheck, MapPin, Ticket, Plane, Calendar, Mic, Mail
};

function resolveIcon(name: string) {
    return IconMap[name] || HelpCircle;
}

interface ServiceLayoutProps {
    id: string;
    title: string;
    heroSubtitle: string;
    heroDescription: string;
    stats: { label: string; value: string; icon: string }[];
    benefits: { title: string; desc: string }[];
    targetAudience: { title: string; desc: string; icon: string }[];
    steps: { title: string; desc: string }[];
    comparison: { label: string; others: string; us: string }[];
    results: string[];
    nextServices: { title: string; link: string }[];
}

export function ServiceLayout({
    title,
    heroSubtitle,
    heroDescription,
    stats,
    benefits,
    targetAudience,
    steps,
    comparison,
    results,
    nextServices
}: ServiceLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <Header />

            <main className="flex-grow pt-24">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-white">
                    <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-[radial-gradient(circle_at_top,_var(--primary)_0%,_transparent_60%)] opacity-10" />
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col items-center text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <span className="px-4 py-1.5 rounded-full bg-stone-100 text-stone-500 text-[10px] font-black uppercase tracking-[0.2em] border border-stone-200">
                                    Strategic Capability
                                </span>
                                <div className="h-px w-8 bg-stone-200" />
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">Data. AI. Human.</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-8xl font-black text-stone-950 mb-8 tracking-tighter leading-tight"
                            >
                                {title}. <br />
                                <span className="italic text-primary">{heroSubtitle}.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl font-medium mb-12 mx-auto"
                            >
                                {heroDescription}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col md:flex-row gap-4 justify-center"
                            >
                                <Link
                                    href="/contact"
                                    className="px-12 py-6 bg-stone-950 text-white font-black text-lg rounded-full hover:bg-stone-800 transition-all shadow-xl active:scale-95"
                                >
                                    Talk to a Specialist
                                </Link>
                                <Link
                                    href="#benefits"
                                    className="px-12 py-6 bg-white text-stone-950 border-2 border-stone-100 font-black text-lg rounded-full hover:border-stone-200 transition-all active:scale-95"
                                >
                                    View Capabilities
                                </Link>
                            </motion.div>
                        </div>

                        {/* Snapshot Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32">
                            {stats.map((stat, i) => {
                                const StatIcon = resolveIcon(stat.icon);
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="bg-stone-50 border border-stone-100 p-8 rounded-[2.5rem] flex flex-col items-center text-center"
                                    >
                                        <div className="p-3 rounded-2xl bg-white shadow-sm mb-4 text-primary">
                                            <StatIcon size={24} />
                                        </div>
                                        <p className="text-[10px] font-black tracking-widest text-stone-400 uppercase mb-1">{stat.label}</p>
                                        <p className="text-2xl font-black text-stone-900">{stat.value}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Benefits / What You Get */}
                <section id="benefits" className="py-32 bg-stone-50">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-stone-950 tracking-tighter mb-6">
                                What You <span className="text-primary italic">Get.</span>
                            </h2>
                            <p className="text-stone-500 font-medium text-lg">Measurable outcomes, engineered for your growth.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-10 rounded-[3rem] bg-white border border-stone-100 flex flex-col group hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-900 mb-8 group-hover:bg-primary transition-colors">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-2xl font-black text-stone-900 mb-4 tracking-tight">{benefit.title}</h3>
                                    <p className="text-stone-600 font-medium leading-relaxed">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Target Audience / Who Uses This */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-stone-950 tracking-tighter mb-6">
                                Built for high <span className="text-primary italic">standards.</span>
                            </h2>
                            <p className="text-stone-500 font-medium text-lg">Who depends on our {title} capability.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {targetAudience.map((audience, i) => {
                                const AudienceIcon = resolveIcon(audience.icon);
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="p-12 rounded-[3.5rem] bg-stone-50 border border-stone-100 flex items-start gap-8"
                                    >
                                        <div className="p-4 rounded-3xl bg-white shadow-xl text-primary flex-shrink-0">
                                            <AudienceIcon size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-stone-900 mb-3 tracking-tight">{audience.title}</h3>
                                            <p className="text-stone-600 font-medium leading-relaxed">{audience.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* How It Works / Steps */}
                <section className="py-32 bg-stone-950 text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--primary)_0%,_transparent_50%)]" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                                    Precision. <br />
                                    <span className="text-primary italic">Proven Workflow.</span>
                                </h2>
                            </div>
                            <div className="text-stone-400 font-black tracking-[0.2em] text-xs uppercase mb-4">
                                4-Stage Intelligence Cycle
                            </div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className="text-8xl font-black text-white/5 mb-8 select-none">{i + 1}</div>
                                    <div className="absolute top-12 left-0 w-full pr-8">
                                        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                                        <p className="text-stone-400 font-medium leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-stone-950 tracking-tighter mb-6">
                                Why {title} <span className="text-primary italic">Works.</span>
                            </h2>
                            <p className="text-stone-500 font-medium text-lg">Outcome-driven vs. activity-based.</p>
                        </div>

                        <div className="overflow-hidden border border-stone-100 rounded-[3rem] shadow-2xl shadow-stone-200/50">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-stone-50">
                                        <th className="p-8 font-black text-sm uppercase tracking-widest text-stone-400 border-b border-stone-100">Capability</th>
                                        <th className="p-8 font-black text-sm uppercase tracking-widest text-stone-400 border-b border-stone-100">Most Others</th>
                                        <th className="p-8 font-black text-sm uppercase tracking-widest text-primary border-b border-stone-100">WhizCrow</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.map((row, i) => (
                                        <tr key={i} className="hover:bg-stone-50/50 transition-colors">
                                            <td className="p-8 font-bold text-stone-900 border-b border-stone-100">{row.label}</td>
                                            <td className="p-8 font-medium text-stone-500 border-b border-stone-100">{row.others}</td>
                                            <td className="p-8 font-black text-stone-950 bg-primary/5 border-b border-stone-100">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-black">
                                                        <Check size={12} strokeWidth={3} />
                                                    </div>
                                                    {row.us}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="py-32 bg-stone-50 relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="bg-white p-12 md:p-24 rounded-[4rem] border border-stone-100 shadow-xl relative z-10">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h2 className="text-4xl md:text-6xl font-black text-stone-950 tracking-tighter mb-8 italic">
                                        Results You <br />
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Can Expect.</span>
                                    </h2>
                                    <div className="space-y-4">
                                        {results.map((result, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black flex-shrink-0">
                                                    <Check size={14} strokeWidth={3} />
                                                </div>
                                                <p className="font-bold text-stone-900">{result}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-12 bg-stone-950 rounded-[3rem] text-white">
                                    <h3 className="text-2xl font-black mb-8 tracking-tight italic text-primary">Next Steps</h3>
                                    <div className="space-y-6">
                                        <p className="text-stone-400 font-medium leading-relaxed">
                                            High-velocity marketing moves fast. Start today to regain control and dominate your category.
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="w-full py-5 bg-primary text-black font-black text-xl rounded-full hover:bg-primary-dark transition-all flex items-center justify-center gap-3 active:scale-95"
                                        >
                                            Start Project <ArrowRight size={22} />
                                        </Link>
                                        <div className="pt-8 border-t border-white/10">
                                            <p className="text-[10px] uppercase font-black tracking-widest text-stone-500 mb-4">Related Capabilities</p>
                                            <div className="flex flex-wrap gap-4">
                                                {nextServices.map((service, i) => (
                                                    <Link
                                                        key={i}
                                                        href={service.link}
                                                        className="text-white hover:text-primary font-bold transition-colors flex items-center gap-1 group"
                                                    >
                                                        {service.title} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
