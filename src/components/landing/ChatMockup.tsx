import { useEffect, useState } from "react";

type Msg = {
  side: "user" | "bot";
  text: string;
  delay: number;
  typing?: number;
};

const SCRIPT: Msg[] = [
  { side: "user", text: "Hola! Necesito tasar un depto de 65m² en Palermo 🏠", delay: 400 },
  { side: "bot", text: "¡Hola Lucía! Analizando comparables en la zona…", delay: 1200, typing: 800 },
  { side: "bot", text: "✨ Tasación estimada: USD 178.000 — 195.000\n📊 Basado en 47 propiedades similares", delay: 2400 },
  { side: "user", text: "Genial. Generame un reel para Instagram 🎬", delay: 1600 },
  { side: "bot", text: "Listo en 90 segundos 🔥", delay: 1200, typing: 1000 },
];

export function ChatMockup() {
  const [visible, setVisible] = useState<number>(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const run = async () => {
      for (let i = 0; i < SCRIPT.length; i++) {
        if (cancelled) return;
        const msg = SCRIPT[i];
        await new Promise<void>((res) => {
          const t = setTimeout(res, msg.delay);
          timeouts.push(t);
        });
        if (msg.typing && msg.side === "bot") {
          setTyping(true);
          await new Promise<void>((res) => {
            const t = setTimeout(res, msg.typing);
            timeouts.push(t);
          });
          setTyping(false);
        }
        if (cancelled) return;
        setVisible((v) => v + 1);
      }
      // restart loop after pause
      await new Promise<void>((res) => {
        const t = setTimeout(res, 4000);
        timeouts.push(t);
      });
      if (cancelled) return;
      setVisible(0);
      run();
    };
    run();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* phone frame */}
      <div className="relative rounded-[3rem] bg-ink p-3 shadow-glow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-ink rounded-b-2xl z-20" />
        <div className="relative overflow-hidden rounded-[2.4rem] bg-[oklch(0.95_0.01_150)]">
          {/* WhatsApp header */}
          <div className="bg-primary text-primary-foreground px-4 pt-8 pb-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-bold">
              🏡
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Centralix</div>
              <div className="text-xs opacity-80 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" />
                en línea
              </div>
            </div>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM4 21h16v-2a6 6 0 00-12 0v2z" opacity="0.6"/>
            </svg>
          </div>

          {/* chat area */}
          <div
            className="px-3 py-4 space-y-2 min-h-[440px] max-h-[440px] overflow-hidden flex flex-col justify-end"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.85 0.02 150) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          >
            {SCRIPT.slice(0, visible).map((m, i) => (
              <div
                key={i}
                className={`flex ${m.side === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-[13px] leading-snug whitespace-pre-line shadow-soft ${
                    m.side === "user"
                      ? "bg-[oklch(0.88_0.08_150)] text-foreground rounded-br-sm"
                      : "bg-card text-card-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-card rounded-2xl rounded-bl-sm px-4 py-3 shadow-soft flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground" style={{ animation: "typing 1.4s ease-in-out infinite" }} />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground" style={{ animation: "typing 1.4s ease-in-out 0.2s infinite" }} />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground" style={{ animation: "typing 1.4s ease-in-out 0.4s infinite" }} />
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <div className="px-3 py-3 bg-[oklch(0.97_0.005_150)] border-t border-border flex items-center gap-2">
            <div className="flex-1 bg-card rounded-full px-4 py-2 text-xs text-muted-foreground">
              Escribí un mensaje
            </div>
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
              <svg className="h-4 w-4 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* floating badges */}
      <div className="absolute -left-8 top-32 glass rounded-2xl px-3 py-2 shadow-soft animate-float-slow hidden sm:flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-coral/15 flex items-center justify-center">⚡</div>
        <div className="text-xs">
          <div className="font-semibold">3 segundos</div>
          <div className="text-muted-foreground">respuesta</div>
        </div>
      </div>
      <div className="absolute -right-6 top-72 glass rounded-2xl px-3 py-2 shadow-soft animate-float hidden sm:flex items-center gap-2" style={{ animationDelay: "1.5s" }}>
        <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center">🎯</div>
        <div className="text-xs">
          <div className="font-semibold">+12.000</div>
          <div className="text-muted-foreground">propiedades</div>
        </div>
      </div>
    </div>
  );
}
