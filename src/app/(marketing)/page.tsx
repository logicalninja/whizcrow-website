import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Outcomes } from "@/components/home/Outcomes";
import { BusinessBenefits } from "@/components/home/BusinessBenefits";
import { Methodology } from "@/components/home/Methodology";
import { Services } from "@/components/home/Services";
import { EmpoweredTechnologies } from "@/components/home/EmpoweredTechnologies";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Outcomes />
                <BusinessBenefits />
                <Services />
                <Methodology />
                <EmpoweredTechnologies />
                <Testimonials />
                <HomeCTA />
            </main>
            <Newsletter />
            <Footer />
        </div>
    );
}
