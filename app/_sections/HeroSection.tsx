"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Navbar from "@/components/Navbar";
import TechScene from "@/components/TechScene";
import { useAutoScroll } from "@/hooks/useAutoScroll";

const HeroSection = () => {
  useAutoScroll({
    currentSectionId: "hero",
    nextSectionId: "about",
  });

  return (
    <div
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      <Navbar />

      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 10], fov: 65 }} gl={{ alpha: true }}>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 10, 5]} intensity={2} />
          <Suspense fallback={null}>
            <TechScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-8 md:px-20">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Modern Digital</span>{" "}
            <span className="text-cyan-400">Solutions</span>
          </h1>
          <p className="mt-4 text-gray-300 text-base md:text-lg">
            We provide innovative tech solutions to help your business thrive.
          </p>
          <button
            type="button"
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg font-medium transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce bg-cyan-400 rounded-full p-3 hover:bg-cyan-500 transition-colors duration-300"
      >
        <span className="sr-only">Scroll to About section</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </div>
  );
};

export default HeroSection;
