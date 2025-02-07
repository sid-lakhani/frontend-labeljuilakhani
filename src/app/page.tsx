import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedBlogs from "@/components/HomePage/FeaturedBlogs";
import FeaturedLookbooks from "@/components/HomePage/FeaturedLookbooks";
import { Moontime } from "@/lib/font";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Label Jui Lakhani",
  description: "Welcome to Label Jui Lakhani",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="max-h-screen flex">
        <Image
          src="/Home-1.png"
          alt="home-1"
          width={697}
          height={978}
          className="w-1/2 object-cover"
        />
        <Image
          src="/Home-2.png"
          alt="home-2"
          width={743}
          height={978}
          className="w-1/2 object-cover"
        />
      </div>
      <div
        className={`h-[28dvh] bg-white ${Moontime.className} flex items-center justify-center text-primary text-7xl`}
      >
        crafted with love
      </div>
      <FeaturedLookbooks />
      <div
        className={`h-[28dvh] bg-white ${Moontime.className} flex items-center justify-center text-primary text-7xl`}
      >
        Our Inspiration
      </div>

      <FeaturedBlogs />
      <Footer />
    </div>
  );
}
