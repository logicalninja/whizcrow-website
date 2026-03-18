"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BramAnatomy } from "@/components/bram/BramAnatomy";
import { InstitutionalImpact } from "@/components/bram/InstitutionalImpact";
import { InstitutionalFoundations } from "@/components/bram/InstitutionalFoundations";
import { BrandCurve } from "@/components/ui/BrandCurve";
import { ShieldCheck, ArrowRight, BarChart3, Globe2, FileCheck } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function WhizBramClient() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <Header />

            <main className="flex-grow">
                {/* Institutional Hero */}
                <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-stone-50">
                    <BrandCurve
                        className="top-20 -left-20 w-[600px] opacity-[0.05]"
                        rotation={-15}
                        color="#84CC16"
                    />
                    <BrandCurve
                        className="bottom-10 -right-20 w-[800px] opacity-[0.03]"
                        rotation={165}
                        color="#8B5CF6"
                    />

                    <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-6 md:mb-8 mx-auto"
                        >
                            <BarChart3 size={14} className="text-primary" />
                            <span className="text-xs md:text-sm font-bold text-stone-800 tracking-wide uppercase">
                                Proprietary Methodology
                            </span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-stone-900 mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[0.95]">
                            The North Star of<br />
                            <span className="text-secondary italic">Corporate Reputation.</span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed font-medium mb-10 md:mb-12 px-2 md:px-0">
                            In an era of synthetic media and viral volatility, "sentiment" is no longer enough.
                            WhizBRAM™ is the institutional framework for the world's most significant organizations.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="/calculator"
                                className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-primary text-onyx font-black text-lg rounded-full hover:bg-lime-500 transition-all shadow-xl shadow-lime-500/20 flex items-center justify-center gap-3 group hover:scale-105"
                            >
                                Calculate Your BRAM Score
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex items-center gap-3 text-stone-400 font-bold text-sm md:text-base">
                                <ShieldCheck size={20} className="text-primary" />
                                Institutional Grade Asset
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Deep-Dive - Parameters */}
                <div className="bg-white border-y border-stone-200 shadow-sm relative z-10">
                    <BramAnatomy />
                </div>

                {/* Institutional Impact - Valuation Logic */}
                <InstitutionalImpact />

                {/* Institutional Foundations */}
                <div className="bg-stone-50">
                    <InstitutionalFoundations />
                </div>

                {/* Standards & Bodies */}
                <section className="py-24 md:py-32 bg-stone-900 border-y border-white/5 relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
                            <div className="max-w-xl text-center lg:text-left">
                                <h2 className="text-white text-3xl md:text-5xl font-black mb-6 tracking-tight leading-[1.1]">Global Standard Alignment</h2>
                                <p className="text-stone-400 text-lg md:text-xl font-medium leading-relaxed">
                                    WhizBRAM™ isn't just a marketing metric. It is engineered to exceed the rigorous standards set by world-leading risk and compliance bodies.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full lg:w-auto">
                                {[
                                    { label: "ISO 31000", desc: "Risk Management" },
                                    { label: "GDPR", desc: "Data Sovereignty" },
                                    { label: "SEC/FCA", desc: "Disclosure Compliance" },
                                    { label: "TSPA", desc: "Trust & Safety" }
                                ].map(item => (
                                    <div key={item.label} className="p-4 md:p-8 bg-white/5 rounded-2xl md:rounded-[2rem] border border-white/10 text-center hover:border-primary/30 transition-colors group">
                                        <div className="text-primary font-black text-lg md:text-2xl mb-1 group-hover:scale-110 transition-transform">{item.label}</div>
                                        <div className="text-stone-500 text-[9px] md:text-xs font-bold uppercase tracking-widest leading-none mt-1 md:mt-2">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* Final Institutional CTA */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="mb-8 md:mb-12 inline-block p-4 md:p-5 bg-secondary/5 rounded-2xl md:rounded-[2rem]"
                        >
                            <Globe2 className="text-secondary md:w-12 md:h-12" size={36} />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-stone-900 mb-6 md:mb-8 tracking-tighter leading-[1.1]">
                            Ready to Audit Your<br />
                            <span className="text-primary italic">Institutional Authority?</span>
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-stone-500 font-medium mb-10 md:mb-12 max-w-2xl mx-auto px-2">
                            Deploy the WhizBRAM™ framework to your organization and discover hidden risks in your digital existence.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                            <Link
                                href="/book"
                                className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-stone-900 text-white font-black text-lg md:text-xl rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl"
                            >
                                Speak with an Advisor
                                <ArrowRight size={24} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
