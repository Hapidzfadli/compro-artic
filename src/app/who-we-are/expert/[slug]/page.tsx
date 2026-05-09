import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ExpertProfileBannerSection } from "@/components/sections/expert-profile-banner-section";
import { ExpertProfileBioSection } from "@/components/sections/expert-profile-bio-section";
import { ExpertProfileWorksSection } from "@/components/sections/expert-profile-works-section";

const EXPERTS = [
  {
    slug: "yuwanto",
    name: "Drs. Yuwanto, M.Si, P.hD.",
    role: "Political Science & Government Expert",
    fields: ["POLITICAL SCIENCE", "GOVERNMENT"],
    bio: [
      "Drs. Yuwanto, M.Si, P.hD. is a senior expert in political science and government affairs with extensive academic and professional experience in Indonesian governance studies. His scholarly work focuses on political dynamics, policy development, and the relationship between government institutions and society.",
      "At Artic Analytica, Yuwanto provides strategic guidance and methodological insight for research and consulting projects in the public sector. His expertise strengthens Artic's analytical frameworks and ensures policy recommendations are grounded in deep political and institutional understanding.",
    ],
    stats: { citation: [2, 0] as [number, number], hIndex: [4, 0] as [number, number], i10Index: [0, 0] as [number, number] },
    image: "/images/users-profile/Yuwanto,%20M.%20Si.,%20P.hD.png",
  },
  {
    slug: "huntal-hutapea",
    name: "HUNTAL HUTAPEA, S.A.P., M.SI., M.ED",
    role: "Public Policy Expert",
    fields: ["PUBLIC ADMINISTRATION", "GOVERNANCE"],
    bio: [
      "Huntal Hutapea, S.A.P., M.Si., M.Ed. is a public administration expert with strong specialization in development planning, governance reform, and local government performance evaluation. Holding a double master's degree in Public Administration and Education, he has served as an expert for the Central Java Regional Parliament, consultant for numerous regional governments in preparing and evaluating RPJMD/LPPD/LKPJ, and Director of PROGRESIF, an institute dedicated to sustainable local governance. His professional experience is built upon extensive fieldwork across Indonesia, supported by his academic role at Universitas Diponegoro.",
      "At Artic Analytica, Huntal contributes as an expert in public administration and governance, providing methodological insight, policy interpretation, and practical perspectives for research and consulting projects. His ability to bridge theory and real-world governmental practice strengthens Artic's analytical frameworks and ensures that its policy recommendations are grounded, applicable, and aligned with governance realities at the local level.",
    ],
    stats: { citation: [2, 0] as [number, number], hIndex: [4, 0] as [number, number], i10Index: [0, 0] as [number, number] },
    image: "/images/users-profile/Huntal%20Hetapea,%20S.A.P.,%20M.Si.,%20M.Ed.png",
  },
  {
    slug: "enar-ratriany-assa",
    name: "Enar Ratriany Assa, SIP., MH",
    role: "Political & Government Expert",
    fields: ["POLITICAL SCIENCE", "LAW"],
    bio: [
      "Enar Ratriany Assa, SIP., MH is a political and government expert with a strong foundation in political science and law. Her interdisciplinary background allows her to analyze complex governance issues from both political and legal perspectives, contributing to evidence-based policy recommendations.",
      "At Artic Analytica, Enar specializes in political and government research, supporting strategic public sector studies. Her work bridges legal frameworks and political analysis to deliver insights that inform sound institutional decision-making.",
    ],
    stats: { citation: [12, 3] as [number, number], hIndex: [6, 1] as [number, number], i10Index: [2, 0] as [number, number] },
    image: "/images/users-profile/Enar%20Ratriani%20Assa,%20S.IP.,%20MH.png",
  },
  {
    slug: "ayunina-zenti",
    name: "Ayunina Zenti, S.P., M.Sc.",
    role: "Management Expert",
    fields: ["AGRIBUSINESS", "DATA ANALYSIS"],
    bio: [
      "Ayunina Zenti, S.P., M.Sc. is an agribusiness specialist and data analyst with a strong academic background in agricultural economics. She completed her Bachelor's degree in Agribusiness at Universitas Jenderal Soedirman, focusing her research on Indonesia's agricultural export competitiveness — particularly the international market performance of clove commodities. Her academic work reflects a solid grasp of agribusiness analysis, commodity value chains, and market competitiveness studies.",
      "At Artic Analytica, Ayunina serves as a Management Expert, contributing to research design, quantitative data processing, and evidence-based policy interpretation. She combines her agribusiness expertise with analytical skills to support multi-sector studies, including regional development, socio-economic mapping, and public policy insights. Her multidisciplinary approach strengthens Artic Analytica's data-driven outputs, ensuring accuracy, clarity, and relevance across research projects.",
    ],
    stats: { citation: [8, 2] as [number, number], hIndex: [4, 1] as [number, number], i10Index: [1, 0] as [number, number] },
    image: "/images/users-profile/Ayunina%20Zenti.png",
  },
  {
    slug: "fitria-barokah",
    name: "Fitria Barokah, S.IP., M.IP.",
    role: "Political Science Expert",
    fields: ["POLITICAL SCIENCE", "PUBLIC RESEARCH"],
    bio: [
      "Fitria Barokah, S.IP., M.IP. is a political science expert with strong academic credentials in political research and public sector analysis. Her research interests focus on political institutions, governance, and policy implementation in Indonesia.",
      "At Artic Analytica, Fitria strengthens the team's political science research capabilities, contributing academic rigor and field experience to projects spanning policy analysis, institutional studies, and public sector research.",
    ],
    stats: { citation: [22, 5] as [number, number], hIndex: [7, 2] as [number, number], i10Index: [3, 1] as [number, number] },
    image: "/images/users-profile/Fitria%20Barokah,%20S.IP.,%20M.IP.png",
  },
];

export function generateStaticParams() {
  return EXPERTS.map((e) => ({ slug: e.slug }));
}

export default async function ExpertProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const expert = EXPERTS.find((e) => e.slug === slug);
  if (!expert) return notFound();

  return (
    <>
      <Navbar />
      <ExpertProfileBannerSection expert={expert} />
      <ExpertProfileBioSection expert={expert} />
      <ExpertProfileWorksSection />
      <Footer hideCta = {true} />
    </>
  );
}
