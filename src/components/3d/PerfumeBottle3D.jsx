import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function PerfumeBottle3D({ mousePos = { x: 0, y: 0 } }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mousePos.x * 0.35, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mousePos.y * 0.25, 0.08);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef} position={[0, -0.2, 0]} scale={1.15}>

        {/* Outer Crystal Glass Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 2.6, 1.2]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            transmission={0.92}
            opacity={1}
            transparent
            roughness={0.05}
            ior={1.5}
            thickness={0.6}
            clearcoat={1}
          />
        </mesh>

        {/* Inner Golden Extrait Liquid */}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[1.5, 2.0, 0.9]} />
          <meshStandardMaterial
            color="#B88A44"
            roughness={0.2}
            metalness={0.1}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Front Black & Gold Label */}
        <mesh position={[0, 0, 0.61]}>
          <planeGeometry args={[1.2, 1.6]} />
          <meshStandardMaterial color="#1B1717" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Gold Border Frame */}
        <mesh position={[0, 0, 0.615]}>
          <ringGeometry args={[0.55, 0.58, 4]} />
          <meshStandardMaterial color="#D9C2A3" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* 24k Gold Label Text */}
        <Text
          position={[0, 0.35, 0.62]}
          fontSize={0.14}
          color="#D9C2A3"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.35}
        >
          LUNORÉ
        </Text>

        <Text
          position={[0, 0.1, 0.62]}
          fontSize={0.065}
          color="#B88A44"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.15}
        >
          L'OR ABSOLU
        </Text>

        <Text
          position={[0, -0.15, 0.62]}
          fontSize={0.045}
          color="#D9C2A3"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
        >
          EXTRAIT DE PARFUM
        </Text>

        <Text
          position={[0, -0.38, 0.62]}
          fontSize={0.038}
          color="#8C6226"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.2}
        >
          GRASSE • PARIS
        </Text>

        {/* Gold Neck Collar */}
        <mesh position={[0, 1.45, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.3, 24]} />
          <meshStandardMaterial color="#B88A44" metalness={0.9} roughness={0.15} />
        </mesh>

        {/* Gold Spray Atomizer Ring */}
        <mesh position={[0, 1.65, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.15, 24]} />
          <meshStandardMaterial color="#D9C2A3" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Octagonal Crystal Cap */}
        <mesh position={[0, 2.05, 0]}>
          <boxGeometry args={[0.7, 0.65, 0.7]} />
          <meshPhysicalMaterial
            color="#D9C2A3"
            transmission={0.9}
            opacity={1}
            transparent
            roughness={0.05}
            ior={1.5}
          />
        </mesh>

        {/* Cap Gold Insert */}
        <mesh position={[0, 1.8, 0]}>
          <boxGeometry args={[0.72, 0.08, 0.72]} />
          <meshStandardMaterial color="#B88A44" metalness={0.9} roughness={0.1} />
        </mesh>

      </group>
    </Float>
  );
}
