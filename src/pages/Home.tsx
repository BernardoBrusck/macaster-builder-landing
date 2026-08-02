import { Suspense, lazy } from "react";
import { HeroSection } from "@/components/ui/hero-1";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

import AboutUs from "@/components/landing/AboutUs";
const Methodology = lazy(() => import("@/components/landing/Methodology"));
const Cases = lazy(() => import("@/components/landing/Cases"));
const ContactCTA = lazy(() => import("@/components/landing/ContactCTA"));
const Footer = lazy(() => import("@/components/layout/Footer"));

export default function Home() {
    return (
        <div className="apple-fonts flex min-h-screen flex-col font-sans">
            <SmoothScroll />
            <main className="grow">
                <HeroSection />
                <div className="relative z-10">
                    <AboutUs />
                    <Suspense fallback={<div className="w-full min-h-[400px] bg-transparent" />}>
                        <Methodology />
                        <Cases />
                        <ContactCTA />
                    </Suspense>
                </div>
            </main>
            <Suspense fallback={<div className="w-full h-40 bg-[#0a0a0a]" />}>
                <Footer />
            </Suspense>
        </div>
    );
}

