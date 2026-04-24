const LOGOS = [
  "Zonaprop", "MercadoLibre", "Argenprop", "Properati",
  "Inmuebles24", "Remax", "Tokko", "Navent", "Reporte Inmobiliario", "Plataforma 5",
];

export function LogoMarquee() {
  return (
    <section className="py-12 border-y border-border bg-card/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
          Conectado con todos los portales del país
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-2xl font-display font-bold text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              <div className="h-2 w-2 rounded-full bg-primary/40" />
              {logo}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card/80 to-transparent" />
      </div>
    </section>
  );
}
