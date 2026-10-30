import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';
import { TIMELINE_EVENTS } from '../../data/timeline';

export default function BrandStory() {
  return (
    <section id="maison" className="py-32 sm:py-40 bg-[#1B1717] relative z-10 overflow-hidden px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/15">

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#B88A44]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            138 Years of Haute Parfumerie
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            The Maison Heritage
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Founded in 1888 on the sun-kissed slopes of Grasse, Maison LUNORÉ has elevated raw botanical extraction into a high-art form passed down through five generations of master perfumers.
          </p>
        </div>

        {/* Master Perfumer Quote Banner */}
        <div className="glass-card-gold p-10 sm:p-16 rounded-3xl mb-28 max-w-4xl mx-auto border border-[#B88A44]/40 relative overflow-hidden text-center shadow-2xl">
          <div className="w-14 h-14 mx-auto mb-6 border border-[#B88A44]/40 rounded-full flex items-center justify-center text-[#D9C2A3] bg-[#3B2A2A]/40">
            <Award className="w-7 h-7" />
          </div>
          <blockquote className="font-cormorant text-2xl sm:text-4xl italic text-[#F8F5F2] font-light leading-snug mb-8">
            "A perfume is not merely a blend of aromatic oils; it is an invisible cloak of memory, identity, and raw emotion that lingers long after you leave the room."
          </blockquote>
          <cite className="not-italic font-inter text-xs tracking-[0.3em] text-[#D9C2A3] uppercase block font-semibold">
            — Antoine Lunoré V, Master Perfumer & Atelier Director
          </cite>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Central Gold Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D9C2A3] via-[#B88A44] to-[#3B2A2A] -translate-x-1/2" />

          <div className="space-y-20">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Card */}
                  <div className="w-full md:w-1/2">
                    <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden glass-card p-2 border border-[#B88A44]/30 group shadow-2xl">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-5 left-5 font-cormorant text-3xl sm:text-4xl font-bold bg-[#1B1717]/90 text-[#D9C2A3] px-5 py-1.5 rounded-xl border border-[#B88A44]/40">
                        {event.year}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <span className="font-inter text-xs text-[#B88A44] uppercase tracking-widest block font-semibold">
                      {event.subtitle}
                    </span>
                    <h3 className="font-cormorant text-3xl sm:text-4xl font-semibold text-white">
                      {event.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
