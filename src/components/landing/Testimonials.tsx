import { useReveal } from "@/hooks/use-reveal";

const TESTIMONIALS = [
  {
    quote: "En el primer mes recuperé 18 horas semanales. Las tasaciones que antes me llevaban una tarde, ahora son automáticas.",
    name: "Lucía Mendoza",
    role: "Broker · Palermo Propiedades",
    avatar: "LM",
    color: "bg-primary",
  },
  {
    quote: "El metabuscador es magia pura. Mis clientes reciben opciones de todos los portales en un solo PDF al instante.",
    name: "Martín Saavedra",
    role: "Director · MS Inmobiliaria",
    avatar: "MS",
    color: "bg-coral",
  },
  {
    quote: "Los reels que genera CasaBot tienen mejor performance que los que hacíamos con un editor freelance.",
    name: "Julieta Roca",
    role: "Marketing · Roca Bienes Raíces",
    avatar: "JR",
    color: "bg-foreground",
  },
];

export function Testimonials() {
  const { ref, inView } = useReveal();
  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${inView ? "in-view" : ""} max-w-2xl mb-16`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-4">
            Lo que dicen
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Inmobiliarias que ya ganaron <span className="text-gradient-coral">tiempo y ventas</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => {
            const Card = () => {
              const { ref, inView } = useReveal();
              return (
                <div
                  ref={ref}
                  className={`reveal ${inView ? "in-view" : ""} relative rounded-3xl bg-card border border-border p-7 hover:shadow-glow transition-all duration-500`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <svg className="h-8 w-8 text-primary/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 6C5.6 6 3 8.6 3 12.4c0 3 2 5.6 5.4 5.6 2.4 0 4.4-1.6 4.4-3.8 0-2-1.4-3.4-3.4-3.4-.4 0-.6 0-.8.2.2-2 1.4-3 3.2-3.2L9.4 6zm9 0c-3.8 0-6.4 2.6-6.4 6.4 0 3 2 5.6 5.4 5.6 2.4 0 4.4-1.6 4.4-3.8 0-2-1.4-3.4-3.4-3.4-.4 0-.6 0-.8.2.2-2 1.4-3 3.2-3.2L18.4 6z"/>
                  </svg>
                  <p className="text-base leading-relaxed mb-6 text-foreground/90">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`h-11 w-11 rounded-full ${t.color} flex items-center justify-center text-sm font-bold text-primary-foreground`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            };
            return <Card key={t.name} />;
          })}
        </div>
      </div>
    </section>
  );
}
