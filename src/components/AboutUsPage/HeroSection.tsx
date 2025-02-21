import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-screen px-[5%] md:px-[10%] lg:px-[20%] pt-28 md:pt-40">
      {/* <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
        Who we are
      </p> */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair text-black/80 tracking-tighter md:ml-20 mt-2">
        About <span className="italic">us</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
        <div className="md:w-1/2 flex flex-col justify-evenly gap-4">
          <img
            src="/Portrait.png"
            alt="Portrait"
            className="object-contain rounded-xl bg-secondary w-full"
          />
          <p className="w-full bg-[#A18668] uppercase flex items-center justify-center p-4 rounded-xl font-playfair text-4xl md:text-5xl lg:text-6xl text-quaternary">
            Jui Lakhani
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col justify-start gap-10 md:gap-12 text-center md:text-start">
          <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
            Meet THE FOUNDER
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-playfair text-black/80 tracking-tighter md:mt-2">
            Crafted with love, worn with grace.
          </p>
          <div>
            <p className="font-sen text-sm md:text-base lg:text-lg mt-2 md:mt-6 text-black/60 tracking-tight">
              As the Founder and Creative Director, Jui pours her passion into
              every design, curating ensembles that reflect contemporary
              aesthetics yet rooted in culture.
            </p>
            <Link href={"/customs"}>
              <button className="mt-8 py-2 px-8 md:px-16 md:py-4 text-black/80 font-montserrat font-bold text-xs md:text-sm bg-white uppercase hover:underline">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
