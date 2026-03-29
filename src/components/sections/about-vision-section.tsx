import { Container } from "@/components/layout/container";

const MISSIONS = [
  {
    icon: "/images/about/icons/brain-1.svg",
    text: "To translate complex issues into clear, evidence-based insights that support sustainable development and smart decision-making.",
  },
  {
    icon: "/images/about/icons/brain-2.svg",
    text: "To connect research, data, technology, and human perspectives to create innovative and practical solutions.",
  },
  {
    icon: "/images/about/icons/brain-3.svg",
    text: "To build a strong culture of data-driven thinking across institutions, organizations, and communities.",
  },
  {
    icon: "/images/about/icons/brain-4.svg",
    text: "To support leaders with actionable strategies, policy recommendations, and capacity-building that drive real impact.",
  },
  {
    icon: "/images/about/icons/brain-5.svg",
    text: "To make evidence accessible, understandable, & useful for everyone, from government, businesses and the public.",
  },
];

export function AboutVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#161616] py-36">
      {/* Wave background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/artic-research/how-we-work-bg.png"
        alt=""
        className="pointer-events-none absolute top-0 left-0 w-full scale-y-150 scale-x-120  origin-top mix-blend-screen opacity-[0.08]"
      />

      <Container>
        {/* Vision block */}
        <div className=" mt-8 mb-20 flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-artic-teal-dark" />
            <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-artic-teal-light">
              OUR VISION
            </span>
          </div>
          <h2 className="max-w-4xl text-[20px] font-medium leading-[1.1] tracking-[-0.02em] text-white md:text-[28px] lg:text-[45px]">
            To become a trusted partner in research, data, and strategic insight
            that empowers better policies, stronger institutions, and meaningful
            change
          </h2>
        </div>

        {/* Mission label */}
        <div className="mb-8 mt-32 flex items-center gap-2">
          <div className="size-2 rounded-full bg-artic-teal-dark" />
          <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-artic-teal-light">
            MISSION
          </span>
        </div>

        {/* Mission cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {MISSIONS.map((mission, i) => (
            <div
              key={i}
              className="group flex min-h-52 cursor-pointer flex-col gap-5 overflow-hidden rounded-[10px] border border-white/40 bg-[rgba(243,243,255,0.08)] px-6 pt-8 pb-10 backdrop-blur-[7.5px] transition-all duration-300 hover:border-artic-persian hover:bg-artic-persian"
            >
              <div className="size-5 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mission.icon}
                  alt=""
                  className="size-full object-contain"
                />
              </div>
              <p className="text-[12px] mt-2 font-medium leading-[1.3] tracking-[-0.02em] text-artic-grey-100 transition-colors duration-300 group-hover:text-white">
                {mission.text}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Ellipse3 teal glow — bottom center, mix-blend-plus-lighter */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[250%] -translate-x-1/2 translate-y-1/3 rounded-[50%] bg-artic-persian-800 blur-[100px] mix-blend-plus-lighter" />
    </section>
  );
}
