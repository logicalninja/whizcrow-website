"use client";

import React from "react";
import Link from "next/link";

export function ServicesHero() {
    return (
        <section className="relative h-screen min-h-[700px] flex flex-col pt-24 pb-8 justify-between overflow-hidden bg-white">
            {/* Background Texture/Curves */}
            <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-[radial-gradient(circle_at_top,_var(--primary)_0%,_transparent_60%)] opacity-10" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center flex-grow justify-center">
                <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-8 justify-center">
                        <span className="px-4 py-1.5 rounded-full bg-stone-100 text-stone-500 text-[10px] font-black uppercase tracking-[0.2em] border border-stone-200">
                            WhizCrow Capabilities
                        </span>
                        <div className="h-px w-12 bg-stone-200" />
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">World-Class Standard</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-stone-950 mb-10 tracking-tight leading-[0.95]">
                        Full-Service Marketing. <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-950 via-stone-900 to-stone-500 italic">
                            One Standard.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl font-medium mb-12 mx-auto">
                        You need marketing that works. Not guesswork. Not activity for the sake of activity. We start with Data, apply AI where it makes sense, and bring Human judgment to every decision.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-stone-950 text-white font-black text-lg rounded-full hover:bg-stone-800 transition-all active:scale-95 shadow-xl shadow-stone-900/10"
                        >
                            Start a Project
                        </Link>
                        <button
                            onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-white text-stone-950 border-2 border-stone-100 font-black text-lg rounded-full hover:border-stone-200 transition-all active:scale-95 flex items-center gap-2"
                        >
                            Explore Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
