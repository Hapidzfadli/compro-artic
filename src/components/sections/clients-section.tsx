import Image from "next/image";
import { SectionLabel } from "@/components/common/section-label";

const LOGOS = [
  { src: "/images/clients/logo-0.svg", alt: "Client 1", w: 188, h: 37 },
  { src: "/images/clients/logo-1.svg", alt: "Client 2", w: 163, h: 37 },
  { src: "/images/clients/logo-2.svg", alt: "Client 3", w: 162, h: 36 },
  { src: "/images/clients/logo-3.svg", alt: "Client 4", w: 164, h: 37 },
  { src: "/images/clients/logo-4.svg", alt: "Client 5", w: 116, h: 37 },
  { src: "/images/clients/logo-5.svg", alt: "Client 6", w: 205, h: 37 },
  { src: "/images/clients/logo-6.svg", alt: "Client 7", w: 74, h: 74 },
];

export function OurClientSection() {
  return (
    <section className="bg-white pt-6 pb-16 md:pt-8 md:pb-24">
      <div className="mx-auto max-w-[1123px] px-6 md:px-16">
        {/* Label */}
        <div className="mb-10 flex justify-center">
          <SectionLabel variant="grey">OUR CLIENT</SectionLabel>
        </div>

        {/* Marquee with fade edges */}
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} className="flex shrink-0 items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="h-7 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
