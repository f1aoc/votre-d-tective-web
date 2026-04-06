import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Briefing initial",
    desc: "Première consultation confidentielle pour comprendre votre situation, définir les objectifs et établir le périmètre de l'investigation.",
  },
  {
    num: "02",
    title: "Investigation ciblée",
    desc: "Déploiement de nos ressources et méthodologies éprouvées pour collecter les informations et preuves nécessaires.",
  },
  {
    num: "03",
    title: "Rapport final",
    desc: "Livraison d'un rapport complet et structuré avec toutes les conclusions, preuves et recommandations stratégiques.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processus" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Vos réponses passent par un processus d'investigation structuré
          </h2>
          <p className="text-muted-foreground font-body font-light">
            Chaque enquête suit une méthodologie rigoureuse pour garantir des résultats fiables.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative p-8 bg-card border border-border"
            >
              <span className="text-6xl font-display text-primary/20 absolute top-4 right-6">
                {step.num}
              </span>
              <div className="relative z-10">
                <h3 className="font-display text-2xl text-foreground mb-4 mt-8">{step.title}</h3>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
