import { Link, useLocation } from "wouter";
import { Mic2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/anchors", label: "Anchors" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/72 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/62">
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_34px_-18px_rgba(201,164,76,0.95)] transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/20">
            <div className="absolute inset-1 rounded-full border border-primary/10" />
            <Mic2 className="h-5 w-5 text-primary" />
          </div>
          <div className="leading-none">
            <span className="block text-xl font-extrabold tracking-[0.14em] text-foreground">GVista</span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/70 sm:block">Anchor Network</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-primary/10 bg-card/28 p-1.5 shadow-[inset_0_1px_0_rgba(245,230,200,0.04)] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                location === link.href
                  ? "bg-primary/14 text-primary shadow-[inset_0_0_0_1px_rgba(201,164,76,0.18)]"
                  : "text-foreground/72 hover:bg-primary/8 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/join">
            <Button variant="outline" className="h-11 rounded-full border-primary/45 px-6 font-semibold text-primary hover:bg-primary hover:text-primary-foreground gold-glow">
              Join as Anchor
            </Button>
          </Link>
        </div>

        <button
          className="rounded-full border border-primary/20 bg-card/50 p-2.5 text-foreground transition-colors hover:text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-4 mb-4 flex flex-col gap-2 rounded-3xl border border-primary/14 bg-card/95 p-4 shadow-2xl animate-in slide-in-from-top-3 fade-in duration-200 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                location === link.href ? "bg-primary/12 text-primary" : "text-foreground/80 hover:bg-primary/8 hover:text-primary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/join" onClick={() => setIsOpen(false)}>
            <Button className="mt-2 h-12 w-full rounded-2xl bg-primary font-semibold text-primary-foreground hover:bg-primary/90 gold-glow">
              Join as Anchor
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
