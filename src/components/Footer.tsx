import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-[45dvh] md:h-[40dvh] flex flex-col items-center justify-center md:justify-evenly gap-8 md:gap-8 lg:gap-12 mb-2 md:mb-4 lg:mb-8 md:mt-16 lg:mt-32">
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full bg-primary px-6 md:px-12 lg:px-20 py-6 md:py-8 gap-4 md:gap-0">
        <p className="font-playfair italic text-3xl md:text-5xl lg:text-5xl tracking-tight text-quaternary">
          Let's Collaborate!
        </p>
        <Link href="/customs">
          <button className="bg-quaternary text-primary font-montserrat font-bold text-xs md:text-sm lg:text-base px-4 md:px-6 lg:px-8 py-2 uppercase shadow-md">
            Book a Call
          </button>
        </Link>
      </div>

      <div className="flex flex-row items-start justify-center md:justify-evenly gap-8 md:gap-20 lg:gap-40 uppercase font-montserrat text-[8px] md:text-[8px] lg:text-[10px]">
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="font-bold text-[10px] lg:text-sm">Quick Links</h1>
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/about">
            About Us
          </Link>
          <Link className="hover:underline" href="/lookbook">
            Lookbook
          </Link>
          <Link className="hover:underline" href="https://shop.labeljuilakhani.in">
            Shop
          </Link>
          <Link className="hover:underline" href="/blogs">
            Blogs
          </Link>
          <Link className="hover:underline" href="/customs">
            Customs
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-bold text-[10px] lg:text-sm">Socials</h1>
          <Link
            className="hover:underline"
            href="https://instagram.com/labeljuilakhani"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            className="hover:underline"
            href="https://www.linkedin.com/in/jui-lakhani-604030226/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="hover:underline"
            href="https://www.facebook.com/profile.php?id=61573638958217"
            target="_blank"
          >
            Facebook
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-bold text-[10px] lg:text-sm">Transparency</h1>
          <Link className="hover:underline" href="/pages/terms-and-conditions">
            Terms and Conditions
          </Link>
          <Link
            className="hover:underline"
            href="/pages/frequently-asked-questions"
          >
            FAQs
          </Link>
          <Link className="hover:underline" href="/pages/shipping-and-payments">
            Shipping and Payments
          </Link>
        </div>
      </div>
    </div>
  );
}
