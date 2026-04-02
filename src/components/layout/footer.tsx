"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/common/primary-button";
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
} from "lucide-react";
import { SectionLabel } from "../common/section-label";

const SERVICE_LINKS = [
  { label: "Artic Research", href: "/artic-research" },
  { label: "Artic Data", href: "/services/artic-data" },
  { label: "Artic Consulting", href: "/services/artic-consulting" },
  { label: "Artic Policy Lab", href: "/services/artic-policy-lab" },
  { label: "Artic Academy", href: "/services/artic-academy" },
  { label: "Artic Insight Hub", href: "/services/artic-insight-hub" },
];

const COMPANY_LINKS = [
  { label: "Our Works", href: "/works" },
  { label: "About Artic", href: "/about" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Artic Update", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const RESOURCE_LINKS = [
  {
    label: "Company Profile",
    href: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
  },
  {
    label: "Research Proposal",
    href: "https://api.whatsapp.com/send/?phone=081128892244&text&type=phone_number&app_absent=0",
  },
  {
    label: "Free Consultation",
    href: "https://api.whatsapp.com/send/?phone=081128892244&text&type=phone_number&app_absent=0",
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/articanalytica", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/articanalytica", Icon: Linkedin },
  { label: "Twitter/X", href: "https://twitter.com/articanalytica", Icon: Twitter },
  { label: "Facebook", href: "https://facebook.com/articanalytica", Icon: Facebook },
];

export function Footer({ hideCta = false }: { hideCta?: boolean }) {
  const [ctaHovered, setCtaHovered] = useState(false);
  const handleEnter = () => setCtaHovered(true);
  const handleLeave = () => setCtaHovered(false);

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: hideCta
          ? "linear-gradient(180deg, #131360 0%, #13137F 30%, #161694 60%, #13137F 100%)"
          : "linear-gradient(180deg, #171717 0%, #171717 15%, #131360 40%, #13137F 55%, #161694 75%, #13137F 100%)",
      }}
    >
      <div className="relative overflow-hidden md:hidden">
        {!hideCta && (
          <div className="relative overflow-hidden px-5 pb-14 pt-[121px]">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[499px] mix-blend-screen opacity-20"
              style={{
                backgroundImage: "url('/images/footer/rectangle.png')",
                backgroundSize: "1266px auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
              }}
            />
            <h2 className="relative z-10 mx-auto max-w-[344px] text-center text-[54px] font-medium leading-[1.1] tracking-[-1.62px] text-white">
              Let&apos;s Make Smart Moves Together
            </h2>
            <div className="relative z-10 mt-[72px] flex flex-col gap-2">
              <PrimaryButton
                href="https://api.whatsapp.com/send/?phone=081128892244&text&type=phone_number&app_absent=0"
                className="h-[52px] w-full justify-center rounded-[6px] px-10 text-[14px]"
              >
                Free Consultation
              </PrimaryButton>
              <Link
                href="https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[52px] items-center justify-center rounded-[6px] border border-white px-10 text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
              >
                Compro PDF →
              </Link>
            </div>
          </div>
        )}

        <div className="relative px-5 pb-0 pt-10">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-[120px] top-[260px] mix-blend-plus-lighter"
            style={{
              background: "radial-gradient(circle at 50% 80%, rgba(83,242,170,0.08), transparent 35%), linear-gradient(180deg, rgba(19,19,127,0) 0%, rgba(19,19,127,0.65) 55%, rgba(22,22,148,0.95) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-[520px] mix-blend-plus-lighter opacity-80"
            style={{
              background:
                "linear-gradient(165deg, rgba(19,19,127,0) 0%, rgba(32,32,211,0.5) 45%, rgba(22,22,148,0.9) 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <SectionLabel variant="white">ARTIC ANALYTICA</SectionLabel>
              <p className="max-w-[355px] text-[42px] font-medium leading-[1.1] tracking-[-1.26px] text-artic-teal-light">
                Turning Change Into Insightful Direction
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-12 pt-8">
              <div className="flex flex-col gap-[18px]">
                <p className="text-[14px] font-bold leading-[1.4] tracking-[-0.28px] text-artic-teal-light">
                  OUR SERVICE
                </p>
                <ul className="flex flex-col gap-2">
                  {SERVICE_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[14px] font-normal leading-[1.4] tracking-[-0.28px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-[18px]">
                <p className="text-[14px] font-bold leading-[1.4] tracking-[-0.28px] text-artic-teal-light">
                  RESOURCES
                </p>
                <ul className="flex flex-col gap-2">
                  {RESOURCE_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-normal leading-[1.4] tracking-[-0.28px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-[18px]">
                <p className="text-[14px] font-bold leading-[1.4] tracking-[-0.28px] text-artic-teal-light">
                  ADDRESS
                </p>
                <div className="flex flex-col gap-[18px]">
                  <Link
                    href="https://www.google.com/maps/place/MG+Setos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-normal leading-[1.4] tracking-[-0.28px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light"
                  >
                    MG Setos, Jl. Inspeksi Lt 3, Kembangsari, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50133
                  </Link>
                  <Link
                    href="https://www.google.com/maps/place/MG+Setos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.72px] text-artic-teal-light transition-opacity hover:opacity-80"
                  >
                    Lihat Di Maps →
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[18px]">
                <p className="text-[14px] font-bold leading-[1.4] tracking-[-0.28px] text-artic-teal-light">
                  COMPANY
                </p>
                <ul className="flex flex-col gap-2">
                  {COMPANY_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[14px] font-normal leading-[1.4] tracking-[-0.28px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-[18px] pt-4">
              <p className="text-[14px] font-bold leading-[1.4] tracking-[-0.28px] text-artic-teal-light">
                CONTACT
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://api.whatsapp.com/send/?phone=081128892244&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] font-normal leading-[1.4] tracking-[-0.28px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light"
                >
                  <Phone className="size-[21px] shrink-0" />
                  +62 895-5913-459
                </Link>
                <Link
                  href="mailto:arsaanalytic@gmail.com"
                  className="flex items-center gap-2 text-[14px] font-normal leading-[1.4] tracking-[-0.28px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light"
                >
                  <Mail className="size-[21px] shrink-0" />
                  arsaanalytic@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-8">
              <p className="text-[14px] font-bold uppercase leading-[1.4] tracking-[-0.28px] text-artic-teal-light">
                FOLLOW ARTIC
              </p>
              <div className="grid grid-cols-6 gap-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-[53px] w-full items-center justify-center rounded-[6px] bg-white text-artic-ebony transition-transform hover:scale-[1.03]"
                  >
                    <Icon className="size-[18px]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-9 border-t border-[#7070E5] px-5 py-4 text-center">
          <p className="text-[12px] font-normal uppercase leading-[1.3] tracking-[0.72px] text-white">
            © 2025 PT ARTIC DATA ANALITIKA
          </p>
        </div>
      </div>

      {/* === CTA SECTION === */}
      {!hideCta && (<div className="relative hidden overflow-hidden py-28 md:block md:py-36 lg:py-48">
        {/* Rectangle wave texture */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen transition-all duration-700 ease-out"
          style={{
            backgroundImage: "url('/images/footer/rectangle.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: ctaHovered ? 0.25 : 0.15,
            transform: ctaHovered ? "scale(1.3)" : "scale(1)",
          }}
        />
        {/* Vector wave */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 mix-blend-plus-lighter">
          <Image
            src="/images/footer/vector.svg"
            alt=""
            width={1920}
            height={400}
            className="w-full"
          />
        </div>

        {/* Floating photo — kiri atas tulisan */}
        <div
          className="pointer-events-none absolute z-[5] hidden overflow-hidden rounded-2xl shadow-2xl md:block"
          style={{
            width: 200,
            height: 160,
            left: "25%",
            top: "22%",
            transform: ctaHovered ? "scale(1)" : "scale(0)",
            opacity: ctaHovered ? 1 : 0,
            transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 500ms ease-out",
          }}
        >
          <Image
            src="/images/insight/thumbnail-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {/* Floating photo — kanan bawah tulisan */}
        <div
          className="pointer-events-none absolute z-[5] hidden overflow-hidden rounded-2xl shadow-2xl md:block"
          style={{
            width: 160,
            height: 120,
            right: "25%",
            top: "44%",
            transform: ctaHovered ? "scale(1)" : "scale(0)",
            opacity: ctaHovered ? 1 : 0,
            transition: "transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1) 100ms, opacity 500ms ease-out 100ms",
          }}
        >
          <Image
            src="/images/insight/thumbnail-2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="group/cta relative z-10 px-6 text-center md:px-16"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* Heading — text stroke + shrink on hover + echo during motion */}
          <h2
            className="mx-auto max-w-[800px] text-[32px] font-medium leading-[1.1] tracking-[-0.64px] text-white md:text-[56px] md:tracking-[-1.12px] lg:text-[80px] lg:tracking-[-1.6px]"
            style={{
              transform: ctaHovered ? "scale(0.75)" : "scale(1)",
              textShadow: ctaHovered ? "0px 3px 5px rgba(0, 0, 0, 0.3)" : "none",
              transition: "transform 700ms ease-out, text-shadow 700ms ease-out",
            }}
          >
            Let&apos;s Make Smart<br />Moves Together
          </h2>

          {/* Buttons — slide down from behind heading */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{
              transform: ctaHovered ? "translateY(0px)" : "translateY(-40px)",
              opacity: ctaHovered ? 1 : 0,
              pointerEvents: ctaHovered ? "auto" : "none",
              transition: "transform 700ms ease-out, opacity 700ms ease-out",
            }}
          >
            <PrimaryButton
              href="https://api.whatsapp.com/send/?phone=081128892244&text&type=phone_number&app_absent=0"
              className="h-9 rounded-[8px] px-6 text-[12px] md:h-10 md:px-8 md:text-[13px]"
            >
              Free Consultation
            </PrimaryButton>
            <Link
              href="https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center justify-center rounded-[8px] border border-[#DCDCDC] px-6 text-[12px] font-semibold text-[#DCDCDC] transition-opacity hover:opacity-80 md:h-10 md:px-8 md:text-[13px]"
            >
              Download Company Profile
            </Link>
          </div>
        </div>
      </div>
      )}

      {/* === FOOTER LINKS === */}
      <div className="relative z-10 hidden px-6 pb-10 pt-16 md:block md:px-16 lg:px-[110px]">
        {/* Background vector logo watermark */}
        <div
          className="pointer-events-none absolute bottom--10 left-0 right-0 z-11 h-full opacity-100"
          style={{
            backgroundImage: "url('/images/footer/vector-logo.png')",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
          }}
        />
        {/* Row 1: Brand + Service + Company + Address */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <SectionLabel variant="white">ARTIC ANALYTICA</SectionLabel>
            </div>
            <p className="text-[24px] font-medium leading-[1.1] tracking-[-0.48px] text-artic-teal-light md:text-[32px] md:tracking-[-0.64px] lg:text-[40px] lg:tracking-[-0.8px]">
              Turning Change Into Insightful Direction
            </p>
          </div>

          {/* OUR SERVICE */}
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-normal uppercase tracking-[1.08px] text-artic-teal-light lg:text-[13px]">
              OUR SERVICE
            </p>
            <ul className="flex flex-col gap-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] font-medium tracking-[-0.36px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light lg:text-[13px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-normal uppercase tracking-[1.08px] text-artic-teal-light lg:text-[13px]">
              COMPANY
            </p>
            <ul className="flex flex-col gap-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] font-medium tracking-[-0.36px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light lg:text-[13px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-normal uppercase tracking-[1.08px] text-artic-teal-light lg:text-[13px]">
              ADDRESS
            </p>
            <Link
              href="https://www.google.com/maps/place/MG+Setos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3"
            >
              <p className="text-[12px] font-medium leading-[1.5] tracking-[-0.36px] text-[#DCDCDC] lg:text-[13px]">
                MG Setos, Jl. Inspeksi, 3rd Floor Kembangsari Subdistrict,
                Semarang Tengah District, Semarang City, Central Java 50133,
                Indonesia
              </p>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-light transition-opacity hover:opacity-80 lg:text-[11px]">
                SEE MAPS →
              </span>
            </Link>
          </div>
        </div>

        {/* Row 2: Resources + Contact */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr]">
          {/* Empty space (below brand) */}
          <div className="hidden lg:block" />

          {/* RESOURCES */}
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-normal uppercase tracking-[1.08px] text-artic-teal-light lg:text-[13px]">
              RESOURCES
            </p>
            <ul className="flex flex-col gap-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-medium tracking-[-0.36px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light lg:text-[13px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-normal uppercase tracking-[1.08px] text-artic-teal-light lg:text-[13px]">
              CONTACT
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="https://api.whatsapp.com/send/?phone=081128892244&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[12px] font-medium tracking-[-0.36px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light lg:text-[13px]"
                >
                  <Phone className="size-4 shrink-0" />
                  +62 811-2889-2244
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:articanalytica@gmail.com"
                  className="flex items-center gap-2 text-[12px] font-medium tracking-[-0.36px] text-[#DCDCDC] transition-colors hover:text-artic-teal-light lg:text-[13px]"
                >
                  <Mail className="size-4 shrink-0" />
                  articanalytica@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty space (below address) */}
          <div className="hidden lg:block" />
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-artic-teal-light/20" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-medium text-white lg:text-[13px]">
              Follow Artic
            </span>
            <div className="flex items-center">
              {SOCIALS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center rounded-[10px] p-3 text-[#DCDCDC] transition-colors hover:text-artic-teal-light"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
          <p className="text-[12px] font-medium text-white lg:text-[13px]">
            © 2025 PT ARTIC DATA ANALITIKA
          </p>
        </div>
      </div>
    </footer>
  );
}
