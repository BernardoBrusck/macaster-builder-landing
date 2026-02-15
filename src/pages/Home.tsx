import { HeroSection } from "@/components/ui/hero-1";
import AboutUs from "@/components/landing/AboutUs";
import Solutions from "@/components/landing/Solutions";

export default function Home() {
    return (
        <div className="apple-fonts flex w-full flex-col min-h-screen">
            <main className="grow">
                <HeroSection />
                <div className="relative z-10">
                    <AboutUs />
                    <Solutions />
                </div>
            </main>
        </div>
    );
}
