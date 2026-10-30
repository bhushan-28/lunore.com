import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9990] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#E5C384] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(184,138,68,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
