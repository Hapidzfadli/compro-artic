import Link from "next/link";
import { PrimaryButton } from "@/components/common/primary-button";
import { SectionLabel } from "@/components/common/section-label";
import { VideoCard } from "@/components/common/video-section";

export function AboutSection() {
  return (
    <section
      className="relative overflow-x-clip pt-16 pb-16 md:pt-16 md:pb-24"
      style={{ background: "#13137F" }}
    >
      {/* Background holographic image */}
      <div
        className="pointer-events-none absolute mix-blend-screen opacity-20"
        style={{
          top: -130,
          left: 0,
          right: 0,
          height: 700,
          zIndex: 8,
          backgroundImage: "url('/images/about-us/background.jpg')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          maskImage: "linear-gradient(to right, transparent 0%, black 20%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      {/* Decorative ellipse glows */}
      <div
        className="pointer-events-none absolute mix-blend-plus-lighter"
        style={{
          top: "53%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 3896,
          height: 960,
          background: "radial-gradient(ellipse, #2020D3 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.4,
        }}
      />
      <div
        className="pointer-events-none absolute mix-blend-plus-lighter"
        style={{
          top: "29%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 3480,
          height: 800,
          background: "radial-gradient(ellipse, #53F2AA 0%, transparent 60%)",
          filter: "blur(80px)",
          opacity: 0.08,
        }}
      />

      {/* Two columns */}
      <div className="relative z-10 flex flex-col gap-10 px-6 md:flex-row md:items-start md:gap-20 md:px-16 lg:px-40">
        {/* Left column */}
        <div className="w-full md:w-[42%] md:shrink-0">
          <SectionLabel variant="white">ABOUT ARTIC ANALYTICA</SectionLabel>
          <h2 className="mt-6 text-[28px] font-medium leading-[1.1] tracking-[-0.56px] text-white md:text-[36px] md:tracking-[-0.72px] lg:text-[44px] lg:tracking-[-0.88px]">
            Where Insight Becomes Impact,{" "}
            <span className="text-artic-teal-light">
              Turning Research Into Real-World Change
            </span>
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-6 md:pt-10">
          <div className="flex flex-col gap-3 text-[12px] font-medium leading-[1.6] tracking-[-0.3px] text-white md:text-[13px] lg:text-[14px]">
            <p>
              Artic Analytica was built on a simple belief: decisions become
              stronger when they are grounded in evidence and shaped with
              empathy.
            </p>
            <p>
              We bring together research, data, strategy, and design into a
              single practice — helping institutions understand people, improve
              systems, and solve problems with clarity.
            </p>
            <p>
              Our work sits at the intersection of science and humanity, where
              insights move beyond reports and become actions that truly matter.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center">
            <PrimaryButton
              href="/about"
              className="h-[52px] w-full justify-center rounded-[10px] px-6 text-[16px] md:h-11 md:w-auto md:rounded-[8px] md:text-[14px]"
            >
              About Artic →
            </PrimaryButton>
            <Link
              href="https://drive.google.com/file/d/1Yef8xa2BZx2eZr2RsG_aP-1elIsmWlY0/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[52px] w-full items-center justify-center rounded-[10px] border border-[#DCDCDC] bg-white px-5 text-[16px] font-semibold text-artic-ebony transition-opacity hover:opacity-80 md:h-11 md:w-auto md:rounded-[8px] md:bg-transparent md:text-[14px] md:text-[#DCDCDC]"
            >
              Download Compro PDF
            </Link>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className="relative z-10 mt-20 overflow-x-clip px-6 md:mt-28 md:px-16 lg:px-40">
        <div className="mb-4">
          <SectionLabel variant="white">WATCH COMPANY PROFILE</SectionLabel>
        </div>

        {/* ellipse glow — di luar video, melingkari dari belakang */}
        <div
          className="pointer-events-none absolute mix-blend-plus-lighter"
          style={{
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "140%",
            height: "120%",
            background: "#66FFFF",
            borderRadius: 9999,
            filter: "blur(80px)",
            opacity: 0.65,
          }}
        />

        <VideoCard
          src="/images/about-us/thumbnail.jpg"
          alt="Company profile video thumbnail"
          className="relative z-10 h-60 md:h-90 lg:h-120"
        />
      </div>
    </section>
  );
}
