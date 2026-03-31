"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Semua", "Artikel", "Berita", "Riset"];

const NEWS = [
  {
    id: 1,
    category: "Artikel",
    title: "Tren Survei Digital di Era Post-Pandemi: Peluang dan Tantangan",
    excerpt:
      "Pandemi mengubah cara kita mengumpulkan data. Metode survei digital kini menjadi standar baru dalam riset pasar dan opini publik.",
    date: "12 Mar 2025",
    image: "/assets/ui/wrapper/Wrapper(1).png",
    slug: "tren-survei-digital",
  },
  {
    id: 2,
    category: "Berita",
    title: "Artic Analytics Raih Penghargaan Riset Terbaik 2025",
    excerpt:
      "Kami bangga menerima penghargaan dari Asosiasi Riset Indonesia atas kontribusi dalam pengembangan metodologi penelitian kuantitatif.",
    date: "5 Mar 2025",
    image: "/assets/ui/wrapper/Wrapper(2).png",
    slug: "penghargaan-riset-2025",
  },
  {
    id: 3,
    category: "Riset",
    title: "Laporan: Kepercayaan Publik terhadap Institusi Negara 2024",
    excerpt:
      "Temuan terbaru dari survei nasional kami menunjukkan perubahan signifikan dalam pola kepercayaan masyarakat terhadap berbagai institusi.",
    date: "28 Feb 2025",
    image: "/assets/ui/wrapper/Wrapper(3).png",
    slug: "laporan-kepercayaan-publik-2024",
  },
];

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? NEWS
      : NEWS.filter((n) => n.category === activeCategory);

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel variant="teal">Insight</SectionLabel>
            <h2 className="mt-4 text-mobile-title-h2 text-artic-ebony md:text-headline-h3">
              Ikuti Kabar Terbaru{" "}
              <span className="text-artic-persian">Artic</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-button-sm text-artic-persian transition-opacity hover:opacity-70"
          >
            Lihat Semua <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "h-16 rounded-[5px] px-6 text-button-sm transition-all duration-200",
                activeCategory === cat
                  ? "bg-artic-persian text-white"
                  : "border border-artic-grey-100 bg-white text-artic-grey-400 hover:border-artic-persian hover:text-artic-persian"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-artic-grey-100 transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-artic-surface px-3 py-1 text-label-xs text-artic-persian">
                    {item.category}
                  </span>
                  <span className="text-body-xs text-artic-grey-300">{item.date}</span>
                </div>
                <h3 className="text-subheadline-sm text-artic-ebony transition-colors group-hover:text-artic-persian">
                  {item.title}
                </h3>
                <p className="text-body-sm text-artic-grey-400 line-clamp-2">{item.excerpt}</p>
                <div className="mt-auto flex items-center gap-2 text-button-sm text-artic-persian">
                  Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
