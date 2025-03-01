import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lookbooks from "@/components/LookbookPage/Lookbooks";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Lookbook | Label Jui Lakhani",
  description:
    "Explore the lookbooks of Jui Lakhani’s collections – curated showcase of timeless pieces.",
  url: "https://labeljuilakhani.in/lookbook",
});

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <Lookbooks />
      <Footer />
    </div>
  );
}
