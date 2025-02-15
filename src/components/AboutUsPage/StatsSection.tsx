import React from "react";

export default function StatsSection() {
  return (
    <div className="min-h-screen w-screen py-[5%] px-[15%]">
      <div className="flex flex-row justify-center items-center w-full">
        <h1 className="w-1/2 font-playfair text-4xl text-black/90 traicking-tighter">
          Elevate your online presence with our exquisite Framer template
        </h1>
        <h2 className="w-1/2 font-sen text-lg text-black/70 leading-relaxed tracking-tight">
          At the heart of our work is a deep appreciation for the art of
          photography and fashion. We believe in the power of images to tell
          compelling stories, and inspire audiences. Our mission is to create
          visuals that resonate
        </h2>
      </div>
      
      <div className="flex justify-evenly mt-16 text-center">
        <div>
          <p className="text-8xl font-playfair text-black tracking-tighter">127+</p>
          <p className="text-sm text-black/60 mt-4">Connection</p>
        </div>
        <div>
          <p className="text-8xl font-playfair text-black tracking-tighter">400</p>
          <p className="text-sm text-black/60 mt-4">Members</p>
        </div>
        <div>
          <p className="text-8xl font-playfair text-black tracking-tighter">854</p>
          <p className="text-sm text-black/60 mt-4">Projects</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-8 mt-12 text-black/60 text-sm tracking-tight">
        <p>
          Our studio is renowned for its meticulous attention to detail and commitment to delivering exceptional visual content. We collaborate closely with clients to bring their visions to life with precision and style.
        </p>
        <p>
          We work closely with clients to understand their unique vision and deliver tailored solutions that exceed expectations. Join us in celebrating the artistry of photography — a place where creativity knows no bounds.
        </p>
        <p>
          Chloe Laurent is a premier destination for blending creativity with technical precision. Our studio specializes in crafting compelling visual narratives that define elegance and tell stories with clarity.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-12 text-black/60 text-sm tracking-tight">
        <p>
          Founded on a passion for artistic excellence, Chloe Laurent stands at the forefront of the photography and fashion industry. We pride ourselves on our ability to capture the essence of beauty and sophistication in every photograph.
        </p>
        <p>
          Our team combines creative vision with technical expertise to produce stunning visuals that elevate brands and narratives. With a client-centric approach, we strive to exceed expectations and deliver compelling imagery that leaves a lasting impression.
        </p>
      </div>
    </div>
  );
}
