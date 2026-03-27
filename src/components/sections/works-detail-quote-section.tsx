import Link from "next/link";
import { Container } from "@/components/layout/container";

interface WorksDetailQuoteProps {
  quote: string;
  pdfHref: string;
}

export function WorksDetailQuoteSection({ quote, pdfHref }: WorksDetailQuoteProps) {
  return (
    <section className="relative flex min-h-125 items-center overflow-hidden bg-artic-surface">
      {/* Rectangle wave — mix-blend-hard-light, centered, full-bleed */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-hard-light opacity-25"
        style={{ width: 1936, height: 611 }}
      >
        <img
          alt=""
          src="/images/works/video-section/quote-rect.png"
          className="absolute top-0 h-full"
          style={{ left: "-15.19%", width: "130.32%", maxWidth: "none" }}
        />
      </div>

      {/* White ellipse glow — bottom center */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{ top: "70.14%", width: 3896 }}
      >
        <div style={{ position: "relative", paddingBottom: "30.92%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/images/works/video-section/quote-ellipse.svg"
            className="absolute inset-0 block h-full w-full"
            style={{ maxWidth: "none" }}
          />
        </div>
      </div>

      <Container className="relative z-10 py-24">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <p className="text-[18px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony md:text-[26px] lg:text-[34px]">
            {quote}
          </p>

          <Link
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-12 w-fit items-center justify-center overflow-hidden rounded-[10px] bg-gradient-secondary px-7 text-[14px] font-semibold text-artic-ebony"
          >
            <span
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "linear-gradient(128deg, #53F2AA 91%, #A3FFD5 5.83%, #00FFF7 111.72%)" }}
            />
            <span className="relative z-10">Download PDF →</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
