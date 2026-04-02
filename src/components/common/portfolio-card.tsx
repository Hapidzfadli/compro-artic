import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  image: string;
  studyHref: string;
  pdfHref: string;
  showGraphics?: boolean;
  className?: string;
}

export function PortfolioCard({
  title,
  image,
  studyHref,
  pdfHref,
  showGraphics = false,
  className,
}: PortfolioCardProps) {
  return (
    <div className={cn("group relative h-92.5 overflow-hidden rounded-[15px]", className)}>
      <Image
        src={image}
        alt={title}
        fill
        className="scale-105 object-cover object-top grayscale transition-all duration-500 group-hover:scale-100 group-hover:grayscale-0"
      />

      {showGraphics && (
        <div className="pointer-events-none absolute -left-15 bottom-0 right-0 top-1/3 opacity-50 transition-opacity duration-500 group-hover:opacity-90">
          <Image
            src="/images/graphics/Graphics-wrapper-hover.svg"
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>
      )}

      {/* Blue gradient bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(19,19,127,0.85) 50%, rgba(19,19,127,1) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-8">
        {/* Mobile: static layout */}
        <div className="md:hidden">
          <h3 className="text-[20px] font-medium leading-[1.1] tracking-[-0.03em] text-white">
            {title}
          </h3>
          <div className="mt-3 flex items-center gap-2">
            <Link
              href={studyHref}
              className="flex h-10.25 flex-1 items-center justify-center rounded-[5px] bg-gradient-secondary text-[14px] font-semibold text-artic-ebony transition-opacity hover:opacity-80"
            >
              See Study Case →
            </Link>
            <Link
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10.25 flex-1 items-center justify-center rounded-[5px] border border-white text-[14px] font-semibold text-white transition-all hover:bg-white/20"
            >
              Download PDF
            </Link>
          </div>
        </div>

        {/* Desktop: hover-animated layout */}
        <div className="hidden md:block">
          <div className="translate-y-15 transition-transform duration-300 ease-out group-hover:translate-y-0">
            <h3 className="text-[22px] font-normal leading-[1.3] tracking-[-0.03em] text-white">
              {title}
            </h3>
            <div className="mt-4 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href={studyHref}
                className="flex h-11 w-40 items-center justify-center rounded-[10px] bg-gradient-secondary text-[14px] font-bold text-artic-ebony transition-opacity duration-300 hover:opacity-80"
              >
                See Study Case →
              </Link>
              <Link
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-35 items-center justify-center rounded-[10px] border border-artic-grey-100 text-[14px] font-semibold text-artic-grey-100 transition-all duration-300 hover:bg-white/20"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
