import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import CanvasContainer from '../3d/CanvasContainer';
import SmokeCanvas from '../3d/SmokeCanvas';

export default function Hero({ onExplore }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#1B1717] pt-32 sm:pt-40 pb-24 sm:pb-32">

      {/* Background Cinematic Video (main.mp4) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 filter brightness-100 contrast-110 scale-105"
        >
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>
        {/* Dark Luxury Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1717] via-[#1B1717]/50 to-[#1B1717]/60" />
      </div>

      {/* Background Animated Smoke */}
      <SmokeCanvas />

      {/* Luxury Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#B88A44]/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#3B2A2A]/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Layout: Left Typography, Right 3D Interactive Bottle Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">

        {/* Left Content (Cols 1-7) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#B88A44]/40 bg-[#3B2A2A]/40 backdrop-blur-md text-[#D9C2A3] font-inter text-xs tracking-[0.35em] uppercase shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            Haute Parfumerie • Grasse & Paris
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="font-cormorant text-5xl sm:text-7xl xl:text-8xl font-light text-white leading-[1.06] tracking-wide"
          >
            Where Soul <br />
            <span className="italic font-normal gold-gradient-text">Meets Another Soul</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="font-inter text-sm sm:text-base text-[#F8F5F2]/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed tracking-wide"
          >
            Experience timeless fragrance crafted to awaken emotion and create unforgettable memories.
            Infused with rare harvests distilled in Baccarat crystal flacons.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-2"
          >
            <a
              href="#collection"
              onClick={onExplore}
              className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#8C6226] text-black font-inter text-xs tracking-[0.25em] font-semibold uppercase rounded-full shadow-[0_10px_35px_rgba(184,138,68,0.35)] hover:scale-105 hover:brightness-110 transition-all text-center"
            >
              Explore Collection
            </a>

            <a
              href="#maison"
              className="w-full sm:w-auto px-9 py-4 border border-[#D9C2A3]/40 bg-[#3B2A2A]/30 backdrop-blur-md text-[#F8F5F2] hover:text-[#D9C2A3] hover:border-[#B88A44] font-inter text-xs tracking-[0.25em] font-medium uppercase rounded-full transition-all text-center"
            >
              Discover Heritage
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-[#B88A44]/20 max-w-lg mx-auto lg:mx-0 font-inter text-center lg:text-left"
          >
            <div>
              <div className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#D9C2A3]">30%</div>
              <div className="text-[11px] text-[#F8F5F2]/60 uppercase tracking-widest mt-1">Perfume Oil</div>
            </div>
            <div>
              <div className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#D9C2A3]">138 Yrs</div>
              <div className="text-[11px] text-[#F8F5F2]/60 uppercase tracking-widest mt-1">Heritage</div>
            </div>
            <div>
              <div className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#D9C2A3]">24 Hrs</div>
              <div className="text-[11px] text-[#F8F5F2]/60 uppercase tracking-widest mt-1">Longevity</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right 3D Interactive Bottle Canvas (Cols 8-12) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="lg:col-span-5 h-[500px] sm:h-[620px] w-full relative flex items-center justify-center"
        >
          {/* Glowing Aura Ring behind Bottle */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-[#B88A44]/30 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-[#D9C2A3]/20 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse' }} />

          {/* 3D Canvas */}
          <CanvasContainer />
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#collection"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#D9C2A3]/60 hover:text-[#D9C2A3] transition-colors"
      >
        <span className="font-inter text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#B88A44]" />
      </a>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />

    </section>
  );
}
