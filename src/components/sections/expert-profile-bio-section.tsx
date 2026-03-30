type Expert = {
  bio: string[];
  stats: {
    citation: [number, number];
    hIndex: [number, number];
    i10Index: [number, number];
  };
};

export function ExpertProfileBioSection({ expert }: { expert: Expert }) {
  return (
    <>
      {/* Bio + Stats */}
      <section className="px-5 py-16 md:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left: bio */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-artic-teal-dark" />
              <span className="text-[14px] font-extrabold uppercase tracking-[0.06em] text-artic-grey-400">
                Expert Profile
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              {expert.bio.map((para, i) => (
                <p
                  key={i}
                  className="text-[16px] font-medium leading-[1.5] tracking-[-0.01em] text-artic-grey-400"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: citation stats */}
          <div className="border-artic-grey-100 pl-10 lg:w-[28%] lg:border-l">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-artic-teal-dark">
                Cited By
              </span>
              <span className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-artic-teal-dark">
                Since 2025
              </span>
            </div>
            <div className="mt-8 flex gap-12 text-[14px] uppercase tracking-[0.06em] text-artic-ebony">
              <div className="flex flex-col gap-5">
                <span>Citation</span>
                <span>H-Index</span>
                <span>I10-Index</span>
              </div>
              <div className="flex flex-col gap-5 text-right">
                <span>{expert.stats.citation[0]}</span>
                <span>{expert.stats.hIndex[0]}</span>
                <span>{expert.stats.i10Index[0]}</span>
              </div>
              <div className="flex flex-col gap-5 text-right">
                <span>{expert.stats.citation[1]}</span>
                <span>{expert.stats.hIndex[1]}</span>
                <span>{expert.stats.i10Index[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials */}
      <div className="px-5 pb-16 md:px-16">
        <p className="mb-7 text-[14px] font-extrabold uppercase tracking-[0.06em] text-artic-grey-400">
          Socials
        </p>
        <div className="flex items-center justify-between">
          {/* Left: IG + LinkedIn */}
          <div className="flex gap-2">
            <a
              href="#"
              className="flex h-[42px] w-[58px] items-center justify-center rounded-[8px] bg-artic-teal-light p-2 transition-opacity hover:opacity-70"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#161616">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-[42px] w-[58px] items-center justify-center rounded-[8px] bg-artic-teal-light p-2 transition-opacity hover:opacity-70"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#161616">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Right: platform badges */}
          <div className="flex gap-2">
            <a
              href="#"
              className="flex h-[42px] w-[76px] items-center justify-center rounded-[8px] bg-artic-surface transition-opacity hover:opacity-70"
              aria-label="Scopus"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/who-we-are/scopus.png" alt="Scopus" className="h-[16px] w-auto object-contain" />
            </a>
            <a
              href="#"
              className="flex h-[42px] w-[76px] items-center justify-center rounded-[8px] bg-artic-surface transition-opacity hover:opacity-70"
              aria-label="Google Scholar"
            >
              <span className="text-[14px] font-medium text-artic-grey-300">Logo</span>
            </a>
            <a
              href="#"
              className="flex h-[42px] w-[76px] items-center justify-center rounded-[8px] bg-artic-surface transition-opacity hover:opacity-70"
              aria-label="Sinta"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/who-we-are/sinta.png" alt="Sinta" className="h-[24px] w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
