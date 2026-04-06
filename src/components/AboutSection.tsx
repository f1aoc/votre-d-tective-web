import { motion } from "framer-motion";
import aboutImg from "@/assets/about-detective.jpg";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={aboutImg}
              alt="Détective analysant des preuves"
              className="w-full rounded-sm shadow-2xl"
              loading="lazy"
              width={800}
              height={1000}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-body">À propos</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
              Conçus pour la précision
            </h2>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6">
              Nous opérons dans l'ombre. Notre équipe réunit expertise investigative,
              réflexion stratégique et un profond respect de la confidentialité.
              Chaque affaire est traitée avec la précision qu'elle mérite — sans bruit,
              sans spectacle, uniquement des résultats.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-8">
              Des audits d'entreprise aux affaires personnelles, nous apportons la clarté
              là où d'autres ne trouvent que le chaos. Ce que vous ne voyez pas est
              notre spécialité — toujours discrets, toujours déterminés.
            </p>
            <a
              href="#services"
              className="inline-block border border-primary text-primary px-6 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
            >
              En savoir plus
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
