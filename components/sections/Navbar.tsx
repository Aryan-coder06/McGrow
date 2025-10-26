"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/lib/hooks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const scrollDirection = useScrollDirection();
  const [cartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Colors", href: "#colors" },
    { label: "Why Us", href: "#whyus" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" && isScrolled ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg"
          : ""
      }`}
    >
      <div className="container mx-auto px-4">
        {/* INCREASED NAVBAR HEIGHT to accommodate a larger logo */}
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28 lg:h-32">
          <Link href="#home" className="flex items-center gap-2">
            {/* INCREASED LOGO SIZE */}
            <Image
              src="/main_logo.png"      // file in /public
              alt="MCGROW"
              priority
              width={300} // Increased intrinsic width
              height={90} // Increased intrinsic height (maintaining aspect ratio)
              sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 300px" // Adjusted sizes for different breakpoints
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28 object-contain drop-shadow-sm" // Increased rendered heights at breakpoints
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-brand-primary transition-colors font-medium relative
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0
                           after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-brand-primary/10"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-lg">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-8 mt-12">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-2xl font-display text-muted-foreground hover:text-brand-primary transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}