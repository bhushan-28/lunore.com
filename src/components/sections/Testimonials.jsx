import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { PRESS_QUOTES, TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Press Quotes Marquee / Grid */}
        <div className="mb-28">
          <div className="text-center font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3] mb-12 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            Acclaimed by International Press
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRESS_QUOTES.map((press, idx) => (
              <div
                key={idx}
                className="glass-card p-7 rounded-2xl border border-[#B88A44]/20 hover:border-[#B88A44]/60 transition-all text-center flex flex-col justify-between shadow-lg"
              >
                <div className="font-cormorant text-2xl font-bold tracking-[0.2em] text-[#D9C2A3] mb-4">
                  {press.publication}
                </div>
                <p className="font-cormorant text-base italic text-[#F8F5F2]/90 leading-snug mb-5">
                  "{press.quote}"
                </p>
                <span className="font-inter text-[10px] text-[#B88A44] uppercase tracking-wider block font-semibold">
                  {press.issue}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Client Accolades & Reviews
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Reflections from our private clientele across London, Paris, Milan, and Geneva.
          </p>
        </div>

        {/* Interactive Client Review Carousel */}
        <div className="max-w-4xl mx-auto relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card-gold p-10 sm:p-16 rounded-3xl border border-[#B88A44]/40 relative text-center shadow-2xl"
            >
              <Quote className="w-14 h-14 text-[#B88A44]/30 mx-auto mb-6" />

              {/* Star Rating */}
              <div className="flex justify-center text-[#B88A44] mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <h3 className="font-cormorant text-2xl sm:text-4xl font-semibold text-white mb-4">
                "{current.title}"
              </h3>

              <p className="font-cormorant text-xl sm:text-3xl italic text-[#F8F5F2] font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                "{current.content}"
              </p>

              {/* Avatar & Author Info */}
              <div className="flex items-center justify-center gap-5">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#B88A44] shadow-lg"
                />
                <div className="text-left font-inter">
                  <div className="font-cormorant text-xl font-bold text-white flex items-center gap-2">
                    {current.name}
                    <CheckCircle2 className="w-4 h-4 text-[#B88A44]" />
                  </div>
                  <div className="text-xs text-[#D9C2A3]">{current.role} • {current.location}</div>
                  <div className="text-[10px] text-[#F8F5F2]/50 mt-1">Acquired: {current.purchasedProduct}</div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrow Controls */}
          <div className="flex justify-center items-center gap-5 mt-10">
            <button
              onClick={prevTestimonial}
              className="p-3.5 rounded-full glass-card border border-[#B88A44]/40 text-[#D9C2A3] hover:bg-[#B88A44] hover:text-black transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-inter text-xs text-[#D9C2A3] font-semibold">
              0{activeTestimonial + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-3.5 rounded-full glass-card border border-[#B88A44]/40 text-[#D9C2A3] hover:bg-[#B88A44] hover:text-black transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
