import { Suspense, lazy } from "react";
import { HeroSection } from "@/components/ui/hero-1";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

// Lazy load below-the-fold sections
const AboutUs = lazy(() => import("@/components/landing/AboutUs"));
const Solutions = lazy(() => import("@/components/landing/Solutions"));
const Methodology = lazy(() => import("@/components/landing/Methodology"));
const Cases = lazy(() => import("@/components/landing/Cases"));
const ContactCTA = lazy(() => import("@/components/landing/ContactCTA"));
const Footer = lazy(() => import("@/components/layout/Footer"));

const SectionFallback = () => (
    <div className="min-h-[200px]" />
);

export default function Home() {
    return (
        <div className="apple-fonts flex min-h-screen flex-col font-sans">
            <SmoothScroll />
            <main className="grow">
                <HeroSection />
                <div className="relative z-10">
                    <Suspense fallback={<SectionFallback />}>
                        <AboutUs />
                        <Solutions />
                        <Methodology />
                        <Cases />
                        <ContactCTA />
                    </Suspense>
                </div>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
}
