import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lookbooks from "@/components/LookbookPage/Lookbooks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lookbook | Label Jui Lakhani",
  description: "Lookbook by Label Jui Lakhani",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <Lookbooks />
      <Footer />
    </div>
  );
}
