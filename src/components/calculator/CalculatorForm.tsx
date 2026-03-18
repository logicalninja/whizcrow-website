'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BusinessInputs, formatCurrency } from '@/lib/calculations';

interface CalculatorFormProps {
    onCalculate: (inputs: BusinessInputs) => void;
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
    const [formData, setFormData] = useState<BusinessInputs>({
        industry: 'ecommerce',
        monthlyRevenue: 100000,
        averageTransactionValue: 150,
        monthlyVisitors: 10000,
        conversionRate: 2.5,
        customerLifetimeValue: 0, // Will be auto-calculated
        currentRating: 3.8,
        numberOfReviews: 45,
        responseTime: '2-7-days',
        responseRate: 35,
        platforms: ['google'],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate(formData);
    };

    const updateField = (field: keyof BusinessInputs, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-onyx/50 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-[3rem] max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="text-center mb-16 relative">
                <h3 className="text-4xl font-display font-bold text-white mb-4">Calculate Your Revenue Impact</h3>
                <p className="text-stone-400 text-lg">Detailed impact assessment based on enterprise benchmarks</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12 relative">
                {/* Business Profile Section */}
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                    <h4 className="text-xl font-display font-bold text-primary mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center text-sm font-bold border border-primary/20">01</span>
                        Strategic Context
                    </h4>

                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest">
                                Industry Sector
                            </label>
                            <select
                                value={formData.industry}
                                onChange={(e) => updateField('industry', e.target.value)}
                                className="w-full px-5 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all shadow-inner"
                            >
                                <option value="ecommerce">E-commerce</option>
                                <option value="professional-services">Professional Services</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="hospitality">Hospitality</option>
                                <option value="home-services">Home Services</option>
                                <option value="saas">SaaS/Technology</option>
                                <option value="retail">Retail</option>
                                <option value="restaurants">Restaurants</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest flex justify-between">
                                Monthly Revenue <span>{formatCurrency(formData.monthlyRevenue)}</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 font-bold">$</span>
                                <input
                                    type="number"
                                    value={formData.monthlyRevenue}
                                    onChange={(e) => updateField('monthlyRevenue', Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all"
                                    min="1000"
                                    step="1000"
                                />
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="1000000"
                                step="10000"
                                value={formData.monthlyRevenue}
                                onChange={(e) => updateField('monthlyRevenue', Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary mt-4"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest">
                                Avg. Transaction Value
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 font-bold">$</span>
                                <input
                                    type="number"
                                    value={formData.averageTransactionValue}
                                    onChange={(e) => updateField('averageTransactionValue', Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all"
                                    min="1"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest">
                                Monthly Traffic (Visitors)
                            </label>
                            <input
                                type="number"
                                value={formData.monthlyVisitors}
                                onChange={(e) => updateField('monthlyVisitors', Number(e.target.value))}
                                className="w-full px-5 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all"
                                min="100"
                                step="100"
                            />
                        </div>

                        <div className="md:col-span-2 space-y-4 pt-4">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest flex justify-between">
                                Conversion Rate <span>{formData.conversionRate}%</span>
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="10"
                                step="0.1"
                                value={formData.conversionRate}
                                onChange={(e) => updateField('conversionRate', Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-[8px] md:text-[10px] text-stone-500 font-bold uppercase tracking-tighter md:tracking-normal">
                                <span>Low Visibility</span>
                                <span className="hidden sm:block">Industry Avg</span>
                                <span>High Authority</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reputation Metrics Section */}
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                    <h4 className="text-xl font-display font-bold text-primary mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center text-sm font-bold border border-primary/20">02</span>
                        Reputation Power
                    </h4>

                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest flex justify-between">
                                Current Rating <span>{formData.currentRating.toFixed(1)} ⭐</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                step="0.1"
                                value={formData.currentRating}
                                onChange={(e) => updateField('currentRating', Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-[8px] md:text-[10px] text-stone-500 font-bold uppercase tracking-tighter md:tracking-normal">
                                <span>Critical</span>
                                <span className="hidden sm:block">Baseline</span>
                                <span>Elite</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest">
                                Volume of Reviews
                            </label>
                            <input
                                type="number"
                                value={formData.numberOfReviews}
                                onChange={(e) => updateField('numberOfReviews', Number(e.target.value))}
                                className="w-full px-5 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all"
                                min="0"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest">
                                Response Velocity
                            </label>
                            <select
                                value={formData.responseTime}
                                onChange={(e) => updateField('responseTime', e.target.value)}
                                className="w-full px-5 py-4 bg-onyx border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-all"
                            >
                                <option value="within-24">Immediate (Within 24h)</option>
                                <option value="24-48-hours">Standard (24-48h)</option>
                                <option value="2-7-days">Delayed (2-7 Days)</option>
                                <option value="over-week">Fragmented (&gt;1 Week)</option>
                                <option value="never">No Active Response</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-stone-300 uppercase tracking-widest flex justify-between">
                                Response Rate <span>{formData.responseRate}%</span>
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                step="5"
                                value={formData.responseRate}
                                onChange={(e) => updateField('responseRate', Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                    <button
                        type="submit"
                        className="group relative px-12 py-6 bg-primary text-onyx font-black rounded-2xl hover:bg-white transition-all text-xl shadow-2xl shadow-primary/20 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Initiate Revenue Assessment
                            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                    <p className="text-sm text-stone-500 mt-6 font-medium uppercase tracking-widest">
                        Protocol: Research-Backed Logic • Zero Commitment
                    </p>
                </div>
            </form>
        </motion.div>
    );
}
