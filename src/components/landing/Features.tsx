import { useReveal } from "@/hooks/use-reveal";

type Feature = {
  icon: string;
  title: string;
  desc: string;
  accent: "primary" | "coral";
  visual: React.ReactNode;
};

function TasacionVisual() {
  return (
    <div className="relative h-full w-full p-6 flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="relative space-y-2">
        {[68, 84, 92, 76].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="text-[10px] font-mono text-muted-foreground w-10">{2020 + i}</div>
            <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-coral"
                style={{ width: `${w}%`, animation: `shimmer 2.5s linear infinite`, backgroundSize: "200% 100%" }}
              />
            </div>
          </div>
        ))}
        <div className="pt-3 flex items-baseline gap-1">
          <span className="text-2xl font-display font-bold text-gradient">USD 187K</span>
          <span className="text-xs text-muted-foreground">/ valor estimado</span>
        </div>
      </div>
    </div>
  );
}

function FichasVisual() {
  return (
    <div className="relative h-full w-full p-6 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-coral blur-xl opacity-30" />
        <div className="relative bg-card rounded-2xl p-4 w-48 shadow-soft">
          <div className="h-20 rounded-lg bg-gradient-to-br from-primary/20 to-coral/20 mb-3 flex items-center justify-center text-3xl">🏘️</div>
          <div className="h-2 rounded-full bg-border mb-2 w-3/4" />
          <div className="h-2 rounded-full bg-border w-1/2" />
          <div className="flex -space-x-2 mt-3">
            {["bg-primary", "bg-coral", "bg-foreground"].map((c, i) => (
              <div key={i} className={`h-7 w-7 rounded-full ${c} border-2 border-card flex items-center justify-center text-[10px] font-bold text-primary-foreground`}>
                {["L", "M", "J"][i]}
              </div>
            ))}
            <div className="h-7 w-7 rounded-full bg-muted border-2 border-card flex items-center justify-center text-[10px] font-semibold">+5</div>
          </div>
        </div>
        <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-1 rounded-full animate-bounce-soft">
          editando
        </div>
      </div>
    </div>
  );
}

function StagingVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden flex">
      <div className="flex-1 relative bg-gradient-to-br from-[oklch(0.6_0.02_60)] to-[oklch(0.4_0.02_40)] flex items-end justify-center p-2">
        <span className="text-[10px] font-mono text-white/80 absolute top-2 left-2">ANTES</span>
        <div className="w-full h-2/3 border-2 border-dashed border-white/30 rounded" />
      </div>
      <div className="flex-1 relative bg-gradient-to-br from-cream to-[oklch(0.85_0.05_50)] p-2 flex items-end justify-center overflow-hidden">
        <span className="text-[10px] font-mono text-foreground/80 absolute top-2 left-2">DESPUÉS</span>
        <div className="absolute bottom-3 left-3 right-3 space-y-1">
          <div className="h-3 rounded bg-coral/40" />
          <div className="h-2 rounded bg-primary/40 w-2/3" />
          <div className="flex gap-1">
            <div className="h-6 w-6 rounded bg-primary" />
            <div className="h-6 w-6 rounded bg-coral" />
            <div className="h-6 w-6 rounded bg-foreground" />
          </div>
        </div>
        <div className="absolute top-2 right-2 text-lg animate-pulse">✨</div>
      </div>
    </div>
  );
}

