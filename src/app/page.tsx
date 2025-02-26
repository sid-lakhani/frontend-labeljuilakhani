import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/HomePage/AboutSection";
import ContactSection from "@/components/HomePage/ContactSection";
import FeaturedLookbooks from "@/components/HomePage/FeaturedLookbooks";
import HeroSection from "@/components/HomePage/HeroSection";
import Testimonials from "@/components/HomePage/Testimonials";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen ">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedLookbooks />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
