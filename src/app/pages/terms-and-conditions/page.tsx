import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <div className="font-sen text-sm md:text-base lg:text-lg min-h-screen px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center mb-8">Terms & Conditions</h1>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Introduction</h2>
          <p>
            Welcome to Jui Lakhani. By using our website, placing an order, or engaging with our services, you agree to the following terms and conditions. Please read them carefully before making a purchase.
          </p>
          <div className="mt-4 border-b border-black"></div>
        </div>

        {/* Orders & Payments */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Orders & Payments</h2>
          <div className="space-y-4">
            <p><span className="font-semibold">- All orders</span> are confirmed only after full or partial payment, as per the agreed terms.</p>
            <p><span className="font-semibold">- Payment methods:</span> Credit/Debit cards, UPI, and NetBanking.</p>
            <p><span className="font-semibold">- Price changes:</span> Prices are subject to change without prior notice. However, once an order is placed, the price remains fixed.</p>
          </div>
          <div className="mt-4 border-b border-black"></div>
        </div>

        {/* Customization & Made-to-Order */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Customization & Made-to-Order</h2>
          <div className="space-y-4">
            <p><span className="font-semibold">- Lead time:</span> Custom orders require a minimum lead time of 4 weeks. The timeline will be confirmed at the time of purchase.</p>
            <p><span className="font-semibold">- No changes:</span> Once production has started, changes to the design, fabric, or embroidery will not be possible.</p>
            <p><span className="font-semibold">- Variations:</span> Slight differences in color, embroidery, or fabric texture may occur due to the handmade nature of our products.</p>
          </div>
          <div className="mt-4 border-b border-black"></div>
        </div>

        {/* Intellectual Property Rights */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Intellectual Property Rights</h2>
          <div className="space-y-4">
            <p><span className="font-semibold">- All designs, images, logos, and content</span> on the Jui Lakhani website and social media are the exclusive intellectual property of the brand. Unauthorized use, reproduction, or distribution is strictly prohibited and may result in legal action.</p>
            <p><span className="font-semibold">- Customers</span> may not replicate or reproduce our designs for commercial purposes without prior written consent.</p>
          </div>
          <div className="mt-4 border-b border-black"></div>
        </div>

        {/* Privacy Policy */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Privacy Policy</h2>
          <div className="space-y-4">
            <p><span className="font-semibold">- We collect personal data</span> only for order processing and communication purposes. Your information will not be shared with third parties, except as necessary for payment processing and shipping.</p>
            <p><span className="font-semibold">- Payments</span> are processed through secure third-party gateways. We do not store credit/debit card details.</p>
          </div>
          <div className="mt-4 border-b border-black"></div>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Limitation of Liability</h2>
          <div className="space-y-4">
            <p><span className="font-semibold">- Jui Lakhani</span> is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our products or website.</p>
            <p><span className="font-semibold">- We are not responsible</span> for delays, loss, or damage caused by third-party shipping services.</p>
          </div>
          <div className="mt-4 border-b border-black"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
