// Revenue Impact Calculation Engine
// Based on Harvard Business School, Bain & Company, and Northwestern University research

export interface BusinessInputs {
    industry: string;
    monthlyRevenue: number;
    averageTransactionValue: number;
    monthlyVisitors: number;
    conversionRate: number;
    customerLifetimeValue: number;
    currentRating: number;
    numberOfReviews: number;
    responseTime: string;
    responseRate: number;
    platforms: string[];
}

export interface RevenueImpact {
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
}

// Industry-specific multipliers
const INDUSTRY_FACTORS: Record<string, { reviewSensitivity: number; avgCLV: number }> = {
    'ecommerce': { reviewSensitivity: 1.2, avgCLV: 1500 },
    'professional-services': { reviewSensitivity: 1.5, avgCLV: 5000 },
    'healthcare': { reviewSensitivity: 1.8, avgCLV: 3500 },
    'hospitality': { reviewSensitivity: 1.6, avgCLV: 800 },
    'home-services': { reviewSensitivity: 1.4, avgCLV: 2500 },
    'saas': { reviewSensitivity: 1.1, avgCLV: 8000 },
    'retail': { reviewSensitivity: 1.3, avgCLV: 1200 },
    'restaurants': { reviewSensitivity: 1.7, avgCLV: 600 },
    'other': { reviewSensitivity: 1.0, avgCLV: 2000 },
};

/**
 * Calculate reputation conversion penalty based on star rating
 * Research: Harvard Business School - 1 star increase = 5-9% revenue increase
 */
function getConversionPenalty(rating: number): number {
    if (rating >= 4.5) return 0;
    if (rating >= 4.0) return 0.15;
    if (rating >= 3.5) return 0.35;
    if (rating >= 3.0) return 0.55;
    return 0.75;
}

/**
 * Calculate churn rate increase based on reputation factors
 * Research: Bain & Company - 5% retention increase = 25-95% profit increase
 */
function getChurnMultiplier(rating: number, responseTime: string, responseRate: number): number {
    let multiplier = 1.0;

    // Rating impact
    if (rating < 4.0) multiplier += 0.30;
    if (rating < 3.5) multiplier += 0.20;

    // Response time impact
    if (responseTime === 'over-week' || responseTime === 'never') multiplier += 0.40;
    else if (responseTime === '2-7-days') multiplier += 0.25;
    else if (responseTime === '24-48-hours') multiplier += 0.10;

    // Response rate impact
    if (responseRate < 50) multiplier += 0.20;
    else if (responseRate < 80) multiplier += 0.10;

    return multiplier;
}

/**
 * Calculate pricing power based on reputation
 * Research: Northwestern University - reputation enables premium pricing
 */
function getPricingPower(rating: number, numberOfReviews: number): number {
    // Need sufficient reviews for pricing power
    const reviewFactor = Math.min(numberOfReviews / 50, 1);

    if (rating >= 4.5) return 0.15 * reviewFactor;  // Can charge 15% premium
    if (rating >= 4.0) return 0.08 * reviewFactor;  // Can charge 8% premium
    if (rating >= 3.5) return 0;                     // No premium
    if (rating >= 3.0) return -0.05;                 // Must discount 5%
    return -0.12;                                     // Must discount 12%
}

/**
 * Main calculation engine
 */
