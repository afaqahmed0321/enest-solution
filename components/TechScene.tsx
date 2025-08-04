"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function TechScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.0005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[60, 60, 100, 100]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
        emissive="#00ffff"
        emissiveIntensity={1.5}
        opacity={0.25}
        transparent
      />
    </mesh>
  );
}
