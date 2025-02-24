import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <div className="font-sen text-sm md:text-base lg:text-lg min-h-screen px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center mb-8">FAQs</h1>

        {/* General Section */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">General</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">- What is Jui Lakhani?</span> <br />
              Jui Lakhani is a designer label that is committed to offering clothing that not only elevates your wardrobe but also respects the roots of fashion.
            </p>
            <p>
              <span className="font-semibold">- Where is your brand based?</span> <br />
              We are based in Vadodara, Gujarat, India, but we ship across various locations.
            </p>
            <p>
              <span className="font-semibold">- Do you have a physical store?</span> <br />
              Currently, we operate online, but we do accept custom orders. You can book an appointment for consultations.
            </p>
            <div className="border-b border-black"></div>
          </div>
        </div>

        {/* Orders & Customization */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Orders & Customization</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">- Do you offer custom designs?</span> <br />
              Yes! We specialize in customized outfits and wedding wear. If you have a vision in mind, we can bring it to life. Contact us for a consultation.
            </p>
            <p>
              <span className="font-semibold">- Can I customize an existing design from your collection?</span> <br />
              Absolutely! We can make modifications to size and detailing to suit your preferences.
            </p>
            <p>
              <span className="font-semibold">- How do I place an order?</span> <br />
              You can place an order by reaching out to us via our website or other social platforms.
            </p>
            <div className="border-b border-black"></div>
          </div>
        </div>

        {/* Shipping & Delivery */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Shipping & Delivery</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">- Do you ship internationally?</span> <br />
              Yes, we offer international shipping. Shipping charges and delivery times vary based on the destination.
            </p>
            <p>
              <span className="font-semibold">- How long does it take to receive my order?</span> <br />
              For ready-to-wear pieces, shipping takes approximately 10-12 days. For customized designs, it can take between 3 to 4 weeks, depending on the intricacy of the work.
            </p>
            <p>
              <span className="font-semibold">- How can I track my order?</span> <br />
              Once your order is shipped, you will receive a tracking link via Email or WhatsApp.
            </p>
            <div className="border-b border-black"></div>
          </div>
        </div>

        {/* Payments & Returns */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Payments & Returns</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">- What payment methods do you accept?</span> <br />
              We accept credit/debit cards, UPI, and NetBanking.
            </p>
            <p>
              <span className="font-semibold">- Do you offer refunds or exchanges?</span> <br />
              No, we do not offer refunds. However, we can assist with minor alterations if needed.
            </p>
            <p>
              <span className="font-semibold">- What if my outfit doesn’t fit?</span> <br />
              We recommend checking our size chart before placing an order. If you need minor alterations, we will offer assistance. (Additional charge may apply)
            </p>
            <div className="border-b border-black"></div>
          </div>
        </div>

        {/* Fabric & Care */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Fabric & Care</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">- What fabrics do you use?</span> <br />
              We use a wide range of high-quality fabrics, including organza, silk, georgette, cotton, and chiffon, depending on the design.
            </p>
            <p>
              <span className="font-semibold">- How should I care for my outfit?</span> <br />
              Most of our pieces are delicate and should be dry-cleaned only. Store them in a muslin cloth to maintain their quality.
            </p>
            <div className="border-b border-black"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
