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
  { id: "artic-research", title: "Artic Research", description: "Help you see what your audience really thinks, feels, and needs", image: "/images/wrapper-nocolor/businesswoman-networking-using-digital-devices-1.png", href: "/services/artic-research" },
  { id: "artic-data", title: "Artic Data", description: "Turn complex numbers into clear visuals and insights you can use right away", image: "/images/wrapper-nocolor/digital-tablet-online-learning-1.png", href: "/services/artic-data" },
  { id: "artic-consulting", title: "Artic Consulting", description: "Shape smart strategies that actually get results for you", image: "/images/wrapper-nocolor/examining-business-documents-1.png", href: "/services/artic-consulting" },
  { id: "artic-academy", title: "Artic Academy", description: "Help your team learn, think, and lead with data, practical and inspiring", image: "/images/wrapper-nocolor/chasing-down-their-deadline-rear-view-shot-team-programmers-coding-through-night-1.png", href: "/services/artic-academy" },
  { id: "artic-policy-lab", title: "Artic Policy Lab", description: "Experiment with new ideas & help you build policies that make a real difference", image: "/images/wrapper-nocolor/businessman-pressing-smiley-face-emoticon-virtual-touch-screen-user-give-rating-service-experience-online-application-customer-review-satisfaction-feedback-survey-concept-1.png", href: "/services/artic-policy-lab" },
  { id: "artic-insight-hub", title: "Artic Insight Hub", description: "Open access to data, stories, and visuals that help everyone", image: "/images/wrapper-nocolor/business-concept-with-graphic-holography-11.png", href: "/services/artic-insight-hub" },
];

function ServiceCard({ service, onClose }: { service: (typeof MENU_SERVICES)[0]; onClose: () => void }) {
  return (
    <Link href={service.href} onClick={onClose} className="group flex flex-col gap-3 w-[180px] shrink-0">
      <div className="flex justify-between items-center w-full">
        <span className="text-artic-grey-300 group-hover:text-artic-teal-light text-base font-medium whitespace-nowrap transition-colors duration-200">
          {service.title}
        </span>
        <span className="text-artic-grey-300 group-hover:text-artic-teal-light text-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
          →
        </span>
      </div>
      <p className="text-artic-grey-300 text-xs leading-relaxed">{service.description}</p>
      <div className="h-[130px] rounded-[10px] overflow-hidden bg-artic-grey-400 relative shrink-0">
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
        "fixed inset-0 z-[100] will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
      )}
    >
      <div className="bg-artic-ebony overflow-y-auto min-h-screen px-27.5 py-6">
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
                    onClick={() => setActiveNav(item.key)}
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
