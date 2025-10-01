"use client";

import { useState } from "react";
import { Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function ShopFilters() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const categories = ["Living Room", "Bedroom", "Dining", "Office", "Outdoor", "Lighting"];
  const materials = ["Wood", "Metal", "Fabric", "Leather", "Glass"];
  const colors = ["Natural", "Black", "White", "Gray", "Brown"];

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
          Price Range
          <span className="text-sm text-amber-400">${priceRange[0]} - ${priceRange[1]}</span>
        </h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={5000}
          step={100}
          className="mt-6"
        />
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10">
        <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-amber-500/30 bg-white/5 text-amber-500 focus:ring-amber-500 focus:ring-offset-0"
              />
              <span className="text-gray-400 group-hover:text-amber-400 transition-colors duration-300">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10">
        <h3 className="text-lg font-bold text-white mb-4">Material</h3>
        <div className="space-y-3">
          {materials.map((material) => (
            <label key={material} className="flex items-center space-x-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-amber-500/30 bg-white/5 text-amber-500 focus:ring-amber-500 focus:ring-offset-0"
              />
              <span className="text-gray-400 group-hover:text-amber-400 transition-colors duration-300">
                {material}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/10">
        <h3 className="text-lg font-bold text-white mb-4">Color</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              className="px-4 py-2 rounded-full bg-white/5 border border-amber-500/20 text-gray-400 text-sm hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300"
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold">
        Apply Filters
      </Button>
    </div>
  );

  return (
    <>
      <div className="lg:hidden mb-6">
        <Button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full bg-white/5 backdrop-blur-sm border border-amber-500/20 text-white hover:bg-amber-500/10"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </Button>
      </div>

      <aside className="hidden lg:block lg:w-80 shrink-0">
        <FilterContent />
      </aside>

      {isMobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full sm:w-96 bg-black/95 backdrop-blur-xl border-r border-amber-500/20 z-50 lg:hidden overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="sticky top-0 bg-black/90 backdrop-blur-xl border-b border-amber-500/20 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="p-6">
              <FilterContent />
            </div>
          </div>
        </>
      )}
    </>
  );
}
