"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { BrandCurve } from "../ui/BrandCurve";
import { TrustMarquee } from "./TrustMarquee";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex flex-col pt-24 pb-8 justify-between overflow-hidden bg-white">
            {/* Decorative background shapes */}
            {BrandCurve && (
                <>
                    <BrandCurve
                        className="top-0 -left-[10%] w-[60vw] opacity-[0.03]"
                        rotation={-15}
                        color="#171717"
                    />
                    <BrandCurve
                        className="bottom-10 -right-[5%] w-[50vw] opacity-[0.02]"
                        rotation={165}
                        color="#171717"
                    />
                </>
            )}

            <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center text-center flex-grow justify-center">

                <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm"
                    >
                        <span className="text-[10px] font-bold text-stone-800 uppercase tracking-[0.15em]">
                            Full-Scale Marketing Agency
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 shadow-sm"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative w-6 h-6 rounded-full border-2 border-stone-900 overflow-hidden bg-stone-800">
                                    <Image
                                        src={`/avatars/avatar${i}.png`}
                                        alt={`Leader ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest pr-1">
                            Trusted by 500+ Leaders
                        </span>
                    </motion.div>
                </div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-6 max-w-4xl"
                >
                    <span className="block bg-clip-text text-transparent bg-gradient-to-br from-stone-950 via-stone-900 to-stone-700 pb-2">
                        Taking your brand to the
                    </span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-stone-900 to-stone-500 italic">
                        Next Level
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-stone-600 mb-8 max-w-3xl leading-relaxed"
                >
                    One agency covering every part of your marketing — branding, content, digital ads, PR, and more. We handle it so you can focus on running your business.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                >
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group"
                    >
                        Book a Free Consultation
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 font-bold border border-stone-200 rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all flex items-center justify-center"
                    >
                        View Services
                    </Link>
                </motion.div>

            </div>

            {/* Trust Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="w-full mt-4"
            >
                <TrustMarquee />
            </motion.div>
        </section>
    );
}
