"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-27.5 py-6"
        style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(17.5px)", WebkitBackdropFilter: "blur(17.5px)" }}
      >
        <Link href="/" className="flex items-center w-37 h-12.5 shrink-0">
          <Image src="/assets/Logo White.svg" alt="Artic Analytica" width={148} height={50} priority className="w-37 h-auto" />
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
