"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppLink";
import { useState, useEffect } from "react";

export function WhatsAppFloating() {
    const [showPopup, setShowPopup] = useState(false);

    // Show popup with a slight delay on load to catch attention
    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-[20px] left-[20px] z-[60] flex flex-col items-start gap-4">
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="bg-stone-900 border border-white/10 text-white p-5 rounded-[2rem] shadow-2xl flex flex-col gap-3 max-w-[260px] relative overflow-hidden group mb-2"
                    >
                        {/* Subtle Brand Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setShowPopup(false);
                            }}
                            className="absolute top-4 right-4 p-1 text-stone-500 hover:text-white transition-colors cursor-pointer z-10"
                            aria-label="Close"
                        >
                            <X size={16} />
                        </button>

                        <div className="flex items-center gap-2 mb-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#25D366]">Instant Protocol</span>
                        </div>

                        <p className="text-sm font-bold leading-snug">
                            Connect now & get a response in <span className="text-[#25D366]">less than 10 seconds.</span>
                        </p>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-4 rounded-xl text-center hover:bg-white hover:text-[#25D366] transition-all shadow-lg shadow-[#25D366]/20 mt-1"
                        >
                            Start Chat
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[58px] h-[58px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-all outline-none focus:ring-4 focus:ring-[#25D366]/20"
                aria-label="Chat on WhatsApp"
            >
                <WhatsAppIcon className="w-8 h-8 text-white relative z-10" />

                {/* Fixed Pulsing Static Aura */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-20" />
                <span className="absolute inset-[-4px] rounded-full border border-[#25D366]/30 animate-[ping_3s_linear_infinite]" />
            </a>
        </div>
    );
}
