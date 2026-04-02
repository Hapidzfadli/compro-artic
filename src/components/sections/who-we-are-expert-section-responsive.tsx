"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/common/section-label";

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
const GAP = 16;

export function WhoWeAreExpertSectionResponsive() {
  const [offset, setOffset] = useState(0);
  const [mobileOffset, setMobileOffset] = useState(0);
  const max = EXPERTS.length - VISIBLE;
  const mobileMax = EXPERTS.length - 1;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));
  const progress = max === 0 ? 100 : (offset / max) * 100;
  const prevMobile = () => setMobileOffset((o) => Math.max(0, o - 1));
  const nextMobile = () => setMobileOffset((o) => Math.min(mobileMax, o + 1));

  return (
    <section className="relative overflow-x-clip border-b border-white/10 bg-artic-ebony py-20 md:py-32">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/who-we-are/wave-bg.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-full opacity-15 mix-blend-screen"
      />

      <div className="px-5 md:px-16">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <div className="flex flex-col gap-4">
            <SectionLabel variant="teal-light">OUR EXPERT</SectionLabel>
            <h2 className="max-w-2xl text-[34px] font-medium leading-[1.1] tracking-[-1.02px] text-white md:text-[28px] md:tracking-[-0.02em] lg:text-[32px]">
              Credible Researcher Team of Artic
            </h2>
          </div>

          <div className="hidden shrink-0 gap-2 md:flex">
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

        <div className="hidden overflow-visible md:block">
          <div
            className="my-16 flex transition-transform duration-500 ease-in-out"
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

                <p className="flex-1 text-[12px] leading-normal tracking-[-0.02em] text-artic-grey-400">
                  {expert.quote}
                </p>

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/who-we-are/expert/${expert.slug}`}
                    className="flex w-full items-center justify-center rounded-[6px] bg-artic-persian py-2 text-[11px] font-bold text-artic-surface transition-opacity hover:opacity-80"
                  >
                    Learn More →
                  </Link>
                  <div className="flex gap-2">
                    <a href="#" className="flex items-center justify-center rounded-[6px] bg-artic-teal-100 p-2.5 transition-opacity hover:opacity-70" aria-label="Instagram">
                      <span className="text-[11px] font-bold text-artic-ebony">IG</span>
                    </a>
                    <a href="#" className="flex items-center justify-center rounded-[6px] bg-artic-teal-100 p-2.5 transition-opacity hover:opacity-70" aria-label="LinkedIn">
                      <span className="text-[11px] font-bold text-artic-ebony">IN</span>
                    </a>
                    <a href="#" className="flex flex-1 items-center justify-center rounded-[6px] bg-white py-2.5 text-[11px] font-extrabold text-artic-ebony transition-opacity hover:opacity-70">Scopus</a>
                    <a href="#" className="flex flex-1 items-center justify-center rounded-[6px] bg-white py-2.5 text-[11px] font-extrabold text-artic-ebony transition-opacity hover:opacity-70">Logo</a>
                    <a href="#" className="flex flex-1 items-center justify-center rounded-[6px] bg-white py-2.5 text-[11px] font-extrabold text-artic-ebony transition-opacity hover:opacity-70">Sinta</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#505050]">
            <div
              className="h-full rounded-full bg-artic-teal-light transition-all duration-500"
              style={{ width: `${50 + progress * 0.5}%` }}
            />
          </div>
        </div>

        <div className="overflow-hidden pb-2 md:hidden">
          <div
            className="flex gap-5 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${mobileOffset * 280}px)` }}
          >
          {EXPERTS.map((expert, i) => (
            <div
              key={i}
              className="flex w-[260px] shrink-0 snap-start flex-col gap-[14px] rounded-[8px] bg-artic-surface p-[18px]"
            >
              <div className="flex items-center gap-4">
                <div className="size-16 shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#4e4d4d]">
                  <Image
                    src="/images/who-we-are/profile-rian.jpg"
                    alt={expert.name}
                    width={64}
                    height={64}
                    className="size-full object-cover opacity-60"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold leading-none text-artic-ebony">
                    {expert.name}
                  </p>
                  <p className="text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.72px] text-artic-grey-300">
                    {expert.role}
                  </p>
                </div>
              </div>

              <p className="flex-1 text-[12px] leading-[1.4] tracking-[-0.24px] text-artic-ebony">
                {expert.quote}
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <a href="#" className="flex h-[47px] flex-1 items-center justify-center rounded-[2px] bg-artic-teal-100 text-[11px] font-bold text-artic-ebony">IG</a>
                  <a href="#" className="flex h-[47px] flex-1 items-center justify-center rounded-[2px] bg-artic-teal-100 text-[11px] font-bold text-artic-ebony">IN</a>
                  <a href="#" className="flex h-[47px] flex-1 items-center justify-center rounded-[2px] bg-white text-[10px] font-bold text-artic-grey-300">Scopus</a>
                  <a href="#" className="flex h-[47px] flex-1 items-center justify-center rounded-[2px] bg-white text-[10px] font-bold text-artic-grey-300">Logo</a>
                  <a href="#" className="flex h-[47px] flex-1 items-center justify-center rounded-[2px] bg-white text-[10px] font-bold text-artic-grey-300">Sinta</a>
                </div>
                <Link
                  href={`/who-we-are/expert/${expert.slug}`}
                  className="flex h-[40px] items-center justify-center rounded-[6px] bg-artic-persian px-6 text-[11px] font-bold text-artic-surface"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between md:hidden">
          <div className="h-[6px] w-[217px] overflow-hidden rounded-[47px] bg-[#505050]">
            <div
              className="h-full rounded-[35px] bg-artic-teal-light transition-all duration-300"
              style={{
                width: `${217 * (52 / 217) + (217 - 52) * (mobileMax === 0 ? 0 : mobileOffset / mobileMax)}px`,
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevMobile}
              disabled={mobileOffset === 0}
              className="flex size-12 items-center justify-center rounded-[6px] bg-artic-persian text-white transition-all disabled:opacity-30"
              aria-label="Previous"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextMobile}
              disabled={mobileOffset === mobileMax}
              className="flex size-12 items-center justify-center rounded-[6px] bg-artic-teal-100 text-artic-ebony transition-all disabled:opacity-30"
              aria-label="Next"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
