import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WorksHeroSection } from "@/components/sections/works-hero-section";
import { HighlightSection } from "@/components/sections/highlight-section";
import { Container } from "@/components/layout/container";
import { WorksPortfolioSection } from "@/components/sections/works-portfolio-section";

export const metadata = {
  title: "Our Works | Artic Analytica",
  description: "Explore our research, data, and consulting projects that drive real impact.",
};

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorksHeroSection />

        {/* Section heading above highlight slider */}
        <section className="bg-white pt-16 pb-12">
          <Container>
            <h2 className="text-headline-h4 text-artic-ebony">
              How We Build Value Through Research
            </h2>
          </Container>
        </section>

        <HighlightSection />
        <WorksPortfolioSection />
      </main>
      <Footer />
    </>
  );
}
