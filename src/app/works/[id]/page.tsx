import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WorksDetailHeroSection } from "@/components/sections/works-detail-hero-section";
import { WorksDetailOverviewSection } from "@/components/sections/works-detail-overview-section";
import { WorksDetailChallengesSection } from "@/components/sections/works-detail-challenges-section";
import { WorksDetailApproachSection } from "@/components/sections/works-detail-approach-section";
import { WorksDetailFindingsSection } from "@/components/sections/works-detail-findings-section";
import { WorksDetailResultsSection } from "@/components/sections/works-detail-results-section";
import { WorksDetailVideoSection } from "@/components/sections/works-detail-video-section";
import { WorksDetailQuoteSection } from "@/components/sections/works-detail-quote-section";
import { WorksDetailRelatedSection } from "@/components/sections/works-detail-related-section";

const WORKS = [
  {
    id: 1,
    title: "Public Satisfaction Analysis toward District-Level Public Services in Semarang City",
    category: "Artic Research",
    year: "2025",
    client: "BRIDA Semarang City",
    service: "Survey, Data Analysis, Policy Insight",
    heroImage: "/images/works/brida/hero-detail.jpg",
    pdfHref: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
    overview: {
      headline: "Creating a Data-Driven Public Service Evaluation with BRIDA Semarang",
      body: "Every year, the Government of Semarang strives to improve public service quality across districts and sub-districts. However, without a structured and reliable measurement system, understanding how citizens truly perceive these services remained a challenge. BRIDA Semarang required more than a standard satisfaction survey — they needed a comprehensive, data-driven evaluation framework that could measure performance, identify gaps, and guide policy decisions across 16 districts and 177 sub-districts.",
      featuredImage: "/images/works/brida/overview-image.jpg",
      meta: {
        client: "BRIDA Semarang City",
        team: [
          "Drs. Yuwanto, M.Si, P.hD.",
          "Ayunina Zenti, S.P., M.Sc.",
          "Arof Fuddin, S. Pd.",
          "M. Noorman Perdana, S.Si.",
          "Jonathan Benjamin S, S.IP.",
          "Sofyan Setiawan, S.P., M.Sc.",
          "Arifka Sitepu - Data Analyst",
          "Fahmi Kurniawan - Data Analyst",
          "Intan Nur Fadilah, S.P.",
          "Chrisfilia Evelyn Br Damanik - Data Analyst",
          "Arya Permana Salaka - Enumerator",
          "Daniel Sandi Nugroho - Enumerator",
          "Milah Hidayati - Enumerator",
          "Swastika Ayuna Rahma - Enumerator",
          "Izzul Muna - Enumerator",
          "Ponco Adi Nugroho - Enumerator",
          "Muhammad Yazid Duniam - Enumerator",
          "Ahmad Rifan - Enumerator",
          "Elysa Agustina Hardiyanti - Enumerator",
        ],
        type: "Survey, Data Analysis, Policy Insight",
      },
    },
    challenges: {
      headline: "Evaluating Public Service Performance at Scale",
      items: [
        {
          title: "Wide Coverage & Diverse Population",
          description: "Capturing citizen feedback across 16 districts and 177 sub-districts required a structured sampling method to ensure representativeness across demographics and service experiences.",
        },
        {
          title: "Multi-Dimensional Service Evaluation",
          description: "Public service quality needed to be measured across multiple dimensions, including reliability, responsiveness, assurance, empathy, and tangible aspects — all with different expectations.",
        },
        {
          title: "From Data to Policy Action",
          description: "Transforming large-scale survey data into clear, actionable recommendations for government stakeholders was critical to ensure real impact.",
        },
      ],
    },
    approach: {
      headline: "A Structured, Data-Driven Evaluation Framework",
      body: "Instead of applying a generic survey, we designed a comprehensive evaluation system combining quantitative and qualitative approaches to generate meaningful insights.",
      items: [
        {
          image: "/images/works/brida/approach-1.jpg",
          title: "Stakeholder Alignment",
          description: "We collaborated with BRIDA to define research objectives aligned with public service performance indicators and policy priorities.",
        },
        {
          image: "/images/works/brida/approach-2.jpg",
          title: "Field Survey Deployment",
          description: "Survey conducted across 16 districts & 177 sub-districts using structured questionnaires (IKM standard) with field validation.",
        },
        {
          image: "/images/works/brida/approach-3.jpg",
          title: "Data Analysis & Measurement",
          description: "We applied the IKM framework and SERVQUAL analysis to measure gaps between citizen expectations and actual service perception.",
        },
        {
          image: "/images/works/brida/gallery-1.jpg",
          title: "Insight & Reporting",
          description: "Complex data was translated into clear performance scores, gap analysis, and strategic recommendations for policy improvement.",
        },
      ],
    },
    findings: {
      headline: "Key Insights from Public Service Evaluation",
      body: "From the analytics and field survey, here's what we found regarding public service performance across Semarang's districts and sub-districts:",
      items: [
        {
          image: "/images/works/brida/findings-1.jpg",
          icon: "plus-circle",
          title: "Strength",
          description: "Areas that consistently delivered high satisfaction.",
          points: ["High overall satisfaction (IKM: 88.64 – Very Good)", "Positive perception of government staff professionalism", "Strong foundation of public trust toward service institutions"],
        },
        {
          image: "/images/works/brida/findings-2.jpg",
          icon: "minus-circle",
          title: "Weakness",
          description: "Critical gaps identified in service delivery.",
          points: ["Service quality not yet fully consistent across regions", "Gap between citizen expectations and actual service outcomes", "Responsiveness and service experience still need improvement"],
        },
        {
          image: "/images/works/brida/findings-1.jpg",
          icon: "bell",
          title: "Opportunities",
          description: "High-impact areas for improvement.",
          points: ["Standardization of service quality across districts", "Strengthening citizen-centered service design", "Data-driven policy monitoring and evaluation systems"],
        },
        {
          image: "/images/works/brida/findings-2.jpg",
          icon: "alert-circle",
          title: "Threats",
          description: "Risks that may affect long-term performance.",
          points: ["Variability of service quality between districts", "Increasing public expectations toward government services", "Limited capacity to sustain continuous improvement without structured evaluation"],
        },
      ],
    },
    gallery: {
      headline: "Capturing the Voice of Semarang's Citizens",
      images: [
        "/images/works/brida/gallery-1.jpg",
        "/images/works/brida/gallery-2.jpg",
        "/images/works/brida/gallery-3.jpg",
        "/images/works/brida/gallery-4.jpg",
      ],
    },
    results: {
      headline: "Measurable Impact on Public Service Evaluation",
      description: "For the first time, Semarang now has a comprehensive baseline of public service performance, a data-driven understanding of citizen satisfaction, and clear direction for policy improvement and service standardization.",
      stats: [
        { value: "88.64", label: "Indeks Kepuasan Masyarakat (Kategori A – Sangat Baik)" },
        { value: "16", label: "Districts evaluated" },
        { value: "177", label: "Sub-districts analyzed" },
      ],
      quote: "Public service performance is already strong — but consistency and quality standardization are the key to sustaining public trust.",
    },
    video: {
      quote: '"When we connected citizen perception with performance data, the pattern became clear: quality and consistency are the true drivers of public trust."',
      frontCard: { name: "Drs. Yuwanto, M.Si, P.hD.", role: "Lead Researcher", photo: "/images/video-card/dsc-088241.png" },
      backCard: { name: "Ayunina Zenti, S.P., M.Sc.", role: "Research Lead", photo: "/images/video-card/image-24.png" },
      thumbnail: "/images/works/video-section/video-bg.png",
    },
    image: "/images/slider-img/slide-1-color.png",
    studyHref: "/works/1",
  },
  {
    id: 2,
    title: "Comparative Advantage Analysis of Indonesia's Clove (Syzygium aromaticum) Export in International Market",
    category: "Artic Research",
    year: "2024",
    client: "Academic & Policy Research",
    service: "Economic Analysis, Export Competitiveness Study",
    heroImage: "/images/slider-img/slide-2.png",
    pdfHref: "#",
    overview: {
      headline: "Unlocking Indonesia's Export Potential Through Clove Competitiveness Analysis",
      body: "Indonesia is the world's largest clove producer, yet it does not hold the top position in global exports. Despite strong production capacity, export performance remains inconsistent due to fluctuating productivity, domestic demand dominance, and global competition. This study was conducted to provide a data-driven understanding of Indonesia's competitive position in the global clove market, and to identify whether Indonesian cloves hold a sustainable comparative advantage.",
      featuredImage: "/images/slider-img/slide-2.png",
      meta: {
        client: "Academic & Policy Research",
        team: ["Ayunina Zenti, S.P., M.Sc.", "Jendral Soedirman Research Team"],
        type: "Economic Analysis, Export Competitiveness Study",
      },
    },
    challenges: {
      headline: "Understanding Global Trade Competitiveness",
      items: [
        {
          title: "Mismatch Between Production & Export Leadership",
          description: "Indonesia leads in clove production but ranks second in exports, indicating inefficiencies in export competitiveness.",
        },
        {
          title: "Fluctuating Productivity",
          description: "Despite increasing plantation area, productivity remains unstable due to climate factors and limited technological adoption.",
        },
        {
          title: "Global Market Competition",
          description: "Strong competition from countries like Madagascar, Singapore, and Comoros requires deeper analysis of comparative advantage.",
        },
      ],
    },
    approach: {
      headline: "A Quantitative, Trade-Focused Analysis Framework",
      body: "This study applied a quantitative-descriptive approach using secondary data from international and national institutions to assess Indonesia's competitive position.",
      items: [
        {
          image: "/images/slider-img/slide-2.png",
          title: "Data Collection",
          description: "Time series data (2010–2019) sourced from BPS, FAO, UN Comtrade, and the Ministry of Agriculture for clove commodity (HS Code 0907).",
        },
        {
          image: "/images/slider-img/slide-2.png",
          title: "Revealed Comparative Advantage (RCA)",
          description: "Measures export competitiveness relative to global trade to determine Indonesia's comparative position in the clove market.",
        },
        {
          image: "/images/slider-img/slide-2.png",
          title: "Revealed Symmetric Comparative Advantage (RSCA)",
          description: "Refines RCA into a balanced competitiveness index for a more accurate assessment of market position.",
        },
        {
          image: "/images/slider-img/slide-2.png",
          title: "Benchmarking Analysis",
          description: "Comparative analysis with major exporting countries — Madagascar, Singapore, and Comoros — to contextualize Indonesia's performance.",
        },
      ],
    },
    findings: {
      headline: "Key Insights from Export Competitiveness Analysis",
      body: "From our quantitative analysis of trade data, here's what we found about Indonesia's position in the global clove market:",
      items: [
        {
          image: "/images/slider-img/slide-2.png",
          icon: "plus-circle",
          title: "Strength",
          description: "Core competitive advantages Indonesia holds in global clove trade.",
          points: ["Indonesia has a strong comparative advantage in clove exports", "Average RCA: 12.88 (>1 = highly competitive)", "Average RSCA: 0.76 (positive = strong market position)", "Largest clove production globally"],
        },
        {
          image: "/images/slider-img/slide-2.png",
          icon: "minus-circle",
          title: "Weakness",
          description: "Internal constraints limiting export performance.",
          points: ["Export volume is limited due to high domestic consumption (cigarette industry)", "Productivity fluctuates despite increasing land area", "Limited adoption of modern agricultural technology"],
        },
        {
          image: "/images/slider-img/slide-2.png",
          icon: "bell",
          title: "Opportunities",
          description: "Strategic areas for growth and global market expansion.",
          points: ["Optimization of large plantation area", "Increased export potential through productivity improvement", "Strengthening position in global market through specialization"],
        },
        {
          image: "/images/slider-img/slide-2.png",
          icon: "alert-circle",
          title: "Threats",
          description: "External risks affecting export competitiveness.",
          points: ["Strong dominance of Madagascar in global exports", "Competition from re-export countries like Singapore", "Climate dependency affecting production stability"],
        },
      ],
    },
    gallery: {
      headline: "Indonesia's Clove Export Competitiveness in Data",
      images: [
        "/images/slider-img/slide-2.png",
        "/images/slider-img/slide-2.png",
        "/images/slider-img/slide-2.png",
        "/images/slider-img/slide-2.png",
      ],
    },
    results: {
      headline: "Measurable Insights on Export Competitiveness",
      description: "This study provides a clear validation of Indonesia's comparative advantage, strategic direction for improving export competitiveness, and insight for policymakers to balance domestic demand versus export growth.",
      stats: [
        { value: "12.88", label: "Average RCA Value (Strong Comparative Advantage)" },
        { value: "0.76", label: "Average RSCA Value (Positive Competitiveness Index)" },
        { value: "2010–2019", label: "Time Series Analysis Period" },
      ],
      quote: "Indonesia has the resources to lead the global clove market — but without productivity optimization and export focus, potential remains underutilized.",
    },
    video: {
      quote: '"Indonesia holds the production power to lead global clove trade — the question is whether strategic policy can unlock that latent competitive advantage."',
      frontCard: { name: "Ayunina Zenti, S.P., M.Sc.", role: "Lead Researcher", photo: "/images/video-card/dsc-088241.png" },
      backCard: { name: "Jendral Soedirman Research Team", role: "Research Partner", photo: "/images/video-card/image-24.png" },
      thumbnail: "/images/works/video-section/video-bg.png",
    },
    image: "/images/slider-img/slide-2-color.png",
    studyHref: "/works/2",
  },
  {
    id: 3,
    title: "Business Plan",
    category: "Artic Consulting",
    year: "2024",
    client: "Sinau Print",
    service: "Business Development, Marketing Research",
    heroImage: "/images/slider-img/slide-3.png",
    pdfHref: "#",
    overview: {
      headline: "Building a Modern Printing Business Through System & Market Integration",
      body: "Sinau Print hadir sebagai solusi atas kebutuhan industri percetakan lokal yang semakin dinamis di Semarang. Meskipun permintaan cetak terus meningkat, banyak pelaku usaha percetakan masih terjebak pada sistem konvensional yang tidak efisien, tidak terstandarisasi, dan sulit berkembang. Dengan positioning \"Solusi Cetak Tanpa Batas\", Sinau Print dibangun bukan hanya sebagai jasa percetakan, tetapi sebagai system-driven printing business yang mengintegrasikan layanan cetak, branding, dan digitalisasi operasional.",
      featuredImage: "/images/slider-img/slide-3.png",
      meta: {
        client: "Sinau Print",
        team: ["Artic Analytica Team"],
        type: "Business Development, Marketing Research",
      },
    },
    challenges: {
      headline: "Transforming Conventional Printing into a Scalable Business",
      items: [
        {
          title: "Lack of Standardization & Transparency",
          description: "Harga dan produk tidak terstruktur menyebabkan kebingungan pelanggan dan inefisiensi tim.",
        },
        {
          title: "Unstructured Operational System",
          description: "Proses kerja manual, tidak terdokumentasi, dan sangat bergantung pada individu.",
        },
        {
          title: "High Price Competition",
          description: "Banyak kompetitor bermain di harga murah tanpa standar kualitas yang jelas.",
        },
        {
          title: "Limited Digital Integration",
          description: "Belum adanya sistem online, marketplace, dan automation dalam operasional.",
        },
      ],
    },
    approach: {
      headline: "Building a System-Driven Printing Business",
      body: "Pendekatan yang digunakan adalah mengubah Sinau Print dari sekadar percetakan menjadi integrated business system yang adaptif, fleksibel, dan solutif terhadap kebutuhan pelanggan.",
      items: [
        {
          image: "/images/slider-img/slide-3.png",
          title: "Brand & Positioning Development",
          description: "Positioning: Solusi Cetak Tanpa Batas with campaign #TemanCetakMuKapanAja — built on an adaptive, flexible, and solution-driven philosophy.",
        },
        {
          image: "/images/slider-img/slide-3.png",
          title: "Operational System Design",
          description: "Implementasi sistem digital: POS (Point of Sales), Warehouse Management System (WMS), Sistem Antrian Digital, dan SOP Operasional end-to-end.",
        },
        {
          image: "/images/slider-img/slide-3.png",
          title: "Product & Service Structuring",
          description: "Produk disusun berbasis kebutuhan pasar: Print Outdoor, Print Indoor, DTF printing (custom apparel), dan produk kantor & event.",
        },
        {
          image: "/images/slider-img/slide-3.png",
          title: "Hybrid Marketing Strategy",
          description: "Menggabungkan offline (door-to-door UMKM, sales activation, event & booth) dan digital (Instagram & TikTok, WhatsApp-based conversion, marketplace development).",
        },
        {
          image: "/images/slider-img/slide-3.png",
          title: "Business Model Strategy",
          description: "Dua engine utama: Retail → cashflow cepat, Korporat → omzet besar & stabil.",
        },
      ],
    },
    findings: {
      headline: "Key Insights from Business Development Analysis",
      body: "From our market research and business analysis, here's what we found about Sinau Print's competitive position and growth potential:",
      items: [
        {
          image: "/images/slider-img/slide-3.png",
          icon: "plus-circle",
          title: "Strength",
          description: "Core competitive advantages driving the business.",
          points: ["Mesin cetak modern & berkualitas tinggi", "Produk beragam (retail hingga korporat)", "Harga kompetitif", "Fleksibilitas layanan tinggi"],
        },
        {
          image: "/images/slider-img/slide-3.png",
          icon: "minus-circle",
          title: "Weakness",
          description: "Internal constraints to address for growth.",
          points: ["Lokasi kurang strategis", "Brand awareness awal masih rendah", "Belum fully digital di awal operasional"],
        },
        {
          image: "/images/slider-img/slide-3.png",
          icon: "bell",
          title: "Opportunities",
          description: "High-potential market segments to capture.",
          points: ["Pertumbuhan UMKM lokal di Semarang", "Tren custom merchandise (DTF, branding)", "Tingginya kebutuhan event & komunitas"],
        },
        {
          image: "/images/slider-img/slide-3.png",
          icon: "alert-circle",
          title: "Threats",
          description: "External risks to manage for sustainable growth.",
          points: ["Kompetitor berbasis harga murah", "Marketplace printing nasional", "Fluktuasi biaya bahan baku"],
        },
      ],
    },
    gallery: {
      headline: "A System-Driven Printing Business, Built to Scale",
      images: [
        "/images/slider-img/slide-3.png",
        "/images/slider-img/slide-3.png",
        "/images/slider-img/slide-3.png",
        "/images/slider-img/slide-3.png",
      ],
    },
    results: {
      headline: "Projected Business Performance & Impact",
      description: "Sinau Print berhasil membangun fondasi sebagai system-driven printing business — one-stop printing & branding solution dengan scalable business model berbasis digital dan operasional terstruktur.",
      stats: [
        { value: "Rp150 jt", label: "Target omzet awal per bulan" },
        { value: "Rp2,1 M", label: "Proyeksi omzet tahun pertama" },
        { value: "100+", label: "Target pelanggan retail dalam 3 bulan awal" },
        { value: "5", label: "Deliverables strategis yang dihasilkan" },
      ],
      quote: "Printing business is no longer about machines — it's about systems, speed, and service experience.",
    },
    video: {
      quote: '"Printing business is no longer about machines — it\'s about systems, speed, and service experience."',
      frontCard: { name: "Artic Analytica Team", role: "Business Consultant", photo: "/images/video-card/dsc-088241.png" },
      backCard: { name: "Sinau Print", role: "Client", photo: "/images/video-card/image-24.png" },
      thumbnail: "/images/works/video-section/video-bg.png",
    },
    image: "/images/slider-img/slide-3-color.png",
    studyHref: "/works/3",
  },
];

