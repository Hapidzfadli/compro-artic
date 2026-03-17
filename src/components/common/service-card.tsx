"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export function ServiceCard({
  title,
  description,
  image,
  className,
  active,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-2xl cursor-pointer transition-all duration-500",
        active ? "w-70 md:w-85" : "w-45 md:w-55",
        "h-105 md:h-125",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-artic-ebony/90 via-artic-ebony/40 to-transparent transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-subheadline-sm text-artic-teal-light transition-transform duration-300 group-hover:-translate-y-2">
          {title}
        </h3>
        <p className="mt-2 text-body-sm text-artic-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-button-sm text-artic-teal-light opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
