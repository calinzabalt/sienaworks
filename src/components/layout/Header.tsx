import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cta } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper pt-[env(safe-area-inset-top,0px)]">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden lg:block" aria-label="Primary">
          <NavLinks />
        </nav>
        <div className="hidden lg:block">
          <Button href={cta.href} size="sm">
            {cta.label}
          </Button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
