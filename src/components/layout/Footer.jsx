import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const [selectedBoutique, setSelectedBoutique] = useState(null);

  const boutiques = [
    {
      city: "Paris Flagship",
      address: "14 Place Vendôme, 75001 Paris, France",
      hours: "Mon-Sat: 10:00 - 19:30",
      phone: "+33 1 42 68 00 00"
    },
    {
      city: "Grasse Atelier",
      address: "28 Boulevard Fragonard, 06130 Grasse, France",
      hours: "Tue-Sat: 10:00 - 18:00",
      phone: "+33 4 93 36 00 12"
    },
    {
      city: "London Salon",
      address: "42 Bond Street, Mayfair, London W1S 2LY",
      hours: "Mon-Sat: 10:00 - 19:00",
      phone: "+44 20 7946 0912"
    },
    {
      city: "New York Fifth Ave",
      address: "712 Fifth Avenue, New York, NY 10019",
      hours: "Mon-Sat: 11:00 - 20:00",
      phone: "+1 212 555 0198"
    }
  ];

  return (
    <footer id="footer" className="bg-[#141111] text-[#F8F5F2] pt-28 pb-16 border-t border-[#B88A44]/30 relative z-10 px-6 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Top Branding & Stores Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-16 border-b border-[#B88A44]/20 text-center lg:text-left">
          
          <div>
            <span className="font-cormorant text-4xl sm:text-6xl tracking-[0.35em] font-light text-white uppercase block mb-1 whitespace-nowrap">
              LUNORÉ
            </span>
            <span className="font-inter text-xs tracking-[0.45em] text-[#D9C2A3] uppercase whitespace-nowrap">
              HAUTE PARFUMERIE • GRASSE &amp; PARIS
            </span>
          </div>

          {/* Boutique Quick Selector */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-3.5 font-inter text-xs">
            {boutiques.map((b) => (
              <button
                key={b.city}
                onClick={() => setSelectedBoutique(b)}
                className="px-5 py-2.5 bg-[#3B2A2A]/40 hover:bg-[#B88A44] hover:text-black text-[#D9C2A3] rounded-full border border-[#B88A44]/30 transition-all flex items-center gap-2 shadow-lg"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B88A44]" />
                {b.city}
              </button>
            ))}
          </div>

        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 font-inter text-xs text-[#F8F5F2]/75">

          {/* Col 1 */}
          <div className="space-y-4">
            <h4 className="font-cormorant text-2xl font-semibold text-[#D9C2A3] tracking-wider mb-2">
              Les Collections
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#collection" className="hover:text-[#D9C2A3] transition-colors">Extraits de Parfum (30%)</a></li>
              <li><a href="#collection" className="hover:text-[#D9C2A3] transition-colors">Eaux de Parfum Privées</a></li>
              <li><a href="#collection" className="hover:text-[#D9C2A3] transition-colors">Bougies Haute Couture</a></li>
              <li><a href="#limited" className="hover:text-[#D9C2A3] transition-colors">Limited Edition Vault</a></li>
              <li><a href="#collection" className="hover:text-[#D9C2A3] transition-colors">Coffrets de Découverte</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h4 className="font-cormorant text-2xl font-semibold text-[#D9C2A3] tracking-wider mb-2">
              The Maison
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#maison" className="hover:text-[#D9C2A3] transition-colors">138 Years of Heritage</a></li>
              <li><a href="#notes-lab" className="hover:text-[#D9C2A3] transition-colors">Grasse Centifolia Harvests</a></li>
              <li><a href="#lifestyle" className="hover:text-[#D9C2A3] transition-colors">Baccarat Glassworks Atelier</a></li>
              <li><a href="#lifestyle" className="hover:text-[#D9C2A3] transition-colors">Master Perfumer Gazette</a></li>
              <li><a href="#footer" className="hover:text-[#D9C2A3] transition-colors">Ethical & Cruelty-Free Charter</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="font-cormorant text-2xl font-semibold text-[#D9C2A3] tracking-wider mb-2">
              Private Services
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#collection" className="hover:text-[#D9C2A3] transition-colors">Custom Flacon Engraving</a></li>
              <li><a href="#notes-lab" className="hover:text-[#D9C2A3] transition-colors">Olfactory Consultations</a></li>
              <li><a href="#footer" className="hover:text-[#D9C2A3] transition-colors">Complimentary Silk Gift Wrapping</a></li>
              <li><a href="#footer" className="hover:text-[#D9C2A3] transition-colors">Global Express Courier</a></li>
              <li><a href="#footer" className="hover:text-[#D9C2A3] transition-colors">Returns & Guarantees</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h4 className="font-cormorant text-2xl font-semibold text-[#D9C2A3] tracking-wider mb-2">
              Global Headquarters
            </h4>
            <p className="leading-relaxed font-light">
              Maison LUNORÉ Paris<br />
              14 Place Vendôme, 75001 Paris, France
            </p>
            <div className="pt-2 space-y-2 text-[#D9C2A3]">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#B88A44]" /> +33 1 42 68 00 00</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#B88A44]" /> concierge@lunore-parfums.com</div>
            </div>
          </div>

        </div>

        {/* Bottom Social & Copyright */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 font-inter text-xs text-[#F8F5F2]/60">
          <div>
            © 2026 Maison LUNORÉ Haute Parfumerie. All Rights Reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D9C2A3] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D9C2A3] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#D9C2A3] transition-colors">Accessibility</a>
            <a href="#" className="hover:text-[#D9C2A3] transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>

      {/* Boutique Detail Modal */}
      <AnimatePresence>
        {selectedBoutique && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBoutique(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md glass-card rounded-2xl p-8 border border-[#B88A44]/50 z-10 text-[#F8F5F2] shadow-2xl"
            >
              <button
                onClick={() => setSelectedBoutique(null)}
                className="absolute top-4 right-4 p-2 text-[#F8F5F2]/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#B88A44] mb-2 font-inter text-xs uppercase tracking-widest font-semibold">
                <MapPin className="w-4 h-4" /> Global Boutique
              </div>

              <h3 className="font-cormorant text-3xl font-semibold text-white mb-4">
                {selectedBoutique.city}
              </h3>

              <div className="space-y-3 font-inter text-xs text-[#F8F5F2]/80 bg-[#1B1717] p-5 rounded-xl border border-[#B88A44]/20 space-y-3">
                <div>
                  <span className="text-[#D9C2A3] block font-semibold mb-0.5">Address:</span>
                  {selectedBoutique.address}
                </div>
                <div>
                  <span className="text-[#D9C2A3] block font-semibold mb-0.5">Salon Hours:</span>
                  {selectedBoutique.hours}
                </div>
                <div>
                  <span className="text-[#D9C2A3] block font-semibold mb-0.5">Direct Private Line:</span>
                  {selectedBoutique.phone}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
