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
          width={1440}
          height={1080}
          className="w-full h-screen object-cover"
        />
      ) : (
        <div className="w-full min-h-screen bg-primary"></div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-playfair">
        <p className="italic text-8xl tracking-tighter leading-[0.9]">
          Celebrated Couture
        </p>
        <p className="text-9xl font-normal tracking-tight leading-[0.9] uppercase">
          Ethnic Elegance
        </p>
        <p className="text-9xl font-normal tracking-tight leading-[0.9] uppercase">
          <span className="italic text-8xl">&</span> Design House
        </p>
        <Link href={"/customs"}>
          <button className="mt-8 px-16 py-4 border border-white text-white font-montserrat font-bold text-sm rounded-full uppercase hover:underline">
            Book a call
          </button>
        </Link>
      </div>
    </div>
  );
}
