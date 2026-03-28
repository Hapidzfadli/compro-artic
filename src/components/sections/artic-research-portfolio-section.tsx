import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

const WORKS = [
  {
    id: 1,
    title: "Sinau Print Digital System (2024)",
    image: "/images/slider-img/slide-3-color.png",
    studyHref: "/works/1",
    pdfHref: "#",
  },
  {
    id: 2,
    title: "Youth Development Insight – Dispora Kota Semarang (2024)",
    image: "/images/slider-img/slide-2-color.png",
    studyHref: "/works/2",
    pdfHref: "#",
  },
  {
    id: 3,
    title: "Citizen Satisfaction Survey – BRIDA Kota Semarang (2025)",
    image: "/images/slider-img/slide-1-color.png",
    studyHref: "/works/3",
    pdfHref: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
  },
];

export function ArticResearchPortfolioSection() {
  return (
    <section className="bg-artic-surface py-20">
      <Container>
        <h2 className="mb-10 text-[24px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony md:text-[36px] lg:text-[48px]">
          See Artic Research Works
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((item) => (
            <div key={item.id} className="group relative h-[370px] overflow-hidden rounded-[15px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="scale-105 object-cover object-top grayscale transition-all duration-500 group-hover:scale-100 group-hover:grayscale-0"
              />

              {/* Graphics overlay */}
              <div className="pointer-events-none absolute -left-15 bottom-0 right-0 top-1/3 opacity-50 transition-opacity duration-500 group-hover:opacity-90">
                <Image
                  src="/images/graphics/Graphics-wrapper-hover.svg"
                  alt=""
                  fill
                  className="object-cover object-left"
                />
              </div>

              {/* Blue gradient bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-[55%] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(19,19,127,0.85) 50%, rgba(19,19,127,1) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="translate-y-15 transition-transform duration-300 ease-out group-hover:translate-y-0">
                  <h3 className="text-[22px] font-normal leading-[1.3] tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href={item.studyHref}
                      className="flex h-11 w-40 items-center justify-center rounded-[10px] bg-gradient-secondary text-[14px] font-bold text-artic-ebony transition-opacity duration-300 hover:opacity-80"
                    >
                      See Study Case →
                    </Link>
                    <Link
                      href={item.pdfHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-35 items-center justify-center rounded-[10px] border border-artic-grey-100 text-[14px] font-semibold text-artic-grey-100 transition-all duration-300 hover:bg-white/20"
                    >
                      Download PDF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
