"use client";

import { useEffect, useState } from "react";

export default function HomeImage() {
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
    <div className="max-h-screen max-w-screen flex">
      {homeImage ? (
        <img
          src={homeImage}
          alt="Home Image"
          width={1440}
          height={1080}
          className="w-full object-cover"
        />
      ) : (
        <p className="w-full min-h-screen flex items-center justify-center">Loading...</p>
      )}
    </div>
  );
}
