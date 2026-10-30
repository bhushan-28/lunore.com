import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin } from 'lucide-react';
import { FRAGRANCE_NOTES } from '../../data/notes';

export default function FragranceNotesLab({ onSelectPerfumeName }) {
  const [activeTier, setActiveTier] = useState('top');

  const tierInfo = {
    top: {
      title: "Top Notes (Les Notes de Tête)",
      subtitle: "The Initial Sparkle • First 15–30 Minutes",
      description: "Luminous, volatile citrus, pepper, and fresh blossoms that greet your senses upon first application."
    },
    heart: {
      title: "Heart Notes (Les Notes de Cœur)",
      subtitle: "The Olfactory Core • 2 to 6 Hours",
      description: "The velvety floral, spicy, and gourmand soul of the fragrance that unfolds as top notes gently soften."
    },
    base: {
      title: "Base Notes (Les Notes de Fond)",
      subtitle: "The Enduring Aura • 8 to 24+ Hours",
      description: "Deep resinous woods, ambergris, aged oud, and sweet vanilla that anchor the fragrance on your skin."
    }
  };

  const currentNotes = (FRAGRANCE_NOTES && (FRAGRANCE_NOTES[activeTier] || FRAGRANCE_NOTES["Top Notes"])) || [];

  return (
    <section id="notes-lab" className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/15">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            Interactive Fragrance Lab
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Olfactory Pyramid Architecture
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Explore the rare botanical harvests and precious extractions that compose LUNORÉ's scent signatures.
          </p>
        </div>

        {/* Olfactory Tier Switcher */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-14 max-w-3xl mx-auto">
          {[
            { key: 'top', label: '1. Top Notes', sub: 'Volatile & Fresh' },
            { key: 'heart', label: '2. Heart Notes', sub: 'The Velvet Core' },
            { key: 'base', label: '3. Base Notes', sub: 'Enduring Resins & Oud' },
          ].map((tier) => (
            <button
              key={tier.key}
              onClick={() => setActiveTier(tier.key)}
              className={`w-full sm:w-1/3 p-5 rounded-2xl border transition-all text-center ${
                activeTier === tier.key
                  ? 'glass-card-gold border-[#B88A44] shadow-[0_10px_35px_rgba(184,138,68,0.3)]'
                  : 'glass-card border-[#B88A44]/20 hover:border-[#B88A44]/60'
              }`}
            >
              <div className={`font-cormorant text-xl font-semibold ${activeTier === tier.key ? 'text-[#D9C2A3]' : 'text-white'}`}>
                {tier.label}
              </div>
              <div className="font-inter text-[11px] text-[#F8F5F2]/60 mt-1">
                {tier.sub}
              </div>
            </button>
          ))}
        </div>

        {/* Active Tier Info Box */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl mb-16 border border-[#B88A44]/30 max-w-4xl mx-auto text-center shadow-xl">
          <h3 className="font-cormorant text-2xl sm:text-4xl font-semibold text-[#D9C2A3] mb-2">
            {tierInfo[activeTier].title}
          </h3>
          <span className="font-inter text-xs text-[#B88A44] uppercase tracking-widest block font-semibold mb-4">
            {tierInfo[activeTier].subtitle}
          </span>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/80 font-light max-w-xl mx-auto leading-relaxed">
            {tierInfo[activeTier].description}
          </p>
        </div>

        {/* Note Ingredient Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {currentNotes.map((note, idx) => (
              <motion.div
                key={note.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-[#B88A44]/25 hover:border-[#B88A44] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 rounded-xl overflow-hidden mb-5 border border-[#B88A44]/20">
                    <img
                      src={note.image}
                      alt={note.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#1B1717]/85 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-inter text-[#D9C2A3] border border-[#B88A44]/40 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#B88A44]" />
                      {note.origin}
                    </div>
                  </div>

                  <h4 className="font-cormorant text-2xl font-semibold text-white group-hover:text-[#D9C2A3] transition-colors mb-2">
                    {note.name}
                  </h4>

                  <p className="font-inter text-xs text-[#F8F5F2]/70 leading-relaxed font-light mb-5">
                    {note.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B88A44]/20">
                  <span className="font-inter text-[10px] text-[#B88A44] uppercase tracking-wider font-semibold block mb-2">
                    Infused in creations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(note.matchedPerfumes || ["L'Or Absolu"]).map((perfumeName) => (
                      <span
                        key={perfumeName}
                        onClick={() => onSelectPerfumeName && onSelectPerfumeName(perfumeName)}
                        className="font-inter text-[11px] bg-[#3B2A2A]/60 text-[#D9C2A3] px-3 py-1 rounded-full border border-[#B88A44]/30 hover:border-[#B88A44] cursor-pointer transition-colors"
                      >
                        {perfumeName}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
