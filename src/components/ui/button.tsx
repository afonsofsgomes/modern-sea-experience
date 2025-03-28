
// This is a re-export file to solve casing issues
import * as React from "react";
import { cn } from "@/lib/utils";

// Define button variants
const buttonVariants = {
  primary: "bg-[#4A6FA5] text-white hover:bg-[#3A5A8A] shadow-sm transition-colors duration-300",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent/10 hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline hover-border-effect p-0 h-auto",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
};

// Define button sizes with larger dimensions
const buttonSizes = {
  sm: "text-xs px-3 py-2 rounded-md",
  md: "text-sm px-5 py-3 rounded-md",
  lg: "text-base px-7 py-3.5 rounded-md",
};

// Function version of buttonVariants for compatibility with shadcn components
const buttonVariantsFn = (options?: { variant?: "primary" | "secondary" | "ghost" | "link" | "outline", size?: "sm" | "md" | "lg", className?: string }) => {
  const { variant = "primary", size = "md", className = "" } = options || {};
  
  return cn(
    "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-shine mx-auto",
    buttonVariants[variant],
    buttonSizes[size],
    className
  );
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-shine mx-auto",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariantsFn, buttonVariants };
