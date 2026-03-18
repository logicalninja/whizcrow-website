"use client";

import { motion } from "framer-motion";
import {
    Landmark, Stethoscope, Landmark as GovIcon, Cpu,
    ShieldAlert, LockKeyhole, Eye, AlertTriangle
} from "lucide-react";

const industries = [
    {
        id: "finance",
        title: "Finance & VC",
        subtitle: "Hedge Funds / Banks",
        icon: Landmark,
        risk: "Short Seller Attack / IPO Narratives",
        solution: "Market Cap Stabilization",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "group-hover:border-emerald-500/50"
    },
    {
        id: "med",
        title: "Healthcare",
        subtitle: "Surgeons / Hospitals",
        icon: Stethoscope,
        risk: "Libelous Misinformation",
        solution: "HIPAA Compliant Removal",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "group-hover:border-red-500/50"
    },
    {
        id: "gov",
        title: "Public Office",
        subtitle: "Diplomats / Politicians",
        icon: GovIcon,
        risk: "Coordinated Smear Campaigns",
        solution: "24/7 Crisis War Room",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        id: "tech",
        title: "Tech Founders",
        subtitle: "Unicorns / SaaS",
        icon: Cpu,
        risk: "Investor Reputation Debt",
        solution: "Narrative Governance",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/50"
    },
    {
        id: "retail",
        title: "Global Retail",
        subtitle: "Ecommerce / FMCG",
        icon: Eye,
        risk: "Low-Sentiment Conversion Sink",
        solution: "Sentiment Dominance",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "group-hover:border-orange-500/50"
    },
    {
        id: "family",
        title: "Family Offices",
        subtitle: "Private Wealth / HNWIs",
        icon: LockKeyhole,
        risk: "Generational Wealth Volatility",
        solution: "Private Narrative Shield",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "group-hover:border-yellow-500/50"
    }
];

export function HighStakes() {
    return (
        <section className="py-32 bg-[#0c0a09] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 to-[#050505]" />

            <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                <div className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-800 bg-stone-900/50 backdrop-blur-md text-stone-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <LockKeyhole size={14} className="text-primary" /> Private Client Sectors
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        High Stakes.<br />
                        <span className="text-stone-400">Zero Error.</span>
                    </h2>
                    <p className="text-stone-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4 md:px-0">
                        Our infrastructure is built for industries where reputation volatility
                        directly impacts market cap, patient trust, or election results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-[#151515] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-stone-800 flex flex-col relative overflow-hidden group hover:bg-[#1a1a1a] transition-all duration-500 cursor-pointer ${item.border}`}
                        >
                            {/* Top Content */}
                            <div className="relative z-10 mb-8 md:mb-12">
                                <div className="flex justify-between items-start mb-6 md:mb-8">
                                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-black/20`}>
                                        <item.icon size={28} className="md:w-8 md:h-8" />
                                    </div>
                                    <div className="text-white/20 group-hover:text-white/40 transition-colors">
                                        <ShieldAlert size={24} className="md:w-7 md:h-7" />
                                    </div>
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-stone-400 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
                                    {item.subtitle}
                                </p>
                            </div>

                            {/* Middle Separator */}
                            <div className="h-px w-full bg-stone-800 mb-6 md:mb-8" />

                            {/* Bottom Content / Info */}
                            <div className="relative z-10 mt-auto space-y-4 md:space-y-6">
                                <div className="p-4 md:p-5 rounded-2xl bg-stone-900/50 border border-stone-800/50 backdrop-blur-sm group-hover:border-stone-700 transition-colors">
                                    <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-stone-500 uppercase tracking-widest mb-2">
                                        <AlertTriangle size={12} className="text-orange-500" /> Critical Risk Factor
                                    </div>
                                    <div className="text-white font-semibold text-base md:text-lg leading-snug">
                                        {item.risk}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-primary font-black text-[10px] md:text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                                    <div className="w-6 md:w-8 h-[1px] bg-primary/30" />
                                    <span className="flex items-center gap-2">
                                        <Eye size={14} className="md:w-4 md:h-4" /> {item.solution}
                                    </span>
                                </div>
                            </div>

                            {/* Decorative Background Elements */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            <div className={`absolute -bottom-24 -right-24 w-48 h-48 ${item.bg} blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
