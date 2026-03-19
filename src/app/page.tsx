import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TeamSection } from "@/components/sections/team-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { NewsSection } from "@/components/sections/news-section";
import { HighlightSection } from "@/components/sections/highlight-section";
import { HowWeWorkSection } from "@/components/sections/how-we-work-section";
import { VideoCardSection } from "@/components/sections/video-card-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HighlightSection />
        <PortfolioSection />
        <HowWeWorkSection />
        <VideoCardSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
