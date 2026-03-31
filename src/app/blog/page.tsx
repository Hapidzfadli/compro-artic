"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Loader2, Search } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const ARTICLES = [
  { id: 1, timestamp: new Date("2025-02-17"), date: "17 Februari 2025", title: "Quality Transformation: Artic Achieves ISO 9001 — Setting the Gold Standard in Data Consulting", thumbnail: "/images/insight/thumbnail-1.png", href: "/blog/1" },
  { id: 2, timestamp: new Date("2025-04-06"), date: "6 April 2025", title: "More Than Just Charts: Three Data Visualization Mistakes That Lead CEOs to Make Wrong Decisions", thumbnail: "/images/insight/thumbnail-2.png", href: "/blog/2" },
  { id: 3, timestamp: new Date("2025-05-24"), date: "24 Mei 2025", title: "How the Semarang Local Government Increased Public Satisfaction by 15% Using Only Perception Data?", thumbnail: "/images/insight/thumbnail-3.png", href: "/blog/3" },
  { id: 4, timestamp: new Date("2025-08-18"), date: "18 Agustus 2025", title: "Data-Driven Policy: How Analytics is Reshaping Government Decision Making in Southeast Asia", thumbnail: "/images/insight/thumbnail-1.png", href: "/blog/4" },
  { id: 5, timestamp: new Date("2025-09-10"), date: "10 September 2025", title: "The Future of Research: Why AI-Assisted Analysis is Changing the Game for Consultants", thumbnail: "/images/insight/thumbnail-2.png", href: "/blog/5" },
  { id: 6, timestamp: new Date("2025-10-22"), date: "22 Oktober 2025", title: "Building Data Literacy: How Artic Academy Trains the Next Generation of Analysts", thumbnail: "/images/insight/thumbnail-3.png", href: "/blog/6" },
];

const HIGHLIGHTS = [ARTICLES[0], ARTICLES[2]];
const SORT_OPTIONS = ["Newest Article", "Oldest Article", "Most Popular"];
const PER_PAGE = 6;

export default function UpdatesPage() {
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (v: string) => startTransition(() => { setSearch(v); setPage(1); });
  const handleSort = (v: string) => startTransition(() => { setSort(v); setPage(1); });

  const filtered = ARTICLES
    .filter((a) => a.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "Newest Article") return b.timestamp.getTime() - a.timestamp.getTime();
      if (sort === "Oldest Article") return a.timestamp.getTime() - b.timestamp.getTime();
      return a.id - b.id; // Most Popular: default order
    });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <Navbar />

      {/* HERO — taller to allow card overlap */}
      <div className="relative overflow-hidden bg-artic-persian pb-40 pt-32 md:pb-52 md:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/blog/hero-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-artic-persian mix-blend-color" />
          <div className="absolute inset-0 bg-artic-persian mix-blend-soft-light opacity-[0.84]" />
        </div>
        {/* Teal glow */}
        <div
          className="pointer-events-none absolute bottom-[-20%] left-1/2 -translate-x-1/2 mix-blend-plus-lighter"
          style={{
            width: 1600,
            height: 600,
            background:
              "radial-gradient(ellipse, rgba(83,242,170,0.3) 0%, transparent 65%)",
          }}
        />
        <h1 className="relative z-10 text-center text-[32px] font-medium leading-[1.1] tracking-[-0.96px] text-white md:text-[52px] md:tracking-[-1.56px]">
          Artic Update
        </h1>
      </div>

      <div className="bg-artic-surface">
        {/* HIGHLIGHT CARDS — pulled up to overlap hero */}
        <div className="-mt-24 px-6 md:-mt-32 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {HIGHLIGHTS.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="group relative block h-55 w-full overflow-hidden rounded-2xl md:h-75 lg:h-95"
              >
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(8,8,23,0.15)] to-[#080817]" />
                <div className="absolute bottom-5 left-0 right-15 px-8 pb-2">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-light">
                    {article.date}
                  </p>
                  <h2 className="mt-2 w-full text-[15px] font-normal leading-[1.2] tracking-[-0.45px] text-white md:text-[18px] lg:text-[22px] lg:tracking-[-0.66px]">
                    {article.title}
                  </h2>
                </div>
              </Link>
            ))} 
          </div>
        </div>

        {/* ARTICLE LIST */}
        <div className="px-6 pb-20 pt-10 md:px-16 lg:px-24" style={{ backgroundColor: "#F7F7FF" }}>
          {/* Search + Sort bar */}
          <div className="mb-8 flex flex-col gap-4 border-artic-grey-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-semibold text-artic-ebony">Search</span>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-artic-grey-200" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search keywords.."
                  className="h-11 w-[200px] rounded-[10px] border border-artic-grey-100 pl-9 pr-4 text-[13px] text-artic-grey-400 placeholder:text-artic-grey-200 outline-none focus:border-artic-grey-300 md:w-[320px]" style={{ backgroundColor: "#F7F7FF" }}
                />
              </div>
            </div>
            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-semibold text-artic-ebony">Sort by</span>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => handleSort(e.target.value)}
                  className="h-11 cursor-pointer appearance-none rounded-[10px] border border-artic-grey-100 py-2 pl-4 pr-10 text-[13px] font-semibold text-artic-grey-400 outline-none" style={{ backgroundColor: "#F7F7FF" }}
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-artic-grey-400" />
              </div>
            </div>
          </div>

          {/* Grid */}
          {isPending && (
            <div className="flex justify-center py-16">
              <Loader2 className="size-8 animate-spin text-artic-persian" />
            </div>
          )}
          <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 ${isPending ? "hidden" : ""}`}>
            {paginated.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="hover-shadow-card group flex flex-col gap-6 overflow-hidden rounded-2xl p-5 transition-shadow duration-300"
                style={{ backgroundColor: "#F7F7FF" }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">
                    {article.date}
                  </span>
                  <p className="text-[15px] font-normal leading-[1.3] tracking-[-0.45px] text-artic-grey-400 lg:text-[17px] lg:tracking-[-0.51px]">
                    {article.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-14 flex items-center justify-center gap-1">
            <span className="mr-3 text-[15px] font-medium text-artic-ebony">Page</span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`flex size-11 items-center justify-center rounded-sm text-[15px] font-bold transition-colors ${
                    page === p
                      ? "text-artic-ebony"
                      : "text-artic-grey-300 hover:text-artic-grey-400"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                className="ml-1 flex size-11 items-center justify-center rounded-sm bg-artic-teal-100 transition-opacity hover:opacity-80"
                aria-label="Next page"
              >
                <ChevronRight className="size-5 text-artic-ebony" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer hideCta />
    </>
  );
}
