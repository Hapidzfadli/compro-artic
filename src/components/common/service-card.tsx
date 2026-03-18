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
        "relative shrink-0 h-132.5 overflow-hidden rounded-[15px] cursor-pointer group transition-all duration-500",
        active ? "w-181" : "w-67.5"
      )}
    >
      <Image src={image} alt={title} fill className="object-cover" />

      {/* Overlay & content: only on active card */}
      {active && (
        <>
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,8,23,0)] via-[rgba(8,8,23,0.3)] to-[#080817]" />

          <div className="absolute left-12.75 bottom-25">
            {/* Title: always visible on active card */}
            <h3 className="text-[48px] font-medium leading-[1.1] tracking-[-0.96px] text-white w-119.5">
              {title}
            </h3>

            {/* Description: slides up on hover */}
            <p className="mt-7.5 text-[18px] font-medium leading-normal tracking-[-0.36px] text-artic-grey-100 w-119.5 transition-all duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0">
              {description}
            </p>
          </div>

          {/* Button: slides up on hover */}
          <Link
            href={href}
            onClick={(e) => e.stopPropagation()}
            className="absolute left-12.75 bottom-4 inline-flex h-16 w-69 items-center justify-center gap-2.5 rounded-[5px] bg-artic-persian text-[18px] font-semibold text-white transition-all duration-300 delay-75 opacity-0 translate-y-5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
          >
            Learn More →
          </Link>

          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-artic-grey-100 overflow-hidden">
            <div className="h-full w-5.5 bg-linear-to-r from-artic-teal-light to-[#43FFF9]" />
          </div>
        </>
      )}
    </div>
  );
}
