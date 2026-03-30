import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ExpertProfileBannerSection } from "@/components/sections/expert-profile-banner-section";
import { ExpertProfileBioSection } from "@/components/sections/expert-profile-bio-section";
import { ExpertProfileWorksSection } from "@/components/sections/expert-profile-works-section";

const TECHNICAL_TEAM = [
  {
    slug: "rian-destianto",
    name: "Rian Destianto",
    role: "Data Analyst",
    fields: ["MANAGING", "DATA ANALYST"],
    bio: [
      "Ayunina Zenti, S.P., M.Si. is an agribusiness specialist and data analyst with a strong academic background in agricultural economics. She completed her Bachelor's degree in Agribusiness at Universitas Jenderal Soedirman, focusing her research on Indonesia's agricultural export competitiveness—particularly the international market performance of clove commodities. Her academic work reflects a solid grasp of agribusiness analysis, commodity value chains, and market competitiveness studies.",
      "At Artic Analytica, Ayunina serves as a Data Analyst, contributing to research design, quantitative data processing, and evidence-based policy interpretation. She combines her agribusiness expertise with analytical skills to support multi-sector studies, including regional development, socio-economic mapping, and public policy insights. Her multidisciplinary approach strengthens Artic Analytica's data-driven outputs, ensuring accuracy, clarity, and relevance across research projects.",
    ],
    stats: { citation: [2, 0] as [number, number], hIndex: [4, 0] as [number, number], i10Index: [0, 0] as [number, number] },
    image: "/images/who-we-are/profile-expert.png",
  },
];

export function generateStaticParams() {
  return TECHNICAL_TEAM.map((m) => ({ slug: m.slug }));
}

export default async function TechnicalProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = TECHNICAL_TEAM.find((m) => m.slug === slug);
  if (!member) return notFound();

  return (
    <>
      <Navbar />
      <ExpertProfileBannerSection expert={member} variant="technical" />
      <ExpertProfileBioSection expert={member} />
      <ExpertProfileWorksSection />
      <Footer hideCta={true} />
    </>
  );
}
