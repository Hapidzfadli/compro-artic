import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/ui/home/abstract-background-with-low-poly-design 1.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
      </div>

      {/* Content - Centered */}
      <Container>
        <div className="relative z-10 mx-auto max-w-[893px] pb-20 pt-32 text-center">
          {/* Label */}
          <span className="text-label-lg text-artic-white">
            Where Data Meets Strategy
          </span>

          {/* Title with gradient */}
          <h1
            className="mt-6 text-hero-title"
            style={{
              background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Actionable Insights
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-[683px] text-body-lg text-artic-white">
            We help governments, businesses, and organizations make smarter
            decisions through research, data, and strategy that actually make
            sense
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="http://wa.me/082085641027912"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 items-center justify-center rounded-[5px] bg-artic-persian px-10 text-button-lg text-artic-white transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(32,32,211,0.4)]"
            >
              Free Consultation
            </Link>
            <Link
              href="/works"
              className="inline-flex h-16 items-center justify-center gap-2 rounded-[5px] bg-gradient-secondary px-10 text-button-lg text-artic-ebony transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(83,242,170,0.4)]"
            >
              See Our Works
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
