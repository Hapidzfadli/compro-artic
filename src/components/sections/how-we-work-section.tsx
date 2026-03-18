"use client";

import Image from "next/image";

const STEPS = [
  {
    id: 1,
    title: "Discover",
    description:
      "We start by understanding your goals, challenges, and what success looks like for you",
    image: "/images/shader/Discover.png",
    flipImage: true,
    shader: null,
    glow: false,
  },
  {
    id: 2,
    title: "Analyze",
    description:
      "We dig into facts, numbers, and stories to find insights that reveal what's really happening",
    image: "/images/shader/Analyze.png",
    flipImage: false,
    shader: "to-[#080817]",
    glow: false,
  },
  {
    id: 3,
    title: "Design",
    description:
      "Using what we've learned, we co-create strategies, programs, or recommendations that fit your needs",
    image: "/images/shader/Design.png",
    flipImage: false,
    shader: null,
    glow: true,
  },
  {
    id: 4,
    title: "Deliver",
    description:
      "We help you apply the plan, track progress, and see results that truly make an impact",
    image: "/images/shader/Deliver.png",
    flipImage: false,
    shader: "to-[#161616]",
    glow: false,
  },
];

function MouseScrollIcon() {
  return (
    <div className="relative flex h-12 w-7 items-start justify-center rounded-[14px] border-2 border-artic-teal-light">
      {/* Animated scroll dot */}
      <div
        className="mt-2 h-1.5 w-1.5 rounded-full bg-artic-teal-light"
        style={{
          animation: "mouseScroll 1.6s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes mouseScroll {
          0%   { transform: translateY(0);   opacity: 1; }
          60%  { transform: translateY(14px); opacity: 0.2; }
          100% { transform: translateY(0);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export function HowWeWorkSection() {
  return (
    <section className="relative bg-artic-ebony">
      {/* Sticky side labels — z-50 above all cards */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-50">
        <div className="sticky top-0 flex h-screen items-center justify-between px-10">
          <span className="text-[22px] font-normal leading-[1.2] tracking-[-0.03em] text-artic-teal-light">
            How We Work?
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[22px] font-normal leading-[1.2] tracking-[-0.03em] text-artic-teal-light">
              Scroll Down
            </span>
            <MouseScrollIcon />
          </div>
        </div>
      </div>

      {/* Steps — sticky stacking */}
      {STEPS.map((step, i) => (
        <div
          key={step.id}
          className="sticky top-0 h-screen overflow-hidden"
          style={{ zIndex: i + 1 }}
        >
          {/* Background image — step 1 is flipped */}
          <div
            className="absolute inset-0"
            style={step.flipImage ? { transform: "scaleY(-1)" } : undefined}
          >
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>

          {/* Black overlay rgba(0,0,0,0.4) */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Animated shimmer sweep — cool light effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, transparent 30%, rgba(83,242,170,0.06) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
              animation: `shimmerSweep ${4 + i * 0.8}s ease-in-out infinite`,
            }}
          />

          {/* Bottom fade shader — step 2 & 4 */}
          {step.shader && (
            <div
              className={`absolute inset-0 bg-linear-to-b from-[rgba(8,8,23,0)] ${step.shader}`}
            />
          )}

          {/* Teal glow ellipse — step 3 */}
          {step.glow && (
            <div
              className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2"
              style={{
                width: 3896,
                height: 600,
                background: "#53F2AA",
                borderRadius: 9999,
                filter: "blur(150px)",
                mixBlendMode: "plus-lighter",
                opacity: 0.35,
              }}
            />
          )}

          {/* Radial vignette edges */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(8,8,23,0.7) 100%)",
            }}
          />

          {/* Centered card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-90 overflow-hidden rounded-[24px] bg-white p-5 pb-10">
              {/* Card image */}
              <div className="relative h-50 w-full overflow-hidden rounded-[14px]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card content */}
              <div className="mt-5 flex flex-col gap-5">
                <div className="flex items-end justify-between">
                  <h3 className="text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[13px] leading-normal">
                    <span className="font-bold text-artic-persian">
                      {String(step.id).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-artic-grey-200">/</span>
                    <span className="font-bold text-artic-grey-200">04</span>
                  </div>
                </div>
                <p className="text-[15px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes shimmerSweep {
          0%   { background-position: 200% 0; }
          50%  { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
