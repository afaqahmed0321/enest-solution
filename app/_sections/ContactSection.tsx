"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/public/animations/contact.json";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="snap-start relative w-full min-h-screen bg-black text-white px-6 md:px-20 py-24 flex items-center justify-center overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl w-full items-center">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-2 text-cyan-500">Contact Us</h2>
          <p className="text-gray-300 mb-10">
            Get in touch with us for any questions or inquiries.
          </p>

          <form className="space-y-4 mb-10">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold w-full transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-400" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-400" />
              <span>Info@company.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" />
              <span>123 Business Rd., Business City, NY 54321</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
