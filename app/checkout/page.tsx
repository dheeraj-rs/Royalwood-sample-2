"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Truck, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const cartItems = [
    {
      id: 1,
      name: "Luxury Velvet Sofa",
      price: 2499,
      quantity: 1,
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      id: 2,
      name: "Designer Armchair",
      price: 649,
      quantity: 2,
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-amber-900/10 via-black to-slate-900/20 pointer-events-none" />

      <Header onCartClick={() => {}} />

      <main className="relative pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Link
            href="/shop"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-amber-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </Link>

          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Checkout
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              Complete your order securely
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-500/10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <span className="text-amber-400 font-bold">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Email</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-500/10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-amber-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Shipping Address</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">First Name</label>
                        <Input
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">Last Name</label>
                        <Input
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Address</label>
                      <Input
                        type="text"
                        placeholder="123 Main Street"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">City</label>
                        <Input
                          type="text"
                          placeholder="New York"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                          className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">State</label>
                        <Input
                          type="text"
                          placeholder="NY"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          required
                          className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">ZIP Code</label>
                        <Input
                          type="text"
                          placeholder="10001"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          required
                          className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Phone</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-500/10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-amber-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Payment Information</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Card Number</label>
                      <Input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        required
                        maxLength={19}
                        className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300">Cardholder Name</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                        required
                        className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">Expiry Date</label>
                        <Input
                          type="text"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                          required
                          maxLength={5}
                          className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">CVV</label>
                        <Input
                          type="text"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          required
                          maxLength={4}
                          className="bg-white/5 backdrop-blur-sm border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-500 h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-500/10 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div
                        className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-sm truncate">{item.name}</h3>
                        <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-amber-400 font-bold text-sm">
                        ${(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-amber-500/20 pt-6 space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>${shipping}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-amber-500/20 pt-3 flex justify-between text-xl font-bold">
                    <span className="text-white">Total</span>
                    <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={(e) => {
                    const form = document.querySelector('form');
                    if (form) {
                      form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                    }
                  }}
                  size="lg"
                  className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold py-6 text-lg shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 hover:scale-105"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Complete Order
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
