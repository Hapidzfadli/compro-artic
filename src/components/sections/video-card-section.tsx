"use client";

import Image from "next/image";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/common/primary-button";
import { SectionLabel } from "@/components/common/section-label";

interface Member {
  name: string;
  role: string;
  photo: string;
  cardPhoto: string;
  quote: string;
}

const MEMBERS: Member[] = [
  {
    name: "Rian Destianto",
    role: "CEO ARTIC ANALYTICA",
    photo: "/images/video-card/dsc-088241.png",
    cardPhoto: "/images/video-card/image-25.png",
    quote: '"Rian Destianto memimpin Artic Analytica dengan visi transformasi data menjadi wawasan bermakna yang mendorong perubahan nyata bagi komunitas dan organisasi."',
  },
  {
    name: "Khotibul Umam",
    role: "PAKAR SASTRA",
    photo: "/images/video-card/dsc-088241.png",
    cardPhoto: "/images/video-card/image-21.png",
    quote: '"Khotibul Umam is a Indonesian literature expert at Semarang, gain his experience from theater, research of coastal literature around north beach Jawa (pantura)."',
  },
  {
    name: "Wakhidah Kurniawati",
    role: "PENELITI TEKNIK",
    photo: "/images/video-card/dsc-088241.png",
    cardPhoto: "/images/video-card/image-24.png",
    quote: '"Dr.-Ing. Wakhidah is an expert in urban planning and city management. She has conducted research and teaches at the Faculty of Engineering at Undip Semarang."',
  },
  {
    name: "Ahmad Fauzi",
    role: "DATA ANALYST",
    photo: "/images/video-card/dsc-088241.png",
    cardPhoto: "/images/video-card/image-21.png",
    quote: '"Ahmad brings precision and depth to every analysis, turning complex datasets into clear actionable intelligence for our clients."',
  },
  {
    name: "Siti Rahayu",
    role: "RESEARCH LEAD",
    photo: "/images/video-card/dsc-088241.png",
    cardPhoto: "/images/video-card/image-24.png",
    quote: '"Siti ensures every research we conduct meets the highest standards of academic rigor and practical relevance for our clients."',
  },
];

const N = MEMBERS.length;
const EXTENDED = [...MEMBERS, ...MEMBERS, ...MEMBERS];

const ACTIVE_W = 310;
const INACTIVE_W = 190;
const GAP = 24;
const SLIDER_OFFSET = 160;


function CardVectors() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg width="519.067" height="602.646" viewBox="0 0 193 353" fill="none" className="absolute -left-52 top-31.25 opacity-90">
        <path d="M121.254 0H-316.253C-323.243 0 -328.177 4.88673 -325.916 9.48599L-25.6821 599.138C-24.9397 600.596 -22.856 600.595 -22.1161 599.135L180.877 198.774C196.502 168.017 196.502 134.385 180.877 103.627L130.712 4.74298C129.272 1.86845 125.366 0 121.049 0H121.254Z" fill="#2020D3" />
      </svg>
      <svg width="715.065" height="974.036" viewBox="0 0 389 520" fill="none" className="absolute -bottom-57.5 -right-48 opacity-90">
        <path d="M689.109 245.839L506.129 -115.778C502.839 -122.102 490.092 -122.102 487.008 -115.778L474.261 -90.7691L323.354 207.32L0.569588 844.029C-1.69196 848.629 3.03672 853.516 10.2326 853.516H447.74C452.057 853.516 455.963 851.647 457.403 848.773L704.734 360.964C718.509 333.656 718.509 303.904 704.734 276.596L691.987 251.732L689.109 245.839Z" fill="#53F2AA" />
      </svg>
    </div>
  );
}

