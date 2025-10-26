"use client";

import {
  Palette,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Droplets,
  ShieldCheck,
  Sparkles,
  Leaf,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up to your email provider
    setEmail("");
    // You can toast here if you use sonner: toast.success("Thanks for subscribing!");
  };

  return (
    <footer id="contact" className="relative bg-secondary/50 border-t border-border">
      {/* gradient hairline */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"
        aria-hidden
      />

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto py-12 md:py-16">
          {/* Pre-footer CTA */}
          <div
            className="
              relative mb-12 md:mb-16 overflow-hidden rounded-3xl
              border border-brand-primary/20 bg-gradient-to-r
              from-brand-primary/10 via-brand-accent/10 to-brand-primary/10
              p-6 md:p-8
            "
          >
            <div className="grid gap-6 md:grid-cols-3 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display">
                  Free Colour Consultation
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Book a session with our experts—get the perfect shades, finishes, and pairings for your space.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 border border-border">
                    <Droplets className="h-3.5 w-3.5 text-brand-primary" /> Washable Finishes
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 border border-border">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-primary" /> Long-lasting Protection
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 border border-border">
                    <Leaf className="h-3.5 w-3.5 text-brand-primary" /> Low-VOC Options
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 border border-border">
                    <Sparkles className="h-3.5 w-3.5 text-brand-primary" /> Premium Look
                  </span>
                </div>
              </div>

              <div className="md:justify-self-end">
                <Button
                  className="w-full md:w-auto bg-gradient-to-r from-brand-primary to-brand-accent text-primary-foreground shadow-brand-primary/30 shadow-lg hover:shadow-brand-primary/50"
                  onClick={() => document.getElementById("colors")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Now <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand & contact */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="h-8 w-8 text-brand-primary" />
                <span className="text-2xl font-bold text-gradient font-display">MCGROW</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Professional-grade paints, primers, and finishes engineered for lasting beauty and superior performance.
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-[2px] h-4 w-4 text-brand-primary" />
                  <span>
                    MCGROW Paints Pvt. Ltd., Industrial Area Phase-II,
                    <br /> Jaipur, Rajasthan 302006, India
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-brand-primary" />
                  <a href="tel:+919999999999" className="hover:text-brand-primary transition-colors">
                    +91-99999-99999
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-brand-primary" />
                  <a href="mailto:hello@mcgrow.in" className="hover:text-brand-primary transition-colors">
                    hello@mcgrow.in
                  </a>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Linkedin, label: "LinkedIn" },
                ].map(({ Icon, label }, i) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="
                      inline-flex h-9 w-9 items-center justify-center rounded-full
                      border border-border bg-background/70 hover:bg-brand-primary/10
                      transition-colors"
                  >
                    <Icon className="h-4.5 w-4.5 text-foreground/80" />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <nav aria-label="Quick links">
              <h3 className="font-semibold text-foreground mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#colors" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    Colors
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#whyus" className="text-muted-foreground hover:text-brand-primary transition-colors">
                    Why Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Get updates</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Shade drops, tips, and offers straight to your inbox.
              </p>
              <form onSubmit={onSubscribe} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/80"
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-brand-primary to-brand-accent text-primary-foreground"
                >
                  Subscribe
                </Button>
              </form>

              <p className="mt-3 text-xs text-muted-foreground">
                By subscribing you agree to our{" "}
                <a href="#" className="underline hover:text-brand-primary">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          {/* Legal bar */}
          <div className="mt-10 md:mt-12 border-t border-border pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} MCGROW Paints. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-brand-primary transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-brand-primary transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-brand-primary transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="
          fixed right-5 bottom-5 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full
          bg-background/80 border border-border backdrop-blur hover:bg-brand-primary/10 transition-colors
        "
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}
