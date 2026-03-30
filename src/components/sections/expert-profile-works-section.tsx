"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
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
    studyHref: "/works/1",
    pdfHref: "#",
  },
  {
    id: 2,
    title: "Youth Development Insight – Dispora Kota Semarang (2024)",
    category: "Artic Research",
    year: 2024,
    image: "/images/slider-img/slide-2-color.png",
    studyHref: "/works/2",
    pdfHref: "#",
  },
  {
    id: 3,
    title: "Citizen Satisfaction Survey – BRIDA Kota Semarang (2025)",
    category: "Artic Research",
    year: 2025,
    image: "/images/slider-img/slide-1-color.png",
    studyHref: "/works/3",
    pdfHref: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
  },
];

const ITEMS_PER_PAGE = 6;

export function ExpertProfileWorksSection() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [sortBy, setSortBy] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = (() => {
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
  })();

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? "Sort By";

  return (
    <section className="px-5 py-16 md:px-16">
      <h2 className="mb-10 text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony md:text-[44px]">
        Works at Artic Analytica
      </h2>

      {/* Filter + Sort row */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setPage(1); }}
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

        {/* Sort dropdown */}
        <div className="flex items-center gap-3">
          <span className="text-[14px] font-semibold text-artic-ebony">Sort by</span>
          <div className="relative">
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex h-[48px] items-center gap-2 rounded-[10px] border border-artic-grey-100 px-5 text-[14px] font-semibold text-artic-grey-400 transition-colors hover:border-artic-persian"
            >
              {activeSortLabel}
              <ChevronRight size={14} className={cn("transition-transform", sortOpen && "rotate-90")} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full z-10 mt-1 w-36 overflow-hidden rounded-[8px] border border-artic-grey-100 bg-white shadow-lg">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); setPage(1); }}
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-[13px] font-semibold transition-colors hover:bg-artic-surface",
                      sortBy === opt.value ? "text-artic-persian" : "text-artic-grey-400"
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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                className="scale-105 object-cover object-top grayscale transition-all duration-500 group-hover:scale-100 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[55%] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(19,19,127,0.85) 50%, rgba(19,19,127,1) 100%)",
                }}
              />
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
      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-artic-surface text-artic-grey-300 transition hover:bg-artic-surface/90 disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-[14px] text-artic-grey-400">Page</span>
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-[8px] text-[14px] font-semibold transition-colors hover:bg-artic-surface",
                p === page
                  ? "text-artic-ebony"
                  : "text-artic-grey-300 hover:text-artic-ebony"
              )}
            >
              {p}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-artic-teal-100 text-artic-ebony transition-all hover:brightness-110 disabled:opacity-30"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
