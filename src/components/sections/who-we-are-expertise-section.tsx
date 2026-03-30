"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/common/section-label";

const EXPERTISES = [
  { icon: "/images/who-we-are/icons/policy-5.svg", title: "Public Policy Expert", desc: "Translating complex regulations and policies into clear, actionable frameworks for institutions and communities." },
  { icon: "/images/who-we-are/icons/policy-4.svg", title: "Management & Strategy Expert", desc: "Crafting evidence-based strategies and organizational blueprints that drive measurable, long-term results." },
  { icon: "/images/who-we-are/icons/policy-3.svg", title: "Data Science Expert", desc: "Turning raw data into powerful insights using advanced analytics, modeling, and visualization techniques." },
  { icon: "/images/who-we-are/icons/policy-2.svg", title: "Behavioral & Social Research Expert", desc: "Understanding human behavior and social dynamics through rigorous qualitative and quantitative research methods." },
  { icon: "/images/who-we-are/icons/policy-1.svg", title: "Communication & Publishing Expert", desc: "Shaping narratives and producing research publications that resonate with diverse audiences." },
  { icon: "/images/who-we-are/icons/policy-0.svg", title: "Technology & Innovation Expert", desc: "Leveraging emerging technologies to design innovative solutions that address complex societal challenges." },
];

const VISIBLE = 4;    // nav logic: max offset = total - VISIBLE
const COLS = 4.5;    // visual divisor: shows ~35% of 5th card as peek

export function WhoWeAreExpertiseSection() {
  const [offset, setOffset] = useState(0);
  const max = EXPERTISES.length - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));

  const progress = max === 0 ? 100 : (offset / max) * 100;

  return (
    <section className="overflow-x-clip bg-white py-20">
      <div className="px-5 md:px-16">
        {/* Header row */}
        <div className="mb-10 flex items-start justify-between gap-8">
          {/* Left: label + heading */}
          <div className="flex flex-col gap-4 lg:w-[80%]">
            <SectionLabel variant="grey-light">Our Expertise</SectionLabel>
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony lg:text-[32px]">
              A collective of specialists from different fields, organized, credible, and experienced in turning complexity into clarity
            </h2>
          </div>

          {/* Nav buttons */}
          <div className="flex shrink-0 self-end gap-1.5">
            <button
              onClick={prev}
              disabled={offset === 0}
              className="flex size-12 items-center justify-center rounded-[10px] bg-artic-persian text-white transition-all hover:brightness-125 active:scale-95"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={offset === max}
              className="flex size-12 items-center justify-center rounded-[10px] bg-artic-teal-100 text-artic-ebony transition-all hover:brightness-110 active:scale-95"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards slider */}
        <div className="overflow-visible">
          <div
            className="flex gap-3.5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${offset} * (100% / ${COLS} + 3.5px)))` }}
          >
            {EXPERTISES.map((item, i) => (
              <div
                key={i}
                className="group relative h-78 shrink-0 overflow-hidden rounded-2xl bg-artic-persian"
                style={{ width: `calc(100% / ${COLS} - 10.5px)` }}
              >
                {/* Wave pattern bg — hidden on hover */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/who-we-are/wave-card.png"
                  alt=""
                  className="pointer-events-none absolute transition-opacity duration-300 group-hover:opacity-0"
                  style={{ top: "15%", right: "-72%", bottom: "-85%", left: "-78%" }}
                />

                {/* Vektor decorative — hidden on hover */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/who-we-are/vektor.svg"
                  alt=""
                  className="pointer-events-none absolute bottom-0 right-0 h-[85%] w-auto transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* Hover photo overlay */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/who-we-are/ceo-bg.jpg"
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* Dark tint over photo */}
                <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon — top-left */}
                <div className="absolute left-5 top-10 size-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt="" className="size-full object-contain" />
                </div>

                {/* Bottom content — title always visible, desc expands upward on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[17px] font-normal leading-[1.3] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-artic-teal-light">
                    {item.title}
                  </p>
                  <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-2 text-[11px] leading-normal text-white/80">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-artic-grey-400">
          <div
            className="h-full rounded-full bg-artic-teal-light transition-all duration-500"
            style={{ width: `${50 + progress * 0.5}%` }}
          />
        </div>
      </div>
    </section>
  );
}
