import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InstitutionalInquiryForm } from "@/components/contact/InstitutionalInquiryForm";
import { Mail, Globe2, ShieldAlert, Clock, ArrowRight, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/components/layout/WhatsAppLink";
import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Contact | India's #1 ORM Agency",
    description: "Connect with WhizCrow, the leading digital reputation and intelligence agency in India. Specialized in institutional valuation and crisis defense.",
};

const faqs = [
    {
        q: "What is the primary difference between PR and ORM?",
        a: "PR focuses on building a brand through media; ORM focused on protecting the brand by engineering the digital record and indexing facts over fiction."
    },
    {
        q: "How long does it take to suppress negative search results?",
        a: "While every case is unique, our BRAM™ engine typically begins shifting the equilibrium of Page 1 results within 45-90 days, with 24/7 crisis monitoring starting immediately."
    },
    {
        q: "Is this service confidential?",
        a: "100%. We operate under strict NDAs for high-net-worth individuals, politicians, and multinational corporations. We are the silent guardians of institutional valuation."
    },
    {
        q: "Do you work with AI-driven reputation issues?",
        a: "Yes. We specialized in LLM track-back and AI crawler governance, ensuring that machine-generated content reflects your brand's true authority."
    },
    {
        q: "Why is WhizCrow considered India's #1 ORM Agency?",
        a: "Because we are the only agency that owns the underlying technical infrastructure. We don't just \"talk to journalists\"; we \"codify digital trust\" through proprietary code and data science."
    }
];

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <JsonLd type="ContactPage" />
            <JsonLd type="FAQPage" data={faqs.map(f => ({ question: f.q, answer: f.a }))} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://whizcrow.com/contact" }
                ]
            }} />
            <Header />

            <main className="flex-grow pt-24 md:pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Hero & Form Split Section */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
                        {/* Left: Hero Copy */}
                        <div className="lg:col-span-6 pt-8 md:pt-12">
                            <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-8 tracking-tighter leading-[0.95]">
                                India&apos;s #1 <br />
                                <span className="text-primary italic">Reputation Agency.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium max-w-xl">
                                The Apex of Digital Authority. We engineer the digital record for the world&apos;s most influential entities.
                            </p>

                            <div className="mt-12 flex items-center gap-6">
                                <div className="flex -space-x-2">
                                    {[
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
                                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                                    ].map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt="Corporate Leader"
                                            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <p className="text-xs md:text-sm font-bold text-stone-900">
                                    Trusted by 500+ <span className="text-stone-400">Industry Leaders</span>
                                </p>
                            </div>
                        </div>

                        {/* Right: High-Impact Inquiry Form */}
                        <div className="lg:col-span-6 relative group">
                            {/* Decorative background glow */}
                            <div className="absolute -inset-2 bg-primary/10 rounded-[3.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                            <div className="bg-stone-900 p-10 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                                {/* Technical motif */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="mb-10 relative z-10">
                                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] mb-4">
                                        <ShieldAlert size={14} /> Immediate Response Protocol
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Initiate Discovery</h2>
                                    <p className="text-stone-400 font-medium text-sm italic">Connect with our reputation architects.</p>
                                </div>

                                <InstitutionalInquiryForm />

                                <div className="mt-10 pt-8 border-t border-white/5 italic text-[11px] text-stone-500 font-medium text-center">
                                    WhizCrow operates with extreme discretion for multi-billion dollar market caps and scrutinized leadership.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Flow */}
                    <div className="space-y-24">
                        {/* Direct Channels Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <a href="https://wa.me/15558676280?text=I%20need%20immediate%20reputation%20assistance." target="_blank" rel="noopener noreferrer" className="p-8 bg-stone-900 border border-primary/30 rounded-[2.5rem] hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] transition-all group lg:scale-105 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <WhatsAppIcon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-primary">Priority WhatsApp</h3>
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                </div>
                                <p className="text-xl font-bold text-white tracking-tight">+1 555-867-6280</p>
                                <p className="text-[10px] text-stone-500 font-bold uppercase mt-2">Get Response in &lt; 10s</p>
                            </a>
                            <a href="mailto:hello@whizcrow.com" className="p-8 bg-white border border-stone-200 rounded-[2.5rem] hover:shadow-xl transition-all group">
                                <Mail size={32} className="text-secondary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Email Inquiry</h3>
                                <p className="text-xl font-bold text-stone-900">hello@whizcrow.com</p>
                            </a>
                            <a href="tel:+918369219922" className="p-8 bg-white border border-stone-200 rounded-[2.5rem] hover:shadow-xl transition-all group">
                                <Phone size={32} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Direct Calling</h3>
                                <p className="text-xl font-bold text-stone-900">+91 83692 19922</p>
                            </a>
                            <div className="p-8 bg-white border border-stone-200 rounded-[2.5rem]">
                                <Clock size={32} className="text-orange-500 mb-6" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Business Hours</h3>
                                <p className="text-lg font-bold text-stone-900 leading-tight">Mon-Fri: 09:00 - 18:00<br /><span className="text-primary italic text-sm">24/7 Crisis Deployment</span></p>
                            </div>
                        </div>

                        {/* Secondary Info Grid */}
                        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
                            <div className="lg:col-span-5 space-y-16">
                                {/* Global Presence */}
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-bold text-stone-900">Global Presence</h2>
                                    <div className="flex flex-row items-center justify-between lg:justify-start lg:gap-16 w-full max-w-2xl px-2 overflow-hidden">
                                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 group shrink-0">
                                            <span className="text-xl sm:text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">🇮🇳</span>
                                            <span className="text-[10px] sm:text-2xl font-black text-stone-900 tracking-[0.1em]">INDIA</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 group shrink-0">
                                            <span className="text-xl sm:text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">🇦🇪</span>
                                            <span className="text-[10px] sm:text-2xl font-black text-stone-900 tracking-[0.1em]">UAE</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 group shrink-0">
                                            <span className="text-xl sm:text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">🇺🇸</span>
                                            <span className="text-[10px] sm:text-2xl font-black text-stone-900 tracking-[0.1em]">USA</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Presence */}
                                <div className="flex flex-col gap-6 pt-8 border-t border-stone-200">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Digital Footprint</span>
                                    <div className="flex gap-4">
                                        <a href="https://ae.linkedin.com/company/whizcrow" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-900 hover:text-white transition-all shadow-sm">
                                            <Linkedin size={24} />
                                        </a>
                                        <a href="https://x.com/whizcrow?lang=en" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-900 hover:text-white transition-all shadow-sm">
                                            <Twitter size={24} />
                                        </a>
                                        <a href="https://www.instagram.com/whizcrow/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-900 hover:text-white transition-all shadow-sm">
                                            <Instagram size={24} />
                                        </a>
                                        <a href="https://www.facebook.com/whizcrowtechnologies/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-900 hover:text-white transition-all shadow-sm">
                                            <Facebook size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Strategic FAQs */}
                            <div className="lg:col-span-7 space-y-12">
                                <h2 className="text-3xl font-bold text-stone-900">Strategic FAQs</h2>
                                <div className="space-y-10">
                                    {faqs.map((faq, i) => (
                                        <div key={i} className="group border-b border-stone-200 pb-10 last:border-0 hover:border-primary/30 transition-colors">
                                            <h4 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 group-hover:text-primary transition-colors pr-12 relative">
                                                {faq.q}
                                            </h4>
                                            <p className="text-stone-500 font-medium leading-relaxed max-w-2xl text-lg">
                                                {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
