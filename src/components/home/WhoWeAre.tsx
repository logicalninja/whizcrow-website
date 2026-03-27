"use client";

import { motion } from "framer-motion";
import { Globe, Users, TrendingUp } from "lucide-react";

export function WhoWeAre() {
    return (
        <section className="py-20 md:py-32 bg-warm-beige">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative">
                        {/* Subtle Lime Glow */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary-dark mb-6">Who We Are</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                            The Standard in <br />
                            <span className="text-secondary tracking-tight">Institutional Trust.</span>
                        </h3>

                        <p className="text-xl text-stone-900 font-medium mb-6 leading-relaxed">
                            WhizCrow is an elite technology-driven Online Reputation Intelligence and Management agency built for multi-billion dollar companies where reputation isn't a cost center—it's a strategic imperative.
                        </p>

                        <p className="text-lg text-stone-600 mb-4 leading-relaxed">
                            Founded by AI veterans, Marketing Mavericks, PR Champions and Subject Matter Experts.
                        </p>

                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            We combine Deep Technical Insights with legal and algorithmic strategies. Operating across 40+ languages and every major jurisdiction to protect and grow your reputation, no matter where the threat originates.
                        </p>

                        <div className="flex gap-8 border-t border-stone-100 pt-8">
                            <div>
                                <div className="text-4xl font-bold text-stone-900 mb-1">Global</div>
                                <div className="text-xs font-bold uppercase text-stone-500 tracking-wider">Operations</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-stone-900 mb-1">24/7</div>
                                <div className="text-xs font-bold uppercase text-stone-500 tracking-wider">Active Monitoring</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4 md:mt-12">
                            <div className="p-8 bg-white rounded-[2.5rem] border border-stone-200 hover:border-primary/30 transition-all cursor-pointer group hover:shadow-lg hover:shadow-primary/5">
                                <Users className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <h4 className="font-bold text-xl mb-2">Senior Experts</h4>
                                <p className="text-sm text-stone-500">Direct access to veteran strategists. No juniors.</p>
                            </div>
                            <div className="p-8 bg-white rounded-[2rem] border border-stone-200 hover:border-primary/30 transition-all cursor-pointer group hover:shadow-lg hover:shadow-accent/5">
                                <TrendingUp className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <h4 className="font-bold text-xl mb-2">Market Cap Focus</h4>
                                <p className="text-sm text-stone-500">We link every action to your company&apos;s value.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-8 bg-secondary/5 rounded-[2.5rem] border border-secondary/10 hover:border-secondary/30 transition-all h-full flex flex-col justify-center cursor-pointer group hover:shadow-lg hover:shadow-secondary/5">
                                <Globe className="text-secondary mb-4 group-hover:rotate-12 transition-transform" size={32} />
                                <h4 className="font-bold text-xl mb-2">Global Reach</h4>
                                <p className="text-sm text-stone-500">Serving clients across NY, Dubai, and Singapore.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
