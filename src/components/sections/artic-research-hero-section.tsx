import Image from "next/image";

export function ArticResearchHeroSection() {
  return (
    <section className="relative h-80 overflow-hidden bg-artic-persian md:h-100">
      <Image
        src="/images/artic-research/hero-bg.jpg"
        alt="Artic Research"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Color blend */}
      <div className="absolute inset-0 rounded-[6px] bg-artic-persian mix-blend-color" />
      {/* Soft-light */}
      <div className="absolute inset-0 rounded-[6px] bg-artic-persian opacity-80 mix-blend-soft-light" />

      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-[40px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[64px]">
          Artic Research
        </h1>
      </div>
    </section>
  );
}
