"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-500/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Premium Furniture Collection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Luxury Meets
            </span>
            <span className="block text-white mt-2 md:mt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              Comfort
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            Discover handcrafted furniture that transforms your space into a sanctuary of elegance and sophistication
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-6 text-lg shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 hover:scale-105"
            >
              Explore Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              View Catalog
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-16 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
            {[
              { number: "500+", label: "Products" },
              { number: "10K+", label: "Happy Customers" },
              { number: "50+", label: "Awards" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
