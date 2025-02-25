"use client";
import React, { useEffect, useState } from "react";

interface Collection {
  id: number;
  Title: string;
  Description: string;
  titleSlugUrl: string;
  Date: string;
  HomeImage: {
    url: string;
  };
}

export default function Lookbooks() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/collections?populate=*"
        );
        const data = await res.json();

        if (data.data) {
          setCollections(data.data);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="min-h-screen w-screen py-[5%] px-[5%] md:px-[10%] lg:px-[20%] pt-28 md:pt-40">
      <div className="text-start mb-16">
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-primary">
          Lookbooks
        </p>
        <p className="text-[40px] md:text-7xl lg:text-8xl font-playfair text-primary tracking-tighter mt-2">
          Cultural Fashion Fusion
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {collections.map((collection, index) => {
            const ImageUrl = `http://localhost:1337${collection.HomeImage.url}`;
          return (
            <div
              key={collection.id}
              className={`flex flex-row gap-8 items-center ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div className="relative group">
                <img
                  src={ImageUrl}
                  alt={collection.Title}
                  className="h-[400px] w-[300px] md:h-[500px] md:w-[350px] lg:h-[700px] lg:w-[500px] object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-sm text-gray-500">{collection.Date}</p>
                <h2 className="text-3xl md:text-4xl lg:text-7xl font-playfair text-primary mt-2">
                  {collection.Title}
                </h2>
                <p className="text-gray-600 mt-4">{collection.Description}</p>
                <a
                  href={`/lookbook/${collection.titleSlugUrl}`}
                  className="w-auto mt-6 inline-block text-sm font-medium uppercase tracking-wide text-primary border border-primary px-6 py-2 hover:bg-primary hover:text-white transition"
                >
                  Discover Fusion
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
