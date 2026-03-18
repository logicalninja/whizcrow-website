"use client";

import Link from "next/link";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import {
    ShieldCheck,
    Target,
    Zap,
    Globe,
    Lock,
    Trash2,
    Search,
    TrendingUp,
    UserPlus,
    AlertCircle,
    CheckCircle2,
    ShieldAlert,
    BarChart3,
    ArrowRight
} from "lucide-react";

interface ImpactCard {
    title: string;
    impact: string;
    description: string;
    category: 'Neutralization' | 'Authority' | 'Resilience' | 'Dominance';
    icon: any;
}

const impactCards: ImpactCard[] = [
    // Neutralization
    {
        title: "Permanent De-indexing",
        impact: "Zero Digital Footprint",
        description: "Complete removal of negative news, blogs, and leaked data from Google, Bing, and DuckDuckGo.",
        category: "Neutralization",
        icon: Trash2
    },
    {
        title: "Crisis War Room",
        impact: "24/7 Deployment",
        description: "Immediate response team for viral threats, neutralizing negatives within 4-6 hours.",
        category: "Neutralization",
        icon: Zap
    },
    // Authority
    {
        title: "Wikipedia Security",
        impact: "Digital Creedence",
        description: "Defensive monitoring and edit protection for corporate and executive Wikipedia profiles.",
        category: "Authority",
        icon: Globe
    },
    {
        title: "Knowledge Graph Control",
        impact: "Google Profile Mastery",
        description: "Hard-coding your chosen narrative into Google Search Knowledge Panels through Schema.",
        category: "Authority",
        icon: TrendingUp
    },
    // Resilience
    {
        title: "Asset Decentralization",
        impact: "Attack Immunity",
        description: "Building a firewall of 50+ DA-80+ digital assets to insulate against future attacks.",
        category: "Resilience",
        icon: ShieldCheck
    },
    {
        title: "Automated Threat Intel",
        impact: "Early Warning System",
        description: "Proprietary crawlers detecting negative brand mentions on Reddit and X before they trend.",
        category: "Resilience",
        icon: AlertCircle
    },
    // Dominance
    {
        title: "Page 1 Takeover",
        impact: "100% Share of Voice",
        description: "Securing every organic result on Google Page 1 for your corporate brand.",
        category: "Dominance",
        icon: Search
    },
    {
        title: "Investor Narrative Lock",
        impact: "Valuation Protection",
        description: "Ensuring due diligence searches reveal only chosen, high-authority narratives.",
        category: "Dominance",
        icon: BarChart3
    }
];

export function NarrativeEngineering() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-[#0c0a09] py-32">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Column: Sticky Header */}
                    <div className="lg:w-[40%]">
                        <div className="lg:sticky lg:top-40 lg:h-fit">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-800 bg-stone-900/50 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                    <ShieldAlert size={14} /> Expertise & Deployment
                                </div>
                                <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter mb-6 text-pretty">
                                    How We Engineer Your <br />
                                    <span className="text-stone-500 italic">Brand Reputation.</span>
                                </h2>
                                <p className="text-xl text-stone-400 leading-relaxed mb-8 max-w-xl">
                                    WhizCrow doesn&apos;t just manage reputation; we engineer digital gravity. Through specialized drivers, we neutralize debt and establish unshakeable authority.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    {['Neutralization', 'Authority', 'Resilience', 'Dominance'].map((cat) => (
                                        <div key={cat} className="flex items-center gap-2 group">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            <span className="text-sm font-bold text-stone-500 group-hover:text-white transition-colors uppercase tracking-widest">{cat}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/book" className="px-10 py-5 bg-white text-onyx font-black text-xl rounded-2xl hover:bg-primary transition-all flex items-center gap-3 group inline-flex justify-center">
                                    Book Discovery Call
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Scrolling Cards */}
                    <div className="lg:w-[60%] space-y-6">
                        {impactCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.05 }}
                                viewport={{ margin: "-100px 0px -100px 0px" }}
                                className="group relative bg-[#151515] border border-stone-800 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:bg-[#1a1a1a] hover:border-primary/30 transition-all duration-500 cursor-default"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-5 md:gap-6">
                                        <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-onyx transition-all duration-500 shadow-xl">
                                            <card.icon size={28} className="md:w-8 md:h-8" strokeWidth={2.5} />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex flex-wrap items-center gap-3 mb-1">
                                                <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.2em]">{card.category}</span>
                                                <div className="hidden sm:block w-1 h-1 rounded-full bg-stone-800" />
                                                <span className="text-primary text-[11px] font-black uppercase tracking-widest">{card.impact}</span>
                                            </div>
                                            <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 leading-tight pr-12 md:pr-0">
                                                {card.title}
                                            </h4>
                                            <p className="text-stone-500 text-base md:text-lg leading-relaxed font-medium transition-colors group-hover:text-stone-300">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Dynamic Index - Responsive sizing and position to avoid overlap */}
                                <div className="absolute top-4 right-6 md:top-8 md:right-10 text-stone-900/40 md:text-stone-900 font-display font-black text-3xl md:text-6xl select-none pointer-events-none group-hover:text-primary/10 transition-colors z-0">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>
                            </motion.div>
                        ))}

                        {/* Final Sticky Re-anchor */}
                        <div className="pt-20 text-center">
                            <p className="text-stone-600 font-bold uppercase tracking-[0.3em] text-sm">
                                Identity Calibration Complete
                            </p>
                            <div className="w-px h-24 bg-gradient-to-b from-stone-800 to-transparent mx-auto mt-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
