import { motion } from "framer-motion";
import { Eye, UserSearch, ShieldCheck, UserCog, FileText } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Surveillance & Filature",
    desc: "Opérations de surveillance discrètes et méthodiques pour documenter les faits avec précision et objectivité.",
  },
  {
    icon: UserSearch,
    title: "Vérification d'antécédents",
    desc: "Enquêtes approfondies sur les parcours personnels et professionnels pour des décisions éclairées.",
  },
  {
    icon: ShieldCheck,
    title: "Forensique numérique",
    desc: "Analyse experte des données numériques, récupération de preuves électroniques et traçabilité digitale.",
  },
  {
    icon: UserCog,
    title: "Opérations sous couverture",
    desc: "Infiltrations professionnelles menées avec le plus haut niveau de discrétion et de professionnalisme.",
  },
  {
    icon: FileText,
    title: "Compilation de rapports",
    desc: "Rapports détaillés et structurés, admissibles en justice, documentant chaque étape de l'investigation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-body">Comment nous pouvons aider</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3">
            Nos services couvrent tous les angles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
