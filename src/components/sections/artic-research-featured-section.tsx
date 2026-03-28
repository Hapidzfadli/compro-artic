import Image from "next/image";
import { Container } from "@/components/layout/container";

export function ArticResearchFeaturedSection() {
  return (
    <section className="bg-white py-12">
      <Container className="px-8 md:px-20 lg:px-44">
        <div className="relative h-44 overflow-hidden rounded-[25px] bg-artic-teal-light md:h-64 lg:h-100">
          <Image
            src="/images/artic-research/featured.jpg"
            alt="Artic Research team at work"
            fill
            className="object-cover object-[center_25%]"
          />
        </div>
      </Container>
    </section>
  );
}
