import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedBlogs from "@/components/HomePage/FeaturedBlogs";
import FeaturedLookbooks from "@/components/HomePage/FeaturedLookbooks";
import HomeImage from "@/components/HomePage/HomeImage"; // Import the new component
import { Moontime } from "@/lib/font";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Label Jui Lakhani",
  description: "Welcome to Label Jui Lakhani",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <HomeImage />
      <div
        className={`h-[100dvh] bg-white ${Moontime.className} flex items-center justify-center text-primary text-7xl`}
      >
        text content goes here
      </div>
      <FeaturedLookbooks />
      <FeaturedBlogs />
      <Footer />
    </div>
  );
}
