import { ChatMockup } from "./ChatMockup";

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-hero">
      {/* decorative blobs */}
      <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-coral/20 blur-3xl animate-blob-slow" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Nuevo · Disponible para inmobiliarias en LATAM
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05]">
              El bot de WhatsApp que <span className="text-gradient">trabaja</span> mientras vos <span className="text-gradient-coral">vendés</span>.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Tasaciones automáticas, fichas colaborativas, home staging con IA, metabuscador nacional y reels en minutos. Todo dentro de un chat que tu equipo ya sabe usar.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-base font-semibold shadow-soft hover:scale-105 transition-transform"
              >
                Probar gratis por 14 días
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-7 py-4 text-base font-semibold hover:bg-secondary transition-colors"
              >
                Ver cómo funciona
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["bg-primary", "bg-coral", "bg-foreground", "bg-primary/70"].map((c, i) => (
                  <div key={i} className={`h-9 w-9 rounded-full ${c} border-2 border-background`} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <div className="text-xs">+800 inmobiliarias activas</div>
              </div>
            </div>
          </div>

          {/* chat mockup */}
          <div className="lg:col-span-5 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
