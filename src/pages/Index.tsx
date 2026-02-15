import Hero from "@/components/landing/Hero";
import StatsStrip from "@/components/landing/StatsStrip";
import Solutions from "@/components/landing/Solutions";
import Methodology from "@/components/landing/Methodology";
import Performance from "@/components/landing/Performance";
import Partners from "@/components/landing/Partners";
import Testimonial from "@/components/landing/Testimonial";
import Cases from "@/components/landing/Cases";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <div className="relative z-10 bg-background">
          <StatsStrip />
          <Solutions />
          <Methodology />
          <Performance />
          <Partners />
          <Testimonial />
          <Cases />
          <CTASection />
        </div>
      </main>
      <div className="relative z-10 bg-background">
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
