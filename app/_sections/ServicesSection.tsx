"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  ChevronDown,
  Monitor,
  Code2,
  Smartphone,
  Megaphone,
  BrainCircuit,
} from "lucide-react";
import { useAutoScroll } from "@/hooks/useAutoScroll";

const services = [
  {
    title: "UI/UX Design",
    icon: <Monitor className="h-10 w-10 text-white" />,
    description: "Crafting visually appealing and user-friendly interfaces.",
  },
  {
    title: "Web Development",
    icon: <Code2 className="h-10 w-10 text-white" />,
    description: "Building responsive and modern websites.",
  },
  {
    title: "App Development",
    icon: <Smartphone className="h-10 w-10 text-white" />,
    description: "Creating mobile applications for various platforms.",
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="h-10 w-10 text-white" />,
    description: "Strategies to enhance your online presence.",
  },
  {
    title: "AI Automation",
    icon: <BrainCircuit className="h-10 w-10 text-white" />,
    description: "Integrating intelligent systems to automate business tasks.",
  },
];

const ServicesSection = () => {
  const { scrollToNext } = useAutoScroll({
    currentSectionId: "services",
    previousSectionId: "team",
    nextSectionId: "portfolio",
  });

  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-black text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-cyan-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore the wide range of services we offer to our clients.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {services.map((service, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareColor="cyan"
              glareMaxOpacity={0.3}
              scale={1.02}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm rounded-2xl p-[2px] bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-[0_0_30px_rgba(0,255,255,0.6)] hover:shadow-cyan-400/80 transition duration-300"
              >
                <div className="rounded-2xl p-6 h-full text-center backdrop-blur-md bg-white/10">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button
          type="button"
          onClick={scrollToNext}
          className="animate-bounce bg-cyan-400 rounded-full p-3 hover:bg-cyan-500 transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
