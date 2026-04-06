import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Nous avions besoin de discrétion et de résultats rapides — ils ont livré. Les preuves nous ont aidés à résoudre une situation critique sans publicité.",
    name: "Sophie Martin",
    role: "Cliente privée",
  },
  {
    text: "Ils sont devenus notre ressource de confiance pour le travail de terrain sensible. Fiables, méticuleux et toujours conformes aux exigences légales.",
    name: "Marc Dubois",
    role: "Directeur, Cabinet Dubois & Associés",
  },
  {
    text: "J'avais des doutes personnels que je ne pouvais plus ignorer. Leur travail m'a apporté la clarté que je ne trouvais nulle part ailleurs — le tout géré avec délicatesse.",
    name: "Claire Lefèvre",
    role: "Cliente privée",
  },
  {
    text: "Une équipe d'une efficacité remarquable. Chaque détail a été documenté avec précision. Je recommande sans hésitation leurs services.",
    name: "Philippe Moreau",
    role: "Avocat en droit familial",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-primary text-sm uppercase tracking-widest font-body">Retours clients</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-8">
            La confiance de professionnels et clients de tous secteurs
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="text-4xl font-display text-foreground">4.9</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground font-body text-sm ml-2">Score de satisfaction</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border p-8"
            >
              <p className="text-foreground font-body font-light italic leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-foreground font-body text-sm font-medium">{t.name}</div>
                  <div className="text-muted-foreground font-body text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
