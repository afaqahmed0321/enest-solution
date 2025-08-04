"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-6 left-6 right-6 z-50 max-w-7xl mx-auto px-6 md:px-8 py-4 
                   flex items-center justify-between 
                   bg-cyan-300/20 backdrop-blur-md 
                   rounded-lg shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white font-extrabold text-xl tracking-wide">
          CODYXA
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-medium text-sm">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-cyan-400 transition duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-cyan-400 transition duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={toggleMenu}
              onKeyDown={(e) => {
                if (e.key === "Escape") toggleMenu();
              }}
              role="button"
              tabIndex={0}
              aria-label="Close menu"
            />

            <motion.div
              className="absolute top-20 right-6 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-cyan-400/10 backdrop-blur-md border border-cyan-400/20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              style={{ transformOrigin: "top right" }}
            >
              {menuItems.map((item, index) => {
                const angle = index * 90 - 45;
                const radius = 80;
                const radian = (angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={toggleMenu}
                    className="absolute w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
                               bg-cyan-400/20 backdrop-blur-md rounded-full
                               text-white text-xs font-medium
                               hover:bg-cyan-400/40 hover:text-cyan-100
                               transition-all duration-300 cursor-pointer
                               border border-cyan-400/30"
                    style={{
                      left: `calc(50% + ${x}px - 1.5rem)`,
                      top: `calc(50% + ${y}px - 1.5rem)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  >
                    <span className="text-center leading-tight">
                      {item.name}
                    </span>
                  </motion.a>
                );
              })}

              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                              w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center
                              bg-cyan-400/30 backdrop-blur-md rounded-full
                              border-2 border-cyan-400/50"
              >
                <span className="text-white font-bold text-xs sm:text-sm">
                  CODYXA
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
