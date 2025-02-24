import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="h-fit px-[5%] md:px-[10%] lg:px-[5%] flex flex-col md:flex-row items-center justify-center my-12 md:my-20 gap-4 md:gap-8 lg:gap-24">
      <img
        src={"/contact.jpg"}
        alt="Contact"
        className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] object-cover bg-primary"
      />
      <div className="text-center md:text-left text-primary tracking-tighter max-w-xl">
        <p className="text-2xl md:text-3xl lg:text-5xl font-playfair ">
          Explore <span className="text-secondary">Indian folk</span>
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-playfair ">
          couture: vibrant textiles,
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-playfair ">
          intricate embroidery.
        </p>

        <p className="mt-4 md:mt-8 font-sen text-sm md:text-base lg:text-lg text-black/60 tracking-tight">
          Have questions, feedback, or need assistance? We’re here to help!
          Reach out to us for any inquiries, from customs to order assistance,
          we’ll be happy to assist.
        </p>

        <Link href="/customs">
          <button className="bg-[#766551] text-quaternary font-montserrat tracking-tight font-medium text-[10px] md:text-xs mt-4 md:mt-8 px-4 md:px-6 lg:px-8 py-2 uppercase">
            Book your appointment
          </button>
        </Link>
      </div>
    </div>
  );
}
