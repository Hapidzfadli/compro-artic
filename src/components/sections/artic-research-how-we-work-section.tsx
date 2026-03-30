"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";

const STEPS = [
  {
    number: 1,
    title: "Step 1",
    label: "Research Design",
    description:
      "We start by understanding your goals, audience, and key questions — then build a research framework tailored to your context.",
  },
  {
    number: 2,
    title: "Step 2",
    label: "Data Collection",
    description:
      "Using structured surveys, interviews, or field methods, we gather data with precision and care for quality and representation.",
  },
  {
    number: 3,
    title: "Step 3",
    label: "Analysis & Synthesis",
    description:
      "Our team applies rigorous analytical methods to turn raw data into meaningful patterns and actionable insights.",
  },
  {
    number: 4,
    title: "Step 4",
    label: "Reporting & Delivery",
    description:
      "We deliver clear, well-structured reports and present findings in a dedicated session with your team.",
  },
];

export function ArticResearchHowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="relative overflow-hidden bg-white pt-20">
      {/* Wave background rectangle */}
      <div className="pointer-events-none absolute inset-x-0 top-[10%] bottom-[10%] mix-blend-hard-light opacity-15">
        <Image
          src="/images/artic-research/how-we-work-bg.png"
          alt=""
          fill
          className="object-cover object-left"
        />
      </div>
      <Container>
        {/* Top: label + headline left, body right */}
        <div className="flex flex-col gap-10 px-4 md:px-12 lg:flex-row lg:items-start lg:gap-16 lg:px-28">
          <div className="flex flex-col gap-3 lg:w-[60%]">
            <SectionLabel variant="grey">HOW WE WORK</SectionLabel>
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony lg:text-[45px]">
              A Clear Process Built Around Your Needs
            </h2>
          </div>

          <div className="flex flex-col justify-start gap-5 lg:ml-auto lg:w-[40%] lg:pt-8">
            <p className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400">
              Every research project we run follows a structured process — from initial design to final delivery — so you always know where we are and what to expect next.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Horizontal teal line through circle centers */}
          {/* Teal line — two opposing gradients to cover full width */}
          <div className="absolute top-10 hidden h-3 left-1/2 w-screen -translate-x-1/2 lg:block">
            <div className="absolute inset-0 bg-linear-to-r from-artic-teal-light from-0% to-[rgba(67,255,249,0.2)] to-32%" />
            <div className="absolute inset-0 bg-linear-to-l from-artic-teal-light from-0% to-[rgba(67,255,249,0.2)] to-75%" />
          </div>

          {STEPS.map((step) => {
            const isActive = activeStep === step.number;
            return (
              <div
                key={step.number}
                className="flex cursor-pointer flex-col"
                onMouseEnter={() => setActiveStep(step.number)}
              >
                {/* Circle with animated dashed ring */}
                <div className="relative flex size-20 shrink-0 items-center justify-center">
                  <svg
                    className={`absolute inset-0 size-full animate-[spin_14s_linear_infinite] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                    style={{ animationDirection: "reverse" }}
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="38"
                      stroke="#2020D3"
                      strokeWidth="2"
                      strokeDasharray="10 7"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className={`flex size-12 items-center justify-center rounded-full transition-colors duration-300 ${isActive ? "bg-artic-persian" : "bg-artic-grey-400"}`}>
                    <span className="text-[20px] font-normal leading-none text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className={`mt-4 flex-1 rounded-xl px-4 py-6 transition-colors duration-300 ${isActive ? "bg-[#f3f3ff]" : ""}`}>
                  <div className="flex flex-col gap-2">
                    <p className={`text-[16px] font-bold leading-[1.2] tracking-[-0.02em] transition-colors duration-300 ${isActive ? "text-artic-persian" : "text-artic-grey-400"}`}>
                      {step.title}
                    </p>
                    <p className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
