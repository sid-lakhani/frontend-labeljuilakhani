import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lookbook | Label Jui Lakhani",
  description: "Lookbook by Label Jui Lakhani",
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
