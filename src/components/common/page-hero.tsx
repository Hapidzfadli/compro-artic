import Image from "next/image";
import { cn } from "@/lib/utils";

const heightClasses = {
  sm: "h-80 md:h-100",
  lg: "h-100",
};

const titleSizeClasses = {
  sm: "text-[36px] md:text-[55px]",
  md: "text-[40px] md:text-[64px]",
  lg: "text-[56px] md:text-[84px]",
};

interface PageHeroProps {
  src: string;
  alt?: string;
  title: React.ReactNode;
  height?: keyof typeof heightClasses;
  titleSize?: keyof typeof titleSizeClasses;
  imageClassName?: string;
  showBottomGradient?: boolean;
  className?: string;
}

export function PageHero({
  src,
  alt = "",
  title,
  height = "lg",
  titleSize = "sm",
  imageClassName,
  showBottomGradient = true,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-artic-persian",
        heightClasses[height],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", imageClassName)}
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Blue soft-light overlays */}
      <div className="absolute inset-0 bg-artic-persian mix-blend-soft-light opacity-[0.84]" />
      <div className="absolute inset-0 bg-artic-persian mix-blend-multiply opacity-[0.84]" />

      {/* Bottom fade */}
      {showBottomGradient && (
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-b from-artic-persian/0 to-artic-persian opacity-50" />
      )}

      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className={cn(
            "text-center font-medium leading-[1.1] tracking-[-0.03em] text-white",
            titleSizeClasses[titleSize]
          )}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
