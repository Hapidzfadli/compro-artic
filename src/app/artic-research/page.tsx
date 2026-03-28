import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArticResearchHeroSection } from "@/components/sections/artic-research-hero-section";
import { ArticResearchIntroSection } from "@/components/sections/artic-research-intro-section";
import { ArticResearchFeaturedSection } from "@/components/sections/artic-research-featured-section";
import { ArticResearchOffersSection } from "@/components/sections/artic-research-offers-section";
import { ArticResearchHowWeWorkSection } from "@/components/sections/artic-research-how-we-work-section";
import { ArticResearchWhatYouGetSection } from "@/components/sections/artic-research-what-you-get-section";
import { ArticResearchPortfolioSection } from "@/components/sections/artic-research-portfolio-section";

export const metadata = {
  title: "Artic Research | Artic Analytica",
  description:
    "Through Artic Research, we explore what people think, feel, and need — turning voices into clear insights that lead to better actions.",
};

export default function ArticResearchPage() {
  return (
    <>
      <Navbar />
      <main>
        <ArticResearchHeroSection />
        <ArticResearchIntroSection />
        <ArticResearchFeaturedSection />
        <ArticResearchOffersSection />
        <ArticResearchHowWeWorkSection />
        <ArticResearchWhatYouGetSection />
        <ArticResearchPortfolioSection />
      </main>
      <Footer />
    </>
  );
}
