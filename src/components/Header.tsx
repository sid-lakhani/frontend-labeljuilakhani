import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed top-8 left-[10%] w-[80%] h-[8%] flex items-center justify-between bg-quaternary/90 shadow-md rounded-lg px-20">
      <Link href="/" className="flex items-center">
        <Image
          src="/name.png"
          alt="Logo"
          width={200}
          height={200}
          className="object-contain"
        />
      </Link>

      <nav className="flex items-center gap-10">
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
          href="/customs"
          className="text-lg text-primary hover:text-primary/80 duration-300 transition-colors"
        >
          Customs
        </Link>
      </nav>
    </div>
  );
}
