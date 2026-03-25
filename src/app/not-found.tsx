import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { PrimaryButton } from "@/components/common/primary-button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#161694]">
        {/* Abstract low-poly background */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/404/background.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
          />
          {/* Darken overlays matching Figma */}
          <div className="absolute inset-0 bg-black mix-blend-color" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Teal glow — right side */}
        <div
          className="pointer-events-none absolute right-[-300px] top-1/2 -translate-y-1/2 mix-blend-plus-lighter"
          style={{
            width: 900,
            height: 900,
            background:
              "radial-gradient(circle, rgba(83,242,170,0.35) 0%, rgba(67,255,249,0.1) 40%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1
            className="text-[40px] font-normal leading-none tracking-[-1.2px] md:text-[64px] md:tracking-[-1.92px]"
            style={{
              background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404 Not Found
          </h1>
          <p className="mt-4 max-w-110 text-[13px] font-medium leading-[1.3] tracking-[-0.3px] text-white md:text-[15px]">
            The page you looking is currently unavailable or already deleted.
            Explore other destination!
          </p>
          <PrimaryButton
            href="/"
            className="mt-8 h-10 rounded-xl px-8 text-[13px] md:h-11 md:text-[14px]"
          >
            Back to Home →
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
