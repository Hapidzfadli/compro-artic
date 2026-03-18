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
        "relative shrink-0 h-100 overflow-hidden rounded-2xl cursor-pointer group transition-all duration-500",
        active ? "w-137.5" : "w-52.5"
      )}
    >
      <Image src={image} alt={title} fill className="object-cover" />

      {active && (
        <>
          <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,8,23,0)] via-[rgba(8,8,23,0.3)] to-[#080817]" />

          <div className="absolute left-10 bottom-19">
            <h3 className="text-[36px] font-medium leading-[1.1] tracking-[-0.72px] text-white w-90">
              {title}
            </h3>
            <p className="mt-5 text-[15px] font-medium leading-normal tracking-[-0.3px] text-artic-grey-100 w-85 transition-all duration-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0">
              {description}
            </p>
          </div>

          <Link
            href={href}
            onClick={(e) => e.stopPropagation()}
            className="absolute left-10 bottom-3 inline-flex h-13 w-55 items-center justify-center gap-2.5 rounded-[5px] bg-artic-persian text-[15px] font-semibold text-white transition-all duration-300 delay-75 opacity-0 translate-y-5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
          >
            Learn More →
          </Link>

          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-artic-grey-100 overflow-hidden">
            <div className="h-full w-5 bg-linear-to-r from-artic-teal-light to-[#43FFF9]" />
          </div>
        </>
      )}
    </div>
  );
}
