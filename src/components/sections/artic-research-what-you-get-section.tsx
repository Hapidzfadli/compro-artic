"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const DELIVERABLES = [
  {
    headline: "Clear reports that you can share right away",
    body: "Well-structured reports that present your findings in simple, digestible language, ready to be shared with stakeholders without additional editing.",
    image: "/images/artic-research/deliverable-1.jpg",
  },
  {
    headline: "Data Dashboards and Visuals That Make Sense",
    body: "Dashboards and charts that are clear, intuitive, and easy to understand at a glance.",
    image: "/images/artic-research/deliverable-2.jpg",
  },
  {
    headline: "Key Takeaways and Recommendations",
    body: "A focused summary that tells you what matters most along with practical actions you can apply.",
    image: "/images/artic-research/deliverable-3.jpg",
  },
  {
    headline: "Discussion Sessions with Our Research Team",
    body: "A dedicated session where we walk you through the findings, answer questions, and help you turn insight into decisions.",
    image: "/images/artic-research/deliverable-4.jpg",
  },
];

const PANEL_HEIGHT = 550;
const INDICATOR_HEIGHT = 350;
const INDICATOR_FILL = INDICATOR_HEIGHT / DELIVERABLES.length; // 118px

export function ArticResearchWhatYouGetSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      const scrolled = -top;
      const index = Math.min(
        DELIVERABLES.length - 1,
        Math.max(0, Math.floor(scrolled / PANEL_HEIGHT))
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: PANEL_HEIGHT * DELIVERABLES.length }}
    >
      {/* Panels */}
      {DELIVERABLES.map((item, i) => (
        <div
          key={i}
          className="sticky top-0 bg-white"
          style={{ height: PANEL_HEIGHT, zIndex: i + 1 }}
        >
          <div className="flex h-full justify-between gap-8 px-8 pt-38 md:px-20 lg:px-44">
            {/* Left: label + text */}
            <div className="flex flex-col gap-4 pt-20 lg:w-[40%]">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-artic-teal-dark" />
                <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-artic-grey-400">
                  WHAT YOU&apos;LL GET
                </span>
              </div>

              <h3 className="text-[20px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony lg:text-[28px]">
                {item.headline}
              </h3>
              <p className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400">
                {item.body}
              </p>
            </div>

            {/* Right: image + indicator grouped */}
            <div className="flex shrink-0 items-start gap-4">
              <div className="relative overflow-hidden rounded-[22px]" style={{ height: INDICATOR_HEIGHT, width: 350 }}>
                <Image
                  src={item.image}
                  alt={item.headline}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Progress indicator */}
              <div className="hidden shrink-0 lg:flex lg:items-start">
                <div
                  className="overflow-hidden rounded-full bg-artic-grey-100"
                  style={{ width: 6, height: INDICATOR_HEIGHT }}
                >
                  <div
                    className="rounded-full bg-artic-persian transition-all duration-500"
                    style={{
                      height: INDICATOR_FILL,
                      transform: `translateY(${activeIndex * INDICATOR_FILL}px)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
