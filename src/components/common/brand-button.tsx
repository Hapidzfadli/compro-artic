import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brandButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full font-semibold",
    "transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-primary text-artic-ebony",
          "hover:shadow-[0_8px_30px_rgba(83,242,170,0.4)]",
          "hover:scale-[1.02]",
          "focus:ring-artic-teal-light",
        ],
        secondary: [
          "bg-gradient-secondary text-artic-ebony",
          "hover:shadow-[0_8px_30px_rgba(83,242,170,0.3)]",
          "hover:scale-[1.02]",
          "focus:ring-artic-teal-dark",
        ],
        outline: [
          "border-2 border-artic-grey-200 text-artic-grey-400",
          "bg-transparent",
          "hover:border-artic-teal-light hover:text-artic-teal-dark",
          "focus:ring-artic-grey-200",
        ],
      },
      size: {
        sm: "h-10 px-4 text-button-xs",
        default: "h-12 px-6 text-button-sm",
        lg: "h-14 px-8 text-button-md",
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
    VariantProps<typeof brandButtonVariants> {
  asChild?: boolean;
}

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
