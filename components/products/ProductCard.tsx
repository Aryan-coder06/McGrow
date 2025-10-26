"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { ProductOverlay } from "./ProductOverlay";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="
          group relative w-full overflow-hidden rounded-2xl
          border border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60
          shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary
          hover:shadow-[0_14px_40px_-10px_rgba(166,77,255,0.35)]
        "
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.985 }}
        aria-expanded={isOpen}
        aria-label={`View details for ${product.name}`}
      >
        {/* Stage (image area) */}
        <div className="relative aspect-[4/3] bg-zinc-950">
          {/* soft radial glow behind the product */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-40 mix-blend-screen
                            bg-[radial-gradient(60%_60%_at_50%_55%,rgba(166,77,255,0.35)_0%,transparent_70%)]" />
          </div>

          {/* Product image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="
              object-contain object-center
              p-6 sm:p-7 md:p-8
              [image-rendering:-webkit-optimize-contrast]
              drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]
            "
            loading="lazy"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
          />
        </div>

        {/* Divider and caption */}
        <div className="border-t border-white/10 bg-gradient-to-b from-white/6 to-transparent p-4 text-left">
          <h3 className="line-clamp-1 font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{product.type}</p>
        </div>

        {/* Subtle hover light */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-primary/10 to-transparent" />
        </div>
      </motion.button>

      {/* Portal modal (already fixed in ProductOverlay) */}
      <ProductOverlay product={product} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
