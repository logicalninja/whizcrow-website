"use client";

import { useState, useEffect } from "react";
import { X, Shield, BarChart3, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsentPreferences {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    timestamp: number;
    version: string;
}

const CONSENT_KEY = "whizcrow_cookie_consent";
const CONSENT_VERSION = "1.0";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<ConsentPreferences>({
        essential: true,
        analytics: false,
        marketing: false,
        timestamp: Date.now(),
        version: CONSENT_VERSION,
    });

    useEffect(() => {
        // Check if user has already consented
        const stored = localStorage.getItem(CONSENT_KEY);
        if (!stored) {
            // Show banner after a brief delay for better UX
            setTimeout(() => setShowBanner(true), 1000);
        } else {
            const parsed: ConsentPreferences = JSON.parse(stored);
            setPreferences(parsed);
            // Apply consent preferences (load analytics/marketing scripts)
            applyConsent(parsed);
        }
    }, []);

    const applyConsent = (prefs: ConsentPreferences) => {
        // Here you would conditionally load analytics/marketing scripts
        if (prefs.analytics) {
            // Load Google Analytics, etc.
            console.log("Analytics enabled");
        }
        if (prefs.marketing) {
            // Load marketing pixels, etc.
            console.log("Marketing enabled");
        }
    };

    const savePreferences = (prefs: ConsentPreferences) => {
        const toSave = {
            ...prefs,
            timestamp: Date.now(),
            version: CONSENT_VERSION,
        };
        localStorage.setItem(CONSENT_KEY, JSON.stringify(toSave));
        setPreferences(toSave);
        applyConsent(toSave);
        setShowBanner(false);
        setShowSettings(false);
    };

    const acceptAll = () => {
        savePreferences({
            essential: true,
            analytics: true,
            marketing: true,
            timestamp: Date.now(),
            version: CONSENT_VERSION,
        });
    };

    const rejectAll = () => {
        savePreferences({
            essential: true,
            analytics: false,
            marketing: false,
            timestamp: Date.now(),
            version: CONSENT_VERSION,
        });
    };

    const saveCustom = () => {
        savePreferences(preferences);
    };

    return (
        <>
            {/* Cookie Banner — slim bottom bar */}
            <AnimatePresence>
                {showBanner && !showSettings && (
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-lg"
                    >
                        <div className="container mx-auto max-w-6xl px-4 py-3 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs text-stone-500 leading-snug">
                                We use cookies to improve your experience.{" "}
                                <a href="/privacy" className="text-primary hover:underline font-medium">
                                    Learn more
                                </a>
                            </p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowSettings(true)}
                                    className="px-3 py-1.5 text-xs text-stone-500 hover:text-stone-800 transition-colors underline underline-offset-2"
                                >
                                    Customise
                                </button>
                                <button
                                    onClick={rejectAll}
                                    className="px-4 py-1.5 text-xs bg-stone-100 text-stone-700 font-medium rounded-full hover:bg-stone-200 transition-all"
                                >
                                    Reject All
                                </button>
                                <button
                                    onClick={acceptAll}
                                    className="px-4 py-1.5 text-xs bg-primary text-onyx font-bold rounded-full hover:bg-primary/90 transition-all shadow-sm shadow-primary/20"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={() => setShowBanner(false)}
                                    className="p-1 hover:bg-stone-100 rounded-full transition-colors ml-1"
                                    aria-label="Close"
                                >
                                    <X size={14} className="text-stone-400" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Settings Modal */}
            <AnimatePresence>
                {showSettings && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-onyx/50 backdrop-blur-sm z-50"
                            onClick={() => setShowSettings(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                        >
                            <div className="container mx-auto max-w-4xl">
                                <div className="bg-white rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
                                    {/* Header */}
                                    <div className="sticky top-0 bg-white border-b border-stone-200 p-6 md:p-8">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl font-bold text-stone-900">Cookie Preferences</h3>
                                            <button
                                                onClick={() => setShowSettings(false)}
                                                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                                            >
                                                <X size={24} className="text-stone-500" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8 space-y-6">
                                        {/* Essential Cookies */}
                                        <div className="border border-stone-200 rounded-xl p-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-start gap-4 flex-1">
                                                    <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0">
                                                        <Shield className="text-stone-700" size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-stone-900 mb-2">
                                                            Essential Cookies
                                                        </h4>
                                                        <p className="text-sm text-stone-600 leading-relaxed">
                                                            Required for the website to function properly. These cookies enable core functionality such as security, network management, and accessibility. Cannot be disabled.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                                                        Always Active
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Analytics Cookies */}
                                        <div className="border border-stone-200 rounded-xl p-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-start gap-4 flex-1">
                                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                        <BarChart3 className="text-primary" size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-stone-900 mb-2">
                                                            Analytics Cookies
                                                        </h4>
                                                        <p className="text-sm text-stone-600 leading-relaxed">
                                                            Help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services.
                                                        </p>
                                                    </div>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.analytics}
                                                        onChange={(e) =>
                                                            setPreferences({ ...preferences, analytics: e.target.checked })
                                                        }
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Marketing Cookies */}
                                        <div className="border border-stone-200 rounded-xl p-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-start gap-4 flex-1">
                                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                        <Target className="text-accent" size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-stone-900 mb-2">
                                                            Marketing Cookies
                                                        </h4>
                                                        <p className="text-sm text-stone-600 leading-relaxed">
                                                            Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness. May be set by third-party advertisers.
                                                        </p>
                                                    </div>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.marketing}
                                                        onChange={(e) =>
                                                            setPreferences({ ...preferences, marketing: e.target.checked })
                                                        }
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="sticky bottom-0 bg-white border-t border-stone-200 p-6 md:p-8">
                                        <div className="flex flex-wrap gap-3 justify-end">
                                            <button
                                                onClick={() => setShowSettings(false)}
                                                className="px-6 py-3 text-stone-700 font-medium hover:text-stone-900 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={saveCustom}
                                                className="px-8 py-3 bg-primary text-onyx font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                            >
                                                Save Preferences
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
