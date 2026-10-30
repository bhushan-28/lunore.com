import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ToastNotification() {
  const { toastMessage } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-8 right-8 z-[10000] max-w-sm glass-card-gold px-5 py-4 rounded-xl shadow-2xl flex items-center gap-4 text-[#F8F5F2] border border-[#B88A44]/50"
        >
          <div className="w-10 h-10 rounded-full bg-[#B88A44]/20 border border-[#B88A44]/60 flex items-center justify-center text-[#D9C2A3] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="font-cormorant text-base font-semibold text-[#D9C2A3] tracking-wide">
              Maison LUNORÉ
            </div>
            <div className="font-inter text-xs text-[#F8F5F2]/90 mt-0.5">
              {toastMessage}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
