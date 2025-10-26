"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Product } from "@/data/products";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import ElectricBorder from "@/components/ElectricBorder"; // 👈 TS version

interface ProductOverlayProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductOverlay({ product, isOpen, onClose }: ProductOverlayProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // lock scroll + ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev || "unset";
    };
  }, [isOpen, onClose]);

  const handleAddToCart = () => {
    addToCart({ slug: product.slug, name: product.name });
    toast.success(`${product.name} added to sample cart`);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Centered modal container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              role="dialog"
              aria-labelledby="product-title"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.93, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 10 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto"
            >
              {/* Electric animated border */}
              <ElectricBorder
                color="#A64DFF"       // brand purple (use "#FF6BB0" for pink)
                speed={1.25}          // animation speed
                chaos={0.9}           // intensity of displacement
                thickness={2}         // border thickness (px)
                className="rounded-3xl w-[min(92vw,900px)] md:w-[min(90vw,980px)] max-h-[85vh] overflow-hidden"
              >
                {/* Inner content card */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
                  {/* Close */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur hover:bg-background"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </Button>

                  {/* Image side */}
                  <div className="relative bg-zinc-900/90 md:min-h-[540px]">
                    <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8 md:p-10"
                        sizes="(max-width: 768px) 92vw, 45vw"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 md:p-8 overflow-y-auto">
                    <h2 id="product-title" className="text-2xl md:text-3xl font-bold text-foreground">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-muted-foreground text-base md:text-lg">{product.type}</p>

                    <div className="mt-4 text-3xl md:text-4xl font-extrabold text-gradient">{product.price}</div>

                    <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-muted-foreground">
                      <div><span className="font-semibold text-foreground">Coverage:</span> 400 sq ft per gallon</div>
                      <div><span className="font-semibold text-foreground">Drying Time:</span> 2–4 hours</div>
                      <div><span className="font-semibold text-foreground">Finish:</span> Premium Quality</div>
                    </div>

                    <Button
                      onClick={handleAddToCart}
                      className="mt-8 w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary-darker"
                      size="lg"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Sample Cart
                    </Button>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
