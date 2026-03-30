import Image from "next/image";
import Link from "next/link";

type Expert = {
  name: string;
  role: string;
  fields: string[];
  image: string;
};

export function ExpertProfileBannerSection({ expert }: { expert: Expert }) {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-artic-surface">
        {/* Decorative pattern — right side */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/who-we-are/banner-pattern.png"
          alt=""
          className="pointer-events-none absolute max-w-none"
          style={{ inset: "-13.29% -13.85% -66.46% 56.98%" }}
        />

        <div className="mx-auto flex flex-col items-center justify-center gap-5 px-5 pt-20 pb-4 mb-8 md:flex-row md:items-center md:justify-start md:px-16 md:pt-32 md:pb-6 md:mb-10">
          {/* Avatar */}
          <div className="relative h-[150px] w-[150px] shrink-0 overflow-hidden rounded-full bg-[#4E4D4D] border-[5px] border-[#f3f3ff]">
            <div className="absolute inset-0 flex items-end justify-center p-2 pb-0">
              <Image
                src={expert.image}
                alt={expert.name}
                width={115}
                height={115}
                className="object-cover translate-y-1"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex min-w-0 flex-col gap-4 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-artic-ebony md:text-[36px]">
                {expert.name}
              </h1>
              <p className="text-[15px] font-extrabold uppercase tracking-[0.06em] text-artic-teal-dark md:text-[17px]">
                {expert.role}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:justify-start">
              {expert.fields.map((field) => (
                <div key={field} className="flex items-center gap-2">
                  <div className="size-[5px] rounded-full bg-artic-grey-400" />
                  <span className="text-[12px] font-normal uppercase tracking-[0.06em] text-artic-grey-400">
                    {field}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-artic-ebony py-4 px-5 md:px-16">
        <div className="flex items-center gap-4 text-[15px]">
          <Link href="/" className="font-medium text-artic-grey-100 transition-opacity hover:opacity-70">
            Home
          </Link>
          <span className="text-artic-grey-300">&gt;</span>
          <Link href="/who-we-are" className="font-medium text-artic-grey-100 transition-opacity hover:opacity-70">
            Who We Are
          </Link>
          <span className="text-artic-grey-300">&gt;</span>
          <span className="font-bold text-artic-teal-light underline underline-offset-2">
            Expert
          </span>
        </div>
      </div>
    </>
  );
}
