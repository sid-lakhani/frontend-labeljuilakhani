import React from "react";

export default function Testimonials() {
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
    </div>
  );
}
