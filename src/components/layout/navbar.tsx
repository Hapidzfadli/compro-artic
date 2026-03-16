"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Container } from "@/components/layout/container";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Image
              src="/assets/Logo White.svg"
              alt="Artic Analytica"
              width={160}
              height={40}
              priority
            />

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-artic-white transition-opacity hover:opacity-80"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