export function VideoCardSection() {
  const [activeIndex, setActiveIndex] = useState(N); // start at middle copy
  const [animated, setAnimated] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [profileIndex, setProfileIndex] = useState(0);
  const jumping = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => setProfileIndex((i) => (i + 1) % N), 4000);
    return () => clearInterval(timer);
  }, []);

  // After slide reaches clone edge, silently jump back to middle copy
  useEffect(() => {
    if (!animated || jumping.current) return;
    if (activeIndex < N || activeIndex >= N * 2) {
      jumping.current = true;
      const timer = setTimeout(() => {
        setAnimated(false);
        setActiveIndex((prev) => {
          if (prev < N) return prev + N;
          if (prev >= N * 2) return prev - N;
          return prev;
        });
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimated(true);
            jumping.current = false;
          });
        });
      }, 520);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, animated]);

  const prev = () => {
    if (jumping.current) return;
    setAnimated(true);
    setActiveIndex((i) => i - 1);
  };
  const next = () => {
    if (jumping.current) return;
    setAnimated(true);
    setActiveIndex((i) => i + 1);
  };

  const translateX = SLIDER_OFFSET - activeIndex * (INACTIVE_W + GAP);

  return (
    <section className="relative bg-artic-ebony pb-[120px] pt-[100px]">

{/* Rectangle wave layers — z:8, di atas accent (z:5), di bawah content (z:10+) */}
      <div
        className="pointer-events-none absolute mix-blend-overlay"
        style={{ zIndex: 8, top: 650, left: 0, width: "100%", height: 480, backgroundImage: "url('/images/video-card/rectangle.png')", backgroundSize: "cover" }}
      />
      <div
        className="pointer-events-none absolute mix-blend-plus-lighter"
        style={{ zIndex: 8, top: 650, left: 0, width: "100%", height: 480, backgroundImage: "url('/images/video-card/rectangle-2.png')", backgroundSize: "cover" }}
      />

      <div className="pointer-events-none absolute left-0 top-0 z-10 w-55" style={{ height: 700, background: "linear-gradient(270deg, rgba(22,22,22,0) 0%, #161616 100%)" }} />
      <div className="pointer-events-none absolute right-0 top-0 z-10 w-55" style={{ height: 700, background: "linear-gradient(90deg, rgba(22,22,22,0) 0%, #161616 100%)" }} />

      <div className="relative z-20 mb-[60px] flex items-end justify-between px-40">
        <div className="flex flex-col gap-4">
          <SectionLabel variant="white">ARTIC PEOPLE</SectionLabel>
          <h2 className="text-[44px] font-medium leading-[1.1] tracking-[-1px] text-white">
            Profesional Behind
            <br />
            <span className="text-artic-teal-light">Artic Analytica</span>
          </h2>
        </div>

        <div className="flex items-center gap-[6px]">
          <button onClick={prev} aria-label="Previous" className="flex size-12 items-center justify-center rounded-xl bg-artic-persian transition-opacity hover:opacity-80">
            <Image src="/images/video-card/solar-arrow-up-linear.svg" alt="" width={20} height={20} />
          </button>
          <button onClick={next} aria-label="Next" className="flex size-12 items-center justify-center rounded-xl bg-artic-teal-light transition-opacity hover:opacity-80">
            <Image src="/images/video-card/solar-arrow-up-linear-1.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </div>

      <div className="relative mb-[80px] h-97.5 ">
        <LayoutGroup>
        <div
          className="absolute top-0 flex"
          style={{ gap: GAP, transform: `translateX(${translateX}px)`, transition: animated ? "transform 500ms ease-in-out" : "none" }}
        >
          {EXTENDED.map((member, i) => {
            const isActive = i === activeIndex;
            const isHovered = hoveredIndex === i;
            const isExpanded = isActive || isHovered;
            const hoverTarget = hoveredIndex !== null && hoveredIndex !== activeIndex ? hoveredIndex : null;
            const half = (ACTIVE_W - INACTIVE_W) / 2;

            return (
              <motion.div
                key={`${i}-${member.name}`}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  width: isExpanded ? ACTIVE_W : INACTIVE_W,
                  marginLeft: hoverTarget === i ? -half : 0,
                  x: hoverTarget !== null && i < hoverTarget ? -half : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                  "group relative flex-none cursor-pointer overflow-hidden rounded-[15px] border transition-[border-color] duration-500",
                  isExpanded ? "border-artic-teal-light" : "border-artic-grey-400",
                )}
                style={{ height: 390 }}
              >
                <CardVectors />

                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: isExpanded ? 1 : 0 }}
                >
                  <Image src="/images/video-card/accent.svg" alt="" fill className="object-cover" />
                </div>

                <div style={{ position: "absolute", bottom: 0, left: isExpanded ? 0 : -55, width: 310, height: 380, overflow: "hidden", transition: "left 0.5s ease-in-out" }}>
                  <Image
                    src="/images/video-card/DSC08824%201.png"
                    alt={member.name}
                    fill
                    unoptimized
                    className="object-cover object-top"
                  />
                </div>

                {!isActive && (
                  <div className="absolute inset-0 bg-[#080817] opacity-35 mix-blend-multiply" />
                )}

                {isActive && (
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[141px]"
                    style={{ background: "linear-gradient(to bottom, rgba(22,22,22,0) 0%, #161616 77.53%)", transform: "scaleY(-1)" }}
                  />
                )}

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px]"
                  style={{ background: "linear-gradient(to top, #161616 0%, rgba(22,22,22,0) 100%)" }}
                />

                <div
                  className="pointer-events-none absolute bottom-8 left-1/2 flex w-50 flex-col items-center gap-1 text-center"
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: `translateX(-50%) translateY(${isExpanded ? 0 : 20}px)`,
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                  }}
                >
                  <p className="w-full text-[28px] font-normal leading-[1.3] tracking-[-0.84px] text-white">{member.name}</p>
                  <p className="w-full text-[16px] font-extrabold uppercase tracking-[0.96px] text-artic-teal-light">{member.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        </LayoutGroup>
      </div>

      <div className="relative z-20 flex items-start gap-16 px-40 mt-40 n ">
        <div className="flex w-110 shrink-0 flex-col">
          <div className="relative" style={{ height: 130 }}>
            {/* Accent — kanan atas card */}
            <Image src="/images/video-card/accent.svg" alt="" width={280} height={220} className="pointer-events-none absolute" style={{ top: -100, right: -70 }} />
            {/* Accent — kiri bawah card */}
            <Image src="/images/video-card/accent.svg" alt="" width={280} height={220} className="pointer-events-none absolute" style={{ bottom: -100, left: -100 }} />

            {/* Back card — static, shows upcoming member */}
            <div
              className="absolute flex items-center gap-4 rounded-2xl p-3 shadow-[2px_4px_20px_0px_rgba(0,0,0,0.15)] bg-white/80"
              style={{ top: 28, left: 14, width: 340, zIndex: 1, filter: "blur(2px)" }}
            >
              <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-4 border-[#f3f3ff]">
                <Image src={MEMBERS[(profileIndex + 1) % N].cardPhoto} alt="" fill className="object-cover" />
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <p className="text-[15px] font-semibold leading-[1.3] tracking-[-0.4px] text-artic-ebony">{MEMBERS[(profileIndex + 1) % N].name}</p>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">{MEMBERS[(profileIndex + 1) % N].role}</p>
              </div>
            </div>

            {/* Front card — animates from back position, exits upward */}
            <AnimatePresence initial={false}>
              <motion.div
                key={profileIndex}
                initial={{ y: 28, x: 14, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute flex items-center gap-4 rounded-2xl p-3 shadow-[2px_4px_20px_0px_rgba(0,0,0,0.15)] bg-white"
                style={{ top: 0, left: 0, width: 340, zIndex: 2 }}
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-4 border-[#f3f3ff]">
                  <Image src={MEMBERS[profileIndex].cardPhoto} alt="" fill className="object-cover" />
                </div>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <p className="text-[15px] font-semibold leading-[1.3] tracking-[-0.4px] text-artic-ebony">{MEMBERS[profileIndex].name}</p>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">{MEMBERS[profileIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-16">
            <SectionLabel variant="white" size="lg">TEAM PROFILE</SectionLabel>
          </div>

          <div className="relative mt-[22px] w-full overflow-hidden" style={{ minHeight: 120 }}>
            {MEMBERS.map((member, i) => (
              <p
                key={i}
                className={cn(
                  "absolute top-0 w-full text-[18px] font-normal leading-[1.3] tracking-[-0.84px] text-white transition-opacity duration-500",
                  i === profileIndex ? "opacity-100" : "pointer-events-none opacity-0",
                )}
              >
                {member.quote}
              </p>
            ))}
            <p className="invisible w-full text-[18px] font-normal leading-[1.3] text-white">{MEMBERS[profileIndex].quote}</p>
          </div>

          <PrimaryButton href="/who-we-are" className=" w-fit px-10 py-4 text-[18px]">
            Who We Are →
          </PrimaryButton>
        </div>

        <div className="group relative w-130 shrink-0 overflow-hidden rounded-[15px]" style={{ height: 400 }}>
          <Image src="/images/video-card/image-25.png" alt="Video thumbnail" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />
          <div
            className="pointer-events-none absolute mix-blend-plus-lighter"
            style={{ bottom: -80, right: -100, width: 600, height: 300, background: "#53F2AA", borderRadius: 9999, filter: "blur(80px)", opacity: 0.12 }}
          />
          {/* Watch Profile text — appears from top-left on hover */}
          <div className="absolute left-5 top-5 -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <SectionLabel variant="white">Watch Profile</SectionLabel>
          </div>
          {/* Play button with pulse animation */}
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="relative flex size-[98px] items-center justify-center">
              {/* Pulse ring */}
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/20 duration-1000" />
              <Image src="/images/video-card/play.svg" alt="Play video" width={80} height={80} className="relative transition-transform duration-300 group-hover:scale-110" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom gradient — transisi ke section berikutnya */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: -281,
          left: -150,
          right: -150,
          height: 562,
          background: "#13137F",
          filter: "blur(150px)",
          zIndex: 6,
        }}
      />
    </section>
  );
}
