"use client";

import { motion } from "framer-motion";
import { FileText, Scale, Lock, Eye, Shield, Activity, GraduationCap } from "lucide-react";

export function GrcFramework() {
    return (
        <section className="py-32 bg-[#1c1917] text-white overflow-hidden relative">
            {/* Background - Very Subtle Purple Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Content Sidebar */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                            Under One Roof
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            The Only Holistic <br />
                            <span className="text-white">Defense Architecture.</span>
                        </h2>
                        <p className="text-xl text-stone-400 mb-10 leading-relaxed max-w-xl">
                            PR is not enough. SEO is not enough. You need a unified GRC strategy. WhizCrow is the only agency that natively integrates these 7 critical vectors.
                        </p>
                    </div>

                    {/* Visual Network Diagram */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="space-y-6 mt-12">
                                <FrameworkCard icon={FileText} title="Governance" desc="Aligning narrative with board accountability." />
                                <FrameworkCard icon={Scale} title="Regulatory" desc="Compliance-first content (SEC/GDPR/FDA)." />
                                <FrameworkCard icon={Lock} title="Security" desc="Asset hardening against takeovers." />
                                <FrameworkCard icon={GraduationCap} title="Standards" desc="Integration with Industry Bodies." />
                            </div>
                            <div className="space-y-6">
                                <FrameworkCard icon={Eye} title="Privacy" desc="Data erasure & executive shielding." />
                                <FrameworkCard icon={Shield} title="Safety" desc="Brand safety protocols for ad ecosystems." />
                                <FrameworkCard icon={Activity} title="Risk" desc="Predictive modeling of reputational threats." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function FrameworkCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, borderColor: 'var(--primary)' }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm group"
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-white/10 text-white group-hover:bg-primary group-hover:text-black transition-colors">
                    <Icon size={20} />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h3>
            </div>
            <p className="text-sm text-stone-400 leading-snug">{desc}</p>
        </motion.div>
    )
}
