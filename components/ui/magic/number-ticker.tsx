"use client";

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/hooks';

interface NumberTickerProps {
  value: number;
  className?: string;
}

export function NumberTicker({ value, className = '' }: NumberTickerProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {count}+
    </span>
  );
}
