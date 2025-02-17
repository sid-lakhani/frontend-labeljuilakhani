import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "Apr 8, 2025",
    title: "Luxury Visions: Evoking Emotion through Exquisite Imagery",
    author: "By Jui Lakhani",
    image: "/logo.png",
  },
  {
    id: 2,
    date: "Apr 8, 2025",
    title: "Luxury Visions: Evoking Emotion through Exquisite Imagery",
    author: "By Jui Lakhani",
    image: "/logo.png",
  },
  {
    id: 3,
    date: "Apr 8, 2025",
    title: "Luxury Visions: Evoking Emotion through Exquisite Imagery",
    author: "By Jui Lakhani",
    image: "/logo.png",
  },
  {
    id: 4,
    date: "Apr 8, 2025",
    title: "Luxury Visions: Evoking Emotion through Exquisite Imagery",
    author: "By Jui Lakhani",
    image: "/logo.png",
  },
];

export default function BlogSection() {
  return (
    <div className="min-h-screen w-screen py-[5%] px-[20%] pt-40">
      <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
        Our Blog
      </p>
      <p className="text-8xl font-playfair text-black/80 tracking-tighter mt-2">
        Editorials
      </p>
      <div className="w-full h-[700px] mt-16 flex flex-row bg-tertiary text-quaternary">
        <Image
          src={"/logo.png"}
          alt="featured-blog"
          width={400}
          height={600}
          className="w-1/2 h-full object-cover bg-primary"
        />
        <div className="w-1/2 h-full flex flex-col justify-center px-[5%] gap-4">
          <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium">
            Featured
          </p>
          <h1 className="font-playfair text-5xl">
            Iconic High-End Fashion Houses and Their Impact on Global Trends
          </h1>
          <p className="text-sm ml-1 tracking-[0.5em] uppercase font-montserrat font-medium">
            Feb 17, 2025
          </p>
          <p className="font-sen text-sm">
            Founded on a love for visual storytelling, Chloe Laurent blends
            creativity and precision in all our work. We deliver bespoke
            photography solutions that resonate and inspire. Join us on a
            journey where every image tells a compelling story.
          </p>
          <Link href="/blogs/1">
            <button className="bg-quaternary text-tertiary border border-black/80 font-montserrat font-bold text-xs px-4 py-2 ">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-16">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col border border-black/20"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={600}
              className="w-full object-cover bg-primary"
            />
            <div className="p-8">
              <p className="text-sm mt-6 tracking-[0.5em] uppercase font-montserrat font-medium">
                {post.date}
              </p>
              <h2 className="font-playfair text-5xl text-primary mt-4 leading-[3.5rem]">
                {post.title}
              </h2>
              <p className="text-sm font-sen text-black/60 mt-6">
                {post.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
