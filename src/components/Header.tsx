import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed top-8 left-[3%] w-[94%] h-[8%] flex items-center bg-quinary/50 backdrop-blur-xl shadow-lg rounded-lg px-8 z-[999]">
      {/* Logo and Name */}
      <Link href="/" className="flex items-center">
        <Image
          src="/Header.png"
          alt="Logo"
          width={200}
          height={80}
          className="object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8 uppercase text-lg font-montserrat font-semibold">
        <Link
          href="/about"
          className="text-white hover:text-white/70 duration-100 transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/lookbook"
          className="text-white hover:text-white/70 duration-100 transition-colors"
        >
          Lookbook
        </Link>
        <Link
          href="/shop"
          className="text-white hover:text-white/70 duration-100 transition-colors"
        >
          Shop
        </Link>
        <Link
          href="/blogs"
          className="text-white hover:text-white/70 duration-100 transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/customs"
          className="text-white hover:text-white/70 duration-100 transition-colors"
        >
          Customs
        </Link>
      </nav>
    </div>
  );
}
