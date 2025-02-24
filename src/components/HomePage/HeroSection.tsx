"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [homeImage, setHomeImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHomeImage() {
      try {
        const res = await fetch(
          "http://localhost:1337/api/collections?filters[isLive][$eq]=true&populate=*"
        );
        const data = await res.json();
        const imageUrl = data?.data?.[0]?.HomePageIfLive?.url;

        if (imageUrl) {
          setHomeImage(`http://localhost:1337${imageUrl}`);
        }
      } catch (error) {
        console.error("Error fetching home image:", error);
      }
    }

    fetchHomeImage();
  }, []);

  return (
    <div className="relative max-h-screen max-w-screen">
      {homeImage ? (
        <img
          src={homeImage}
          alt="Home Image"
          className="w-full h-screen object-cover"
        />
      ) : (
        <div className="w-full min-h-screen bg-primary"></div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-quaternary font-playfair bg-black/30">
        <p className="text-5xl font-kenao md:text-7xl lg:text-9xl font-normal tracking-tight leading-[0.9] uppercase">
          Evara
        </p>
        <p className="italic text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[0.9]">
          The Wedding Edit ’24
        </p>
        <Link href={"/lookbook"}>
          <button className="mt-2 md:mt-4 lg:mt-8 px-6 lg:px-12 py-2 lg:py-4 border border-quaternary text-quaternary font-montserrat font-bold text-xs md:text-[10px] lg:text-sm rounded-full uppercase hover:underline">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}
