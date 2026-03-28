import Image from "next/image";
import { Container } from "@/components/layout/container";

const OFFERS = [
  {
    image: "/images/artic-research/offer-1.jpg",
    title: "Public Opinion Surveys",
    description: "Understand how people really see your program or brand.",
  },
  {
    image: "/images/artic-research/offer-2.jpg",
    title: "Program Evaluation",
    description: "Measure what's working and what needs to improve.",
  },
  {
    image: "/images/artic-research/offer-3.jpg",
    title: "Stakeholder Mapping",
    description: "See who matters most and how to reach them.",
  },
  {
    image: "/images/artic-research/offer-4.jpg",
    title: "Community Insight Reports",
    description: "Share meaningful stories behind the data.",
  },
];

export function ArticResearchOffersSection() {
  return (
    <section className="relative overflow-hidden bg-[#13137f] py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-[200%] -translate-x-1/2 translate-y-1/2 rounded-[50%] bg-artic-teal-light blur-[80px] mix-blend-plus-lighter" />
      <Container>
        <h2 className="mb-12 text-center text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-white lg:text-[42px]">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map((offer) => (
            <div
              key={offer.title}
              className="flex flex-col gap-7 rounded-[15px] bg-white px-4 pb-5 pt-4"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[18px] font-normal leading-[1.3] tracking-[-0.03em] text-artic-ebony">
                  {offer.title}
                </h3>
                <p className="text-[12px] font-medium leading-normal tracking-[-0.02em] w-[70%] text-artic-grey-400">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
