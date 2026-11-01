import type { Locale } from "@/content/types";

const copy = {
  en: {
    eyebrow: "Example",
    graphTitle: "A graph of the slow parts",
    graphText: "Where a page spends its time. This is an illustration, not a score.",
    fixTitle: "The fix",
    fixText: "Find the break, then check that the step works again.",
    pathTitle: "The path",
    pathText: "From the problem to the next practical step.",
  },
  ro: {
    eyebrow: "Exemplu",
    graphTitle: "Un grafic al părților lente",
    graphText: "Unde pierde timp o pagină. Este o ilustrație, nu un scor.",
    fixTitle: "Reparația",
    fixText: "Găsești ruptura, apoi verifici că pasul merge din nou.",
    pathTitle: "Traseul",
    pathText: "De la problemă la următorul pas practic.",
  },
} as const;

export function ContactMotion({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <div className="grid gap-4">
      <p className="kicker">{text.eyebrow}</p>
      <article className="card p-5">
        <Graph />
        <h2 className="mt-4 font-semibold">{text.graphTitle}</h2>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text.graphText}</p>
      </article>
      <article className="card p-5">
        <Fix />
        <h2 className="mt-4 font-semibold">{text.fixTitle}</h2>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text.fixText}</p>
      </article>
      <article className="card p-5">
        <Path />
        <h2 className="mt-4 font-semibold">{text.pathTitle}</h2>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{text.pathText}</p>
      </article>
    </div>
  );
}

function Graph() {
  return (
    <svg className="motion-graph" viewBox="0 0 280 92" aria-hidden="true">
      <line className="motion-axis" x1="8" y1="80" x2="272" y2="80" />
      <rect className="motion-bar" x="28" y="48" width="32" height="32" rx="5" />
      <rect className="motion-bar" x="78" y="30" width="32" height="50" rx="5" />
      <rect className="motion-bar" x="128" y="16" width="32" height="64" rx="5" />
      <rect className="motion-bar" x="178" y="38" width="32" height="42" rx="5" />
      <rect className="motion-bar" x="228" y="54" width="32" height="26" rx="5" />
    </svg>
  );
}

function Fix() {
  return (
    <svg className="motion-fix" viewBox="0 0 280 72" aria-hidden="true">
      <path className="motion-draw" d="M16 36h78" />
      <circle className="motion-node" cx="112" cy="36" r="8" />
      <path className="motion-draw" d="M128 36h78" />
      <g className="motion-node-late">
        <circle cx="232" cy="36" r="16" fill="#0f766e" />
        <path
          d="M224 36.5 229.5 42 241 30"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function Path() {
  return (
    <svg className="motion-path" viewBox="0 0 280 72" aria-hidden="true">
      <path className="motion-draw" d="M28 50 C 78 50, 78 22, 140 22 S 210 22, 252 22" />
      <circle className="motion-node" cx="28" cy="50" r="7" />
      <circle className="motion-node" cx="140" cy="22" r="7" />
      <g className="motion-node-late">
        <circle cx="252" cy="22" r="8" fill="#0f766e" />
      </g>
    </svg>
  );
}
