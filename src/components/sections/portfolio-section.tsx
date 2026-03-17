"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { cn } from "@/lib/utils";

const FILTERS = ["Semua", "Survei", "Polling", "Data Analytics", "Konsultasi", "Riset"];

const PORTFOLIO = [
  {
    id: 1,
    title: "Survei Kepuasan Pelanggan Bank Nasional",
    category: "Survei",
    image: "/assets/ui/wrapper/Wrapper(1).png",
    year: "2024",
  },
  {
    id: 2,
    title: "Polling Opini Publik Pemilu 2024",
    category: "Polling",
    image: "/assets/ui/wrapper/Wrapper(2).png",
    year: "2024",
  },
  {
    id: 3,
    title: "Analisis Data Pasar E-Commerce Indonesia",
    category: "Data Analytics",
    image: "/assets/ui/wrapper/Wrapper(3).png",
    year: "2023",
  },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered =
    activeFilter === "Semua"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel className="text-artic-teal-dark">
              Portfolio
            </SectionLabel>
            <h2 className="mt-4 max-w-2xl text-mobile-title-h2 text-artic-ebony md:text-headline-h3">
              Merancang Solusi,{" "}
              <span className="text-artic-persian">Membentuk Masa Depan</span>
            </h2>
          </div>

          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-button-sm text-artic-persian transition-opacity hover:opacity-70"
          >
            Lihat Semua <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "h-16 rounded-[5px] px-6 text-button-sm transition-all duration-200",
                activeFilter === filter
                  ? "bg-artic-persian text-white"
                  : "border border-artic-grey-100 bg-white text-artic-grey-400 hover:border-artic-persian hover:text-artic-persian"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href="/works"
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-artic-ebony/80 via-artic-ebony/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-label-xs text-artic-teal-light">
                  {item.category} · {item.year}
                </span>
                <h3 className="mt-2 text-subheadline-sm text-artic-white transition-transform duration-300 group-hover:-translate-y-1">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
