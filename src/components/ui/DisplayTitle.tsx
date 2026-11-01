import { cn } from "@/lib/cn";

export function DisplayTitle({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2";
  className?: string;
  children: string;
}) {
  return <Tag className={cn("display-title", className)}>{children.replaceAll("-", "\u2011")}</Tag>;
}
