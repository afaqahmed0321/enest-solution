import Footer from "@/components/Footer";
import About from "./_sections/About";
import ContactSection from "./_sections/ContactSection";
import HeroSection from "./_sections/HeroSection";
import Portfolio from "./_sections/Portfolio";
import ServicesSection from "./_sections/ServicesSection";
import TeamSection from "./_sections/Team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <TeamSection />
      <ServicesSection />
      <Portfolio />
      <ContactSection />
      <Footer />
    </>
  );
}
