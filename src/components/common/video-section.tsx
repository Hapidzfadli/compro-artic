import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { SectionLabel, type SectionLabelVariant } from "@/components/common/section-label";

function PlayButton() {
  return (
    <div className="relative overflow-visible" style={{ width: 72, height: 72 }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "2.5px solid rgba(83,242,170,0.8)",
          animation: "pulse-ring 2.4s ease-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(83,242,170,0.5)",
          animation: "pulse-ring 2.4s ease-out infinite 0.8s",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(83,242,170,0.25)",
          animation: "pulse-ring 2.4s ease-out infinite 1.6s",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 18,
          top: 18,
          width: 36,
          height: 36,
          borderRadius: "50%",
          background:
            "linear-gradient(90deg, rgba(83,242,170,0.2) 0%, rgba(67,255,249,0.2) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 18,
          top: 18,
          width: 36,
          height: 36,
          borderRadius: "50%",
          background:
            "linear-gradient(90deg, rgba(83,242,170,0.5) 0%, rgba(67,255,249,0.5) 100%)",
        }}
      />
      <div style={{ position: "absolute", inset: "17px" }}>
        <svg viewBox="0 0 53.7334 53.7334" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="play-icon-mask" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
            <path d="M26.8667 52.8667C41.2265 52.8667 52.8667 41.2265 52.8667 26.8667C52.8667 12.5069 41.2265 0.866667 26.8667 0.866667C12.5069 0.866667 0.866667 12.5069 0.866667 26.8667C0.866667 41.2265 12.5069 52.8667 26.8667 52.8667Z" fill="white" stroke="white" strokeWidth="1.73333" strokeLinejoin="round" />
            <path d="M21.6665 26.867V19.3617C21.6665 18.6945 22.3887 18.2775 22.9665 18.6111L29.4665 22.3638L35.9664 26.1164C36.5442 26.45 36.5442 27.284 35.9664 27.6175L29.4665 31.3702L22.9665 35.1229C22.3887 35.4564 21.6665 35.0395 21.6665 34.3723V26.867Z" fill="black" stroke="black" strokeWidth="1.73333" strokeLinejoin="round" />
          </mask>
          <g mask="url(#play-icon-mask)">
            <path d="M-4.33353 -4.33304H58.0666V58.067H-4.33353V-4.33304Z" fill="url(#play-icon-grad)" />
          </g>
          <defs>
            <linearGradient id="play-icon-grad" x1="-4.33353" y1="26.867" x2="58.0666" y2="26.867" gradientUnits="userSpaceOnUse">
              <stop stopColor="#53F2AA" />
              <stop offset="1" stopColor="#43FFF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

interface VideoCardProps {
  src: string;
  alt?: string;
  className?: string;
}

export function VideoCard({ src, alt = "", className }: VideoCardProps) {
  return (
    <div className={cn("group relative h-64 cursor-pointer overflow-hidden rounded-[15px] md:h-110 lg:h-120", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Indigo multiply overlay — muncul saat hover */}
      <div className="absolute inset-0 bg-indigo-800 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-75" />

      {/* Dark ellipse — opacity rendah default, penuh saat hover */}
      <div className="pointer-events-none absolute left-1/2 top-[75%] h-318.5 w-[280%] -translate-x-1/2 rounded-full bg-neutral-900 opacity-30 blur-[300px] transition-opacity duration-500 group-hover:opacity-100" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
        <PlayButton />
      </div>
    </div>
  );
}

interface VideoSectionProps {
  label: string;
  src: string;
  alt?: string;
  labelVariant?: SectionLabelVariant;
  className?: string;
}

export function VideoSection({
  label,
  src,
  alt,
  labelVariant = "dark",
  className,
}: VideoSectionProps) {
  return (
    <section className={cn("bg-white py-16", className)}>
      <Container className="px-8 md:px-20 lg:px-44">
        <div className="mb-4">
          <SectionLabel variant={labelVariant}>{label}</SectionLabel>
        </div>
        <VideoCard src={src} alt={alt} />
      </Container>
    </section>
  );
}
