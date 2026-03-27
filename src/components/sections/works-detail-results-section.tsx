import { Container } from "@/components/layout/container";

interface Stat {
  value: string;
  label: string;
}

interface WorksDetailResultsProps {
  headline: string;
  stats: Stat[];
}

export function WorksDetailResultsSection({ headline, stats }: WorksDetailResultsProps) {
  return (
    <section className="relative overflow-hidden bg-artic-ebony py-16 md:py-24">
      {/* Teal ellipse glow — top */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[200%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-artic-persian blur-[100px] mix-blend-plus-lighter" />

      {/* Vector logo watermark — grey-400, low opacity */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "url('/images/footer/vector-logo.png')",
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% top",
          filter: "grayscale(1) brightness(2)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      />

      <Container>
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="size-2 shrink-0 rounded-full bg-artic-teal-dark" />
          <span className="bg-linear-to-r from-artic-teal-light to-[#43FFF9] bg-clip-text text-[12px] font-extrabold uppercase tracking-[0.96px] text-transparent">
            The Results
          </span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 max-w-3xl text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[36px] lg:text-[48px]">
          {headline}
        </h2>

        {/* Stats cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative h-60 overflow-hidden rounded-2xl backdrop-blur-sm"
              style={{
                background: "linear-gradient(to bottom, rgba(22,22,22,0.5), rgba(54,54,54,0.5))",
              }}
            >
              {/* Glow — default: below card; hover: enters from bottom */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[200%] -translate-x-1/2 translate-y-full rounded-full bg-artic-teal-light opacity-75 blur-[100px] transition-transform duration-500 ease-out group-hover:translate-y-[60%]" />

              {/* Gradient border (teal → grey-400 → grey-300) — animates from outside to inside */}
              <div
                className="pointer-events-none absolute inset-0 scale-[1.15] rounded-2xl opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
                style={{
                  padding: "11px",
                  background: "linear-gradient(to top right, #53F2AA 0%, #43FFF9 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-3">
                <span className="bg-linear-to-r from-artic-teal-light to-[#43FFF9] bg-clip-text text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-grey-400 transition-colors duration-300 group-hover:text-transparent md:text-[40px]">
                  {stat.value}
                </span>
                <span className="text-[13px] leading-normal text-artic-grey-300 transition-colors duration-300 group-hover:text-white md:text-[14px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
