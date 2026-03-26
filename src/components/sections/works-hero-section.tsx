import Image from "next/image";

export function WorksHeroSection() {
  return (
    <section className="relative h-80 overflow-hidden bg-artic-persian md:h-100">
      {/* Background photo */}
      <Image
        src="/images/works-hero.jpg"
        alt="Our Works"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Blue soft-light overlays matching brand style */}
      <div className="absolute inset-0 bg-artic-persian mix-blend-soft-light opacity-[0.84]" />
      <div className="absolute inset-0 bg-artic-persian mix-blend-multiply" />

      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-[56px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[84px]">
          Our Works
        </h1>
      </div>
    </section>
  );
}
