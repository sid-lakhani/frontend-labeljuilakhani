"use client";

import React, { useEffect, useState } from "react";

// interface Testimonial {
//   id: number;
//   Name: string;
//   Testimonial: string;
//   Image: {
//     url: string;
//   };
// }

export default function Testimonials() {
  // const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       // Fetch Testimonials
  //       const testimonials = await fetch(
  //         "http://localhost:1337/api/testimonials?populate=*"
  //       );
  //       const TestimonialData = await testimonials.json();

  //       if (TestimonialData.data) {
  //         setTestimonials(TestimonialData.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching testimonials:", error);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    <div className="h-[80dvh] mt-20 flex flex-col">
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
      <div className="px-[5%] mt-4 lg:mt-12 flex justify-center items-center h-full text-3xl md:text-5xl lg:text-6xl font-playfair text-primary italic">
        Testimonials *
      </div>
      {/* <div className="h-[500px] overflow-x-auto whitespace-nowrap mt-16 px-5 scrollbar-hide">
        <div className="flex gap-8">
          {testimonials.map((post) => {
            const postImageUrl = `http://localhost:1337${post.Image.url}`;
            return (
                <div
                  key={post.id}
                  className="bg-[#D0C1AE] rounded-lg p-6 w-[350px] shadow-lg flex flex-col justify-between relative"
                >
                  <p className="text-lg text-white italic">
                    &ldquo;{post.Testimonial}&rdquo;
                  </p>
                <div className="absolute bottom-0 left-0 bg-quaternary flex items-center mt-4">
                  <img
                    src={postImageUrl}
                    alt={post.Name}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <p className="ml-3 text-sm font-semibold text-white">
                    {post.Name}
                  </p>
                </div>
                </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}
