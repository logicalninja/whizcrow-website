"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calculator, AlertTriangle, DollarSign, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import LeadForm from "./LeadForm";

// Types
type CalculatorState = {
    step: number;
    companyName: string;
    revenue: number;
    industry: string;
    negativeResults: number;
    hasCrisis: boolean;
};

const industries = [
    { id: "finance", label: "Finance / Legal", multiplier: 1.5 },
    { id: "healthcare", label: "Healthcare", multiplier: 1.8 },
    { id: "ecommerce", label: "E-commerce / Retail", multiplier: 1.2 },
    { id: "b2b", label: "B2B Services", multiplier: 1.0 },
    { id: "tech", label: "Technology / SaaS", multiplier: 1.3 },
    { id: "other", label: "Other", multiplier: 1.0 },
];

export function RevenueImpactCalculator() {
    const [state, setState] = useState<CalculatorState>({
        step: 1,
        companyName: "",
        revenue: 1000000, // Default 1M
        industry: "b2b",
        negativeResults: 1,
        hasCrisis: false,
    });

    const [result, setResult] = useState<number | null>(null);
    const [showLeadForm, setShowLeadForm] = useState(false);

    const handleNext = () => {
        if (state.step === 2) {
            calculateResult();
        }
        setState((prev) => ({ ...prev, step: prev.step + 1 }));
    };

    const calculateResult = () => {
        // ... (existing logic)
        const industry = industries.find((i) => i.id === state.industry);
        const multiplier = industry ? industry.multiplier : 1.0;
        let riskPercentage = (state.negativeResults * 0.05 * multiplier);
        if (state.hasCrisis) riskPercentage += 0.15;
        if (riskPercentage > 0.8) riskPercentage = 0.8;
        const valueAtRisk = state.revenue * riskPercentage;
        setResult(Math.round(valueAtRisk));
    };

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(val);
    };

    const handleLeadSubmit = async (data: { firstName: string; lastName: string; email: string; phone: string; captchaToken?: string | null }) => {
        try {
            await fetch('/api/ghl/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    source: 'calculator-lead',
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    phone: data.phone,
                    company: state.companyName,
                    revenue: state.revenue,
                    industry: state.industry,
                    negative_results: state.negativeResults,
                    isCrisis: state.hasCrisis,
                    risk_value: result,
                    captchaToken: data.captchaToken
                })
            });
            // Show success or redirect? For now, we can just close or show success message.
            // But LeadForm might handle its own success state or we just redirect.
            alert("Analysis unlocked! Check your email.");
            setShowLeadForm(false);
            // Optionally reset or redirect
        } catch (error) {
            console.error(error);
        }
    };

    if (showLeadForm && result !== null) {
        return (
            <LeadForm
                impactAmount={result}
                onSubmit={handleLeadSubmit}
                onBack={() => setShowLeadForm(false)}
            />
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-card border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* ... existing header and steps ... */}
            <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    {/* ... */}
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                            <Calculator size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Revenue Risk Calculator</h3>
                            <p className="text-sm text-slate-400">Estimate the cost of a damaged reputation.</p>
                        </div>
                    </div>
                    <div className="text-sm font-medium text-slate-500">
                        Step {state.step} of 3
                    </div>
                </div>

                <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {/* Step 1 & 2 remain unchanged */}
                        {state.step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Company Name</label>
                                    <input
                                        type="text"
                                        value={state.companyName}
                                        onChange={(e) => setState({ ...state, companyName: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                                        placeholder="e.g. Acme Corp"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Annual Revenue (Est.)</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                        <input
                                            type="number"
                                            value={state.revenue}
                                            onChange={(e) => setState({ ...state, revenue: parseInt(e.target.value) || 0 })}
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Industry</label>
                                    <select
                                        value={state.industry}
                                        onChange={(e) => setState({ ...state, industry: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none appearance-none"
                                    >
                                        {industries.map((ind) => (
                                            <option key={ind.id} value={ind.id} className="bg-slate-900">
                                                {ind.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </motion.div>
                        )}

                        {state.step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="space-y-4">
                                    <label className="text-sm font-medium text-slate-300 block">
                                        Negative Search Results (Page 1)
                                        <span className="block text-xs text-slate-500 font-normal mt-1">
                                            How many negative links appear when you Google your brand?
                                        </span>
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl font-bold text-white w-8">{state.negativeResults}</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="10"
                                            value={state.negativeResults}
                                            onChange={(e) => setState({ ...state, negativeResults: parseInt(e.target.value) })}
                                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-medium text-slate-300 block">
                                        Active Crisis?
                                        <span className="block text-xs text-slate-500 font-normal mt-1">
                                            Is there specialized bad press, viral backlash, or legal action currently visible?
                                        </span>
                                    </label>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setState({ ...state, hasCrisis: false })}
                                            className={cn(
                                                "flex-1 py-3 px-4 rounded-lg border font-medium transition-all",
                                                !state.hasCrisis
                                                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
                                                    : "bg-slate-900/50 border-white/10 text-slate-400 hover:bg-slate-900"
                                            )}
                                        >
                                            No
                                        </button>
                                        <button
                                            onClick={() => setState({ ...state, hasCrisis: true })}
                                            className={cn(
                                                "flex-1 py-3 px-4 rounded-lg border font-medium transition-all",
                                                state.hasCrisis
                                                    ? "bg-rose-500/10 border-rose-500 text-rose-500"
                                                    : "bg-slate-900/50 border-white/10 text-slate-400 hover:bg-slate-900"
                                            )}
                                        >
                                            Yes
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {state.step === 3 && result !== null && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-4"
                            >
                                <div className="inline-flex items-center justify-center p-4 bg-rose-500/10 text-rose-500 rounded-full mb-6 ring-1 ring-rose-500/50 animate-pulse">
                                    <AlertTriangle size={32} />
                                </div>

                                <h4 className="text-slate-400 font-medium mb-2 uppercase tracking-widest text-xs">Estimated Revenue At Risk</h4>
                                <div className="text-4xl md:text-6xl font-black text-white mb-2 font-mono tracking-tight">
                                    {formatCurrency(result)}
                                    <span className="text-lg text-slate-500 font-sans font-normal ml-2">/ yr</span>
                                </div>

                                <p className="text-slate-400 max-w-sm mx-auto mb-8 text-sm leading-relaxed">
                                    Based on industry standards, your current reputation gaps could be costing you up to <strong>{Math.round((result / state.revenue) * 100)}%</strong> of your annual revenue.
                                </p>

                                <button
                                    onClick={() => setShowLeadForm(true)}
                                    className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                                >
                                    Stop the Bleeding &rarr; Book Audit
                                </button>

                                <button
                                    onClick={() => setState({ ...state, step: 1 })}
                                    className="mt-4 text-xs text-slate-500 hover:text-white underline"
                                >
                                    Recalculate
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {state.step < 3 && (
                    <div className="mt-8 flex justify-between">
                        {state.step > 1 ? (
                            <button
                                onClick={() => setState(prev => ({ ...prev, step: prev.step - 1 }))}
                                className="px-6 py-2 text-slate-400 hover:text-white font-medium flex items-center gap-2"
                            >
                                <ArrowLeft size={16} /> Back
                            </button>
                        ) : <div />}

                        <button
                            onClick={handleNext}
                            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2"
                        >
                            {state.step === 2 ? "Calculate Impact" : "Next Step"} <ArrowRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
