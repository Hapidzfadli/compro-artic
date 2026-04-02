import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhoWeAreHeroSection } from "@/components/sections/who-we-are-hero-section";
import { WhoWeAreExpertiseSection } from "@/components/sections/who-we-are-expertise-section";
import { WhoWeAreCeoSection } from "@/components/sections/who-we-are-ceo-section";
import { WhoWeAreTeamSection } from "@/components/sections/who-we-are-team-section";
import { WhoWeAreExpertSectionResponsive } from "@/components/sections/who-we-are-expert-section-responsive";

export default function WhoWeArePage() {
  return (
    <>
      <Navbar />
      <WhoWeAreHeroSection />
      <WhoWeAreExpertiseSection />
      <WhoWeAreCeoSection />
      <WhoWeAreTeamSection />
      <WhoWeAreExpertSectionResponsive />
      <Footer />
    </>
  );
}
