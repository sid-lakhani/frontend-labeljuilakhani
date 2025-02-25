"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
          `http://localhost:1337/api/collections?filters[titleSlugUrl][$eq]=${titleSlugUrl}&populate=*`
        );
        const data = await res.json();
        if (data.data && data.data.length > 0) {
          setCollection(data.data[0]);
        } else {
          console.error("No collection found for this titleSlugUrl:", titleSlugUrl);
        }
      } catch (error) {
        console.error("Error fetching collection data:", error);
      }
    };

    fetchCollection();
  }, [titleSlugUrl]);

  if (!collection || !collection.Images || collection.Images.length === 0) {
    return <p className="text-center text-gray-500">Collection not found or error fetching data.</p>;
  }

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? collection.Images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === collection.Images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center px-[5%] md:px-[10%] lg:px-[20%] pt-28 md:pt-40">
        {/* Headings at the Top */}
        <div className="text-start w-full md:w-2/5 mb-4 md:mb-8">
          <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-primary">
            Lookbook
          </p>
        </div>

        {/* Centered Carousel */}
        <div className="relative flex flex-col items-center w-full md:w-2/5">
          <div className="relative w-full">
            <img
              src={`http://localhost:1337${collection.Images[currentIndex].url}`}
              alt={collection.Title}
              className="w-full object-cover transition-opacity duration-500 ease-in-out"
            />
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute -left-[20%] top-1/2 transform -translate-y-1/2 bg-quaternary/50 p-1 rounded-md border border-black"
          >
            <ChevronLeft className="w-[20px] md:w-[25px] lg:w-[30px] h-[20px] md:h-[25px] lg:h-[30px] text-black" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute -right-[20%] top-1/2 transform -translate-y-1/2 bg-quaternary/50 p-1 rounded-md border border-black"
          >
            <ChevronRight className="w-[20px] md:w-[25px] lg:w-[30px] h-[20px] md:h-[25px] lg:h-[30px] text-black" />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="mt-4 flex justify-center space-x-2">
          {collection.Images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
