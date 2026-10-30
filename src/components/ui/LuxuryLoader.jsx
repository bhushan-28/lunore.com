import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LuxuryLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => onFinish && onFinish(), 600);
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#1B1717] flex flex-col items-center justify-center px-6"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-96 h-96 bg-[#B88A44]/10 rounded-full blur-[100px] animate-pulse-glow" />

          {/* Luxury Crest & Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            <div className="w-16 h-16 mx-auto mb-6 border border-[#B88A44]/40 flex items-center justify-center rounded-full bg-[#3B2A2A]/40 backdrop-blur-md">
              <span className="font-cormorant text-2xl text-[#D9C2A3] tracking-widest font-light">⚜</span>
            </div>

            <h1 className="font-cormorant text-4xl sm:text-5xl tracking-[0.35em] font-light text-white uppercase mb-2 whitespace-nowrap">
              LUNORÉ
            </h1>
            <p className="font-inter text-xs tracking-[0.4em] text-[#D9C2A3]/80 uppercase mb-10 whitespace-nowrap">
              HAUTE PARFUMERIE • GRASSE &amp; PARIS
            </p>

            {/* Progress Bar Container */}
            <div className="w-64 sm:w-80 h-[2px] bg-[#3B2A2A] mx-auto overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#F8F5F2]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Counter */}
            <div className="mt-4 font-inter text-xs text-[#D9C2A3]/60 tracking-widest">
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
