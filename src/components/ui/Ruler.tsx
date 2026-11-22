import { keepHyphens } from "@/lib/text";

/** A process shown along a measuring ruler; stacks into a numbered list on phones. */
export function Ruler({ steps }: { steps: { title: string; text: string }[] }) {
  const style = { "--steps": steps.length } as React.CSSProperties;
  return (
    <div className="mt-16" style={style}>
      <div className="ruler" aria-hidden="true">
        {steps.map((_, i) => (
          <span key={i}>{String(i + 1).padStart(2, "0")}</span>
        ))}
      </div>
      <ol className="steps">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{keepHyphens(step.title)}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
