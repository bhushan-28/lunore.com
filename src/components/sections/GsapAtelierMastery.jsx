import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Play, Pause, RotateCcw, ShieldCheck, Feather, Layers } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapAtelierMastery({ onExploreCollection }) {
  const sectionRef = useRef(null);
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);
  const crestPathRef = useRef(null);
  const statsRef = useRef([]);
  const timelineRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Prepare SVG Paths for Draw Animation (strokeDasharray & strokeDashoffset)
      const paths = [pathRef1.current, pathRef2.current, pathRef3.current, crestPathRef.current];
      paths.forEach((path) => {
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 1
          });
        }
      });

      // 2. Reveal Feature Cards (35% Pure Extrait Concentration, 36 Months Oak Barrel, 100% Hand-Turned Marble Stopper)
      // Slides smoothly along X-axis (x: 60 -> 0) and Y-axis (y: 30 -> 0) with delay & stagger when user arrives
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, x: 60, y: 30, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 0.2,
          stagger: 0.25,
          ease: 'power3.out'
        }
      );

      // 3. Vector SVG Drawing Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      timelineRef.current = tl;

      // Draw Crest & Flacon Paths sequentially
      tl.to(crestPathRef.current, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      })
      .to(pathRef1.current, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: 'power2.out'
      }, '-=1.0')
      .to(pathRef2.current, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power1.inOut'
      }, '-=1.2')
      .to(pathRef3.current, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'sine.inOut'
      }, '-=0.8');

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTogglePlay = () => {
    if (timelineRef.current) {
      if (isPlaying) {
        timelineRef.current.pause();
      } else {
        timelineRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
      setIsPlaying(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="gsap-atelier"
      className="py-32 sm:py-40 bg-[#161212] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/20 overflow-hidden"
    >
      {/* Glow Radial Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B88A44]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            L'Artisanat de Haute Parfumerie
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Architectural Precision & Vector Artistry
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Experience our interactive architectural vector animation. As you scroll, precise paths draw the signature Maison LUNORÉ crest and flacon.
          </p>

          {/* Control Bar */}
          <div className="flex items-center justify-center gap-4 pt-4 font-inter text-xs">
            <button
              onClick={handleTogglePlay}
              className="px-5 py-2.5 bg-[#3B2A2A]/60 text-[#D9C2A3] border border-[#B88A44]/40 rounded-full hover:bg-[#B88A44] hover:text-black transition-all flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? "Pause Animation" : "Play Animation"}
            </button>
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 bg-[#3B2A2A]/60 text-[#D9C2A3] border border-[#B88A44]/40 rounded-full hover:bg-[#B88A44] hover:text-black transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Replay Atelier Animation
            </button>
          </div>
        </div>

        {/* Main Grid: SVG Path Drawing + Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Interactive Vector Canvas */}
          <div className="lg:col-span-6 glass-card p-8 sm:p-12 rounded-3xl border border-[#B88A44]/40 shadow-2xl relative flex flex-col items-center justify-center min-h-[460px] bg-gradient-to-b from-[#1F1919]/80 to-[#141010]/95">
            
            <span className="absolute top-6 left-6 font-inter text-[10px] uppercase tracking-widest text-[#B88A44] font-semibold">
              LUNORÉ Atelier Contour
            </span>

            {/* SVG Canvas */}
            <svg
              viewBox="0 0 400 450"
              className="w-full max-w-[340px] h-auto filter drop-shadow-[0_0_15px_rgba(184,138,68,0.4)]"
            >
              {/* Outer Decorative Crest Circle */}
              <path
                ref={crestPathRef}
                d="M 200, 25 A 175,175 0 1,0 200,375 A 175,175 0 1,0 200,25 Z"
                fill="none"
                stroke="#B88A44"
                strokeWidth="1.5"
                strokeDasharray="1100"
                strokeDashoffset="1100"
              />

              {/* Flacon Outer Silhouette Path 1 */}
              <path
                ref={pathRef1}
                d="M 140,110 H 260 V 140 C 260,170 290,190 290,230 V 330 C 290,355 270,370 245,370 H 155 C 130,370 110,355 110,330 V 230 C 110,190 140,170 140,140 Z"
                fill="none"
                stroke="#D9C2A3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Spherical Stopper Crown Path 2 */}
              <path
                ref={pathRef2}
                d="M 200,45 C 225,45 245,65 245,90 C 245,115 225,125 200,125 C 175,125 155,115 155,90 C 155,65 175,45 200,45 Z"
                fill="none"
                stroke="#B88A44"
                strokeWidth="2.5"
              />

              {/* Inner LUNORE Logo Emblem Path 3 */}
              <path
                ref={pathRef3}
                d="M 160,240 Q 200,210 240,240 Q 200,270 160,240 M 175,270 L 225,270 M 200,200 V 310"
                fill="none"
                stroke="#F8F5F2"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Bottom Status Tag */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B88A44]/15 border border-[#B88A44]/30 text-[#D9C2A3] font-inter text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B88A44]" /> Master Artisan Vector Silhouette
            </div>
          </div>

          {/* Right Column: Animated Feature Cards */}
          <div className="lg:col-span-6 space-y-6">

            <div
              ref={(el) => (statsRef.current[0] = el)}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#B88A44]/25 hover:border-[#B88A44] transition-all flex items-start gap-5 shadow-xl"
            >
              <div className="p-3.5 rounded-xl bg-[#B88A44]/15 border border-[#B88A44]/30 text-[#D9C2A3] shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#B88A44]" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-cormorant text-2xl text-white font-semibold">35% Pure Extrait Concentration</h4>
                  <span className="font-inter text-xs text-[#B88A44] font-semibold">Pillar I</span>
                </div>
                <p className="font-inter text-xs text-[#F8F5F2]/75 leading-relaxed font-light">
                  Formulated at the highest legal concentration in haute perfumery, ensuring 24-hour sillage and exceptional scent evolution.
                </p>
              </div>
            </div>

            <div
              ref={(el) => (statsRef.current[1] = el)}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#B88A44]/25 hover:border-[#B88A44] transition-all flex items-start gap-5 shadow-xl"
            >
              <div className="p-3.5 rounded-xl bg-[#B88A44]/15 border border-[#B88A44]/30 text-[#D9C2A3] shrink-0">
                <Feather className="w-6 h-6 text-[#B88A44]" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-cormorant text-2xl text-white font-semibold">36 Months Oak Barrel Aging</h4>
                  <span className="font-inter text-xs text-[#B88A44] font-semibold">Pillar II</span>
                </div>
                <p className="font-inter text-xs text-[#F8F5F2]/75 leading-relaxed font-light">
                  Every batch of Cambodian agarwood and amber resin matures subterraneanly in Limousin oak casks prior to flacon bottling.
                </p>
              </div>
            </div>

            <div
              ref={(el) => (statsRef.current[2] = el)}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#B88A44]/25 hover:border-[#B88A44] transition-all flex items-start gap-5 shadow-xl"
            >
              <div className="p-3.5 rounded-xl bg-[#B88A44]/15 border border-[#B88A44]/30 text-[#D9C2A3] shrink-0">
                <Layers className="w-6 h-6 text-[#B88A44]" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-cormorant text-2xl text-white font-semibold">100% Hand-Turned Marble Stopper</h4>
                  <span className="font-inter text-xs text-[#B88A44] font-semibold">Pillar III</span>
                </div>
                <p className="font-inter text-xs text-[#F8F5F2]/75 leading-relaxed font-light">
                  Crafted individually by French artisans using Italian Carrara marble and sustainable French walnut wood caps.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
