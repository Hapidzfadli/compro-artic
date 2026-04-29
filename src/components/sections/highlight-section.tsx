"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/common/primary-button";
import { SectionLabel } from "@/components/common/section-label";

const SLIDES = [
  {
    id: 1,
    image: "/images/slider-img/slide-1.png",
    title: "Public Satisfaction Analysis toward District-Level Public Services in Semarang City",
    description: "We helped the city listen to its citizens and improve local services through a data-driven evaluation framework",
    studyHref: "/works/1",
    pdfHref: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
  },
  {
    id: 2,
    image: "/images/slider-img/slide-2.png",
    title: "Comparative Advantage Analysis of Indonesia's Clove (Syzygium aromaticum) Export in International Market",
    description: "A quantitative study revealing Indonesia's competitive position in the global clove market using RCA and RSCA analysis",
    studyHref: "/works/2",
    pdfHref: "#",
  },
  {
    id: 3,
    image: "/images/slider-img/slide-3.png",
    title: "Business Plan",
    description: "We transformed a conventional printing business into a system-driven, scalable operation with integrated digital strategy",
    studyHref: "/works/3",
    pdfHref: "#",
  },
];

export function HighlightSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(SLIDES.length - 1, i + 1));

  return (
    <section className="group/highlight bg-artic-surface pt-4 pb-14 md:pt-6 md:pb-20">
      <div className="px-5 transition-all duration-500 ease-in-out group-hover/highlight:px-0">
        {/* Card */}
        <div className="relative h-[589px] w-full overflow-hidden rounded-[15px] transition-all duration-500 group-hover/highlight:rounded-none md:h-155">

          {/* Slides track */}
          <div
            className="flex h-full w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-active * 100}%)` }}
          >
            {SLIDES.map((slide) => (
              <div key={slide.id} className="relative h-full basis-full shrink-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div
                  className="absolute inset-0 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover/highlight:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(19,19,127,0) 0%, rgba(19,19,127,0.55) 55%, rgba(19,19,127,0.9) 100%)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* HIGHLIGHT label */}
          <div className="absolute left-5 top-6 md:left-15 md:top-10">
            <SectionLabel variant="white">Highlight</SectionLabel>
          </div>

          {/* Mobile: title + desc — anchored from top */}
          <div className="absolute left-5 right-5 top-64 flex flex-col gap-3.5 md:hidden">
            <div className="flex items-center gap-1 text-[14px] font-bold leading-[1.5] tracking-[-0.02em]">
              <span className="text-artic-teal-light">{String(active + 1).padStart(2, "0")}</span>
              <span className="font-normal text-white">/</span>
              <span className="text-white">{String(SLIDES.length).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-col gap-3.5">
              <h2 className="text-[20px] font-medium leading-[1.1] tracking-[-0.02em] text-white">
                {SLIDES[active].title}
              </h2>
              <p className="text-[14px] font-normal leading-[1.4] tracking-[-0.28px] text-artic-grey-100">
                {SLIDES[active].description}
              </p>
            </div>
          </div>

          {/* Mobile: action + nav — anchored from bottom */}
          <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 md:hidden">
            <div className="flex gap-2">
              <PrimaryButton href={SLIDES[active].studyHref} className="h-13 flex-1 text-[14px]">
                See Study Case →
              </PrimaryButton>
              <Link
                href={SLIDES[active].pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 flex-1 items-center justify-center rounded-[6px] border border-white text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
              >
                Download PDF
              </Link>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={prev}
                disabled={active === 0}
                className="flex size-12 items-center justify-center rounded-[6px] bg-artic-surface text-artic-ebony transition-opacity disabled:opacity-30"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={active === SLIDES.length - 1}
                className="flex size-12 items-center justify-center rounded-[6px] bg-artic-teal-100 text-artic-ebony transition-opacity disabled:opacity-30"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop: title + desc */}
          <div className="absolute hidden left-15 bottom-27.5 w-[min(860px,calc(100%-120px))] flex-col gap-5 md:flex">
            <div className="flex items-center gap-1 text-[14px] font-bold leading-[1.5] tracking-[-0.02em]">
              <span className="text-artic-teal-light">{String(active + 1).padStart(2, "0")}</span>
              <span className="font-normal text-white">/</span>
              <span className="text-white">{String(SLIDES.length).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-white">
                {SLIDES[active].title}
              </h2>
              <p className="w-[min(560px,100%)] text-[15px] font-medium leading-[1.3] tracking-[-0.02em] text-artic-grey-100">
                {SLIDES[active].description}
              </p>
            </div>
          </div>

          {/* Desktop: action buttons bottom-left */}
          <div className="absolute hidden items-center gap-3 md:flex md:bottom-10 md:left-15">
            <PrimaryButton href={SLIDES[active].studyHref} className="h-12 w-50 text-[15px]">
              See Study Case →
            </PrimaryButton>
            <Link
              href={SLIDES[active].pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-37.5 items-center justify-center rounded-[5px] bg-gradient-secondary text-[15px] font-semibold text-artic-ebony transition-opacity hover:opacity-80"
            >
              Download PDF
            </Link>
          </div>

          {/* Desktop: nav buttons bottom-right */}
          <div className="absolute hidden items-center gap-1.5 md:flex md:bottom-10 md:right-15">
            <button
              onClick={prev}
              disabled={active === 0}
              className="flex size-14 items-center justify-center rounded-xl bg-artic-surface text-artic-ebony transition-opacity disabled:opacity-30"
              aria-label="Previous"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={active === SLIDES.length - 1}
              className="flex size-14 items-center justify-center rounded-xl bg-artic-teal-100 text-artic-ebony transition-opacity disabled:opacity-30"
              aria-label="Next"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
