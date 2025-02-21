"use client";

import React, { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  Name: string;
  Testimonial: string;
  Image: {
    url: string;
  };
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Fetch Testimonials
        const testimonials = await fetch(
          "http://localhost:1337/api/testimonials?populate=*"
        );
        const TestimonialData = await testimonials.json();

        if (TestimonialData.data) {
          setTestimonials(TestimonialData.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="h-fit mt-20 flex flex-col">
      <div className="font-playfair flex flex-col justify-end px-[5%] md:px-[10%] lg:px-[20%] text-5xl md:text-7xl lg:text-8xl text-secondary tracking-tighter text-right">
        <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-montserrat font-medium">
          Testimonial
        </p>
        <p className="italic leading-[0.9]">Shared</p>
        <p className="text-primary uppercase leading-[0.9]">Perspectives</p>
        <p className="uppercase leading-[0.9]">
          <span className="italic lowercase">
            by <span className="uppercase">Our</span>
          </span>{" "}
          Clients
        </p>
      </div>
      {/* <div className="px-[5%] mt-4 lg:mt-12 flex justify-center items-center h-full text-3xl md:text-5xl lg:text-6xl font-playfair text-primary italic">
        Testimonials *
      </div> */}
      <div className="my-40 px-8 relative w-full overflow-hidden">
        <div className="flex w-fit gap-8 animate-scroll">
          {[...testimonials, ...testimonials].map((post, index) => {
            const postImageUrl = `http://localhost:1337${post.Image.url}`;
            return (
              <div
                key={index}
                className="bg-secondary rounded-3xl p-6 h-[400px] w-[400px] flex flex-col justify-between relative"
              >
                <p className="h-full font-sen text-2xl text-white italic whitespace-normal flex justify-center items-center text-center">
                  {post.Testimonial}
                </p>
                <img
                  src="/testimonial.svg"
                  className="w-12 h-12 absolute top-8 left-6"
                />
                <div className="absolute bottom-0 left-0 bg-quaternary flex items-center px-4 py-2 w-fit rounded-tr-3xl">
                  <img
                    src={postImageUrl}
                    alt={post.Name}
                    className="w-10 h-10 rounded-full border border-secondary"
                  />
                  <div className="ml-3">
                    <p className="font-sen text-base text-quinary">{post.Name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
