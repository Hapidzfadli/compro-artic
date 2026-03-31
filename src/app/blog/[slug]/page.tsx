"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Copy, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const ARTICLES = [
  { id: 1, timestamp: new Date("2025-02-17"), date: "17 Februari 2025", title: "Quality Transformation: Artic Achieves ISO 9001 — Setting the Gold Standard in Data Consulting", thumbnail: "/images/insight/thumbnail-1.png", category: "Achievement", author: "Artic Analytica" },
  { id: 2, timestamp: new Date("2025-04-06"), date: "6 April 2025", title: "More Than Just Charts: Three Data Visualization Mistakes That Lead CEOs to Make Wrong Decisions", thumbnail: "/images/insight/thumbnail-2.png", category: "Insight", author: "Artic Analytica" },
  { id: 3, timestamp: new Date("2025-05-24"), date: "24 Mei 2025", title: "How the Semarang Local Government Increased Public Satisfaction by 15% Using Only Perception Data?", thumbnail: "/images/insight/thumbnail-3.png", category: "Case Study", author: "Artic Analytica" },
  { id: 4, timestamp: new Date("2025-08-18"), date: "18 Agustus 2025", title: "Data-Driven Policy: How Analytics is Reshaping Government Decision Making in Southeast Asia", thumbnail: "/images/insight/thumbnail-1.png", category: "Policy", author: "Artic Analytica" },
  { id: 5, timestamp: new Date("2025-09-10"), date: "10 September 2025", title: "The Future of Research: Why AI-Assisted Analysis is Changing the Game for Consultants", thumbnail: "/images/insight/thumbnail-2.png", category: "Research", author: "Artic Analytica" },
  { id: 6, timestamp: new Date("2025-10-22"), date: "22 Oktober 2025", title: "Building Data Literacy: How Artic Academy Trains the Next Generation of Analysts", thumbnail: "/images/insight/thumbnail-3.png", category: "Academy", author: "Artic Analytica" },
];

const ARTICLE_BODY = {
  intro: "In a world increasingly driven by data, the ability to not only collect information but to interpret it meaningfully has become the defining competitive advantage. Organizations that harness data effectively are not just surviving — they are leading. Artic Analytica has been at the forefront of this transformation, helping institutions across Indonesia turn complex numbers into clear, actionable strategies.",
  sections: [
    {
      heading: "The Challenge of Making Data Meaningful",
      body: "Most organizations today collect more data than they can effectively use. The real challenge is not acquisition — it's interpretation. Without the right frameworks, even the most sophisticated datasets can lead decision-makers astray. At Artic, we've seen firsthand how organizations drowning in dashboards still fail to act on the right insights.",
      hasList: true,
      listItems: [
        "Misaligned KPIs that measure activity instead of impact",
        "Visualization tools that display data without contextualizing it",
        "Siloed teams that prevent cross-functional data dialogue",
        "Lack of statistical literacy at the leadership level",
      ],
    },
    {
      heading: "Our Approach: Research That Drives Results",
      body: "Artic's methodology begins with understanding the question behind the question. Before we build a single chart or run a single regression, we work closely with stakeholders to define what decision the data needs to support. This clarity-first approach ensures that every analytical output is directly tied to a real-world outcome.",
      hasImage: true,
      image: "/images/insight/thumbnail-2.png",
    },
    {
      heading: "What This Means for You",
      body: "Whether you're a government agency seeking to improve public services, a corporation looking to optimize operations, or an NGO measuring social impact — the principles remain the same. Data is only as powerful as the decisions it enables. Artic Analytica is here to bridge that gap, turning research into direction and numbers into narratives that move people to act.",
    },
  ],
};

