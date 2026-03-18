"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
}

export function PrimaryButton({
  href,
  onClick,
  children,
  className,
  target,
  rel,
  type = "button",
}: PrimaryButtonProps) {
  const base = cn(
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-[5px] bg-artic-persian font-semibold transition-[background] duration-300 hover:bg-linear-to-r hover:from-artic-persian hover:to-artic-teal-light",
    className,
    "text-white"
  );

  const inner = (
    <>
      <span className="relative size-2 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute inset-0 -translate-x-8 rounded-full bg-artic-teal-light transition-transform duration-500 ease-out group-hover:translate-x-0" />
      </span>
      <span className="transition-transform duration-500 ease-out group-hover:translate-x-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base} target={target} rel={rel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {inner}
    </button>
  );
}
