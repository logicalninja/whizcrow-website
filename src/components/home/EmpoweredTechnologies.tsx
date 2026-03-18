"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrandCurve } from "../ui/BrandCurve";

const logos = [
    { name: "Google", src: "/logos/PoweredBY/Google_Antigravity_Logo.png" },
    { name: "OpenAI", src: "/logos/PoweredBY/OpenAI_Logo.png" },
    { name: "Claude", src: "/logos/PoweredBY/Claude_Logo_2023.png" },
    { name: "Perplexity", src: "/logos/PoweredBY/Perplexity_AI_logo.png" },
    { name: "Salesforce", src: "/logos/PoweredBY/Salesforce.com_logo.png" },
    { name: "HubSpot", src: "/logos/PoweredBY/ghllogo.png" }, // Using GHL as placeholder for CRM group if needed, or mapping correctly
    { name: "G2 Crowd", src: "/logos/PoweredBY/G2_Crowd_logo.svg" },
    { name: "Glassdoor", src: "/logos/PoweredBY/Glassdoor_Logo_2023.png" },
    { name: "Trustpilot", src: "/logos/PoweredBY/trustpilotlogo.png" },
    { name: "LinkedIn", src: "/logos/PoweredBY/LinkedIn_Logo.png" },
    { name: "X", src: "/logos/PoweredBY/xlogo.png" },
    { name: "Reddit", src: "/logos/PoweredBY/Reddit_wordmark.png" },
    { name: "TikTok", src: "/logos/PoweredBY/TikTok_logo.png" },
    { name: "Brandwatch", src: "/logos/PoweredBY/Brandwatch_logo.png" },
    { name: "Meltwater", src: "/logos/PoweredBY/Meltwater_logo_blue_landscape.png" },
    { name: "Sprinklr", src: "/logos/PoweredBY/Sprinklr_Brand_Logo.png" },
    { name: "Brand24", src: "/logos/PoweredBY/brand24logo.png" },
    { name: "Ahrefs", src: "/logos/PoweredBY/ahrefslogo.png" },
    { name: "Google Cloud", src: "/logos/PoweredBY/Google_Cloud_logo.png" },
    { name: "Google Analytics", src: "/logos/PoweredBY/Logo_Google_Analytics.png" },
    { name: "Looker Studio", src: "/logos/PoweredBY/Looker-Studio-Logo.png" },
    { name: "YouTube", src: "/logos/PoweredBY/youtubelogo.png" },
    { name: "Pinterest", src: "/logos/PoweredBY/pinterest.png" },
    { name: "Snapchat", src: "/logos/PoweredBY/snapchatlogo.png" },
    { name: "OpenClaw", src: "/logos/PoweredBY/openclaw-logo-text-dark.avif" },
    { name: "DAN", src: "/logos/PoweredBY/DANlogo.png" }
];

// Split into 3 rows
const row1 = logos.slice(0, 9);
const row2 = logos.slice(9, 18);
const row3 = logos.slice(18, 26);

const LogoCard = ({ logo }: { logo: { name: string; src: string } }) => (
    <div className="w-48 h-24 bg-white rounded-2xl border border-stone-200 shadow-sm flex items-center justify-center p-6 mx-4 shrink-0 group hover:shadow-md hover:border-primary/20 transition-all duration-300">
        <div className="relative w-full h-full grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300">
            <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="192px"
                className="object-contain"
            />
        </div>
    </div>
);

export function EmpoweredTechnologies() {
    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden">
            {/* Background Decorative Curves */}
            <BrandCurve
                className="bottom-0 left-0 w-[800px] opacity-[0.03]"
                rotation={180}
                color="#1c1917"
            />

            <div className="container mx-auto px-6 max-w-7xl mb-16 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary-dark mb-4">
                        Integrated Technology Stack
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight text-pretty">
                        We use the most integrated and advanced <br className="hidden sm:block" />
                        <span className="text-stone-400 font-medium whitespace-nowrap sm:whitespace-normal">technology platforms in our marketing.</span>
                    </h3>
                </div>
            </div>

            <div className="flex flex-col gap-8 relative z-10">
                {/* Row 1: Left Scroll */}
                <div className="flex overflow-hidden w-full mask-gradient-wide">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {[...row1, ...row1, ...row1, ...row1].map((logo, i) => (
                            <LogoCard key={`${logo.name}-1-${i}`} logo={logo} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right Scroll */}
                <div className="flex overflow-hidden w-full mask-gradient-wide">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: [-1000, 0] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                    >
                        {[...row2, ...row2, ...row2, ...row2].map((logo, i) => (
                            <LogoCard key={`${logo.name}-2-${i}`} logo={logo} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 3: Left Scroll */}
                <div className="flex overflow-hidden w-full mask-gradient-wide">
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                    >
                        {[...row3, ...row3, ...row3, ...row3].map((logo, i) => (
                            <LogoCard key={`${logo.name}-3-${i}`} logo={logo} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-stone-50 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-stone-50 to-transparent z-20 pointer-events-none" />
        </section>
    );
}
