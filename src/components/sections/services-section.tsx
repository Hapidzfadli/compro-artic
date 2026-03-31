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
    href: "/artic-research",
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

const N = SERVICES.length;
const EXTENDED = [...SERVICES, ...SERVICES, ...SERVICES]; // 3 copies for infinite illusion

const INACTIVE_W = 210;
const ACTIVE_W = 550;
const CARD_GAP = 12;
const PAD_LEFT = 80;
const STEP = INACTIVE_W + CARD_GAP;

const BTN_SIZE = 56;
const BTN_W = BTN_SIZE * 2 + 6;
const BTN_LEFT = PAD_LEFT + ACTIVE_W - BTN_W / 2;
const BTN_TOP = (400 - BTN_SIZE) / 2;

const TRANSITION = "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(N); // start at middle copy
  const [animated, setAnimated] = useState(true);
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const jumping = useRef(false);

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

  // After animated slide reaches a clone edge, silently jump to real position
  useEffect(() => {
    if (!animated || jumping.current) return;
    if (activeIndex < N || activeIndex >= N * 2) {
      jumping.current = true;
      const timer = setTimeout(() => {
        setAnimated(false);
        setActiveIndex((prev) => {
          if (prev < N) return prev + N;
          if (prev >= N * 2) return prev - N;
          return prev;
        });
        // Re-enable transition after a tick
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimated(true);
            jumping.current = false;
          });
        });
      }, 620); // slightly after transition ends
      return () => clearTimeout(timer);
    }
  }, [activeIndex, animated]);

  const goTo = (index: number) => {
    if (jumping.current) return;
    setAnimated(true);
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="bg-artic-surface pt-14 pb-8 md:pt-20 md:pb-10 overflow-hidden">
      <Container>
        <div className="text-center">
          <SectionLabel variant="grey">Our Service</SectionLabel>
          <h2 className="mt-4 text-mobile-title-h2 text-artic-ebony md:text-headline-h3">What We Do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mobile-body-md text-artic-grey-400 md:text-body-md">
            We make data, research, and strategy work for you. Here&apos;s how we help you understand people, see clearer, and make better decisions.
          </p>
        </div>
      </Container>

      <div className="relative mt-10 md:mt-14">
        <div
          className="flex gap-3 px-20"
          style={{
            transform: `translateX(${-activeIndex * STEP}px)`,
            transition: animated ? TRANSITION : "none",
          }}
        >
          {EXTENDED.map((service, i) => (
            <ServiceCard
              key={`${service.id}-${Math.floor(i / N)}`}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
              active={i === activeIndex}
              inView={sectionInView}
              delay={(i % N) * 80}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="absolute flex items-center gap-1.5" style={{ left: BTN_LEFT, top: BTN_TOP }}>
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="flex size-14 items-center justify-center rounded-xl bg-artic-persian text-white transition-opacity duration-200"
            aria-label="Previous"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => goTo(activeIndex + 1)}
            className="flex size-14 items-center justify-center rounded-xl bg-artic-teal-100 text-artic-ebony transition-opacity duration-200"
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
