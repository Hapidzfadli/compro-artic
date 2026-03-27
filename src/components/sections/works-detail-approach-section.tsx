import Image from "next/image";
import { Container } from "@/components/layout/container";

interface ApproachItem {
  image: string;
  title: string;
  description: string;
}

interface WorksDetailApproachProps {
  headline: string;
  body: string;
  items: ApproachItem[];
}

export function WorksDetailApproachSection({ headline, body, items }: WorksDetailApproachProps) {
  return (
    <section className="relative overflow-hidden bg-artic-persian py-16 md:py-24">
      {/* Teal ellipse glow — matches Figma Ellipse 3 */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-[200%] -translate-x-1/2 translate-y-1/2 rounded-[50%] bg-[#53F2AA] blur-[80px] mix-blend-plus-lighter" />
      <Container>
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="size-2 shrink-0 rounded-full bg-artic-teal-dark" />
          <span className="text-[12px] font-extrabold uppercase tracking-[0.96px] text-white">
            Our Approach
          </span>
        </div>

        {/* Gradient headline */}
        <h2 className="mt-6 max-w-3xl bg-gradient-to-r from-[#53F2AA] to-[#43FFF9] bg-clip-text text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-transparent md:text-[32px] lg:text-[44px]">
          {headline}
        </h2>

        {/* Body */}
        <p className="mt-6 max-w-3xl text-[14px] font-medium leading-[1.5] tracking-[-0.02em] text-white md:text-[16px]">
          {body}
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="relative h-65 overflow-hidden rounded-[10px]">
              {/* Image */}
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              {/* Gradient shader bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-[88%]"
                style={{
                  background: "linear-gradient(to bottom, rgba(8,8,23,0) 0%, #080817 78%)",
                }}
              />
              {/* Content */}
              <div className="absolute inset-x-8 bottom-8 flex flex-col gap-5">
                <span className="bg-gradient-to-r from-[#53F2AA] to-[#43FFF9] bg-clip-text text-[11px] font-normal uppercase tracking-[0.96px] text-transparent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[13px] font-medium leading-[1.2] tracking-[-0.03em] text-artic-grey-200 md:text-[14px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
