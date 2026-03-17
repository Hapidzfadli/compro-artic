import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brandButtonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-[5px] font-semibold",
    "transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        // Blue gradient → teal (Figma: BUTTON PRIMARY)
        primary: [
          "bg-gradient-primary text-white",
          "hover:shadow-[0_8px_30px_rgba(32,32,211,0.4)]",
          "hover:scale-[1.02]",
          "focus:ring-artic-persian",
        ],
        // Teal gradient (Figma: BUTTON SECONDARY)
        secondary: [
          "bg-gradient-secondary text-artic-ebony",
          "hover:shadow-[0_8px_30px_rgba(83,242,170,0.4)]",
          "hover:scale-[1.02]",
          "focus:ring-artic-teal-light",
        ],
        // Dark border, hover fill teal (Figma: BUTTON OUTLINE node 15021)
        outline: [
          "border border-artic-ebony text-artic-ebony bg-transparent",
          "hover:bg-gradient-secondary hover:border-transparent",
          "hover:scale-[1.02]",
          "focus:ring-artic-ebony",
        ],
        // White solid (Figma: BUTTON OUTLINE node 15188)
        white: [
          "bg-white text-artic-ebony",
          "hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]",
          "hover:scale-[1.02]",
          "focus:ring-artic-grey-200",
        ],
      },
      size: {
        sm: "h-10 px-5 text-button-xs",
        default: "h-12 px-8 text-button-sm",
        lg: "h-16 px-10 text-button-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brandButtonVariants> {}

export function BrandButton({
  className,
  variant,
  size,
  children,
  ...props
}: BrandButtonProps) {
  return (
    <button
      className={cn(brandButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
