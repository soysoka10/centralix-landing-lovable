import { useReveal, useCountUp } from "@/hooks/use-reveal";

const STATS = [
  { value: 78, suffix: "%", label: "Menos tiempo en tareas operativas" },
  { value: 12, suffix: "K+", label: "Propiedades indexadas a diario" },
  { value: 3, suffix: "s", label: "Respuesta promedio del bot" },
  { value: 24, suffix: "/7", label: "Disponibilidad real, sin guardias" },
];

function Stat({ s, i }: { s: typeof STATS[number]; i: number }) {
  const { ref, inView } = useReveal();
  const v = useCountUp(s.value, 1800, inView);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} text-center md:text-left`}
      style={{ transitionDelay: `${i * 120}ms` }}
    >
      <div className="text-5xl md:text-6xl font-display font-bold text-gradient">
        {v}
        <span>{s.suffix}</span>
      </div>
      <div className="mt-3 text-sm text-muted-foreground max-w-[180px] mx-auto md:mx-0">{s.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-24 px-6 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s, i) => <Stat key={s.label} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
