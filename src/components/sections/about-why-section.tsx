"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/container";

const ITEMS = [
  {
    title: "Human-first Thinking",
    body: "We listen deeply and design solutions around people, not assumptions.",
    image: "/images/about/why-1.jpg",
  },
  {
    title: "Evidence at the Core",
    body: "Every recommendation we make is grounded in data, research, and verified insights.",
    image: "/images/about/why-2.jpg",
  },
  {
    title: "Multidisciplinary Team",
    body: "Our team brings together expertise across research, data science, policy, and communication.",
    image: "/images/about/why-3.jpg",
  },
  {
    title: "Clarity Without Complexity",
    body: "We translate complicated findings into clear, actionable language anyone can understand.",
    image: "/images/about/why-4.jpg",
  },
  {
    title: "Impact That Lasts",
    body: "We design solutions that create sustained value long after the engagement ends.",
    image: "/images/about/why-5.jpg",
  },
];

export function AboutWhySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-artic-surface py-32">
      <Container className="px-8 md:px-20 lg:px-44">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          {/* Left: image */}
          <div className="relative h-64 overflow-hidden rounded-[20px] lg:h-100 lg:w-[40%] lg:shrink-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(8px)", scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={ITEMS[activeIndex].image}
                  alt={ITEMS[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-4 lg:w-[45%]">
            {/* Label */}
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-artic-teal-dark" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-artic-teal-dark">
                WHAT MAKES US DIFFERENT?
              </span>
            </div>

            {/* Accordion items */}
            <div className="flex flex-col">
              {ITEMS.map((item, i) => {
                const isActive = activeIndex === i;
                const isLast = i === ITEMS.length - 1;
                return (
                  <motion.div
                    key={i}
                    layout
                    className={`group/item flex flex-col gap-2 pb-5 ${!isLast ? "border-b border-artic-grey-100" : ""} cursor-pointer pt-4 first:pt-0`}
                    onClick={() => setActiveIndex(i)}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-[15px] font-normal leading-[1.3] tracking-[-0.03em] transition-colors duration-300 lg:text-[17px] ${isActive ? "text-artic-ebony" : "text-artic-grey-300 group-hover/item:text-artic-ebony"}`}
                      >
                        {item.title}
                      </p>
                      <svg
                        viewBox="0 0 24 24"
                        className={`size-6 shrink-0 transition-all duration-600 ${isActive ? "rotate-180 text-artic-ebony" : "text-artic-grey-300 group-hover/item:text-artic-ebony"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key={i}
                          initial={{ height: 0, opacity: 0, filter: "blur(6px)" }}
                          animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                          exit={{ height: 0, opacity: 0, filter: "blur(6px)" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <p className="w-[70%] text-[12px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400">
                            {item.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
