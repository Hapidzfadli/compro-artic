"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBg = !isTop || isHovered;

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 box-border flex w-full max-w-full items-center justify-between overflow-x-clip px-5 py-6 transition-all duration-300 md:px-10 md:py-5 xl:px-20"
        style={
          showBg
            ? { background: "rgba(0,0,0,0.25)", backdropFilter: "blur(17.5px)", WebkitBackdropFilter: "blur(17.5px)" }
            : { background: "transparent" }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="/" className="flex h-[30px] w-[90px] shrink-0 items-center md:h-9 md:w-28">
          <Image src="/assets/Logo White.svg" alt="Artic Analytica" width={112} height={38} priority className="h-auto w-[90px] md:w-28" />
        </Link>

        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="flex h-8 w-9 shrink-0 items-center justify-center overflow-visible bg-transparent border-none cursor-pointer md:p-2.5"
        >
          <Image src="/images/hamburger.svg" alt="Menu" width={28} height={23} className="h-[23px] w-7 shrink-0 object-contain" />
        </button>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
