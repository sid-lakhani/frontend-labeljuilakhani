import HeroSection from "@/components/AboutUsPage/HeroSection";
import StatsSection from "@/components/AboutUsPage/StatsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About | Label Jui Lakhani",
  description:
    "Jui Lakhani is all about blending contemporary aesthetics with cultural heritage, creating timeless collections with elegance and craftsmanship.",
  url: "https://labeljuilakhani.in/about",
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
