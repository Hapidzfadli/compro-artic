import React from "react";
import Image from "next/image";
import Link from "next/link";

function BannerPattern({
  fill,
  accentFill,
  className,
  style,
}: {
  fill: string;
  accentFill: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 1091.86 879"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <g opacity="0.15">
        <path
          d="M258.355 284.152H5.89614C1.86249 284.152 -0.984792 288.198 0.320211 292.006L174.598 783.089L292.76 448.719C301.776 423.255 301.776 395.41 292.76 369.946L263.812 288.079C262.982 285.699 260.728 284.152 258.236 284.152H258.355Z"
          fill={fill}
        />
        <path
          d="M780.118 0H552.573C548.54 0 545.692 4.04576 546.997 7.85353L852.724 875.073C853.554 877.453 855.809 879 858.3 879H1085.96C1090 879 1092.84 874.954 1091.54 871.146L785.694 3.92676C784.864 1.54691 782.61 0 780.118 0Z"
          fill={fill}
        />
        <path
          opacity="0.5"
          d="M608.808 375.898L503.221 76.5118C501.323 71.2761 493.967 71.2761 492.188 76.5118L484.832 97.2166L397.753 344.008L211.493 871.146C210.188 874.954 212.917 878.999 217.069 878.999H469.528C472.02 878.999 474.274 877.453 475.104 875.073L617.824 471.211C625.773 448.602 625.773 423.971 617.824 401.362L610.468 380.776L608.808 375.898Z"
          fill={accentFill}
        />
      </g>
    </svg>
  );
}

type Expert = {
  name: string;
  role: string;
  fields: string[];
  image: string;
};

type Props = {
  expert: Expert;
  variant?: "expert" | "technical";
};

export function ExpertProfileBannerSection({ expert, variant = "expert" }: Props) {
  const isTechnical = variant === "technical";

  return (
    <>
      {/* Banner */}
      <section className={`relative overflow-hidden ${isTechnical ? "bg-[#161694]" : "bg-artic-surface"}`}>
        {/* Decorative pattern — right side */}
        <BannerPattern
          fill="#C4C4C4"
          accentFill={isTechnical ? "#C4C4C4" : "#505050"}
          className="pointer-events-none absolute max-w-none"
          style={{ inset: "-13.29% -13.85% -66.46% 56.98%" }}
        />

        <div className="mx-auto flex flex-col items-center justify-center gap-5 px-5 pt-20 pb-4 mb-8 md:flex-row md:items-center md:justify-start md:px-16 md:pt-32 md:pb-6 md:mb-10">
          {/* Avatar */}
          <div className="relative h-[150px] w-[150px] shrink-0 overflow-hidden rounded-full bg-[#4E4D4D] border-[5px] border-[#f3f3ff]">
            <div className="absolute inset-0 flex items-end justify-center p-2 pb-0">
              <Image
                src={expert.image}
                alt={expert.name}
                width={115}
                height={115}
                className="object-cover translate-y-1"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex min-w-0 flex-col gap-4 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h1 className={`text-[30px] font-medium leading-[1.1] tracking-[-0.02em] md:text-[36px] ${isTechnical ? "text-white" : "text-artic-ebony"}`}>
                {expert.name}
              </h1>
              <p className={`text-[15px] font-extrabold uppercase tracking-[0.06em] md:text-[17px] ${isTechnical ? "text-artic-teal-light" : "text-artic-teal-dark"}`}>
                {expert.role}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:justify-start">
              {expert.fields.map((field) => (
                <div key={field} className="flex items-center gap-2">
                  <div className={`size-[5px] rounded-full ${isTechnical ? "bg-[#f3f3ff]" : "bg-artic-grey-400"}`} />
                  <span className={`text-[12px] font-normal uppercase tracking-[0.06em] ${isTechnical ? "text-[#f3f3ff]" : "text-artic-grey-400"}`}>
                    {field}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className={`py-4 px-5 md:px-16 ${isTechnical ? "bg-artic-persian" : "bg-artic-ebony"}`}>
        <div className="flex items-center gap-4 text-[15px]">
          <Link href="/" className="font-medium text-artic-grey-100 transition-opacity hover:opacity-70">
            Home
          </Link>
          <span className="text-artic-grey-300">&gt;</span>
          <Link href="/who-we-are" className="font-medium text-artic-grey-100 transition-opacity hover:opacity-70">
            Who We Are
          </Link>
          <span className="text-artic-grey-300">&gt;</span>
          <span className="font-bold text-artic-teal-light underline underline-offset-2">
            {isTechnical ? "Technical Team" : "Expert"}
          </span>
        </div>
      </div>
    </>
  );
}
