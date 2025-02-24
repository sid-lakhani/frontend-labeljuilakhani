'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface Collection {
  HomePageContactIfLive: {
    url: string;
  };
}

export default function ContactSection() {
  const [collection, setCollection] = useState<Collection | null>(null);
  
    useEffect(() => {
      const fetchCollection = async () => {
        try {
          const response = await fetch(
            "http://localhost:1337/api/collections?filters[isLive][$eq]=true&populate=*"
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
      ? `http://localhost:1337${collection.HomePageContactIfLive.url}`
      : "";


  return (
    <div className="h-fit px-[5%] md:px-[10%] lg:px-[5%] flex flex-col md:flex-row items-center justify-center my-12 md:my-20 gap-4 md:gap-8 lg:gap-24">
      {collection? (

        <img
        src={imageUrl}
        alt="Contact"
        className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] object-cover bg-primary"
        />
      ) : (
        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] bg-primary"></div>
      )}
      <div className="text-center md:text-left text-primary tracking-tighter max-w-xl">
        <p className="text-2xl md:text-3xl lg:text-5xl font-playfair ">
          Explore <span className="text-secondary">Indian folk</span>
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-playfair ">
          couture: vibrant textiles,
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-playfair ">
          intricate embroidery.
        </p>

        <p className="mt-4 md:mt-8 font-sen text-sm md:text-base lg:text-lg text-black/60 tracking-tight">
          Have questions, feedback, or need assistance? We’re here to help!
          Reach out to us for any inquiries, from customs to order assistance,
          we’ll be happy to assist.
        </p>

        <Link href="/customs">
          <button className="bg-[#766551] text-quaternary font-montserrat tracking-tight font-medium text-[10px] md:text-xs mt-4 md:mt-8 px-4 md:px-6 lg:px-8 py-2 uppercase">
            Book your appointment
          </button>
        </Link>
      </div>
    </div>
  );
}
