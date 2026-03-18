"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDING_WORDS = [
  "Actionable Insights",
  "Trusted Data",
  "Riset Bermakna",
  "Visualisasi Nyata",
  "Data Terpercaya",
  "Survey Terencana",
];

const SLIDE_HEIGHT = 106;

const gradientText: React.CSSProperties = {
  fontSize: 96,
  fontWeight: 400,
  lineHeight: "96px",
  letterSpacing: "-0.03em",
  background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDING_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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

      <div className="pointer-events-none absolute overflow-hidden" style={{ top: 0, left: 0, width: 1920, height: 1033 }}>
        <div style={{ position: "absolute", width: 3896, height: 1538, top: 500, left: -988, background: "#53F2AA", borderRadius: 9999, filter: "blur(150px)", mixBlendMode: "plus-lighter" }} />
        <div style={{ position: "absolute", width: 3480, height: 2430, top: 127, left: -780, opacity: 0.63, background: "radial-gradient(ellipse 49.97% 49.59% at 53.25% -16.03%, #FF00A6 0%, #E30094 5%, #AE0071 16%, #7F0053 26%, #580039 37%, #380024 48%, #1F0014 60%, rgba(13,0,9,0) 72%, rgba(3,0,2,0) 85%, rgba(0,0,0,0) 100%)", filter: "blur(200px)", mixBlendMode: "plus-lighter" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-223.25 pb-20 pt-32 text-center">
        <span className="text-label-lg text-artic-white">Where Data Meets Strategy</span>

        <div className="mt-6 overflow-hidden" style={{ height: SLIDE_HEIGHT }}>
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * SLIDE_HEIGHT}px)` }}
          >
            {SLIDING_WORDS.map((word, i) => (
              <div key={i} className="flex items-center justify-center" style={{ height: SLIDE_HEIGHT }}>
                <span style={gradientText}>{word}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-170.75 text-body-lg text-artic-white">
          We help governments, businesses, and organizations make smarter decisions through
          research, data, and strategy that actually make sense
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            href="http://wa.me/082085641027912"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-16 w-66.75 items-center justify-center gap-2.5 overflow-hidden rounded-[5px] bg-artic-persian text-button-md text-artic-white transition-[background] duration-300 hover:bg-linear-to-r hover:from-artic-persian hover:to-artic-teal-light"
          >
            <span className="relative size-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute inset-0 rounded-full bg-artic-teal-light -translate-x-10 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </span>
            <span className="transition-transform duration-500 ease-out group-hover:translate-x-2">Free Consultation</span>
          </Link>
          <Link
            href="/works"
            className="inline-flex h-16 w-64.75 items-center justify-center rounded-[5px] bg-gradient-secondary text-button-md text-artic-ebony transition-opacity duration-300 hover:opacity-80"
          >
            See Our Works →
          </Link>
        </div>
      </div>
    </section>
  );
}
