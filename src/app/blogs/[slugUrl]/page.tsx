"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/BlogsPage/MarkdownRenderer";

interface Blog {
  id: number;
  Title: string;
  BlogDate: string;
  BlogContent: string;
  slugUrl: string;
  headImage: {
    url: string;
  };
}

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { slugUrl } = useParams();

  useEffect(() => {
    if (!slugUrl) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://cms.labeljuilakhani/api/blogs?filters[slugUrl][$eq]=${slugUrl}&populate=*`
        );
        const data = await res.json();
        if (data.data && data.data.length > 0) {
          setBlog(data.data[0]);
        } else {
          console.error("No blog found for this slugUrl:", slugUrl);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [slugUrl]);

  if (!blog) {
    return (
      <p>Blog not found or error fetching data. Please try again later.</p>
    );
  }

  const imageUrl = `https://cms.labeljuilakhani${blog.headImage.url}`;

  return (
    <>
      <Header />
      <div className="min-h-full py-[5%] px-[5%] md:px-[10%] lg:px-[20%] pt-28 md:pt-40">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-primary mt-2">
            {blog.Title}
          </h1>
          <div className="flex flex-row justify-start gap-8 text-sm text-primary/70">
            <p>{blog.BlogDate}</p>
            <p>Jui Lakhani</p>
          </div>
          <img src={imageUrl} alt="blog" className="w-full object-contain" />
          <MarkdownRenderer content={blog.BlogContent} />
          <Link href="/blogs">
            <button className="mb-8 bg-quaternary text-tertiary border border-primary/80 font-montserrat font-bold text-xs px-4 py-2 transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-quaternary">
              Back to Blogs
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
