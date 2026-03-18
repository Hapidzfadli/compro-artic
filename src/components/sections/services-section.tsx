"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { ServiceCard } from "@/components/common/service-card";

const SERVICES = [
  {
    id: "artic-research",
    title: "Artic Research",
    description: "We help you see what your audience really thinks, feels, and needs, so every decision hits closer to home.",
    image: "/images/wrapper/businesswoman-networking-using-digital-devices-1.png",
    href: "/services/artic-research",
  },
  {
    id: "artic-data",
    title: "Artic Data",
    description: "Turn complex numbers into clear visuals and insights you can use right away.",
    image: "/images/wrapper/digital-tablet-online-learning-1.png",
    href: "/services/artic-data",
  },
  {
    id: "artic-consulting",
    title: "Artic Consulting",
    description: "Shape smart strategies that actually get results for you.",
    image: "/images/wrapper/front-view-graphics-schedules-getting-checked-by-young-lady-1.png",
    href: "/services/artic-consulting",
  },
  {
    id: "artic-academy",
    title: "Artic Academy",
    description: "Help your team learn, think, and lead with data, practical and inspiring.",
    image: "/images/wrapper/chasing-down-their-deadline-rear-view-shot-team-programmers-coding-through-night-1.png",
    href: "/services/artic-academy",
  },
  {
    id: "artic-policy-lab",
    title: "Artic Policy Lab",
    description: "Experiment with new ideas & help you build policies that make a real difference.",
    image: "/images/wrapper/businessman-pressing-smiley-face-emoticon-virtual-touch-screen-user-give-rating-service-experience-online-application-customer-review-satisfaction-feedback-survey-concept-1.png",
    href: "/services/artic-policy-lab",
  },
  {
    id: "artic-insight-hub",
    title: "Artic Insight Hub",
    description: "Open access to data, stories, and visuals that help everyone.",
    image: "/images/wrapper/business-concept-with-graphic-holography-11.png",
    href: "/services/artic-insight-hub",
  },
];

// w-67.5 = 270px, gap-3.75 = 15px, px-27.5 = 110px, w-181 = 724px
const INACTIVE_W = 270;
const ACTIVE_W = 724;
const CARD_GAP = 15;
const PAD_LEFT = 110;
const STEP = INACTIVE_W + CARD_GAP;

// Buttons centered at the junction between active card and first inactive card
const BTN_W = 72 * 2 + 6; // 150px (two 72px buttons + 6px gap)
const BTN_LEFT = PAD_LEFT + ACTIVE_W - BTN_W / 2; // 759px
const BTN_TOP = (530 - 72) / 2; // 229px — vertical center of card

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, SERVICES.length - 1)));
  };

  return (
    <section ref={sectionRef} className="bg-artic-surface py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="text-center">
          <SectionLabel className="text-artic-teal-dark">Our Service</SectionLabel>
          <h2 className="mt-4 text-mobile-title-h2 text-artic-ebony md:text-headline-h3">What We Do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mobile-body-md text-artic-grey-400 md:text-body-md">
            We make data, research, and strategy work for you. Here&apos;s how we help you understand people, see clearer, and make better decisions.
          </p>
        </div>
      </Container>

      <div className="relative mt-10 md:mt-14">
        {/* Track: use transform instead of scroll so width-transition and movement stay in sync */}
        <div
          className="flex gap-3.75 px-27.5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-activeIndex * STEP}px)` }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
              active={i === activeIndex}
              inView={sectionInView}
              delay={i * 80}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        {/* Buttons always sit at the right edge of the active card — fixed position */}
        <div className="absolute flex items-center gap-1.5" style={{ left: BTN_LEFT, top: BTN_TOP }}>
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="flex size-18 items-center justify-center rounded-[10px] bg-artic-persian text-white transition-opacity duration-200 disabled:opacity-30"
            aria-label="Previous"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === SERVICES.length - 1}
            className="flex size-18 items-center justify-center rounded-[10px] bg-artic-teal-100 text-artic-ebony transition-opacity duration-200 disabled:opacity-30"
            aria-label="Next"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
