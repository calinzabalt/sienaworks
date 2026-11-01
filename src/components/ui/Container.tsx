import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
}) {
  return (
    <Component className={cn("mx-auto w-full max-w-6xl min-w-0 px-5 sm:px-8", className)}>
      {children}
    </Component>
  );
}
