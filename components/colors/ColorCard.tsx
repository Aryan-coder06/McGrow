"use client";

import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { PaintColor } from '@/data/colors';
import { toast } from 'sonner';

interface ColorCardProps {
  color: PaintColor;
}

export function ColorCard({ color }: ColorCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color.hex);
      setCopied(true);
      toast.success(`Copied ${color.hex}`);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy');
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border card-glow-hover cursor-pointer"
    >
      <div
        className="aspect-square w-full"
        style={{ backgroundColor: color.hex }}
      />

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {color.name}
            </h3>
            <p className="text-sm text-muted-foreground">{color.finish}</p>
          </div>

          <button
            onClick={handleCopy}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label={`Copy ${color.name} hex code`}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-muted-foreground">{color.hex}</span>
          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
            {color.family}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
