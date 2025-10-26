"use client";

import { useReducedMotion } from '@/lib/hooks';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function AuroraBackground({ className, children }: AuroraBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute inset-0 opacity-50",
            !prefersReducedMotion && "animate-aurora"
          )}
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 50%, rgba(126, 68, 213, 0.3), transparent),
              radial-gradient(ellipse 60% 50% at 80% 30%, rgba(148, 83, 202, 0.2), transparent),
              radial-gradient(ellipse 50% 80% at 20% 60%, rgba(154, 75, 184, 0.2), transparent)
            `,
            backgroundSize: '200% 200%',
            backgroundPosition: '50% 50%',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
