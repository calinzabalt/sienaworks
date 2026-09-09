export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-3 md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] md:gap-12 py-7 md:py-8 border-t border-line">
      <h2 className="kicker text-ink pt-1">{title}</h2>
      <div className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}
