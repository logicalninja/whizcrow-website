'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Check, ArrowRight } from 'lucide-react';
import { BusinessInputs, calculateROI, formatCurrency, formatPercent, getIndustryInsights } from '@/lib/calculations';
import { useState } from 'react';
import ShareResults from './ShareResults';

interface ResultsDashboardProps {
    results: {
        totalAnnualImpact: number;
        acquisitionImpact: number;
        retentionImpact: number;
        pricingImpact: number;
        operationalImpact: number;
        currentAnnualRevenue: number;
        optimizedAnnualRevenue: number;
        breakdown: {
            currentMonthlyConversions: number;
            optimizedMonthlyConversions: number;
            currentChurnRate: number;
            optimizedChurnRate: number;
            currentPricingPower: number;
            optimizedPricingPower: number;
            supportCostSavings: number;
            cacReduction: number;
        };
    };
    inputs: BusinessInputs;
    onRecalculate: () => void;
}

export default function ResultsDashboard({ results, inputs, onRecalculate }: ResultsDashboardProps) {
    const roi = calculateROI(results.totalAnnualImpact);
    const insights = getIndustryInsights(inputs.industry);

    // Chart data
    const revenueComparisonData = [
        {
            name: 'Current',
            revenue: results.currentAnnualRevenue,
        },
        {
            name: 'Optimized',
            revenue: results.optimizedAnnualRevenue,
        },
    ];

    const impactBreakdownData = [
        { name: 'Acquisition', value: results.acquisitionImpact, color: '#98e600' },
        { name: 'Retention', value: results.retentionImpact, color: '#FF6B35' },
        { name: 'Pricing', value: results.pricingImpact, color: '#B080FF' },
        { name: 'Operations', value: results.operationalImpact, color: '#6B7280' },
    ];

    return (
        <div className="space-y-12">
            {/* Hero Result */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center px-4"
            >
                <div className="inline-block bg-primary/20 text-primary px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-bold mb-4 tracking-widest uppercase shadow-sm">
                    Strategic Opportunity
                </div>
                <h2 className="font-display text-2xl md:text-5xl font-bold text-white mb-3">
                    Your Reputation Is Costing You
                </h2>
                <div className="text-4xl md:text-8xl font-display font-black text-primary mb-3 md:mb-4 tabular-nums leading-none">
                    {formatCurrency(results.totalAnnualImpact)}
                </div>
                <p className="text-lg md:text-xl text-stone-400 mb-8">
                    per year in lost revenue
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm">
                    <div className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-xl">
                        <div className="text-stone-500 mb-1">By improving from</div>
                        <div className="text-2xl md:text-3xl font-display font-bold text-white">{inputs.currentRating.toFixed(1)}⭐</div>
                    </div>
                    <div className="flex items-center text-3xl md:text-4xl text-stone-700">→</div>
                    <div className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-xl">
                        <div className="text-stone-500 mb-1">To</div>
                        <div className="text-2xl md:text-3xl font-display font-bold text-primary">4.5+⭐</div>
                    </div>
                </div>
            </motion.div>

            {/* Revenue Comparison Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-onyx/50 backdrop-blur-md border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl"
            >
                <h3 className="text-xl md:text-2xl font-display font-bold text-white text-center mb-8 md:mb-12">Annual Revenue Impact</h3>
                <div className="h-[250px] md:h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueComparisonData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                            <XAxis dataKey="name" stroke="#525252" fontSize={12} />
                            <YAxis stroke="#525252" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} fontSize={10} />
                            <Tooltip
                                formatter={(value: any) => formatCurrency(Number(value || 0))}
                                contentStyle={{ backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '1rem', color: '#FFF' }}
                            />
                            <Bar dataKey="revenue" fill="#98e600" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="text-center mt-6 md:mt-8">
                    <div className="inline-flex items-center gap-2 md:gap-3 bg-primary/10 text-primary px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-primary/20">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="font-bold text-base md:text-xl">
                            +{formatPercent((results.optimizedAnnualRevenue / results.currentAnnualRevenue - 1) * 100, 1)} Revenue Growth
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Four Revenue Levers */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h3 className="text-3xl font-display font-bold text-white text-center mb-12">The Four Revenue Levers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Acquisition */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-primary/30 transition-colors group">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h4 className="text-xl font-display font-bold text-white mb-1">Customer Acquisition</h4>
                                <p className="text-sm text-stone-500">More visitors convert to customers</p>
                            </div>
                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-onyx transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-stone-400">Current monthly conversions:</span>
                                <span className="font-bold text-white">{Math.round(results.breakdown.currentMonthlyConversions)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-stone-400">With 4.5★ rating:</span>
                                <span className="font-bold text-primary">{Math.round(results.breakdown.optimizedMonthlyConversions)} (+{Math.round((results.breakdown.optimizedMonthlyConversions / results.breakdown.currentMonthlyConversions - 1) * 100)}%)</span>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-white">Annual Impact:</span>
                                    <span className="text-2xl font-black text-primary">{formatCurrency(results.acquisitionImpact)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Retention */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#FF6B35]/30 transition-colors group">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h4 className="text-xl font-display font-bold text-white mb-1">Customer Retention</h4>
                                <p className="text-sm text-stone-500">Reduce churn, keep customers longer</p>
                            </div>
                            <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-2xl flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-onyx transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-stone-400">Current churn rate:</span>
                                <span className="font-bold text-white">{formatPercent(results.breakdown.currentChurnRate, 1)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-stone-400">Optimized churn rate:</span>
                                <span className="font-bold text-primary">{formatPercent(results.breakdown.optimizedChurnRate, 1)}</span>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-white">Annual Impact:</span>
                                    <span className="text-2xl font-black text-primary">{formatCurrency(results.retentionImpact)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#B080FF]/30 transition-colors group">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h4 className="text-xl font-display font-bold text-white mb-1">Premium Pricing</h4>
                                <p className="text-sm text-stone-500">Command higher prices with trust</p>
                            </div>
                            <div className="w-12 h-12 bg-[#B080FF]/20 rounded-2xl flex items-center justify-center text-[#B080FF] group-hover:bg-[#B080FF] group-hover:text-onyx transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-stone-400">Current pricing power:</span>
                                <span className="font-bold text-white">{formatPercent(results.breakdown.currentPricingPower, 1)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-stone-400">Optimized pricing power:</span>
                                <span className="font-bold text-primary">+{formatPercent(results.breakdown.optimizedPricingPower, 1)}</span>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-white">Annual Impact:</span>
                                    <span className="text-2xl font-black text-primary">{formatCurrency(results.pricingImpact)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Operations */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-stone-400/30 transition-colors group">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h4 className="text-xl font-display font-bold text-white mb-1">Operational Efficiency</h4>
                                <p className="text-sm text-stone-500">Lower support costs & CAC</p>
                            </div>
                            <div className="w-12 h-12 bg-stone-700/20 rounded-2xl flex items-center justify-center text-stone-400 group-hover:bg-stone-700 group-hover:text-white transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-stone-400">Support cost savings:</span>
                                <span className="font-bold text-white">{formatCurrency(results.breakdown.supportCostSavings)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-stone-400">CAC reduction:</span>
                                <span className="font-bold text-white">{formatCurrency(results.breakdown.cacReduction)}</span>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-white">Annual Impact:</span>
                                    <span className="text-2xl font-black text-primary">{formatCurrency(results.operationalImpact)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ROI Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-primary to-primary-dark p-12 rounded-[2.5rem] shadow-2xl text-onyx"
            >
                <h3 className="text-4xl font-display font-black text-center mb-12">The ROI of Strategic Management</h3>
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-2">
                        <div className="text-onyx/60 font-bold uppercase tracking-wider text-xs">Annual Investment</div>
                        <div className="text-4xl font-display font-black">{formatCurrency(roi.annualInvestment)}</div>
                        <div className="text-onyx/40 text-sm">Targeted Service Fee</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-onyx/60 font-bold uppercase tracking-wider text-xs">Revenue Recovery</div>
                        <div className="text-4xl font-display font-black">{formatCurrency(results.totalAnnualImpact)}</div>
                        <div className="text-onyx/40 text-sm">Recaptured Capital</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-onyx/60 font-bold uppercase tracking-wider text-xs">Projected ROI</div>
                        <div className="text-4xl font-display font-black">{formatPercent(roi.roi, 0)}</div>
                        <div className="text-onyx font-bold text-sm bg-white/30 inline-block px-3 py-1 rounded-full">{roi.paybackDays} Day Payback</div>
                    </div>
                </div>
            </motion.div>

            {/* Industry Insights */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] shadow-xl"
            >
                <h3 className="text-3xl font-display font-bold text-white text-center mb-10">Industry Insights</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {insights.map((insight, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <Check className="text-primary" size={20} />
                            </div>
                            <p className="text-stone-300 leading-relaxed">{insight}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Final CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-onyx/50 backdrop-blur-md border border-white/10 p-12 rounded-[2.5rem] shadow-2xl text-center relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 relative z-10">
                    Secure Your <span className="text-primary italic">Institutional Authority.</span>
                </h3>
                <p className="text-stone-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
                    Ready to neutralize reputation debt? Book a discovery call with our reputation experts to deploy your recovery strategy.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                    <Link
                        href="/book"
                        className="w-full sm:w-auto px-10 py-5 bg-primary text-onyx font-black text-xl rounded-2xl hover:bg-white transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                    >
                        Book Discovery Call
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                        onClick={onRecalculate}
                        className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-onyx transition-all flex items-center justify-center gap-2"
                    >
                        <span>←</span> Recalculate
                    </button>
                </div>

                <p className="text-[10px] font-black text-stone-600 uppercase tracking-[0.2em] mt-12">
                    STRATEGIC REVENUE AUDIT • WHIZBRAM™ CERTIFIED • SECURE ENCRYPTION
                </p>
            </motion.div>

            {/* Social Share */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] shadow-xl"
            >
                <ShareResults
                    revenueLoss={results.totalAnnualImpact}
                    rating={inputs.currentRating}
                    industry={inputs.industry}
                />
            </motion.div>
        </div>
    );
}
