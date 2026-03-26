"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/common/primary-button";

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
          <SectionLabel className="text-artic-grey-400">OUR WORKS</SectionLabel>
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
            <div key={item.id} className="group relative h-[370px] overflow-hidden rounded-[15px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-100"
              />

              {/* Blue gradient — always visible, more intense on hover */}
              <div
                className="absolute inset-x-0 bottom-0 h-[55%] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(19,19,127,0.85) 50%, rgba(19,19,127,1) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="translate-y-[60px] transition-transform duration-300 ease-out group-hover:translate-y-0">
                  <h3 className="text-[22px] font-normal leading-[1.3] tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href={item.studyHref}
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-[44px] w-[160px] items-center justify-center rounded-[10px] bg-gradient-secondary text-[14px] font-bold text-artic-ebony transition-opacity duration-300 hover:opacity-80"
                    >
                      See Study Case →
                    </Link>
                    <Link
                      href={item.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-[44px] w-[140px] items-center justify-center rounded-[10px] border border-artic-grey-100 text-[14px] font-semibold text-artic-grey-100 transition-all duration-300 hover:bg-white/20"
                    >
                      Download PDF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
