"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PrimaryButton } from "@/components/common/primary-button";

const ARTICLES = [
  { id: 1, timestamp: new Date("2025-02-17"), date: "17 Februari 2025", title: "Quality Transformation: Artic Achieves ISO 9001 — Setting the Gold Standard in Data Consulting", thumbnail: "/images/insight/thumbnail-1.png", category: "Achievement" },
  { id: 2, timestamp: new Date("2025-04-06"), date: "6 April 2025", title: "More Than Just Charts: Three Data Visualization Mistakes That Lead CEOs to Make Wrong Decisions", thumbnail: "/images/insight/thumbnail-2.png", category: "Insight" },
  { id: 3, timestamp: new Date("2025-05-24"), date: "24 Mei 2025", title: "How the Semarang Local Government Increased Public Satisfaction by 15% Using Only Perception Data?", thumbnail: "/images/insight/thumbnail-3.png", category: "Case Study" },
  { id: 4, timestamp: new Date("2025-08-18"), date: "18 Agustus 2025", title: "Data-Driven Policy: How Analytics is Reshaping Government Decision Making in Southeast Asia", thumbnail: "/images/insight/thumbnail-1.png", category: "Policy" },
  { id: 5, timestamp: new Date("2025-09-10"), date: "10 September 2025", title: "The Future of Research: Why AI-Assisted Analysis is Changing the Game for Consultants", thumbnail: "/images/insight/thumbnail-2.png", category: "Research" },
  { id: 6, timestamp: new Date("2025-10-22"), date: "22 Oktober 2025", title: "Building Data Literacy: How Artic Academy Trains the Next Generation of Analysts", thumbnail: "/images/insight/thumbnail-3.png", category: "Academy" },
];

const SORT_OPTIONS = ["Newest Article", "Oldest Article"];
const PER_PAGE = 9;

function toSlug(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export default function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = use(params);
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const [page, setPage] = useState(1);
  const [sortOpen, setSortOpen] = useState(false);

  // Match articles whose category slug equals the tag param
  const filtered = ARTICLES
    .filter((a) => toSlug(a.category) === tag)
    .sort((a, b) =>
      sort === "Newest Article"
        ? b.timestamp.getTime() - a.timestamp.getTime()
        : a.timestamp.getTime() - b.timestamp.getTime()
    );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Display name: un-slugify the tag
  const tagDisplay = tag.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="relative overflow-hidden bg-artic-persian" style={{ minHeight: 320 }}>
        {/* Decorative watermark */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/footer/vector-logo.png')",
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right -10% bottom -20%",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1700px] px-6 pb-20 pt-36 md:px-[110px] md:pb-24 md:pt-64">
          <h1 className="text-[36px] font-medium leading-[1.1] tracking-[-0.72px] text-white md:text-[56px] md:tracking-[-1.12px] lg:text-[72px] lg:tracking-[-1.44px]">
            Tag: {tagDisplay}
          </h1>
        </div>
      </div>

      {/* BREADCRUMBS */}
      <div className="bg-artic-ebony px-6 py-5 md:px-[110px]">
        <div className="flex items-center gap-4 text-[13px] font-medium tracking-[-0.36px] text-[#DCDCDC] md:text-[15px]">
          <Link href="/" className="hover:text-artic-teal-light transition-colors">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-artic-teal-light transition-colors">Artic Update</Link>
          <span>›</span>
          <span className="font-bold text-artic-teal-light underline">{tagDisplay}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white px-6 pb-20 pt-10 md:px-[110px]">
        {/* Sort bar */}
        <div className="mb-8 flex items-center justify-end gap-4">
          <span className="text-[13px] font-semibold text-artic-ebony">Sort by</span>
          <div className="relative">
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex h-9 w-40 items-center justify-between gap-2 rounded-xl border border-artic-grey-100 px-4 text-[13px] font-semibold text-artic-grey-400"
            >
              <span>{sort}</span>
              <ChevronDown className={`size-4 shrink-0 transition-transform ${sortOpen ? "rotate-180" : ""}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full z-20 mt-1 w-full overflow-hidden rounded-xl border border-artic-grey-100 bg-white shadow-md">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setSort(opt); setPage(1); setSortOpen(false); }}
                    className={`block w-full px-4 py-2.5 text-left text-[13px] font-semibold transition-colors hover:bg-[#F7F7FF] ${sort === opt ? "text-artic-persian" : "text-[#505050]"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Empty state */}
        {paginated.length === 0 && (
          <div className="flex flex-col items-center py-12 text-center">
            <div className="relative mx-auto h-40 w-52 md:h-52 md:w-68">
              <Image src="/images/blog/empty-state.svg" alt="No articles" fill className="object-contain" />
            </div>
            <h2 className="mt-6 text-[20px] font-medium leading-[1.1] tracking-[-0.6px] text-artic-ebony md:text-[28px]">
              No articles found for this tag
            </h2>
            <p className="mt-2 text-[13px] font-medium leading-[1.3] tracking-[-0.3px] text-artic-grey-400 md:text-[15px]">
              Try exploring other tags or browse all updates.
            </p>
            <PrimaryButton href="/blog" className="mt-6 h-10 rounded-[10px] px-7 text-[13px] md:h-11 md:text-[14px]">
              Back to Updates →
            </PrimaryButton>
          </div>
        )}

        {/* Grid */}
        {paginated.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {paginated.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
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
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-1">
            <span className="mr-3 text-[15px] font-medium text-artic-ebony">Page</span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`flex size-11 items-center justify-center rounded-sm text-[15px] font-bold transition-colors ${
                    page === p ? "text-artic-ebony" : "text-artic-grey-300 hover:text-artic-grey-400"
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
        )}
      </div>

      <Footer hideCta />
    </>
  );
}
