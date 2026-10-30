import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Heart, MessageCircle, X, ShoppingBag } from 'lucide-react';

export default function InstagramGallery({ onSelectProductByTag }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      image: "/images/lunore_user_soul_cafe.jpg",
      likes: "5,410",
      comments: "348",
      caption: "Soul for a Soul — CHOOSE WISELY. Paris outdoor cafe terrace table with Illy espresso & wooden spherical stopper flacon.",
      taggedProduct: "L'Or Absolu"
    },
    {
      id: 2,
      image: "/images/lunore_user_weekend_escape.jpg",
      likes: "6,120",
      comments: "410",
      caption: "Weekend Escape. Sky-blue spherical cap flacon on Paris balcony bed with luxury leather travel accessories.",
      taggedProduct: "Santal Céleste"
    },
    {
      id: 3,
      image: "/images/lunore_user_handbag.jpg",
      likes: "7,890",
      comments: "520",
      caption: "WHERE SOUL MEETS ANOTHER SOUL. Luxury black leather handbag flatlay with gold Cartier bracelet & notebook.",
      taggedProduct: "Nuit d'Or"
    },
    {
      id: 4,
      image: "/images/lunore_user_rose_wood.jpg",
      likes: "8,950",
      comments: "612",
      caption: "Sculptural Wood & Amber Stone. Blush-pink spherical stopper flacon resting on carved organic driftwood.",
      taggedProduct: "Rose Impériale"
    },
    {
      id: 5,
      image: "/images/lunore_user_car_bonnet.jpg",
      likes: "9,820",
      comments: "789",
      caption: "Vintage Car Bonnet & Paris Dawn. Fresh artisan baguette, burgundy chrysanthemum bouquet & LUNORÉ flacon.",
      taggedProduct: "Soleil Absolu"
    }
  ];

  return (
    <section className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/15">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Instagram className="w-4 h-4 text-[#B88A44]" />
            @LUNOREESSENCE
          </div>
          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Where Soul Meets Another Soul
          </h2>
          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/75 leading-relaxed font-light">
            Follow our official instagram grid <span className="text-[#D9C2A3] font-normal">@lunoreessence</span> across Paris cafes, balcony suites & artisanal creations.
          </p>
        </div>

        {/* Masonry Grid for 5 Authentic Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="relative h-72 sm:h-84 rounded-2xl overflow-hidden cursor-pointer group border border-[#B88A44]/20 hover:border-[#B88A44] transition-all shadow-xl"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Dark Mask & Icons */}
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs flex flex-col justify-between p-5 text-[#F8F5F2]">
                <div className="flex justify-end">
                  <Instagram className="w-5 h-5 text-[#D9C2A3]" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-4 text-xs font-inter font-semibold text-[#D9C2A3]">
                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {post.comments}</span>
                  </div>
                  <p className="font-inter text-[11px] text-white/90 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden border border-[#B88A44]/40 z-10 text-[#F8F5F2] shadow-2xl"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 p-2 text-white bg-black/60 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-[420px]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4 bg-[#1B1717]">
                <div className="flex justify-between items-center text-xs font-inter text-[#D9C2A3]">
                  <span className="flex items-center gap-1.5"><Instagram className="w-4 h-4" /> @LUNOREESSENCE</span>
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-current text-red-500" /> {selectedPost.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {selectedPost.comments}</span>
                  </span>
                </div>

                <p className="font-inter text-xs text-[#F8F5F2]/90 leading-relaxed font-light">
                  {selectedPost.caption}
                </p>

                {selectedPost.taggedProduct && (
                  <div className="pt-3 border-t border-[#B88A44]/20 flex items-center justify-between">
                    <span className="font-inter text-xs text-[#D9C2A3]">
                      Featured Creation: <span className="font-semibold text-white">{selectedPost.taggedProduct}</span>
                    </span>
                    <button
                      onClick={() => {
                        const name = selectedPost.taggedProduct;
                        setSelectedPost(null);
                        if (onSelectProductByTag) onSelectProductByTag(name);
                      }}
                      className="px-4 py-2 bg-[#B88A44] text-black font-inter text-xs font-semibold rounded-full hover:bg-[#D9C2A3] transition-colors flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Shop Creation
                    </button>
                  </div>
                )}
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
