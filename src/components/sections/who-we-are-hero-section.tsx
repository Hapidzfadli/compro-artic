import { PageHero } from "@/components/common/page-hero";

export function WhoWeAreHeroSection() {
  return (
    <PageHero
      src="/images/who-we-are/ceo-bg.jpg"
      alt="Who We Are"
      title="Who We Are"
      titleSize="md"
      imageClassName="object-[center_40%]"
      className="h-[360px] md:h-100"
    />
  );
}
