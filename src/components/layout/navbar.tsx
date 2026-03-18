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
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-10 py-5 xl:px-20 transition-all duration-300"
        style={
          showBg
            ? { background: "rgba(0,0,0,0.25)", backdropFilter: "blur(17.5px)", WebkitBackdropFilter: "blur(17.5px)" }
            : { background: "transparent" }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="/" className="flex items-center w-28 h-9 shrink-0">
          <Image src="/assets/Logo White.svg" alt="Artic Analytica" width={112} height={38} priority className="w-28 h-auto" />
        </Link>

        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="flex items-center justify-center p-2.5 bg-transparent border-none cursor-pointer"
        >
          <Image src="/images/hamburger.svg" alt="Menu" width={28} height={23} />
        </button>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
