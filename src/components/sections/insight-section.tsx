import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/common/primary-button";

const ARTICLES = [
  {
    date: "17 Februari 2025",
    title:
      "Quality Transformation: Artic Achieves ISO 9001 — Setting the Gold Standard in Data Consulting",
    thumbnail: "/images/insight/thumbnail-1.png",
    href: "#",
  },
  {
    date: "6 April 2025",
    title:
      "More Than Just Charts: Three Data Visualization Mistakes That Lead CEOs to Make Wrong Decisions",
    thumbnail: "/images/insight/thumbnail-2.png",
    href: "#",
  },
  {
    date: "24 Mei 2025",
    title:
      "How the Semarang Local Government Increased Public Satisfaction by 15% Using Only Perception Data?",
    thumbnail: "/images/insight/thumbnail-3.png",
    href: "#",
  },
];

export function InsightSection() {
  return (
    <section className="bg-artic-surface py-20 md:py-28">
      <div className="px-4 md:px-10 lg:px-24">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-artic-teal-dark" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.96px] text-artic-grey-400 md:text-[12px] lg:text-[13px]">
                ARTIC UPDATE
              </span>
            </div>
            <h2 className="text-[22px] font-medium leading-[1.1] tracking-[-0.44px] text-artic-ebony md:text-[32px] md:tracking-[-0.64px] lg:text-[44px] lg:tracking-[-0.88px]">
              Stay Updated with Artic
            </h2>
          </div>

          <PrimaryButton
            href="/insights"
            className="h-10 w-fit rounded-[10px] px-6 text-[13px] md:h-11 md:text-[14px]"
          >
            See All Updates →
          </PrimaryButton>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <Link
              key={i}
              href={article.href}
              className="hover-shadow-card group flex flex-col gap-6 overflow-hidden rounded-2xl p-5 transition-shadow duration-300"
              style={{ backgroundColor: "#F7F7FF" }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
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
      </div>
    </section>
  );
}
