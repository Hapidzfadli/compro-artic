import Image from "next/image";
import { PrimaryButton } from "@/components/common/primary-button";

export function AboutHighlightSection() {
  return (
    <section className="bg-white py-10">
      <div className="mx-6">
        <div className="relative h-110 overflow-hidden rounded-[15px] bg-[#878787] md:h-140">
          {/* Background image */}
          <Image
            src="/images/about/highlight-bg.jpg"
            alt="Our people at Artic"
            fill
            className="object-cover object-[center_30%] grayscale"
          />

          {/* Bottom gradient — Persian Range/800 */}
          <div
            className="absolute inset-x-0 bottom-0 h-[70%]"
            style={{
              background:
                "linear-gradient(to top, #13137F 0%, rgba(19,19,127,0.5) 40%, transparent 100%)",
            }}
          />
          {/* Glow blur */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-[80%] -translate-x-1/2 rounded-full bg-artic-persian-800 blur-[120px]" />

          {/* Content bottom-left */}
          <div className="absolute bottom-0 left-0 p-10 md:p-16">
            <h2 className="mb-6 text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-white lg:text-[40px]">
              See Our People <br />
              at Artic Here
            </h2>
            <PrimaryButton href="/works" className="h-11 px-6 text-[14px]">
              Learn More →
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
