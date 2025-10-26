"use client";

import { PRODUCTS } from '@/data/products';
import { ProductCarousel } from '@/components/products/ProductCarousel';

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Products</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade paint solutions for every project. From primers to finishes, we have everything you need.
            </p>
          </div>

          <ProductCarousel products={PRODUCTS} />
        </div>
      </div>
    </section>
  );
}
