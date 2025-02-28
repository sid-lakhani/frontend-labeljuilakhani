import React from "react";

export default function AboutSection() {
  return (
    <div className="h-[90dvh] py-[5%] px-[5%] md:px-[10%] lg:px-[20%] flex flex-col md:gap-2 lg:gap-0 justify-center">
      <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-secondary">
        About us
      </p>
      <div className="text-[10vw] md:text-[7vw] lg:text-[5vw] font-playfair text-secondary tracking-tighter mt-2">
        <p className="leading-[0.9]">More than</p>
        <p className="uppercase text-primary leading-[0.9]">
          Clothing <span className="text-[9vw] md:text-6xl lg:text-[4vw] lowercase text-secondary italic">we</span>
        </p>
        <p className="uppercase leading-[0.9]">
          <span className="text-[9vw] md:text-6xl lg:text-[4vw] lowercase italic">create</span> <span className=""> Statements </span>
        </p>
      </div>

      <h1 className="font-playfair text-primary text-2xl md:text-3xl lg:text-4xl tracking-tight mt-12 lg:mt-20">
        Welcome to the world of Jui Lakhani, where every creation is crafted
        with love and designed to be uniquely yours!
      </h1>
      <p className="font-sen text-xs md:text-base lg:text-[0.9vw] mt-6 text-primary/60 tracking-tight">
        Our Label is built on a passion for fashion that is both creative and
        conscious. Whether you are looking for everyday essentials or a
        statement piece, we have something that speaks to your style. We are
        committed to offering you clothing that not only elevates your wardrobe
        but also respects the roots of fashion that have shaped it.
      </p>
    </div>
  );
}
