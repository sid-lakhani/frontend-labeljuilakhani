import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/HomePage/AboutSection";
import ContactSection from "@/components/HomePage/ContactSection";
import FeaturedLookbooks from "@/components/HomePage/FeaturedLookbooks";
import HeroSection from "@/components/HomePage/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Label Jui Lakhani",
  description: "Welcome to Label Jui Lakhani",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-quaternary">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedLookbooks />
      <ContactSection />
      <Footer />
    </div>
  );
}
