"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Cart } from "@/components/cart";
import { Award, Users, Sparkles, Heart, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-amber-900/10 via-black to-slate-900/20 pointer-events-none" />

      <Header onCartClick={() => setIsCartOpen(true)} />

      <main className="relative pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-500/20">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Crafting Dreams
              </span>
              <br />
              <span className="text-white mt-2">Since 1995</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              For nearly three decades, Royalwood has been at the forefront of luxury furniture design, creating pieces that transform houses into homes and spaces into sanctuaries.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden mb-16 aspect-video">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                filter: "brightness(0.6)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Award,
                title: "Award Winning",
                description: "Over 50 international design awards recognizing our commitment to excellence and innovation.",
              },
              {
                icon: Users,
                title: "Expert Craftsmen",
                description: "A team of 200+ skilled artisans bringing generations of woodworking expertise.",
              },
              {
                icon: Heart,
                title: "Customer First",
                description: "10,000+ satisfied customers who trust us to furnish their most important spaces.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                At Royalwood, we believe that furniture is more than just functional objects. Each piece we create is a work of art, carefully designed to enhance your living experience and reflect your personal style.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our mission is to craft timeless furniture that combines traditional craftsmanship with contemporary design, using only the finest materials sourced from sustainable suppliers around the world.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { number: "28+", label: "Years Experience" },
                  { number: "500+", label: "Products" },
                  { number: "10K+", label: "Happy Customers" },
                  { number: "50+", label: "Awards Won" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-amber-500/10"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800')",
                    filter: "brightness(0.7)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 via-black/50 to-amber-800/20 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-amber-500/20 mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Quality First",
                  description: "We never compromise on quality, ensuring every piece meets our rigorous standards.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Constantly pushing boundaries to create furniture that's both beautiful and functional.",
                },
                {
                  icon: Heart,
                  title: "Sustainability",
                  description: "Committed to eco-friendly practices and responsible sourcing of materials.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex w-20 h-20 rounded-full bg-amber-500/20 border border-amber-500/30 items-center justify-center">
                    <value.icon className="w-10 h-10 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400",
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${image}')`,
                    filter: "brightness(0.7)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

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
    </div>
  );
}
