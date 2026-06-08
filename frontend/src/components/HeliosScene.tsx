'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Html } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function PremiumDevice({ position, color, label }: { position: [number, number, number]; color: string; label: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.45;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.16;
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.4}>
      <mesh ref={mesh} position={position}>
        <boxGeometry args={[1.45, 1.9, 0.22]} />
        <meshStandardMaterial color={color} metalness={0.72} roughness={0.18} />
        <Html position={[0, -1.35, 0]} center>
          <div style={{ padding: '8px 12px', borderRadius: 999, background: 'rgba(0,0,0,.45)', border: '1px solid rgba(255,255,255,.18)', color: 'white', fontSize: 12, whiteSpace: 'nowrap', backdropFilter: 'blur(10px)' }}>{label}</div>
        </Html>
      </mesh>
    </Float>
  );
}

export default function HeliosScene() {
  return (
    <Canvas camera={{ position: [0, 1.2, 7], fov: 48 }}>
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} />
      <pointLight position={[-4, 1, 3]} intensity={4} color="#8bd3ff" />
      <PremiumDevice position={[-2.2, 0.4, 0]} color="#8bd3ff" label="Smart EV" />
      <PremiumDevice position={[0, -0.1, -0.8]} color="#d6a6ff" label="Wearable" />
      <PremiumDevice position={[2.1, 0.35, 0.2]} color="#7df7c4" label="Camera" />
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
        <torusGeometry args={[3.2, 0.015, 16, 140]} />
        <meshBasicMaterial color="#8bd3ff" transparent opacity={0.45} />
      </mesh>
      <Environment preset="city" />
    </Canvas>
  );
}
