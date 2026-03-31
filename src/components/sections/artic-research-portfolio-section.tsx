import { Container } from "@/components/layout/container";
import { PortfolioCard } from "@/components/common/portfolio-card";

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
            <PortfolioCard
              key={item.id}
              title={item.title}
              image={item.image}
              studyHref={item.studyHref}
              pdfHref={item.pdfHref}
              showGraphics
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
