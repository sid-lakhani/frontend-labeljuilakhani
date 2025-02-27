import HeroSection from "@/components/AboutUsPage/HeroSection";
import StatsSection from "@/components/AboutUsPage/StatsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About | Label Jui Lakhani",
  description:
    "Discover the story behind Label Jui Lakhani and our commitment to luxury ethnic fashion.",
  url: "https://labeljuilakhani.in/about",
  keywords: [
    "Label Jui Lakhani",
    "Luxury Ethnic Fashion",
    "About Us",
    "Our Story",
    "Indian Fashion",
    "Handmade Couture",
  ],
});

export default function Page() {
  return (
    <div className="flex flex-col min-h-fit min-w-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
