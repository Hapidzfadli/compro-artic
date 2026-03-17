import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BrandButton } from "@/components/common/brand-button";
import { SectionLabel } from "@/components/common/section-label";

const FOOTER_LINKS = {
  "Layanan Kami": [
    { label: "Artic Research", href: "/services/research" },
    { label: "Artic Data", href: "/services/data" },
    { label: "Artic Consulting", href: "/services/consulting" },
    { label: "Artic Publishing", href: "/services/publishing" },
    { label: "Artic Academy", href: "/services/academy" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "/about" },
    { label: "Tim Kami", href: "/about#team" },
    { label: "Karir", href: "/careers" },
    { label: "Kontak", href: "/contact" },
  ],
  Insight: [
    { label: "Artikel", href: "/insights/artikel" },
    { label: "Berita", href: "/insights/berita" },
  ],
  Lainnya: [
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Syarat & Ketentuan", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ],
};

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "IN" },
  { label: "Twitter/X", href: "https://twitter.com", icon: "X" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-artic-ebony">
      {/* CTA Block */}
      <div className="relative border-b border-artic-white/10 py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-60" />
        <Container className="relative z-10 text-center">
          <SectionLabel>Mulai Sekarang</SectionLabel>
          <h2 className="mt-4 text-mobile-title-h2 text-artic-white md:text-headline-h3">
            Siap Mengambil Keputusan{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #53F2AA 0%, #43FFF9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Lebih Cerdas?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-sm text-artic-white/70 md:text-body-md">
            Hubungi kami sekarang dan dapatkan konsultasi gratis bersama tim ahli Artic Analytics.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact">
              <BrandButton variant="primary" size="lg">Konsultasi Gratis</BrandButton>
            </Link>
            <Link href="/works">
              <BrandButton variant="secondary" size="lg">Lihat Portfolio</BrandButton>
            </Link>
          </div>
        </Container>
      </div>

      {/* Footer Links */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/Logo White.svg"
              alt="Artic Analytics"
              width={140}
              height={36}
            />
            <p className="text-body-sm text-artic-white/60">
              Mengukur Opini,{" "}
              <span className="text-artic-teal-light">Membentuk Masa Depan</span>
            </p>
            <p className="mt-2 text-body-xs text-artic-white/40">
              Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10220
            </p>
            <div className="flex flex-col gap-1 text-body-xs text-artic-white/40">
              <span>info@articanalytica.com</span>
              <span>+62 21 1234 5678</span>
            </div>
          </div>

          {/* Nav Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <p className="text-label-sm text-artic-white">{section}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-artic-white/60 transition-colors hover:text-artic-teal-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-artic-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-body-xs text-artic-white/40">
            © 2025 PT Sinergi Muda Arsa. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-body-xs text-artic-white/40">Ikuti Artic:</span>
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-artic-white/20 text-label-xs text-artic-white/60 transition-all hover:border-artic-teal-light hover:text-artic-teal-light"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
