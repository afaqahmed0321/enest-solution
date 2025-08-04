"use client";

import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-950 text-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">CODYXA</h3>
          <p className="text-white">
            Your idea, my code — delivering modern digital solutions across
            mobile, web, AI, and automation.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-white">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-4 text-white">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-white" /> +1 (234) 567-890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white" /> info@codelancr.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white" /> Business City, NY 54321
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white hover:bg-cyan-600 transition p-2 rounded-full"
            >
              <Facebook className="h-5 w-5 text-cyan-500" />
            </a>
            <a
              href="#"
              className="bg-white hover:bg-cyan-600 transition p-2 rounded-full"
            >
              <Twitter className="h-5 w-5 text-cyan-500" />
            </a>
            <a
              href="#"
              className="bg-white hover:bg-cyan-600 transition p-2 rounded-full"
            >
              <Linkedin className="h-5 w-5 text-cyan-500" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-sm text-white border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Codyxa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
