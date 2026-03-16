"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full border-none bg-artic-ebony sm:max-w-md"
      >
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <Image
            src="/assets/Logo White.svg"
            alt="Artic Analytica"
            width={140}
            height={35}
          />
          <SheetClose className="p-2 text-artic-white transition-opacity hover:opacity-80">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>

        <nav className="mt-12 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-subheadline-md text-artic-white transition-colors hover:text-artic-teal-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-12">
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex h-14 w-full items-center justify-center rounded-full bg-gradient-primary text-button-md text-artic-ebony transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(83,242,170,0.4)]"
          >
            Free Consultation
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
