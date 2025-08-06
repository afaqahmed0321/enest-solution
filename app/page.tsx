"use client";
import Footer from "@/components/Footer";
import About from "./_sections/About";
import ContactSection from "./_sections/ContactSection";
import HeroSection from "./_sections/HeroSection";
import Portfolio from "./_sections/Portfolio";
import ServicesSection from "./_sections/ServicesSection";
import TeamSection from "./_sections/Team";
import { useSmoothFullPageScroll } from "@/hooks/useSmoothFullPageScroll";

const sections = [
  "hero",
  "about",
  "team",
  "services",
  "portfolio",
  "contact",
  "footer",
];

export default function Home() {
  useSmoothFullPageScroll(sections, 300);

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <About />
      <TeamSection />
      <ServicesSection />
      <Portfolio />
      <ContactSection />
      <Footer />
    </main>
  );
}
