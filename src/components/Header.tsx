import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-[3%] left-[3%] w-[94%] h-[8%] flex items-center bg-quinary/50 backdrop-blur-xl shadow-lg rounded-lg px-4 lg:px-8 z-[999]">
      <Link href="/" className="flex items-center">
        <img
          src="/Header.webp"
          alt="Logo"
          className="w-[150px] lg:w-[200px] md:w-[175px] object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="hidden absolute left-1/2 transform -translate-x-1/2 md:flex items-center lg:gap-8 md:gap-4 uppercase lg:text-xl md:text-sm font-montserrat">
        <Link
          href="/about"
          className="text-quaternary hover:text-quaternary/70 duration-150 transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/lookbook"
          className="text-quaternary hover:text-quaternary/70 duration-150 transition-colors"
        >
          Lookbook
        </Link>
        <Link
          href="/blogs"
          className="text-quaternary hover:text-quaternary/70 duration-150 transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/customs"
          className="text-quaternary hover:text-quaternary/70 duration-150 transition-colors"
        >
          Customs
        </Link>
      </nav>

      {/* Shop Button */}
      <div className="ml-auto">
        <Link
          href="https://shop.labeljuilakhani.com"
          className="hidden md:block md:text-sm lg:text-lg font-montserrat font-bold uppercase text-quaternary border border-quaternary md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full hover:underline"
        >
          Shop now
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button className="md:hidden ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-quaternary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
}
