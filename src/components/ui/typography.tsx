import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TypographyProps = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "muted"
    | "small"
    | "smallSemiBold"
    | "medium"
    | "mediumSemiBold"
    | "mediumBold"
    | "large"
    | "largeSemiBold"
    | "largeBold";
  className?: string;
  children: ReactNode;
};

export const Typography = ({
  variant = "p",
  className,
  children,
}: TypographyProps) => {
  const base = {
    h1: "scroll-m-20 text-2xl  md:text-3xl lg:4xl font-bold tracking-tight",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7",
    small: "text-xs sm:text-xs lg:text-sm",
    smallSemiBold: "text-xs sm:text-xs lg:text-sm font-semibold",
    muted: "text-sm text-muted-foreground",
    medium: " text-sm sm:text-sm lg:text-base",
    mediumSemiBold: " text-sm sm:text-sm lg:text-base font-semibold",
    mediumBold: " text-sm sm:text-sm lg:text-base font-bold",
    large: "text-base sm:text-lg lg:text-xl",
    largeSemiBold: "text-base sm:text-lg lg:text-xl font-semibold",
    largeBold: "text-base sm:text-lg lg:text-xl font-bold",
  };

  const Tag =
    variant === "h1" ||
    variant === "h2" ||
    variant === "h3" ||
    variant === "h4" ||
    variant === "p"
      ? variant
      : "div";

  return <Tag className={cn(base[variant], className)}>{children}</Tag>;
};
