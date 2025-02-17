"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  const { slugUrl } = useParams(); // Access slugUrl from the dynamic route parameter

  useEffect(() => {
    if (!slugUrl) return; // If no slugUrl, do nothing

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/blogs?filters[slugUrl][$eq]=${slugUrl}&populate=*`
        );
        const data = await res.json();
        if (data.data && data.data.length > 0) {
          setBlog(data.data[0]); // Set blog data if found
        } else {
          console.error("No blog found for this slugUrl:", slugUrl);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [slugUrl]); // Re-run the effect when slugUrl changes

  if (!blog) {
    return (
      <p>Blog not found or error fetching data. Please try again later.</p>
    );
  }

  const imageUrl = `http://localhost:1337${blog.headImage.url}`;

  return (
    <>
      <Header />
      <div className="min-h-full py-[5%] px-[20%] pt-40">
        <div className="flex flex-col justify-center items-center">
          <img src={imageUrl} alt="blog" className="h-96 object-cover" />
          <div className="mt-8 text-center">
            <h1 className="text-5xl font-playfair text-black/80 mt-2">
              {blog.Title}
            </h1>
            <p className="text-sm text-black/60 mt-2">{blog.BlogDate}</p>
            <div className="mt-4">
              <p className="text-lg font-sen">{blog.BlogContent}</p>
            </div>
            <Link href="/blogs">
              <button className="mt-6 bg-quaternary text-tertiary border border-black/80 font-montserrat font-bold text-xs px-4 py-2 transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-quaternary">
                Back to Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
