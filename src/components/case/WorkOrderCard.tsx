import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/content/case-studies";
import { caseStudyPath } from "@/content/routes";
import type { Locale } from "@/content/types";
import { keepHyphens } from "@/lib/text";

const labels = {
  en: { order: "Work order · No.", client: "Client", read: "Read the case study", video: "Video · 1 min" },
  ro: { order: "Fișă de lucrare · Nr.", client: "Client", read: "Citește studiul de caz", video: "Video · 1 min" },
} as const;

/** The case study as a work order: header strip, annotated screenshot, facts. */
export function WorkOrderCard({ study, locale, priority = false }: { study: CaseStudy; locale: Locale; priority?: boolean }) {
  const copy = study.copy[locale];
  const t = labels[locale];
  const href = caseStudyPath(study.slug, locale);
  const [first, second] = copy.highlights;
  const image = copy.image ?? study.image;

  return (
    <article className="overflow-hidden rounded-[1.4rem] border border-line bg-surface shadow-[0_2px_3px_rgba(13,17,23,.03),0_40px_80px_-60px_rgba(13,17,23,.5)]">
      <div className="mono flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line px-5 py-4 text-xs uppercase tracking-[0.08em] text-soft sm:px-7">
        <span>
          {t.order} {String(study.number).padStart(3, "0")}
        </span>
        <span>
          {t.client}: <b className="font-medium text-ink">{study.client}</b>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-2.5 py-1 tracking-[0.04em] text-accent-hover">
          ● {copy.status}
        </span>
      </div>
      <div className="job">
        <div className="job-shot">
          {image ? (
            <div className="relative w-full">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={copy.imageAlt}
                sizes="(min-width: 1240px) 640px, (min-width: 1000px) 55vw, 100vw"
                loading={priority ? "eager" : "lazy"}
                className="block h-auto w-full rounded-[10px] border border-white/10"
              />
              {copy.pins?.map((pin, i) => {
                const lift = i === 1 ? 64 : 26;
                const alignRight = pin.x > 80;
                const y = pin.y ?? 4.4;
                return (
                  <span key={pin.label} className="pin" aria-hidden="true">
                    <span className="pin-dot" style={{ left: `${pin.x}%`, top: `${y}%` }} />
                    <span className="pin-line" style={{ left: `${pin.x}%`, bottom: `${100 - y}%`, height: lift }} />
                    <span
                      className="pin-tag"
                      style={
                        alignRight
                          ? { right: 0, bottom: `calc(${100 - y}% + ${lift}px)` }
                          : { left: `${pin.x}%`, bottom: `calc(${100 - y}% + ${lift}px)`, transform: "translateX(-50%)" }
                      }
                    >
                      {pin.label}
                    </span>
                  </span>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col p-6 sm:p-10">
          <h3 className="disp m-0 text-[1.75rem] leading-[1.12] md:text-[1.9rem]">{keepHyphens(copy.title)}</h3>
          <p className="mt-4 text-[0.97rem] leading-relaxed text-muted">{copy.summary}</p>
          <dl className="fields mt-6">
            {copy.card.map((row) => (
              <div key={row.label} className="contents">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap items-end gap-7">
            {first ? (
              <div>
                <p className="disp m-0 text-6xl leading-[0.95] text-accent">{first.value}</p>
                <p className="mt-1.5 text-sm text-muted">{first.label}</p>
              </div>
            ) : null}
            {second ? (
              <div>
                <p className="disp m-0 text-6xl leading-[0.95]">{second.value}</p>
                <p className="mt-1.5 text-sm text-muted">{second.label}</p>
              </div>
            ) : null}
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Button href={href} variant="ink">
              {t.read}
            </Button>
            {copy.video ? (
              <Button href={`${href}#video`} variant="secondary" arrow={false}>
                <span aria-hidden="true" className="text-accent">
                  ▶
                </span>
                {t.video}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
