import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-label-sm text-artic-teal-light", className)}>
      <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
      {children}
    </span>
  );
}
