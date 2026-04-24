import { useReveal } from "@/hooks/use-reveal";

export function CTA() {
  const { ref, inView } = useReveal();
  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""} relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center bg-foreground text-background`}
        >
          {/* animated blobs */}
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl animate-blob" />
          <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-coral/40 blur-3xl animate-blob-slow" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur px-4 py-2 text-xs font-semibold mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Lanzamiento oficial · Acceso anticipado
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-3xl mx-auto">
              El asistente que tu inmobiliaria <span className="text-gradient-coral">venía esperando</span>.
            </h2>
            <p className="mt-6 text-lg text-background/70 max-w-xl mx-auto">
              Probá CasaBot gratis durante 14 días. Sin tarjeta. Sin instalaciones. Solo WhatsApp.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-semibold shadow-glow hover:scale-105 transition-transform"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.38A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                Empezar gratis en WhatsApp
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background/10 backdrop-blur border border-background/20 px-7 py-4 text-base font-semibold hover:bg-background/20 transition-colors"
              >
                Ver demo de 90 segundos
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-background/60">
              <span className="flex items-center gap-1.5">✓ 14 días gratis</span>
              <span className="flex items-center gap-1.5">✓ Sin tarjeta de crédito</span>
              <span className="flex items-center gap-1.5">✓ Configuración en 2 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.38A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
            </svg>
          </div>
          <span className="font-display font-bold">Casa<span className="text-primary">Bot</span></span>
          <span className="text-sm text-muted-foreground ml-2">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Términos</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
          <a href="#" className="hover:text-foreground transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
