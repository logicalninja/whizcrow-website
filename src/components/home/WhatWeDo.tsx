"use client";

import { motion } from "framer-motion";
import { Trash2, ArrowDownCircle, Star, ShieldAlert, BookOpen, UserCheck, ArrowRight, ArrowUpRight } from "lucide-react";

export function WhatWeDo() {
    return (
        <section className="py-32 bg-off-white">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Our Expertise</h2>
                        <h3 className="text-5xl md:text-7xl font-bold text-secondary leading-[0.95] tracking-tight">
                            Engineering <br />
                            <span className="text-stone-400">Your Narrative.</span>
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <button className="px-8 py-4 bg-white border border-stone-200 rounded-full text-stone-900 font-bold hover:bg-stone-100 transition-colors cursor-pointer">
                            View All Services
                        </button>
                    </div>
                </div>

                {/* Asymmetrical Bento Grid */}
                <div className="grid md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* 1. Negative Content Removal (Tall, Visual) - Col 4, Row 2 */}
                    <div className="md:col-span-4 md:row-span-2 bg-[#1c1917] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group cursor-pointer">
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center mb-8 backdrop-blur-sm group-hover:bg-red-500/20 group-hover:text-red-500 transition-all">
                                <Trash2 size={28} />
                            </div>
                            <h4 className="text-3xl text-white font-bold mb-4">Content<br />Removal</h4>
                            <p className="text-stone-400 leading-relaxed font-medium">
                                We permanently delete damaging articles, blogs, and leaked data from the source.
                            </p>
                        </div>

                        <div className="relative z-10 pt-12">
                            <ul className="space-y-3 text-sm font-bold text-stone-300">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full" /> News De-indexing</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full" /> DMCA Takedowns</li>
                            </ul>
                            <div className="mt-8">
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-all">
                                    <ArrowUpRight size={20} />
                                </span>
                            </div>
                        </div>

                        {/* Abstract Noise/Shape */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    </div>

                    {/* 2. Search Suppression (Square, Orange) - Col 4, Row 1 */}
                    <div className="md:col-span-4 bg-[#ff6b00] rounded-[2.5rem] p-10 flex flex-col justify-between text-white overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                        <div className="relative z-10">
                            <div className="mb-6 flex justify-between items-start">
                                <ArrowDownCircle size={32} />
                                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase backdrop-blur-md">Defense</span>
                            </div>
                            <h4 className="text-3xl font-bold mb-2">Suppression</h4>
                            <p className="font-medium opacity-90">Bury negatives on Page 3+.</p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    </div>

                    {/* 3. Review Management (Square, Lime) - Col 4, Row 1 */}
                    <div className="md:col-span-4 bg-primary rounded-[2.5rem] p-10 flex flex-col justify-between text-stone-900 overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                        <div className="relative z-10">
                            <div className="mb-6 flex justify-between items-start">
                                <Star size={32} />
                                <span className="px-3 py-1 rounded-full bg-black/10 text-xs font-bold uppercase">Growth</span>
                            </div>
                            <h4 className="text-3xl font-bold mb-2">Reviews</h4>
                            <p className="font-medium opacity-80">Generate authentic 5-star sentiment.</p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    </div>

                    {/* 4. Crisis Response (Wide, White) - Col 8, Row 1 */}
                    <div className="md:col-span-8 bg-white rounded-[2.5rem] p-10 border border-stone-200 flex flex-col md:flex-row items-center gap-10 group hover:border-blue-200 transition-colors cursor-pointer">
                        <div className="flex-1">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                <ShieldAlert size={28} />
                            </div>
                            <h4 className="text-3xl font-bold text-stone-900 mb-4">Crisis Response</h4>
                            <p className="text-stone-500 text-lg leading-relaxed mb-6">
                                Immediate 24/7 war room deployment. We neutralize viral threats, coordinate legal press ops, and shield executives in real-time.
                            </p>
                            <div className="flex gap-3">
                                <span className="px-4 py-2 bg-stone-100 rounded-full text-sm font-bold text-stone-600">Social Blackout</span>
                                <span className="px-4 py-2 bg-stone-100 rounded-full text-sm font-bold text-stone-600">Counter-Ops</span>
                            </div>
                        </div>
                        {/* Visual Abstract */}
                        <div className="w-full md:w-1/3 aspect-square rounded-[2rem] bg-blue-50 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 to-transparent opacity-50" />
                            <div className="text-blue-600 font-black text-6xl opacity-20 group-hover:scale-110 transition-transform">24/7</div>
                        </div>
                    </div>

                    {/* 5. Wikipedia (Square, Purple) - Col 4, Row 1 */}
                    <div className="md:col-span-4 bg-[#7e22ce] rounded-[2.5rem] p-10 flex flex-col justify-between text-white overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                        <div className="relative z-10">
                            <div className="mb-6 flex justify-between items-start">
                                <BookOpen size={32} />
                                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase backdrop-blur-md">Auth</span>
                            </div>
                            <h4 className="text-3xl font-bold mb-2">Wikipedia</h4>
                            <p className="font-medium opacity-90">Page creation & edit protection.</p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    </div>

                    {/* 6. Personal Branding (Wide, Dark Image Style) - Col 8, Row 1 */}
                    <div className="md:col-span-8 bg-stone-100 rounded-[2.5rem] p-10 flex flex-col md:flex-row justify-between items-center relative overflow-hidden group cursor-pointer">
                        <div className="relative z-10 max-w-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <UserCheck className="text-stone-900" size={28} />
                                <h4 className="text-3xl font-bold text-stone-900">Personal Branding</h4>
                            </div>
                            <p className="text-stone-600 font-medium text-lg leading-relaxed mb-8">
                                We position executives as industry thought leaders. Op-Eds, Podcast Tours, and Profile Optimization to insulate you from future attacks.
                            </p>
                            <button className="flex items-center gap-2 font-bold text-stone-900 hover:text-primary transition-colors cursor-pointer">
                                Explore Branding <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Decorative Pattern */}
                        <div className="absolute right-0 top-0 w-1/3 h-full bg-stone-200/50 -skew-x-12 translate-x-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
