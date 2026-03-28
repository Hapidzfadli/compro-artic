import { Container } from "@/components/layout/container";

export function ArticResearchIntroSection() {
  return (
    <section className="bg-white pt-20">
      <Container className="px-8 md:px-20 lg:px-44">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left: headline */}
          <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony lg:w-[45%] lg:text-[45px]">
            Turning Insights Into Clear Decisions
          </h2>

          {/* Right: body */}
          <div className="flex flex-col justify-center gap-5 lg:w-[40%] lg:ml-auto">
            <p className="text-[12px] font-medium leading-[1.5] tracking-[-0.02em] text-artic-grey-400">
              We believe good decisions start with understanding people.
            </p>
            <p className="text-[12px] font-medium leading-[1.5] tracking-[-0.02em] text-artic-grey-400">
              Through Artic Research, we explore what people think, feel, and need — turning voices into clear insights that lead to better actions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
