"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/common/article-card";
import { PrimaryButton } from "@/components/common/primary-button";
import { SectionLabel } from "@/components/common/section-label";

const ARTICLES = [
  {
    date: "17 Februari 2025",
    title:
      "Quality Transformation: Artic Achieves ISO 9001 — Setting the Gold Standard in Data Consulting",
    thumbnail: "/images/insight/thumbnail-1.png",
    href: "/blog/1",
  },
  {
    date: "6 April 2025",
    title:
      "More Than Just Charts: Three Data Visualization Mistakes That Lead CEOs to Make Wrong Decisions",
    thumbnail: "/images/insight/thumbnail-2.png",
    href: "/blog/2",
  },
  {
    date: "24 Mei 2025",
    title:
      "How the Semarang Local Government Increased Public Satisfaction by 15% Using Only Perception Data?",
    thumbnail: "/images/insight/thumbnail-3.png",
    href: "/blog/3",
  },
];

const MOBILE_CARD_WIDTH = 260;
const MOBILE_CARD_GAP = 20;

function MobileInsightCard({
  href,
  date,
  title,
  thumbnail,
}: {
  href: string;
  date: string;
  title: string;
  thumbnail: string;
}) {
  return (
    <Link
      href={href}
      className="flex h-[296px] w-[260px] shrink-0 flex-col gap-4 overflow-hidden rounded-[8.571px] bg-white p-[14px]"
    >
      <div className="relative h-[140px] w-full overflow-hidden rounded-[4.762px]">
        <Image src={thumbnail} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.72px] text-artic-teal-dark">
          {date}
        </span>
        <p className="text-[16px] font-normal leading-[1.4] tracking-[-0.32px] text-artic-ebony">
          {title}
        </p>
      </div>
    </Link>
  );
}

export function InsightSection() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const isAtStart = mobileIndex === 0;
  const isAtEnd = mobileIndex === ARTICLES.length - 1;

  return (
    <section className="bg-artic-surface py-20 md:py-28">
      <div className="px-5 md:px-10 lg:px-24">
        <div className="flex flex-col gap-3 md:hidden">
          <SectionLabel variant="dark">ARTIC UPDATE</SectionLabel>
          <h2 className="w-[230px] text-[34px] font-medium leading-[1.1] tracking-[-1.02px] text-artic-ebony">
            Stay Updated with Artic
          </h2>
        </div>

        {/* Header row */}
        <div className="hidden flex-col gap-6 md:flex md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <SectionLabel variant="grey">ARTIC UPDATE</SectionLabel>
            <h2 className="text-[22px] font-medium leading-[1.1] tracking-[-0.44px] text-artic-ebony md:text-[32px] md:tracking-[-0.64px] lg:text-[44px] lg:tracking-[-0.88px]">
              Stay Updated with Artic
            </h2>
          </div>

          <PrimaryButton
            href="/blog"
            className="h-10 w-fit rounded-[10px] px-6 text-[13px] md:h-11 md:text-[14px]"
          >
            See All Updates →
          </PrimaryButton>
        </div>

        {/* Cards grid */}
        <div className="mt-10 hidden grid-cols-1 gap-6 md:mt-12 md:grid md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <ArticleCard
              key={i}
              href={article.href}
              date={article.date}
              title={article.title}
              thumbnail={article.thumbnail}
            />
          ))}
        </div>

        <div className="mt-8 overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: MOBILE_CARD_GAP,
              transform: `translateX(-${mobileIndex * (MOBILE_CARD_WIDTH + MOBILE_CARD_GAP)}px)`,
            }}
          >
            {ARTICLES.map((article, i) => (
              <MobileInsightCard
                key={i}
                href={article.href}
                date={article.date}
                title={article.title}
                thumbnail={article.thumbnail}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous article"
              onClick={() => setMobileIndex((index) => Math.max(0, index - 1))}
              disabled={isAtStart}
              className="flex size-12 items-center justify-center rounded-[6px] bg-artic-grey-300 shadow-[2px_4px_15px_0px_rgba(0,0,0,0.12)] transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Image src="/images/video-card/solar-arrow-up-linear.svg" alt="" width={22} height={22} />
            </button>
            <button
              type="button"
              aria-label="Next article"
              onClick={() => setMobileIndex((index) => Math.min(ARTICLES.length - 1, index + 1))}
              disabled={isAtEnd}
              className="flex size-12 items-center justify-center rounded-[6px] bg-artic-teal-100 shadow-[2px_4px_15px_0px_rgba(0,0,0,0.12)] transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Image src="/images/video-card/solar-arrow-up-linear-1.svg" alt="" width={22} height={22} />
            </button>
          </div>

          <PrimaryButton
            href="/blog"
            className="h-12 w-[198px] justify-center rounded-[8px] px-6 text-[14px]"
          >
            See All Updates {"\u2192"}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
