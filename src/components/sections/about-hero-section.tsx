import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="relative h-100 overflow-hidden bg-artic-persian md:h-100">
      <Image
        src="/images/about/hero-bg.jpg"
        alt="About Artic"
        fill
        className="object-cover object-[center_40%]"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Blue soft-light overlays matching brand style */}
      <div className="absolute inset-0 bg-artic-persian mix-blend-soft-light opacity-[0.84]" />
      <div className="absolute inset-0 bg-artic-persian mix-blend-multiply opacity-[0.84]" />
      {/* Bottom gradient */}
     <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-b from-artic-persian/0 to-artic-persian opacity-[0.5]" />

      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-[36px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[55px]">
          About Artic
        </h1>
      </div>
    </section>
  );
}
