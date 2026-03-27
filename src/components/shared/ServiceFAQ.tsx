"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
    question: string;
    answer: string;
}

function FAQRow({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-stone-200 last:border-0">
            <button
                onClick={onToggle}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-bold text-stone-900 pr-8 group-hover:text-primary transition-colors leading-snug">
                    {faq.question}
                </span>
                <span className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                    isOpen
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-200 text-stone-400 group-hover:border-primary group-hover:text-primary"
                )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="pb-6 text-stone-600 leading-relaxed pr-12 text-base">
                    {faq.answer}
                </div>
            </motion.div>
        </div>
    );
}

export function ServiceFAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQItem[]; title?: string }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-14 text-center">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
                    <h2 className="text-3xl md:text-5xl font-black text-stone-950 tracking-tighter">
                        {title}
                    </h2>
                </div>
                <div>
                    {faqs.map((faq, i) => (
                        <FAQRow
                            key={i}
                            faq={faq}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
