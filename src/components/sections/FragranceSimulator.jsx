import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Sun, Moon } from 'lucide-react';

export default function FragranceSimulator() {
  const [hours, setHours] = useState(4);
  const [environment, setEnvironment] = useState('night');

  const getStageInfo = (h) => {
    if (h <= 1) {
      return {
        stage: "The Opening Sparkle",
        activeNotes: "Sicilian Bergamot, Golden Saffron & Pink Peppercorn",
        sillage: "Radiant & Luminous (3 meters)",
        feeling: "Crisp, effervescent, and captivating first impression.",
        intensity: 95
      };
    } else if (h <= 6) {
      return {
        stage: "The Heart Blooming",
        activeNotes: "Florentine Iris Concrete, Damask Rose & Midnight Jasmine",
        sillage: "Velvety & Enveloping (1.5 meters)",
        feeling: "Warm floral sophistication harmonized with skin chemistry.",
        intensity: 80
      };
    } else if (h <= 14) {
      return {
        stage: "The Resinous Base Drydown",
        activeNotes: "Royal Cambodian Oud, Bourbon Vanilla & Ambergris",
        sillage: "Intimate Cashmere Veil (Personal aura)",
        feeling: "Deep, sensual, hypnotic trail that lingers on skin and silk.",
        intensity: 65
      };
    } else {
      return {
        stage: "The Enduring Memory",
        activeNotes: "Fossilized Amber Tears & Mysore Sandalwood",
        sillage: "Subtle Whisper",
        feeling: "Subtle golden warmth that remains on scarves for days.",
        intensity: 45
      };
    }
  };

  const currentStage = getStageInfo(hours);

  return (
    <section className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/15">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            Bespoke Scent Journey
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Skin Chemistry & Time Transformation
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Slide through time to witness how LUNORÉ's high-concentration extraits evolve on your skin over 24 hours.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="glass-card-gold p-10 sm:p-16 rounded-3xl border border-[#B88A44]/40 max-w-4xl mx-auto shadow-2xl">

          {/* Top Controls: Day / Night Ambient Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 border-b border-[#B88A44]/20 pb-6">
            <div className="flex items-center gap-2.5 font-cormorant text-2xl text-[#D9C2A3] font-semibold">
              <Clock className="w-6 h-6 text-[#B88A44]" />
              Time Elapsed: <span className="text-white">{hours} Hours</span>
            </div>

            <div className="flex bg-[#1B1717] p-1.5 rounded-full border border-[#B88A44]/30">
              <button
                onClick={() => setEnvironment('day')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-inter transition-all ${
                  environment === 'day' ? 'bg-[#B88A44] text-black font-semibold' : 'text-[#D9C2A3]'
                }`}
              >
                <Sun className="w-4 h-4" /> Day Warmth
              </button>
              <button
                onClick={() => setEnvironment('night')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-inter transition-all ${
                  environment === 'night' ? 'bg-[#B88A44] text-black font-semibold' : 'text-[#D9C2A3]'
                }`}
              >
                <Moon className="w-4 h-4" /> Nocturne Evening
              </button>
            </div>
          </div>

          {/* Timeline Range Slider */}
          <div className="mb-12 space-y-4">
            <input
              type="range"
              min="0"
              max="24"
              step="1"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-3 bg-[#1B1717] rounded-lg appearance-none cursor-pointer accent-[#B88A44]"
            />
            <div className="flex justify-between font-inter text-[11px] text-[#D9C2A3]/60 uppercase tracking-widest">
              <span>0h (Application)</span>
              <span>4h (Heart Bloom)</span>
              <span>12h (Resinous Base)</span>
              <span>24h (Enduring Aura)</span>
            </div>
          </div>

          {/* Live Dynamic Output Display */}
          <motion.div
            key={hours + environment}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="bg-[#1B1717]/80 p-7 rounded-2xl border border-[#B88A44]/30 space-y-4">
              <div className="inline-block px-3.5 py-1 bg-[#B88A44]/20 border border-[#B88A44]/40 rounded-full font-inter text-xs text-[#D9C2A3] uppercase font-semibold">
                {currentStage.stage}
              </div>
              <h4 className="font-cormorant text-2xl sm:text-3xl font-semibold text-white">
                {currentStage.activeNotes}
              </h4>
              <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/80 leading-relaxed font-light">
                {currentStage.feeling}
              </p>
            </div>

            <div className="space-y-5 font-inter text-xs">
              <div className="bg-[#1B1717]/80 p-5 rounded-xl border border-[#B88A44]/20">
                <span className="text-[#D9C2A3] uppercase tracking-wider block mb-1 font-semibold">
                  Sillage & Projection Radius:
                </span>
                <span className="text-white font-semibold text-sm">{currentStage.sillage}</span>
              </div>

              <div>
                <div className="flex justify-between text-[#D9C2A3] mb-2 font-semibold">
                  <span>Fragrance Intensity Gauge</span>
                  <span>{currentStage.intensity}%</span>
                </div>
                <div className="w-full h-2.5 bg-[#1B1717] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#E5C384] transition-all duration-300"
                    style={{ width: `${currentStage.intensity}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
