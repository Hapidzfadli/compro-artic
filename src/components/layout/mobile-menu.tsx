"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Our Service", key: "service" },
  { label: "About Artic", key: "about", href: "/about" },
  { label: "Our Works", key: "works", href: "/works" },
  { label: "Artic Updates", key: "updates", href: "/blog" },
];

const MENU_SERVICES = [
  { id: "artic-research", title: "Artic Research", description: "Help you see what your audience really thinks, feels, and needs", image: "/images/wrapper-nocolor/businesswoman-networking-using-digital-devices-1.png", href: "/artic-research" },
  { id: "artic-data", title: "Artic Data", description: "Turn complex numbers into clear visuals and insights you can use right away", image: "/images/wrapper-nocolor/digital-tablet-online-learning-1.png", href: "/services/artic-data" },
  { id: "artic-consulting", title: "Artic Consulting", description: "Shape smart strategies that actually get results for you", image: "/images/wrapper-nocolor/examining-business-documents-1.png", href: "/services/artic-consulting" },
  { id: "artic-academy", title: "Artic Academy", description: "Help your team learn, think, and lead with data, practical and inspiring", image: "/images/wrapper-nocolor/chasing-down-their-deadline-rear-view-shot-team-programmers-coding-through-night-1.png", href: "/services/artic-academy" },
  { id: "artic-policy-lab", title: "Artic Policy Lab", description: "Experiment with new ideas & help you build policies that make a real difference", image: "/images/wrapper-nocolor/businessman-pressing-smiley-face-emoticon-virtual-touch-screen-user-give-rating-service-experience-online-application-customer-review-satisfaction-feedback-survey-concept-1.png", href: "/services/artic-policy-lab" },
  { id: "artic-insight-hub", title: "Artic Insight Hub", description: "Open access to data, stories, and visuals that help everyone", image: "/images/wrapper-nocolor/business-concept-with-graphic-holography-11.png", href: "/services/artic-insight-hub" },
];

function ServiceCard({ service, onClose }: { service: (typeof MENU_SERVICES)[0]; onClose: () => void }) {
  return (
    <Link href={service.href} onClick={onClose} className="group flex flex-col gap-3 w-48 shrink-0">
      <div className="flex justify-between items-center w-full">
        <span className="text-artic-grey-300 group-hover:text-artic-teal-light text-[14px] font-medium whitespace-nowrap transition-colors duration-200">
          {service.title}
        </span>
        <span className="text-artic-grey-300 group-hover:text-artic-teal-light text-sm -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
      </div>
      <p className="text-artic-grey-300 text-[12px] leading-relaxed">{service.description}</p>
      <div className="mt-auto h-28 rounded-[10px] overflow-hidden bg-artic-grey-400 relative shrink-0">
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
      <motion.div
        key="mobile-menu"
        className="fixed inset-0 z-100 h-screen overflow-hidden"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
      <div className="bg-artic-ebony h-full overflow-y-auto px-16 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" onClick={onClose}>
            <Image src="/assets/Logo White.svg" alt="Artic Analytica" width={112} height={38} priority className="w-28 h-auto" />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full border border-artic-grey-400 flex items-center justify-center text-lg text-artic-grey-200 bg-transparent cursor-pointer transition-colors duration-200 hover:border-artic-teal-light hover:text-artic-teal-light"
          >
            ×
          </button>
        </div>

        <div className="flex mt-10 items-start">
          <div className="w-[200px] shrink-0 flex flex-col gap-8">
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const isActive = activeNav === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveNav(item.key)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-[10px] border-none cursor-pointer text-[14px] font-medium text-left transition-all duration-200",
                      isActive ? "bg-artic-grey-400 text-artic-teal-light" : "bg-transparent text-artic-grey-200"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className={cn("text-sm transition-opacity duration-200", isActive ? "opacity-100" : "opacity-0")}>›</span>
                  </button>
                );
              })}
            </div>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-6 h-10 bg-artic-persian rounded-[10px] text-artic-white text-[13px] font-semibold no-underline transition-colors duration-200 hover:bg-artic-persian-600"
            >
              Contact Us →
            </Link>
          </div>

          <div className="w-px bg-[#333333] self-stretch shrink-0 mx-10" />

          <div className="flex-1 overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNav}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeNav === "service" && (
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                      {MENU_SERVICES.slice(0, 4).map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
                    </div>
                    <div className="flex gap-5">
                      {MENU_SERVICES.slice(4).map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
