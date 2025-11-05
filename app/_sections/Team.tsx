"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import { smoothScrollTo } from "@/lib/smoothScrollTo";

const teamMembers = [
  {
    name: "Emily Brown",
    role: "UI/UX Designer",
    description:
      "Emily is a creative UI/UX designer with 6+ years of experience in creating user-friendly interfaces.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Williams",
    role: "CEO",
    description:
      "James is the visionary leader behind our company, with 10+ years of entrepreneurial success.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Robert Smith",
    role: "Lead Developer",
    description:
      "Robert is a full-stack expert specializing in modern frameworks, DevOps, and scalable solutions.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Brown",
    role: "UI/UX Designer",
    description:
      "Emily is a creative UI/UX designer with 6+ years of experience in creating user-friendly interfaces.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Williams",
    role: "CEO",
    description:
      "James is the visionary leader behind our company, with 10+ years of entrepreneurial success.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Robert Smith",
    role: "Lead Developer",
    description:
      "Robert is a full-stack expert specializing in modern frameworks, DevOps, and scalable solutions.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Brown",
    role: "UI/UX Designer",
    description:
      "Emily is a creative UI/UX designer with 6+ years of experience in creating user-friendly interfaces.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Williams",
    role: "CEO",
    description:
      "James is the visionary leader behind our company, with 10+ years of entrepreneurial success.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Robert Smith",
    role: "Lead Developer",
    description:
      "Robert is a full-stack expert specializing in modern frameworks, DevOps, and scalable solutions.",
    image: "/team/male.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamSection = () => {
  const handleScrollClick = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      smoothScrollTo(nextSection.offsetTop, 100);
    }
  };

  return (
    <section
      id="team"
      className="relative w-full min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-950 text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          className="text-cyan-100/80 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet the talented individuals who drive our success.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
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

export default TeamSection;
