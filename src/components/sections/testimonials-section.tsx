"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/common/section-label";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Lewat olah riset dan data yang terukur, pemerintah Kota Semarang merasa terbantu dan puas dalam proyek bersama Artic ini, kualitas data terjaga dalam waktu yang dilakukan dengan cepat.",
    name: "Hendrar Prihadi",
    role: "Wali Kota Semarang",
    photo: "/images/testimonials/photo-main.png",
  },
  {
    id: 2,
    quote:
      "Artic Analytica membantu kami memahami dinamika akademik dan sosial melalui pendekatan riset yang sangat komprehensif. Hasilnya benar-benar membuka perspektif baru bagi kami.",
    name: "Khotibul Umam",
    role: "Dosen Sasindo Undip",
    photo: "/images/testimonials/photo-2.png",
  },
  {
    id: 3,
    quote:
      "Metodologi penelitian Artic sangat rigorous dan hasilnya bisa dipertanggungjawabkan. Tim mereka responsif dan profesional dalam setiap tahap proyek.",
    name: "Dr. Sari Dewi",
    role: "Kepala Divisi Riset, Kemenkes RI",
    photo: "/images/testimonials/photo-1.png",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[current];
  const prev = TESTIMONIALS[(current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length];
  const next = TESTIMONIALS[(current + 1) % TESTIMONIALS.length];

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-10 md:pt-32 md:pb-12">
      {/* Rectangle background texture */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-hard-light opacity-30"
        style={{
          backgroundImage: "url('/images/testimonials/rectangle.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1123px] px-6 md:px-16">
        {/* Label */}
        <div className="mb-10 flex justify-center">
          <SectionLabel variant="grey">TESTIMONIALS</SectionLabel>
        </div>

        {/* Quote */}
        <div className="relative min-h-[120px] overflow-hidden md:min-h-[160px] lg:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center text-[18px] font-medium leading-[1.3] tracking-[-0.36px] text-artic-ebony md:text-[26px] md:tracking-[-0.78px] lg:text-[34px] lg:tracking-[-1.02px]"
            >
              {t.quote}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Profile photo cluster */}
        <div className="relative mx-auto mt-14 h-25 w-48 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={t.id}
              initial={{ x: direction * 80, scale: 0.6, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              exit={{ x: direction * -80, scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Small photo left */}
              <div className="absolute left-0 size-15 overflow-hidden rounded-full border-[3px] border-white shadow-md" style={{ zIndex: 1 }}>
                <Image src={prev.photo} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-artic-teal-dark mix-blend-color opacity-60" />
              </div>

              {/* Main photo center */}
              <div className="relative size-25 overflow-hidden rounded-full border-4 border-white shadow-lg" style={{ zIndex: 3 }}>
                <Image src={t.photo} alt={t.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-artic-teal-dark mix-blend-color opacity-40" />
              </div>

              {/* Small photo right */}
              <div className="absolute right-0 size-15 overflow-hidden rounded-full border-[3px] border-white shadow-md" style={{ zIndex: 1 }}>
                <Image src={next.photo} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-artic-teal-dark mix-blend-color opacity-60" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Name & Role */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
            className="mt-6 text-center"
          >
            <p className="text-[18px] font-bold tracking-[-0.4px] text-artic-ebony lg:text-[24px] lg:tracking-[-0.48px]">
              {t.name}
            </p>
            <p className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.84px] text-artic-grey-400 lg:text-[14px]">
              {t.role}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
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
    </section>
  );
}
