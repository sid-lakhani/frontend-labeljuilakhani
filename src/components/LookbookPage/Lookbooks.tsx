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
          `https://cms.labeljuilakhani.in/api/collections?populate=*`
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
    <div className="min-h-screen w-full py-[5%] px-[5%] md:px-[5%] lg:px-[15%] pt-32 md:pt-40">
      <div className="text-start mb-4 md:mb-8 lg:mb-12 md:px-[5%]">
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-primary">
          Lookbook
        </p>
        <p className="text-[10vw] md:text-5xl lg:text-7xl font-playfair text-primary tracking-tight mt-2 leading-tight italic">
          Stories Woven in Every Design
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 lg:gap-8">
        {collections.map((collection) => {
          const ImageUrl = `https://cms.labeljuilakhani.in${collection.HomeImage.url}`;
          const titleCss =
            collection.Title === "Evara"
              ? "font-kenao text-3xl md:text-4xl lg:text-5xl"
              : collection.Title === "रास"
              ? "font-tillana text-5xl md:text-5xl lg:text-6xl -mt-2"
              : "font-kenao";

          return (
            <div
              key={collection.id}
              className="bg-inherit shadow-md p-8 pb-4 rounded-md flex flex-col relative"
            >
              <img
                src={ImageUrl}
                alt={collection.Title}
                className="w-full h-[40vh] md:h-[40vh] object-cover rounded-md"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
              <div className="flex flex-col justify-center mt-4 pr-16 gap-2">
                <h2
                  className={`uppercase text-primary leading-tight ${titleCss}`}
                >
                  {collection.Title}
                </h2>
                <p className="font-sen text-base text-black/70 -mt-2 leading-relaxed">
                  {collection.Description}
                </p>
                <p className="text-sm text-black/60">{collection.Date}</p>
              </div>
              <a
                href={`/lookbook/${collection.titleSlugUrl}`}
                className="absolute bottom-4 right-4 text-sm font-semibold uppercase tracking-wide text-primary border border-primary px-4 py-2 hover:bg-primary hover:text-white transition rounded-md"
              >
                Discover
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
