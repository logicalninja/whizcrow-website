"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { executeRecaptcha } from "@/lib/recaptcha";
import { useRouter } from "next/navigation";

export function InstitutionalInquiryForm() {
    const router = useRouter();
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const captchaToken = await executeRecaptcha('contact_form');

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            source: 'institutional-inquiry',
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            url: formData.get('url'),
            message: formData.get('message'),
            captchaToken
        };

        try {
            const response = await fetch('/api/ghl/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'Submission failed');
            }

            // Redirect to thank you page on success
            router.push("/book/thank-you");
        } catch (error) {
            console.error('Submission error:', error);
            setStatus("idle"); // reset on error or show error state
            alert("There was an error submitting your inquiry. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className="py-12 text-center">
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Coordination Initiated</h3>
                <p className="text-stone-500 font-medium">
                    A Senior Advisor will reach out via secure channel within 2 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 px-1">Full Name</label>
                    <input
                        name="name"
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 px-1">Corporate Email</label>
                    <input
                        name="email"
                        required
                        type="email"
                        placeholder="name@company.com"
                        className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 px-1">Company Name</label>
                    <input
                        name="company"
                        required
                        type="text"
                        placeholder="Acme Corp"
                        className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 px-1">Website URL</label>
                    <input
                        name="url"
                        required
                        type="url"
                        placeholder="https://company.com"
                        className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm"
                    />
                </div>
            </div>

            <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-stone-400 px-1">Primary Concern</label>
                <textarea
                    name="message"
                    required
                    placeholder="Briefly describe the volatility or strategic requirement..."
                    rows={3}
                    className="w-full px-5 py-3.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none text-sm"
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-primary text-stone-900 font-bold text-lg rounded-xl hover:bg-lime-400 transition-all flex items-center justify-center gap-3 group relative overflow-hidden mt-4 active:scale-95 shadow-xl shadow-primary/20"
            >
                {status === "submitting" ? (
                    <span className="w-6 h-6 border-4 border-stone-900 border-t-transparent rounded-full animate-spin" />
                ) : (
                    <>
                        Initiate Discovery Protocol
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>

            <div className="flex items-center justify-center gap-2 text-stone-400 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <p className="text-[10px] font-bold uppercase tracking-widest">
                    Encrypted • NDA Available Upon Request
                </p>
            </div>
        </form >
    );
}
