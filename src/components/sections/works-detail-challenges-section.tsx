import { Container } from "@/components/layout/container";

interface Challenge {
  title: string;
  description: string;
}

interface WorksDetailChallengesProps {
  headline: string;
  items: Challenge[];
}

export function WorksDetailChallengesSection({ headline, items }: WorksDetailChallengesProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="px-8 md:px-20 lg:px-44">
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="size-2 shrink-0 rounded-full bg-artic-teal-dark" />
          <span className="text-[12px] font-extrabold uppercase tracking-[0.96px] text-artic-grey-400">
            The Challenges
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-6 max-w-3xl text-[18px] font-medium leading-[1.15] tracking-[-0.03em] text-artic-ebony md:text-[22px] lg:text-[26px]">
          {headline}
        </h2>

        {/* Challenges row */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Dashed connecting line (not on last item) */}
              {i < items.length - 1 && (
                <div className="absolute left-1/2 top-18.5 hidden h-px w-full border-t-2 border-dashed border-artic-grey-100 sm:block" />
              )}

              {/* Icon: outer dashed ring + inner solid circle */}
              <div className="relative flex size-37 shrink-0 items-center justify-center">
                <svg className="absolute inset-0 size-full animate-[spin_14s_linear_infinite]" style={{ animationDirection: "reverse" }} viewBox="0 0 148 148" fill="none">
                  <circle cx="74" cy="74" r="72" stroke="#2020D3" strokeWidth="2" strokeDasharray="14 10" strokeLinecap="round" />
                </svg>
                <div className="flex size-27.5 items-center justify-center rounded-full bg-artic-persian">
                  <span className="text-[34px] font-medium leading-none text-white tracking-[-0.68px]">
                    {i + 1}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="mt-6 flex flex-col gap-3">
                <h3 className="text-[18px] font-normal leading-[1.3] tracking-[-0.03em] text-artic-ebony md:text-[20px]">
                  {item.title}
                </h3>
                <p className="text-[13px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400 md:text-[14px]">
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
