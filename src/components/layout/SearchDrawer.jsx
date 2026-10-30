import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function SearchDrawer({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');
  const { formatPrice } = useCart();

  const filteredProducts = PRODUCTS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.family.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      Object.values(item.notes).flat().some((n) => n.toLowerCase().includes(q))
    );
  });

  const popularTags = ["Cambodian Oud", "Grasse Rose", "Sandalwood", "Madagascar Vanilla", "Neroli", "Extrait"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-[#1B1717]/95 backdrop-blur-2xl px-6 py-12 overflow-y-auto"
        >
          <div className="max-w-4xl mx-auto">

            {/* Header & Close */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2 text-[#D9C2A3] font-inter text-xs tracking-[0.3em] uppercase">
                <Sparkles className="w-4 h-4 text-[#B88A44]" />
                Olfactory Search Vault
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#F8F5F2]/70 hover:text-white transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Input Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7 text-[#B88A44]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search notes (Oud, Rose, Vanilla), fragrance names, or families..."
                className="w-full bg-[#3B2A2A]/40 border-b-2 border-[#B88A44] pl-14 pr-4 py-4 font-cormorant text-2xl text-white placeholder-[#D9C2A3]/50 focus:outline-none focus:border-[#F8F5F2] transition-colors"
                autoFocus
              />
            </div>

            {/* Popular Tags */}
            <div className="mb-10">
              <span className="font-inter text-xs text-[#D9C2A3]/70 uppercase tracking-widest block mb-3">
                Suggested Notes & Ingredients:
              </span>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="font-inter text-xs bg-[#3B2A2A]/60 hover:bg-[#B88A44] hover:text-black text-[#D9C2A3] px-3.5 py-1.5 rounded-full border border-[#B88A44]/30 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Grid */}
            <div>
              <h4 className="font-cormorant text-xl text-[#D9C2A3] font-semibold mb-4 border-b border-[#B88A44]/20 pb-2">
                {query ? `Search Results (${filteredProducts.length})` : 'Featured Fragrances'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(product);
                    }}
                    className="glass-card p-4 rounded-xl cursor-pointer hover:border-[#B88A44] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 text-[10px] bg-[#1B1717]/80 text-[#D9C2A3] px-2 py-0.5 rounded border border-[#B88A44]/40 font-inter">
                          {product.category}
                        </span>
                      </div>
                      <h5 className="font-cormorant text-xl font-semibold text-white group-hover:text-[#D9C2A3] transition-colors">
                        {product.name}
                      </h5>
                      <p className="font-inter text-xs text-[#D9C2A3] mb-2">
                        {product.family}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10">
                      <span className="font-cormorant text-lg font-semibold text-[#D9C2A3]">
                        {formatPrice(product.price)}
                      </span>
                      <span className="font-inter text-xs text-[#B88A44] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
