import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.38A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.07 14.07c-.21.6-1.24 1.15-1.71 1.22-.44.07-1 .1-1.61-.1-.37-.12-.85-.28-1.46-.55-2.57-1.11-4.25-3.7-4.38-3.87-.13-.17-1.05-1.4-1.05-2.67 0-1.27.67-1.9.91-2.16.24-.27.52-.34.7-.34.17 0 .35 0 .5.01.16.01.38-.06.59.45.21.51.73 1.78.79 1.91.07.13.11.28.02.45-.09.17-.13.28-.26.43-.13.15-.27.34-.39.45-.13.13-.26.27-.11.53.15.26.66 1.09 1.42 1.77.97.87 1.79 1.13 2.05 1.26.26.13.41.11.56-.07.15-.17.65-.76.82-1.02.17-.26.34-.21.58-.13.24.09 1.5.71 1.76.84.26.13.43.19.49.3.06.11.06.65-.15 1.25z"/>
              </svg>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">Casa<span className="text-primary">Bot</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Funciones</a>
            <a href="#how" className="hover:text-foreground transition-colors">Cómo funciona</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Precios</a>
          </div>
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:scale-105 transition-transform shadow-soft"
          >
            Probar gratis
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
