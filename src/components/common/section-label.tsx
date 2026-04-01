import { cn } from "@/lib/utils";

export type SectionLabelVariant = "teal" | "teal-light" | "white" | "grey" | "grey-light" | "dark";
type SectionLabelSize = "default" | "lg";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: SectionLabelVariant;
  size?: SectionLabelSize;
}

const variantClasses: Record<SectionLabelVariant, string> = {
  teal: "text-artic-teal-dark",
  "teal-light": "text-artic-teal-light",
  white: "text-white",
  grey: "text-artic-grey-400",
  "grey-light": "text-artic-grey-300",
  dark: "text-artic-ebony",
};

const sizeClasses: Record<SectionLabelSize, string> = {
  default: "text-xs font-extrabold uppercase leading-5 tracking-wide md:text-base",
  lg: "text-sm font-extrabold uppercase leading-5 tracking-wide md:text-lg",
};

export function SectionLabel({
  children,
  className,
  variant = "teal",
  size = "default",
}: SectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="size-2 shrink-0 rounded-full bg-artic-teal-dark" />
      <span className={cn(sizeClasses[size], variantClasses[variant])}>
        {children}
      </span>
    </div>
  );
}
