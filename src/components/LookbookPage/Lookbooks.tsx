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
    <div className="min-h-screen w-screen py-[5%] px-[5%] md:px-[10%] lg:px-[25%] pt-28 md:pt-40">
      <div className="text-start mb-16">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-montserrat font-semibold text-primary">
          Lookbooks
        </p>
        <p className="text-5xl md:text-6xl lg:text-7xl font-playfair text-primary tracking-tight mt-2 leading-tight">
          Stories Woven in Fabric
        </p>
      </div>

      <div className="flex flex-col gap-28 md:gap-20">
        {collections.map((collection, index) => {
          const ImageUrl = `http://localhost:1337${collection.HomeImage.url}`;
          return (
            <div
              key={collection.id}
              className={`flex flex-col md:flex-row md:justify-evenly lg:justify-normal gap-8 md:gap-20 md:items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative group">
                <img
                  src={ImageUrl}
                  alt={collection.Title}
                  className="h-auto w-full md:h-[500px] md:w-[350px] lg:h-[650px] lg:w-[450px] object-cover"
                />
              </div>

              <div className="w-auto flex flex-col justify-evenly text-left">
                <p className="text-sm md:text-base text-black/60">
                  {collection.Date}
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-primary mt-2 leading-tight">
                  {collection.Title}
                </h2>
                <p className="font-sen text-sm md:text-base lg:text-lg text-black/70 mt-4 leading-relaxed">
                  {collection.Description}
                </p>
                <a
                  href={`/lookbook/${collection.titleSlugUrl}`}
                  className="w-fit text-center mt-6 inline-block text-sm md:text-base font-semibold uppercase tracking-wide text-primary border border-primary px-6 py-2 hover:bg-primary hover:text-white transition rounded-md"
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
