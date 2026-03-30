"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "../common/section-label";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

interface WorksDetailVideoProps {
  quote: string;
  frontCard: TeamMember;
  backCard: TeamMember;
  videoThumbnail: string;
  videoHref?: string;
}

export function WorksDetailVideoSection({
  quote,
  frontCard,
  backCard,
  videoThumbnail,
  videoHref,
}: WorksDetailVideoProps) {
  const members = [frontCard, backCard];
  const total = members.length;
  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setProfileIndex((i) => (i + 1) % total), 4000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="relative  bg-artic-ebony py-16 md:py-24">
      {/* Rect wave bg texture — same pattern as VideoCardSection */}
      <div
        className="pointer-events-none absolute mix-blend-overlay opacity-30"
        style={{ top: -80, left: -150, width: "120%", height: 500, backgroundImage: "url('/images/works/video-section/rect-bg.png')", backgroundSize: "cover" }}
      />
      <div
        className="pointer-events-none absolute mix-blend-plus-lighter opacity-10"
        style={{ top: -80, left: -150, width: "120%", height: 500, backgroundImage: "url('/images/works/video-section/rect-bg.png')", backgroundSize: "cover" }}
      />

      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left: cards + label + quote */}
          <div className="flex w-full flex-col gap-8 lg:w-[42%]">
            {/* Stacked animated profile cards */}
            <div className="relative h-28">
              {/* Accent — top right */}
              <Image src="/images/video-card/accent.svg" alt="" width={280} height={220} className="pointer-events-none absolute" style={{ top: -100, right: -70 }} />
              {/* Accent — bottom left */}
              <Image src="/images/video-card/accent.svg" alt="" width={280} height={220} className="pointer-events-none absolute" style={{ bottom: -100, left: -100 }} />
              {/* Back card — blurred, offset, shows next member */}
              <div
                className="absolute flex items-center gap-4 rounded-[18px] border border-white bg-white/80 p-3"
                style={{ top: 28, left: 14, width: 340, zIndex: 1, filter: "blur(2px)" }}
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-4 border-[#f3f3ff]">
                  <Image
                    src={members[(profileIndex + 1) % total].photo}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[15px] font-medium leading-[1.3] tracking-[-0.4px] text-artic-ebony">
                    {members[(profileIndex + 1) % total].name}
                  </p>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">
                    {members[(profileIndex + 1) % total].role}
                  </p>
                </div>
              </div>

              {/* Front card — animated in */}
              <AnimatePresence initial={false}>
                <motion.div
                  key={profileIndex}
                  initial={{ y: 28, x: 14, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute flex items-center gap-4 rounded-[10px] bg-white p-3 shadow-[2px_4px_20px_0px_rgba(0,0,0,0.15)]"
                  style={{ top: 0, left: 0, width: 340, zIndex: 2 }}
                >
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-4 border-[#f3f3ff]">
                    <Image
                      src={members[profileIndex].photo}
                      alt={members[profileIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[15px] font-semibold leading-[1.3] tracking-[-0.4px] text-artic-ebony">
                      {members[profileIndex].name}
                    </p>
                    <p className="text-[12px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">
                      {members[profileIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Label */}
            <div className="flex items-center gap-2 mt-10">
              <SectionLabel variant="white">The Results</SectionLabel>
            </div>

            {/* Quote */}
            <p className="max-w-[480px] text-[14px] font-normal leading-[1.3] tracking-[-0.02em] text-white md:text-[16px] lg:text-[20px]">
              {quote}
            </p>
          </div>

          {/* Right: video card */}
          <div
            className="group relative w-full overflow-hidden rounded-[15px] lg:w-[47%]"
            style={{ aspectRatio: "834 / 580" }}
          >
            {/* Background image — grayscale default, color + scale on hover */}
            <Image
              src={videoThumbnail}
              alt="Watch results video"
              fill
              className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />

            {/* Vector shapes — visible default with overlay, fade on hover */}
            <div
              className="pointer-events-none absolute mix-blend-overlay opacity-100 transition-opacity duration-500 group-hover:opacity-30"
              style={{ inset: "-19.07% -3.45% -92.06% -20.14%", transform: "translateY(10px)" }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1030.74 1361.78"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.9">
                  <path
                    d="M437.192 402.378H9.97753C3.15173 402.378 -1.66648 409.21 0.541867 415.64L293.568 1239.62C294.199 1241.39 296.709 1241.39 297.338 1239.61L495.413 680.28C510.67 637.278 510.67 590.258 495.413 547.256L446.427 409.009C445.022 404.99 441.208 402.378 436.992 402.378H437.192Z"
                    fill="#2020D3"
                  />
                  <path
                    d="M1005.4 512.2L826.722 6.63112C823.51 -2.2103 811.063 -2.2103 808.052 6.63112L795.605 41.595L648.248 458.348L333.056 1348.52C330.848 1354.95 335.465 1361.78 342.492 1361.78H769.707C773.923 1361.78 777.737 1359.17 779.143 1355.15L1020.66 673.154C1034.11 634.975 1034.11 593.38 1020.66 555.201L1008.21 520.439L1005.4 512.2Z"
                    fill="#53F2AA"
                  />
                </g>
              </svg>
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/10" />

            {/* Teal glow — bottom right */}
            <div
              className="pointer-events-none absolute mix-blend-plus-lighter"
              style={{
                bottom: -60,
                right: -80,
                width: 480,
                height: 260,
                background: "#53F2AA",
                borderRadius: 9999,
                filter: "blur(80px)",
                opacity: 0.22,
              }}
            />

            {/* "Watch Results Video" label — hover */}
            <div className="absolute left-5 top-5 flex -translate-x-3 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <SectionLabel variant="white">The Results</SectionLabel>
            </div>

            {/* Play button */}
            <button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={() => videoHref && window.open(videoHref, "_blank")}
            >
              <span className="relative flex size-[98px] items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/20" />
                <Image
                  src="/images/video-card/play.svg"
                  alt="Play video"
                  width={80}
                  height={80}
                  className="relative transition-transform duration-300 group-hover:scale-110"
                />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
