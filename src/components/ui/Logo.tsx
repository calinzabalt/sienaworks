import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5",
        invert ? "text-paper" : "text-ink",
      )}
      aria-label={`${site.name} — home`}
    >
      <span
        className="relative block size-2.5 shrink-0 bg-accent"
        aria-hidden="true"
      />
      <span className="text-[0.8125rem] font-medium tracking-[0.22em]">
        {site.name}
      </span>
    </Link>
  );
}
