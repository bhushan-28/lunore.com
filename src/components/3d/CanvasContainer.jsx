import React, { useState, useEffect, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import PerfumeBottle3D from './PerfumeBottle3D';
import ParticleField from './ParticleField';

class ThreeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("3D Canvas fallback active:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative rounded-2xl overflow-hidden glass-card p-6 border border-[#B88A44]/40">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop"
            alt="L'Or Absolu Flacon"
            className="w-full h-80 object-cover rounded-xl border border-[#B88A44]/30 shadow-2xl animate-float"
          />
          <div className="mt-4 text-center">
            <h4 className="font-cormorant text-2xl font-semibold text-[#D9C2A3]">L'Or Absolu</h4>
            <p className="font-inter text-xs text-[#F8F5F2]/70">Extrait de Parfum • 100ml Baccarat Crystal</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function CanvasContainer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThreeErrorBoundary>
      <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFF5E4" />
          <directionalLight position={[-5, -4, -3]} intensity={1.2} color="#B88A44" />
          <pointLight position={[0, 2, 3]} intensity={1.8} color="#D9C2A3" />
          <spotLight position={[0, 10, 0]} intensity={3.5} angle={0.6} penumbra={1} color="#FFFFFF" />

          <PerfumeBottle3D mousePos={mousePos} />
          <ParticleField count={250} />
        </Canvas>
      </div>
    </ThreeErrorBoundary>
  );
}
