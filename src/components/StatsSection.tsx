import { motion } from "framer-motion";

const stats = [
  { value: "5k+", label: "Affaires traitées", desc: "Des milliers d'enquêtes menées avec succès et discrétion." },
  { value: "3k+", label: "Clients servis", desc: "Particuliers, entreprises et cabinets d'avocats nous font confiance." },
  { value: "98%", label: "Taux de réussite", desc: "Un taux de résolution exceptionnel grâce à notre méthodologie rigoureuse." },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-foreground text-center max-w-3xl mx-auto mb-16"
        >
          Votre affaire mérite une expertise pointue pour découvrir la vérité,
          afin que chaque décision soit appuyée par des renseignements vérifiés.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8"
            >
              <div className="text-5xl md:text-6xl font-display text-primary mb-3">{stat.value}</div>
              <h3 className="font-display text-xl text-foreground mb-2">{stat.label}</h3>
              <p className="text-muted-foreground font-body font-light text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
