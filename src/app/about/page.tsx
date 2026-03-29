import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { AboutStorySection } from "@/components/sections/about-story-section";
import { AboutVideoSection } from "@/components/sections/about-video-section";
import { AboutVisionSection } from "@/components/sections/about-vision-section";
import { AboutWhySection } from "@/components/sections/about-why-section";
import { AboutHighlightSection } from "@/components/sections/about-highlight-section";

export const metadata = {
  title: "About Artic | Artic Analytica",
  description:
    "Artic Analytica is a multidisciplinary research and strategy firm supporting governments, businesses, and organizations in making better, clearer, and more human-centered decisions.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutVideoSection />
        <AboutVisionSection />
        <AboutWhySection />
        <AboutHighlightSection />
      </main>
      <Footer />
    </>
  );
}
