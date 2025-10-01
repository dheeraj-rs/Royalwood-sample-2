"use client";

import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  shop: ["Living Room", "Bedroom", "Dining", "Office", "Outdoor", "Lighting"],
  company: ["About Us", "Careers", "Press", "Blog", "Partnerships"],
  support: ["Contact", "FAQs", "Shipping", "Returns", "Warranty", "Care Guide"],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="relative border-t border-amber-500/20 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/50">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                Royalwood
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Crafting luxury furniture since 1995. We bring elegance, comfort, and timeless design to your living spaces.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">123 Design Street, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span className="text-sm">hello@royalwood.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-amber-400" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-lg mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-amber-500/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Royalwood. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
