import { PageHero } from "@/components/common/page-hero";

export function WorksHeroSection() {
  return (
    <PageHero
      src="/images/works-hero.jpg"
      alt="Our Works"
      title="Our Works"
      height="sm"
      titleSize="lg"
      showBottomGradient={false}
    />
  );
}
