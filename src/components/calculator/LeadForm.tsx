"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { formatCurrency } from "@/lib/calculations";
import { ArrowRight, Lock, Mail, Phone, User, ChevronLeft } from "lucide-react";
import { executeRecaptcha } from "@/lib/recaptcha";

interface LeadFormProps {
    impactAmount: number;
    onSubmit: (data: { firstName: string; lastName: string; email: string; phone: string; captchaToken?: string | null }) => void;
    onBack: () => void;
}

export default function LeadForm({ impactAmount, onSubmit, onBack }: LeadFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const captchaToken = await executeRecaptcha('calculator_lead');
        onSubmit({ firstName, lastName, email, phone, captchaToken });
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-onyx/50 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-[3rem] max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

            <button
                onClick={onBack}
                className="absolute top-8 left-8 text-stone-500 hover:text-white flex items-center gap-1 transition-colors group"
            >
                <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Adjust Data</span>
            </button>

            <div className="text-center mb-12 relative">
                <div className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[10px] font-black mb-6 tracking-widest uppercase border border-primary/20">
                    Analysis Complete
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
                    Ready to Recover <span className="text-primary">{formatCurrency(impactAmount)}</span>?
                </h3>
                <p className="text-stone-400 text-lg leading-relaxed max-w-xl mx-auto">
                    Secure your full institutional assessment, competitor benchmark, and revenue recovery strategy.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative max-w-lg mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-4">
                            First Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                            <input
                                required
                                type="text"
                                placeholder="Jane"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all placeholder:text-stone-700"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-4">
                            Last Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                            <input
                                required
                                type="text"
                                placeholder="Doe"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all placeholder:text-stone-700"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-4">
                        Work Email <span className="text-primary/60 ml-2 normal-case tracking-normal font-medium">(100% Secure & Private)</span>
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                        <input
                            required
                            type="email"
                            placeholder="jane.doe@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all placeholder:text-stone-700"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-[10px] font-black text-stone-500 uppercase tracking-widest ml-4">
                        Mobile Number
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                        <input
                            required
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all placeholder:text-stone-700"
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        className="w-full group relative px-12 py-5 bg-primary text-onyx font-black rounded-2xl hover:bg-white transition-all text-xl shadow-2xl shadow-primary/20 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Unlock My Analysis
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </span>
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-stone-500 mt-6">
                    <Lock size={12} />
                    <p className="text-[10px] font-bold uppercase tracking-widest">
                        Encrypted Data Protocol • Institutional Privacy Standards
                    </p>
                </div>
            </form>
        </motion.div>
    );
}
