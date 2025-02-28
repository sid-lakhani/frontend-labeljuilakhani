"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-fit w-screen px-[5%] md:px-[8%] lg:px-[20%] pt-28 md:pt-32">
      {/* <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
        Who we are
      </p> */}
      <h1 className="text-[12vw] md:text-6xl lg:text-7xl font-playfair text-primary tracking-tighter md:ml-24 mt-2 italic">
        Behind the Label
      </h1>

      <div className="h-full flex flex-col md:flex-row justify-center gap-8 md:gap-0 mt-8">
        <p className="md:hidden text-sm uppercase tracking-[0.5em] -mb-4 font-montserrat font-medium text-primary">
          Meet THE FOUNDER
        </p>
        <div className="md:w-1/2 flex flex-col justify-evenly gap-4">
          <img
            src="/about.webp"
            alt="Portrait"
            className="object-contain rounded-xl bg-[#A18668] w-full md:w-[90%]"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
          {/* <p className="w-full bg-[#A18668] uppercase flex items-center justify-center p-4 rounded-xl font-playfair text-3xl md:text-4xl lg:text-5xl text-quaternary">
            Jui Lakhani
          </p> */}
          {/* <img src="/name.webp" alt="Label Jui Lakhani" className="w-full h-24 object-cover" /> */}
        </div>
        <div className="md:w-1/3 flex flex-col justify-start lg:justify-start gap-10 md:gap-4 lg:gap-8 md:text-start">
          <p className="hidden md:block md:text-xs text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-primary">
            Meet THE FOUNDER
          </p>
          {/* <img src="/name.webp" alt="Label Jui Lakhani" className="w-full h-24 object-cover" /> */}
          <p className="text-4xl md:text-3xl lg:text-5xl font-playfair text-primary tracking-tighter lg:mt-2">
            Crafted with love, worn with grace.
          </p>
          <div>
            <p className="font-sen text-sm md:text-base lg:text-lg lg:mt-6 text-primary/60 tracking-tight">
              As the Founder and Creative Director, Jui pours her passion into
              every design, curating ensembles that reflect contemporary
              aesthetics yet rooted in culture.
            </p>
            <Link href={"/customs"}>
              <button className="mt-4 lg:mt-8 py-2 px-8 lg:px-16 lg:py-4 text-quaternary font-montserrat font-bold text-xs md:text-sm bg-[#A18668] uppercase hover:underline">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
