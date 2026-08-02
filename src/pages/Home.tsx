import { Suspense, lazy, useState, useEffect } from "react";
import { HeroSection } from "@/components/ui/hero-1";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const AboutUs = lazy(() => import("@/components/landing/AboutUs"));
const Methodology = lazy(() => import("@/components/landing/Methodology"));
const Cases = lazy(() => import("@/components/landing/Cases"));
const ContactCTA = lazy(() => import("@/components/landing/ContactCTA"));
const Footer = lazy(() => import("@/components/layout/Footer"));

export default function Home() {
    const [shouldLoadBelowFold, setShouldLoadBelowFold] = useState(false);

    useEffect(() => {
        const loadNow = () => setShouldLoadBelowFold(true);
        const timer = setTimeout(loadNow, 200);
        window.addEventListener("scroll", loadNow, { passive: true, once: true });
        window.addEventListener("touchstart", loadNow, { passive: true, once: true });
        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", loadNow);
            window.removeEventListener("touchstart", loadNow);
        };
    }, []);

    return (
        <div className="apple-fonts flex min-h-screen flex-col font-sans">
            <SmoothScroll />
            <main className="grow">
                <HeroSection />
                {shouldLoadBelowFold && (
                    <div className="relative z-10">
                        <Suspense fallback={<div className="w-full min-h-[400px] bg-transparent" />}>
                            <AboutUs />
                            <Methodology />
                            <Cases />
                            <ContactCTA />
                        </Suspense>
                    </div>
                )}
            </main>
            {shouldLoadBelowFold && (
                <Suspense fallback={<div className="w-full h-40 bg-[#0a0a0a]" />}>
                    <Footer />
                </Suspense>
            )}
        </div>
    );
}

