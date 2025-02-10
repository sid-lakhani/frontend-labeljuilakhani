import React from "react";

export default function AboutSection() {
  return (
    <div className="h-[90dvh] py-[5%] px-[20%] flex flex-col justify-center">
      <p className="text-sm uppercase tracking-[0.5em] font-montserrat font-medium text-secondary">
        About us
      </p>
      <div className="text-8xl font-playfair text-secondary tracking-tighter mt-2">
        <p className="leading-[0.9]">More than</p>
        <p className="uppercase text-primary leading-[0.9]">
          Pictures <span className="lowercase text-secondary italic">we</span>
        </p>
        <p className="uppercase leading-[0.9]">
          <span className="lowercase italic">make</span> Fine Art
        </p>
      </div>

      <h1 className="font-playfair text-4xl tracking-tight mt-20">
        Impress your clients with a sleek and professional website that
        showcases your agency's expertise and creativity.
      </h1>
      <p className="font-sen text-lg mt-6 text-black/60 tracking-tight">
        Chloe Laurent embodies a vision of creativity and refinement in
        photography and fashion. Our commitment to innovation and quality shines
        through in every project we undertake. Specializing in fashion
        editorials, commercial photography, and artistic campaigns, we bring a
        fresh perspective and meticulous attention to detail. We strive to
        exceed expectations with a client-centric approach, delivering
        compelling visual content that resonates with audiences.
      </p>
    </div>
  );
}
