import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="h-fit flex flex-col md:flex-row items-center justify-center my-20 gap-4 md:gap-8 lg:gap-24">
      <img
        src={"/logo.png"}
        alt="Contact"
        className="w-[250px] md:w-[300px] lg:w-[500px] bg-primary"
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
          We cherish couture inspired by Indian folk traditions, believing
          fashion tells stories, evokes emotions, and inspires. Our mission:
          create timeless designs.
        </p>

        <Link href="/customs">
          <button className="bg-black/85 text-white font-montserrat font-bold text-[10px] md:text-xs mt-4 md:mt-8 px-6 md:px-8 lg:px-12 py-2 ">
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
}
