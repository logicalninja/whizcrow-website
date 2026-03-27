import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Outcomes } from "@/components/home/Outcomes";
import { BusinessBenefits } from "@/components/home/BusinessBenefits";
import { Methodology } from "@/components/home/Methodology";
import { Services } from "@/components/home/Services";
import { EmpoweredTechnologies } from "@/components/home/EmpoweredTechnologies";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { HomeCTA } from "@/components/home/HomeCTA";
import { Newsletter } from "@/components/home/Newsletter";

export const metadata: Metadata = {
    title: "Full-Service Marketing Agency in Mumbai | AI Marketing",
    description: "WhizCrow is a full-service marketing agency in Mumbai. SEO, paid ads, branding, content, PR, influencer, ORM, AI automation & e-commerce — all under one roof.",
    openGraph: {
        title: "Full-Service Marketing Agency in Mumbai | AI Marketing",
        description: "WhizCrow is a full-service marketing agency in Mumbai. SEO, paid ads, branding, content, PR, influencer, ORM, AI automation & e-commerce — all under one roof.",
        url: "https://whizcrow.com",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com",
    },
    robots: { index: true, follow: true },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WhizCrow",
    url: "https://whizcrow.com",
    logo: "https://whizcrow.com/logos/blackbackground.png",
    foundingDate: "2017",
    description: "WhizCrow is a full-service marketing agency in Mumbai offering SEO, paid ads, branding, content, PR, influencer marketing, ORM, AI automation, e-commerce, and MICE services.",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-83692-19922",
        contactType: "customer service",
        email: "hello@whizcrow.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "No. 516, 5th Floor, Options Primo Building, Off Cross Rd C, near Passport Office",
        addressLocality: "Andheri East",
        addressRegion: "Maharashtra",
        postalCode: "400093",
        addressCountry: "IN",
    },
    sameAs: [
        "https://ae.linkedin.com/company/whizcrow",
        "https://www.instagram.com/whizcrow/",
        "https://x.com/whizcrow",
        "https://www.facebook.com/whizcrowtechnologies/",
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WhizCrow",
    url: "https://whizcrow.com",
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://whizcrow.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
    },
};

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Header />
            <main className="flex-grow">
                <Hero />
                <Outcomes />
                <BusinessBenefits />
                <Services />
                <Methodology />
                <EmpoweredTechnologies />
                <Testimonials />
                <FAQ />
                <HomeCTA />
            </main>
            <Newsletter />
            <Footer />
        </div>
    );
}
