"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { ServiceCard } from "@/components/common/service-card";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, SERVICES.length - 1));
    setActiveIndex(clamped);
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.children[clamped] as HTMLElement;
    if (!card) return;
    const sliderLeft = slider.getBoundingClientRect().left;
    const cardLeft = card.getBoundingClientRect().left;
    slider.scrollBy({ left: cardLeft - sliderLeft, behavior: "smooth" });
  };

  return (
    <section className="bg-artic-surface py-20 md:py-32 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center">
          <SectionLabel className="text-artic-teal-dark">
            Our Service
          </SectionLabel>
          <h2 className="mt-4 text-mobile-title-h2 text-artic-ebony md:text-headline-h3">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mobile-body-md text-artic-grey-400 md:text-body-md">
            We make data, research, and strategy work for you. Here&apos;s how we
            help you understand people, see clearer, and make better decisions.
          </p>
        </div>
      </Container>

      {/* Slider */}
      <div className="relative mt-10 md:mt-14">
        {/* Cards track */}
        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-4 md:px-[calc((100vw-1280px)/2+1rem)] pb-2 no-scrollbar"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.defaultImage}
              active={i === activeIndex}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10
            flex h-11 w-11 items-center justify-center rounded-full
            border border-artic-white/30 bg-artic-ebony/60 text-artic-white
            backdrop-blur-sm transition-all duration-200
            hover:border-artic-teal-light hover:bg-artic-ebony
            disabled:opacity-0 disabled:pointer-events-none"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          disabled={activeIndex === SERVICES.length - 1}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10
            flex h-11 w-11 items-center justify-center rounded-full
            border border-artic-white/30 bg-artic-ebony/60 text-artic-white
            backdrop-blur-sm transition-all duration-200
            hover:border-artic-teal-light hover:bg-artic-ebony
            disabled:opacity-0 disabled:pointer-events-none"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
