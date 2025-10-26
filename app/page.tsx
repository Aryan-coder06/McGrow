"use client";

import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { ColorShowcase } from '@/components/colors/ColorShowcase';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { Footer } from '@/components/sections/Footer';
import TestimonialsSection from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Products />
      <ColorShowcase />
      <BentoGrid />
      <TestimonialsSection /> 
      <Footer />
    </main>
  );
}
