import type { FaqItem } from "@/content/faq";

export function FaqList({
  title,
  items,
}: {
  title: string;
  items: FaqItem[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="border-t border-line bg-surface py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-8 grid gap-3">
          {items.map((item) => (
            <details key={item.question} className="card group px-5 py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-ink">
                {item.question}
                <span className="faq-mark shrink-0" aria-hidden="true" />
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
