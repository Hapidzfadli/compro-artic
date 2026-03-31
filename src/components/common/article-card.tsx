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
        "hover-shadow-card group flex flex-col gap-6 overflow-hidden rounded-2xl p-5 transition-shadow duration-300",
        className
      )}
      style={{ backgroundColor: "#F7F7FF" }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-[13px] font-extrabold uppercase tracking-[0.84px] text-artic-teal-dark">
          {date}
        </span>
        <p className="text-[15px] font-normal leading-[1.3] tracking-[-0.45px] text-artic-grey-400 lg:text-[17px] lg:tracking-[-0.51px]">
          {title}
        </p>
      </div>
    </Link>
  );
}
