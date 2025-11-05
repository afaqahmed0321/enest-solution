"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

export interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const TeamCard = ({
  name,
  role,
  description,
  image,
  linkedin,
  twitter,
}: TeamCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable
        glareMaxOpacity={0.15}
        className="rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#0a0e1a] border border-white/10 p-6 w-full max-w-sm text-white backdrop-blur-md shadow-xl"
      >
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative w-48 h-60 rounded-2xl overflow-hidden mb-6">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Name */}
          <h3 className="text-3xl font-bold mb-1">{name}</h3>

          {/* Role */}
          <p className="text-cyan-400 text-lg font-medium mb-4">{role}</p>

          {/* Description */}
          <p className="text-gray-300 text-sm text-center mb-6">
            {description}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default TeamCard;
