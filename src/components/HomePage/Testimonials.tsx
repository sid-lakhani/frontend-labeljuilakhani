"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  Name: string;
  Testimonial: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `https://cms.labeljuilakhani.in/api/testimonials?populate=*`
        );
        const data = await response.json();

        if (data.data) {
          setTestimonials(data.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="h-fit mt-20 flex flex-col">
      {/* Heading Section */}
      <div className="font-playfair flex flex-col justify-end px-[5%] md:px-[10%] lg:px-[20%] text-[10vw] md:text-7xl lg:text-8xl text-secondary tracking-tighter text-right">
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

      {/* Testimonials Scrolling Section */}
      <div className="my-20 lg:my-40 px-8 relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {[...testimonials, ...testimonials].map((post, index) => {
            return (
              <div
                key={index}
                className="bg-[#766551] rounded-3xl p-6 h-[250px] md:h-[300px] lg:h-[400px] w-[250px] md:w-[300px] lg:w-[400px] flex flex-col justify-between relative"
              >
                <p className="h-full font-sen text-base md:text-lg lg:text-2xl text-quaternary italic flex justify-center items-center text-center">
                  {post.Testimonial}
                </p>
                <img
                  src="/testimonial.svg"
                  className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 absolute top-8 left-6"
                />
                <div className="absolute bottom-0 left-0 bg-quaternary flex items-center px-4 py-2 w-fit rounded-tr-3xl">
                  <img
                    src="/user-placeholder.svg"
                    alt=""
                    className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10"
                  />
                  <p className="font-sen text-xs md:text-sm lg:text-base text-[#766551] ml-3">
                    {post.Name}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
