import Link from "next/link";
import { PrimaryButton } from "@/components/common/primary-button";

export function WhoWeAreCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#161616] py-32 text-center">
      {/* Wave background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/who-we-are/wave-bg.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-full opacity-[0.08] mix-blend-screen"
      />

      {/* Glow ellipse */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[250%] -translate-x-1/2 translate-y-1/3 rounded-[50%] bg-artic-persian-800 blur-[100px] mix-blend-plus-lighter" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-5xl px-8">
        <h2 className="text-[40px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
          Let's Make Smart Moves Together
        </h2>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/contact" className="h-14 px-10 text-[15px]">
            Free Consultation
          </PrimaryButton>
          <Link
            href="#"
            className="inline-flex h-14 items-center justify-center rounded-[5px] border border-artic-grey-200 px-10 text-[15px] font-semibold text-artic-grey-100 transition-opacity hover:opacity-70"
          >
            Download Company Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
