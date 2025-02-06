import React from "react";

export default function Footer() {
  return (
    <footer className="bg-quaternary text-primary py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold mb-2">Get in touch with us</h2>
        <p className="text-sm">
          Make your special occasion truly yours with custom-designed outfits!
          Reach out to us.
        </p>
      </div>

      {/* Newsletter Subscription */}
      <div className="m-8 text-center">
        <form className="inline-flex items-center space-x-4">
          <label htmlFor="email" className="text-primary text-sm">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="________________________"
            className="border-none outline-none bg-transparent text-primary text-sm placeholder-primary focus:ring-0"
          />
          <button
            type="submit"
            className="text-sm font-medium text-primary hover:underline"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
        {/* Left Column */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-primary/80">
                Home
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-primary/80">
                Shop
              </a>
            </li>
            <li>
              <a href="#blogs" className="hover:text-primary/80">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Left Column */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#lookbook" className="hover:text-primary/80">
                Lookbook
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary/80">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary/80">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Right Column */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#policy" className="hover:text-primary/80">
                Store Policy
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-primary/80">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-primary/80">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#facebook" className="hover:text-primary/80">
                Facebook
              </a>
            </li>
            <li>
              <a href="#instagram" className="hover:text-primary/80">
                Instagram
              </a>
            </li>
            <li>
              <a href="#pinterest" className="hover:text-primary/80">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
