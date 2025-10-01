"use client";

import { useState } from "react";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Luxury Velvet Sofa",
    price: 2499,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    reviews: 124,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Modern Dining Set",
    price: 1899,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    reviews: 89,
    tag: "New",
  },
  {
    id: 3,
    name: "King Size Bed Frame",
    price: 1599,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    reviews: 156,
    tag: "Popular",
  },
  {
    id: 4,
    name: "Executive Office Desk",
    price: 899,
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    reviews: 67,
    tag: "Trending",
  },
  {
    id: 5,
    name: "Designer Armchair",
    price: 649,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    reviews: 203,
    tag: "Bestseller",
  },
  {
    id: 6,
    name: "Crystal Chandelier",
    price: 1299,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    reviews: 94,
    tag: "Luxury",
  },
];

export function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Handpicked pieces that define luxury and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full shadow-lg">
                  {product.tag}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(product.id)
                        ? "fill-amber-500 text-amber-500"
                        : "text-white"
                    } transition-colors duration-300`}
                  />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100">
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="relative aspect-square overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${product.image}')`,
                    filter: "brightness(0.8)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-4 md:p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="text-amber-400 font-semibold text-sm">{product.rating}</span>
                    <span className="text-gray-500 text-xs">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    ${product.price.toLocaleString()}
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 px-8"
          >
            View All Products
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
