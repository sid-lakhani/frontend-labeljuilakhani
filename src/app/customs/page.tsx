import ContactForm from "@/components/CustomsPage/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Customs | Label Jui Lakhani",
  description:
    "Get in touch with Label Jui Lakhani for inquiries, collaborations, or customer support.",
  url: "https://labeljuilakhani.in/customs",
  keywords: [
    "Label Jui Lakhani Contact",
    "Customer Support",
    "Inquiries",
    "Custom Outfits",
    "Designer Consultation",
    "Fashion Inquiries",
    "Collaboration",
    "Ethnic Wear Consultation",
  ],
});

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="min-h-screen w-screen flex flex-col items-center py-[5%] px-[5%] md:px-[10%] lg:px-[20%] pt-28 md:pt-40">
        <h1 className="font-playfair font-semibold text-[9vw] md:text-6xl lg:text-7xl text-primary uppercase">
          Get in touch
        </h1>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 mt-8 md:mt-12 items-center text-center justify-between font-sen text-[3vw] md:text-lg lg:text-xl text-[#766551]/60">
          <div className="flex flex-col">
            <h1 className="font-playfair text-[#766551] mb-2 text-[6vw] md:text-2xl lg:text-3xl">
              Contact
            </h1>
            <a href="mailto:labeljuilakhani@gmail.com" className="underline">
              labeljuilakhani@gmail.com
            </a>
            <a href="tel:+918454948349" className="underline">
              +91 84549 48349
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-playfair text-[#766551] mb-2 text-[6vw] md:text-2xl lg:text-3xl">
              Open Hours
            </h1>
            <p>Monday - Saturday</p>
            <p>9:00 am - 8:00 pm IST</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-playfair text-[#766551] mb-2 text-[6vw] md:text-2xl lg:text-3xl">
              Location
            </h1>
            <p>Vadodara, Gujarat</p>
            <p>India</p>
          </div>
        </div>

        {/* Inquiry Section */}
        <div className="flex flex-col items-center text-center mt-8 md:mt-16 gap-4 md:gap-8">
          <h1 className="font-playfair text-primary italic text-[10vw] md:text-5xl lg:text-6xl">
            Inquiries
          </h1>
          <p className="font-sen text-[3vw] md:text-lg lg:text-xl text-[#766551]/60">
            For any inquiries or custom outfit requests, please complete the
            provided form, and our team will reach out to you promptly.
          </p>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
