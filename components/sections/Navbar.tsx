"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Palette, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Assuming you have these utilities defined locally:
import { useScrollDirection } from '@/lib/hooks'; 
import { getCartCount } from '@/lib/cart';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Navbar() {
  // Assuming useScrollDirection and getCartCount are implemented in your project
  const scrollDirection = useScrollDirection(); // Custom hook for floating navbar
  const [cartCount, setCartCount] = useState(0); 
  const [isScrolled, setIsScrolled] = useState(false);

  // Placeholder for theme toggle, assuming it uses next-themes
  // const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Placeholder implementation for cart count (always 0 for now)
    // setCartCount(getCartCount()); 

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Colors', href: '#colors' },
    { label: 'Why Us', href: '#whyus' }, // Added 'Why Us' anchor
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        // Hide only if scrolling down AND past the hero section
        y: scrollDirection === 'down' && isScrolled ? -100 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            {/* Using primary/accent colors for brand logo */}
            <Palette className="h-8 w-8 text-brand-primary group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold text-gradient font-display">MCGROW</span>
          </a>

          {/* Desktop Navigation Links */}
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
            {/* Theme Toggle is optional, but included */}
            <ThemeToggle />

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-brand-primary/10"
              aria-label="Sample cart"
            >
              <ShoppingCart className="h-5 w-5 text-mcgrow-primary" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md"
                >
                  {cartCount}
                </motion.span>
              )}
            </Button>

            {/* Mobile Sheet Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className='rounded-lg'>
                  <Menu className="h-6 w-6 text-mcgrow-primary" />
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
