import { motion } from "framer-motion";

const FooterCTA = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Prêt pour un briefing confidentiel ?
            </h2>
            <a
              href="mailto:contact@investigators.fr"
              className="inline-block gold-gradient text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-body font-medium hover:opacity-90 transition-opacity"
            >
              Réserver une consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl text-foreground mb-4">
              Besoin d'aide pour une affaire sensible ?
            </h3>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-6">
              Notre équipe est disponible pour répondre à vos questions
              en toute confidentialité. Chaque échange est protégé par
              le secret professionnel.
            </p>
            <a
              href="mailto:contact@investigators.fr"
              className="inline-block border border-primary text-primary px-6 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
            >
              Contacter notre équipe
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-primary text-xl">🕵️</span>
            <span className="font-display text-lg text-foreground">Investigators</span>
          </div>
          <p className="text-muted-foreground font-body text-xs">
            © 2026 Investigators. Tous droits réservés. Confidentialité garantie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
