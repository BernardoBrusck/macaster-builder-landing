import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phrases = [
    "Compensados para formas",
    "Madeira para construção",
    "Pinus e eucalipto tratado",
    "Tapumes e palanques especiais",
    "Concreto usinado",
    "Tintas e acabamentos",
    "Impermeabilizantes",
    "Insumos para canteiro",
    "Redução de custos"
  ];

  const MotionButton = motion(Button);

  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background-video-opt.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay - Minimalist Black Tint */}
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl text-left">

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MACASTER GESTOR
              <br/>
              <span className="text-xl md:text-3xl lg:text-4xl font-normal text-muted-foreground mt-4 block">
                Soluções estratégicas em suprimentos de
              </span>
            </motion.span>
            <span className="text-primary inline-block min-h-[1.2em] text-2xl md:text-3xl lg:text-4xl mt-2 block">
              <Typewriter
                text={phrases}
                speed={70}
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={"_"}
              />
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <MotionButton
              size="lg"
              onClick={() => scrollToSection("#contato")}
              className="bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 text-black font-bold h-14 px-8 text-lg shadow-xl border border-white/50"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Cotar Materiais
              <ArrowRight className="ml-2 h-5 w-5" />
            </MotionButton>
            <MotionButton
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#cases")}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Portfólio
            </MotionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
