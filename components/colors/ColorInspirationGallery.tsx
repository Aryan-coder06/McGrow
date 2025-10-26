"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type GalleryItem = {
  id: string;
  title: string;
  subtitle?: string;
  hex: string;
  image: string;
  roomTag:
    | "Living Room"
    | "Bedroom"
    | "Kitchen"
    | "Bathroom"
    | "Office"
    | "Exterior"
    | "Hotel Lobby"
    | "Cafe"
    | "Kids Room"
    | "Hallway";
};

const ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Living Room",
    subtitle: "Lavender Mist",
    hex: "#E0E0F8",
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Living Room",
  },
  {
    id: "g2",
    title: "Bedroom",
    subtitle: "Blush Pink",
    hex: "#F0D4E0",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Bedroom",
  },
  {
    id: "g3",
    title: "Kitchen",
    subtitle: "Mint Dream",
    hex: "#B8EAD1",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Kitchen",
  },
  // 🔧 FIXED: switched to a stable Unsplash image URL
  {
    id: "g4",
    title: "Bathroom",
    subtitle: "Sky Blue",
    hex: "#A9D7E3",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    roomTag: "Bathroom",
  },
  {
    id: "g5",
    title: "Home Office",
    subtitle: "Taupe Silk",
    hex: "#A8A3A8",
    image:
      "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Office",
  },
  {
    id: "g6",
    title: "Exterior",
    subtitle: "Teal Depth",
    hex: "#008080",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Exterior",
  },
  // 🔧 FIXED: switched to a stable Unsplash image URL
  {
    id: "g7",
    title: "Hotel Lobby",
    subtitle: "Royal Violet",
    hex: "#4B0082",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Hotel Lobby",
  },
  {
    id: "g8",
    title: "Cafe",
    subtitle: "Copper Glow",
    hex: "#B87333",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Cafe",
  },
  {
    id: "g9",
    title: "Kids Room",
    subtitle: "Pale Lilac",
    hex: "#D7B4DF",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Kids Room",
  },
  {
    id: "g10",
    title: "Hallway",
    subtitle: "Whisper White",
    hex: "#F8F8FF",
    image:
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1600&q=80",
    roomTag: "Hallway",
  },
];

// simple per-card fallback if any image 404s
const FALLBACK: Record<string, string> = {
  g4: "https://images.unsplash.com/photo-1600566753086-00f18fb145b9?auto=format&fit=crop&w=1600&q=80",
  g7: "https://images.unsplash.com/photo-1499914485622-a88fac536970?auto=format&fit=crop&w=1600&q=80",
};

export function ColorInspirationGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  const copyHex = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      toast.success(`Copied ${hex}`);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="relative">
      <div className="mb-6">
        <h3 className="text-3xl md:text-4xl font-bold">
          <span className="text-gradient">Real-World Inspiration</span>
        </h3>
        <p className="text-muted-foreground mt-2">
          See how our colors look in living rooms, bedrooms, kitchens, exteriors,
          hotels and more.
        </p>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {ITEMS.map((item) => (
            <article
              key={item.id}
              className="flex-[0_0_88%] sm:flex-[0_0_60%] md:flex-[0_0_44%] lg:flex-[0_0_30%] rounded-2xl overflow-hidden bg-card border border-border shadow-sm group relative"
            >
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={item.image}
                  alt={`${item.title} inspiration`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  data-id={item.id}
                  onError={(e) => {
                    const id = (e.currentTarget.dataset.id || "") as keyof typeof FALLBACK;
                    if (FALLBACK[id]) e.currentTarget.src = FALLBACK[id];
                  }}
                />
                {/* bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />
                {/* content overlay */}
                <div className="absolute bottom-0 w-full p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs opacity-80">{item.roomTag}</div>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      {item.subtitle && (
                        <div className="opacity-90 text-sm">{item.subtitle}</div>
                      )}
                    </div>
                    <button
                      onClick={() => copyHex(item.hex)}
                      className="ml-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                      aria-label={`Copy ${item.hex}`}
                      title="Copy hex"
                    >
                      <div
                        className="h-3.5 w-3.5 rounded-full border border-white/50"
                        style={{ backgroundColor: item.hex }}
                      />
                      <span className="text-xs font-medium">{item.hex}</span>
                      <Copy className="h-3.5 w-3.5 opacity-80" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* nav buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur border-border shadow-md hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur border-border shadow-md hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
