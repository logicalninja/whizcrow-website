"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Do I have to sign up for everything at once?",
        answer: "Not at all. We built our services to be entirely modular because we know you might only need one thing right now. You can hire us just to deploy an AI Receptionist (WhizAI) today, and lean on us for Enterprise SEO (WhizDigital) tomorrow. As your business scales, our other capabilities are here waiting for you."
    },
    {
        question: "Our team is already stretched thin. Will an AI integration overwhelm us?",
        answer: "It shouldn't. The entire point of WhizAI is to take work off your plate. When we deploy an AI sales agent or receptionist, we handle the integration and train your team, ensuring the AI operates smoothly in the background so your humans can focus on high-value conversations."
    },
    {
        question: "How do you measure success if we're scaling our digital ads and content?",
        answer: "We don't report on vanity metrics like 'impressions' or 'likes.' For our WhizDigital and WhizAds clients, we measure success by the exact same metrics you do: cost per acquisition (CPA), return on ad spend (ROAS), and actual qualified leads entering your CRM. Your data is your property, and we tie every action to a business outcome."
    },
    {
        question: "How long does it take to repair a damaged corporate reputation on Google?",
        answer: "Reputation is momentum. For our WhizORM clients, you will usually see your initial positive movement in the first 30-90 days. However, building indisputable authority and suppressing stubborn negatives is typically a 6-12 month strategic investment."
    },
    {
        question: "Is your strategy actually customized, or do I get a template?",
        answer: "You get a custom strategy. We start every engagement across every service by analyzing your specific data. Whether we are rebuilding your WhizBrand identity or launching a WhizPR media campaign, our data-first, human-led approach ensures your solution is built exactly for your market reality."
    },
    {
        question: "Is your work confidential?",
        answer: "100%. We operate under strict NDAs, especially for our Reputation Management (WhizORM) clients. We do not publish client lists, and case studies are completely anonymized unless explicitly authorized."
    }
];

function FAQItem({ faq, isOpen, onToggle }: { faq: any, isOpen: boolean, onToggle: () => void }) {
    return (
        <div className="border-b border-stone-200">
            <button
                onClick={onToggle}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-bold text-stone-900 pr-8 group-hover:text-secondary transition-colors">
                    {faq.question}
                </span>
                <span className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                    isOpen ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-400 group-hover:border-secondary group-hover:text-secondary"
                )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <div className="pb-6 text-stone-600 leading-relaxed pr-12">
                    {faq.answer}
                </div>
            </motion.div>
        </div>
    );
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">The questions you're probably asking yourself.</h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, i) => (
                        <FAQItem
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
