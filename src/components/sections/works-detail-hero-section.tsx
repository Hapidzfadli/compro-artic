"use client";

import Image from "next/image";

interface WorksDetailHeroProps {
  title: string;
  category: string;
  heroImage: string;
}

export function WorksDetailHeroSection({ title, category, heroImage }: WorksDetailHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-artic-persian">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image src={heroImage} alt={title} fill className="object-cover object-top" priority />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Dark gradient — bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080817]" />
        {/* Persian blue gradient — bottom 78% */}
        <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-b from-transparent to-[#2020d3] opacity-80" />
      </div>

      {/* Centered content — slightly below center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center translate-y-8">
        <p className="text-[14px] font-extrabold uppercase tracking-[1.08px] text-artic-teal-light md:text-[18px]">
          {category}
        </p>
        <h1 className="mt-6 max-w-3xl text-[32px] font-normal leading-[1.1] tracking-[-0.03em] text-white md:text-[48px] lg:text-[64px] lg:tracking-[-1.92px]">
          {title}
        </h1>
      </div>

      {/* Scroll Down indicator */}
      <div className="absolute bottom-14 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {/* Mouse icon with animated scroll wheel */}
        <div className="relative flex h-6.5 w-4 items-start justify-center rounded-full border-[1.5px] border-artic-teal-light pt-1">
          <div className="h-1.5 w-0.5 animate-[scrollWheel_1.4s_ease-in-out_infinite] rounded-full bg-artic-teal-light" />
        </div>
        <p className="text-[15px] font-medium tracking-[-0.36px] text-artic-teal-light md:text-[18px]">
          Scroll Down
        </p>
      </div>
    </section>
  );
}
