import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";

export function WhoWeAreCeoSection() {
  return (
    <section className="bg-artic-surface py-14 md:py-24">
      <Container className="px-5 md:px-20 lg:px-44">
        <div className="flex flex-col gap-10 md:gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: bio */}
          <div className="flex flex-col gap-6 md:gap-8 lg:w-[48%]">
            {/* Label */}
            <SectionLabel variant="grey-light">CEO</SectionLabel>

            {/* Heading */}
            <h2 className="text-[34px] font-medium leading-[1.1] tracking-[-1.02px] text-artic-ebony md:text-[26px] md:tracking-[-0.02em] lg:text-[36px]">
              Leading With Clarity, Vision, and Data-Driven Thinking
            </h2>

            {/* Body */}
            <p className="text-[14px] leading-[1.4] tracking-[-0.28px] text-artic-grey-400 md:leading-[1.6] md:tracking-[-0.01em]">
              Rian Destianto leads Artic Analytica with a focus on building a
              modern, insight-driven organization. With experience in research,
              technology, and strategy, he turns complex data into clear
              direction for clients and drives innovation in survey methods and
              real-time analytics.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-artic-grey-300">
                Contact
              </span>
              <div className="flex gap-2">
                {/* Instagram */}
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[4px] bg-white p-4 text-artic-grey-400 transition-opacity hover:opacity-70 md:rounded-lg"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[4px] bg-white p-4 text-artic-grey-400 transition-opacity hover:opacity-70 md:rounded-lg"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: photo */}
          <div className="lg:w-[52%]">
            <div className="relative h-[234px] overflow-hidden rounded-[12px] md:h-[320px] md:rounded-[15px] lg:h-[420px]">
              <Image
                src="/images/who-we-are/ceo-bg.jpg"
                alt="Rian Destianto — CEO"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
