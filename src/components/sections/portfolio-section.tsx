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
    title: "Sinau Print Digital System (2024)",
    category: "Artic Data",
    image: "/images/slider-img/slide-3-color.png",
    studyHref: "#",
    pdfHref: "#",
  },
  {
    id: 2,
    title: "Youth Development Insight – Dispora Kota Semarang (2024)",
    category: "Artic Research",
    image: "/images/slider-img/slide-2-color.png",
    studyHref: "#",
    pdfHref: "#",
  },
  {
    id: 3,
    title: "Citizen Satisfaction Survey – BRIDA Kota Semarang (2025)",
    category: "Artic Research",
    image: "/images/slider-img/slide-1-color.png",
    studyHref: "#",
    pdfHref: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
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
          <div className="flex flex-wrap items-center gap-1">
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

          <PrimaryButton href="/works" className="h-10 w-40 rounded-xl text-[13px]">
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
