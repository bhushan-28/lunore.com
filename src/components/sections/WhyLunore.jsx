import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Crown, Clock, ShieldCheck, Heart, Gift } from 'lucide-react';
import { BRAND_PILLARS } from '../../data/whyLunore';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyLunore() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const glowRef = useRef(null);
  const cardsRef = useRef([]);

  const iconMap = {
    Sparkles: <Sparkles className="w-7 h-7 text-[#B88A44]" />,
    Crown: <Crown className="w-7 h-7 text-[#B88A44]" />,
    Clock: <Clock className="w-7 h-7 text-[#B88A44]" />,
    ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#B88A44]" />,
    Heart: <Heart className="w-7 h-7 text-[#B88A44]" />,
    Gift: <Gift className="w-7 h-7 text-[#B88A44]" />
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. GSAP.from() - Header reveal
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 45,
        duration: 1.2,
        ease: 'power3.out'
      });

      // 2. GSAP.to() - Ambient background glow expansion
      gsap.to(glowRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        },
        scale: 1.4,
        rotate: 45,
        opacity: 0.25,
        ease: 'none'
      });

      // 3. GSAP.fromTo() - Staggered Pillar Cards on X & Y Axis entrance
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 45,
          x: -25,
          scale: 0.94
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.9,
          delay: 0.15,
          stagger: 0.18,
          ease: 'power3.out'
        }
      );

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/15 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B88A44]/15 rounded-full blur-[180px] pointer-events-none opacity-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            Uncompromising Standards
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Why Maison LUNORÉ
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Every bottle is an unyielding commitment to liquid luxury, ethical artistry, and enduring elegance.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {BRAND_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="glass-card p-8 sm:p-10 rounded-2xl border border-[#B88A44]/20 hover:border-[#B88A44] transition-all duration-500 group flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-[#3B2A2A]/50 border border-[#B88A44]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#B88A44]/20 transition-all">
                  {iconMap[pillar.icon]}
                </div>

                <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-white group-hover:text-[#D9C2A3] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-inter text-[10px] text-[#B88A44] uppercase tracking-wider font-semibold">
                <span>Certified Haute Standard</span>
                <span className="text-[#D9C2A3]/60">Maison Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
