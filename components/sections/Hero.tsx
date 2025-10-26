"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextFlip } from "@/components/ui/magic/text-flip";
import { NumberTicker } from "@/components/ui/magic/number-ticker";
import { PAINT_COLORS } from "@/data/colors";

import LaserFlow from "@/components/LaserFlow.jsx";
import LiquidEther from "@/components/LiquidEther";
import { useReducedMotion } from "@/lib/hooks";

export function Hero() {
  const features = ["Ultra-Rich Finish", "Low-VOC", "Washable", "Interior & Exterior"];
  const prefersReducedMotion = useReducedMotion?.() ?? false;

  return (
    <BackgroundGradientAnimation
      className="relative w-full h-screen flex items-center justify-center"
      gradientBackgroundStart="var(--brand-primary-darker)"
      gradientBackgroundEnd="var(--brand-primary)"
      firstColor="var(--brand-accent)"
      secondColor="var(--brand-primary-dark)"
      thirdColor="var(--brand-accent)"
      fourthColor="var(--brand-primary)"
      fifthColor="var(--brand-lavender)"
      pointerColor="var(--brand-lavender)"
      size="100%"
      blendingValue="hard-light"
    >
      {/* === Intensified fluid background === */}
      <div
        className="
          absolute inset-0 -z-10 pointer-events-none
          [mask-image:radial-gradient(80%_70%_at_50%_45%,white,rgba(255,255,255,0.6) 60%,transparent)]
        "
        aria-hidden
      >
        {prefersReducedMotion ? (
          <div className="absolute inset-0 opacity-55 bg-[radial-gradient(1250px_520px_at_50%_45%,rgba(255,107,176,.65),transparent_70%)]" />
        ) : (
          <>
            <LiquidEther
              colors={["#6D28D9", "#B5179E", "#FF4D9D"]} // deeper purple + hotter pink
              resolution={0.7}       // sharper detail
              mouseForce={26}        // more motion
              cursorSize={130}       // larger “brush”
              autoDemo
              autoSpeed={0.75}
              autoIntensity={3.0}    // higher energy
              className="!pointer-events-none [filter:saturate(1.35)_brightness(1.08)]"
              style={{ width: "100%", height: "100%" }}
            />

            {/* subtle glow blend for extra richness */}
            <div className="absolute inset-0 pointer-events-none mix-blend-plus-lighter opacity-45" />
            <div className="absolute inset-0 pointer-events-none opacity-35 bg-[radial-gradient(900px_420px_at_50%_42%,rgba(255,107,176,.45),transparent_65%),radial-gradient(900px_420px_at_50%_60%,rgba(109,40,217,.35),transparent_65%)]" />
          </>
        )}
      </div>

      {/* === Foreground card & content === */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div
          className="
            relative max-w-6xl w-full
            rounded-3xl border border-white/15
            bg-white/75 dark:bg-zinc-900/55 backdrop-blur-xl
            shadow-[0_24px_160px_-12px_rgba(166,77,255,0.45)]
            px-6 py-10 md:px-12 md:py-16
          "
        >
          {/* Laser beam (brighter/saturated) clipped to the card */}
          <div
            className="
              pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]
              [mask-image:linear-gradient(to_bottom,transparent_0,transparent_22%,black_30%,black_100%)]
              [mask-repeat:no-repeat]
            "
            aria-hidden
          >
            {!prefersReducedMotion && (
              <div className="absolute inset-0 opacity-95 mix-blend-screen [filter:saturate(1.35)_brightness(1.05)]">
                <LaserFlow
                  horizontalBeamOffset={0.28}
                  verticalBeamOffset={0.5}
                  color="#FF4DB0" className={undefined} style={undefined} dpr={undefined}                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="mx-auto max-w-5xl text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-card/30 rounded-full px-4 py-2 text-sm text-foreground"
              >
                <Palette className="h-4 w-4 text-brand-accent" />
                <NumberTicker value={PAINT_COLORS.length} className="font-semibold" />
                <span>Premium Colors Available</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display text-foreground"
              >
                <span className="text-gradient">MCGROW</span>
                <br />
                <span>Color &amp; Coating Experts</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl text-muted-foreground font-medium h-12 flex items-center justify-center"
              >
                <TextFlip words={["Ultra-Rich Finish", "Low-VOC", "Washable", "Interior & Exterior"]} className="text-gradient" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Transform your space with professional-grade paint solutions engineered for lasting beauty and superior performance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary-darker text-lg px-8 py-6 group text-primary-foreground rounded-full font-semibold shadow-lg shadow-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/60 transition-all duration-300"
                  onClick={() => document.getElementById("colors")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Colors
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 bg-card/50 backdrop-blur-sm rounded-full font-semibold text-foreground hover:text-brand-primary hover:border-brand-primary transition-all duration-300"
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Products
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
