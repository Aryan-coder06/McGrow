"use client";

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/data/products';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/lib/hooks';

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const prefersReducedMotion = useReducedMotion();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || prefersReducedMotion) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    const stopAutoplay = () => clearInterval(autoplay);

    emblaApi.on('pointerDown', stopAutoplay);
    emblaApi.on('pointerUp', () => {
      const newAutoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      emblaApi.on('pointerDown', () => clearInterval(newAutoplay));
    });

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, prefersReducedMotion]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [emblaApi, scrollPrev, scrollNext]);

  return (
    <div className="relative group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((product) => (
            <div
              key={product.slug}
              className="flex-[0_0_90%] min-w-0 sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_23%]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur border-border opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-110"
        aria-label="Previous product"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur border-border opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-110"
        aria-label="Next product"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
