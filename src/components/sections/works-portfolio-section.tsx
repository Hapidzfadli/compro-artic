"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
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

export function WorksPortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [sortBy, setSortBy] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
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
        {/* Mobile: filter + sort buttons */}
        <div className="relative z-20 flex items-center gap-2 md:hidden">
          {/* Filter dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => { setFilterOpen((o) => !o); setSortOpen(false); }}
              className="flex h-13 w-full items-center justify-center gap-1 rounded-[6px] bg-gradient-secondary px-4 text-[14px] font-semibold text-artic-ebony"
            >
              {activeFilter}
              <ChevronDown size={20} className={cn("transition-transform duration-200", filterOpen && "rotate-180")} />
            </button>
            {filterOpen && (
              <div className="absolute left-0 top-full z-30 mt-1 w-full overflow-hidden rounded-[10px] border border-artic-grey-100 bg-white shadow-lg">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => { handleFilter(filter); setFilterOpen(false); }}
                    className={cn(
                      "w-full px-4 py-2.5 text-left text-[13px] font-semibold transition-colors hover:bg-artic-surface",
                      activeFilter === filter ? "text-artic-persian" : "text-artic-grey-400"
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Sort dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => { setSortOpen((o) => !o); setFilterOpen(false); }}
              className="flex h-13 w-full items-center justify-center gap-1 rounded-[6px] border border-artic-grey-100 px-4 text-[14px] font-semibold text-artic-grey-400"
            >
              {activeSortLabel}
              <ChevronDown size={20} className={cn("transition-transform duration-200", sortOpen && "rotate-180")} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full z-30 mt-1 w-full overflow-hidden rounded-[10px] border border-artic-grey-100 bg-white shadow-lg">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSort(opt.value)}
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

        {/* Desktop: filter chips + sort */}
        <div className="hidden items-center justify-between gap-4 md:flex">
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
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-semibold text-artic-ebony">Sort by</span>
            <div className="relative">
              <button
                onClick={() => setSortOpen((o) => !o)}
                className="flex items-center gap-2 rounded-[10px] border border-artic-grey-100 px-4 py-2.5 text-[13px] font-semibold text-artic-grey-400 transition-colors hover:border-artic-persian hover:text-artic-persian"
              >
                {activeSortLabel}
                <ChevronDown size={14} className={cn("transition-transform duration-200", sortOpen && "rotate-180")} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full z-20 mt-1 w-40 overflow-hidden rounded-[10px] border border-artic-grey-100 bg-white shadow-lg">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSort(opt.value)}
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
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.length === 0 ? (
            <p className="col-span-full py-20 text-center text-artic-grey-300">
              No works found in this category.
            </p>
          ) : (
            paginated.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                image={item.image}
                studyHref={item.studyHref}
                pdfHref={item.pdfHref}
                showGraphics
              />
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-between">
          <span className="text-[14px] font-normal leading-[1.4] tracking-[-0.28px] text-artic-ebony">
            Page
          </span>

          <div className="flex items-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={cn(
                  "flex size-9.5 items-center justify-center rounded-[6px] text-[12px] font-extrabold uppercase tracking-[0.72px] transition-colors",
                  p === page
                    ? "bg-artic-grey-100 text-artic-ebony"
                    : "text-artic-grey-300 hover:text-artic-ebony"
                )}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex size-9.5 items-center justify-center rounded-[6px] text-[12px] font-extrabold text-artic-grey-300 transition-colors hover:text-artic-ebony disabled:opacity-30"
            >
              &gt;
            </button>
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="flex size-12 items-center justify-center rounded-[6px] bg-artic-teal-100 text-artic-ebony transition-opacity disabled:opacity-30"
            aria-label="Next page"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </Container>
    </section>
  );
}
