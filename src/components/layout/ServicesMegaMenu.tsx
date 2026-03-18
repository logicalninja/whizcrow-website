"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { services } from "@/constants/services";
import { cn } from "@/lib/utils";

interface ServicesMegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
    isLightBackground: boolean;
}

export function ServicesMegaMenu({ isOpen, onClose, isLightBackground }: ServicesMegaMenuProps) {
    // Split services into columns for a better grid layout
    const columns = [
        services.slice(0, 4),
        services.slice(4, 7),
        services.slice(7, 10),
    ];

    const bgColor = isLightBackground ? "bg-stone-100/98" : "bg-stone-900/98";
    const textColor = isLightBackground ? "text-stone-900" : "text-white";
    const subTextColor = isLightBackground ? "text-stone-500" : "text-stone-400";
    const itemHoverBg = isLightBackground ? "hover:bg-white/80" : "hover:bg-white/5";
    const borderColor = isLightBackground ? "border-stone-200" : "border-stone-800";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
                "w-full mt-2 p-8 rounded-[2.5rem] shadow-2xl border backdrop-blur-2xl z-50",
                bgColor,
                borderColor
            )}
            onMouseEnter={() => { }} // Keep open on hover
            onMouseLeave={onClose}
        >
            <div className="grid grid-cols-12 gap-8">
                {/* Services Grid (9 columns) */}
                <div className="col-span-9 grid grid-cols-3 gap-x-12 gap-y-6">
                    {columns.map((column, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-6">
                            {column.map((service) => (
                                <Link
                                    key={service.title}
                                    href={service.link}
                                    className={cn(
                                        "group flex items-start gap-4 p-3 rounded-2xl transition-all duration-300",
                                        itemHoverBg
                                    )}
                                    onClick={onClose}
                                >
                                    <div className="mt-1 w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-stone-100 group-hover:bg-primary group-hover:text-onyx transition-colors duration-300 shadow-sm">
                                        <service.icon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={cn("text-sm font-bold tracking-tight", textColor)}>
                                            {service.title}
                                        </span>
                                        <span className={cn("text-[10px] font-bold uppercase tracking-wider mt-0.5", subTextColor)}>
                                            {service.label}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Most Popular Sidebar (3 columns) */}
                <div className="col-span-3 border-l pl-8 flex flex-col gap-6" style={{ borderColor: isLightBackground ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-2 mb-2">
                        <Star size={14} className="text-primary fill-primary" />
                        <h4 className={cn("text-[10px] font-black uppercase tracking-[0.2em]", subTextColor)}>
                            Most Popular
                        </h4>
                    </div>

                    {/* Popular Service 1: WhizORM */}
                    <Link
                        href="/services/orm"
                        className="relative group overflow-hidden rounded-2xl h-32 block bg-stone-800"
                        onClick={onClose}
                    >
                        <Image
                            src="/images/mega-menu/whizorm.png"
                            alt="WhizORM"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent z-10" />
                        <div className="absolute inset-0 flex flex-col justify-end p-5 z-20">
                            <span className="text-white text-sm font-black uppercase tracking-wider mb-1">WhizORM</span>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                Protection Excellence <ArrowRight size={10} />
                            </div>
                        </div>
                    </Link>

                    {/* Popular Service 2: WhizAI */}
                    <Link
                        href="/services/ai"
                        className="relative group overflow-hidden rounded-2xl h-32 block bg-stone-800"
                        onClick={onClose}
                    >
                        <Image
                            src="/images/mega-menu/whizai.png"
                            alt="WhizAI"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent z-10" />
                        <div className="absolute inset-0 flex flex-col justify-end p-5 z-20">
                            <span className="text-white text-sm font-black uppercase tracking-wider mb-1">WhizAI</span>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                Intelligent Automation <ArrowRight size={10} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Footer Tagline */}
            <div className="mt-8 pt-6 border-t flex items-center justify-between" style={{ borderColor: isLightBackground ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)' }}>
                <p className={cn("text-[10px] font-bold uppercase tracking-widest", subTextColor)}>
                    Marketing built on data, AI, and human judgment.
                </p>
                <Link href="/services" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline" onClick={onClose}>
                    Explore All Capabilities
                </Link>
            </div>
        </motion.div>
    );
}
