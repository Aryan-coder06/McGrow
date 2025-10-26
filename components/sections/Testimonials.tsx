"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";
import InfiniteScroll from "@/components/InfiniteScroll";

// Split array into N columns (stable order)
function intoColumns<T>(arr: T[], n = 3): T[][] {
  return Array.from({ length: n }, (_, i) => arr.filter((_, idx) => idx % n === i));
}

export default function TestimonialsSection() {
  const [col1, col2, col3] = useMemo(() => intoColumns(TESTIMONIALS, 3), []);

  const toItems = (list: typeof TESTIMONIALS) =>
    list.map((t) => ({ content: <TestimonialCard key={`${t.name}-${t.city}`} t={t} /> }));

  // Respect reduced-motion for autoplay
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  /**
   * --- Mobile carousel (1 card per view) ---
   */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);
  const slides = TESTIMONIALS.slice(0, 12); // cap on mobile if you want

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-advance (paused for reduced-motion)
  const timerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!emblaApi || reduceMotion) return;

    const tick = () => {
      timerRef.current = window.setTimeout(() => {
        emblaApi.scrollNext();
        rafRef.current = requestAnimationFrame(tick);
      }, 3500);
    };

    const stop = () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      timerRef.current = null;
      rafRef.current = null;
    };

    emblaApi.on("pointerDown", stop);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    tick();
    return () => {
      stop();
      emblaApi.off("pointerDown", stop);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, reduceMotion]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" className="relative py-24 bg-background">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-primary/5 via-transparent to-brand-accent/5" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-10 items-start">
          {/* Left: sticky heading */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
              Loved across India
            </span>
            <h2
              className="
                mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight
                bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent
              "
            >
              What our
              <br /> clients say?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Real homes. Real results. Stories from customers who upgraded their spaces with MCGROW finishes.
            </p>
          </div>

          {/* --- Desktop / Tablet: 3 tilted auto-scrolling columns --- */}
          <div className="hidden md:block">
            {/* overflow-hidden prevents tilted cards from peeking outside, gradients create soft fades */}
            <div className="relative flex gap-6 justify-end overflow-hidden">
              {/* soft fade top */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 z-10 bg-gradient-to-b from-background to-transparent" />
              {/* soft fade bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 z-10 bg-gradient-to-t from-background to-transparent" />

              <InfiniteScroll
                width="22rem"
                maxHeight="560px"
                negativeMargin="-0.75rem"
                itemMinHeight={220}
                isTilted
                tiltDirection="left"
                autoplay={!reduceMotion}
                autoplaySpeed={0.7}
                autoplayDirection="down"
                pauseOnHover
                items={toItems(col1)}
              />
              <InfiniteScroll
                width="22rem"
                maxHeight="610px"
                negativeMargin="-0.75rem"
                itemMinHeight={220}
                isTilted
                tiltDirection="right"
                autoplay={!reduceMotion}
                autoplaySpeed={0.65}
                autoplayDirection="up"
                pauseOnHover
                items={toItems(col2)}
              />
              <InfiniteScroll
                width="22rem"
                maxHeight="580px"
                negativeMargin="-0.75rem"
                itemMinHeight={220}
                isTilted
                tiltDirection="left"
                autoplay={!reduceMotion}
                autoplaySpeed={0.75}
                autoplayDirection="down"
                pauseOnHover
                items={toItems(col3)}
              />
            </div>
          </div>

          {/* --- Mobile: single-card swipe carousel (shows ONE at a time) --- */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef} aria-live="polite">
                <div className="flex gap-4">
                  {slides.map((t, i) => (
                    <div
                      key={`${t.name}-${t.city}-${i}`}
                      className="flex-[0_0_92%] sm:flex-[0_0_86%]" // wide single card
                    >
                      <TestimonialCard t={t} />
                    </div>
                  ))}
                </div>
              </div>

              {/* nav buttons (mobile sized & subtle) */}
              <button
                className="absolute left-1 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-background/80 backdrop-blur border border-border shadow hover:scale-105"
                onClick={scrollPrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-background/80 backdrop-blur border border-border shadow hover:scale-105"
                onClick={scrollNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* dots */}
              <div className="mt-4 flex justify-center gap-2">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-4 rounded-full transition-colors ${
                      i === selected ? "bg-brand-primary" : "bg-border"
                    }`}
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          </div>
          {/* --- End mobile carousel --- */}
        </div>
      </div>
    </section>
  );
}
