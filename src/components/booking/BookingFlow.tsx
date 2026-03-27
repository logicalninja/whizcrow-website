"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Calendar, Phone, Mail, Building2, Target, DollarSign, Layers, Clock, Users, AlertCircle } from "lucide-react";
import { executeRecaptcha } from "@/lib/recaptcha";

type FormData = {
    name: string;
    phone: string;
    email: string;
    company: string;
    goal: string;
    budget: string;
    service: string;
    timeline: string;
    source: string;
    selectedDate: string;
    selectedTime: string;
    selectedSlotRaw: string;
};

const budgetOptions = ["Exploring / Not sure yet", "Up to $2,000/mo", "$2K – $10K/mo", "$10K – $50K/mo", "$50K+/mo"];
const timelineOptions = ["This month", "1–3 months", "3–6 months", "Just researching"];
const sourceOptions = ["Google Search", "Referral / Word of mouth", "LinkedIn", "Industry event", "Social media", "Other"];
const serviceOptions = [
    "WhizDigital — SEO & Digital",
    "WhizAds — Paid Advertising",
    "WhizBrand — Branding & Identity",
    "WhizContent — Content & Copywriting",
    "WhizPR — PR & Media",
    "WhizInfluence — Influencer Marketing",
    "WhizORM — Reputation Management",
    "WhizAI — AI Automation",
    "WhizCommerce — E-Commerce",
    "WhizMICE — Events & Conferences",
];

