import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Star, Sparkles, Check, Clock, ShieldCheck, Flame } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function QuickViewModal({ product, onClose }) {
  const [engravingText, setEngravingText] = useState('');
  const [activeTab, setActiveTab] = useState('notes'); // notes | details | engraving
  const [quantity, setQuantity] = useState(1);

  const { addToCart, formatPrice } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const isSaved = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, engravingText);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-card rounded-2xl border border-[#B88A44]/40 p-6 sm:p-8 overflow-hidden z-10 text-[#F8F5F2] my-8 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-[#F8F5F2]/60 hover:text-white bg-[#1B1717]/60 rounded-full border border-[#B88A44]/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Left Image & Badge */}
            <div className="relative rounded-xl overflow-hidden group border border-[#B88A44]/30 h-[360px] sm:h-[440px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717]/80 via-transparent to-transparent pointer-events-none" />

              {/* Badge */}
              <span className="absolute top-4 left-4 font-inter text-xs bg-[#B88A44] text-black font-semibold px-3 py-1 rounded-full shadow-lg">
                {product.badge || product.category}
              </span>

              {/* Engraving Live Overlay on Bottle */}
              {engravingText && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#1B1717]/90 border border-[#D9C2A3] px-4 py-1.5 rounded text-center backdrop-blur-md shadow-2xl">
                  <span className="font-cormorant text-xs tracking-[0.2em] text-[#D9C2A3] uppercase">
                    Engraved: "{engravingText}"
                  </span>
                </div>
              )}
            </div>

            {/* Right Details */}
            <div className="flex flex-col justify-between space-y-5">

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#B88A44]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-inter text-xs text-[#D9C2A3]">
                    {product.rating} ({product.reviewsCount} reviews)
                  </span>
                </div>

                <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-white tracking-wide mb-1">
                  {product.name}
                </h2>

                <p className="font-inter text-xs text-[#D9C2A3] uppercase tracking-widest mb-3">
                  {product.subtitle}
                </p>

                <div className="font-cormorant text-2xl font-semibold text-[#D9C2A3] mb-4">
                  {formatPrice(product.price)} <span className="font-inter text-xs text-white/50 font-normal">/ {product.volume}</span>
                </div>

                <p className="font-inter text-xs text-[#F8F5F2]/80 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Tabs: Notes vs Specs vs Custom Engraving */}
              <div className="border-b border-[#B88A44]/20 flex gap-6 font-inter text-xs tracking-wider uppercase mb-4">
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`pb-2 border-b-2 transition-colors ${
                    activeTab === 'notes'
                      ? 'border-[#B88A44] text-[#D9C2A3] font-semibold'
                      : 'border-transparent text-[#F8F5F2]/50 hover:text-white'
                  }`}
                >
                  Olfactory Notes
                </button>
                <button
                  onClick={() => setActiveTab('engraving')}
                  className={`pb-2 border-b-2 transition-colors flex items-center gap-1 ${
                    activeTab === 'engraving'
                      ? 'border-[#B88A44] text-[#D9C2A3] font-semibold'
                      : 'border-transparent text-[#F8F5F2]/50 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" /> Custom Engraving
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'notes' ? (
                <div className="space-y-3 font-inter text-xs bg-[#3B2A2A]/40 p-4 rounded-xl border border-[#B88A44]/20">
                  <div>
                    <span className="text-[#D9C2A3] font-semibold uppercase tracking-wider block mb-1">
                      Top Notes:
                    </span>
                    <span className="text-[#F8F5F2]/90">{product.notes.top.join(' • ')}</span>
                  </div>
                  <div>
                    <span className="text-[#D9C2A3] font-semibold uppercase tracking-wider block mb-1">
                      Heart Notes:
                    </span>
                    <span className="text-[#F8F5F2]/90">{product.notes.heart.join(' • ')}</span>
                  </div>
                  <div>
                    <span className="text-[#D9C2A3] font-semibold uppercase tracking-wider block mb-1">
                      Base Notes:
                    </span>
                    <span className="text-[#F8F5F2]/90">{product.notes.base.join(' • ')}</span>
                  </div>
                </div>
              ) : (
                <div className="bg-[#3B2A2A]/40 p-4 rounded-xl border border-[#B88A44]/20 space-y-3 font-inter text-xs">
                  <label className="block text-[#D9C2A3] font-semibold uppercase tracking-wider mb-1">
                    Personalized Calligraphy Engraving (Complimentary)
                  </label>
                  <input
                    type="text"
                    maxLength={18}
                    value={engravingText}
                    onChange={(e) => setEngravingText(e.target.value)}
                    placeholder="e.g. ELEANOR • 1888"
                    className="w-full bg-[#1B1717] border border-[#B88A44]/40 rounded-lg px-3 py-2 text-white font-cormorant text-base focus:outline-none focus:border-[#B88A44]"
                  />
                  <p className="text-[11px] text-[#F8F5F2]/60">
                    Hand-carved directly onto the Baccarat crystal flacon by our Paris goldsmiths.
                  </p>
                </div>
              )}

              {/* Longevity & Sillage Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs font-inter text-[#D9C2A3]">
                <div className="flex items-center gap-2 bg-[#1B1717]/60 p-2.5 rounded-lg border border-[#B88A44]/20">
                  <Clock className="w-4 h-4 text-[#B88A44]" />
                  <div>
                    <div className="text-[10px] text-white/50 uppercase">Longevity</div>
                    <div className="font-semibold text-white">{product.longevity}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#1B1717]/60 p-2.5 rounded-lg border border-[#B88A44]/20">
                  <Flame className="w-4 h-4 text-[#B88A44]" />
                  <div>
                    <div className="text-[10px] text-white/50 uppercase">Sillage</div>
                    <div className="font-semibold text-white">{product.sillage}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#8C6226] text-black font-inter text-xs tracking-[0.2em] font-semibold uppercase rounded-full shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Casket — {formatPrice(product.price)}
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 rounded-full border border-[#B88A44]/40 transition-colors ${
                    isSaved ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-[#3B2A2A]/40 text-[#D9C2A3] hover:border-[#B88A44]'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
