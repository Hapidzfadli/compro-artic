import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";

export function AboutStorySection() {
  return (
    <section className="bg-white pt-20">
      <Container className="px-8 md:px-20 lg:px-44">
        <div className="mb-6">
          <SectionLabel variant="grey">OUR STORY</SectionLabel>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left: headline */}
          <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony lg:w-[50%] lg:text-[45px]">
            Turning Data Into Decisions That Matter
          </h2>

          {/* Right: body */}
          <div className="flex flex-col justify-start gap-5 lg:ml-auto lg:w-[40%]">
            <p className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400">
              Artic Analytica is a multidisciplinary research and strategy firm supporting governments, businesses, and organizations in making better, clearer, and more human-centered decisions.
            </p>
            <p className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-artic-grey-400">
              We combine rigorous research, actionable data, and practical strategy to help institutions understand people, design smarter programs, and create measurable impact.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
