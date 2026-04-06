import { motion } from "framer-motion";
import { FileText, BookOpen, Video, Wrench, Headphones, Briefcase } from "lucide-react";

const resources = [
  { icon: FileText, type: "Rapport", title: "Tactiques de terrain pour la surveillance urbaine" },
  { icon: BookOpen, type: "Guide", title: "Limites légales : ce qu'un détective privé peut et ne peut pas faire" },
  { icon: Video, type: "Vidéo", title: "Construire un dossier solide : étape par étape" },
  { icon: Wrench, type: "Outils", title: "Modèles d'entretien et listes de vérification éditables" },
  { icon: Headphones, type: "Podcast", title: "Derrière l'objectif : récits de surveillance" },
  { icon: Briefcase, type: "Analyse", title: "Espionnage industriel — schémas réels, affaires réelles" },
];

const ResourcesSection = () => {
  return (
    <section id="ressources" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-body">Ressources & Insights</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Outils, connaissances et matériaux pour ceux qui cherchent plus loin
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-2xl mx-auto">
            Des guides de terrain aux analyses de renseignement numérique, notre
            bibliothèque accompagne chaque étape de votre mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border p-6 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <r.icon className="w-5 h-5 text-primary" />
                <span className="text-xs uppercase tracking-wider text-primary font-body">{r.type}</span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-4">{r.title}</h3>
              <span className="text-sm text-primary font-body group-hover:underline">
                Télécharger →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
