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

export function InsightSection() {
  return (
    <section className="bg-artic-surface py-20 md:py-28">
      <div className="px-4 md:px-10 lg:px-24">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
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
      </div>
    </section>
  );
}
