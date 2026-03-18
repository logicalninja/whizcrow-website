"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppLink";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Only show once per session
        const sessionShown = sessionStorage.getItem("exit_intent_shown");
        if (sessionShown) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exit_intent_shown", "true");
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasShown]);

    const closePopup = () => setIsVisible(false);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-stone-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
                    >
                        {/* Left Side: Visual/Context (Intelligence Agency Aesthetic) */}
                        <div className="w-full md:w-5/12 bg-onyx-light relative overflow-hidden flex flex-col justify-end p-8 border-b md:border-b-0 md:border-r border-white/10">
                            {/* Abstract Brand Curves/Glow */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="text-primary" size={24} />
                                </div>
                                <h4 className="text-white text-xl font-black mb-3 leading-tight tracking-tight">
                                    Exclusive Strategy Consultation
                                </h4>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 w-fit px-3 py-1 rounded-full mb-8">
                                    <Zap size={12} /> Priority Access
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-stone-400 text-sm font-medium">
                                        <div className="w-1 h-1 bg-stone-600 rounded-full" />
                                        <span>Reputation Recovery</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-stone-400 text-sm font-medium">
                                        <div className="w-1 h-1 bg-stone-600 rounded-full" />
                                        <span>Institutional Defense</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-stone-400 text-sm font-medium">
                                        <div className="w-1 h-1 bg-stone-600 rounded-full" />
                                        <span>AI Sentiment Control</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Content & Actions */}
                        <div className="flex-1 p-8 md:p-12">
                            <button
                                onClick={closePopup}
                                className="absolute top-6 right-6 p-2 text-stone-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="space-y-6">
                                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                                    Didn't find what you were looking for?
                                </h3>

                                <p className="text-stone-400 text-lg font-medium leading-relaxed">
                                    Connect on <span className="text-white">WhatsApp</span> with our Special Advisors Right Now and get all your questions answered.
                                </p>

                                <div className="pt-2">
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-full py-5 bg-[#25D366] text-white rounded-2xl flex items-center justify-center gap-3 font-black text-lg hover:scale-[1.02] transition-all shadow-xl shadow-[#25D366]/20 active:scale-95"
                                    >
                                        <WhatsAppIcon className="w-6 h-6" />
                                        Open Protocol Chat
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                <div className="flex items-center justify-center gap-3 text-stone-500 font-bold text-xs uppercase tracking-[0.2em] pt-4">
                                    <span className="w-8 h-px bg-white/10" />
                                    <span className="text-primary italic">10 second response guarantee</span>
                                    <span className="w-8 h-px bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
