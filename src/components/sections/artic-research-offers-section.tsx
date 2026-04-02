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
    <section className="relative overflow-hidden bg-[#13137f] py-14 md:py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-[200%] -translate-x-1/2 translate-y-1/2 rounded-[50%] bg-artic-teal-light blur-[80px] mix-blend-plus-lighter" />
      <Container className="px-5 md:px-8 lg:px-16">
        <h2 className="mb-[29px] text-center text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:mb-12 md:text-[42px]">
          What We Offer
        </h2>

        <div className="mx-auto grid max-w-[353px] grid-cols-1 gap-[14px] sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {OFFERS.map((offer) => (
            <div
              key={offer.title}
              className="flex flex-col gap-3 rounded-[8px] bg-white px-[14px] pb-6 pt-[14px] md:gap-7 md:rounded-[15px] md:px-4 md:pb-5 md:pt-4"
            >
              <div className="relative h-[158px] overflow-hidden rounded-[6px] md:aspect-[4/3] md:h-auto md:rounded-[10px]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-artic-ebony md:text-[18px] md:font-normal md:leading-[1.3]">
                  {offer.title}
                </h3>
                <p className="w-[267px] max-w-full text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-artic-grey-400 md:w-[70%] md:text-[12px] md:font-medium md:leading-normal">
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
