import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist } = useWishlist();
  const { addToCart, formatPrice } = useCart();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            className="fixed inset-0 z-[9995] bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] z-[9996] glass-panel border-l border-[#B88A44]/30 flex flex-col justify-between text-[#F8F5F2] shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#B88A44]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#3B2A2A] border border-[#B88A44]/40 flex items-center justify-center text-[#D9C2A3]">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-white tracking-wide">
                    Saved Treasures
                  </h3>
                  <p className="font-inter text-xs text-[#D9C2A3]">
                    {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in wishlist
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 text-[#F8F5F2]/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {wishlist.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto mb-4 border border-[#B88A44]/30 rounded-full flex items-center justify-center text-[#D9C2A3]/40">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h4 className="font-cormorant text-xl text-white mb-2">No saved creations yet</h4>
                  <p className="font-inter text-xs text-[#F8F5F2]/60 max-w-xs mx-auto">
                    Click the heart icon on any fragrance card to preserve it in your personal boutique collection.
                  </p>
                </div>
              ) : (
                wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-[#3B2A2A]/30 p-3.5 rounded-xl border border-[#B88A44]/20 items-center justify-between"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover rounded-lg border border-[#B88A44]/20"
                    />
                    <div className="flex-1">
                      <h4 className="font-cormorant text-lg font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="font-inter text-xs text-[#D9C2A3] mb-1">
                        {item.family}
                      </p>
                      <span className="font-cormorant text-base font-semibold text-[#D9C2A3]">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          addToCart(item);
                          toggleWishlist(item);
                        }}
                        className="p-2 bg-[#B88A44] hover:bg-[#D9C2A3] text-black rounded-lg transition-colors flex items-center justify-center"
                        title="Add to Casket"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleWishlist(item)}
                        className="p-2 text-red-400/70 hover:text-red-400 transition-colors flex items-center justify-center"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
