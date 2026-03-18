"use client";

import Image from "next/image";
import { ShieldCheck, Globe, Lock } from "lucide-react";

export function FooterTrustBadges() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-300 scale-90">

            {/* ISO Certification (Official Asset) */}
            <div className="relative h-8 w-20 grayscale hover:grayscale-0 transition-all">
                <Image
                    src="/trust-badges/ISO-27001-Certified.png"
                    alt="ISO 27001 Certified"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="relative h-8 w-20 grayscale hover:grayscale-0 transition-all">
                <Image
                    src="/trust-badges/ISO-9001-Certified.png"
                    alt="ISO 9001 Certified"
                    fill
                    className="object-contain"
                />
            </div>

            {/* SSL Secure Badge (SVG Construction) */}
            <div className="flex items-center gap-1.5 px-2 py-1 border border-stone-700 rounded bg-stone-800/50">
                <Lock size={12} className="text-emerald-500" />
                <div className="flex flex-col leading-none">
                    <span className="text-[8px] text-stone-400 font-bold uppercase">SSL Secured</span>
                    <span className="text-[8px] text-emerald-500 font-bold">256-Bit</span>
                </div>
            </div>

            {/* W3C Valid Badge (SVG Construction) */}
            <div className="flex items-center gap-1.5 px-2 py-1 border border-stone-700 rounded bg-stone-800/50">
                <Globe size={12} className="text-blue-400" />
                <div className="flex flex-col leading-none">
                    <span className="text-[8px] text-stone-400 font-bold uppercase">W3C Compliant</span>
                    <span className="text-[8px] text-blue-400 font-bold">WCAG 2.1</span>
                </div>
            </div>

        </div>
    );
}
