import React from "react";

export default function StatsSection() {
  return (
    <div className="w-screen py-20 px-5 md:px-[15%]">
      {/* <div className="flex justify-evenly mt-16 text-center">
        <div>
          <p className="text-5xl md:text-7xl lg:text-8xl font-playfair text-[#766551] tracking-tighter">
            127+
          </p>
          <p className="text-xs md:text-sm text-[#766551]/70 mt-4">Connection</p>
        </div>
        <div>
          <p className="text-5xl md:text-7xl lg:text-8xl font-playfair text-[#766551] tracking-tighter">
            400
          </p>
          <p className="text-xs md:text-sm text-[#766551]/70 mt-4">Members</p>
        </div>
        <div>
          <p className="text-5xl md:text-7xl lg:text-8xl font-playfair text-[#766551] tracking-tighter">
            854
          </p>
          <p className="text-xs md:text-sm text-[#766551]/70 mt-4">Projects</p>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row gap-6 md:gap-8  text-[#766551]/70 text-xs md:text-sm tracking-tight leading-loose">
        <div>
          <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#766551]">
            Wear Our Art
          </h1>
          <p className="mt-6">
            Every piece has a story waiting to be told- one that embodies grace,
            beauty and the joy of celebration.
          </p>
        </div>
        <div>
          <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#766551]">
            Our Vision
          </h1>
          <p className="mt-6">
            Redefining fashion by fusing heritage with modern silhouettes,
            creating timeless pieces that inspire confidence and celebrate
            individuality.
          </p>
        </div>
        <div>
          <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#766551]">
            Labor Of Love
          </h1>
          <p className="mt-6">
            Each piece is carefully crafted with precision, guided by the
            mastery of skilled Indian artisans and kaarigars.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 md:gap-0 mt-16">
        <h1 className="w-full md:w-1/2 font-playfair text-2xl md:text-3xl lg:text-4xl text-[#766551] tracking-tighter">
          A celebration of craftsmanship, heritage and timeless elegance.
        </h1>
        <h2 className="w-full md:w-1/2 font-sen text-base md:text-lg lg:text-xl text-[#766551]/70 leading-relaxed tracking-tight mt-4 md:mt-0">
          A label that seamlessly blends tradition with modernity, creating
          exquisite collections that speaks to today’s confident, edgy and
          culturally rooted individuals.
        </h2>
      </div>
    </div>
  );
}
