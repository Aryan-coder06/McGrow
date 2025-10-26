"use client";

import { Testimonial } from "@/data/testimonials";
import { Quote, Star, CheckCircle2 } from "lucide-react";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  // Optional extras if present in your data
  const rating = (t as any).rating as number | undefined; // 1..5
  const product = (t as any).product as string | undefined;
  const verified = (t as any).verified ?? true;

  const initials = t.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl border border-border bg-card/90 backdrop-blur
        shadow-[0_22px_60px_-20px_rgba(120,64,255,0.28)]
        transition-all duration-300
        hover:shadow-[0_28px_80px_-18px_rgba(120,64,255,0.40)]
        hover:-translate-y-0.5
        p-5 md:p-6
      "
      aria-label={`Testimonial by ${t.name} from ${t.city}`}
    >
      {/* subtle ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-brand-primary/0 transition-[ring] duration-300 group-hover:ring-2 group-hover:ring-brand-primary/30" />

      {/* decorative quote */}
      <Quote className="absolute -top-3 -left-3 h-14 w-14 text-brand-primary/10" aria-hidden />

      {/* rating + badge */}
      <div className="mb-3 flex items-center justify-between">
        {typeof rating === "number" ? (
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "fill-yellow-400 text-yellow-400" : "text-zinc-300"
                }`}
              />
            ))}
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">Customer Review</span>
        )}

        {verified && (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            Verified
          </span>
        )}
      </div>

      {/* quote */}
      <p className="text-base leading-relaxed text-foreground/90">“{t.quote}”</p>

      {/* footer */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="
              grid h-10 w-10 place-items-center shrink-0 rounded-full
              bg-gradient-to-br from-brand-primary to-brand-accent
              text-white font-semibold
            "
            aria-hidden
          >
            {initials}
          </div>
          <div className="min-w-0">
            <div className="truncate font-semibold text-foreground">{t.name}</div>
            <div className="truncate text-sm text-muted-foreground">{t.city}</div>
          </div>
        </div>

        {product && (
          <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary">
            {product}
          </span>
        )}
      </div>
    </article>
  );
}
