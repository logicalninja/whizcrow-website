"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Calculator } from "lucide-react";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { WHATSAPP_URL } from "./WhatsAppLink";
import { motion, AnimatePresence } from "framer-motion";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

// Define section backgrounds (light = true, dark = false)
const sectionBackgrounds = [
    { minY: 0, maxY: 900, isLight: true },      // Hero section (stone-50)
    { minY: 900, maxY: 1100, isLight: true },   // Trust Marquee (stone-50)
    { minY: 1100, maxY: 3500, isLight: false }, // Narrative Engineering (onyx)
    { minY: 3500, maxY: 99999, isLight: true }, // Remaining sections (default light)
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLightBackground, setIsLightBackground] = useState(true);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleServicesEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setIsServicesOpen(true);
    };

    const handleServicesLeave = () => {
        const timeout = setTimeout(() => {
            setIsServicesOpen(false);
        }, 150);
        setHoverTimeout(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 20);

            // Detect current section background
            const currentSection = sectionBackgrounds.find(
                section => scrollY >= section.minY && scrollY < section.maxY
            );

            if (currentSection) {
                setIsLightBackground(currentSection.isLight);
            }
        };

        handleScroll(); // Initial check
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Dynamic styles based on background
    const menuBg = isLightBackground
        ? (isScrolled ? "bg-stone-100/95" : "bg-stone-100/80")
        : (isScrolled ? "bg-stone-800/95" : "bg-stone-800/80");

    const textColor = isLightBackground ? "text-stone-700" : "text-stone-300";
    const hoverTextColor = isLightBackground ? "hover:text-primary" : "hover:text-primary";
    const logoSrc = isLightBackground ? "/logos/blackbackground.png" : "/logos/whitebackground.png";
    const borderColor = isLightBackground ? "border-stone-300/20" : "border-white/10";
    const mobileToggleColor = isLightBackground ? "text-stone-900 hover:bg-stone-200/50" : "text-white hover:bg-white/10";

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-2 lg:py-4" : "py-4 lg:py-6"
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
                    <div className={`backdrop-blur-xl border ${borderColor} rounded-full px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between shadow-2xl transition-all duration-500 ${menuBg}`}>

                        {/* Brand */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative h-8 lg:h-10 w-32 lg:w-40">
                                <Image
                                    src={logoSrc}
                                    alt="WhizCrow Logo"
                                    fill
                                    sizes="(max-width: 1024px) 128px, 160px"
                                    className="object-contain transition-opacity duration-500"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                            {navLinks.map((link) => (
                                <div
                                    key={link.href}
                                    className="relative h-full flex items-center"
                                    onMouseEnter={link.label === "Services" ? handleServicesEnter : undefined}
                                    onMouseLeave={link.label === "Services" ? handleServicesLeave : undefined}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "font-medium transition-colors text-xs xl:text-sm tracking-wide py-2",
                                            textColor,
                                            hoverTextColor
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        {/* Mega Menu Container - Placed here for better alignment */}
                        <AnimatePresence>
                            {isServicesOpen && (
                                <div
                                    className="absolute top-full left-0 w-full pt-1"
                                    onMouseEnter={handleServicesEnter}
                                    onMouseLeave={handleServicesLeave}
                                >
                                    <ServicesMegaMenu
                                        isOpen={isServicesOpen}
                                        onClose={() => setIsServicesOpen(false)}
                                        isLightBackground={isLightBackground}
                                    />
                                </div>
                            )}
                        </AnimatePresence>

                        {/* CTAs */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 flex items-center justify-center rounded-full border ${borderColor} ${textColor} hover:text-[#25D366] hover:border-[#25D366] transition-all bg-white/5`}
                                aria-label="Chat on WhatsApp"
                            >
                                <WhatsAppIcon className="w-5 h-5 opacity-80" />
                            </a>
                            <Link
                                href="/book"
                                className="px-5 xl:px-6 py-2 xl:py-2.5 bg-primary text-onyx font-bold rounded-full hover:bg-white transition-all shadow-lg shadow-primary/20 text-xs xl:text-sm whitespace-nowrap"
                            >
                                Book a Call
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className={`lg:hidden p-2 ${mobileToggleColor} rounded-full transition-colors cursor-pointer`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-onyx pt-32 px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-3xl font-display font-bold text-white hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 mt-4">
                                <Link
                                    href="/book"
                                    className="px-8 py-4 bg-primary text-onyx font-bold rounded-full text-xl shadow-xl shadow-primary/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book a Call
                                </Link>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors py-2 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
