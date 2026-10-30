import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, ShoppingBag, X } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import confetti from 'canvas-confetti';

export default function LimitedEdition() {
  const product = PRODUCTS.find((p) => p.id === 'l-or-absolu') || PRODUCTS[0];
  const { addToCart, formatPrice } = useCart();

  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 15
  });

  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [selectedSerial, setSelectedSerial] = useState('042');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleReserve = () => {
    addToCart(product, 1, `Bottle #${selectedSerial}/500`);
    confetti({
      particleCount: 150,
      spread: 90,
      colors: ['#D9C2A3', '#B88A44', '#FFFFFF']
    });
    setIsReserveModalOpen(false);
  };

  return (
    <section id="limited" className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/15">
      <div className="max-w-7xl mx-auto">

        <div className="glass-card-gold p-10 sm:p-20 rounded-3xl border border-[#B88A44]/50 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center shadow-2xl">

          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B88A44]/20 rounded-full blur-[160px] pointer-events-none" />

          {/* Left Column: Limited Bottle Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-96 sm:h-[480px] rounded-2xl overflow-hidden border border-[#B88A44]/40 shadow-2xl group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 font-inter text-xs bg-[#B88A44] text-black font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                Only 500 Bottles Globally
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#1B1717]/90 backdrop-blur-md p-4 rounded-xl border border-[#B88A44]/40 text-center">
                <span className="font-cormorant text-base sm:text-lg text-[#D9C2A3] tracking-widest font-semibold uppercase">
                  Batch 001 • Serial Etched: #{selectedSerial}/500
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Timer & Reservation */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
              <Sparkles className="w-4 h-4 text-[#B88A44]" />
              Haute Reserve Vault
            </div>

            <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
              {product.name} <span className="italic font-normal gold-gradient-text">— Batch 001</span>
            </h2>

            <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/80 leading-relaxed font-light">
              Distilled with vintage Cambodian agarwood, wild Saffron, and 3-year underground aged Florentine Iris concrete. Encased in hand-hammered Baccarat crystal with 24k gold leaf monograms.
            </p>

            {/* Countdown Ticking Timer */}
            <div className="pt-2">
              <span className="font-inter text-xs text-[#D9C2A3] uppercase tracking-widest block mb-4 font-semibold">
                Vault Reservation Closing In:
              </span>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0 text-center font-inter">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hours', val: timeLeft.hours },
                  { label: 'Mins', val: timeLeft.minutes },
                  { label: 'Secs', val: timeLeft.seconds }
                ].map((item) => (
                  <div key={item.label} className="bg-[#1B1717] p-4 rounded-xl border border-[#B88A44]/30 shadow-lg">
                    <div className="font-cormorant text-3xl sm:text-4xl font-bold text-[#D9C2A3]">
                      {String(item.val).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] text-[#F8F5F2]/60 uppercase tracking-widest mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Reserve CTA */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div>
                <div className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#D9C2A3]">
                  {formatPrice(product.price)} <span className="text-sm font-normal text-white/50 line-through">{formatPrice(product.originalPrice)}</span>
                </div>
                <span className="font-inter text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-4 h-4" /> Includes Certificate of Authenticity
                </span>
              </div>

              <button
                onClick={() => setIsReserveModalOpen(true)}
                className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#8C6226] text-black font-inter text-xs tracking-[0.25em] font-semibold uppercase rounded-full shadow-[0_10px_35px_rgba(184,138,68,0.35)] hover:scale-105 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Reserve Bottle #{selectedSerial}
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Serial Number Selection Modal */}
      <AnimatePresence>
        {isReserveModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReserveModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md glass-card rounded-2xl p-8 border border-[#B88A44]/50 z-10 text-[#F8F5F2] shadow-2xl"
            >
              <button
                onClick={() => setIsReserveModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#F8F5F2]/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-white mb-2">
                Select Your Vault Serial Number
              </h3>
              <p className="font-inter text-xs text-[#D9C2A3] mb-6">
                Choose an individual bottle serial number etched into the 24k gold flacon:
              </p>

              <div className="grid grid-cols-4 gap-3 mb-6 max-h-52 overflow-y-auto pr-1">
                {["001", "007", "042", "088", "100", "222", "333", "450", "488", "500"].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedSerial(num)}
                    className={`py-2.5 rounded-lg font-inter text-xs border transition-all ${
                      selectedSerial === num
                        ? 'bg-[#B88A44] text-black font-bold border-[#D9C2A3]'
                        : 'bg-[#3B2A2A]/40 text-[#D9C2A3] border-[#B88A44]/20 hover:border-[#B88A44]'
                    }`}
                  >
                    #{num}
                  </button>
                ))}
              </div>

              <button
                onClick={handleReserve}
                className="w-full py-4 bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#8C6226] text-black font-inter text-xs tracking-widest font-semibold uppercase rounded-full shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                Confirm & Add Serial #{selectedSerial} to Casket
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
