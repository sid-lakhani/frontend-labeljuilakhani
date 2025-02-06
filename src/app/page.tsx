import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

      <div className="min-h-screen flex items-center justify-center">
        Content goes here
      </div>

      <Footer />
    </div>
  );
}
