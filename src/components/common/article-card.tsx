import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  href: string;
  date: string;
  title: string;
  thumbnail: string;
  className?: string;
}

export function ArticleCard({ href, date, title, thumbnail, className }: ArticleCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "hover-shadow-card group flex flex-col gap-4 overflow-hidden rounded-[9px] p-[14px] transition-shadow duration-300 md:gap-6 md:rounded-2xl md:p-5",
        className
      )}
      style={{ backgroundColor: "#F7F7FF" }}
    >
      <div className="relative h-[140px] w-full overflow-hidden rounded-[5px] md:aspect-video md:h-auto md:rounded-[10px]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        <span className="text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.72px] text-artic-teal-dark md:text-[13px] md:tracking-[0.84px]">
          {date}
        </span>
        <p className="text-[16px] font-normal leading-[1.4] tracking-[-0.32px] text-artic-ebony md:text-[15px] md:leading-[1.3] md:tracking-[-0.45px] md:text-artic-grey-400 lg:text-[17px] lg:tracking-[-0.51px]">
          {title}
        </p>
      </div>
    </Link>
  );
}
