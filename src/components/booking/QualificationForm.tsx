"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, AlertCircle, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { executeRecaptcha } from "@/lib/recaptcha";

// Form State Interface
interface FormState {
    step: number;
    name: string;
    email: string;
    website: string;
    need: string;
    budget: string;
    isCrisis: boolean;
}

const needs = [
    { id: "repair", label: "Reputation Repair", desc: "Fixing negative results" },
    { id: "crisis", label: "Crisis Management", desc: "Active viral/news threat" },
    { id: "protection", label: "Proactive Protection", desc: "Building a firewall" },
    { id: "branding", label: "Executive Branding", desc: "Establishing authority" },
];

const budgets = [
    { id: "low", label: "Under $5k/mo" },
    { id: "med", label: "$5k - $20k/mo" },
    { id: "high", label: "$20k+/mo" },
];

export function QualificationForm() {
    const [state, setState] = useState<FormState>({
        step: 1,
        name: "",
        email: "",
        website: "",
        need: "",
        budget: "",
        isCrisis: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isQualified, setIsQualified] = useState<boolean | null>(null);

    const handleNext = () => {
        // Basic validation
        if (state.step === 1 && (!state.name || !state.email)) return;
        if (state.step === 2 && !state.need) return;

        // If step 3 (budget), determine qualification
        if (state.step === 3) {
            handleQualification();
        } else {
            setState(prev => ({ ...prev, step: prev.step + 1 }));
        }
    };

    const handleQualification = async () => {
        setIsSubmitting(true);

        // Get reCAPTCHA token
        const captchaToken = await executeRecaptcha('booking_qualification');

        try {
            const response = await fetch('/api/ghl/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    source: 'booking-qualification',
                    name: state.name,
                    email: state.email,
                    website: state.website,
                    need: state.need,
                    budget: state.budget,
                    isCrisis: state.isCrisis,
                    captchaToken
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'Submission failed');
            }

            setIsQualified(true);
            setState(prev => ({ ...prev, step: 4 }));
        } catch (error) {
            console.error('Qualification submission error:', error);
            alert('There was an issue processing your request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto bg-card border border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl p-8">
            {/* Progress Bar */}
            {state.step < 4 && (
                <div className="mb-8">
                    <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                        <span>Discovery</span>
                        <span>Qualification</span>
                        <span>Scheduling</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "33%" }}
                            animate={{ width: `${(state.step / 3) * 100}%` }}
                        />
                    </div>
                </div>
            )}

            <AnimatePresence mode="wait">
                {/* Step 1: Basics */}
                {state.step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s Secure Your Brand</h2>
                            <p className="text-slate-400 text-sm">Tell us who you are so we can prepare your audit.</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                                    placeholder="John Doe"
                                    value={state.name}
                                    onChange={(e) => setState({ ...state, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                                    placeholder="john@company.com"
                                    value={state.email}
                                    onChange={(e) => setState({ ...state, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Company Website</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                                    placeholder="company.com"
                                    value={state.website}
                                    onChange={(e) => setState({ ...state, website: e.target.value })}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Needs */}
                {state.step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">How can we help?</h2>
                            <p className="text-slate-400 text-sm">Select the option that best describes your situation.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {needs.map((n) => (
                                <button
                                    key={n.id}
                                    onClick={() => setState({ ...state, need: n.id })}
                                    className={cn(
                                        "text-left p-4 rounded-xl border transition-all hover:bg-slate-800",
                                        state.need === n.id
                                            ? "bg-primary/10 border-primary shadow-[0_0_15px_rgba(255,215,0,0.1)]"
                                            : "bg-slate-900/30 border-white/10 text-slate-400"
                                    )}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className={cn("font-bold", state.need === n.id ? "text-primary" : "text-white")}>{n.label}</div>
                                            <div className="text-xs text-slate-500 mt-1">{n.desc}</div>
                                        </div>
                                        {state.need === n.id && <Check className="text-primary" size={20} />}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Step 3: Stakes/Budget */}
                {state.step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">Final Details</h2>
                            <p className="text-slate-400 text-sm">Help us route you to the right team.</p>
                        </div>

                        {/* Crisis Toggle */}
                        <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <AlertCircle className="text-rose-500" size={20} />
                                <span className="font-bold text-white">Is this an active emergency?</span>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setState({ ...state, isCrisis: false })}
                                    className={cn(
                                        "flex-1 py-2 rounded-lg text-sm font-medium transition-colors",
                                        !state.isCrisis ? "bg-slate-700 text-white" : "bg-slate-900/50 text-slate-500 hover:text-slate-300"
                                    )}
                                >
                                    No, it&apos;s proactive/stable
                                </button>
                                <button
                                    onClick={() => setState({ ...state, isCrisis: true })}
                                    className={cn(
                                        "flex-1 py-2 rounded-lg text-sm font-medium transition-colors",
                                        state.isCrisis ? "bg-rose-600 text-white shadow-lg shadow-rose-900/50" : "bg-slate-900/50 text-slate-500 hover:text-slate-300"
                                    )}
                                >
                                    Yes, active crisis
                                </button>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-slate-300">Estimated Monthly Budget</label>
                            <div className="grid grid-cols-1 gap-2">
                                {budgets.map((b) => (
                                    <button
                                        key={b.id}
                                        onClick={() => setState({ ...state, budget: b.id })}
                                        className={cn(
                                            "p-3 rounded-lg border text-sm font-medium text-left transition-colors",
                                            state.budget === b.id
                                                ? "bg-blue-600/20 border-blue-500 text-white"
                                                : "bg-slate-900/30 border-white/10 text-slate-400 hover:bg-slate-800"
                                        )}
                                    >
                                        {b.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                )}

                {/* Step 4: Scheduling (Success) */}
                {state.step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                    >
                        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Calendar size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">You&apos;re Qualified</h2>
                        <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                            Based on your profile, we&apos;ve matched you with a Senior Reputation Strategist. Please select a time below.
                        </p>

                        {/* Placeholder for Calendly */}
                        <div className="w-full h-64 bg-slate-900 rounded-xl border border-white/10 flex items-center justify-center text-slate-500">
                            [Calendly Embed Would Go Here]
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>

            {/* Submit / Next Button */}
            {state.step < 4 && (
                <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                        onClick={handleNext}
                        disabled={isSubmitting}
                        className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            "Analyzing..."
                        ) : (
                            <>
                                {state.step === 3 ? "Check Availability" : "Continue"} <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
