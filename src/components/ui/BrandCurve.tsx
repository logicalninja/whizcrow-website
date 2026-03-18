"use client";

import { motion } from "framer-motion";

interface BrandCurveProps {
    className?: string;
    color?: string;
    opacity?: number;
    rotation?: number;
}

export function BrandCurve({
    className = "",
    color = "currentColor",
    opacity = 0.1,
    rotation = 0
}: BrandCurveProps) {
    return (
        <div className={`absolute pointer-events-none select-none ${className}`} style={{ transform: `rotate(${rotation}deg)`, opacity }}>
            <svg
                viewBox="0 0 1000 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M-50 200C100 100 250 350 400 250C550 150 700 300 850 200C1000 100 1150 200 1150 200"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                />
            </svg>
        </div>
    );
}
