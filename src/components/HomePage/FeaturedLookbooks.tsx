"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Collection {
  Title: string;
  titleSlugUrl: string;
  CoverImageLookbookIfLive: {
    url: string;
  };
}

export default function FeaturedLookbooks() {
  const [collection, setCollection] = useState<Collection | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch(
          `https://cms.labeljuilakhani.in/api/collections?filters[isLive][$eq]=true&populate=*`
        );
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setCollection(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    fetchCollection();
  }, []);

  const imageUrl = collection
    ? `https://cms.labeljuilakhani.in${collection.CoverImageLookbookIfLive.url}`
    : "";

  return (
    <div
      className={`relative h-[200px] md:h-[400px] lg:h-[600px] bg-secondary text-7xl flex items-center justify-center text-quaternary`}
    >
      {collection ? (
        <Link
          href={`/lookbook/${collection.titleSlugUrl}`}
          className="relative w-full h-full"
          draggable={false}
        >
          <img
            src={imageUrl}
            alt={collection.Title}
            className="w-full h-full object-cover"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
          <img
            src={"/arrow.png"}
            className="absolute top-[60%] lg:top-[70%] right-[10%] -translate-y-1/2 z-10 w-16 md:w-32 lg:w-40"
          />
        </Link>
      ) : (
        <p className="font-playfair italic text-quaternary p-4 text-2xl md:text-4xl lg:text-6xl">
          No featured collection available.
        </p>
      )}
    </div>
  );
}
