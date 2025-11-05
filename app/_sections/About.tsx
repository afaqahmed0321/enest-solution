"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutAnimation from "@/public/animations/about.json";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

const AboutSection = () => {
  const handleScrollClick = () => {
    const nextSection = document.getElementById("team");
    if (nextSection) {
      smoothScrollTo(nextSection.offsetTop, 100);
    }
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6 md:px-20 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-500">About Us</h2>
          <p className="text-gray-300 mb-8">
            We specialize in delivering high-quality web, mobile, and AI-based
            solutions that scale. We build products with performance and
            scalability in mind.
          </p>
          <div className="flex gap-12">
            <div>
              <p className="text-3xl font-bold text-cyan-400">200+</p>
              <p className="text-gray-300 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">99%</p>
              <p className="text-gray-300 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full mx-auto"
        >
          <Lottie animationData={aboutAnimation} loop={true} />
        </motion.div>
      </div>

      <button
        onClick={handleScrollClick}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block"
        aria-label="Scroll to About"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-cyan-400 hover:text-cyan-500 transition duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
};

export default AboutSection;
