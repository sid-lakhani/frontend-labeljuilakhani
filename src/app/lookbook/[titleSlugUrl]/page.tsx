"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Collection {
  Title: string;
  titleSlugUrl: string;
  Images: {
    url: string;
  }[];
}

export default function CollectionPage() {
  const [collection, setCollection] = useState<Collection | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { titleSlugUrl } = useParams();

  useEffect(() => {
    if (!titleSlugUrl) return;

    const fetchCollection = async () => {
      try {
        const res = await fetch(
          `https://cms.labeljuilakhani.in/api/collections?filters[titleSlugUrl][$eq]=${titleSlugUrl}&populate=*`
        );
        const data = await res.json();
        if (data.data && data.data.length > 0) {
          setCollection(data.data[0]);
        } else {
          console.error(
            "No collection found for this titleSlugUrl:",
            titleSlugUrl
          );
        }
      } catch (error) {
        console.error("Error fetching collection data:", error);
      }
    };

    fetchCollection();
  }, [titleSlugUrl]);

  if (!collection || !collection.Images || collection.Images.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Collection not found or error fetching data.
      </p>
    );
  }

  const prevIndex =
    (currentIndex - 1 + collection.Images.length) % collection.Images.length;
  const nextIndex = (currentIndex + 1) % collection.Images.length;

  return (
    <>
      <Header />
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="h-screen md:h-[100vw] lg:h-screen flex flex-col items-center justify-center px-[5vw] md:px-[10vw] lg:px-[15vw] pt-20 md:pt-28"
      >
        {/* <div className="text-start w-full md:w-2/5 mb-4 md:mb-8">
          <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-primary">
            Lookbook
          </p>
        </div> */}

        {/* Image Carousel */}
        <div className="w-full md:w-2/3 lg:w-2/5 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {/* Previous Thumbnail (only for larger screens) */}
          <img
            src={`https://cms.labeljuilakhani.in${collection.Images[prevIndex].url}`}
            alt="Previous Image"
            className="hidden md:block w-[15vw] object-cover opacity-50 cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => setCurrentIndex(prevIndex)}
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />

          {/* Main Image */}
          <img
            src={`https://cms.labeljuilakhani.in${collection.Images[currentIndex].url}`}
            alt={collection.Title}
            className="hidden md:block md:w-[50vw] object-cover transition-opacity duration-500 ease-in-out"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
            fetchPriority="high"
          />

          {/* Main Image with Click Navigation */}
          <div
            className="md:hidden w-[80vw] relative cursor-pointer"
            onClick={(e) => {
              const { left, width } = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - left;
              if (clickX < width / 2) {
                setCurrentIndex(prevIndex);
              } else {
                setCurrentIndex(nextIndex);
              }
            }}
          >
            <img
              src={`https://cms.labeljuilakhani.in${collection.Images[currentIndex].url}`}
              alt={collection.Title}
              className="md:hidden w-full object-cover transition-opacity duration-500 ease-in-out"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              fetchPriority="high"
            />
          </div>

          {/* Next Thumbnail (only for larger screens) */}
          <img
            src={`https://cms.labeljuilakhani.in${collection.Images[nextIndex].url}`}
            alt="Next Image"
            className="hidden md:block w-[15vw] object-cover opacity-50 cursor-pointer hover:opacity-75 transition-opacity"
            onClick={() => setCurrentIndex(nextIndex)}
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>

        {/* Image Indicators */}
        <div className="mt-4 flex justify-center space-x-2">
          {collection.Images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-primary/40"
              }`}
            ></button>
          ))}
        </div>

        {/* Thumbnails for mobile */}
        <div className="mt-4 flex md:hidden w-full justify-center gap-4">
          <img
            src={`https://cms.labeljuilakhani.in${collection.Images[prevIndex].url}`}
            alt="Previous Image"
            className="w-[30vw] object-cover opacity-60 cursor-pointer"
            onClick={() => setCurrentIndex(prevIndex)}
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
          <img
            src={`https://cms.labeljuilakhani.in${collection.Images[nextIndex].url}`}
            alt="Next Image"
            className="w-[30vw] object-cover opacity-60 cursor-pointer"
            onClick={() => setCurrentIndex(nextIndex)}
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