export function calculateRevenueImpact(inputs: BusinessInputs): RevenueImpact {
    const industryFactor = INDUSTRY_FACTORS[inputs.industry] || INDUSTRY_FACTORS['other'];

    // Use provided CLV or estimate from transaction value
    const clv = inputs.customerLifetimeValue || inputs.averageTransactionValue * 12;

    // Current state calculations
    const currentConversionPenalty = getConversionPenalty(inputs.currentRating);
    const currentMonthlyConversions = inputs.monthlyVisitors * (inputs.conversionRate / 100) * (1 - currentConversionPenalty);
    const baselineChurnRate = 0.25; // 25% baseline annual churn
    const currentChurnMultiplier = getChurnMultiplier(inputs.currentRating, inputs.responseTime, inputs.responseRate);
    const currentChurnRate = baselineChurnRate * currentChurnMultiplier;
    const currentPricingPower = getPricingPower(inputs.currentRating, inputs.numberOfReviews);

    // Optimized state (4.5+ rating, <24hr response, 95%+ response rate)
    const optimizedConversionPenalty = 0; // No penalty at 4.5+
    const optimizedMonthlyConversions = inputs.monthlyVisitors * (inputs.conversionRate / 100) * (1 - optimizedConversionPenalty);
    const optimizedChurnMultiplier = 1.0; // Baseline churn
    const optimizedChurnRate = baselineChurnRate * optimizedChurnMultiplier;
    const optimizedPricingPower = 0.15; // 15% premium at 4.5+ with reviews

    // 1. Customer Acquisition Impact
    const conversionGain = optimizedMonthlyConversions - currentMonthlyConversions;
    const monthlyAcquisitionRevenue = conversionGain * inputs.averageTransactionValue;
    const acquisitionImpact = monthlyAcquisitionRevenue * 12;

    // 2. Customer Retention Impact
    const annualCustomers = currentMonthlyConversions * 12;
    const churnReduction = currentChurnRate - optimizedChurnRate;
    const customersSaved = annualCustomers * churnReduction;
    const retentionImpact = customersSaved * clv;

    // 3. Premium Pricing Impact
    const pricingPowerGain = optimizedPricingPower - currentPricingPower;
    const annualTransactions = annualCustomers;
    const pricingImpact = annualTransactions * inputs.averageTransactionValue * pricingPowerGain;

    // 4. Operational Efficiency Impact
    // Poor reputation → 3x support tickets, 2x CAC
    const avgSupportCostPerCustomer = 50; // Industry average
    const currentSupportMultiplier = inputs.currentRating < 4.0 ? 3.0 : 1.5;
    const optimizedSupportMultiplier = 1.0;
    const supportCostSavings = annualCustomers * avgSupportCostPerCustomer * (currentSupportMultiplier - optimizedSupportMultiplier);

    const avgCAC = inputs.averageTransactionValue * 0.3; // 30% of ATV
    const currentCACMultiplier = inputs.currentRating < 4.0 ? 2.0 : 1.3;
    const optimizedCACMultiplier = 1.0;
    const cacReduction = annualCustomers * avgCAC * (currentCACMultiplier - optimizedCACMultiplier);

    const operationalImpact = supportCostSavings + cacReduction;

    // Total impact
    const totalAnnualImpact = acquisitionImpact + retentionImpact + pricingImpact + operationalImpact;

    // Revenue projections
    const currentAnnualRevenue = inputs.monthlyRevenue * 12;
    const optimizedAnnualRevenue = currentAnnualRevenue + totalAnnualImpact;

    return {
        totalAnnualImpact,
        acquisitionImpact,
        retentionImpact,
        pricingImpact,
        operationalImpact,
        currentAnnualRevenue,
        optimizedAnnualRevenue,
        breakdown: {
            currentMonthlyConversions,
            optimizedMonthlyConversions,
            currentChurnRate: currentChurnRate * 100,
            optimizedChurnRate: optimizedChurnRate * 100,
            currentPricingPower: currentPricingPower * 100,
            optimizedPricingPower: optimizedPricingPower * 100,
            supportCostSavings,
            cacReduction,
        },
    };
}

/**
 * Calculate ROI of reputation management services
 */
export function calculateROI(totalImpact: number, monthlyInvestment: number = 3500): {
    annualInvestment: number;
    roi: number;
    paybackDays: number;
} {
    const annualInvestment = monthlyInvestment * 12;
    const roi = ((totalImpact - annualInvestment) / annualInvestment) * 100;
    const paybackDays = Math.round((annualInvestment / totalImpact) * 365);

    return {
        annualInvestment,
        roi,
        paybackDays,
    };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format percentage for display
 */
export function formatPercent(value: number, decimals: number = 0): string {
    return `${value.toFixed(decimals)}%`;
}

/**
 * Get industry-specific insights
 */
export function getIndustryInsights(industry: string): string[] {
    const insights: Record<string, string[]> = {
        'ecommerce': [
            'E-commerce customers read an average of 7 reviews before purchasing',
            '92% of consumers hesitate to buy when there are no reviews',
            'Products with 5+ reviews see 270% higher conversion rates',
        ],
        'professional-services': [
            '88% of consumers trust online reviews as much as personal recommendations',
            'Professional services with 4.5+ stars charge 20% premium on average',
            'Response to negative reviews increases customer advocacy by 33%',
        ],
        'healthcare': [
            '77% of patients use online reviews as first step in finding a provider',
            'Healthcare providers with poor reviews lose 22% of potential patients',
            'Responding to reviews increases patient trust by 41%',
        ],
        'hospitality': [
            'A 1-star increase in rating leads to 5-9% revenue increase',
            '94% of travelers are influenced by online reviews',
            'Hotels that respond to reviews see 17% higher booking rates',
        ],
        'home-services': [
            '97% of consumers read reviews for local businesses',
            'Home service providers with 4+ stars get 3x more leads',
            'Fast review responses increase conversion by 28%',
        ],
        'saas': [
            'B2B buyers read 10+ reviews before making a decision',
            'SaaS products with strong reviews have 40% lower CAC',
            'Review quality impacts enterprise deal size by 25%',
        ],
        'restaurants': [
            '90% of diners check reviews before choosing a restaurant',
            'A half-star rating increase fills 19% more seats',
            'Restaurants that respond to reviews see 12% revenue boost',
        ],
    };

    return insights[industry] || insights['ecommerce'];
}