export default function BookingFlow() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [subStep, setSubStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        company: "",
        goal: "",
        budget: "",
        service: "",
        timeline: "",
        source: "",
        selectedDate: "",
        selectedTime: "",
        selectedSlotRaw: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const contactFields = [
        { key: "name", label: "What's your full name?", icon: Users, placeholder: "Jane Smith" },
        { key: "email", label: "What's your work email?", icon: Mail, placeholder: "jane@company.com" },
        { key: "phone", label: "What's your phone number?", icon: Phone, placeholder: "+91 98765 43210" },
        { key: "company", label: "What company are you with?", icon: Building2, placeholder: "Company Ltd." }
    ];

    const validateField = (key: string, value: string): string => {
        if (!value.trim()) return "This field is required";
        if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        if (key === "phone" && !/^[\d\s\-\+\(\)]+$/.test(value)) return "Please enter a valid phone number";
        return "";
    };

    const handleNext = () => {
        if (currentStep === 0) {
            const field = contactFields[subStep];
            const error = validateField(field.key, formData[field.key as keyof FormData]);
            if (error) { setErrors({ [field.key]: error }); return; }
            setErrors({});
            if (subStep < contactFields.length - 1) {
                setSubStep(subStep + 1);
            } else {
                setCurrentStep(1);
                setSubStep(0);
            }
        } else if (currentStep === 1) {
            if (!formData.goal || !formData.budget || !formData.service || !formData.timeline || !formData.source) {
                setErrors({ general: "Please answer all questions to continue" });
                return;
            }
            setErrors({});
            setCurrentStep(2);
        } else if (currentStep === 2) {
            if (!formData.selectedDate || !formData.selectedTime) {
                setErrors({ calendar: "Please select a date and time" });
                return;
            }
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (currentStep === 0 && subStep > 0) {
            setSubStep(subStep - 1);
        } else if (currentStep > 0) {
            if (currentStep === 1) {
                setCurrentStep(0);
                setSubStep(contactFields.length - 1);
            } else {
                setCurrentStep(currentStep - 1);
            }
        }
    };

    const [availableSlots, setAvailableSlots] = useState<any[]>([]);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);
    const [hasConsented, setHasConsented] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const fetchSlots = async () => {
        setIsLoadingSlots(true);
        try {
            const now = Date.now();
            const oneMonthLater = now + (30 * 24 * 60 * 60 * 1000);
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const response = await fetch(`/api/calendar/slots?startDate=${now}&endDate=${oneMonthLater}&timezone=${tz}`);
            if (response.ok) {
                const data: Record<string, { slots: string[] }> = await response.json();
                const allSlots: { date: string; time: string; raw: string }[] = [];
                Object.entries(data).forEach(([date, dateData]) => {
                    if (dateData?.slots?.length > 0) {
                        dateData.slots.forEach((timeStr) => {
                            allSlots.push({
                                date,
                                time: new Date(timeStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                                raw: timeStr,
                            });
                        });
                    }
                });
                setAvailableSlots(allSlots);
            }
        } catch (error) {
            console.error('[BookingFlow] Failed to fetch slots:', error);
        } finally {
            setIsLoadingSlots(false);
        }
    };

    useEffect(() => {
        if (currentStep === 2) fetchSlots();
    }, [currentStep]);

    const uniqueDates = Array.from(new Set(availableSlots.map(s => s.date))).slice(0, 7);
    const filteredTimes = availableSlots.filter(s => s.date === formData.selectedDate);

    const handleSubmit = async () => {
        if (!hasConsented) {
            setErrors({ consent: "Please provide your consent to continue." });
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus('idle');
        try {
            const captchaToken = await executeRecaptcha('booking_submission');
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, captchaToken }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit booking');
            }
            setSubmitStatus('success');
            setTimeout(() => router.push("/book/thank-you"), 1000);
        } catch (error: any) {
            setSubmitStatus('error');
            setErrors({ general: error.message || "Failed to process booking. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const totalSteps = contactFields.length + 6;
    const progress = currentStep === 0
        ? ((subStep + 1) / totalSteps) * 100
        : currentStep === 1
            ? ((contactFields.length + 1) / totalSteps) * 100
            : ((contactFields.length + 5) / totalSteps) * 100;

    return (
        <div className="min-h-screen bg-onyx text-white flex flex-col">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary-dark"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Logo — links back to home */}
            <div className="p-6">
                <Link href="/" className="inline-block relative w-32 h-10">
                    <Image
                        src="/logos/whitebackground.png"
                        alt="WhizCrow — Back to home"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-2xl">
                    <AnimatePresence mode="wait">

                        {/* Step 1: Contact Info */}
                        {currentStep === 0 && (
                            <motion.div
                                key={`contact-${subStep}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="text-sm text-primary font-bold uppercase tracking-wider">
                                    Question {subStep + 1} of {contactFields.length}
                                </div>
                                {(() => {
                                    const field = contactFields[subStep];
                                    const Icon = field.icon;
                                    return (
                                        <>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                                    <Icon className="text-primary" size={24} />
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-display font-bold">{field.label}</h2>
                                            </div>
                                            <label htmlFor={`field-${field.key}`} className="sr-only">{field.label}</label>
                                            <input
                                                id={`field-${field.key}`}
                                                type={field.key === "email" ? "email" : "text"}
                                                value={formData[field.key as keyof FormData]}
                                                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                                onKeyDown={(e) => e.key === "Enter" && handleNext()}
                                                placeholder={field.placeholder}
                                                autoFocus
                                                className="w-full px-6 py-4 bg-white/5 border-b-2 border-white/10 focus:border-primary text-2xl text-white placeholder:text-stone-500 focus:outline-none transition-colors backdrop-blur-sm"
                                            />
                                            {errors[field.key] && (
                                                <p className="text-red-400 text-sm flex items-center gap-2">
                                                    <AlertCircle size={16} /> {errors[field.key]}
                                                </p>
                                            )}
                                            <p className="text-slate-400 text-sm">Press Enter ↵ to continue</p>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        )}

                        {/* Step 2: Qualification */}
                        {currentStep === 1 && (
                            <motion.div
                                key="qualification"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                                    Tell us about your <span className="text-primary">goals</span>
                                </h2>

                                {/* Marketing Goal */}
                                <div className="space-y-3">
                                    <label htmlFor="goal" className="text-lg font-semibold flex items-center gap-2">
                                        <Target className="text-primary" size={20} />
                                        What's your primary marketing goal right now?
                                    </label>
                                    <textarea
                                        id="goal"
                                        value={formData.goal}
                                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[2rem] text-white placeholder:text-stone-500 focus:outline-none focus:border-primary transition-colors backdrop-blur-sm resize-none"
                                        rows={3}
                                        placeholder="e.g. Generate more leads, increase brand visibility, launch a new product..."
                                    />
                                </div>

                                {/* Service Interest */}
                                <div className="space-y-3">
                                    <label className="text-lg font-semibold flex items-center gap-2">
                                        <Layers className="text-primary" size={20} />
                                        Which service are you most interested in?
                                    </label>
                                    <div className="grid grid-cols-2 gap-2" role="group" aria-label="Service selection">
                                        {serviceOptions.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, service: option })}
                                                aria-pressed={formData.service === option}
                                                className={`px-3 py-2.5 rounded-xl border-2 transition-all text-sm text-left ${formData.service === option
                                                    ? "border-primary bg-primary/20 text-white"
                                                    : "border-white/10 bg-white/5 text-stone-300 hover:border-white/20"
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Budget */}
                                <div className="space-y-3">
                                    <label className="text-lg font-semibold flex items-center gap-2">
                                        <DollarSign className="text-primary" size={20} />
                                        What's your approximate marketing budget?
                                    </label>
                                    <div className="grid grid-cols-2 gap-3" role="group" aria-label="Budget range">
                                        {budgetOptions.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, budget: option })}
                                                aria-pressed={formData.budget === option}
                                                className={`px-4 py-3 rounded-2xl border-2 transition-all text-sm ${formData.budget === option
                                                    ? "border-primary bg-primary/20 text-white"
                                                    : "border-white/10 bg-white/5 text-stone-300 hover:border-white/20"
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="space-y-3">
                                    <label className="text-lg font-semibold flex items-center gap-2">
                                        <Clock className="text-primary" size={20} />
                                        When do you want to get started?
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {timelineOptions.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, timeline: option })}
                                                aria-pressed={formData.timeline === option}
                                                className={`px-4 py-3 rounded-2xl border-2 transition-all text-sm ${formData.timeline === option
                                                    ? "border-primary bg-primary/20 text-white"
                                                    : "border-white/10 bg-white/5 text-stone-300 hover:border-white/20"
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Source */}
                                <div className="space-y-3">
                                    <label htmlFor="source" className="text-lg font-semibold">How did you hear about us?</label>
                                    <select
                                        id="source"
                                        value={formData.source}
                                        onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary transition-colors backdrop-blur-sm"
                                    >
                                        <option value="" className="bg-onyx">Select an option...</option>
                                        {sourceOptions.map((option) => (
                                            <option key={option} value={option} className="bg-onyx">{option}</option>
                                        ))}
                                    </select>
                                </div>

                                {errors.general && (
                                    <p className="text-red-400 text-sm flex items-center gap-2">
                                        <AlertCircle size={16} /> {errors.general}
                                    </p>
                                )}
                            </motion.div>
                        )}

                        {/* Step 3: Calendar */}
                        {currentStep === 2 && (
                            <motion.div
                                key="calendar"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                                    Choose your <span className="text-primary">meeting time</span>
                                </h2>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="text-primary" size={24} />
                                            <h3 className="text-xl font-bold">Select Date & Time</h3>
                                        </div>
                                        {isLoadingSlots && <Clock className="text-primary animate-spin" size={20} />}
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                        {uniqueDates.length > 0 ? (
                                            uniqueDates.map((date: any) => {
                                                const d = new Date(date);
                                                const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
                                                const monthDay = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                                                return (
                                                    <button
                                                        key={date}
                                                        onClick={() => setFormData({ ...formData, selectedDate: date })}
                                                        className={`px-4 py-3 rounded-2xl border-2 transition-all flex flex-col items-center ${formData.selectedDate === date
                                                            ? "border-primary bg-primary/20 text-white"
                                                            : "border-white/10 bg-white/5 text-stone-300 hover:border-white/20"
                                                            }`}
                                                    >
                                                        <span className="text-xs uppercase font-bold text-slate-500">{dayName}</span>
                                                        <span className="font-bold">{monthDay}</span>
                                                    </button>
                                                );
                                            })
                                        ) : (
                                            !isLoadingSlots && <p className="col-span-full text-slate-500 text-center py-4">No available dates in the next 30 days.</p>
                                        )}
                                    </div>

                                    {formData.selectedDate && (
                                        <div className="space-y-3">
                                            <p className="text-sm text-slate-400">Available times ({Intl.DateTimeFormat().resolvedOptions().timeZone}):</p>
                                            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                                                {filteredTimes.map((slot) => (
                                                    <button
                                                        key={slot.raw}
                                                        onClick={() => setFormData({ ...formData, selectedTime: slot.time, selectedSlotRaw: slot.raw })}
                                                        className={`px-3 py-2 rounded-xl border transition-all text-sm ${formData.selectedSlotRaw === slot.raw
                                                            ? "border-primary bg-primary/20 text-white"
                                                            : "border-white/10 bg-white/5 text-stone-300 hover:border-white/20"
                                                            }`}
                                                    >
                                                        {slot.time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Consent */}
                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <div className="relative flex items-center justify-center pt-1">
                                                <input
                                                    type="checkbox"
                                                    checked={hasConsented}
                                                    onChange={(e) => setHasConsented(e.target.checked)}
                                                    className="sr-only"
                                                />
                                                <div className={`w-6 h-6 rounded-md border-2 transition-all flex items-center justify-center ${hasConsented ? 'bg-primary border-primary' : 'border-white/20 group-hover:border-white/40'}`}>
                                                    {hasConsented && <Check size={16} className="text-onyx font-bold" />}
                                                </div>
                                            </div>
                                            <span className="text-sm text-slate-400 leading-relaxed">
                                                By proceeding, I consent to WhizCrow processing my information and agree to be contacted by a Senior Marketing Strategist regarding my inquiry. We never share your data with third parties.
                                            </span>
                                        </label>
                                        {errors.consent && (
                                            <p className="text-red-400 text-sm mt-3 flex items-center gap-2">
                                                <AlertCircle size={14} /> {errors.consent}
                                            </p>
                                        )}
                                    </div>

                                    {formData.selectedDate && formData.selectedTime && (
                                        <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-2xl">
                                            <p className="text-primary font-semibold">
                                                ✓ Selected slot: {new Date(formData.selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {formData.selectedTime}
                                            </p>
                                        </div>
                                    )}

                                    {errors.calendar && (
                                        <p className="text-red-400 text-sm flex items-center gap-2 mt-4">
                                            <AlertCircle size={16} /> {errors.calendar}
                                        </p>
                                    )}
                                    {errors.general && (
                                        <p className="text-red-400 text-sm flex items-center gap-2 mt-4 p-4 bg-red-400/10 border border-red-400/20 rounded-2xl">
                                            <AlertCircle size={16} /> {errors.general}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex gap-4 mt-12">
                        {(currentStep > 0 || subStep > 0) && (
                            <button
                                onClick={handleBack}
                                className="px-6 py-3 border-2 border-white/10 rounded-2xl hover:border-white/20 transition-colors flex items-center gap-2"
                            >
                                <ArrowLeft size={20} />
                                Back
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            disabled={isSubmitting}
                            className={`flex-1 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 text-onyx ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <><Clock size={20} className="animate-spin" /> Processing...</>
                            ) : currentStep === 2 ? (
                                <><Check size={20} /> Confirm Booking</>
                            ) : (
                                <>Continue <ArrowRight size={20} /></>
                            )}
                        </button>
                    </div>

                    <p className="text-center text-slate-400 text-sm mt-8">
                        🔒 Your information is secure &nbsp;|&nbsp; ⚡ Takes less than 3 minutes
                    </p>
                </div>
            </div>
        </div>
    );
}
