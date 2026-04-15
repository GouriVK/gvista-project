import { Link } from "wouter";
import { Mic2, Mail, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-card/42">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/12">
                <Mic2 className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xl font-extrabold tracking-[0.14em] text-foreground">GVista</span>
            </Link>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              A curated stage-talent network for event organizers who want confident, multilingual anchors for high-value celebrations and professional gatherings.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Twitter, Mail].map((Icon, index) => (
                <a key={index} href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/12 bg-background/50 text-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/55 hover:text-primary hover:shadow-[0_12px_32px_-22px_rgba(201,164,76,0.9)]">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-foreground">Platform</h4>
            <ul className="space-y-3.5">
              <li><Link href="/anchors" className="text-sm text-muted-foreground transition-colors hover:text-primary">Browse Anchors</Link></li>
              <li><Link href="/join" className="text-sm text-muted-foreground transition-colors hover:text-primary">Join as Anchor</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">How it Works</a></li>
              <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Booking Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-foreground">Future Ready</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Payments</a></li>
              <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Ratings</a></li>
              <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Managed Bookings</a></li>
              <li><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GVista. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
            <span>Premium Booking Experience</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>Verified Talent</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>Multilingual Hosts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
