"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EXPERTS = [
  {
    slug: "khotibul-umam",
    name: "Khotibul Umam., S.S., M.Hum.",
    role: "Lecturer at Undip Semarang",
    quote:
      '"Khotibul Umam is an Indonesian literature expert at Semarang, gaining experience from theater and research of coastal literature around the north beach of Java (Pantura)."',
  },
  {
    slug: "siti-aminah",
    name: "Dr. Siti Aminah, M.Si.",
    role: "Social Research Expert",
    quote:
      '"With over 15 years in behavioral and social research, Siti brings deep expertise in community-level qualitative studies and participatory action research across Central Java."',
  },
  {
    slug: "hendra-gunawan",
    name: "Prof. Hendra Gunawan, Ph.D.",
    role: "Data Science & Analytics",
    quote:
      '"Hendra leads quantitative research and data modeling at Artic, combining academic rigor from his time at ITB with practical policy analytics for government clients."',
  },
  {
    slug: "rizki-amalia",
    name: "Rizki Amalia, M.Pd.",
    role: "Education Research Expert",
    quote:
      '"Rizki focuses on education policy and curriculum research, collaborating with national institutions to improve learning outcomes through evidence-based interventions."',
  },
  {
    slug: "bayu-prasetyo",
    name: "Dr. Bayu Prasetyo, S.T., M.T.",
    role: "Technology & Innovation Expert",
    quote:
      '"Bayu bridges engineering and social research, designing digital platforms and data collection tools that bring field research into real-time analytical environments."',
  },
];

const VISIBLE = 3;
const COLS = 3;
const GAP = 16; // px

export function WhoWeAreExpertSection() {
  const [offset, setOffset] = useState(0);
  const max = EXPERTS.length - VISIBLE;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));

  const progress = max === 0 ? 100 : (offset / max) * 100;

  return (
    <section className="relative overflow-x-clip bg-artic-ebony py-32 border-b border-white/10">
      {/* Wave background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/who-we-are/wave-bg.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-full opacity-15 mix-blend-screen"
      />

      <div className="px-5 md:px-16">
        {/* Header row */}
        <div className="mb-12 flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-artic-teal-dark" />
              <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-artic-teal-light">
                OUR EXPERT
              </span>
            </div>
            <h2 className="max-w-2xl text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-white lg:text-[32px]">
              Credible Researcher Team of Artic
            </h2>
          </div>

          {/* Nav buttons */}
          <div className="flex shrink-0 gap-2">
            <button
              onClick={prev}
              disabled={offset === 0}
              className="flex size-12 items-center justify-center rounded-[10px] bg-artic-persian text-white transition-all hover:brightness-125 active:scale-95 disabled:opacity-30"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={offset === max}
              className="flex size-12 items-center justify-center rounded-[10px] bg-artic-teal-light text-artic-ebony transition-all hover:brightness-110 active:scale-95 disabled:opacity-30"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards slider */}
        <div className="overflow-visible my-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: GAP,
              transform: `translateX(calc(-${offset} * (100% / ${COLS} + ${GAP / COLS}px)))`,
            }}
          >
            {EXPERTS.map((expert, i) => (
              <div
                key={i}
                className="flex shrink-0 flex-col gap-5 rounded-[18px] bg-artic-surface p-5 transition-all duration-200 hover:brightness-105 hover:shadow-lg"
                style={{ width: `calc(100% / ${COLS} - ${(GAP * (COLS - 1)) / COLS}px)` }}
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div className="size-14 shrink-0 overflow-hidden rounded-full bg-[#4e4d4d]">
                    <Image
                      src="/images/who-we-are/profile-rian.jpg"
                      alt={expert.name}
                      width={60}
                      height={60}
                      className="size-full object-cover opacity-60"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[17px] font-normal leading-[1.2] tracking-[-0.02em] text-artic-grey-400">
                      {expert.name}
                    </p>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-artic-grey-300">
                      {expert.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="flex-1 text-[12px] leading-normal tracking-[-0.02em] text-artic-grey-400">
                  {expert.quote}
                </p>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  {/* Learn More button — full width */}
                  <Link
                    href={`/who-we-are/expert/${expert.slug}`}
                    className="flex w-full items-center justify-center rounded-[6px] bg-artic-persian py-2 text-[11px] font-bold text-artic-surface transition-opacity hover:opacity-80"
                  >
                    Learn More →
                  </Link>

                  {/* Socials row */}
                  <div className="flex gap-2">
                    {/* Instagram */}
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-[6px] bg-artic-teal-100 p-2.5 transition-opacity hover:opacity-70"
                      aria-label="Instagram"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#161616">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-[6px] bg-artic-teal-100 p-2.5 transition-opacity hover:opacity-70"
                      aria-label="LinkedIn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#161616">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    {/* Platform badges */}
                    <a href="#" className="flex flex-1 items-center justify-center rounded-[6px] bg-white py-2.5 text-[11px] font-extrabold text-artic-ebony transition-opacity hover:opacity-70">
                      Scopus
                    </a>
                    <a href="#" className="flex flex-1 items-center justify-center rounded-[6px] bg-white py-2.5 text-[11px] font-extrabold text-artic-ebony transition-opacity hover:opacity-70">
                      Logo
                    </a>
                    <a href="#" className="flex flex-1 items-center justify-center rounded-[6px] bg-white py-2.5 text-[11px] font-extrabold text-artic-ebony transition-opacity hover:opacity-70">
                      Sinta
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#505050]">
          <div
            className="h-full rounded-full bg-artic-teal-light transition-all duration-500"
            style={{ width: `${50 + progress * 0.5}%` }}
          />
        </div>
      </div>
    </section>
  );
}
