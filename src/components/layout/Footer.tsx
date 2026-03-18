"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Facebook, Phone, MapPin, Clock, Mail, Globe2 } from "lucide-react";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { FooterTrustBadges } from "./FooterTrustBadges";

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-400 pt-32 pb-12 mt-0">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Column 1: Brand */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-10 w-40">
                                <Image
                                    src="/logos/whitebackground.png"
                                    alt="WhizCrow Logo"
                                    fill
                                    sizes="160px"
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="leading-relaxed text-sm max-w-xs">
                            Marketing built on AI, data, and human judgment. One agency. Every stage.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://ae.linkedin.com/company/whizcrow" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-colors" aria-label="Follow us on LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://x.com/whizcrow?lang=en" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-colors" aria-label="Follow us on Twitter">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.instagram.com/whizcrow/" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-colors" aria-label="Follow us on Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/whizcrowtechnologies/" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-colors" aria-label="Follow us on Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://wa.me/15558676280" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center shadow-lg hover:shadow-[#25D366]/20 transition-all" aria-label="Chat on WhatsApp">
                                <WhatsAppIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/services/orm" className="hover:text-primary transition-colors">WhizORM</Link></li>
                            <li><Link href="/services/digital" className="hover:text-primary transition-colors">WhizDigital</Link></li>
                            <li><Link href="/services/ai" className="hover:text-primary transition-colors">WhizAI</Link></li>
                            <li><Link href="/services/content" className="hover:text-primary transition-colors">WhizContent</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors text-primary">View All Services →</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About WhizCrow</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/book" className="hover:text-primary transition-colors text-primary font-bold">Book a Call</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Global Reach */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold mb-6">Global Coordination</h4>

                        <div className="flex gap-3 text-sm">
                            <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                            <div>
                                <span className="block text-white font-medium">Business Hours</span>
                                <span className="text-stone-500">Mon-Fri: 09:00 - 18:00</span>
                                <span className="block text-primary italic text-[10px] mt-0.5">24/7 Crisis Deployment</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#25D366]/30 transition-all group">
                            <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#25D366]/50 transition-colors">
                                <WhatsAppIcon className="w-5 h-5 text-primary group-hover:text-[#25D366] transition-colors" />
                            </div>
                            <div>
                                <span className="block text-white font-medium">Rapid Response</span>
                                <a href="https://wa.me/15558676280" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-primary transition-colors">
                                    +1 555-867-6280 (WhatsApp)
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-3 text-sm">
                            <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                            <div>
                                <span className="block text-white font-medium">Corporate Email</span>
                                <a href="mailto:hello@whizcrow.com" className="text-stone-400 hover:text-primary transition-colors">
                                    hello@whizcrow.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-t border-stone-800 pt-8 flex flex-col xl:flex-row justify-between items-center gap-6 text-xs text-stone-500">
                    <p className="order-3 xl:order-1 text-center xl:text-left">
                        &copy; {new Date().getFullYear()} WhizCrow Inc. All rights reserved.
                    </p>

                    <div className="order-1 xl:order-2">
                        <FooterTrustBadges />
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 order-2 xl:order-3">
                        <Link href="/legal/privacy" className="hover:text-white transition-colors py-2">Privacy Policy</Link>
                        <Link href="/legal/terms" className="hover:text-white transition-colors py-2">Terms of Service</Link>
                        <Link href="/site-map" className="hover:text-white transition-colors py-2">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
