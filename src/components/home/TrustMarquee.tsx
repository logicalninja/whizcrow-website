"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define the trust logos with type to distinguish between images and text
const trustLogos: Array<{ name: string; src?: string; type: "image" | "text" }> = [
    // Text-based (low contrast logos replaced)
    { name: "Google Partner", type: "text" },
    { name: "SEMRush Partner", type: "text" },
    { name: "Shopify Partner", type: "text" },
    { name: "CMMI Level 5", type: "text" },
    // Image-based (high contrast logos)
    { name: "ISO 27001", src: "/logos/trustlogos/ISO-27001-Certified.png", type: "image" },
    { name: "ISO 42001", src: "/logos/trustlogos/ISO-42001-2023.png", type: "image" },
    { name: "ISO 9001", src: "/logos/trustlogos/ISO-9001-Certified.png", type: "image" },
    { name: "Databox Partner", src: "/logos/trustlogos/Databox-Certified-Partner.png", type: "image" },
    // Text-based (low contrast logos replaced)
    { name: "Make in India", type: "text" },
    { name: "Startup India", type: "text" },
    { name: "MSME", type: "text" },
];

interface TrustMarqueeProps {
    className?: string;
}

export function TrustMarquee({ className }: TrustMarqueeProps) {
    return (
        <div className={cn("w-full bg-[#f9fafb] pb-6 pt-2 relative z-20", className)}>
            <div className="container mx-auto px-6 text-center">

                {/* Centered Focused Marquee */}
                <div className="relative w-full mx-auto overflow-hidden">
                    <motion.div
                        className="flex gap-10 items-center whitespace-nowrap"
                        animate={{ x: [0, -1200] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                    >
                        {/* Quadrupled list to ensure no gaps in the smaller viewport */}
                        {[...trustLogos, ...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
                            <div key={i} className="relative h-14 w-32 flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                {logo.type === "image" ? (
                                    <Image
                                        src={logo.src!}
                                        alt={logo.name}
                                        fill
                                        sizes="128px"
                                        className="object-contain"
                                    />
                                ) : (
                                    <span className="text-xs font-bold text-stone-600 px-2 text-center leading-tight">
                                        {logo.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* Strong Fade Masks - Matching Hero Background (#f9fafb) */}
                    <div className="absolute top-0 left-0 h-full w-20 md:w-48 bg-gradient-to-r from-[#f9fafb] via-[#f9fafb]/90 to-transparent z-10" />
                    <div className="absolute top-0 right-0 h-full w-20 md:w-48 bg-gradient-to-l from-[#f9fafb] via-[#f9fafb]/90 to-transparent z-10" />
                </div>

                {/* Bottom Label - Reduced margin */}
                <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                        Partnerships & Accreditations
                    </p>
                </div>
            </div>
        </div>
    );
}
