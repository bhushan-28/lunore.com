import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function MegaMenu({ onClose, onSelectProduct }) {
  const { formatPrice } = useCart();
  const featured = PRODUCTS.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 w-full glass-panel border-t border-b border-[#B88A44]/20 py-8 px-6 sm:px-12 shadow-2xl z-50 text-[#F8F5F2]"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Collections */}
        <div>
          <h4 className="font-cormorant text-xl font-semibold text-[#D9C2A3] tracking-wider mb-4 border-b border-[#B88A44]/20 pb-2">
            Les Collections
          </h4>
          <ul className="space-y-2.5 font-inter text-sm text-[#F8F5F2]/80">
            {["Extraits de Parfum", "Eaux de Parfum Privées", "Bespoke Reserve", "Bougies Haute Couture", "Coffrets de Découverte", "Atelier Exclusives"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#collection"
                  onClick={onClose}
                  className="hover:text-[#D9C2A3] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A44] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Olfactory Families */}
        <div>
          <h4 className="font-cormorant text-xl font-semibold text-[#D9C2A3] tracking-wider mb-4 border-b border-[#B88A44]/20 pb-2">
            Olfactory Families
          </h4>
          <ul className="space-y-2.5 font-inter text-sm text-[#F8F5F2]/80">
            {[
              "Royal Oud & Resins",
              "Smoky Tobacco & Cocoa",
              "Grasse Centifolia Rose",
              "Solar Neroli & Ylang",
              "Creamy Sandalwood",
              "Vintage Amber & Labdanum"
            ].map((family, idx) => (
              <li key={idx}>
                <a
                  href="#notes-lab"
                  onClick={onClose}
                  className="hover:text-[#D9C2A3] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A44] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {family}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 & 4: Featured Product Highlights */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-4 border-b border-[#B88A44]/20 pb-2">
            <h4 className="font-cormorant text-xl font-semibold text-[#D9C2A3] tracking-wider">
              Iconic Masterpieces
            </h4>
            <a
              href="#collection"
              onClick={onClose}
              className="font-inter text-xs text-[#B88A44] hover:text-[#D9C2A3] flex items-center gap-1 transition-colors"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {featured.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onClose();
                  onSelectProduct(item);
                }}
                className="group cursor-pointer bg-[#3B2A2A]/40 rounded-xl p-3 border border-[#B88A44]/20 hover:border-[#B88A44]/60 transition-all hover:scale-105"
              >
                <div className="relative h-28 rounded-lg overflow-hidden mb-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-1 right-1 text-[10px] bg-[#1B1717]/80 text-[#D9C2A3] px-1.5 py-0.5 rounded border border-[#B88A44]/40 font-inter">
                    {formatPrice(item.price)}
                  </span>
                </div>
                <h5 className="font-cormorant text-sm font-semibold text-white group-hover:text-[#D9C2A3] transition-colors truncate">
                  {item.name}
                </h5>
                <p className="font-inter text-[11px] text-[#D9C2A3]/70 truncate">
                  {item.family}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
