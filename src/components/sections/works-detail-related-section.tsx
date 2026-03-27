"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

interface RelatedWork {
  id: number;
  title: string;
  category: string;
  image: string;
  studyHref: string;
  pdfHref: string;
}

interface WorksDetailRelatedProps {
  works: RelatedWork[];
}

const VISIBLE = 3;

export function WorksDetailRelatedSection({ works }: WorksDetailRelatedProps) {
  // Duplicate to always have 6 items for navigation
  const allItems: RelatedWork[] = works.length > 0 ? [...works, ...works].slice(0, 6) : works;
  const total = allItems.length;
  const maxStart = Math.max(0, total - VISIBLE);

  const [start, setStart] = useState(0);

  const canPrev = start > 0;
  const canNext = start < maxStart;

  const visible = allItems.slice(start, start + VISIBLE);
  const progress = total <= VISIBLE ? 100 : ((start + VISIBLE) / total) * 100;

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Header row */}
        <div className="flex items-center justify-between">
          <h2 className="text-[24px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony md:text-[36px] lg:text-[48px]">
            See Other Works
          </h2>

          {/* Nav arrows */}
          <div className="flex items-center gap-1.5">
            {/* Prev — light bg, dark arrow pointing left */}
            <button
              onClick={() => setStart((s) => Math.max(0, s - 1))}
              disabled={!canPrev}
              className="flex size-11 items-center justify-center rounded-xl bg-artic-surface transition-opacity disabled:opacity-30"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6296 14.6773L6.72559 14.6773M6.72559 14.6773L13.5416 21.4933M6.72559 14.6773L13.5416 7.86133" stroke="#161616" strokeWidth="1.764" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Next — teal bg, dark arrow pointing right */}
            <button
              onClick={() => setStart((s) => Math.min(maxStart, s + 1))}
              disabled={!canNext}
              className="flex size-11 items-center justify-center rounded-xl bg-artic-teal-100 transition-opacity disabled:opacity-30"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.72512 14.6773L22.6291 14.6773M22.6291 14.6773L15.8131 21.4933M22.6291 14.6773L15.8131 7.86133" stroke="#161616" strokeWidth="1.764" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <div
              key={`${item.id}-${start + i}`}
              className="group relative h-80 overflow-hidden rounded-[15px]"
            >
              {/* Image — grayscale default, color on hover */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="scale-105 object-cover object-top grayscale transition-all duration-500 group-hover:scale-100 group-hover:grayscale-0"
              />

              {/* Graphics overlay — low opacity default → full on hover */}
              <div className="pointer-events-none absolute -left-15 bottom-0 right-0 top-1/3 opacity-50 transition-opacity duration-500 group-hover:opacity-90">
                <Image
                  src="/images/graphics/Graphics-wrapper-hover.svg"
                  alt=""
                  fill
                  className="object-cover object-left"
                />
              </div>

              {/* Blue gradient bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-[60%] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(19,19,127,0.85) 50%, rgba(19,19,127,1) 100%)",
                }}
              />

              {/* Content — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="translate-y-15 transition-transform duration-600 ease-out group-hover:translate-y-0">
                  <h3 className="text-[24px] font-normal leading-[1.3] tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href={item.studyHref}
                      className="flex h-11 w-40 items-center justify-center rounded-[10px] bg-gradient-secondary text-[14px] font-bold text-artic-ebony transition-opacity duration-300 hover:opacity-80"
                    >
                      See Study Case →
                    </Link>
                    <Link
                      href={item.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-35 items-center justify-center rounded-[10px] border border-artic-grey-100 text-[14px] font-semibold text-artic-grey-100 transition-all duration-300 hover:bg-white/20"
                    >
                      Download PDF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress slider */}
        <div className="mt-10 h-2 w-full overflow-hidden rounded-full bg-artic-grey-400/30">
          <div
            className="h-full rounded-full bg-artic-teal-light transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Container>
    </section>
  );
}
