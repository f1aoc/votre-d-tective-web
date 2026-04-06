import { motion } from "framer-motion";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground max-w-3xl mx-auto mb-6">
            Obtenez un avis d'expert sur ce qui compte vraiment
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Notre approche investigative repose sur la précision, la stratégie et une
            discrétion absolue. Qu'il s'agisse d'affaires personnelles, juridiques ou
            corporatives, nous vous aidons à découvrir les réponses dont vous avez
            besoin — sans bruit et avec un professionnalisme total.
          </p>
          <a
            href="#contact"
            className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
          >
            Planifier votre briefing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
