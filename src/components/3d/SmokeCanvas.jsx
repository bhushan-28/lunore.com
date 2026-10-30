import React from 'react';

export default function SmokeCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Light GPU-Accelerated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#B88A44]/15 to-transparent rounded-full blur-[120px] animate-pulse-glow opacity-60" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-[#3B2A2A]/40 via-[#B88A44]/10 to-transparent rounded-full blur-[130px] opacity-70" />
    </div>
  );
}
