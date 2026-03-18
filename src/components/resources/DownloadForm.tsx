"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function DownloadForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center">
                <div className="w-12 h-12 bg-emerald-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} />
                </div>
                <h3 className="text-white font-bold mb-2">Check your inbox!</h3>
                <p className="text-slate-400 text-sm">
                    We&apos;ve sent &quot;The Ten Commandments&quot; to <span className="text-white">{email}</span>.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-slate-900 border border-white/10 rounded-xl shadow-xl">
            <h3 className="text-white font-bold mb-4">Get the Full Guide (PDF)</h3>
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">Work Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                    {status === "loading" ? (
                        <Loader2 className="animate-spin" size={18} />
                    ) : (
                        <>
                            Download Now <ArrowRight size={18} />
                        </>
                    )}
                </button>
                <p className="text-xs text-slate-500 text-center">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </form>
    );
}
