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
  } [];
}

export default function CollectionPage() {
  const [collection, setCollection] = useState<Collection | null>(null);
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

  if (!collection) {
    return (
      <p>
        Collection not found or error fetching data. Please try again later.
      </p>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center pt-28 md:pt-40">
        <h1 className="text-4xl font-bold mb-4">{collection.Title}</h1>
        {collection.Images?.length > 0 && (
          <img
            src={`http://localhost:1337${collection.Images[0].url}`} 
            alt={collection.Title}
            className="w-40 max-w-4xl rounded-lg shadow-lg"
          />
        )}
      </div>
      <Footer />
    </>
  );
}
