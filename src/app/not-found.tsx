import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-16 md:py-24">
      <p className="kicker">404</p>
      <h1 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em]">
        Page not found
      </h1>
      <p className="mt-5 max-w-md text-muted leading-relaxed">
        That URL does not match a page on this site.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back home</Button>
        <Button href="/work" variant="secondary">
          View work
        </Button>
      </div>
      <p className="mt-8 text-[0.8125rem] text-muted">
        Or go to{" "}
        <Link href="/contact" className="text-ink underline decoration-line underline-offset-4">
          contact
        </Link>
        .
      </p>
    </Container>
  );
}
