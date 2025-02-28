"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface HomeData {
  HomeImage?: { url: string };
  Title?: string;
  Description?: string;
}

export default function HeroSection() {
  const [homeImage, setHomeImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("Evara");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const res = await fetch(
          `https://cms.labeljuilakhani.in/api/collections?filters[isLive][$eq]=true&populate=*`
        );
        const data = await res.json();
        const homeData: HomeData | undefined = data?.data?.[0];

        if (homeData?.HomeImage?.url) {
          setHomeImage(`https://cms.labeljuilakhani.in${homeData.HomeImage.url}`);
        }
        if (homeData?.Title) {
          setTitle(homeData.Title);
        }
        if (homeData?.Description) {
          setDescription(`The ${homeData.Description}`);
        }
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    }

    fetchHomeData();
  }, []);

  const titleCss =
            title === "Evara"
              ? "font-kenao text-5xl md:text-7xl lg:text-9xl"
              : title === "रास"
              ? "font-tillana text-7xl md:text-9xl lg:text-[144px] -mt-2"
              : "font-kenao";

  return (
    <div className="relative max-h-screen max-w-screen">
      {homeImage ? (
        <img
          src={homeImage}
          alt="Home Image"
          className="w-full h-screen object-cover"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
      ) : (
        <div className="w-full min-h-screen bg-primary"></div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-quaternary font-playfair bg-black/30">
        <p className={`font-normal tracking-tight leading-[0.9] uppercase ${titleCss}`}>
          {title}
        </p>
        <p className="italic text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[0.9]">
          {description || "The Wedding Edit ’24"}
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