function SearchVisual() {
  const portals = ["Zonaprop", "MercadoLibre", "Argenprop", "Properati", "Inmuebles24", "Remax"];
  return (
    <div className="relative h-full w-full p-6 flex flex-col justify-center overflow-hidden">
      <div className="bg-card rounded-xl px-3 py-2 shadow-soft flex items-center gap-2 mb-3">
        <svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <div className="text-xs text-foreground">Casa 3 amb · Belgrano</div>
        <div className="ml-auto text-[10px] font-mono text-primary">247 ✓</div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {portals.map((p, i) => (
          <div
            key={p}
            className="text-[10px] font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReelsVisual() {
  return (
    <div className="relative h-full w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-primary/10" />
      <div className="relative flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-16 h-28 rounded-xl bg-gradient-to-br shadow-soft animate-float"
            style={{
              background: `linear-gradient(135deg, oklch(${0.5 + i * 0.1} 0.15 ${30 + i * 60}), oklch(${0.7 - i * 0.1} 0.18 ${100 + i * 80}))`,
              animationDelay: `${i * 0.4}s`,
              transform: `rotate(${(i - 1) * 6}deg)`,
            }}
          >
            <div className="h-full flex items-center justify-center text-2xl">
              {["🏠", "🎬", "📱"][i]}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 right-3 bg-foreground text-background text-[10px] font-semibold px-2 py-1 rounded-full">
        ⏱ 2 min
      </div>
    </div>
  );
}

function AhorroVisual() {
  return (
    <div className="relative h-full w-full p-6 flex items-center justify-center">
      <div className="relative">
        <svg className="h-32 w-32 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="oklch(0.92 0.015 150)" strokeWidth="10" />
          <circle
            cx="50" cy="50" r="42" fill="none"
            stroke="url(#g1)" strokeWidth="10" strokeLinecap="round"
            strokeDasharray="264" strokeDashoffset="60"
            style={{ filter: "drop-shadow(0 0 6px oklch(0.55 0.15 158 / 0.4))" }}
          />
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="oklch(0.55 0.15 158)" />
              <stop offset="1" stopColor="oklch(0.72 0.18 35)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl font-display font-bold text-gradient">78%</div>
          <div className="text-[10px] text-muted-foreground">menos tiempo</div>
        </div>
      </div>
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    icon: "📊",
    title: "Tasaciones inteligentes",
    desc: "Valor de mercado en segundos basado en miles de comparables actualizados al instante.",
    accent: "primary",
    visual: <TasacionVisual />,
  },
  {
    icon: "👥",
    title: "Fichas colaborativas",
    desc: "Trabajá con tu equipo en una misma ficha. Cambios en vivo, comentarios y versiones.",
    accent: "coral",
    visual: <FichasVisual />,
  },
  {
    icon: "🪄",
    title: "Home staging con IA",
    desc: "Subí una foto vacía y recibí versiones decoradas listas para publicar en minutos.",
    accent: "primary",
    visual: <StagingVisual />,
  },
  {
    icon: "🔎",
    title: "Metabuscador nacional",
    desc: "Una sola búsqueda en todos los portales del país. Sin abrir veinte pestañas.",
    accent: "coral",
    visual: <SearchVisual />,
  },
  {
    icon: "🎬",
    title: "Reels en minutos",
    desc: "Generá videos verticales para Instagram, TikTok y Reels con tu branding aplicado.",
    accent: "primary",
    visual: <ReelsVisual />,
  },
  {
    icon: "⚡",
    title: "Ahorro real de tiempo",
    desc: "Automatizá tareas repetitivas y volvé a enfocarte en lo que importa: cerrar ventas.",
    accent: "coral",
    visual: <AhorroVisual />,
  },
];

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  const { ref, inView } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} group relative rounded-3xl bg-card border border-border overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-1`}
      style={{ transitionDelay: `${(i % 3) * 80}ms` }}
    >
      <div className="h-44 bg-secondary/40 relative overflow-hidden">
        {f.visual}
      </div>
      <div className="p-6">
        <div className={`inline-flex items-center justify-center h-11 w-11 rounded-2xl text-xl mb-4 ${
          f.accent === "primary" ? "bg-primary/10" : "bg-coral/10"
        }`}>
          {f.icon}
        </div>
        <h3 className="text-xl font-display font-bold mb-2">{f.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
      </div>
      <div className={`absolute top-0 right-0 h-24 w-24 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${
        f.accent === "primary" ? "bg-primary" : "bg-coral"
      }`} />
    </div>
  );
}

export function Features() {
  const { ref, inView } = useReveal();
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div ref={ref} className={`reveal ${inView ? "in-view" : ""} max-w-2xl mb-16`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 text-coral px-3 py-1 text-xs font-semibold mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Funciones que enamoran
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Todo lo que necesita una <span className="text-gradient">inmobiliaria moderna</span>, en un solo chat.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
