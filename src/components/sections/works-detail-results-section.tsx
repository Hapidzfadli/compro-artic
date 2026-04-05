"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "../common/section-label";

interface Stat {
  value: string;
  label: string;
}

interface WorksDetailResultsProps {
  headline: string;
  description?: string;
  stats: Stat[];
}

export function WorksDetailResultsSection({ headline, description, stats }: WorksDetailResultsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    scrollRef.current?.scrollBy({ left: dir === "next" ? 280 : -280, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-artic-ebony py-16 md:py-24">
      {/* Teal ellipse glow — top */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[200%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-artic-persian blur-[100px] mix-blend-plus-lighter" />

      {/* Vector logo watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "url('/images/footer/vector-logo.png')",
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% top",
          filter: "grayscale(1) brightness(2)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      />

      <Container>
        {/* Label */}
        <SectionLabel variant="white">The Results</SectionLabel>

        {/* Headline */}
        <h2 className="mt-4 max-w-3xl text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[36px] lg:text-[48px]">
          {headline}
        </h2>

        {/* Description — mobile only */}
        {description && (
          <p className="mt-4 text-[14px] leading-[1.4] tracking-[-0.28px] text-white/80 md:hidden">
            {description}
          </p>
        )}

        {/* === MOBILE: horizontal scroll + prev/next buttons === */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="mt-8 flex gap-5 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative h-52 w-65 shrink-0 overflow-hidden rounded-2xl backdrop-blur-sm"
                style={{
                  background: "linear-gradient(182.74deg, rgba(22,22,22,0.5) 33%, rgba(54,54,54,0.5) 97%)",
                }}
              >
                {/* Always-visible teal border */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{ boxShadow: "inset 0 0 0 1.5px #53F2AA" }}
                />

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-3.5">
                  <span
                    className="text-[20px] font-bold leading-[1.1] tracking-[-0.6px]"
                    style={{
                      background: "linear-gradient(to right, #53F2AA, #43FFF9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[14px] leading-[1.4] tracking-[-0.28px] text-white">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next buttons */}
          <div className="mt-4 flex justify-end gap-3">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-artic-surface transition-opacity active:opacity-70"
            >
              <ChevronLeft className="size-5 text-artic-ebony" />
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-artic-teal-100 transition-opacity active:opacity-70"
            >
              <ChevronRight className="size-5 text-artic-ebony" />
            </button>
          </div>
        </div>

        {/* === DESKTOP: 4-column grid (unchanged) === */}
        <div className="mt-12 hidden grid-cols-2 gap-5 md:grid lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative h-60 overflow-hidden rounded-2xl backdrop-blur-sm"
              style={{
                background: "linear-gradient(to bottom, rgba(22,22,22,0.5), rgba(54,54,54,0.5))",
              }}
            >
              {/* Glow */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[200%] -translate-x-1/2 translate-y-full rounded-full bg-artic-teal-light opacity-75 blur-[100px] transition-transform duration-500 ease-out group-hover:translate-y-[60%]" />

              {/* Gradient border */}
              <div
                className="pointer-events-none absolute inset-0 scale-[1.15] rounded-2xl opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
                style={{
                  padding: "11px",
                  background: "linear-gradient(to top right, #53F2AA 0%, #43FFF9 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-3">
                <span className="bg-linear-to-r from-artic-teal-light to-[#43FFF9] bg-clip-text text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-grey-400 transition-colors duration-300 group-hover:text-transparent md:text-[40px]">
                  {stat.value}
                </span>
                <span className="text-[13px] leading-normal text-artic-grey-300 transition-colors duration-300 group-hover:text-white md:text-[14px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
