import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film, Compass, ShoppingBag, Maximize2 } from 'lucide-react';

export default function ReelSection({ onExploreCollection }) {
  const reels = [
    {
      id: 1,
      title: "Paris Nocturne & Amber Radiance",
      subtitle: "Extrait de Parfum • 35% Concentrate",
      src: "/videos/main.mp4",
      duration: "0:45",
      badge: "Official Campaign Reel",
      description: "A nocturnal journey through Paris streets, where smoked tobacco leaf meets dark Venezuelan cacao & liquid gold oud."
    },
    {
      id: 2,
      title: "Grasse Sunrise Harvest",
      subtitle: "Centifolia Rose & May Rose Water",
      src: "/videos/reel_1.mp4",
      duration: "0:30",
      badge: "Atelier Film",
      description: "Witness dawn harvesting of May Rose petals in Grasse, hand-distilled in historic copper stills at 6 AM."
    },
    {
      id: 3,
      title: "Where Soul Meets Another Soul",
      subtitle: "Haute Parfumerie Campaign",
      src: "/videos/reel_2.mp4",
      duration: "0:28",
      badge: "Signature Film",
      description: "Our core brand anthem encapsulating slow perfumery, handcrafted wooden stoppers, and raw Cambodian agarwood resin."
    },
    {
      id: 4,
      title: "Bespoke Crystal Flacon Artisans",
      subtitle: "Hand-turned Wood & Crystal Glass",
      src: "/videos/reel_3.mp4",
      duration: "0:40",
      badge: "Craftsmanship",
      description: "Hand-turned wooden spherical caps and mouth-blown Baccarat crystal flacons crafted by master French artisans."
    },
    {
      id: 5,
      title: "The Olfactory Odyssey",
      subtitle: "Global Botanical Harvests",
      src: "/videos/reel_4.mp4",
      duration: "0:35",
      badge: "Heritage",
      description: "From Australian sandalwood sanctuaries to Guatemalan green cardamom fields—the rare botanicals of Maison LUNORÉ."
    }
  ];

  const [activeReel, setActiveReel] = useState(reels[0]);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // When activeReel changes, reset and play
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [activeReel]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="reel" className="py-32 sm:py-40 bg-[#120F0F] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/20">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Film className="w-4 h-4 text-[#B88A44]" />
            LE CINÉMA DE MAISON LUNORÉ
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Official Campaign Cinema Reels
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Immerse yourself in our 5 official haute-parfumerie films. Select any campaign reel below to experience the atelier craftsmanship in 4K resolution.
          </p>
        </div>

        {/* Main Theatre Player Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Active Video Theatre */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-[#B88A44]/40 shadow-[0_25px_80px_rgba(184,138,68,0.25)] glass-card group">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReel.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[9/16] sm:aspect-video w-full bg-black flex items-center justify-center overflow-hidden"
              >
                <video
                  ref={videoRef}
                  src={activeReel.src}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Ambient Control Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-6 left-6 z-30 flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-[#B88A44] text-black font-inter text-xs font-semibold uppercase tracking-widest shadow-lg">
                    {activeReel.badge}
                  </span>
                  <span className="font-inter text-xs text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B88A44]/30 hidden sm:inline-block">
                    Reel {activeReel.id} of 5
                  </span>
                </div>

                {/* Center Big Play/Pause Trigger */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-105 transition-transform"
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  <div className="p-5 sm:p-6 rounded-full bg-[#1B1717]/70 backdrop-blur-md border border-[#B88A44]/60 text-[#D9C2A3] hover:bg-[#B88A44] hover:text-black transition-all shadow-2xl">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 sm:w-10 sm:h-10" />
                    ) : (
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 translate-x-0.5" />
                    )}
                  </div>
                </button>

                {/* Bottom Toolbar Controls */}
                <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleMute}
                      className="p-3 rounded-full bg-black/70 backdrop-blur-md border border-[#B88A44]/40 text-[#D9C2A3] hover:bg-black/90 transition-colors"
                      title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-[#B88A44]" />
                      )}
                    </button>

                    <button
                      onClick={handleFullscreen}
                      className="p-3 rounded-full bg-black/70 backdrop-blur-md border border-[#B88A44]/40 text-[#D9C2A3] hover:bg-black/90 transition-colors"
                      title="Fullscreen Theatre"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-[#B88A44]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-black font-inter text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" /> 4K Ultra HD Cinema
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Column: Active Reel Details & CTA */}
          <div className="lg:col-span-4 space-y-8">

            <div className="space-y-4">
              <span className="font-inter text-xs text-[#B88A44] uppercase tracking-[0.3em] font-semibold block">
                {activeReel.subtitle}
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl font-light text-white leading-tight">
                {activeReel.title}
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/80 leading-relaxed font-light">
                {activeReel.description}
              </p>
            </div>

            {/* Campaign Highlights */}
            <div className="space-y-4 pt-4 border-t border-[#B88A44]/20">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-full bg-[#B88A44]/15 border border-[#B88A44]/30 text-[#D9C2A3] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cormorant text-lg text-white font-medium">Grasse Atelier Distillation</h4>
                  <p className="font-inter text-xs text-white/60 font-light">Extracted in small batches with zero commercial shortcuts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-full bg-[#B88A44]/15 border border-[#B88A44]/30 text-[#D9C2A3] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cormorant text-lg text-white font-medium">Subterranean Aging</h4>
                  <p className="font-inter text-xs text-white/60 font-light">Submerged in oak barrels to intensify sillage and longevity.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('collection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full px-8 py-4 bg-[#B88A44] text-black font-inter text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-[#D9C2A3] transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-[#B88A44]/30"
              >
                <ShoppingBag className="w-4 h-4" /> Shop Featured Creation
              </button>
            </div>

          </div>

        </div>

        {/* Horizontal Reel Thumbnails Carousel Selector */}
        <div className="space-y-6 pt-8 border-t border-[#B88A44]/15">
          <div className="flex justify-between items-center">
            <h3 className="font-cormorant text-2xl font-light text-white">
              Select Campaign Reel ({reels.length})
            </h3>
            <span className="font-inter text-xs text-[#D9C2A3] uppercase tracking-widest">
              Click thumbnail to watch
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {reels.map((reel) => (
              <motion.div
                key={reel.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveReel(reel)}
                className={`relative h-44 rounded-2xl overflow-hidden cursor-pointer border transition-all shadow-xl group ${
                  activeReel.id === reel.id
                    ? 'border-[#B88A44] ring-2 ring-[#B88A44]/50 scale-[1.02]'
                    : 'border-[#B88A44]/25 opacity-70 hover:opacity-100 hover:border-[#B88A44]/60'
                }`}
              >
                {/* Background Video Preview */}
                <video
                  src={reel.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-between text-[#F8F5F2]">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1B1717]/80 backdrop-blur-md text-[10px] font-inter text-[#D9C2A3] border border-[#B88A44]/30">
                      Reel 0{reel.id}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#B88A44] text-black flex items-center justify-center shadow-lg">
                      <Play className="w-3.5 h-3.5 translate-x-0.5 fill-current" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-cormorant text-base font-semibold text-white truncate">
                      {reel.title}
                    </h4>
                    <p className="font-inter text-[11px] text-[#D9C2A3] truncate">
                      {reel.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
