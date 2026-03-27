import Image from "next/image";
import { Container } from "@/components/layout/container";

interface WorksDetailOverviewProps {
  headline: string;
  body: string;
  featuredImage: string;
  meta: {
    client: string;
    team: string[];
    type: string;
  };
}

export function WorksDetailOverviewSection({ headline, body, featuredImage, meta }: WorksDetailOverviewProps) {
  return (
    <section className="bg-white pt-16 md:pt-24">
      <Container className="px-8 md:px-20 lg:px-44">
        {/* Two-column: left content (~75%), right metadata (~25%) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
          {/* Left — label + headline + body */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="size-1.5 shrink-0 rounded-full bg-artic-teal-dark" />
              <span className="text-[12px] font-extrabold uppercase tracking-[0.84px] text-artic-grey-400">
                The Situations
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[18px] font-medium leading-[1.15] tracking-[-0.03em] text-artic-ebony md:text-[22px] lg:text-[26px]">
              {headline}
            </h2>

            {/* Body */}
            <p className="max-w-3xl text-[14px] font-medium leading-[1.6] tracking-[-0.02em] text-artic-grey-400 md:text-[16px]">
              {body}
            </p>
          </div>

          {/* Right — metadata */}
          <div className="flex flex-col gap-7 lg:pt-2">
            {/* Clients */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">
                Clients
              </span>
              <p className="text-[12px] font-normal uppercase tracking-[0.72px] text-artic-ebony">
                {meta.client}
              </p>
            </div>

            {/* Team */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">
                Team
              </span>
              <div className="flex flex-col gap-1">
                {meta.team.map((name) => (
                  <p key={name} className="text-[12px] font-normal uppercase tracking-[0.72px] text-artic-ebony underline underline-offset-2">
                    {name}
                  </p>
                ))}
              </div>
            </div>

            {/* Type */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">
                Type
              </span>
              <p className="text-[12px] font-normal uppercase tracking-[0.72px] text-artic-ebony">
                {meta.type}
              </p>
            </div>
          </div>
        </div>

        {/* Featured image — full width below */}
        <div className="mt-14 relative h-55 overflow-hidden rounded-[15px] md:h-80 lg:h-110">
          <Image
            src={featuredImage}
            alt={headline}
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
