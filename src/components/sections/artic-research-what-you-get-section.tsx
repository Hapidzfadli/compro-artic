"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/common/section-label";

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
const INDICATOR_FILL = INDICATOR_HEIGHT / DELIVERABLES.length;
const MOBILE_PANEL_HEIGHTS = [582, 462, 462, 462];
const MOBILE_TOTAL_HEIGHT = MOBILE_PANEL_HEIGHTS.reduce(
  (total, height) => total + height,
  0
);
const MOBILE_TRACK_HEIGHT = 333;
const MOBILE_THUMB_HEIGHT = 96;

export function ArticResearchWhatYouGetSection() {
  const desktopSectionRef = useRef<HTMLElement>(null);
  const mobileSectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        if (!mobileSectionRef.current) return;

        const { top } = mobileSectionRef.current.getBoundingClientRect();
        const scrolled = Math.max(0, -top);
        let cumulative = 0;
        let nextIndex = 0;

        MOBILE_PANEL_HEIGHTS.forEach((height, index) => {
          if (scrolled >= cumulative) {
            nextIndex = index;
          }

          cumulative += height;
        });

        setActiveIndex(Math.min(DELIVERABLES.length - 1, nextIndex));
        return;
      }

      if (!desktopSectionRef.current) return;

      const { top } = desktopSectionRef.current.getBoundingClientRect();
      const scrolled = -top;
      const nextIndex = Math.min(
        DELIVERABLES.length - 1,
        Math.max(0, Math.floor(scrolled / PANEL_HEIGHT))
      );

      setActiveIndex(nextIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const mobileThumbOffset =
    DELIVERABLES.length > 1
      ? (activeIndex / (DELIVERABLES.length - 1)) *
        (MOBILE_TRACK_HEIGHT - MOBILE_THUMB_HEIGHT)
      : 0;

  return (
    <>
      <section
        ref={mobileSectionRef}
        className="relative bg-white md:hidden"
        style={{ height: MOBILE_TOTAL_HEIGHT }}
      >
        <div className="pointer-events-none absolute right-[20px] top-0 z-10 h-full">
          <div className="sticky top-[146px] h-[333px]">
            <div className="h-[333px] w-[6px] overflow-hidden rounded-full bg-artic-grey-100">
              <div
                className="w-full rounded-full bg-artic-persian transition-transform duration-500"
                style={{
                  height: MOBILE_THUMB_HEIGHT,
                  transform: `translateY(${mobileThumbOffset}px)`,
                }}
              />
            </div>
          </div>
        </div>

        {DELIVERABLES.map((item, index) => (
          <div
            key={item.headline}
            className="sticky top-0 bg-white"
            style={{ height: MOBILE_PANEL_HEIGHTS[index], zIndex: index + 1 }}
          >
            <div className="mx-auto flex h-full max-w-[393px] px-5">
              <div
                className="w-full"
                style={{ paddingTop: index === 0 ? 146 : 62 }}
              >
                {index === 0 && (
                  <div className="mb-[18px] inline-flex items-center gap-2">
                    <span className="size-[6px] rounded-full bg-artic-teal-dark" />
                    <span className="text-[12px] font-normal leading-[1.3] tracking-[0.06em] text-artic-ebony">
                      WHAT YOU&apos;LL GET
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-[18px]">
                  <div className="relative h-[180px] overflow-hidden rounded-[12px]">
                    <Image
                      src={item.image}
                      alt={item.headline}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <h3 className="text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-artic-ebony">
                    {item.headline}
                  </h3>
                  <p className="text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-artic-grey-400">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section
        ref={desktopSectionRef}
        className="relative hidden bg-white md:block"
        style={{ height: PANEL_HEIGHT * DELIVERABLES.length }}
      >
        {DELIVERABLES.map((item, index) => (
          <div
            key={item.headline}
            className="sticky top-0 bg-white"
            style={{ height: PANEL_HEIGHT, zIndex: index + 1 }}
          >
            <div className="flex h-full justify-between gap-8 px-8 pt-38 md:px-20 lg:px-44">
              <div className="flex flex-col gap-4 pt-20 lg:w-[40%]">
                <SectionLabel variant="grey">WHAT YOU&apos;LL GET</SectionLabel>

                <h3 className="text-[20px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony lg:text-[28px]">
                  {item.headline}
                </h3>
                <p className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400">
                  {item.body}
                </p>
              </div>

              <div className="flex shrink-0 items-start gap-4">
                <div
                  className="relative overflow-hidden rounded-[22px]"
                  style={{ height: INDICATOR_HEIGHT, width: 350 }}
                >
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    className="object-cover object-top"
                  />
                </div>

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
    </>
  );
}
