import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactSection() {
  return (
    <div className="h-[70dvh] flex items-center justify-center my-20 gap-24">
      <Image
        src={"/logo.png"}
        alt="Contact"
        width={500}
        height={500}
        className="bg-primary"
      />
      <div className="text-left text-primary tracking-tighter max-w-xl">
        <p className="text-5xl font-playfair ">
          Explore <span className="text-secondary">Indian folk</span>
        </p>
        <p className="text-5xl font-playfair ">
          couture: vibrant textiles,
        </p>
        <p className="text-5xl font-playfair ">
          intricate embroidery.
        </p>

        <p className="mt-8 font-sen text-lg text-black/60 tracking-tight">
          We cherish couture inspired by Indian folk traditions, believing
          fashion tells stories, evokes emotions, and inspires. Our mission:
          create timeless designs.
        </p>

        <Link href="/contact">
          <button className="bg-black/85 text-white font-montserrat font-bold text-xs mt-8 px-12 py-2 ">
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
}
