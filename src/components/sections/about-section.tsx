import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { BrandButton } from "@/components/common/brand-button";
import Link from "next/link";

const STATS = [
  { value: "500+", label: "Proyek Selesai" },
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "200+", label: "Klien Puas" },
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-artic-ebony py-24 md:py-32">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('/assets/ui/wrapper/Wrapper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-artic-ebony to-transparent" />

      <Container className="relative z-10">
        {/* Top: two column */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <SectionLabel>Tentang Artic</SectionLabel>
            <h2 className="mt-4 text-mobile-title-h2 text-artic-white md:text-headline-h3">
              Mengukur Opini,{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Membentuk Masa Depan
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center gap-8">
            <p className="text-body-sm text-artic-white/70 md:text-body-md">
              Kami bervisi untuk menjadi pemimpin yang diakui secara global
              dalam industri survei dan polling, memberikan wawasan yang mendalam
              dan akurat tentang opini masyarakat serta kepuasan bisnis atau
              target market Anda. Data yang menjadi landasan bagi pengambilan
              keputusan yang cerdas dan efektif di berbagai sektor.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <BrandButton variant="primary" size="lg">
                  Konsultasi Gratis
                </BrandButton>
              </Link>
              <Link href="/about">
                <BrandButton variant="secondary" size="lg">
                  Pelajari Lebih Lanjut
                </BrandButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[5px] border border-artic-white/10 bg-artic-white/5 px-8 py-6 backdrop-blur-sm"
            >
              <p
                className="text-headline-h4"
                style={{
                  background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-body-sm text-artic-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
