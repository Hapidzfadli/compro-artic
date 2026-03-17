import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";
import { BrandButton } from "@/components/common/brand-button";

const TEAM = [
  { id: 1, name: "Dr. Ahmad Fauzi", role: "Chief Executive Officer", image: "/assets/ui/wrapper/Wrapper(1).png" },
  { id: 2, name: "Siti Rahayu, M.Si", role: "Head of Research", image: "/assets/ui/wrapper/Wrapper(2).png" },
  { id: 3, name: "Budi Santoso", role: "Lead Data Analyst", image: "/assets/ui/wrapper/Wrapper(3).png" },
  { id: 4, name: "Dewi Kusuma", role: "Senior Consultant", image: "/assets/ui/wrapper/Wrapper(4).png" },
  { id: 5, name: "Reza Pratama", role: "Head of Publishing", image: "/assets/ui/wrapper/Wrapper(5).png" },
  { id: 6, name: "Rina Wulandari", role: "Academy Director", image: "/assets/ui/wrapper/Wrapper(6).png" },
];

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-artic-ebony py-24 md:py-32">
      {/* Accent blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-artic-persian/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-artic-teal-light/10 blur-[120px]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>Tim Kami</SectionLabel>
          <h2 className="mt-4 text-mobile-title-h2 text-artic-white md:text-headline-h3">
            Profesional di Balik{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsa Analytics
            </span>
          </h2>
        </div>

        {/* Team Cards */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM.map((member) => (
            <div key={member.id} className="group flex flex-col items-center gap-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-artic-ebony/60 to-transparent" />
              </div>
              <div className="text-center">
                <p className="text-body-xs font-semibold text-artic-white">{member.name}</p>
                <p className="text-body-xs text-artic-teal-light">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Akademisi highlight */}
        <div className="mt-16 flex flex-col items-start gap-6 rounded-2xl border border-artic-white/10 bg-artic-white/5 p-8 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <SectionLabel>Akademisi</SectionLabel>
            <p className="mt-3 text-body-sm text-artic-white/70 md:text-body-md">
              Kolaborasi strategis dengan akademisi berpengalaman adalah jaminan
              bahwa setiap rekomendasi Artic memiliki ketepatan data dan
              kredibilitas yang diakui.
            </p>
          </div>
          <Link href="/about" className="flex-none">
            <BrandButton variant="primary" size="lg">
              Pelajari Lebih Lanjut
            </BrandButton>
          </Link>
        </div>
      </Container>
    </section>
  );
}
