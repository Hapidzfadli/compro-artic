"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Our Service", key: "service" },
  { label: "About Artic", key: "about", href: "/about" },
  { label: "Our Works", key: "works", href: "/works" },
  { label: "Artic Updates", key: "updates", href: "/updates" },
];

const MENU_SERVICES = [
  { id: "artic-research", title: "Artic Research", description: "Help you see what your audience really thinks, feels, and needs", image: "/assets/ui/wrapper/bg/IMG(6).png", href: "/services/artic-research" },
  { id: "artic-data", title: "Artic Data", description: "Turn complex numbers into clear visuals and insights you can use right away", image: "/assets/ui/wrapper/bg/IMG(5).png", href: "/services/artic-data" },
  { id: "artic-consulting", title: "Artic Consulting", description: "Shape smart strategies that actually get results for you", image: "/assets/ui/wrapper/bg/IMG(4).png", href: "/services/artic-consulting" },
  { id: "artic-academy", title: "Artic Academy", description: "Help your team learn, think, and lead with data, practical and inspiring", image: "/assets/ui/wrapper/bg/IMG(2).png", href: "/services/artic-academy" },
  { id: "artic-policy-lab", title: "Artic Policy Lab", description: "Experiment with new ideas & help you build policies that make a real difference", image: "/assets/ui/wrapper/bg/IMG(1).png", href: "/services/artic-policy-lab" },
  { id: "artic-insight-hub", title: "Artic Insight Hub", description: "Open access to data, stories, and visuals that help everyone", image: "/assets/ui/wrapper/bg/IMG.png", href: "/services/artic-insight-hub" },
];

function ServiceCard({ service, onClose }: { service: (typeof MENU_SERVICES)[0]; onClose: () => void }) {
  return (
    <Link href={service.href} onClick={onClose} className="group flex flex-col gap-4 w-[259px] shrink-0">
      <div className="flex justify-between items-center w-[240px]">
        <span className="text-artic-grey-300 group-hover:text-artic-teal-light text-subheadline-sm whitespace-nowrap transition-colors duration-200">
          {service.title}
        </span>
        <span className="text-artic-grey-300 group-hover:text-artic-teal-light text-lg opacity-0 group-hover:opacity-100 transition-all duration-200">
          →
        </span>
      </div>
      <p className="text-artic-grey-300 text-body-xs">{service.description}</p>
      <div className="h-[199px] rounded-[15px] overflow-hidden bg-artic-grey-400 relative shrink-0">
        <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
    </Link>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeNav, setActiveNav] = useState("service");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!mounted && !isOpen) return null;

  return (
    <div
      onTransitionEnd={() => { if (!isOpen) setMounted(false); }}
      className={cn(
        "fixed inset-0 z-[100] bg-artic-ebony overflow-y-auto transition-all duration-[250ms]",
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="px-27.5 py-6 min-h-screen">
        <div className="flex justify-between items-center">
          <Link href="/" onClick={onClose}>
            <Image src="/assets/Logo White.svg" alt="Artic Analytica" width={148} height={50} priority className="w-37 h-auto" />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full border border-artic-grey-400 flex items-center justify-center text-xl text-artic-grey-200 bg-transparent cursor-pointer transition-colors duration-200 hover:border-artic-teal-light hover:text-artic-teal-light"
          >
            ×
          </button>
        </div>

        <div className="flex mt-[65px] items-start">
          <div className="w-[267px] shrink-0 flex flex-col gap-[54px]">
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const isActive = activeNav === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setActiveNav(item.key);
                      if (item.href && item.key !== "service") onClose();
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-6 py-4 rounded-[10px] border-none cursor-pointer text-body-md text-left transition-all duration-200",
                      isActive ? "bg-artic-grey-400 text-artic-teal-light" : "bg-transparent text-artic-grey-200"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className={cn("text-base transition-opacity duration-200", isActive ? "opacity-100" : "opacity-0")}>›</span>
                  </button>
                );
              })}
            </div>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2.5 px-10 h-16 bg-artic-persian rounded-[10px] text-artic-white text-button-md no-underline transition-colors duration-200 hover:bg-artic-persian-600"
            >
              Contact Us →
            </Link>
          </div>

          <div className="w-px bg-[#333333] self-stretch shrink-0 mx-[55px]" />

          <div className="flex-1 overflow-x-auto">
            {activeNav === "service" && (
              <div className="flex flex-col gap-[30px]">
                <div className="flex gap-[30px]">
                  {MENU_SERVICES.slice(0, 4).map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
                </div>
                <div className="flex gap-[30px]">
                  {MENU_SERVICES.slice(4).map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
