import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"; // Import standard fonts
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://whizcrow.com'),
  title: {
    default: 'WhizCrow | Full-Service Marketing Agency',
    template: '%s | WhizCrow',
  },
  description: "WhizCrow is a full-service marketing agency in Mumbai. We deliver SEO, paid ads, branding, PR, AI automation, influencer marketing, ORM, and e-commerce growth.",
  keywords: ["full-service marketing agency", "marketing agency Mumbai", "AI marketing agency", "SEO agency India", "digital marketing Mumbai", "ORM agency India", "branding agency Mumbai"],
  authors: [{ name: "WhizCrow" }],
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
    title: "WhizCrow | Full-Service Marketing Agency",
    description: "WhizCrow is a full-service marketing agency in Mumbai. We deliver SEO, paid ads, branding, PR, AI automation, influencer marketing, ORM, and e-commerce growth.",
    url: "https://whizcrow.com",
    siteName: "WhizCrow",
    images: [
      {
        url: "/logos/blackbackground.png",
        width: 1200,
        height: 630,
        alt: "WhizCrow - Full-Service Marketing Agency Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhizCrow | Full-Service Marketing Agency",
    description: "WhizCrow is a full-service marketing agency in Mumbai delivering SEO, paid ads, branding, PR, AI automation, and more.",
    images: ["/logos/blackbackground.png"],
    creator: "@whizcrow",
  },
  alternates: {
    canonical: 'https://whizcrow.com',
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

        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          outfit.variable,
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
