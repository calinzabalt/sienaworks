import type { ReactNode } from "react";

const HYPHENATED = /(\S*\p{L}-\p{L}\S*)/u;

/**
 * Keeps hyphenated words ("site-ul", "să-i", "e-mail") on one line, so a heading never breaks
 * right after the hyphen. Browsers treat a hyphen as a place to wrap, which splits Romanian words.
 * The text itself is unchanged; only a nowrap span is added around those words.
 */
export function keepHyphens(text: string): ReactNode {
  const parts = text.split(HYPHENATED);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
