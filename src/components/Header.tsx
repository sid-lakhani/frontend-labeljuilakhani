import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed top-8 left-[3%] w-[94%] h-[8%] flex items-center bg-quaternary/90 shadow-md rounded-lg px-8">
      {/* Logo and Name */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <Image
          src="/name.png"
          alt="Logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8 uppercase text-md">
        <Link
          href="/about"
          className="text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/lookbook"
          className="text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Lookbook
        </Link>
        <Link
          href="/shop"
          className="text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Shop
        </Link>
        <Link
          href="/blogs"
          className="text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/customs"
          className="text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Customs
        </Link>
      </nav>
    </div>
  );
}
