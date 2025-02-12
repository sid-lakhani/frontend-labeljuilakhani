import HeroSection from "@/components/AboutUsPage/HeroSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Label Jui Lakhani",
  description: "About Label Jui Lakhani",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
