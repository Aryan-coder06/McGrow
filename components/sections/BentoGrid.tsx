"use client";

import { motion } from 'framer-motion';
import { Sparkles, Shield, Droplet, Clock } from 'lucide-react';
import { PAINT_COLORS } from '@/data/colors';

export function BentoGrid() {
  const collections = [
    {
      title: 'Neutrals',
      description: 'Timeless elegance',
      icon: Shield,
      colors: PAINT_COLORS.filter(c => c.family === 'Neutral').slice(0, 3),
    },
    {
      title: 'Pastels',
      description: 'Soft & soothing',
      icon: Sparkles,
      colors: PAINT_COLORS.filter(c => c.family === 'Pastel').slice(0, 3),
    },
    {
      title: 'Bold',
      description: 'Make a statement',
      icon: Droplet,
      colors: PAINT_COLORS.filter(c => c.family === 'Bold').slice(0, 3),
    },
    {
      title: 'Metallic',
      description: 'Luxurious shimmer',
      icon: Clock,
      colors: PAINT_COLORS.filter(c => c.family === 'Metallic').slice(0, 3),
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Collections</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated color palettes designed for every style and space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((collection, idx) => {
              const Icon = collection.icon;
              return (
                <motion.div
                  key={collection.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden card-glow-hover cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {collection.title}
                      </h3>
                      <p className="text-muted-foreground">{collection.description}</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {collection.colors.map((color) => (
                      <div
                        key={color.slug}
                        className="flex-1 aspect-square rounded-lg border border-border"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
