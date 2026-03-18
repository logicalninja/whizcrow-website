import React from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/home/Newsletter";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { MappingSection } from "@/components/marketing/MappingSection";
import { WorkProcess } from "@/components/marketing/WorkProcess";
import { ServiceFAQ } from "@/components/marketing/ServiceFAQ";
import { Shield, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

import { ServicesHero } from "@/components/marketing/ServicesHero";
import { TrustMarquee } from "@/components/home/TrustMarquee";

export const metadata: Metadata = {
    title: "Full-Service Digital Marketing Agency | Data + AI + Human | WhizCrow",
    description: "SEO, ORM, AI automation, content, branding, PR, ads, e-commerce, and MICE marketing. One agency. Every stage. CMMI Level 5. ISO certified.",
    alternates: {
        canonical: "https://whizcrow.com/services"
    }
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <Header />

            <main className="flex-grow">
                <ServicesHero />

                <div className="bg-white border-b border-stone-100 py-12 md:py-16">
                    <TrustMarquee />
                </div>

                <div id="services-grid">
                    <ServicesGrid />
                </div>

                <MappingSection />

                <WorkProcess />

                <ServiceFAQ />

                {/* Bottom Conversion Section */}
                <section className="py-32 bg-white flex flex-col items-center justify-center text-center">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-black mb-12 mx-auto rotate-12 hover:rotate-0 transition-transform duration-500">
                            <Shield size={40} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-stone-950 tracking-tight mb-8">
                            Ready to take your brand <br />
                            <span className="italic text-primary">to the next level?</span>
                        </h2>
                        <p className="text-stone-500 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Don&apos;t leave your growth to chance. Partner with an agency that blends high-velocity data with absolute marketing control.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="w-full md:w-auto px-12 py-6 bg-stone-950 text-white font-black text-xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-stone-900/20 active:scale-95"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/book"
                                className="w-full md:w-auto px-12 py-6 bg-stone-100 text-stone-950 font-black text-xl rounded-full hover:bg-stone-200 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                Book a Strategy Call <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
