"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
    Shield, Cpu, ArrowRight, Bot, Target,
    TrendingUp, Search, Layers,
    Database, UserCheck, Zap,
    ArrowUpRight, Code2, LineChart,
    Users, Brain, BarChart3, Megaphone
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import JsonLd from "@/components/seo/JsonLd";
import { TrustMarquee } from "@/components/home/TrustMarquee";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB] selection:bg-primary selection:text-black">
            <JsonLd type="AboutPage" />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://whizcrow.com/about" }
                ]
            }} />
            <Header />

            <main className="flex-grow">
                {/* Refined Hero - Systematic Color Balance */}
                <section className="relative pt-48 pb-32 overflow-hidden bg-white">
                    {/* Balanced Brand Accents */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
                        <div className="absolute top-0 left-0 w-[40%] aspect-square bg-purple-500/5 blur-[120px] rounded-full" />
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <span className="px-3 py-1 rounded-md bg-stone-100 text-stone-600 text-[10px] font-black uppercase tracking-[0.2em] border border-stone-200">
                                    EST. 2017
                                </span>
                                <div className="h-px w-8 bg-stone-200" />
                                <span className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">Our Story</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-6xl md:text-[7rem] font-black text-stone-900 mb-8 tracking-tighter leading-[0.95]"
                            >
                                More than <br />
                                <span className="text-primary italic font-serif">an agency.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="text-2xl md:text-3xl text-stone-500 leading-tight font-medium max-w-2xl"
                            >
                                Since 2017, we have been building the technology that helps companies scale with actual data.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Veteran Leadership Section - NEW */}
                <section className="py-32 bg-stone-50 border-y border-stone-200/60">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div {...fadeIn}>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">The Human Edge</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-8 tracking-tight leading-none">
                                    Led by <br /> <span className="text-purple-600">Industry Veterans.</span>
                                </h2>
                                <p className="text-xl text-stone-500 font-medium leading-relaxed mb-10 max-w-lg">
                                    Our leadership team isn&apos;t just managers. We are veterans from the fields of **MarComm, AI, Data Science, and Growth Marketing**, bringing decades of combined experience to every project.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "MarComm Specialists", icon: Megaphone, color: "text-purple-500" },
                                        { label: "AI Engineers", icon: Brain, color: "text-primary-dark" },
                                        { label: "Data Consultants", icon: BarChart3, color: "text-teal-500" },
                                        { label: "Marketing Experts", icon: Target, color: "text-orange-500" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col gap-3 p-6 bg-white rounded-3xl border border-stone-200 shadow-sm">
                                            <item.icon className={item.color} size={24} />
                                            <span className="text-stone-900 font-bold text-xs uppercase tracking-tight leading-none">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-square rounded-[4rem] bg-stone-900 overflow-hidden group shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 mix-blend-overlay" />
                                <div className="p-12 h-full flex flex-col justify-end text-white">
                                    <Users size={48} className="text-white/40 mb-6" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                                        Collective intelligence is our greatest asset.
                                    </p>
                                    <p className="text-stone-400 text-lg">
                                        We combine creative intuition with engineering precision to solve the hardest growth problems.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Journey - Grounded Narrative */}
                <section className="py-40 bg-white relative">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-32 items-baseline">
                            <motion.div {...fadeIn}>
                                <h2 className="text-5xl md:text-8xl font-black text-stone-950 mb-12 tracking-tighter leading-none italic">
                                    Our <span className="text-primary leading-none">Journey.</span>
                                </h2>
                            </motion.div>

                            <div className="space-y-12">
                                <div className="space-y-6 text-xl md:text-2xl font-medium text-stone-500 leading-relaxed">
                                    <p>
                                        We started in 2017 with a simple idea: <span className="text-stone-900">marketing should be as rigorous as engineering.</span>
                                    </p>
                                    <p>
                                        Since then, we have grown into a full-capacity agency that values transparency and results above all else. We didn&apos;t just add services; we built specialized divisions for every stage of the growth funnel.
                                    </p>
                                    <div className="p-8 bg-stone-50 border-l-4 border-primary rounded-r-3xl">
                                        <p className="text-stone-900 font-bold italic">
                                            &quot;Consistency is more important than trends. We build systems that work long-term.&quot;
                                        </p>
                                    </div>
                                    <p className="text-lg uppercase tracking-widest font-black text-stone-400">
                                        Today, we help global brands win through data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Systematic Methodology Section - Data > AI > Human */}
                <section className="py-40 bg-stone-950 text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--color-primary)_0%,_transparent_60%)]" />
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="text-center mb-24">
                            <motion.h2 {...fadeIn} className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
                                How We <span className="text-primary italic font-serif leading-none">Think.</span>
                            </motion.h2>
                            <p className="text-xl text-stone-400 font-medium max-w-2xl mx-auto leading-relaxed">
                                A simple, repeatable process for delivering predictable results.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                {
                                    stage: "Data",
                                    title: "No Guesswork.",
                                    desc: "We look at the numbers first. Search behavior, competitor traffic, and market signals tell us exactly where the opportunity lies.",
                                    icon: Database,
                                    accent: "border-purple-500/30 text-purple-400",
                                    dot: "bg-purple-500"
                                },
                                {
                                    stage: "AI",
                                    title: "Unlimited Scale.",
                                    desc: "Our proprietary AI tools process millions of data points to execute tasks faster and more accurately than manual teams.",
                                    icon: Bot,
                                    accent: "border-primary/30 text-primary",
                                    dot: "bg-primary"
                                },
                                {
                                    stage: "Human",
                                    title: "Strategic Depth.",
                                    desc: "Our veterans apply the final filter. Strategy, creativity, and judgment ensure the work resonates with real people.",
                                    icon: UserCheck,
                                    accent: "border-teal-500/30 text-teal-400",
                                    dot: "bg-teal-500"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.stage}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className={`p-14 rounded-[3.5rem] bg-white/5 border ${item.accent} backdrop-blur-sm group hover:bg-white/10 transition-all duration-500`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-white/10 ${item.text} group-hover:scale-110 transition-transform`}>
                                        <item.icon size={32} />
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Step 0{i + 1}</span>
                                    </div>
                                    <h3 className="text-4xl font-black mb-4">{item.stage}.</h3>
                                    <h4 className="text-lg font-bold mb-6 opacity-80">{item.title}</h4>
                                    <p className="text-lg text-stone-400 font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* R&D Lab - Orange Accent Focus */}
                <section className="py-40 bg-stone-50">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                    INTERNAL TECHNOLOGY
                                </div>
                                <h2 className="text-5xl md:text-[6rem] font-black text-stone-900 mb-10 tracking-tighter leading-[0.95]">
                                    We build the <br />
                                    <span className="text-orange-500 italic font-serif">scaling engines.</span>
                                </h2>
                                <p className="text-2xl text-stone-500 font-medium leading-relaxed mb-12">
                                    Standard tools have limits. That&apos;s why we have an internal lab that builds proprietary software—from custom web crawlers to autonomous growth engines.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        { title: "Proprietary Data Crawlers", icon: Search },
                                        { title: "Fine-tuned AI Agents", icon: Zap },
                                        { title: "Market Volatility Engines", icon: LineChart },
                                        { title: "Velocity Frameworks", icon: TrendingUp }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-5 p-6 bg-white border border-stone-200 rounded-3xl hover:shadow-md transition-all group">
                                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                                <item.icon size={20} />
                                            </div>
                                            <span className="text-stone-900 font-black text-sm uppercase tracking-wider">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, rotate: 2 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                className="relative order-1 lg:order-2"
                            >
                                <div className="aspect-[4/5] bg-stone-900 rounded-[5rem] border border-stone-800 p-16 flex flex-col justify-end shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none" />
                                    <Code2 size={64} className="text-orange-500 mb-10" />
                                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-none italic">
                                        Engineering <br /> Advantage.
                                    </h3>
                                    <p className="text-stone-400 font-medium text-lg leading-relaxed max-w-sm">
                                        We give our clients a technical upper hand by automating the work that others do manually.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Real Research - Teal Accent Focus */}
                <section className="py-40 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                            <motion.div {...fadeIn} className="max-w-2xl">
                                <h2 className="text-5xl md:text-8xl font-black text-stone-900 tracking-tighter leading-none mb-4">
                                    Actual <span className="text-teal-600 underline decoration-teal-600/20 underline-offset-8 leading-none">Research.</span>
                                </h2>
                                <p className="text-2xl text-stone-500 font-medium border-l-4 border-stone-100 pl-8">
                                    Market signals provide the blueprint. We move when the data tells us to.
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Competitor Intel", desc: "Real-time tracking of market shifts and rival strategies.", accent: "border-purple-200 bg-purple-50/20" },
                                { title: "Audience Audit", desc: "Understanding precisely how and where your customers interact.", accent: "border-teal-200 bg-teal-50/20" },
                                { title: "Data Integrity", desc: "Verifying every metric so your growth plan is based on truth.", accent: "border-orange-200 bg-orange-50/20" },
                                { title: "Scaling Logic", desc: "Engineering revenue growth through mathematical certainty.", accent: "border-primary/20 bg-primary/5" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-12 rounded-[4rem] border ${item.accent} flex flex-col items-start hover:shadow-xl transition-all duration-700`}
                                >
                                    <h4 className="text-xl font-black text-stone-950 mb-4 uppercase tracking-tighter">{item.title}</h4>
                                    <p className="text-stone-500 font-medium leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Outcome Block - Lime Accent Focus */}
                <section className="py-40 bg-stone-50 px-6">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-stone-950 text-white rounded-[5rem] overflow-hidden relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
                        >
                            <div className="grid lg:grid-cols-2">
                                <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1 bg-primary text-black font-black text-[9px] uppercase tracking-widest rounded-full mb-8 w-fit">
                                        Measurable Success
                                    </div>
                                    <h2 className="text-5xl md:text-[5.5rem] font-black tracking-tighter mb-10 italic leading-[0.95]">
                                        Scaling <br /> <span className="text-primary italic">Revenue.</span>
                                    </h2>
                                    <p className="text-xl md:text-2xl text-stone-400 font-medium leading-relaxed mb-12 max-w-lg">
                                        Marketing isn&apos;t just about reach; it&apos;s about revenue. We help you turn marketing into a high-octane growth engine with predictable outcomes.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-primary transition-all active:scale-95 group"
                                    >
                                        Scale Your Business <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                </div>
                                <div className="grid grid-rows-3 divide-y divide-white/10">
                                    {[
                                        { label: "Predictable Results", desc: "Scientific growth based on math, not hope.", icon: LineChart },
                                        { label: "Market Dominance", desc: "Performing where it creates most value.", icon: Zap },
                                        { label: "Precision Scaling", desc: "Using AI to increase output without noise.", icon: Cpu }
                                    ].map((item, i) => (
                                        <div key={i} className="p-12 md:p-16 flex items-start gap-8 group hover:bg-white/[0.02] transition-colors">
                                            <div className="text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                                                <item.icon size={36} strokeWidth={1} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-black mb-2 italic tracking-tight">{item.label}</h4>
                                                <p className="text-stone-500 font-medium text-lg leading-snug">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Trust Section Only */}
                <section className="py-32 bg-white border-t border-stone-100">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-12 text-center">
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-stone-400">Trusted By Global Leaders</span>
                        </div>
                        <TrustMarquee />
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
