"use client";

import { useMemo, useState } from "react";
import { PAINT_COLORS } from "@/data/colors";
import { ColorCard } from "./ColorCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColorInspirationGallery } from "./ColorInspirationGallery";

const DEFAULT_VISIBLE = 12;

export function ColorShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<string>("all");
  const [selectedFinish, setSelectedFinish] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const families = useMemo(() => Array.from(new Set(PAINT_COLORS.map((c) => c.family))), []);
  const finishes = useMemo(() => Array.from(new Set(PAINT_COLORS.map((c) => c.finish))), []);

  const filteredColors = useMemo(() => {
    return PAINT_COLORS.filter((color) => {
      const matchesSearch =
        color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        color.hex.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFamily = selectedFamily === "all" || color.family === selectedFamily;
      const matchesFinish = selectedFinish === "all" || color.finish === selectedFinish;
      return matchesSearch && matchesFamily && matchesFinish;
    });
  }, [searchTerm, selectedFamily, selectedFinish]);

  const visibleColors = showAll ? filteredColors : filteredColors.slice(0, DEFAULT_VISIBLE);

  return (
    <section id="colors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* ===== Gallery first (Asian Paints-style section) ===== */}
          <ColorInspirationGallery />

          {/* ===== Heading ===== */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Explore Colors</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of premium paint colors, each crafted to bring your vision to life.
            </p>
          </div>

          {/* ===== Filters ===== */}
          <div className="mb-2 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search colors or hex codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedFamily} onValueChange={setSelectedFamily}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by family" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Families</SelectItem>
                {families.map((family) => (
                  <SelectItem key={family} value={family}>
                    {family}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedFinish} onValueChange={setSelectedFinish}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by finish" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Finishes</SelectItem>
                {finishes.map((finish) => (
                  <SelectItem key={finish} value={finish}>
                    {finish}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* ===== Swatch grid (limited by default) ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleColors.map((color) => (
              <ColorCard key={color.id} color={color} />
            ))}
          </div>

          {/* ===== Empty / actions ===== */}
          {filteredColors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No colors found matching your criteria.</p>
            </div>
          )}

          {/* Show more / less */}
          {filteredColors.length > DEFAULT_VISIBLE && (
            <div className="flex justify-center">
              <Button
                variant={showAll ? "outline" : "default"}
                onClick={() => setShowAll((s) => !s)}
                className="rounded-full px-6"
              >
                {showAll ? "Show fewer colors" : `View full palette (${filteredColors.length})`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
