import { Suspense, lazy } from "react";
import { HeroSection } from "@/components/ui/hero-1";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

import AboutUs from "@/components/landing/AboutUs";
import Solutions from "@/components/landing/Solutions";
import Methodology from "@/components/landing/Methodology";
import Cases from "@/components/landing/Cases";
import ContactCTA from "@/components/landing/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="apple-fonts flex min-h-screen flex-col font-sans">
            <SmoothScroll />
            <main className="grow">
                <HeroSection />
                <div className="relative z-10">
                    <AboutUs />
                    <Solutions />
                    <Methodology />
                    <Cases />
                    <ContactCTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
