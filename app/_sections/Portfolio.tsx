"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce site with payment integration and admin dashboard.",
    image: "/portfolio/ecommerce.png",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    link: "https://example.com/ecommerce",
  },
  {
    title: "AI Chatbot",
    description:
      "AI-powered chatbot for customer support with real-time NLP processing.",
    image: "/portfolio/chatbot.png",
    technologies: ["FastAPI", "OpenAI", "Socket.IO", "React"],
    link: "https://example.com/ai-chatbot",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with smooth animations and contact form integration.",
    image: "/portfolio/portfolio.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    link: "https://example.com/portfolio",
  },
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce site with payment integration and admin dashboard.",
    image: "/portfolio/ecommerce.png",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    link: "https://example.com/ecommerce",
  },
  {
    title: "AI Chatbot",
    description:
      "AI-powered chatbot for customer support with real-time NLP processing.",
    image: "/portfolio/chatbot.png",
    technologies: ["FastAPI", "OpenAI", "Socket.IO", "React"],
    link: "https://example.com/ai-chatbot",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with smooth animations and contact form integration.",
    image: "/portfolio/portfolio.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    link: "https://example.com/portfolio",
  },
];

const PortfolioSection = () => {
  const { scrollToNext } = useAutoScroll({
    currentSectionId: "portfolio",
    previousSectionId: "services",
    nextSectionId: "contact",
  });

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-950 text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </motion.h2>

        <motion.p
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore some of our featured projects and solutions.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0f172a] to-[#0a0e1a] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black text-cyan-300 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Visit Project →
                </a>
              </div>
            </motion.div>
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

export default PortfolioSection;
