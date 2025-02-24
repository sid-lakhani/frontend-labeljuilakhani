import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <div className="font-sen text-sm md:text-base lg:text-lg min-h-screen px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center mb-8">Shipping & Payments</h1>

        {/* Shipping Policy */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Shipping Policy</h2>
          <div className="space-y-4">
            <p><span className="font-semibold">1. Processing Time</span></p>
            <p>- Ready-to-Wear Orders: Processing takes 10-12 business days before shipping.</p>
            <p>- Custom & Made-to-Order Pieces: Production time varies between 3-4 weeks, depending on design complexity.</p>
            <p>- Orders are processed only after full or agreed partial payment is received.</p>
            
            <p><span className="font-semibold">2. Shipping Time & Delivery</span></p>
            <p>- Domestic Shipping: Estimated delivery within 4-5 business days after dispatch.</p>
            <p>- International Shipping: Delivery time varies by country.</p>
            <p>- Delivery timelines are estimates and may be affected by customs clearance, unforeseen delays, or courier disruptions.</p>
            
            <p><span className="font-semibold">3. Shipping Charges</span></p>
            <p>- Shipping costs are calculated at checkout based on location and package weight.</p>
            <p>- International customers are responsible for custom duties, import taxes, or additional charges imposed by their country’s regulations.</p>
            
            <p><span className="font-semibold">4. Delayed or Lost Packages</span></p>
            <p>- If your order is delayed beyond the estimated timeframe, contact us at +91 8545948349.</p>
            <p>- We are not responsible for lost packages due to incorrect shipping details provided by the customer.</p>
            <div className="border-b border-black"></div>
          </div>
        </div>

        {/* Payments Policy */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Payments Policy</h2>
          <div className="space-y-4">
            <p><span className="font-semibold">1. Accepted Payment Methods</span></p>
            <p>- Credit/Debit Cards: Visa, Mastercard, Amex, etc.</p>
            <p>- UPI & Bank Transfers</p>
            
            <p><span className="font-semibold">2. Payment Terms</span></p>
            <p>- Orders will be processed only after receiving full or agreed partial payment.</p>
            <p>- Custom orders require a 50% advance deposit, with the remaining balance due before shipping.</p>
            <p>- Payment details and invoices will be provided upon order confirmation.</p>
            
            <p><span className="font-semibold">3. Refunds & Chargebacks</span></p>
            <p>- No Refunds: Due to the made-to-order nature of our products, we do not offer refunds once production has started.</p>
            <p>- Chargebacks or unauthorized payment disputes will be legally pursued.</p>
            <div className="border-b border-black"></div>
          </div>
        </div>

        {/* Cancellations & Modifications */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Cancellations & Modifications</h2>
          <div className="space-y-4">
            <p>- Cancellations: Orders can only be canceled within 12 hours of placement. Once production begins, cancellations are not possible.</p>
            <p>- Modifications: Custom orders cannot be modified after production has started.</p>
            <div className="border-b border-black"></div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="mb-10">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold pb-2 mb-4 uppercase">Contact Us</h2>
          <div className="space-y-4">
          <p>- Email: <a href="mailto:labeljuilakhani@gmail.com" className="underline">labeljuilakhani@gmail.com</a></p>
          <p>- Phone: <a href="tel:+918454948349" className="underline">+91 8454948349</a></p>
          <p>- Instagram: <a href="https://instagram.com/labeljuilakhani" target="_blank" className="underline">@labeljuilakhani</a></p>
            <div className="border-b border-black"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
