import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, Gift, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import confetti from 'canvas-confetti';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingCost,
    grandTotal,
    freeShippingThreshold,
    selectedSample,
    setSelectedSample,
    formatPrice
  } = useCart();

  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  const handleCheckout = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D9C2A3', '#B88A44', '#FFFFFF']
    });
    alert("Thank you for experiencing Maison LUNORÉ. Your order has been placed into our Grasse Atelier queue for hand packaging!");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[9995] bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[480px] z-[9996] glass-panel border-l border-[#B88A44]/30 flex flex-col justify-between text-[#F8F5F2] shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#B88A44]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#3B2A2A] border border-[#B88A44]/40 flex items-center justify-center text-[#D9C2A3]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-white tracking-wide">
                    Your Luxury Casket
                  </h3>
                  <p className="font-inter text-xs text-[#D9C2A3]">
                    {cart.length} item{cart.length !== 1 ? 's' : ''} reserved
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#F8F5F2]/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free Shipping Progress */}
            <div className="bg-[#3B2A2A]/40 px-6 py-3 border-b border-[#B88A44]/15">
              <div className="flex justify-between text-xs font-inter mb-1.5">
                <span className="text-[#D9C2A3]">
                  {remainingForFreeShipping > 0
                    ? `Add $${remainingForFreeShipping} for complimentary express delivery`
                    : '🎉 You have unlocked complimentary express delivery!'}
                </span>
                <span className="text-white font-semibold">{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#1B1717] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#E5C384] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto mb-4 border border-[#B88A44]/30 rounded-full flex items-center justify-center text-[#D9C2A3]/50">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-cormorant text-xl text-white mb-2">Your casket is currently empty</h4>
                  <p className="font-inter text-xs text-[#F8F5F2]/60 max-w-xs mx-auto mb-6">
                    Explore our haute-parfumerie creations crafted in Grasse & Paris.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="font-inter text-xs tracking-widest uppercase bg-[#B88A44] hover:bg-[#D9C2A3] text-black px-6 py-2.5 rounded-full font-semibold transition-colors"
                  >
                    Discover Fragrances
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="flex gap-4 bg-[#3B2A2A]/30 p-3.5 rounded-xl border border-[#B88A44]/20 relative group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-lg border border-[#B88A44]/20"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-cormorant text-lg font-semibold text-white">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id, item.engraving)}
                            className="text-[#F8F5F2]/40 hover:text-red-400 transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-inter text-xs text-[#D9C2A3] mb-1">
                          {item.subtitle}
                        </p>
                        {item.engraving && (
                          <span className="inline-flex items-center gap-1 font-inter text-[10px] bg-[#B88A44]/20 text-[#D9C2A3] px-2 py-0.5 rounded border border-[#B88A44]/40">
                            <Sparkles className="w-2.5 h-2.5" /> Engraved: "{item.engraving}"
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[#B88A44]/30 rounded-lg overflow-hidden bg-[#1B1717]">
                          <button
                            onClick={() => updateQuantity(item.id, item.engraving, -1)}
                            className="px-2 py-1 text-[#D9C2A3] hover:bg-[#3B2A2A]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 font-inter text-xs font-semibold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.engraving, 1)}
                            className="px-2 py-1 text-[#D9C2A3] hover:bg-[#3B2A2A]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-cormorant text-lg font-semibold text-[#D9C2A3]">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Complimentary Sample Selection */}
              {cart.length > 0 && (
                <div className="glass-card-gold p-4 rounded-xl border border-[#B88A44]/30 mt-4">
                  <div className="flex items-center gap-2 mb-2 text-[#D9C2A3]">
                    <Gift className="w-4 h-4" />
                    <span className="font-cormorant text-sm font-semibold uppercase tracking-wider">
                      Complimentary Sample
                    </span>
                  </div>
                  <p className="font-inter text-[11px] text-[#F8F5F2]/70 mb-3">
                    Select a 2ml Extrait sample included with your order:
                  </p>
                  <div className="space-y-1.5 font-inter text-xs">
                    {[
                      "L'Or Absolu 2ml (Oud & Saffron)",
                      "Santal Céleste 2ml (Creamy Sandalwood)",
                      "Rose Impériale 2ml (Grasse Centifolia Rose)"
                    ].map((sample) => (
                      <label key={sample} className="flex items-center gap-2 cursor-pointer text-[#F8F5F2]/80 hover:text-white">
                        <input
                          type="radio"
                          name="sample"
                          checked={selectedSample === sample}
                          onChange={() => setSelectedSample(sample)}
                          className="accent-[#B88A44]"
                        />
                        <span>{sample}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#B88A44]/20 bg-[#1B1717] space-y-4">
                <div className="space-y-1.5 font-inter text-xs text-[#F8F5F2]/80">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courier Delivery</span>
                    <span>{shippingCost === 0 ? <span className="text-emerald-400">FREE</span> : formatPrice(shippingCost)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10 font-cormorant text-xl text-[#D9C2A3] font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#8C6226] text-black font-inter text-xs tracking-[0.2em] font-semibold uppercase rounded-full shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] font-inter text-[#D9C2A3]/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>256-bit Encrypted Checkout • Complimentary Luxury Box & Ribbon</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
