"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowLeft, MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-onyx text-white selection:bg-primary selection:text-onyx font-sans flex items-center justify-center relative overflow-hidden">
            {/* Minimal Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="container max-w-2xl px-6 relative z-10 text-center"
            >
                {/* Success Icon */}
                <div className="relative w-48 h-12 mx-auto mb-10">
                    <Image
                        src="/logos/whitebackground.png"
                        alt="WhizCrow Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Main Message */}
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                    Submission Received.
                </h1>

                <p className="text-xl text-stone-400 mb-12 leading-relaxed">
                    Your information has been securely received by our team.<br />
                    We typically respond with your preliminary briefing within <strong>24 hours</strong>.
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-12" />

                {/* Urgent Contact Options */}
                <div className="space-y-8 mb-12">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                        Need Immediate Assistance?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        {/* Email Option */}
                        <a href="mailto:hello@whizcrow.com" className="group p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-onyx flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail size={18} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-xs text-stone-500 font-bold uppercase">Email Us</p>
                                <p className="text-white font-medium">hello@whizcrow.com</p>
                            </div>
                        </a>

                        {/* WhatsApp Option */}
                        <a href="https://wa.me/15558676280" target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-onyx flex items-center justify-center group-hover:scale-110 transition-transform">
                                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                            </div>
                            <div>
                                <p className="text-xs text-stone-500 font-bold uppercase">WhatsApp Priority</p>
                                <p className="text-white font-medium">+1 555-867-6280</p>
                            </div>
                        </a>
                    </div>

                    {/* Chat Widget Hint */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs text-stone-400">
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                        <span>Fastest Option: Use the official WhatsApp channel.</span>
                    </div>

                    <div className="pt-8">
                        <a
                            href="https://wa.me/15558676280?text=I%20just%20submitted%20the%20audit%20request%20and%20would%20like%20to%20connect%20immediately."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-white hover:text-[#25D366] transition-all shadow-2xl shadow-[#25D366]/20 group text-lg"
                        >
                            <WhatsAppIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                            Connect Immediately on WhatsApp
                        </a>
                        <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-4 font-bold">
                            Bypass the waitlist • Instant ResponseProtocol
                        </p>
                    </div>
                </div>

                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors font-medium group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home Page
                </Link>
            </motion.div>
        </div>
    );
}