export async function generateStaticParams() {
  return WORKS.map((w) => ({ id: String(w.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = WORKS.find((w) => String(w.id) === id);
  if (!work) return {};
  return {
    title: `${work.title} | Artic Analytica`,
    description: work.overview.body,
  };
}

export default async function WorksDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = WORKS.find((w) => String(w.id) === id);

  if (!work) notFound();

  const relatedWorks = WORKS.map((w) => ({
    id: w.id,
    title: w.title,
    category: w.category,
    image: w.image,
    studyHref: w.studyHref,
    pdfHref: w.pdfHref,
  }));

  return (
    <>
      <Navbar />
      <main>
        <WorksDetailHeroSection
          title={work.title}
          category={work.category}
          heroImage={work.heroImage}
        />
        <WorksDetailOverviewSection
          headline={work.overview.headline}
          body={work.overview.body}
          featuredImage={work.overview.featuredImage}
          meta={work.overview.meta}
        />
        <WorksDetailChallengesSection
          headline={work.challenges.headline}
          items={work.challenges.items}
        />
        <WorksDetailApproachSection
          headline={work.approach.headline}
          body={work.approach.body}
          items={work.approach.items}
        />
        <WorksDetailFindingsSection
          headline={work.findings.headline}
          body={work.findings.body}
          items={work.findings.items}
        />
        <WorksDetailResultsSection
          headline={work.results.headline}
          description={work.results.description}
          stats={work.results.stats}
        />
        <WorksDetailVideoSection
          quote={work.video.quote}
          frontCard={work.video.frontCard}
          backCard={work.video.backCard}
          videoThumbnail={work.video.thumbnail}
        />
        <WorksDetailQuoteSection
          quote={work.results.quote}
          pdfHref={work.pdfHref}
        />
        <WorksDetailRelatedSection works={relatedWorks} />
      </main>
      <Footer />
    </>
  );
}
