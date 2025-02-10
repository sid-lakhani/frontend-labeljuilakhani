import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[50dvh] flex flex-row items-center justify-evenly my-10 mx-2">
      <div>
        <p className="font-playfair italic text-8xl tracking-tighter ml-4">
          Let's us
        </p>
        <p className="font-playfair italic text-8xl tracking-tighter">
          Collaborate
        </p>
        <Link href="/customs">
          <button className="bg-black/85 text-white font-montserrat font-bold text-xs mt-4 ml-2 px-8 py-2 uppercase">
            Book a call
          </button>
        </Link>
      </div>
      <div className="flex flex-row items-start justify-evenly gap-40 uppercase font-montserrat text-xs">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-sm">Quick Links</h1>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/lookbook">Lookbooks</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/customs">Customs</Link>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-sm">Socials</h1>
          <Link href="/">Instagram</Link>
          <Link href="/">Social 2</Link>
          <Link href="/">Social 3</Link>
          <Link href="/">Social 4</Link>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-sm">Transparency</h1>
          <Link href="/">Pricing</Link>
          <Link href="/">FAQs</Link>
        </div>
      </div>
    </div>
  );
}
