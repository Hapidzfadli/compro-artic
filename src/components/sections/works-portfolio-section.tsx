"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

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

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "A – Z", value: "az" },
  { label: "Z – A", value: "za" },
];

const PORTFOLIO = [
  {
    id: 1,
    title: "Sinau Print Digital System (2024)",
    category: "Artic Data",
    year: 2024,
    image: "/images/slider-img/slide-3-color.png",
    studyHref: "#",
    pdfHref: "#",
  },
  {
    id: 2,
    title: "Youth Development Insight – Dispora Kota Semarang (2024)",
    category: "Artic Research",
    year: 2024,
    image: "/images/slider-img/slide-2-color.png",
    studyHref: "#",
    pdfHref: "#",
  },
  {
    id: 3,
    title: "Citizen Satisfaction Survey – BRIDA Kota Semarang (2025)",
    category: "Artic Research",
    year: 2025,
    image: "/images/slider-img/slide-1-color.png",
    studyHref: "#",
    pdfHref: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
  },
];

const ITEMS_PER_PAGE = 6;

export function WorksPortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [sortBy, setSortBy] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const base =
      activeFilter === "All Work"
        ? PORTFOLIO
        : PORTFOLIO.filter((p) => p.category === activeFilter);

    return [...base].sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "oldest") return a.year - b.year;
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "za") return b.title.localeCompare(a.title);
      return 0;
    });
  }, [activeFilter, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  function handleFilter(f: string) {
    setActiveFilter(f);
    setPage(1);
  }

  function handleSort(v: string) {
    setSortBy(v);
    setSortOpen(false);
    setPage(1);
  }

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? "Sort By";

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        {/* Filters + Sort By row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
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

          {/* Sort By dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-semibold text-artic-ebony">Sort by</span>
            <div className="relative">
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 rounded-[10px] border border-artic-grey-100 px-4 py-2.5 text-[13px] font-semibold text-artic-grey-400 transition-colors hover:border-artic-persian hover:text-artic-persian"
            >
              {activeSortLabel}
              <ChevronDown
                size={14}
                className={cn("transition-transform duration-200", sortOpen && "rotate-180")}
              />
            </button>

            {sortOpen && (
              <div className="absolute right-0 top-full z-20 mt-1 w-40 overflow-hidden rounded-[10px] border border-artic-grey-100 bg-white shadow-lg">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSort(opt.value)}
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-[13px] font-semibold transition-colors hover:bg-artic-surface",
                      sortBy === opt.value
                        ? "text-artic-persian"
                        : "text-artic-grey-400"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.length === 0 ? (
            <p className="col-span-full py-20 text-center text-artic-grey-300">
              No works found in this category.
            </p>
          ) : (
            paginated.map((item) => (
              <div key={item.id} className="group relative h-[370px] overflow-hidden rounded-[15px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-100"
                />

                {/* Blue gradient — fades in on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 h-[55%] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(19,19,127,0.85) 50%, rgba(19,19,127,1) 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="translate-y-15 transition-transform duration-300 ease-out group-hover:translate-y-0">
                    <h3 className="text-[22px] font-normal leading-[1.3] tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link
                        href={item.studyHref}
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-11 w-40 items-center justify-center rounded-[10px] bg-gradient-secondary text-[14px] font-bold text-artic-ebony transition-opacity duration-300 hover:opacity-80"
                      >
                        See Study Case →
                      </Link>
                      <Link
                        href={item.pdfHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-11 w-35 items-center justify-center rounded-[10px] border border-artic-grey-100 text-[14px] font-semibold text-artic-grey-100 transition-all duration-300 hover:bg-white/20"
                      >
                        Download PDF
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-artic-grey-100 text-artic-grey-400 transition-colors hover:border-artic-persian hover:text-artic-persian disabled:opacity-30"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-[8px] text-[13px] font-semibold transition-colors",
                  p === page
                    ? "bg-artic-persian text-white"
                    : "border border-artic-grey-100 text-artic-grey-400 hover:border-artic-persian hover:text-artic-persian"
                )}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-artic-grey-100 text-artic-grey-400 transition-colors hover:border-artic-persian hover:text-artic-persian disabled:opacity-30"
            >
              <ChevronRight size={16} />
            </button>
          </div>
      </Container>
    </section>
  );
}
