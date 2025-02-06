import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed top-8 left-[10%] w-[80%] h-[8%] flex items-center justify-between opacity-100 bg-white shadow-md rounded-lg px-4">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <nav className="flex items-center gap-6">
        <Link
          href="/about"
          className="text-lg text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/lookbook"
          className="text-lg text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Lookbook
        </Link>
        <Link
          href="/shop"
          className="text-lg text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Shop
        </Link>
        <Link
          href="/blogs"
          className="text-lg text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/contact"
          className="text-lg text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
