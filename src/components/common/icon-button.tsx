import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full overflow-hidden flex-none",
    "transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#299EED]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        // Default — biru solid kecil
        default: [
          "bg-[#299EED] text-white",
          "hover:bg-[#1a8fd4] hover:scale-105",
          "size-[42px]",
        ],
        // Putih dengan arrow gelap
        white: [
          "bg-white text-[#0E2A54]",
          "hover:bg-[#f0f0f0] hover:scale-105",
          "size-[42px]",
        ],
        // Biru solid besar
        "blue-lg": [
          "bg-[#299EED] text-white",
          "hover:bg-[#1a8fd4] hover:scale-105",
          "size-[54px]",
        ],
        // Biru navy gelap besar
        navy: [
          "bg-[#0E2A54] text-white",
          "hover:bg-[#0a1f3e] hover:scale-105",
          "size-[54px]",
        ],
        // Outline biru navy besar
        outline: [
          "border border-[#0E2A54] bg-white text-[#0E2A54]",
          "hover:bg-[#0E2A54] hover:text-white hover:scale-105",
          "size-[54px]",
        ],
        // Biru muda (sea) besar
        sea: [
          "bg-[#A3D9F7] text-[#0E2A54]",
          "hover:bg-[#8fcee8] hover:scale-105",
          "size-[54px]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

export function IconButton({ className, variant, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(iconButtonVariants({ variant }), className)}
      {...props}
    >
      <ArrowRightIcon />
    </button>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
