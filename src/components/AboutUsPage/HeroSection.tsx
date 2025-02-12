import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-screen py-[5%] px-[20%] pt-40">
      <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
        Who we are
      </p>
      <p className="text-8xl font-playfair text-black/80 tracking-tighter mt-2">
        About <span className="italic">us</span>
      </p>

      <div className="flex flex-row justify-between gap-8 mt-20">
        <div className="flex flex-col justify-evenly gap-4">
          <Image
            src="/logo.png"
            alt="Portrait"
            width={400}
            height={400}
            className="object-contain rounded-xl bg-secondary"
          />
          <p className="bg-secondary flex items-center justify-center p-4 rounded-xl font-playfair text-4xl text-white">Jui Lakhani</p>
        </div>
        <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
          Know the founder
        </p>
      </div>
    </div>
  );
}
