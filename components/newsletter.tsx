"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-amber-900/20 via-black/50 to-amber-800/20 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-amber-500/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 mb-4">
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-amber-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Join Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Community</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
              Subscribe to receive exclusive offers, design tips, and early access to new collections
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12 md:h-14 px-6 rounded-full"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 h-12 md:h-14 rounded-full shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </form>

            <p className="text-xs md:text-sm text-gray-500 pt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
