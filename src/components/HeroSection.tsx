import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Détective privé au bureau"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
        {/* Geometric overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none">
            <circle cx="200" cy="300" r="4" fill="hsl(40, 60%, 50%)" />
            <circle cx="1700" cy="200" r="4" fill="hsl(40, 60%, 50%)" />
            <circle cx="400" cy="500" r="4" fill="hsl(40, 60%, 50%)" />
            <circle cx="1500" cy="600" r="4" fill="hsl(40, 60%, 50%)" />
            <circle cx="600" cy="800" r="4" fill="hsl(40, 60%, 50%)" />
            <circle cx="1300" cy="400" r="3" fill="hsl(40, 60%, 50%)" />
            <line x1="200" y1="300" x2="400" y2="500" stroke="hsl(40, 60%, 50%)" strokeWidth="0.5" opacity="0.3" />
            <line x1="400" y1="500" x2="1300" y2="400" stroke="hsl(40, 60%, 50%)" strokeWidth="0.5" opacity="0.3" />
            <line x1="1300" y1="400" x2="1700" y2="200" stroke="hsl(40, 60%, 50%)" strokeWidth="0.5" opacity="0.3" />
            <line x1="1500" y1="600" x2="1300" y2="400" stroke="hsl(40, 60%, 50%)" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6"
        >
          Discrétion & perspicacité.{" "}
          <span className="italic">Professionnellement</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          Vous apportez votre perspicacité et votre discrétion au travail.
          Notre expertise correspond à vos standards — précise, professionnelle et
          conçue pour les affaires privées.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
        >
          Commencer l'enquête
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
