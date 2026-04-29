"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/common/primary-button";
import { PortfolioCard } from "@/components/common/portfolio-card";

const FILTERS = [
  "All Work",
  "Artic Data",
  "Artic Consulting",
  "Artic Policy Lab",
  "Artic Research",
  "Artic Insight Hub",
  "Artic Academy",
  "Artic Publishing",
];

const PORTFOLIO = [
  {
    id: 1,
    title: "Public Satisfaction Analysis toward District-Level Public Services in Semarang City",
    category: "Artic Research",
    image: "/images/slider-img/slide-1-color.png",
    studyHref: "/works/1",
    pdfHref: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
  },
  {
    id: 2,
    title: "Comparative Advantage Analysis of Indonesia's Clove (Syzygium aromaticum) Export in International Market",
    category: "Artic Research",
    image: "/images/slider-img/slide-2-color.png",
    studyHref: "/works/2",
    pdfHref: "#",
  },
  {
    id: 3,
    title: "Business Plan",
    category: "Artic Consulting",
    image: "/images/slider-img/slide-3-color.png",
    studyHref: "/works/3",
    pdfHref: "#",
  },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const filtered =
    activeFilter === "All Work"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        {/* Row 1: label + title */}
        <div className="flex flex-col gap-6">
          <SectionLabel variant="grey">OUR WORKS</SectionLabel>
          <h2 className="text-headline-h4 text-artic-ebony">
            Building Smart Solutions for the Future
          </h2>
        </div>

        {/* Row 2: filters + see all button */}
        <div className="mt-8 flex items-center justify-between gap-4">
          {/* Mobile: All Work dropdown-style + See All Works side by side */}
          <div className="flex w-full gap-2 md:hidden">
            <button
              className="flex h-13 flex-1 items-center justify-center gap-1.5 rounded-[6px] bg-gradient-secondary text-[14px] font-semibold text-artic-ebony"
            >
              All Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <PrimaryButton href="/works" className="h-13 flex-1 rounded-[6px] text-[14px]">
              See All Works →
            </PrimaryButton>
          </div>

          {/* Desktop: filter chips */}
          <div className="hidden flex-wrap items-center gap-1 md:flex">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-[8px] px-3 py-2.5 text-[13px] font-semibold leading-none transition-all duration-200",
                  activeFilter === filter
                    ? "bg-gradient-secondary text-artic-ebony"
                    : "text-artic-grey-200 hover:bg-artic-surface hover:text-artic-grey-400"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <PrimaryButton href="/works" className="hidden h-10 w-40 rounded-xl text-[13px] md:inline-flex">
            See All Work →
          </PrimaryButton>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              image={item.image}
              studyHref={item.studyHref}
              pdfHref={item.pdfHref}
              showGraphics
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
