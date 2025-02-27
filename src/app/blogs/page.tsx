import BlogSection from "@/components/BlogsPage/BlogSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Blogs | Label Jui Lakhani",
  description:
    "Discover the world of Jui Lakhani through our blogs – a space for inspiration and insights into our cultural artforms.",
  url: "https://labeljuilakhani.in/blogs",
  keywords: [
    "Label Jui Lakhani Blog",
    "Fashion Trends",
    "Ethnic Wear Insights",
    "Designer Fashion",
    "Indian Clothing",
    "Wedding Fashion",
  ],
});

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <BlogSection />
      <Footer />
    </div>
  );
}
