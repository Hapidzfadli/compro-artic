import Image from "next/image";
import { PlusCircle, MinusCircle, Bell, AlertCircle, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";

const ICON_MAP: Record<string, LucideIcon> = {
  "plus-circle": PlusCircle,
  "minus-circle": MinusCircle,
  bell: Bell,
  "alert-circle": AlertCircle,
};

interface FindingItem {
  image: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
}

interface WorksDetailFindingsProps {
  headline: string;
  body: string;
  items: FindingItem[];
}

export function WorksDetailFindingsSection({ headline, body, items }: WorksDetailFindingsProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Header row */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr]">
          {/* Left */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="size-2 shrink-0 rounded-full bg-artic-teal-dark" />
              <span className="text-[12px] font-extrabold uppercase tracking-[0.96px] text-artic-grey-400">
                What We Found
              </span>
            </div>
            <h2 className="max-w-lg text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-artic-ebony md:text-[32px] lg:text-[40px]">
              {headline}
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-end justify-start">
            <p className="max-w-[70%] text-[12px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400 md:text-[13px]">
              {body}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? PlusCircle;
            return (
              <div key={i} className="group flex flex-col gap-[18px] overflow-hidden rounded-[20px] bg-artic-surface px-[18px] pb-10 pt-[18px] transition-colors duration-300 hover:bg-artic-ebony">
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden rounded-[15px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                {/* Icon + Title */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Icon size={32} className="shrink-0 text-artic-ebony transition-colors duration-300 group-hover:text-artic-teal-light" strokeWidth={1.5} />
                    <h3 className="bg-gradient-to-r from-[#53F2AA] to-[#43FFF9] bg-clip-text text-[20px] font-normal leading-[1.3] tracking-[-0.03em] text-artic-ebony transition-colors duration-300 group-hover:text-transparent">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[12px] leading-[1.5] tracking-[-0.02em] text-artic-grey-400 transition-colors duration-300 group-hover:text-white">
                    {item.description}
                  </p>
                </div>

                {/* Bullet points */}
                <ul className="list-disc space-y-1 pl-5">
                  {item.points.map((point, j) => (
                    <li key={j} className="text-[10px] leading-[1.3] tracking-[-0.02em] text-artic-grey-300 transition-colors duration-300 group-hover:text-artic-grey-200">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
