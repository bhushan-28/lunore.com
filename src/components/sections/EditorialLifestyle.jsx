import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, X } from 'lucide-react';
import { LIFESTYLE_ARTICLES } from '../../data/lifestyle';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EditorialLifestyle() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header animation via GSAP.from()
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out'
      });

      // 2. Alternating Row Animations via GSAP.fromTo()
      rowRefs.current.forEach((row, idx) => {
        if (!row) return;

        const imageEl = row.querySelector('.gsap-image');
        const textEl = row.querySelector('.gsap-text');

        const isEven = idx % 2 === 0;

        // Image sliding: Left-to-Right (isEven) vs Right-to-Left (!isEven)
        if (imageEl) {
          gsap.fromTo(
            imageEl,
            {
              opacity: 0,
              x: isEven ? -120 : 120,
              scale: 0.92
            },
            {
              scrollTrigger: {
                trigger: row,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1.2,
              ease: 'power3.out'
            }
          );
        }

        // Text sliding: Right-to-Left (isEven) vs Left-to-Right (!isEven)
        if (textEl) {
          gsap.fromTo(
            textEl,
            {
              opacity: 0,
              x: isEven ? 120 : -120
            },
            {
              scrollTrigger: {
                trigger: row,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              opacity: 1,
              x: 0,
              duration: 1.2,
              delay: 0.1,
              ease: 'power3.out'
            }
          );
        }
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lifestyle"
      className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            Le Journal de LUNORÉ
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Editorial Spreads & Atelier Secrets
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Step behind the velvet curtain into our Grasse harvests, crystal glassworks, and olfactory rituals.
          </p>
        </div>

        {/* Editorial Articles Alternating Rows */}
        <div className="space-y-16 lg:space-y-24">
          {LIFESTYLE_ARTICLES.map((article, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={article.id}
                ref={(el) => (rowRefs.current[idx] = el)}
                onClick={() => setSelectedArticle(article)}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center cursor-pointer group glass-card p-6 sm:p-10 rounded-3xl border border-[#B88A44]/25 hover:border-[#B88A44] transition-all duration-500 shadow-2xl ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Container (GSAP Left-to-Right or Right-to-Left) */}
                <div
                  className={`gsap-image ${
                    isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'
                  }`}
                >
                  <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#B88A44]/30 shadow-xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#1B1717]/85 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-inter text-[#D9C2A3] uppercase tracking-wider border border-[#B88A44]/40">
                      {article.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#1B1717]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-inter text-[#F8F5F2]/80 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B88A44]" />
                      {article.readTime}
                    </div>
                  </div>
                </div>

                {/* Text Content Container (GSAP Right-to-Left or Left-to-Right) */}
                <div
                  className={`gsap-text space-y-6 ${
                    isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B88A44]/15 border border-[#B88A44]/30 text-[11px] font-inter text-[#D9C2A3]">
                    <Sparkles className="w-3 h-3 text-[#B88A44]" />
                    Maison Editorial Spread N° 0{article.id}
                  </div>

                  <h3 className="font-cormorant text-3xl sm:text-5xl font-semibold text-white group-hover:text-[#D9C2A3] transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
                    {article.excerpt}
                  </p>

                  <div className="pt-6 border-t border-[#B88A44]/20 flex items-center justify-between">
                    <span className="font-inter text-xs text-[#D9C2A3]">
                      Authored by <span className="text-white font-medium">{article.author}</span>
                    </span>
                    <button className="px-5 py-2.5 rounded-full bg-[#B88A44] text-black font-inter text-xs font-semibold group-hover:bg-[#D9C2A3] transition-colors flex items-center gap-1.5 shadow-lg">
                      Read Spread <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl glass-card rounded-2xl p-8 sm:p-12 border border-[#B88A44]/40 z-10 text-[#F8F5F2] my-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2.5 text-[#F8F5F2]/60 hover:text-white bg-[#1B1717]/60 rounded-full border border-[#B88A44]/30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden mb-6 border border-[#B88A44]/30">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-inter text-xs text-[#B88A44] uppercase tracking-widest block font-semibold mb-2">
                {selectedArticle.category} • {selectedArticle.readTime}
              </span>

              <h2 className="font-cormorant text-3xl sm:text-5xl font-semibold text-white mb-4">
                {selectedArticle.title}
              </h2>

              <p className="font-inter text-sm text-[#F8F5F2]/80 leading-relaxed font-light space-y-4 mb-6">
                {selectedArticle.excerpt}
                <br /><br />
                In the historic sanctuary of Grasse, our artisan perfumers align ancient floral maceration with cutting-edge cold-CO2 extraction. This preserves the delicate aromatic molecules of Centifolia roses and wild violet leaves exactly as they smell on the living bush at 6 AM.
              </p>

              <div className="pt-4 border-t border-[#B88A44]/20 flex justify-between items-center text-xs font-inter text-[#D9C2A3]">
                <span>Authored by {selectedArticle.author}</span>
                <span>Maison LUNORÉ Gazette • Volume 14</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
