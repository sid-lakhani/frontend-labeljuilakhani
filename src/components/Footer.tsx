import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[40dvh] flex flex-row items-center justify-evenly my-[2%] mx-[2%]">
      <div>
        <p className="font-playfair italic md:text-6xl lg:text-8xl tracking-tighter md:ml-2 lg:ml-4">
          Let's us
        </p>
        <p className="font-playfair italic md:text-6xl lg:text-8xl tracking-tighter">
          Collaborate
        </p>
        <Link href="/customs">
          <button className="bg-black/85 text-white font-montserrat font-bold md:text-[10px] lg:text-xs mt-4 md:ml-1 lg:ml-2 md:px-4 lg:px-8 py-2 uppercase">
            Book a call
          </button>
        </Link>
      </div>
      <div className="flex flex-row items-start justify-evenly md:gap-20 lg:gap-40 uppercase font-montserrat md:text-[8px] lg:text-[10px]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold md:text-xs lg:text-sm">Quick Links</h1>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/lookbook">Lookbooks</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/customs">Customs</Link>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold md:text-xs lg:text-sm">Socials</h1>
          <Link href="/">Instagram</Link>
          <Link href="/">Social 2</Link>
          <Link href="/">Social 3</Link>
          <Link href="/">Social 4</Link>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold md:text-xs lg:text-sm">Transparency</h1>
          <Link href="/">Pricing</Link>
          <Link href="/">FAQs</Link>
        </div>
      </div>
    </div>
  );
}
