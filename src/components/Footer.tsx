import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[45dvh] md:h-[40dvh] flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-0 bg-primary/10 md:bg-inherit m-2">
      <div className="flex flex-row md:flex-col items-center md:items-start gap-8 md:gap-0">
        <div className="font-playfair italic text-4xl md:text-6xl lg:text-8xl tracking-tighter">
          <p className="ml-2 lg:ml-4">
            Let's
          </p>
          <p className="">
            Collaborate
          </p>
        </div>
        <Link href="/customs">
          <button className="bg-black text-quaternary font-montserrat font-bold text-xs md:text-[10px] lg:text-xs mt-4 md:ml-1 lg:ml-2 px-4 lg:px-8 py-2 uppercase">
            Book a call
          </button>
        </Link>
      </div>
      <div className="flex flex-row items-start justify-center md:justify-evenly gap-6 md:gap-20 lg:gap-40 uppercase font-montserrat text-[10px] md:text-[8px] lg:text-[10px]">
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="font-bold text-[10px] lg:text-sm">Quick Links</h1>
          <Link className="hover:underline" href="/">Home</Link>
          <Link className="hover:underline" href="/lookbook">Lookbooks</Link>
          <Link className="hover:underline" href="/shop">Shop</Link>
          <Link className="hover:underline" href="/customs">Customs</Link>
          <Link className="hover:underline" href="/blogs">Blogs</Link>
          <Link className="hover:underline" href="/about">About Us</Link>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-bold text-[10px] lg:text-sm">Socials</h1>
          <Link className="hover:underline" href="https://instagram.com/labeljuilakhani" target="_blank">Instagram</Link>
          <Link className="hover:underline" href="https://www.linkedin.com/in/jui-lakhani-604030226/" target="_blank">LinkedIn</Link>
          <Link className="hover:underline" href="https://www.facebook.com/profile.php?id=61573638958217" target="_blank">Facebook</Link>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-bold text-[10px] lg:text-sm">Transparency</h1>
          <Link className="hover:underline" href="/pages/terms-and-conditions">Terms and Conditions</Link>
          <Link className="hover:underline" href="/pages/frequently-asked-questions">FAQs</Link>
          <Link className="hover:underline" href="/pages/shipping-and-payments">Shipping and Payments</Link>
        </div>
      </div>
    </div>
  );
}
