"use client";

import { useEffect, useState } from "react";

interface Collection {
  name: string;
  description: string | null;
  CoverImageLookbook: {
    url: string;
  };
}

export default function FeaturedLookbooks() {
  const [collection, setCollection] = useState<Collection | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch(
          "http://10.0.0.54:1337/api/collections?populate=*"
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
    ? `http://10.0.0.54:1337${collection.CoverImageLookbook.url}`
    : "";

  return (
    <div
      className={`h-[30dvh] lg:h-[50dvh] bg-secondary text-7xl flex items-center justify-center text-white`}
    >
      {collection ? (
        // If collection data is available, show the image
        <img
          src={imageUrl}
          alt={collection.name}
          className="w-full h-full object-contain"
        />
      ) : (
        // If no collection data, display fallback content
        <p className="font-playfair italic text-quaternary p-4 text-2xl md:text-4xl lg:text-6xl">No featured collection available.</p>
      )}
    </div>
  );
}
