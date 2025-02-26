import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lookbooks from "@/components/LookbookPage/Lookbooks";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Lookbooks | Label Jui Lakhani",
  description:
    "Explore our Lookbooks featuring the latest luxury ethnic fashion collections from Label Jui Lakhani.",
  url: "https://labeljuilakhani.in/lookbook",
  image: "/open-graph/lookbooks-thumbnail.jpg",
  keywords: [
    "Label Jui Lakhani Lookbooks",
    "Luxury Fashion Collection",
    "Indian Ethnic Wear",
    "Designer Lookbooks",
    "Designer Lehengas",
    "Handcrafted Outfits",
  ],
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
