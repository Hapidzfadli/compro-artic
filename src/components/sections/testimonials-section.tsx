"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Artic Analytics memberikan insight yang sangat akurat dan mendalam tentang pasar kami. Data yang mereka hasilkan menjadi landasan strategi bisnis kami selama dua tahun terakhir.",
    name: "Bapak Hendra Wijaya",
    role: "CEO, PT Maju Bersama Tbk",
    company: "PT Maju Bersama Tbk",
  },
  {
    id: 2,
    quote:
      "Metodologi penelitian Artic sangat rigorous dan hasilnya bisa dipertanggungjawabkan. Tim mereka responsif dan profesional dalam setiap tahap proyek.",
    name: "Dr. Sari Dewi",
    role: "Kepala Divisi Riset, Kementerian Kesehatan",
    company: "Kementerian Kesehatan RI",
  },
  {
    id: 3,
    quote:
      "Kami menggunakan layanan polling Artic untuk memahami opini publik sebelum kampanye. Hasilnya sangat membantu kami merancang pesan yang tepat sasaran.",
    name: "Faisal Rahman",
    role: "Direktur Komunikasi, Partai Maju Indonesia",
    company: "Partai Maju Indonesia",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="bg-artic-surface py-24 md:py-32">
      <Container>
        <div className="relative mx-auto max-w-4xl rounded-2xl bg-white px-8 py-14 shadow-sm md:px-16">
          {/* Quote icon */}
          <Quote className="mb-6 h-10 w-10 text-artic-persian/20" />

          {/* Quote text */}
          <p className="text-subheadline-md text-artic-ebony md:text-subheadline-lg">
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Author */}
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-body-md font-semibold text-artic-ebony">{t.name}</p>
              <p className="text-body-sm text-artic-grey-400">{t.role}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-artic-grey-100 text-artic-ebony transition-all hover:border-artic-persian hover:text-artic-persian"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-artic-persian text-white transition-all hover:bg-artic-persian-600"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current
                    ? "w-6 bg-artic-persian"
                    : "w-2 bg-artic-grey-100 hover:bg-artic-grey-200"
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
