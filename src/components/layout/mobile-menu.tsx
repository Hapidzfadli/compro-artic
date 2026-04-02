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

const MENU_ABOUT = [
  { id: "about", title: "About Artic", description: "Learn our story, vision, and mission in transforming data into meaningful decisions", image: "/images/wrapper-nocolor/businesswoman-networking-using-digital-devices-1.png", href: "/about" },
  { id: "who-we-are", title: "Who We Are", description: "Meet the professionals and experts who drive Artic Analytica forward", image: "/images/video-card/image-25.png", href: "/who-we-are" },
];

const MENU_WORKS = [
  { id: "all-works", title: "All Works", description: "Explore our complete portfolio of research and consulting projects", image: "/images/slider-img/slide-1-color.png", href: "/works" },
  { id: "artic-research-works", title: "Artic Research", description: "Data research projects delivered for government and organizations", image: "/images/slider-img/slide-3-color.png", href: "/artic-research" },
];

const MENU_UPDATES = [
  { id: "all-updates", title: "All Updates", description: "Stay informed with our latest articles, insights, and news", image: "/images/insight/thumbnail-1.png", href: "/blog" },
  { id: "latest", title: "Latest Article", description: "Quality Transformation: Artic Achieves ISO 9001 — Setting the Gold Standard", image: "/images/insight/thumbnail-2.png", href: "/blog/1" },
];

function ServiceCard({ service, onClose }: { service: (typeof MENU_SERVICES)[0]; onClose: () => void }) {
  return (
    <Link href={service.href} onClick={onClose} className="group flex w-full flex-col gap-3 md:w-48 md:shrink-0">
      <div className="flex justify-between items-center w-full">
        <span className="text-artic-grey-300 group-hover:text-artic-teal-light text-[14px] font-medium whitespace-nowrap transition-colors duration-200">
          {service.title}
        </span>
        <span className="text-artic-grey-300 group-hover:text-artic-teal-light text-sm -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          →
        </span>
      </div>
      <p className="text-artic-grey-300 text-[12px] leading-relaxed">{service.description}</p>
      <div className="relative mt-auto h-32 overflow-hidden rounded-[10px] bg-artic-grey-400 md:h-28 md:shrink-0">
        <Image src={service.image} alt={service.title} fill className="object-cover grayscale transition-transform duration-300 group-hover:scale-105" />
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
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
      <motion.div
        key="mobile-menu"
        className="fixed inset-0 z-100 h-screen w-screen max-w-[100vw] overflow-x-clip"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
      <div className="bg-artic-ebony h-full overflow-y-auto overflow-x-clip px-5 py-6 md:px-16 md:py-5">
        <div className="flex justify-between items-center">
          <Link href="/" onClick={onClose}>
            <Image src="/assets/Logo White.svg" alt="Artic Analytica" width={112} height={38} priority className="h-auto w-[90px] md:w-28" />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full border border-artic-grey-400 flex items-center justify-center text-lg text-artic-grey-200 bg-transparent cursor-pointer transition-colors duration-200 hover:border-artic-teal-light hover:text-artic-teal-light"
          >
            ×
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex w-full shrink-0 flex-col gap-6 md:w-[200px] md:gap-8">
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
              className="flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-artic-persian px-6 text-[13px] font-semibold text-artic-white no-underline transition-colors duration-200 hover:bg-artic-persian-600"
            >
              Contact Us →
            </Link>
          </div>

          <div className="mx-10 hidden w-px shrink-0 self-stretch bg-[#333333] md:block" />

          <div className="w-full overflow-hidden md:flex-1 md:overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNav}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeNav === "service" && (
                  <div className="flex flex-col gap-4 md:gap-5">
                    <div className="grid grid-cols-1 gap-4 md:flex md:gap-5">
                      {MENU_SERVICES.slice(0, 4).map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:flex md:gap-5">
                      {MENU_SERVICES.slice(4).map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
                    </div>
                  </div>
                )}
                {activeNav === "about" && (
                  <div className="grid grid-cols-1 gap-4 md:flex md:gap-5">
                    {MENU_ABOUT.map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
                  </div>
                )}
                {activeNav === "works" && (
                  <div className="grid grid-cols-1 gap-4 md:flex md:gap-5">
                    {MENU_WORKS.map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
                  </div>
                )}
                {activeNav === "updates" && (
                  <div className="grid grid-cols-1 gap-4 md:flex md:gap-5">
                    {MENU_UPDATES.map((s) => <ServiceCard key={s.id} service={s} onClose={onClose} />)}
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
