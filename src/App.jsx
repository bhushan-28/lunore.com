import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import LenisScroll from './components/ui/LenisScroll';
import Cursor from './components/ui/Cursor';
import LuxuryLoader from './components/ui/LuxuryLoader';
import ScrollProgress from './components/ui/ScrollProgress';
import ToastNotification from './components/ui/ToastNotification';

import Navbar from './components/layout/Navbar';
import CartDrawer from './components/layout/CartDrawer';
import WishlistDrawer from './components/layout/WishlistDrawer';
import SearchDrawer from './components/layout/SearchDrawer';
import Footer from './components/layout/Footer';
import QuickViewModal from './components/ui/QuickViewModal';

import Hero from './components/sections/Hero';
import ReelSection from './components/sections/ReelSection';
import GsapAtelierMastery from './components/sections/GsapAtelierMastery';
import SignatureCollection from './components/sections/SignatureCollection';
import FragranceNotesLab from './components/sections/FragranceNotesLab';
import MaisonLookbook from './components/sections/MaisonLookbook';
import EditorialLifestyle from './components/sections/EditorialLifestyle';
import FragranceSimulator from './components/sections/FragranceSimulator';
import Testimonials from './components/sections/Testimonials';
import WhyLunore from './components/sections/WhyLunore';
import LimitedEdition from './components/sections/LimitedEdition';
import InstagramGallery from './components/sections/InstagramGallery';
import Newsletter from './components/sections/Newsletter';

import { PRODUCTS } from './data/products';

const queryClient = new QueryClient();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSelectPerfumeByName = (name) => {
    const matched = PRODUCTS.find(
      (p) => p.name.toLowerCase() === name.toLowerCase() || p.name.toLowerCase().includes(name.toLowerCase())
    );
    if (matched) {
      setSelectedProduct(matched);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WishlistProvider>

          {/* Luxury Loader Intro */}
          <LuxuryLoader onFinish={() => setIsLoading(false)} />

          {/* Core App Shell */}
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen bg-[#1B1717] text-[#F8F5F2] relative overflow-x-hidden font-sans selection:bg-[#B88A44] selection:text-white"
            >
              {/* Smooth Scroll Engine */}
              <LenisScroll />

              {/* Glowing Scroll Progress Bar */}
              <ScrollProgress />

              {/* Custom Gold Cursor Follower */}
              <Cursor />

              {/* Toast System */}
              <ToastNotification />

              {/* Sticky Header Navigation */}
              <Navbar
                onOpenSearch={() => setIsSearchOpen(true)}
                onSelectProduct={(product) => setSelectedProduct(product)}
              />

              {/* Interactive Drawers */}
              <CartDrawer />
              <WishlistDrawer />
              <SearchDrawer
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                onSelectProduct={(product) => setSelectedProduct(product)}
              />

              {/* Main Content Sections */}
              <main>
                <Hero
                  onExplore={() => {
                    const el = document.getElementById('collection');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />

                <ReelSection
                  onExploreCollection={() => {
                    const el = document.getElementById('collection');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />

                <GsapAtelierMastery />

                <SignatureCollection
                  onQuickView={(product) => setSelectedProduct(product)}
                />

                <FragranceNotesLab
                  onSelectPerfumeName={handleSelectPerfumeByName}
                />

                <MaisonLookbook
                  onSelectProductByTag={handleSelectPerfumeByName}
                />

                <EditorialLifestyle />

                <FragranceSimulator />

                <Testimonials />

                <WhyLunore />

                <LimitedEdition />

                <InstagramGallery
                  onSelectProductByTag={handleSelectPerfumeByName}
                />

                <Newsletter />
              </main>

              {/* Footer */}
              <Footer />

              {/* Quick View Modal */}
              <QuickViewModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />

            </motion.div>
          )}

        </WishlistProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
