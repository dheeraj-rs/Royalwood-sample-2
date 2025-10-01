"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/components/featured-products";
import { Categories } from "@/components/categories";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { Cart } from "@/components/cart";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-amber-900/10 via-black to-slate-900/20 pointer-events-none" />

      <Header onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
