"use client";

import { m } from "framer-motion";

export function AntiPitch() {
    return (
        <section className="py-24 bg-stone-900 text-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-6">Our Promise</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-12">We Are Not For Everyone.</h3>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h4 className="text-xl font-bold mb-4 text-orange-400">Strictly White-Hat</h4>
                        <p className="text-stone-400 leading-relaxed">
                            We do not use bot farms, fake reviews, or "black-hat" SEO tactics that put your domain at risk. We build real authority that lasts.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h4 className="text-xl font-bold mb-4 text-orange-400">No Quick Fixes</h4>
                        <p className="text-stone-400 leading-relaxed">
                            We are not a "magic button" solution. Real reputation work takes strategy, time (6-12 months), and collaboration.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h4 className="text-xl font-bold mb-4 text-orange-400">Ethical Standards</h4>
                        <p className="text-stone-400 leading-relaxed">
                            We do not work with bad actors, scammers, or illegal enterprises. We help good companies shine, not hide the truth.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h4 className="text-xl font-bold mb-4 text-orange-400">Premium Service</h4>
                        <p className="text-stone-400 leading-relaxed">
                            We are not a budget agency. Quality content, legal strategy, and technical SEO require significant resources and top-tier talent.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
