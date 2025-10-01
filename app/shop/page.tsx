"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Cart } from "@/components/cart";
import { ShopFilters } from "@/components/shop-filters";
import { ProductGrid } from "@/components/product-grid";

export default function ShopPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-amber-900/10 via-black to-slate-900/20 pointer-events-none" />

      <Header onCartClick={() => setIsCartOpen(true)} />

      <main className="relative pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Our Collection
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Explore our complete range of luxury furniture
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <ShopFilters />
            <ProductGrid />
          </div>
        </div>
      </main>

      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
