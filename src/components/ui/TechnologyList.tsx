import { cn } from "@/lib/cn";

export function TechnologyList({
  items,
  invert = false,
}: {
  items: string[];
  invert?: boolean;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "kicker px-2.5 py-1 border",
            invert
              ? "border-dark-line text-dark-muted"
              : "border-line text-muted",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