function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const pageUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";

  const btnClass = "flex h-[50px] w-[70px] shrink-0 items-center justify-center rounded-[3px] text-white transition-opacity hover:opacity-80";

  return (
    <div className="mx-auto max-w-190 border-t border-[#E0E0F0] px-6 py-12">
      <p className="mb-6 text-center text-[18px] font-medium text-[#161616]">
        Like what you read? Share this article!
      </p>
      <div className="flex items-center justify-center gap-2">
        {/* Copy */}
        <button onClick={handleCopy} className={btnClass} style={{ backgroundColor: "#2020D3" }} aria-label={copied ? "Copied!" : "Copy link"}>
          <Copy className="size-6" />
        </button>
        {/* WhatsApp */}
        <a href={`https://api.whatsapp.com/send?text=${pageUrl}`} target="_blank" rel="noopener noreferrer" className={btnClass} style={{ backgroundColor: "#26D367" }} aria-label="Share on WhatsApp">
          <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        {/* Facebook */}
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`} target="_blank" rel="noopener noreferrer" className={btnClass} style={{ backgroundColor: "#3B5999" }} aria-label="Share on Facebook">
          <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        {/* Twitter/X */}
        <a href={`https://twitter.com/intent/tweet?url=${pageUrl}`} target="_blank" rel="noopener noreferrer" className={btnClass} style={{ backgroundColor: "#00B6F0" }} aria-label="Share on Twitter">
          <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`} target="_blank" rel="noopener noreferrer" className={btnClass} style={{ backgroundColor: "#017AB5" }} aria-label="Share on LinkedIn">
          <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        {/* Email */}
        <a href={`mailto:?body=${pageUrl}`} className={btnClass} style={{ backgroundColor: "#606060" }} aria-label="Share via email">
          <Mail className="size-6" />
        </a>
      </div>
    </div>
  );
}

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = ARTICLES.find((a) => String(a.id) === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* HERO — bg #2020D3, gradient fades to #080817 at bottom */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#2020D3" }}>
        {/* Background image + overlays */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={article.thumbnail}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-artic-persian mix-blend-color" />
          <div className="absolute inset-0 bg-artic-persian opacity-70 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-b from-transparent to-[#080817]" />
        </div>

        {/* Content — left-aligned, pushed down */}
        <div className="relative z-10 mx-auto max-w-281 px-6 pb-20 pt-36 md:px-16 md:pb-24 md:pt-65">
          {/* Category pill */}
          <Link
            href={`/blog/tag/${article.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-block rounded-[5px] px-4 py-2 text-[14px] font-extrabold uppercase tracking-[0.84px] transition-opacity hover:opacity-80"
            style={{
              background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
              color: "#161616",
            }}
          >
            TAG: {article.category.toUpperCase()}
          </Link>

          {/* Title */}
          <h1 className="mt-8 text-[28px] font-medium leading-[1.1] tracking-[-0.84px] text-white md:text-[48px] md:tracking-[-0.96px]">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-[14px] font-extrabold uppercase tracking-[0.96px] text-artic-teal-light md:text-[16px]">
              {article.date}
            </span>
            <span className="size-2 rounded-full bg-artic-teal-light" />
            <span className="text-[14px] font-extrabold uppercase tracking-[0.96px] text-artic-teal-light md:text-[16px]">
              {article.author}
            </span>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#F7F7FF" }}>
        {/* FEATURED IMAGE */}
        <div className="mx-auto max-w-250 px-6 pt-10 md:px-16 md:pt-14">
          <div className="relative h-65 overflow-hidden rounded-[15px] md:h-110 lg:h-155">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[rgba(8,8,23,0.4)]" />
          </div>
        </div>

        {/* ARTICLE BODY */}
        <div className="mx-auto max-w-190 px-6 py-16">
          {/* Intro */}
          <p className="text-[16px] font-normal leading-[1.7] text-[#505050] md:text-[18px]">
            {ARTICLE_BODY.intro}
          </p>

          {ARTICLE_BODY.sections.map((section, i) => (
            <div key={i}>
              <h2 className="mb-4 mt-12 text-[22px] font-medium text-[#161616] md:text-[28px]">
                {section.heading}
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#505050] md:text-[18px]">
                {section.body}
              </p>
              {section.hasList && section.listItems && (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-[1.7] text-[#505050] md:text-[18px]">
                  {section.listItems.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {section.hasImage && section.image && (
                <div className="relative my-10 aspect-video w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={section.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SHARE SECTION */}
        <ShareButtons />

        {/* OTHER UPDATES */}
        <div className="px-6 py-16 md:px-16 lg:px-24" style={{ backgroundColor: "#F3F3FF" }}>
          <div className="mb-10 flex items-center gap-3">
            <div className="size-2 rounded-full bg-artic-teal-dark" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.96px] text-artic-teal-dark lg:text-[13px]">
              OTHER UPDATE
            </span>
          </div>
          <h2 className="mb-10 text-[32px] font-medium leading-[1.1] tracking-[-0.96px] text-artic-ebony md:text-[48px] md:tracking-[-1.44px]">
            Explore More Updates
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherArticles.map((a) => (
              <Link
                key={a.id}
                href={`/blog/${a.id}`}
                className="hover-shadow-card group flex flex-col gap-6 overflow-hidden rounded-2xl p-5 transition-shadow duration-300"
                style={{ backgroundColor: "#F7F7FF" }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={a.thumbnail}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[13px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">
                    {a.date}
                  </span>
                  <p className="text-[15px] font-normal leading-[1.3] tracking-[-0.45px] text-artic-grey-400 lg:text-[17px] lg:tracking-[-0.51px]">
                    {a.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer hideCta />
    </>
  );
}
