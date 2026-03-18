import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import standard fonts
import "./globals.css";
import { cn } from "@/lib/utils";
import Sentinel from "@/components/chat/Sentinel";
import JsonLd from "@/components/seo/JsonLd";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import Analytics from "@/components/analytics/Analytics";
import { Suspense } from "react";
import Script from "next/script";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { ExitIntentPopup } from "@/components/layout/ExitIntentPopup";
import ThemeInjector from "@/components/payload/ThemeInjector";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhizCrow | Reputation = Revenue",
  description: "Protecting Enterprise Value with AI-Driven Reputation Intelligence. Architects of Digital Trust.",
  keywords: ["Reputation Management", "Digital Trust", "Crisis Response", "Online Reputation Management", "Search Engine Suppression", "Wikipedia Editing", "Review Removal", "Brand Protection"],
  authors: [{ name: "WhizCrow Intelligence" }],
  creator: "WhizCrow",
  publisher: "WhizCrow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "WhizCrow | Online Reputation Management (ORM) Agency",
    description: "WhizCrow is an elite technology-driven intelligence agency dedicated to preserving institutional valuation and executive authority via AI-driven reputation intelligence.",
    url: "https://whizcrow.com",
    siteName: "WhizCrow",
    images: [
      {
        url: "/favicon-custom.png",
        width: 1200,
        height: 630,
        alt: "WhizCrow - Reputation Management for the AI Age",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhizCrow | Reputation = Revenue",
    description: "Protecting Enterprise Value with AI-Driven Reputation Intelligence.",
    images: ["/favicon-custom.png"],
    creator: "@whizcrow",
  },
  metadataBase: new URL('https://whizcrow.com'),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/favicon-custom.png',
    apple: '/favicon-custom.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeInjector />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <PostHogProvider>
          <Suspense>
            <Analytics />
          </Suspense>
          <JsonLd />
          <WhatsAppFloating />
          <ExitIntentPopup />
          {children}
          <CookieConsent />
          {/* <Sentinel /> */}
          <Script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="699351e64209c93212dc110a"
            strategy="afterInteractive"
          />
          {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
            <Script
              src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              strategy="afterInteractive"
            />
          )}
        </PostHogProvider>
      </body>
    </html>
  );
}
