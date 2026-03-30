import Image from "next/image";
import Link from "next/link";

const MEMBERS = [
  { name: "Rian Destianto", role: "Founder & CEO", desc: "Leads Artic Analytica with a focus on insight-driven strategy, turning complex data into clear direction for clients." },
  { name: "Ahmad Fauzi", role: "Head of Research", desc: "Specializes in survey methodology and qualitative research, ensuring every study meets the highest standards of rigor." },
  { name: "Siti Rahmawati", role: "Data Scientist", desc: "Builds data pipelines and analytical models that transform raw datasets into actionable intelligence for stakeholders." },
  { name: "Budi Santoso", role: "Policy Analyst", desc: "Bridges research findings with policy recommendations, helping government and institutions implement evidence-based decisions." },
  { name: "Dewi Lestari", role: "Communications Lead", desc: "Translates complex research outputs into clear narratives, reports, and presentations for diverse audiences." },
  { name: "Hendra Wijaya", role: "Technology Expert", desc: "Drives digital innovation across Artic's platforms, from real-time dashboards to automated data collection tools." },
  { name: "Nurul Hidayah", role: "Social Research Expert", desc: "Conducts behavioral and social research that uncovers the human dimensions behind data trends and policy issues." },
  { name: "Rizky Pratama", role: "Community Engagement", desc: "Manages stakeholder mapping and community insight programs, ensuring local voices are heard in every project." },
  { name: "Mega Puspita", role: "Marketing Team", desc: "Coordinates outreach and communications strategy to connect Artic's research capabilities with new partners and clients." },
];

function SocialIcon({ icon }: { icon: "instagram" | "linkedin" }) {
  return (
    <a
      href="#"
      className="flex items-center justify-center rounded-[6px] bg-artic-teal-100 p-2.5 transition-opacity hover:opacity-70"
      aria-label={icon}
    >
      {icon === "instagram" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#161616">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#161616">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )}
    </a>
  );
}

export function WhoWeAreTeamSection() {
  return (
    <section className="bg-white py-20">
      <div className="px-5 md:px-16">
        {/* Title — centered */}
        <h2 className="mb-12 text-center text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony lg:text-[56px]">
          People at Artic
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((member, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 rounded-[18px] bg-artic-surface/30 p-5 transition-colors duration-200 hover:bg-artic-surface"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className="size-14  bg-[#4e4d4d] shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/who-we-are/profile-rian.jpg"
                    alt={member.name}
                    width={60}
                    height={60}
                    className="size-full object-cover opacity-60"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[17px] font-normal leading-[1.2] tracking-[-0.02em] text-artic-grey-400">
                    {member.name}
                  </p>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-artic-grey-300">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="flex-1 text-[12px] leading-normal tracking-[-0.02em] text-artic-grey-400">
                {member.desc}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="flex flex-1 items-center justify-center rounded-[6px] bg-artic-persian py-2 text-[11px] font-bold text-artic-surface transition-opacity hover:opacity-80"
                >
                  Learn More →
                </Link>
                <SocialIcon icon="instagram" />
                <SocialIcon icon="linkedin" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
