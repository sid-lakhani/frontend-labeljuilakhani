import Image from "next/image";
import Link from "next/link";
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

      <div className="flex flex-row justify-center gap-12 mt-20">
        <div className="w-1/2 flex flex-col justify-evenly gap-4">
          <Image
            src="/logo.png"
            alt="Portrait"
            width={400}
            height={400}
            className="object-contain rounded-xl bg-secondary w-full"
          />
          <p className="w-full bg-secondary flex items-center justify-center p-4 rounded-xl font-playfair text-4xl text-white">
            Jui Lakhani
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
            Know the founder
          </p>
          <p className="text-5xl font-playfair text-black/80 tracking-tighter mt-2">
            Here a bold statement by Jui Lakhani
          </p>
          <p className="font-sen text-lg mt-6 text-black/60 tracking-tight">
            The project focused on highlighting the brilliance and craftsmanship
            of each piece, set against elegant backdrops.
          </p>
          <Link href={"/lookbook"}>
            <button className="mt-8 px-16 py-4 text-black/80 font-montserrat font-bold text-sm bg-white uppercase hover:underline">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
