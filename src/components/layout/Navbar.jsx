import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles, Globe } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import MegaMenu from './MegaMenu';

export default function Navbar({ onOpenSearch, onSelectProduct }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, setIsCartOpen, currency, setCurrency, formatPrice } = useCart();
  const { wishlist, setIsWishlistOpen } = useWishlist();

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishlistCount = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#collection', hasMega: true },
    { name: 'Official Reel', href: '#reel' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Fragrance Notes', href: '#notes-lab' },
    { name: 'Editorial', href: '#lifestyle' },
    { name: 'Limited Edition', href: '#limited' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1B1717]/85 backdrop-blur-xl border-b border-[#B88A44]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#1B1717]/90 via-[#1B1717]/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">

        {/* Left Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 font-inter text-xs tracking-[0.2em] uppercase text-[#F8F5F2]/80">
          {navLinks.slice(0, 3).map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasMega && setIsMegaMenuOpen(true)}
            >
              <a
                href={link.href}
                className="hover:text-[#D9C2A3] transition-colors py-2 flex items-center gap-1 group"
              >
                {link.name}
                {link.hasMega && (
                  <ChevronDown className="w-3 h-3 text-[#B88A44] group-hover:rotate-180 transition-transform duration-300" />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Center Animated Logo */}
        <a href="#" className="flex flex-col items-center group whitespace-nowrap">
          <span className="font-cormorant text-2xl sm:text-3xl tracking-[0.35em] font-light text-white group-hover:text-[#D9C2A3] transition-colors whitespace-nowrap">
            LUNORÉ
          </span>
          <span className="font-inter text-[9px] tracking-[0.4em] text-[#D9C2A3]/80 uppercase -mt-0.5 whitespace-nowrap">
            HAUTE PARFUMERIE
          </span>
        </a>

        {/* Right Links & Quick Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Desktop right nav */}
          <nav className="hidden lg:flex items-center gap-7 font-inter text-xs tracking-[0.2em] uppercase text-[#F8F5F2]/80 mr-2">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#D9C2A3] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Currency Toggle */}
          <div className="hidden sm:flex items-center gap-1 font-inter text-[11px] text-[#D9C2A3] bg-[#3B2A2A]/40 px-2.5 py-1 rounded-full border border-[#B88A44]/30 cursor-pointer hover:border-[#B88A44] transition-colors">
            <Globe className="w-3 h-3 text-[#B88A44]" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-[#D9C2A3] outline-none cursor-pointer text-xs"
            >
              <option value="USD" className="bg-[#1B1717]">USD ($)</option>
              <option value="EUR" className="bg-[#1B1717]">EUR (€)</option>
              <option value="GBP" className="bg-[#1B1717]">GBP (£)</option>
              <option value="INR" className="bg-[#1B1717]">INR (₹)</option>
              <option value="JPY" className="bg-[#1B1717]">JPY (¥)</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#F8F5F2] hover:text-[#D9C2A3] transition-colors relative group"
            title="Search Fragrances"
          >
            <Search className="w-5 h-5" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-inter uppercase text-[#D9C2A3] opacity-0 group-hover:opacity-100 transition-opacity">
              Search
            </span>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="p-2 text-[#F8F5F2] hover:text-[#D9C2A3] transition-colors relative group"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {totalWishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B88A44] text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                {totalWishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-[#F8F5F2] hover:text-[#D9C2A3] transition-colors relative group bg-[#3B2A2A]/40 rounded-full border border-[#B88A44]/30 px-3 py-1.5 flex items-center gap-2 hover:border-[#B88A44]"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#D9C2A3]" />
            <span className="font-inter text-xs font-semibold text-[#D9C2A3]">
              {totalCartCount}
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#F8F5F2] hover:text-[#D9C2A3]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <MegaMenu
            onClose={() => setIsMegaMenuOpen(false)}
            onSelectProduct={onSelectProduct}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1B1717]/95 backdrop-blur-2xl border-b border-[#B88A44]/30 px-6 py-6"
          >
            <div className="flex flex-col space-y-4 font-inter text-sm tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#F8F5F2]/90 hover:text-[#D9C2A3] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  {link.name}
                  <Sparkles className="w-4 h-4 text-[#B88A44]" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
