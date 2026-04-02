import { PageHero } from "@/components/common/page-hero";

export function ContactHeroSection() {
  return (
    <PageHero
      src="/images/contact/hero-bg.jpg"
      alt="Contact Us"
      title={
        <span className="max-w-[275px] text-[42px] md:max-w-none md:text-[64px]">
          Contact Us
        </span>
      }
      className="h-[360px] md:h-100"
      imageClassName="scale-150 translate-x-[8%] object-[center_15%] md:scale-150"
      showBottomGradient={false}
    />
  );
}
