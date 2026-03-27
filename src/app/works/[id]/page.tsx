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
    id: 3,
    title: "Citizen Satisfaction Survey – BRIDA Kota Semarang",
    category: "Artic Research",
    year: "2025",
    client: "BRIDA Kota Semarang",
    service: "Research & Survey",
    heroImage: "/images/works/brida/hero-detail.jpg",
    pdfHref: "https://drive.google.com/file/d/13AHf3GiV71cDoLZ3vK2M0fzngQfwKgl4/view?usp=sharing",
    overview: {
      headline: "Create an Impactful Satisfaction Survey with BRIDA Semarang",
      body: "Every year, public institutions across Semarang commit to improving service quality, but without a clear, trusted way to understand how citizens actually experience those services, decision-making becomes guesswork. BRIDA Semarang needed more than measurement; they needed a unified view of satisfaction that leaders could act on.",
      featuredImage: "/images/works/brida/overview-image.jpg",
      meta: {
        client: "Brida Semarang",
        team: ["Rian Destianto, S.S", "Aroffudin, S.M"],
        type: "Survey, Publication",
      },
    },
    challenges: {
      headline: "Understanding Citizen Needs at Scale",
      items: [
        {
          title: "Diverse Respondent Demographics",
          description: "Reaching citizens across different age groups, education levels, and urban-rural divides required a carefully stratified sampling approach.",
        },
        {
          title: "Multi-Service Complexity",
          description: "Measuring satisfaction across 12 distinct service areas — each with different touchpoints and expectations — demanded a flexible yet consistent framework.",
        },
        {
          title: "Turning Data into Action",
          description: "Translating thousands of survey responses into clear, prioritized recommendations that government officials could actually implement.",
        },
      ],
    },
    approach: {
      headline: "A Research-Driven, People-First Approach",
      body: "Instead of running a template survey, we worked with BRIDA to architect a measurement system built for clarity, comparability, and directional insight. We reconstructed the satisfaction model by focusing on:",
      items: [
        {
          image: "/images/works/brida/approach-1.jpg",
          title: "Stakeholder Alignment",
          description: "We began with in-depth interviews with BRIDA leadership to align research objectives with policy priorities.",
        },
        {
          image: "/images/works/brida/approach-2.jpg",
          title: "Field Survey Deployment",
          description: "Our team deployed structured surveys across 16 districts using both face-to-face and digital methods.",
        },
        {
          image: "/images/works/brida/approach-3.jpg",
          title: "Data Analysis & Reporting",
          description: "Advanced statistical methods including IPA analysis produced clear satisfaction indices and priority maps.",
        },
        {
          image: "/images/works/brida/gallery-1.jpg",
          title: "Narrative Reporting",
          description: "A narrative-based report that makes insights intuitive and actionable for decision-makers at every level.",
        },
      ],
    },
    findings: {
      headline: "Key Findings from the Citizen Survey",
      body: "From the analytics and survey, here's what we found regarding the issue from BRIDA Semarang Satisfaction Survey:",
      items: [
        {
          image: "/images/works/brida/findings-1.jpg",
          icon: "plus-circle",
          title: "Strength",
          description: "These consistently produced high satisfaction across agencies.",
          points: ["Responsive, fast service delivery", "Friendly and helpful staff", "Professional attitude improving public trust"],
        },
        {
          image: "/images/works/brida/findings-2.jpg",
          icon: "minus-circle",
          title: "Weakness",
          description: "This gap between speed and quality became the core insight of the evaluation.",
          points: ["Service quality still needs improvement", "Some outcomes didn't match public expectations", "Delivery was fast — but output wasn't always optimal"],
        },
        {
          image: "/images/works/brida/findings-1.jpg",
          icon: "bell",
          title: "Opportunities",
          description: "These areas showed strong potential for improvement with focused investment.",
          points: ["Digital service expansion", "Cross-agency satisfaction benchmarking", "Citizen feedback loop integration"],
        },
        {
          image: "/images/works/brida/findings-2.jpg",
          icon: "alert-circle",
          title: "Threats",
          description: "Systemic risks that could undermine progress if left unaddressed.",
          points: ["Low awareness of available public services", "Inconsistent service standards across districts", "Budget constraints limiting quality improvement"],
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
      headline: "Measurable Impact on Policy and Public Service",
      stats: [
        { value: "8 of 10", label: "Citizens rated services satisfactory or above" },
        { value: "85%", label: "Survey completion rate across all districts" },
        { value: "12", label: "Government service areas assessed" },
        { value: "3,200+", label: "Valid respondents collected" },
      ],
      quote: "And for the first time, Semarang now has a unified, data-driven understanding of both.",
    },
    video: {
      quote: '"When we connected perception with performance, the pattern became obvious: speed wins approval, but quality wins trust."',
      frontCard: { name: "Rian Destianto", role: "Lead Researcher", photo: "/images/video-card/dsc-088241.png" },
      backCard: { name: "Dr.Ing. Wakhidah Kurniawati", role: "Peneliti Teknik", photo: "/images/video-card/image-24.png" },
      thumbnail: "/images/works/video-section/video-bg.png",
    },
    // Card data for related section (image shown on list/related)
    image: "/images/slider-img/slide-1-color.png",
    studyHref: "/works/3",
  },
  {
    id: 2,
    title: "Youth Development Insight – Dispora Kota Semarang",
    category: "Artic Research",
    year: "2024",
    client: "Dispora Kota Semarang",
    service: "Research & Insight",
    heroImage: "/images/slider-img/slide-2.png",
    pdfHref: "#",
    overview: {
      headline: "Understanding Youth Aspirations Through Data",
      body: "We partnered with Dinas Kepemudaan dan Olahraga (Dispora) Kota Semarang to capture the voices and aspirations of young citizens — turning their experiences into evidence-based policy recommendations that shaped real city programs.",
      featuredImage: "/images/slider-img/slide-2.png",
      meta: {
        client: "Dispora Kota Semarang",
        team: ["Rian Destianto, S.S", "Aroffudin, S.M"],
        type: "Survey, Research",
      },
    },
    challenges: {
      headline: "Reaching and Representing Semarang's Youth",
      items: [
        {
          title: "Youth Engagement",
          description: "Encouraging young people to participate meaningfully in government-led research required trust-building and innovative outreach approaches.",
        },
        {
          title: "Diverse Youth Profiles",
          description: "Capturing the perspectives of students, workers, and informal youth required tailored survey instruments for each demographic.",
        },
        {
          title: "Actionable Policy Outputs",
          description: "Converting qualitative aspirations into structured policy priorities that decision-makers could implement within existing budgets.",
        },
      ],
    },
    approach: {
      headline: "Listening First, Analyzing Second",
      body: "We built our research approach around genuine dialogue with Semarang's youth — combining structured methods with community-led outreach to ensure every voice was heard and represented.",
      items: [
        {
          image: "/images/slider-img/slide-2.png",
          title: "Community Outreach",
          description: "We partnered with youth organizations and community leaders to maximize reach and authenticity of responses.",
        },
        {
          image: "/images/slider-img/slide-2.png",
          title: "Mixed-Method Research",
          description: "Combining quantitative surveys with qualitative focus group discussions gave us both breadth and depth of insight.",
        },
        {
          image: "/images/slider-img/slide-2.png",
          title: "Policy Workshop",
          description: "Results were presented in a collaborative workshop with Dispora staff to co-develop implementation recommendations.",
        },
        {
          image: "/images/slider-img/slide-2.png",
          title: "Impact Monitoring",
          description: "We established follow-up indicators to track whether policy changes translated into real improvements for youth.",
        },
      ],
    },
    findings: {
      headline: "Key Findings from the Youth Research",
      body: "From our field research and surveys, here's what we discovered about the aspirations and challenges facing Semarang's youth:",
      items: [
        { image: "/images/slider-img/slide-2.png", icon: "plus-circle", title: "Strength", description: "Areas where youth programs already perform well.", points: ["High enthusiasm for skills development programs", "Strong community organization networks", "Growing digital literacy among urban youth"] },
        { image: "/images/slider-img/slide-2.png", icon: "minus-circle", title: "Weakness", description: "Gaps that need to be addressed for meaningful impact.", points: ["Limited access to mentorship and career guidance", "Uneven program distribution across districts", "Low awareness of available government programs"] },
        { image: "/images/slider-img/slide-2.png", icon: "bell", title: "Opportunities", description: "Potential areas for investment and growth.", points: ["Vocational training partnerships with industry", "Digital entrepreneurship support programs", "Inter-agency youth data sharing"] },
        { image: "/images/slider-img/slide-2.png", icon: "alert-circle", title: "Threats", description: "Risks that could hinder youth development progress.", points: ["Youth unemployment driven by skill mismatch", "Migration of talent to other cities", "Declining civic engagement among young adults"] },
      ],
    },
    gallery: {
      headline: "Youth Voices, Captured in Data",
      images: [
        "/images/slider-img/slide-2.png",
        "/images/slider-img/slide-2.png",
        "/images/slider-img/slide-2.png",
        "/images/slider-img/slide-2.png",
      ],
    },
    results: {
      headline: "Youth Insights That Shaped City Programs",
      stats: [
        { value: "1,500+", label: "Young respondents surveyed citywide" },
        { value: "92%", label: "Completion rate among target demographic" },
        { value: "8", label: "Youth program areas assessed" },
        { value: "5", label: "Policy recommendations adopted" },
      ],
      quote: "This research gave us a real window into what young people in Semarang actually need — and the data to act on it.",
    },
    video: {
      quote: '"Every data point we gathered carried the voice of a young person who deserved to be heard — and that made every insight matter."',
      frontCard: { name: "Rian Destianto", role: "Lead Researcher", photo: "/images/video-card/dsc-088241.png" },
      backCard: { name: "Dr.Ing. Wakhidah Kurniawati", role: "Peneliti Teknik", photo: "/images/video-card/image-24.png" },
      thumbnail: "/images/works/video-section/video-bg.png",
    },
    image: "/images/slider-img/slide-2-color.png",
    studyHref: "/works/2",
  },
  {
    id: 1,
    title: "Sinau Print Digital System",
    category: "Artic Data",
    year: "2024",
    client: "Sinau Print",
    service: "Data & Digital System",
    heroImage: "/images/slider-img/slide-3.png",
    pdfHref: "#",
    overview: {
      headline: "Digitizing Print Operations with Smart Data Systems",
      body: "We designed and delivered a digital management system for Sinau Print — transforming their manual, paper-based workflows into a streamlined, data-driven operation that improved speed, accuracy, and customer satisfaction.",
      featuredImage: "/images/slider-img/slide-3.png",
      meta: {
        client: "Sinau Print",
        team: ["Aroffudin, S.M"],
        type: "Data System, Digital",
      },
    },
    challenges: {
      headline: "Moving from Manual to Digital Without Disruption",
      items: [
        {
          title: "Legacy Workflows",
          description: "Replacing paper-based order management required careful process mapping to avoid disrupting ongoing business operations.",
        },
        {
          title: "Staff Adoption",
          description: "Training non-technical staff to confidently use a new digital system required intuitive design and hands-on support.",
        },
        {
          title: "Real-Time Reporting",
          description: "Building dashboards that gave business owners instant visibility into orders, inventory, and revenue.",
        },
      ],
    },
    approach: {
      headline: "Build Simple. Build Smart. Build for People.",
      body: "We designed every step of the system around the people who would use it daily — mapping real workflows, simplifying every interaction, and ensuring a smooth transition from manual to digital.",
      items: [
        {
          image: "/images/slider-img/slide-3.png",
          title: "Process Discovery",
          description: "We mapped every step of the existing workflow to identify bottlenecks and automation opportunities.",
        },
        {
          image: "/images/slider-img/slide-3.png",
          title: "System Design",
          description: "The system was built with a mobile-first, minimal-click philosophy to ensure fast adoption by all staff levels.",
        },
        {
          image: "/images/slider-img/slide-3.png",
          title: "Deployment & Training",
          description: "Phased rollout with hands-on training sessions ensured zero disruption to daily business operations.",
        },
        {
          image: "/images/slider-img/slide-3.png",
          title: "Continuous Improvement",
          description: "Post-launch monitoring and feedback loops allowed us to refine the system based on real daily usage patterns.",
        },
      ],
    },
    findings: {
      headline: "Key Findings from the System Implementation",
      body: "After deploying and monitoring the digital system, here's what the data and user feedback revealed:",
      items: [
        { image: "/images/slider-img/slide-3.png", icon: "plus-circle", title: "Strength", description: "Core capabilities that drove the system's success.", points: ["Intuitive interface reduced training time", "Real-time order tracking improved transparency", "Automated reporting eliminated manual errors"] },
        { image: "/images/slider-img/slide-3.png", icon: "minus-circle", title: "Weakness", description: "Areas where the system still needs refinement.", points: ["Initial data migration from paper records was slow", "Some advanced features underutilized by staff", "Mobile performance needed optimization"] },
        { image: "/images/slider-img/slide-3.png", icon: "bell", title: "Opportunities", description: "Next steps that could further amplify value.", points: ["Integration with supplier inventory systems", "Customer-facing order tracking portal", "Predictive demand forecasting module"] },
        { image: "/images/slider-img/slide-3.png", icon: "alert-circle", title: "Threats", description: "Risks to sustain the system's long-term performance.", points: ["Staff turnover requiring re-training investment", "Dependency on stable internet connectivity", "Data security needs ongoing monitoring"] },
      ],
    },
    gallery: {
      headline: "A New Digital Era for Sinau Print",
      images: [
        "/images/slider-img/slide-3.png",
        "/images/slider-img/slide-3.png",
        "/images/slider-img/slide-3.png",
        "/images/slider-img/slide-3.png",
      ],
    },
    results: {
      headline: "Faster, Smarter, More Profitable Operations",
      stats: [
        { value: "60%", label: "Reduction in order processing time" },
        { value: "98%", label: "Order accuracy after system adoption" },
        { value: "3x", label: "Faster inventory reconciliation" },
        { value: "100%", label: "Staff adoption within 2 weeks" },
      ],
      quote: "The new system didn't just make us faster — it gave us the data to make smarter decisions about every part of our business.",
    },
    video: {
      quote: '"Building a system people actually use every day means designing for clarity first — the data follows naturally from there."',
      frontCard: { name: "Rian Destianto", role: "Lead Researcher", photo: "/images/video-card/dsc-088241.png" },
      backCard: { name: "Dr.Ing. Wakhidah Kurniawati", role: "Peneliti Teknik", photo: "/images/video-card/image-24.png" },
      thumbnail: "/images/works/video-section/video-bg.png",
    },
    image: "/images/slider-img/slide-3-color.png",
    studyHref: "/works/1",
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
