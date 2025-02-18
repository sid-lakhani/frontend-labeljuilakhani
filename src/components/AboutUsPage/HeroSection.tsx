import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-screen py-[5%] px-[20%] pt-40">
      {/* <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
        Who we are
      </p> */}
      <h1 className="text-8xl font-playfair text-black/80 tracking-tighter mt-2">
        About <span className="italic">us</span>
      </h1>

      <div className="flex flex-row justify-center gap-12 mt-20">
        <div className="w-1/2 flex flex-col justify-evenly gap-4">
          <img
            src="/Portrait.png"
            alt="Portrait"
            className="object-contain rounded-xl bg-secondary w-full"
          />
          <p className="w-full bg-[#A18668] uppercase flex items-center justify-center p-4 rounded-xl font-playfair text-6xl text-quaternary">
            Jui Lakhani
          </p>
        </div>
        <div className="w-1/2 flex flex-col justify-evenly gap-4 pb-[10%]">
          <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-black/80">
            Meet THE FOUNDER
          </p>
          <p className="text-5xl font-playfair text-black/80 tracking-tighter mt-2">
            Crafted with love, worn with grace.
          </p>
          <div>
            <p className="font-sen text-lg mt-6 text-black/60 tracking-tight">
              As the Founder and Creative Director, Jui pours her passion into
              every design, curating ensembles that reflect contemporary
              aesthetics yet rooted in culture.
            </p>
            <Link href={"/customs"}>
              <button className="mt-8 px-16 py-4 text-black/80 font-montserrat font-bold text-sm bg-white uppercase hover:underline">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
