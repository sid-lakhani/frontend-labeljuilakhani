import BlogSection from "@/components/BlogsPage/BlogSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Blog | Label Jui Lakhani",
  description:
    "Read the latest articles on fashion trends, ethnic wear, and behind-the-scenes stories at Label Jui Lakhani.",
  url: "https://labeljuilakhani.in/blogs",
  image: "/open-graph/blog-thumbnail.jpg",
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
