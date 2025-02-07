'use client';

import { Moontime } from '@/lib/font';
import React, { useEffect, useState } from 'react';

interface Collection {
  name: string;
  description: string | null;
  featureImage: {
    url: string;
  };
}

export default function FeaturedLookbooks() {
  const [collection, setCollection] = useState<Collection | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/collections?filters[isFeatured][$eq]=true&populate=*');
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setCollection(data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching collection:', error);
      }
    };

    fetchCollection();
  }, []);

  const imageUrl = collection ? `http://localhost:1337${collection.featureImage.url}` : '';

  return (
    <div className={`h-[44dvh] bg-secondary text-7xl flex items-center justify-center text-white`}>
      {collection ? (
        // If collection data is available, show the image
        <img src={imageUrl} alt={collection.name} className='w-full h-full object-contain'/>
      ) : (
        // If no collection data, display fallback content
        <p>No featured collection available.</p>
      )}
    </div>
  );
}
