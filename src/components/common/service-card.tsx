"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  active?: boolean;
  inView?: boolean;
  delay?: number;
  onClick?: () => void;
}

export function ServiceCard({ title, description, image, href, active, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        // Mobile: fixed 260×224, rounded-[10px]
        "relative shrink-0 h-[224px] w-[260px] overflow-hidden rounded-[10px] cursor-pointer group transition-all duration-500",
        // Desktop overrides
        "md:h-100 md:rounded-2xl",
        active ? "md:w-137.5" : "md:w-52.5"
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes={active ? "(max-width: 768px) 100vw, 550px" : "210px"}
        quality={90}
      />

      {/* Gradient overlay — mobile: always, desktop: active only */}
      <div className={cn(
        "absolute inset-0 bg-linear-to-b from-[rgba(8,8,23,0)] via-[rgba(8,8,23,0.3)] to-[#080817]",
        !active && "md:hidden"
      )} />

      {/* Title — mobile: always teal 24px, desktop: active only white 36px */}
      <div className={cn(
        "absolute left-4 top-[118px] w-[185px]",
        "md:left-10 md:top-auto md:bottom-19 md:w-auto",
        !active && "md:hidden"
      )}>
        <h3 className="text-[24px] font-medium leading-[1.1] tracking-[-0.72px] text-artic-teal-light md:text-[36px] md:text-white md:w-90">
          {title}
        </h3>
        <p className="hidden mt-5 text-[15px] font-medium leading-normal tracking-[-0.3px] text-artic-grey-100 w-85 transition-all duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 md:block">
          {description}
        </p>
      </div>

      {/* Learn More button — mobile: always visible white, desktop: active+hover blue */}
      <Link
        href={href}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          // Mobile: always visible, white bg, full width
          "absolute left-4 bottom-4 inline-flex h-10 w-[calc(100%-32px)] items-center justify-center rounded-[6px] bg-white text-[14px] font-bold text-artic-ebony",
          // Desktop: blue, hover reveal
          "md:left-10 md:bottom-7 md:w-48 md:rounded-[5px] md:bg-artic-persian md:text-[13px] md:font-semibold md:text-white",
          "md:transition-all md:duration-300 md:delay-75",
          "md:opacity-0 md:translate-y-5 md:pointer-events-none",
          "md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto",
          !active && "md:hidden"
        )}
      >
        Learn More
      </Link>

      {/* Progress bar — mobile: always, desktop: active only */}
      <div className={cn(
        "absolute bottom-0 left-0 h-1.5 w-full bg-artic-grey-100 overflow-hidden",
        !active && "md:hidden"
      )}>
        <div className="h-full w-[165px] bg-linear-to-r from-artic-teal-light to-[#43FFF9] md:w-5" />
      </div>
    </div>
  );
}
