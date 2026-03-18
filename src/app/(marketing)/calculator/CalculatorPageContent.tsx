'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BusinessInputs, calculateRevenueImpact, calculateROI, formatCurrency, formatPercent } from '@/lib/calculations';
import CalculatorForm from '@/components/calculator/CalculatorForm';
import ResultsDashboard from '@/components/calculator/ResultsDashboard';
import LeadForm from '@/components/calculator/LeadForm';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

export default function CalculatorPageContent() {
    const [step, setStep] = useState<'inputs' | 'gating' | 'results'>('inputs');
    const [results, setResults] = useState<ReturnType<typeof calculateRevenueImpact> | null>(null);
    const [inputs, setInputs] = useState<BusinessInputs | null>(null);

    const handleCalculate = (businessInputs: BusinessInputs) => {
        const impact = calculateRevenueImpact(businessInputs);
        setResults(impact);
        setInputs(businessInputs);
        setStep('gating');

        // Smooth scroll to gating section
        setTimeout(() => {
            document.getElementById('gating')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleLeadSubmit = (leadData: { firstName: string; lastName: string; email: string; phone: string }) => {
        // Here you would typically send the lead to your CRM (GHL, etc.)
        setStep('results');

        // Smooth scroll to results
        setTimeout(() => {
            document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleRecalculate = () => {
        setStep('inputs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-onyx text-white">
            <JsonLd type="SoftwareApplication" data={{ name: "WhizCrow Revenue Risk Calculator" }} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Calculator", "item": "https://whizcrow.com/calculator" }
                ]
            }} />
            <Header />

            {/* Hero Section */}
            <section className="py-12 md:py-24">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto pt-16 md:pt-20 px-4"
                    >
                        <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                            How Much Revenue Are You{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Losing</span>{' '}
                            to Poor Reputation?
                        </h2>
                        <p className="text-lg md:text-2xl text-stone-300 mb-8 leading-relaxed px-2 md:px-0">
                            Discover the exact dollar impact of your online reputation on revenue, retention, and pricing power.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-stone-500">
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Research-backed formulas</span>
                            </div>
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Industry-specific insights</span>
                            </div>
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Free detailed report</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Form */}
            <section className="py-12">
                <div className="section-container">
                    <CalculatorForm onCalculate={handleCalculate} />
                </div>
            </section>

            {/* Gating Section */}
            {step === 'gating' && results && (
                <section id="gating" className="py-16 bg-onyx-light">
                    <div className="section-container">
                        <LeadForm
                            impactAmount={results.totalAnnualImpact}
                            onSubmit={handleLeadSubmit}
                            onBack={() => setStep('inputs')}
                        />
                    </div>
                </section>
            )}

            {/* Results Dashboard */}
            {step === 'results' && results && inputs && (
                <section id="results" className="py-16 bg-onyx-light">
                    <div className="section-container">
                        <ResultsDashboard
                            results={results}
                            inputs={inputs}
                            onRecalculate={handleRecalculate}
                        />
                    </div>
                </section>
            )}

            {/* Trust Indicators */}
            <section className="py-16 bg-white/5 border-t border-white/10 text-white">
                <div className="section-container">
                    <div className="text-center mb-12 px-4">
                        <h3 className="text-3xl font-display font-bold mb-4">Backed by Research</h3>
                        <p className="text-stone-400 max-w-2xl mx-auto">
                            Our calculations are based on peer-reviewed studies from leading institutions
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 px-4">
                        <div className="text-center">
                            <div className="text-primary font-bold text-lg mb-2">Harvard Business School</div>
                            <p className="text-sm text-stone-300">1-star increase = 5-9% revenue increase</p>
                        </div>
                        <div className="text-center">
                            <div className="text-primary font-bold text-lg mb-2">Bain & Company</div>
                            <p className="text-sm text-stone-300">5% retention increase = 25-95% profit increase</p>
                        </div>
                        <div className="text-center">
                            <div className="text-primary font-bold text-lg mb-2">Northwestern University</div>
                            <p className="text-sm text-stone-300">Strong reputation enables premium pricing</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
