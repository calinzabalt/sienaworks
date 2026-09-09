import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function CTASection({
  title = "Have a project in mind?",
  description = "Tell us what you're building.",
  buttonLabel = "Start a Project",
  buttonHref = "/contact",
  dark = true,
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-ink text-paper border-t border-dark-line" : "bg-paper-2",
      )}
    >
      <Container>
        <p className={cn("kicker", dark ? "text-dark-muted" : "text-muted")}>
          Next
        </p>
        <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2
              className={cn(
                "font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.03em]",
                dark ? "text-paper" : "text-ink",
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mt-4 text-[1.05rem] leading-relaxed",
                dark ? "text-dark-muted" : "text-muted",
              )}
            >
              {description}
            </p>
          </div>
          <Button href={buttonHref} variant={dark ? "invert" : "primary"} className="w-full sm:w-auto shrink-0">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
