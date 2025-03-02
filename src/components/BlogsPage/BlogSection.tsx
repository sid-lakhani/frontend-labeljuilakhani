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
          `https://cms.labeljuilakhani.in/api/blogs?filters[isFeatured][$eq]=true&populate=*`
        );
        const featuredData = await featuredRes.json();

        if (featuredData.data && featuredData.data.length > 0) {
          setFeaturedBlog(featuredData.data[0]); // There is always only one featured blog
        }

        // Fetch Other Blogs
        const otherRes = await fetch(
          `https://cms.labeljuilakhani.in/api/blogs?filters[isFeatured][$eq]=false&populate=*`
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

  const imageUrl = `https://cms.labeljuilakhani.in${featuredBlog?.coverImage.url}`;

  return (
    <div className="min-h-screen w-full py-[5%] px-[5%] md:px-[10%] lg:px-[20%] pt-28 md:pt-40">
      <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-primary">
        The Craft Journal
      </p>
      <p className="text-[11vw] md:text-6xl lg:text-7xl font-playfair text-primary tracking-tighter mt-2 italic">
        <span className="">Art in </span>Every Thread
      </p>

      {/* Featured Blog */}
      <div className="w-full h-full md:h-[650px] lg:h-[700px] mt-8 md:mt-16 flex flex-col md:flex-row bg-tertiary text-quaternary">
        <img
          src={imageUrl}
          alt="featured-blog"
          className="w-full md:w-1/2 h-1/2 md:h-full object-cover bg-primary"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
        <div className="w-full py-4 md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-2 md:px-[5%] gap-2 md:gap-4 lg:gap-6">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.5em] font-montserrat font-medium">
            Featured
          </p>
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl">
            {featuredBlog?.Title}
          </h1>
          <p className="text-[10px] md:text-sm ml-1 tracking-[0.5em] uppercase font-montserrat font-medium">
            {featuredBlog?.BlogDate}
          </p>
          <p className="font-sen text-[10px] md:text-sm">
            {featuredBlog?.shortDescription}
          </p>
          <Link href={`/blogs/${featuredBlog?.slugUrl}`}>
            <button className="bg-quaternary text-tertiary border border-black/80 font-montserrat md:font-bold text-xs px-2 py-1 md:px-4 md:py-2 transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-quaternary">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Other Blogs */}
      <div className="grid grid-rows-1 md:grid-cols-2 gap-12 md:gap-4 lg:gap-8 mt-12 md:mt-16">
        {otherBlogs.map((post) => {
          const coverImageUrl = `https://cms.labeljuilakhani.in${post.coverImage.url}`;
          return (
            <div
              key={post.id}
              className="flex flex-col border border-primary/10"
            >
              <img
                src={coverImageUrl}
                alt="blog"
                className="w-full aspect-[100/133] object-cover"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <div className="p-4 md:p-8">
                <p className="text-primary text-xs md:text-sm md:mt-6 tracking-[0.5em] uppercase font-montserrat font-medium">
                  {post.BlogDate}
                </p>
                <h2 className="font-playfair text-4xl md:text-3xl lg:text-5xl text-primary my-2 md:mt-4 leading-[2.5rem]">
                  {post.Title}
                </h2>
                <p className="text-xs md:text-sm font-sen text-primary/60 md:mt-6">
                  By Jui Lakhani
                </p>
                <Link href={`/blogs/${post.slugUrl}`}>
                  <button className="bg-quaternary text-tertiary border border-primary/80 font-montserrat font-bold text-xs px-2 md:px-4 py-1 md:py-2 transition-all duration-300 ease-in-out hover:bg-tertiary hover:text-quaternary mt-4 md:mt-6">
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
