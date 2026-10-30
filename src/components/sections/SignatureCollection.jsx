import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function SignatureCollection({ onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart, formatPrice } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <section id="collection" className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            Signature Fragrances
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Les Extraits Privés
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Each creation is an indelible olfactory statement, hand-blended in Grasse using 30%+ perfume oils.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3.5 mb-16 sm:mb-20">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-inter text-xs tracking-widest uppercase px-7 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#8C6226] text-black font-semibold border-[#B88A44] shadow-[0_0_25px_rgba(184,138,68,0.35)]'
                  : 'bg-[#3B2A2A]/30 text-[#F8F5F2]/70 border-[#B88A44]/20 hover:border-[#B88A44] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const isSaved = isInWishlist(product.id);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.5 }}
                  key={product.id}
                  className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-[#B88A44] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(184,138,68,0.22)]"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative h-84 rounded-xl overflow-hidden mb-5 bg-[#1B1717]">
                      {/* Primary Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-700 absolute inset-0"
                      />
                      {/* Secondary Hover Image */}
                      <img
                        src={product.secondaryImage || product.image}
                        alt={product.name}
                        className="w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 absolute inset-0"
                      />

                      {/* Badge */}
                      <span className="absolute top-3 left-3 text-[10px] font-inter uppercase font-semibold bg-[#1B1717]/85 text-[#D9C2A3] px-3 py-1 rounded-md border border-[#B88A44]/40 backdrop-blur-md">
                        {product.badge || product.category}
                      </span>

                      {/* Wishlist Heart Overlay */}
                      <button
                        onClick={() => toggleWishlist(product)}
                        className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md border transition-colors ${
                          isSaved
                            ? 'bg-red-500/20 border-red-500 text-red-400'
                            : 'bg-[#1B1717]/60 border-[#B88A44]/30 text-white hover:text-[#D9C2A3]'
                        }`}
                        title="Save to Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      </button>

                      {/* Quick Action Overlay Buttons */}
                      <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button
                          onClick={() => onQuickView(product)}
                          className="flex-1 py-3 bg-[#1B1717]/90 hover:bg-[#3B2A2A] text-white font-inter text-[11px] tracking-wider uppercase rounded-lg border border-[#B88A44]/40 backdrop-blur-md flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#B88A44]" /> Quick View
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-inter text-[10px] text-[#B88A44] uppercase tracking-widest font-semibold">
                          {product.family}
                        </span>
                        <div className="flex items-center text-[#B88A44] text-xs font-semibold">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-white group-hover:text-[#D9C2A3] transition-colors">
                        {product.name}
                      </h3>

                      <p className="font-inter text-xs text-[#F8F5F2]/65 line-clamp-2 pt-1 font-light leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Price & Add to Cart Footer */}
                  <div className="flex items-center justify-between pt-5 mt-5 border-t border-[#B88A44]/20">
                    <div>
                      <span className="font-cormorant text-2xl font-semibold text-[#D9C2A3]">
                        {formatPrice(product.price)}
                      </span>
                      <span className="font-inter text-[10px] text-white/50 block -mt-1">
                        100ml / 3.4 fl.oz.
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="px-5 py-3 bg-[#3B2A2A]/60 hover:bg-[#B88A44] text-[#D9C2A3] hover:text-black font-inter text-xs tracking-wider uppercase font-semibold rounded-lg border border-[#B88A44]/40 hover:border-[#B88A44] transition-all flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
