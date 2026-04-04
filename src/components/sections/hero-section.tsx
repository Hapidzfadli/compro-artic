"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/common/primary-button";

const SLIDING_WORDS = [
  "Actionable Insights",
  "Trusted Data",
  "Meaningful Research",
  "Smarter Decisions",
  "Actionable Insights",
];

function getSlideHeight(vw: number) {
  // proportional to clamp(48px, 4.5vw, 96px)
  const fontSize = Math.min(Math.max(vw * 0.045, 48), 96);
  return Math.ceil(fontSize * 1.15);
}

const gradientStyle: React.CSSProperties = {
  fontSize: "clamp(48px, 4.5vw, 96px)",
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: "-0.03em",
  background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideHeight, setSlideHeight] = useState(96);

  useEffect(() => {
    const update = () => setSlideHeight(getSlideHeight(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-artic-persian-700">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/ui/home/abstract-background-with-low-poly-design 1.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full px-5 pb-16 pt-28 text-center md:max-w-[min(893px,68vw)] md:px-0">
        <span className="text-label-md text-artic-white">Where Data Meets Strategy</span>

        <div className="mt-5 overflow-hidden" style={{ height: slideHeight }}>
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * slideHeight}px)` }}
          >
            {SLIDING_WORDS.map((word, i) => (
              <div key={i} className="flex items-center justify-center" style={{ height: slideHeight }}>
                <span style={gradientStyle}>{word}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-[min(560px,85%)] text-body-sm text-artic-white">
          We help governments, businesses, and organizations make smarter decisions through
          research, data, and strategy that actually make sense
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center">
          <PrimaryButton
            href="http://wa.me/082085641027912"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-full text-button-sm md:w-50"
          >
            Free Consultation
          </PrimaryButton>
          <Link
            href="/works"
            className="inline-flex h-12 w-full items-center justify-center rounded-[5px] bg-gradient-secondary text-button-sm text-artic-ebony transition-opacity duration-300 hover:opacity-80 md:w-46"
          >
            See Our Works →
          </Link>
        </div>

        <button
          type="button"
          aria-label="Scroll to next section"
          onClick={scrollToNextSection}
          className="relative mx-auto mt-16 flex size-[60px] items-center justify-center md:hidden"
        >
          <Image
            src="/images/hero/scroll-ring.svg"
            alt=""
            fill
            className="object-contain"
          />
          <Image
            src="/images/hero/scroll-arrow.svg"
            alt=""
            width={14}
            height={17}
            className="relative z-10 rotate-180"
          />
        </button>
      </div>
    </section>
  );
}
