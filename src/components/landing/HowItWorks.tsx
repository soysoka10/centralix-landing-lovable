import { useReveal } from "@/hooks/use-reveal";

const STEPS = [
  {
    n: "01",
    title: "Conectá tu WhatsApp",
    desc: "En 2 minutos vinculás tu número o el de tu inmobiliaria. Sin instalar apps, sin cambios.",
    icon: "📱",
  },
  {
    n: "02",
    title: "Pedile lo que necesites",
    desc: "Tasaciones, fichas, búsquedas o reels. Hablale como le hablarías a un compañero de equipo.",
    icon: "💬",
  },
  {
    n: "03",
    title: "Recibí resultados al instante",
    desc: "Documentos, imágenes, videos y reportes listos para enviar a tus clientes.",
    icon: "🚀",
  },
];

export function HowItWorks() {
  const { ref, inView } = useReveal();
  return (
    <section id="how" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-coral/10 blur-3xl -translate-y-1/2" />
      <div className="container mx-auto max-w-6xl relative">
        <div ref={ref} className={`reveal ${inView ? "in-view" : ""} text-center max-w-2xl mx-auto mb-20`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-4">
            Cómo funciona
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Tres pasos. Cero fricción.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {STEPS.map((s, i) => {
            const Card = () => {
              const { ref, inView } = useReveal();
              return (
                <div
                  ref={ref}
                  className={`reveal ${inView ? "in-view" : ""} relative text-center`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="relative mx-auto h-32 w-32 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-coral/20 animate-pulse-glow" />
                    <div className="relative h-full w-full rounded-full bg-card border border-border flex items-center justify-center text-4xl shadow-soft">
                      {s.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-display font-bold">
                      {s.n}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{s.desc}</p>
                </div>
              );
            };
            return <Card key={s.n} />;
          })}
        </div>
      </div>
    </section>
  );
}
