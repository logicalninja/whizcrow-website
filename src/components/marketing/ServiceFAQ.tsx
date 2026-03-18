"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Can we bundle multiple services into one strategy?",
        answer: "Absolutely. In fact, that's where we excel. Most of our high-growth clients use a combination of WhizDigital for traffic, WhizAI for automation, and WhizORM to protect their increasing market presence. We architect integrated ecosystems, not just isolated campaigns."
    },
    {
        question: "How fast can WhizORM remove negative search results?",
        answer: "Reputation management depends on the complexity of the digital landscape. Neutralization (suppression) can often show progress in 4-8 weeks, while permanent removals via legal or technical channels vary by publisher. Our 24/7 crisis team, however, activates within hours."
    },
    {
        question: "Is WhizAI compatible with our current CRM (Salesforce, HubSpot)?",
        answer: "Yes. WhizAI is designed to be platform-agnostic. Whether you use Salesforce, HubSpot, or a custom legacy system, our AI agents and automation funnels are engineered to integrate seamlessly via API, ensuring no lead is ever dropped."
    },
    {
        question: "Do you handle global multi-market campaigns?",
        answer: "WhizCrow operates at scale. We have depth in multiple global markets and can deploy multilingual SEO, PR, and cultural-nuisance branding to ensure your message resonates internationally while maintaining brand consistency."
    },
    {
        question: "What makes your 'Data, AI, Human' model different?",
        answer: "Many agencies use AI as a shortcut. We use it as a force multiplier. AI processes the 'Big Data', our data models identify the 'Signals', and our senior human strategists apply 'Judgment'. This ensures you get precision without losing the human touch or strategic oversight."
    }
];

export function ServiceFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="p-3 rounded-2xl bg-stone-50 text-stone-400 mb-6">
                        <HelpCircle size={24} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight mb-6">
                        Got <span className="text-primary italic">questions?</span>
                    </h2>
                    <p className="text-stone-500 font-medium">Everything you need to know about partnering with WhizCrow.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-[2rem] overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "border-primary bg-stone-50"
                                : "border-stone-100 bg-white hover:border-stone-200"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left outline-none"
                            >
                                <span className={`text-lg font-black tracking-tight transition-colors ${openIndex === index ? "text-stone-900" : "text-stone-700"
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-all ${openIndex === index ? "bg-primary text-black" : "bg-stone-100 text-stone-400"
                                    }`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 pt-0">
                                            <p className="text-stone-600 leading-relaxed font-medium border-t border-stone-200 pt-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
