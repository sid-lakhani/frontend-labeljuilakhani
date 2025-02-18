"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  Title: string;
  isFeatured: boolean;
  shortDescription: string | null;
  BlogDate: string;
  slugUrl: string;
  coverImage: {
    url: string;
  };
}

export default function BlogSection() {
  const [featuredBlog, setFeaturedBlog] = useState<Blog | null>(null);
  const [otherBlogs, setOtherBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch Featured Blog
        const featuredRes = await fetch(
          "http://localhost:1337/api/blogs?filters[isFeatured][$eq]=true&populate=*"
        );
        const featuredData = await featuredRes.json();

        if (featuredData.data && featuredData.data.length > 0) {
          setFeaturedBlog(featuredData.data[0]); // There is always only one featured blog
        }

        // Fetch Other Blogs
        const otherRes = await fetch(
          "http://localhost:1337/api/blogs?filters[isFeatured][$eq]=false&populate=*"
        );
        const otherData = await otherRes.json();

        if (otherData.data) {
          setOtherBlogs(otherData.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const imageUrl = `http://localhost:1337${featuredBlog?.coverImage.url}`;

  return (
    <div className="min-h-screen w-screen py-[5%] px-[20%] pt-40">
      <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
        Our Blog
      </p>
      <p className="text-8xl font-playfair text-black/80 tracking-tighter mt-2">
        Editorials
      </p>

      {/* Featured Blog */}
      <div className="w-full h-[700px] mt-16 flex flex-row bg-tertiary text-quaternary">
        <img
          src={imageUrl}
          alt="featured-blog"
          className="w-1/2 h-full object-cover bg-primary"
        />
        <div className="w-1/2 h-full flex flex-col justify-center px-[5%] gap-4">
          <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium">
            Featured
          </p>
          <h1 className="font-playfair text-5xl">{featuredBlog?.Title}</h1>
          <p className="text-sm ml-1 tracking-[0.5em] uppercase font-montserrat font-medium">
            {featuredBlog?.BlogDate}
          </p>
          <p className="font-sen text-sm">{featuredBlog?.shortDescription}</p>
          <Link href={`/blogs/${featuredBlog?.slugUrl}`}>
            <button className="bg-quaternary text-tertiary border border-black/80 font-montserrat font-bold text-xs px-4 py-2 transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-quaternary">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Other Blogs */}
      <div className="grid grid-cols-2 gap-8 mt-16">
        {otherBlogs.map((post) => {
          const postImageUrl = `http://localhost:1337${post.coverImage.url}`;
          return (
            <div key={post.id} className="flex flex-col border border-black/10">
              <img
                src={postImageUrl}
                alt="blog"
                className="w-full h-full object-contain"
              />
              <div className="p-8">
                <p className="text-sm mt-6 tracking-[0.5em] uppercase font-montserrat font-medium">
                  {post.BlogDate}
                </p>
                <h2 className="font-playfair text-5xl text-primary mt-4 leading-[3.5rem]">
                  {post.Title}
                </h2>
                <p className="text-sm font-sen text-black/60 mt-6">
                  By Jui Lakhani
                </p>
                <Link href={`/blogs/${post.slugUrl}`}>
                  <button className="bg-quaternary text-tertiary border border-black/80 font-montserrat font-bold text-xs px-4 py-2 transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-quaternary mt-6">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
