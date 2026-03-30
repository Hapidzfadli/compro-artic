import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ExpertProfileBannerSection } from "@/components/sections/expert-profile-banner-section";
import { ExpertProfileBioSection } from "@/components/sections/expert-profile-bio-section";
import { ExpertProfileWorksSection } from "@/components/sections/expert-profile-works-section";

const EXPERTS = [
  {
    slug: "khotibul-umam",
    name: "Khotibul Umam., S.S., M.Hum.",
    role: "Lecturer at Undip Semarang",
    fields: ["LITERATURE", "ART STUDIES"],
    bio: [
      "Huntal Hutapea, S.A.P., M.Si., M.Ed. is a public administration expert with strong specialization in development planning, governance reform, and local government performance evaluation. Holding a double master's degree in Public Administration and Education, he has served as an expert for the Central Java Regional Parliament, consultant for numerous regional governments in preparing and evaluating RPJMD/LPPD/LKPJ, and Director of PROGRESIF, an institute dedicated to sustainable local governance. His professional experience is built upon extensive fieldwork across Indonesia, supported by his academic role at Universitas Diponegoro.",
      "At Artic Analytica, Huntal contributes as an expert in public administration and governance, providing methodological insight, policy interpretation, and practical perspectives for research and consulting projects. His ability to bridge theory and real-world governmental practice strengthens Artic's analytical frameworks and ensures that its policy recommendations are grounded, applicable, and aligned with governance realities at the local level.",
    ],
    stats: { citation: [2, 0] as [number, number], hIndex: [4, 0] as [number, number], i10Index: [0, 0] as [number, number] },
    image: "/images/who-we-are/profile-expert.png",
  },
  {
    slug: "siti-aminah",
    name: "Dr. Siti Aminah, M.Si.",
    role: "Social Research Expert",
    fields: ["BEHAVIORAL RESEARCH", "COMMUNITY STUDIES"],
    bio: [
      "With over 15 years in behavioral and social research, Siti brings deep expertise in community-level qualitative studies and participatory action research across Central Java.",
      "At Artic Analytica, she leads qualitative research methodologies, ensuring that community voices are accurately represented in policy-facing research outputs.",
    ],
    stats: { citation: [12, 3] as [number, number], hIndex: [6, 1] as [number, number], i10Index: [2, 0] as [number, number] },
    image: "/images/who-we-are/profile-expert.png",
  },
  {
    slug: "hendra-gunawan",
    name: "Prof. Hendra Gunawan, Ph.D.",
    role: "Data Science & Analytics",
    fields: ["DATA SCIENCE", "POLICY ANALYTICS"],
    bio: [
      "Hendra leads quantitative research and data modeling at Artic, combining academic rigor from his time at ITB with practical policy analytics for government clients.",
      "His work bridges advanced statistical modeling and actionable policy insights, driving Artic's data-driven consulting practice.",
    ],
    stats: { citation: [45, 8] as [number, number], hIndex: [9, 2] as [number, number], i10Index: [5, 1] as [number, number] },
    image: "/images/who-we-are/profile-expert.png",
  },
  {
    slug: "rizki-amalia",
    name: "Rizki Amalia, M.Pd.",
    role: "Education Research Expert",
    fields: ["EDUCATION POLICY", "CURRICULUM RESEARCH"],
    bio: [
      "Rizki focuses on education policy and curriculum research, collaborating with national institutions to improve learning outcomes through evidence-based interventions.",
      "She brings a practitioner's perspective to research design, ensuring that findings translate into actionable improvements within classroom and institutional contexts.",
    ],
    stats: { citation: [8, 2] as [number, number], hIndex: [4, 1] as [number, number], i10Index: [1, 0] as [number, number] },
    image: "/images/who-we-are/profile-expert.png",
  },
  {
    slug: "bayu-prasetyo",
    name: "Dr. Bayu Prasetyo, S.T., M.T.",
    role: "Technology & Innovation Expert",
    fields: ["DIGITAL PLATFORMS", "DATA ENGINEERING"],
    bio: [
      "Bayu bridges engineering and social research, designing digital platforms and data collection tools that bring field research into real-time analytical environments.",
      "His expertise in technology systems allows Artic to offer innovative digital solutions alongside its traditional research and consulting services.",
    ],
    stats: { citation: [22, 5] as [number, number], hIndex: [7, 2] as [number, number], i10Index: [3, 1] as [number, number] },
    image: "/images/who-we-are/profile-expert.jpg",
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
      <Footer />
    </>
  );
}
