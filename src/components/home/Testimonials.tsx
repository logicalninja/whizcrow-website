"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const col1 = [
    {
        quote: "The AI automation alone saved us hundreds of hours. The marketing doubled our qualified leads in just 3 months.",
        author: "Sarah J.",
        role: "Founder, D2C Brand",
        rating: 5
    },
    {
        quote: "They understand both rapid growth and reputational risk. That's a rare combination to find in a single agency.",
        author: "Michael T.",
        role: "General Counsel, Global Biotech",
        rating: 5
    },
    {
        quote: "Whizcrow completely overhauled our e-commerce pipeline. We saw a 140% increase in checkout conversions.",
        author: "Elena R.",
        role: "CMO, Retail Enterprise",
        rating: 4
    },
    {
        quote: "Their approach to data is ruthless. They cut our wasted ad spend to zero within the first two sprints.",
        author: "David K.",
        role: "VP Growth, SaaS Platform",
        rating: 5
    }
];

const col2 = [
    {
        quote: "We came for the reputation management service during a crisis. We stayed for their entire growth suite.",
        author: "James L.",
        role: "CEO, Leading Fintech",
        rating: 5
    },
    {
        quote: "Exceptional technical execution. Their ability to integrate LLMs into our customer journey was flawless.",
        author: "Priya M.",
        role: "Head of Product, Tech Startup",
        rating: 5
    },
    {
        quote: "Incredible visibility improvements. We finally dominate the search results for our core enterprise keywords.",
        author: "Robert W.",
        role: "Marketing Director, B2B Logistics",
        rating: 4
    },
    {
        quote: "They don't just run campaigns; they engineer scalable revenue systems. Highly recommended.",
        author: "Anita H.",
        role: "Operations Director, HealthTech",
        rating: 5
    }
];

const Card = ({ item }: { item: { quote: string, author: string, role: string, rating: number } }) => (
    <div className="p-8 bg-white rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between mb-6 mx-3 shrink-0 auto-rows-max">
        <div>
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        className={i < item.rating ? "fill-amber-400 text-amber-400" : "fill-stone-100 text-stone-200"}
                    />
                ))}
            </div>
            <p className="text-stone-800 text-lg leading-relaxed mb-8 font-medium italic">
                &ldquo;{item.quote}&rdquo;
            </p>
        </div>
        <div>
            <div className="font-bold text-stone-900">{item.author}</div>
            <div className="text-xs text-secondary-dark font-bold uppercase tracking-wider mt-1">{item.role}</div>
        </div>
    </div>
);

export function Testimonials() {
    return (
        <section className="py-24 bg-warm-beige relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 relative z-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Real results. Real clients.</h2>
                </div>

                <div className="flex md:grid md:grid-cols-2 gap-6 h-[700px] overflow-hidden relative">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-warm-beige to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-warm-beige to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex flex-col"
                        animate={{ y: [0, -1500] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {[...col1, ...col1, ...col1].map((item, i) => <Card key={`c1-${i}`} item={item} />)}
                    </motion.div>

                    <motion.div
                        className="flex flex-col"
                        animate={{ y: [-1500, 0] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                    >
                        {[...col2, ...col2, ...col2].map((item, i) => <Card key={`c2-${i}`} item={item} />)}
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all group"
                    >
                        Start your own success story
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
