const items = [
  "Gestion discrète des dossiers",
  "Kits d'investigation personnalisés",
  "Renseignement en temps réel",
  "Cartographie stratégique des affaires",
  "Analyse et expertise pointue",
];

const MarqueeBanner = () => {
  return (
    <div className="bg-secondary py-4 overflow-hidden border-y border-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm text-muted-foreground font-body flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
